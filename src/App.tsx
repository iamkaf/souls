import {
  For,
  Show,
  batch,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import {
  CircleDashed,
  Map,
  Menu,
  RotateCcw,
  Search,
  Shield,
  Skull,
  Target,
  Undo2,
  X,
} from "lucide-solid";
import { games, type BossEntry, type GameId } from "./data/bosses";
import { bossRoutes } from "./data/routes";

type FilterMode = "all" | "remaining" | "cleared";

const STORAGE_KEY = "souls-checklist:v1";
const ACTIVE_GAME_KEY = "souls-checklist:active-game";
const SPOILER_MODE_KEY = "souls-checklist:spoiler-mode";
const DEFAULT_GAME_ID: GameId = "elden-ring";
const gameArt: Record<GameId, string> = {
  "demons-souls": "/game-art/demons-souls.jpg",
  "dark-souls": "/game-art/dark-souls.jpg",
  "dark-souls-2": "/game-art/dark-souls-2.jpg",
  bloodborne: "/game-art/bloodborne.jpg",
  "dark-souls-3": "/game-art/dark-souls-3.jpg",
  sekiro: "/game-art/sekiro.jpg",
  "elden-ring": "/game-art/elden-ring.jpg",
};

const filters: Array<{ id: FilterMode; label: string }> = [
  { id: "all", label: "All" },
  { id: "remaining", label: "Left" },
  { id: "cleared", label: "Done" },
];

const validGameIds = new Set<GameId>(games.map((game) => game.id));

function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}

function clampAnimationIndex(index: number) {
  return Math.min(index, 11);
}

function getSpoilerTeaser(boss: BossEntry) {
  const compact = boss.name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\([^)]*\)/g, "")
    .trim();
  const fillerWords = new Set(["the", "of", "and"]);
  const segments = compact.split("/").map((segment) => segment.trim());
  const teaser = segments
    .map((segment) => {
      const initials = (segment.match(/[A-Za-z0-9]+(?:'[A-Za-z0-9]+)?/g) ?? [])
        .filter((word) => !fillerWords.has(word.toLowerCase()))
        .map((word) => `${word[0].toUpperCase()}.`)
        .join(" ");

      return initials;
    })
    .filter(Boolean)
    .join(" / ")
    .trim();

  return teaser.length > 0 ? teaser : "?.";
}

function getHoverRevealText(name: string, progress: number) {
  const revealable = Array.from(name).filter((character) => /[A-Za-z0-9]/.test(character)).length;
  const revealCount = Math.round(revealable * progress);
  let revealed = 0;

  return Array.from(name)
    .map((character) => {
      if (!/[A-Za-z0-9]/.test(character)) {
        return character;
      }

      revealed += 1;
      return revealed <= revealCount ? character : "_";
    })
    .join("");
}

function matchesBossSearch(boss: BossEntry, gameTitle: string, gameLabel: string, rawQuery: string) {
  const normalizedQuery = rawQuery.trim().toLowerCase();

  if (normalizedQuery.length === 0) {
    return true;
  }

  return (
    boss.name.toLowerCase().includes(normalizedQuery) ||
    gameTitle.toLowerCase().includes(normalizedQuery) ||
    gameLabel.toLowerCase().includes(normalizedQuery) ||
    boss.region.toLowerCase().includes(normalizedQuery)
  );
}

function getDlcLabel(gameId: GameId, boss: BossEntry) {
  if (boss.content !== "dlc") {
    return null;
  }

  if (gameId === "dark-souls") {
    return "Artorias of the Abyss";
  }

  if (gameId === "dark-souls-2") {
    if (["Dragon's Sanctum", "Dragon's Rest", "Cave of the Dead"].includes(boss.region)) {
      return "Crown of the Sunken King";
    }

    if (["Iron Passage", "Brume Tower", "Memory of the Old Iron King"].includes(boss.region)) {
      return "Crown of the Old Iron King";
    }

    return "Crown of the Ivory King";
  }

  if (gameId === "bloodborne") {
    return "The Old Hunters";
  }

  if (gameId === "dark-souls-3") {
    if (["Ariandel Chapel", "Depths of the Painting"].includes(boss.region)) {
      return "Ashes of Ariandel";
    }

    return "The Ringed City";
  }

  if (gameId === "elden-ring") {
    return "Shadow of the Erdtree";
  }

  return "DLC";
}

function getDlcTheme(label: string | null) {
  if (!label) {
    return null;
  }

  switch (label) {
    case "Artorias of the Abyss":
      return "dlc-theme-abyss";
    case "Crown of the Sunken King":
      return "dlc-theme-sunken";
    case "Crown of the Old Iron King":
      return "dlc-theme-iron";
    case "Crown of the Ivory King":
      return "dlc-theme-ivory";
    case "The Old Hunters":
      return "dlc-theme-hunters";
    case "Ashes of Ariandel":
      return "dlc-theme-ashes";
    case "The Ringed City":
      return "dlc-theme-ringed";
    case "Shadow of the Erdtree":
      return "dlc-theme-erdtree";
    default:
      return "dlc-theme-default";
  }
}

function getFinalBossId(gameId: GameId) {
  const game = games.find((entry) => entry.id === gameId);

  if (!game) {
    return null;
  }

  const finalBoss = [...game.bosses].reverse().find((boss) => boss.content === "base");
  return finalBoss?.id ?? null;
}

function App() {
  const [query, setQuery] = createSignal("");
  const [filter, setFilter] = createSignal<FilterMode>("all");
  const [completed, setCompleted] = createSignal<Set<string>>(new Set());
  const [activeGameId, setActiveGameId] = createSignal<GameId>(DEFAULT_GAME_ID);
  const [spoilerMode, setSpoilerMode] = createSignal(false);
  const [supportsHoverReveal, setSupportsHoverReveal] = createSignal(false);
  const [hoveredBossId, setHoveredBossId] = createSignal<string | null>(null);
  const [hoverRevealProgress, setHoverRevealProgress] = createSignal(0);
  const [routeBossId, setRouteBossId] = createSignal<string | null>(null);
  const [revealedRouteInlineIds, setRevealedRouteInlineIds] = createSignal<Set<string>>(
    new Set<string>(),
  );
  const [ready, setReady] = createSignal(false);
  const [mobileNavOpen, setMobileNavOpen] = createSignal(false);
  let hoverAnimationFrame = 0;

  onMount(() => {
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const syncHoverCapability = () => {
      setSupportsHoverReveal(hoverQuery.matches);
    };

    syncHoverCapability();
    hoverQuery.addEventListener("change", syncHoverCapability);

    try {
      const rawCompleted = window.localStorage.getItem(STORAGE_KEY);
      const rawGame = window.localStorage.getItem(ACTIVE_GAME_KEY);

      if (rawCompleted) {
        const parsed = JSON.parse(rawCompleted) as { completedBossIds?: string[] };
        if (Array.isArray(parsed.completedBossIds)) {
          setCompleted(new Set(parsed.completedBossIds));
        }
      }

      if (rawGame && validGameIds.has(rawGame as GameId)) {
        setActiveGameId(rawGame as GameId);
      }

      const rawSpoilerMode = window.localStorage.getItem(SPOILER_MODE_KEY);
      if (rawSpoilerMode === "true") {
        setSpoilerMode(true);
      } else if (rawSpoilerMode === "false" || rawSpoilerMode === null) {
        setSpoilerMode(false);
      }
    } catch (error) {
      console.warn("Failed to restore checklist state", error);
    } finally {
      setReady(true);
    }

    onCleanup(() => {
      hoverQuery.removeEventListener("change", syncHoverCapability);
      window.cancelAnimationFrame(hoverAnimationFrame);
    });
  });

  createEffect(() => {
    if (!ready()) {
      return;
    }

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ completedBossIds: Array.from(completed()) }),
    );
  });

  createEffect(() => {
    if (!ready()) {
      return;
    }

    window.localStorage.setItem(ACTIVE_GAME_KEY, activeGameId());
  });

  createEffect(() => {
    if (!ready()) {
      return;
    }

    window.localStorage.setItem(SPOILER_MODE_KEY, spoilerMode() ? "true" : "false");
  });

  const activeGame = createMemo(
    () =>
      games.find((entry) => entry.id === activeGameId()) ??
      games.find((entry) => entry.id === DEFAULT_GAME_ID) ??
      games[0],
  );

  const activeGameStats = createMemo(() => {
    const game = activeGame();
    const clearedCount = game.bosses.filter((boss) => completed().has(boss.id)).length;
    const totalCount = game.bosses.length;

    const visibleBosses = game.bosses.filter((boss) => {
      if (!matchesBossSearch(boss, game.title, game.label, query())) {
        return false;
      }

      if (filter() === "remaining") {
        return !completed().has(boss.id);
      }

      if (filter() === "cleared") {
        return completed().has(boss.id);
      }

      return true;
    });

    return {
      clearedCount,
      totalCount,
      progress: totalCount === 0 ? 0 : (clearedCount / totalCount) * 100,
      remainingCount: Math.max(0, totalCount - clearedCount),
      visibleBosses,
    };
  });

  const getClearedCount = (gameId: GameId) =>
    games.find((entry) => entry.id === gameId)?.bosses.filter((boss) => completed().has(boss.id))
      .length ?? 0;

  const toggleBoss = (bossId: string) => {
    setCompleted((current) => {
      const next = new Set(current);

      if (next.has(bossId)) {
        next.delete(bossId);
      } else {
        next.add(bossId);
      }

      return next;
    });
  };

  const markGame = (bossIds: string[], value: boolean) => {
    setCompleted((current) => {
      const next = new Set(current);

      for (const bossId of bossIds) {
        if (value) {
          next.add(bossId);
        } else {
          next.delete(bossId);
        }
      }

      return next;
    });
  };

  const switchGame = (nextGameId: GameId) => {
    if (nextGameId === activeGameId()) {
      setMobileNavOpen(false);
      return;
    }

    batch(() => {
      setActiveGameId(nextGameId);
      setQuery("");
      setMobileNavOpen(false);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetCurrentGame = () => {
    const activeBossIds = new Set(activeGame().bosses.map((boss) => boss.id));

    setCompleted((current) => {
      const next = new Set(current);

      for (const bossId of activeBossIds) {
        next.delete(bossId);
      }

      return next;
    });
  };

  const clearSearch = () => {
    batch(() => {
      setQuery("");
      setFilter("all");
    });
  };

  const shouldHideBossName = (bossId: string) => spoilerMode() && !completed().has(bossId);
  const stopHoverReveal = () => {
    window.cancelAnimationFrame(hoverAnimationFrame);
    setHoveredBossId(null);
    setHoverRevealProgress(0);
  };

  const startHoverReveal = (bossId: string) => {
    if (!supportsHoverReveal() || !shouldHideBossName(bossId)) {
      return;
    }

    window.cancelAnimationFrame(hoverAnimationFrame);
    setHoveredBossId(bossId);
    setHoverRevealProgress(0);

    const duration = 5200;
    const startedAt = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setHoverRevealProgress(progress);

      if (progress < 1 && hoveredBossId() === bossId) {
        hoverAnimationFrame = window.requestAnimationFrame(step);
      }
    };

    hoverAnimationFrame = window.requestAnimationFrame(step);
  };

  createEffect(() => {
    if (!spoilerMode() || !supportsHoverReveal()) {
      stopHoverReveal();
    }
  });

  createEffect(() => {
    activeGameId();
    stopHoverReveal();
    setRouteBossId(null);
    setRevealedRouteInlineIds(new Set<string>());
  });

  createEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setRouteBossId(null);
        setRevealedRouteInlineIds(new Set<string>());
      }
    };

    window.addEventListener("keydown", onKeyDown);
    onCleanup(() => window.removeEventListener("keydown", onKeyDown));
  });

  const routeBoss = createMemo(() =>
    activeGame().bosses.find((boss) => boss.id === routeBossId()) ?? null,
  );
  const routeEntry = createMemo(() => {
    const boss = routeBoss();

    if (!boss) {
      return null;
    }

    return bossRoutes[boss.id] ?? null;
  });
  const routeBossLabel = createMemo(() => {
    const boss = routeBoss();

    if (!boss) {
      return null;
    }

    return shouldHideBossName(boss.id) ? getSpoilerTeaser(boss) : boss.name;
  });
  const openRoute = (bossId: string) => {
    setRevealedRouteInlineIds(new Set<string>());
    setRouteBossId(bossId);
  };
  const closeRoute = () => {
    setRouteBossId(null);
    setRevealedRouteInlineIds(new Set<string>());
  };
  const revealRouteInline = (revealId: string) => {
    setRevealedRouteInlineIds((current) => {
      const next = new Set(current);
      next.add(revealId);
      return next;
    });
  };

  return (
    <main class="min-h-screen bg-[#020202] text-zinc-100">
      <div class="mx-auto min-h-screen w-full max-w-[1680px] px-3 py-3 sm:px-4 lg:px-6">
        <div class="app-frame min-h-[calc(100vh-1.5rem)] border border-white/12 bg-black/85 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_140px_rgba(0,0,0,0.72)]">
          <div class="lg:hidden">
            <header class="app-mobile-top border-b border-white/10 px-4 py-4">
              <div class="flex items-center justify-between gap-4">
                <div class="min-w-0">
                  <p class="truncate font-display text-3xl tracking-[0.16em] text-white">
                    {activeGame().title}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileNavOpen((open) => !open)}
                  class="flex h-14 w-14 items-center justify-center border border-white/12 text-zinc-200 transition hover:border-white/30 hover:text-white"
                  aria-expanded={mobileNavOpen()}
                  aria-label={mobileNavOpen() ? "Close game navigation" : "Open game navigation"}
                >
                  <Show when={mobileNavOpen()} fallback={<Menu class="size-6" stroke-width={1.5} />}>
                    <X class="size-6" stroke-width={1.5} />
                  </Show>
                </button>
              </div>
            </header>

            <Show when={mobileNavOpen()}>
              <div class="app-mobile-nav border-b border-white/10 bg-black/95 px-4 py-4">
                <div class="grid gap-px border border-white/10 bg-white/10">
                  <For each={games}>
                    {(game, index) => (
                      <button
                        type="button"
                        onClick={() => switchGame(game.id)}
                        class={`rail-item app-stagger-item relative overflow-hidden bg-black px-3 py-3 text-left ${
                          game.id === activeGameId() ? "rail-item-active" : ""
                        }`}
                        style={{ "animation-delay": `${clampAnimationIndex(index()) * 42}ms` }}
                      >
                        <div class="flex items-start gap-4">
                          <img
                            src={gameArt[game.id]}
                            alt=""
                            class="rail-thumb mt-1 h-[4.5rem] w-[3.25rem] shrink-0 border border-white/10 object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                          <div class="min-w-0 flex-1">
                            <p class="truncate text-base uppercase tracking-[0.1em] text-white">
                              {game.title}
                            </p>
                            <p class="mt-2 text-[0.72rem] uppercase tracking-[0.22em] text-zinc-400">
                              {getClearedCount(game.id)}/{game.bosses.length}
                            </p>
                          </div>
                        </div>
                      </button>
                    )}
                  </For>
                </div>
              </div>
            </Show>
          </div>

          <div class="lg:grid lg:min-h-[calc(100vh-1.5rem)] lg:grid-cols-[17.5rem_minmax(0,1fr)]">
            <aside class="app-rail hidden min-w-0 overflow-x-hidden border-r border-white/10 lg:flex lg:flex-col">
              <div class="border-b border-white/10 px-5 py-5">
                <p class="font-display text-[3.4rem] leading-none tracking-[0.18em] text-white">
                  SOULS
                </p>
              </div>

              <div class="flex-1 overflow-y-auto overflow-x-hidden px-3 py-3">
                <div class="grid gap-px border border-white/10 bg-white/10">
                  <For each={games}>
                    {(game, index) => (
                      <button
                        type="button"
                        onClick={() => switchGame(game.id)}
                        class={`rail-item app-stagger-item relative overflow-hidden bg-black px-3 py-3 text-left ${
                          game.id === activeGameId() ? "rail-item-active" : ""
                        }`}
                        style={{ "animation-delay": `${clampAnimationIndex(index()) * 46}ms` }}
                      >
                        <div class="flex items-start gap-4">
                          <img
                            src={gameArt[game.id]}
                            alt=""
                            class="rail-thumb h-[5.5rem] w-[3.5rem] shrink-0 border border-white/10 object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                          <div class="min-w-0 flex-1">
                            <p class="truncate text-[1rem] uppercase tracking-[0.08em] text-white">
                              {game.title}
                            </p>
                            <p class="mt-2 text-[0.72rem] uppercase tracking-[0.22em] text-zinc-400">
                              {getClearedCount(game.id)}/{game.bosses.length}
                            </p>
                          </div>
                        </div>
                      </button>
                    )}
                  </For>
                </div>
              </div>

            </aside>

            <section class="app-panel min-w-0">
              <Show keyed when={activeGame()}>
                {(game) => {
                  const allCleared = () =>
                    activeGameStats().totalCount > 0 &&
                    activeGameStats().clearedCount === activeGameStats().totalCount;

                  return (
                    <div class="panel-stage">
                      <header class="game-hero relative overflow-hidden border-b border-white/10 px-5 py-4 sm:px-7 sm:py-5 lg:px-8 lg:py-5">
                        <div class="pointer-events-none absolute inset-0">
                          <div class="game-hero-overlay absolute inset-0" />
                          <img
                            src={gameArt[game.id]}
                            alt=""
                            class="game-hero-art absolute right-0 top-0 h-full w-full object-cover object-center"
                            loading="eager"
                            decoding="async"
                          />
                        </div>
                        <div class="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)] xl:items-end">
                          <div class="panel-block panel-block-delay-1 relative z-10 flex items-end justify-between gap-5">
                            <div class="min-w-0">
                              <h1 class="font-display text-[3rem] leading-none tracking-[0.12em] text-white sm:text-[4rem] xl:text-[4.8rem]">
                                {game.title}
                              </h1>
                              <p class="mt-4 text-[0.86rem] uppercase tracking-[0.26em] text-zinc-300">
                                {activeGameStats().clearedCount}/{activeGameStats().totalCount} bosses
                                recorded
                              </p>
                            </div>
                          </div>

                          <div class="panel-block panel-block-delay-2 stat-shell relative z-10 border border-white/8 bg-black/46 px-4 py-3 backdrop-blur-[2px]">
                            <div class="grid min-w-0 grid-cols-3 gap-3">
                              <article class="stat-inline min-w-0">
                                <div class="flex items-center gap-2">
                                  <Skull class="size-3 shrink-0 text-zinc-700" stroke-width={1.5} />
                                  <p class="truncate text-[0.5rem] uppercase tracking-[0.18em] text-zinc-600">
                                    Defeated
                                  </p>
                                </div>
                                <p class="mt-2 text-[1.8rem] leading-none text-zinc-100 sm:text-[2rem]">
                                  {activeGameStats().clearedCount}
                                </p>
                              </article>
                              <article class="stat-inline min-w-0">
                                <div class="flex items-center gap-2">
                                  <Shield class="size-3 shrink-0 text-zinc-700" stroke-width={1.5} />
                                  <p class="truncate text-[0.5rem] uppercase tracking-[0.18em] text-zinc-600">
                                    Remaining
                                  </p>
                                </div>
                                <p class="mt-2 text-[1.8rem] leading-none text-zinc-100 sm:text-[2rem]">
                                  {activeGameStats().remainingCount}
                                </p>
                              </article>
                              <article class="stat-inline min-w-0">
                                <div class="flex items-center gap-2">
                                  <Target class="size-3 shrink-0 text-zinc-700" stroke-width={1.5} />
                                  <p class="truncate text-[0.5rem] uppercase tracking-[0.18em] text-zinc-600">
                                    Completion
                                  </p>
                                </div>
                                <p class="mt-2 text-[1.8rem] leading-none text-zinc-100 sm:text-[2rem]">
                                  {formatPercent(activeGameStats().progress)}
                                </p>
                              </article>
                            </div>
                          </div>
                        </div>
                      </header>

                      <div class="border-b border-white/10 px-5 py-4 sm:px-7 lg:px-8">
                        <div class="panel-block panel-block-delay-3 grid gap-4 xl:grid-cols-[minmax(0,1fr)_13rem_13rem_10rem]">
                          <div class="space-y-3">
                            <div class="flex items-center justify-between gap-3">
                              <p class="text-[0.66rem] uppercase tracking-[0.38em] text-zinc-500">
                                Search
                              </p>
                              <Search class="size-4 text-zinc-600" stroke-width={1.5} />
                            </div>
                            <div class="flex items-end gap-3 border-b border-white/12 pb-3">
                              <label class="block min-w-0 flex-1" for="boss-search">
                                <input
                                  id="boss-search"
                                  value={query()}
                                  onInput={(event) => setQuery(event.currentTarget.value)}
                                  placeholder={`Search ${game.title} bosses...`}
                                  class="w-full border-none bg-transparent p-0 text-lg text-white outline-none placeholder:text-zinc-600 sm:text-xl"
                                  autocomplete="off"
                                  spellcheck={false}
                                />
                              </label>
                              <button
                                type="button"
                                onClick={clearSearch}
                                class="shrink-0 border border-sky-900/14 bg-sky-950/5 px-2.5 py-1.5 text-[0.55rem] uppercase tracking-[0.12em] text-sky-100/54 transition hover:border-sky-700/22 hover:bg-sky-950/9 hover:text-sky-50/84"
                              >
                                Clear
                              </button>
                            </div>
                          </div>

                          <div class="space-y-3">
                            <div class="flex items-center justify-between gap-3">
                              <p class="text-[0.66rem] uppercase tracking-[0.38em] text-zinc-500">
                                Filter
                              </p>
                              <CircleDashed class="size-4 text-zinc-600" stroke-width={1.5} />
                            </div>
                            <div class="grid grid-cols-3 gap-px border border-white/10 bg-white/10">
                              <For each={filters}>
                                {(item) => (
                                  <button
                                    type="button"
                                    onClick={() => setFilter(item.id)}
                                    class={`min-w-0 bg-black px-1.5 py-2.5 text-center text-[0.55rem] uppercase tracking-[0.08em] transition sm:text-[0.6rem] ${
                                      filter() === item.id
                                        ? "text-white"
                                        : "text-zinc-500 hover:text-zinc-300"
                                    }`}
                                  >
                                    {item.label}
                                  </button>
                                )}
                              </For>
                            </div>
                          </div>

                          <div class="space-y-3">
                            <div class="flex items-center justify-between gap-3">
                              <p class="text-[0.66rem] uppercase tracking-[0.38em] text-zinc-500">
                                Actions
                              </p>
                              <RotateCcw class="size-4 text-zinc-600" stroke-width={1.5} />
                            </div>
                            <div class="grid grid-cols-2 gap-px border border-white/10 bg-white/10">
                              <button
                                type="button"
                                onClick={() => markGame(game.bosses.map((boss) => boss.id), !allCleared())}
                                class="flex items-center justify-between gap-2 bg-black px-2 py-2.5 text-left text-[0.55rem] uppercase tracking-[0.08em] text-emerald-100/58 transition hover:bg-emerald-950/10 hover:text-emerald-50/84"
                              >
                                <span>{allCleared() ? "Unmark" : "Mark clear"}</span>
                                <Target class="size-3.5 shrink-0 text-emerald-300/42" stroke-width={1.5} />
                              </button>
                              <button
                                type="button"
                                onClick={resetCurrentGame}
                                class="flex items-center justify-between gap-2 border-l border-white/10 bg-black px-2 py-2.5 text-left text-[0.55rem] uppercase tracking-[0.08em] text-amber-100/58 transition hover:bg-amber-950/10 hover:text-amber-50/84"
                              >
                                <span>Reset game</span>
                                <Undo2 class="size-3.5 shrink-0 text-amber-300/42" stroke-width={1.5} />
                              </button>
                            </div>
                          </div>

                          <div class="space-y-3">
                            <div class="flex items-center justify-between gap-3">
                              <p class="text-[0.66rem] uppercase tracking-[0.38em] text-zinc-500">
                                Spoilers
                              </p>
                              <Skull class="size-4 text-zinc-600" stroke-width={1.5} />
                            </div>
                            <button
                              type="button"
                              aria-pressed={spoilerMode()}
                              onClick={() => setSpoilerMode((value) => !value)}
                              class={`spoiler-toggle flex w-full items-center justify-between gap-3 border px-3 py-2.5 text-left text-[0.62rem] uppercase tracking-[0.18em] transition ${
                                spoilerMode()
                                  ? "border-white/18 bg-white/[0.06] text-white"
                                  : "border-white/10 bg-black text-zinc-500 hover:text-zinc-300"
                              }`}
                            >
                              <span>Spoilers</span>
                              <span class="text-[0.55rem] tracking-[0.22em] text-zinc-500">
                                {spoilerMode() ? "On" : "Off"}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="px-5 py-4 sm:px-7 lg:px-8">
                        <div class="panel-block panel-block-delay-4 mb-6 space-y-3">
                          <div class="flex items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.35em] text-zinc-500">
                            <span>
                              {activeGameStats().clearedCount}/{activeGameStats().totalCount} bosses
                              recorded
                            </span>
                          </div>
                          <div class="panel-progress h-px bg-white/10">
                            <div
                              class="h-px bg-white"
                              style={{ width: `${activeGameStats().progress}%` }}
                            />
                          </div>
                        </div>

                        <Show
                          when={activeGameStats().visibleBosses.length > 0}
                          fallback={
                            <div class="panel-block panel-block-delay-4 border border-white/10 bg-black/70 px-6 py-14 text-center">
                              <p class="font-display text-4xl tracking-[0.16em] text-white">
                                NO TRACE
                              </p>
                              <p class="mt-4 text-lg uppercase tracking-[0.24em] text-zinc-500">
                                Nothing matches inside {game.title}.
                              </p>
                            </div>
                          }
                        >
                          <div class="grid gap-px border border-white/10 bg-white/10">
                            <For each={activeGameStats().visibleBosses}>
                              {(boss, index) => {
                                const isDone = () => completed().has(boss.id);
                                const dlcLabel = getDlcLabel(game.id, boss);
                                const dlcTheme = getDlcTheme(dlcLabel);
                                const isFinalBoss = boss.id === getFinalBossId(game.id);
                                const isHidden = () => shouldHideBossName(boss.id);
                                const teaser = getSpoilerTeaser(boss);
                                const isHoverRevealing = () =>
                                  isHidden() && supportsHoverReveal() && hoveredBossId() === boss.id;
                                const accessibleLabel = () =>
                                  isHidden()
                                    ? `${teaser}, ${boss.region}${boss.optional ? ", optional" : ""}`
                                    : `${boss.name}, ${boss.region}${boss.optional ? ", optional" : ""}`;

                                return (
                                  <div
                                    onMouseEnter={() => startHoverReveal(boss.id)}
                                    onMouseLeave={() => {
                                      if (hoveredBossId() === boss.id) {
                                        stopHoverReveal();
                                      }
                                    }}
                                    class={`boss-row boss-row-enter group relative bg-black px-4 py-5 text-left transition sm:px-5 ${
                                      boss.content === "dlc" ? `boss-row-dlc ${dlcTheme}` : ""
                                    } ${
                                      isFinalBoss ? "boss-row-finale" : ""
                                    } ${
                                      isHidden() ? "boss-row-hidden" : ""
                                    } ${
                                      isDone()
                                        ? "border-l border-l-white text-white"
                                        : "text-zinc-200 hover:bg-white/[0.03]"
                                    }`}
                                    style={{
                                      "animation-delay": `${clampAnimationIndex(index()) * 24}ms`,
                                    }}
                                  >
                                    <div class="flex items-start gap-5">
                                      <button
                                        type="button"
                                        onClick={() => toggleBoss(boss.id)}
                                        aria-label={accessibleLabel()}
                                        class={`mt-1 flex size-7 shrink-0 items-center justify-center border transition ${
                                          isDone()
                                            ? "border-white bg-white text-black"
                                            : "border-white/22 text-transparent group-hover:border-white/44"
                                        }`}
                                      >
                                        {isDone() ? (
                                          <Skull class="size-4 text-black" stroke-width={2} />
                                        ) : null}
                                      </button>

                                      <div class="min-w-0 flex-1">
                                        <div class="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
                                          <div class="min-w-0">
                                            <button
                                              type="button"
                                              onClick={() => toggleBoss(boss.id)}
                                              aria-label={accessibleLabel()}
                                              class="block min-w-0 text-left"
                                            >
                                              <Show
                                                when={!isHidden()}
                                                fallback={
                                                  <div class="space-y-2">
                                                    <p class="boss-title boss-title-hidden text-xl leading-8 text-zinc-200 sm:text-[1.45rem]">
                                                      {isHoverRevealing()
                                                        ? getHoverRevealText(
                                                            boss.name,
                                                            hoverRevealProgress(),
                                                          )
                                                        : teaser}
                                                    </p>
                                                    <Show when={supportsHoverReveal()}>
                                                      <div class="spoiler-progress h-px bg-white/10">
                                                        <div
                                                          class="spoiler-progress-fill h-px bg-white/45"
                                                          style={{
                                                            width: `${isHoverRevealing() ? hoverRevealProgress() * 100 : 0}%`,
                                                          }}
                                                        />
                                                      </div>
                                                    </Show>
                                                  </div>
                                                }
                                              >
                                                <p class="boss-title text-xl leading-8 text-white sm:text-[1.45rem]">
                                                  {boss.name}
                                                </p>
                                              </Show>
                                            </button>
                                            <Show when={boss.region || dlcLabel}>
                                              <p class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.78rem] uppercase tracking-[0.26em] text-zinc-600 sm:text-[0.82rem]">
                                                {boss.region}
                                                <Show when={isFinalBoss}>
                                                  <span class="boss-finale-plaque text-[0.62rem] tracking-[0.3em] text-zinc-100/82">
                                                    Final Boss
                                                  </span>
                                                </Show>
                                                <Show when={dlcLabel}>
                                                  <span
                                                    class={`boss-dlc-plaque ${dlcTheme} text-[0.62rem] tracking-[0.3em]`}
                                                  >
                                                    {dlcLabel}
                                                  </span>
                                                </Show>
                                              </p>
                                            </Show>
                                          </div>

                                          <Show when={boss.optional}>
                                            <p class="text-[0.72rem] uppercase tracking-[0.28em] text-zinc-500">
                                              Optional
                                            </p>
                                          </Show>
                                        </div>
                                      </div>

                                      <button
                                        type="button"
                                        onClick={() => openRoute(boss.id)}
                                        class="route-trigger mt-1 flex h-8 shrink-0 items-center gap-2 border border-white/10 px-2 text-[0.55rem] uppercase tracking-[0.18em] text-zinc-500 transition hover:border-white/22 hover:text-zinc-200"
                                        aria-label={`Open route for ${accessibleLabel()}`}
                                      >
                                        <Map class="size-3.5 shrink-0" stroke-width={1.5} />
                                        <span class="hidden sm:inline">Route</span>
                                      </button>
                                    </div>
                                  </div>
                                );
                              }}
                            </For>
                          </div>
                        </Show>
                      </div>
                    </div>
                  );
                }}
              </Show>
            </section>
          </div>
        </div>
      </div>

      <Show when={routeBoss()}>
        {(boss) => (
          <div
            class="route-modal fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-[2px]"
            onClick={closeRoute}
          >
            <div
              class="route-modal-panel w-full max-w-2xl border border-white/12 bg-[#050505] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_120px_rgba(0,0,0,0.78)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div class="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
                <div class="min-w-0">
                  <p class="text-[0.66rem] uppercase tracking-[0.34em] text-zinc-500">Route</p>
                  <h2 class="mt-3 font-display text-3xl leading-none tracking-[0.1em] text-white sm:text-[3.4rem]">
                    {routeBossLabel()}
                  </h2>
                  <p class="mt-3 text-[0.8rem] uppercase tracking-[0.28em] text-zinc-500">
                    {boss().region}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeRoute}
                  class="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-zinc-400 transition hover:border-white/24 hover:text-white"
                  aria-label="Close route modal"
                >
                  <X class="size-5" stroke-width={1.5} />
                </button>
              </div>

              <section class="border-t border-white/10 px-5 py-5 sm:px-6">
                <p class="text-[0.66rem] uppercase tracking-[0.34em] text-zinc-500">Path</p>
                <div class="mt-4 space-y-5 text-[1rem] leading-8 text-zinc-300 sm:text-[1.05rem]">
                  <Show
                    when={routeEntry()}
                    fallback={
                      <p>
                        Route text has not been authored yet for this boss. This modal is in place so each boss can receive a dedicated path without another UI pass.
                      </p>
                    }
                  >
                    {(entry) => (
                      <For each={entry().paragraphs}>
                        {(paragraph) => (
                          <p>
                            {paragraph.textBefore ?? ""}
                            <Show when={paragraph.reveal}>
                              {(reveal) => (
                                <Show
                                  when={revealedRouteInlineIds().has(reveal().id)}
                                  fallback={
                                    <>
                                      {" "}
                                      <button
                                        type="button"
                                        onClick={() => revealRouteInline(reveal().id)}
                                        class="route-inline-reveal inline-flex items-center gap-2 border border-white/10 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.2em] text-zinc-400 align-middle transition hover:border-white/22 hover:text-zinc-200"
                                      >
                                        {reveal().buttonLabel}
                                      </button>
                                      {" "}
                                    </>
                                  }
                                >
                                  <span class="route-inline-revealed text-zinc-100">
                                    {reveal().hiddenText}
                                  </span>
                                </Show>
                              )}
                            </Show>
                            {paragraph.textAfter ?? ""}
                          </p>
                        )}
                      </For>
                    )}
                  </Show>
                </div>
              </section>
            </div>
          </div>
        )}
      </Show>
    </main>
  );
}

export default App;
