import { writeFile } from "node:fs/promises";
import vm from "node:vm";

const LISTIUM_JSONLD =
  /<script data-react-helmet="true" type="application\/ld\+json">([\s\S]*?)<\/script>/;

const CONTENT = {
  BASE: "base",
  DLC: "dlc",
};

const listiumSources = {
  ds1: "https://listium.com/%40gamingcollective/76528/all-dark-souls-1-bosses",
  ds2: "https://listium.com/%40gamingcollective/77036/all-dark-souls-2-bosses",
  bb: "https://listium.com/%40gamingcollective/76727/bloodborne-bosses-in-order",
  ds3: "https://listium.com/%40gamingcollective/77224/dark-souls-3-bosses-in-order",
  sekiro: "https://listium.com/%40gamingcollective/76754/sekiro-shadows-die-twice-bosses-in-order",
};

const demonsSouls = [
  ["Phalanx", "Boletarian Palace", false, CONTENT.BASE],
  ["Tower Knight", "Boletarian Palace", false, CONTENT.BASE],
  ["Penetrator", "Boletarian Palace", false, CONTENT.BASE],
  ["Old King Allant", "Boletarian Palace", false, CONTENT.BASE],
  ["Red Dragon", "Boletarian Palace", true, CONTENT.BASE],
  ["Blue Dragon", "Boletarian Palace", true, CONTENT.BASE],
  ["Armor Spider", "Stonefang Tunnel", false, CONTENT.BASE],
  ["Flamelurker", "Stonefang Tunnel", false, CONTENT.BASE],
  ["Dragon God", "Stonefang Tunnel", false, CONTENT.BASE],
  ["Fool's Idol", "Tower of Latria", false, CONTENT.BASE],
  ["Maneater", "Tower of Latria", false, CONTENT.BASE],
  ["Old Monk", "Tower of Latria", false, CONTENT.BASE],
  ["Adjudicator", "Shrine of Storms", false, CONTENT.BASE],
  ["Old Hero", "Shrine of Storms", false, CONTENT.BASE],
  ["Storm King", "Shrine of Storms", false, CONTENT.BASE],
  ["Leechmonger", "Valley of Defilement", false, CONTENT.BASE],
  ["Dirty Colossus", "Valley of Defilement", false, CONTENT.BASE],
  ["Maiden Astraea", "Valley of Defilement", false, CONTENT.BASE],
  ["Vanguard", "Shrine of Storms", true, CONTENT.BASE],
  ["King Allant", "The Nexus", false, CONTENT.BASE],
];

const darkSoulsMetadata = [
  ["Asylum Demon", "Northern Undead Asylum", CONTENT.BASE],
  ["Taurus Demon", "Undead Burg", CONTENT.BASE],
  ["Hellkite Dragon / The Bridge Wyvern", "Undead Burg", CONTENT.BASE],
  ["Bell Gargoyles", "Undead Parish", CONTENT.BASE],
  ["Capra Demon", "Lower Undead Burg", CONTENT.BASE],
  ["Moonlight Butterfly", "Darkroot Garden", CONTENT.BASE],
  ["Gaping Dragon", "The Depths", CONTENT.BASE],
  ["Stray Demon", "Northern Undead Asylum", CONTENT.BASE],
  ["Chaos Witch Quelaag", "Quelaag's Domain", CONTENT.BASE],
  ["Great Grey Wolf Sif", "Darkroot Garden", CONTENT.BASE],
  ["Hydra", "Darkroot Basin", CONTENT.BASE],
  ["Iron Golem", "Sen's Fortress", CONTENT.BASE],
  ["Crossbreed Priscilla", "Painted World of Ariamis", CONTENT.BASE],
  ["Ornstein and Smough", "Anor Londo", CONTENT.BASE],
  ["Dark Sun Gwyndolin", "Anor Londo", CONTENT.BASE],
  ["Pinwheel", "The Catacombs", CONTENT.BASE],
  ["Gravelord Nito", "Tomb of the Giants", CONTENT.BASE],
  ["Seath the Scaleless", "Crystal Cave", CONTENT.BASE],
  ["The Four Kings", "New Londo Ruins", CONTENT.BASE],
  ["Ceaseless Discharge", "Demon Ruins", CONTENT.BASE],
  ["Centipede Demon", "Demon Ruins", CONTENT.BASE],
  ["Firesage Demon", "Demon Ruins", CONTENT.BASE],
  ["Bed of Chaos", "Lost Izalith", CONTENT.BASE],
  ["Gwyn, Lord of Cinder", "Kiln of the First Flame", CONTENT.BASE],
  ["Sanctuary Guardian", "Sanctuary Garden", CONTENT.DLC],
  ["Artorias the Abysswalker", "Oolacile Township", CONTENT.DLC],
  ["Black Dragon Kalameet", "Royal Wood", CONTENT.DLC],
  ["Manus, Father of the Abyss", "Chasm of the Abyss", CONTENT.DLC],
];

const darkSouls2Metadata = [
  ["The Last Giant", "Forest of Fallen Giants", CONTENT.BASE],
  ["The Pursuer", "Forest of Fallen Giants", CONTENT.BASE],
  ["Executioner's Chariot", "Huntsman's Copse", CONTENT.BASE],
  ["Looking Glass Knight", "Drangleic Castle", CONTENT.BASE],
  ["The Skeleton Lords", "Huntsman's Copse", CONTENT.BASE],
  ["Flexile Sentry", "No-Man's Wharf", CONTENT.BASE],
  ["Lost Sinner", "Sinner's Rise", CONTENT.BASE],
  ["Belfry Gargoyles", "Belfry Luna", CONTENT.BASE],
  ["Ruin Sentinels", "The Lost Bastille", CONTENT.BASE],
  ["Royal Rat Vanguard", "Grave of Saints", CONTENT.BASE],
  ["Royal Rat Authority", "Doors of Pharros", CONTENT.BASE],
  ["Scorpioness Najka", "Shaded Woods", CONTENT.BASE],
  ["The Duke's Dear Freja", "Brightstone Cove Tseldora", CONTENT.BASE],
  ["Mytha, The Baneful Queen", "Earthen Peak", CONTENT.BASE],
  ["The Rotten", "Black Gulch", CONTENT.BASE],
  ["Old Dragonslayer", "Heide's Tower of Flame", CONTENT.BASE],
  ["Covetous Demon", "Earthen Peak", CONTENT.BASE],
  ["Smelter Demon", "Iron Keep", CONTENT.BASE],
  ["Old Iron King", "Iron Keep", CONTENT.BASE],
  ["Guardian Dragon", "Aldia's Keep", CONTENT.BASE],
  ["Demon of Song", "Shrine of Amana", CONTENT.BASE],
  ["Velstadt, The Royal Aegis", "Undead Crypt", CONTENT.BASE],
  ["Vendrick", "Undead Crypt", CONTENT.BASE],
  ["Darklurker", "Dark Chasm of Old", CONTENT.BASE],
  ["Dragonrider", "Heide's Tower of Flame", CONTENT.BASE],
  ["Twin Dragonriders", "Drangleic Castle", CONTENT.BASE],
  ["Prowling Magus and Congregation", "Brightstone Cove Tseldora", CONTENT.BASE],
  ["Giant Lord", "Memory of Jeigh", CONTENT.BASE],
  ["Ancient Dragon", "Dragon Shrine", CONTENT.BASE],
  ["Throne Watcher and Throne Defender", "Throne of Want", CONTENT.BASE],
  ["Nashandra", "Throne of Want", CONTENT.BASE],
  ["Aldia, Scholar of The First Sin", "Throne of Want", CONTENT.BASE],
  ["Elana, Squalid Queen", "Dragon's Sanctum", CONTENT.DLC],
  ["Sinh, The Slumbering Dragon", "Dragon's Rest", CONTENT.DLC],
  [
    "Afflicted Graverobber, Ancient Soldier Varg and Cerah The Old Explorer",
    "Cave of the Dead",
    CONTENT.DLC,
  ],
  ["Blue Smelter Demon", "Iron Passage", CONTENT.DLC],
  ["Fume Knight", "Brume Tower", CONTENT.DLC],
  ["Sir Alonne", "Memory of the Old Iron King", CONTENT.DLC],
  ["Burnt Ivory King", "Old Chaos", CONTENT.DLC],
  ["Aava, The King's Pet", "Frozen Eleum Loyce", CONTENT.DLC],
  ["Lud and Zallen, The King's Pets", "Frigid Outskirts", CONTENT.DLC],
];

const bloodborneMetadata = [
  ["Cleric Beast", "Central Yharnam", CONTENT.BASE],
  ["Father Gascoigne", "Tomb of Oedon", CONTENT.BASE],
  ["Blood-Starved Beast", "Old Yharnam", CONTENT.BASE],
  ["Vicar Amelia", "Grand Cathedral", CONTENT.BASE],
  ["The Witch of Hemwick", "Hemwick Charnel Lane", CONTENT.BASE],
  ["Darkbeast Paarl", "Hypogean Gaol", CONTENT.BASE],
  ["Shadow of Yharnam", "Forbidden Woods", CONTENT.BASE],
  ["Rom, The Vacuous Spider", "Moonside Lake", CONTENT.BASE],
  ["The One Reborn", "Yahar'gul", CONTENT.BASE],
  ["Martyr Logarius", "Forsaken Castle Cainhurst", CONTENT.BASE],
  ["Amygdala", "Nightmare Frontier", CONTENT.BASE],
  ["Celestial Emissary", "Upper Cathedral Ward", CONTENT.BASE],
  ["Ebrietas, Daughter of the Cosmos", "Altar of Despair", CONTENT.BASE],
  ["Micolash, Host of the Nightmare", "Nightmare of Mensis", CONTENT.BASE],
  ["Mergo’s Wet Nurse", "Mergo's Loft", CONTENT.BASE],
  ["Gehrman, the First Hunter", "Hunter's Dream", CONTENT.BASE],
  ["Moon Presence", "Hunter's Dream", CONTENT.BASE],
  ["Undead Giant", "Pthumeru Chalice", CONTENT.BASE],
  ["Merciless Watcher", "Pthumeru Chalice", CONTENT.BASE],
  ["Watchdog of the Old Lords", "Defiled Chalice", CONTENT.BASE],
  ["Beast-possessed Soul", "Ailing Loran", CONTENT.BASE],
  ["Keeper of the Old Lords", "Defiled Chalice", CONTENT.BASE],
  ["Pthumerian Descendant", "Great Pthumeru Ihyll", CONTENT.BASE],
  ["Maneater Boar", "Pthumeru Chalice", CONTENT.BASE],
  ["Bloodletting Beast", "Great Pthumeru Ihyll", CONTENT.BASE],
  ["Brainsucker", "Isz Gravestone", CONTENT.BASE],
  ["Forgotten Madman", "Lower Pthumeru Chalice", CONTENT.BASE],
  ["Pthumerian Elder", "Lower Hintertomb", CONTENT.BASE],
  ["Abhorrent Beast", "Ailing Loran", CONTENT.BASE],
  ["Loran Silverbeast", "Lower Loran", CONTENT.BASE],
  ["Loran Darkbeast", "Lower Loran", CONTENT.BASE],
  ["Yharnam, Pthumerian Queen", "Great Pthumeru Ihyll", CONTENT.BASE],
  ["Headless Bloodletting Beast", "Great Pthumeru Ihyll", CONTENT.BASE],
  ["Ludwig, the Accursed / Ludwig, the Holy Blade", "Hunter's Nightmare", CONTENT.DLC],
  ["Laurence, the First Vicar", "Grand Cathedral", CONTENT.DLC],
  ["Living Failures", "Research Hall", CONTENT.DLC],
  ["Lady Maria of the Astral Clocktower", "Astral Clocktower", CONTENT.DLC],
  ["Orphan of Kos", "Fishing Hamlet", CONTENT.DLC],
];

const darkSouls3Metadata = [
  ["Iudex Gundyr", "Cemetery of Ash", CONTENT.BASE],
  ["Vordt of the Boreal Valley", "High Wall of Lothric", CONTENT.BASE],
  ["Curse-Rotted Greatwood", "Undead Settlement", CONTENT.BASE],
  ["Crystal Sage", "Road of Sacrifices", CONTENT.BASE],
  ["Abyss Watchers", "Farron Keep", CONTENT.BASE],
  ["Deacons of the Deep", "Cathedral of the Deep", CONTENT.BASE],
  ["High Lord Wolnir", "Catacombs of Carthus", CONTENT.BASE],
  ["Old Demon King", "Smouldering Lake", CONTENT.BASE],
  ["Pontiff Sulyvahn", "Irithyll of the Boreal Valley", CONTENT.BASE],
  ["Yhorm the Giant", "Profaned Capital", CONTENT.BASE],
  ["Aldrich, Devourer of Gods", "Anor Londo", CONTENT.BASE],
  ["Dancer of the Boreal Valley", "High Wall of Lothric", CONTENT.BASE],
  ["Dragonslayer Armour", "Lothric Castle", CONTENT.BASE],
  ["Oceiros, the Consumed King", "Consumed King's Garden", CONTENT.BASE],
  ["Champion Gundyr", "Untended Graves", CONTENT.BASE],
  ["Lothric, Younger Prince", "Grand Archives", CONTENT.BASE],
  ["Ancient Wyvern", "Archdragon Peak", CONTENT.BASE],
  ["Nameless King", "Archdragon Peak", CONTENT.BASE],
  ["Soul of Cinder", "Kiln of the First Flame", CONTENT.BASE],
  ["Sister Friede", "Ariandel Chapel", CONTENT.DLC],
  ["Champion's Gravetender & Gravetender Greatwolf", "Depths of the Painting", CONTENT.DLC],
  ["Demon in Pain & Demon From Below / Demon Prince", "The Dreg Heap", CONTENT.DLC],
  ["Halflight, Spear of the Church", "Church of Filianore", CONTENT.DLC],
  ["Darkeater Midir", "The Ringed City", CONTENT.DLC],
  ["Slave Knight Gael", "Filianore's Rest", CONTENT.DLC],
];

const sekiroMetadata = [
  ["General Naomori Kawarada", "Ashina Outskirts", CONTENT.BASE],
  ["Chained Ogre", "Ashina Outskirts", CONTENT.BASE],
  ["General Tenzen Yamauchi", "Ashina Outskirts", CONTENT.BASE],
  ["Gyoubu Oniwa", "Ashina Outskirts", CONTENT.BASE],
  ["Shinobi Hunter Enshin of Misen", "Hirata Estate", CONTENT.BASE],
  ["Juzou the Drunkard", "Hirata Estate", CONTENT.BASE],
  ["Lady Butterfly", "Hirata Estate", CONTENT.BASE],
  ["Blazing Bull", "Ashina Castle", CONTENT.BASE],
  ["General Kuranosuke Matsumoto", "Ashina Castle", CONTENT.BASE],
  ["Seven Ashina Spears – Shikibu Toshikatsu Yamauchi", "Ashina Reservoir", CONTENT.BASE],
  ["Lone Shadow Longswordsman", "Ashina Reservoir", CONTENT.BASE],
  ["Ashina Elite – Jinsuke Saze", "Ashina Castle", CONTENT.BASE],
  ["Genichiro Ashina", "Ashina Castle", CONTENT.BASE],
  ["Armored Warrior", "Senpou Temple, Mt. Kongo", CONTENT.BASE],
  ["Long-arm Centipede Sen’un", "Senpou Temple, Mt. Kongo", CONTENT.BASE],
  ["Folding Screen Monkeys", "Hall of Illusions", CONTENT.BASE],
  ["Snake Eyes Shirahagi", "Ashina Depths", CONTENT.BASE],
  ["Tokujiro the Glutton", "Ashina Depths", CONTENT.BASE],
  ["Mist Noble", "Mibu Village", CONTENT.BASE],
  ["O’rin of the Water", "Mibu Village", CONTENT.BASE],
  ["Corrupted Monk", "Mibu Village", CONTENT.BASE],
  ["Snake Eyes Shirafuji", "Sunken Valley", CONTENT.BASE],
  ["Long-arm Centipede Giraffe", "Gun Fort", CONTENT.BASE],
  ["Guardian Ape", "Sunken Valley", CONTENT.BASE],
  ["Lone Shadow Vilehand", "Ashina Castle", CONTENT.BASE],
  ["Emma, The Gentle Blade", "Ashina Castle", CONTENT.BASE],
  ["Isshin Ashina", "Ashina Castle", CONTENT.BASE],
  ["Great Shinobi Owl", "Ashina Castle", CONTENT.BASE],
  ["True Corrupted Monk", "Fountainhead Palace", CONTENT.BASE],
  ["Great Serpent", "Sunken Valley", CONTENT.BASE],
  ["Guardian Ape Undying", "Ashina Depths", CONTENT.BASE],
  ["Sakura Bull of the Palace", "Fountainhead Palace", CONTENT.BASE],
  ["Okami Leader Shizu", "Fountainhead Palace", CONTENT.BASE],
  ["Great Colored Carp", "Fountainhead Palace", CONTENT.BASE],
  ["Shichimen Warrior", "Various locations", CONTENT.BASE],
  ["Lone Shadow Masanaga the Spear-Bearer", "Ashina Outskirts", CONTENT.BASE],
  ["Headless", "Various locations", CONTENT.BASE],
  ["Underwater Headless", "Various locations", CONTENT.BASE],
  ["Divine Dragon", "Fountainhead Palace", CONTENT.BASE],
  ["Seven Ashina Spears – Shume Masaji Oniwa", "Ashina Reservoir", CONTENT.BASE],
  ["Shigekichi of the Red Guard", "Ashina Outskirts", CONTENT.BASE],
  ["Ashina Elite – Ujinari Mizuo", "Ashina Castle", CONTENT.BASE],
  ["Demon of Hatred", "Ashina Outskirts", CONTENT.BASE],
  ["Lone Shadow Masanaga Spear-Bearer (Purification Ending Only)", "Hirata Estate", CONTENT.BASE],
  ["Juzou the Drunkard 2nd Version (Purification Ending Only)", "Hirata Estate", CONTENT.BASE],
  ["Owl Father – Great Shinobi Owl (Purification Ending Only)", "Hirata Estate", CONTENT.BASE],
  ["Isshin, the Sword Saint (Endboss)", "Ashina Reservoir", CONTENT.BASE],
];

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "souls-checklist-data-sync/1.0",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

async function loadListium(url) {
  const html = await fetchText(url);
  const match = html.match(LISTIUM_JSONLD);

  if (!match) {
    throw new Error(`Could not find JSON-LD block in ${url}`);
  }

  const data = JSON.parse(match[1]);
  return data.itemListElement.map((item) => item.name);
}

function loadRegionSections(source) {
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`REGIONS = [${source.trim().replace(/,$/, "")}]`, sandbox);
  return sandbox.REGIONS;
}

async function loadEldenRing() {
  const html = await fetchText("https://eldenboss.com/");
  const start = html.indexOf("const REGIONS = [");
  const end = html.indexOf("];", start);

  if (start === -1 || end === -1) {
    throw new Error("Could not find Elden Ring region data");
  }

  const body = html
    .slice(start, end + 2)
    .replace(/^const REGIONS = \[/, "")
    .replace(/\];$/, "");
  const [baseSource, dlcSource] = body.split(/\/\/ ── SHADOW OF THE ERDTREE DLC[^\n]*\n/);

  if (!baseSource || !dlcSource) {
    throw new Error("Could not split Elden Ring base game and DLC data");
  }

  const baseRegions = loadRegionSections(baseSource);
  const dlcRegions = loadRegionSections(dlcSource);

  return [...baseRegions, ...dlcRegions].flatMap((region) =>
    region.bosses.map((boss) => [
      boss.name,
      boss.location,
      boss.tags.includes("optional"),
      baseRegions.includes(region) ? CONTENT.BASE : CONTENT.DLC,
    ]),
  );
}

function buildMetadataMap(entries) {
  const metadata = new Map();

  for (const [name, region, content, optional = false] of entries) {
    metadata.set(slugify(name), {
      region,
      content,
      ...(optional ? { optional: true } : {}),
    });
  }

  return metadata;
}

function createBossEntry(gameId, name, metadata, idCounts, includeRegionInId) {
  const baseId = includeRegionInId
    ? `${gameId}:${slugify(name)}:${slugify(metadata.region)}`
    : `${gameId}:${slugify(name)}`;
  const nextCount = (idCounts.get(baseId) ?? 0) + 1;
  idCounts.set(baseId, nextCount);

  return {
    id: nextCount === 1 ? baseId : `${baseId}-${nextCount}`,
    name,
    region: metadata.region,
    content: metadata.content,
    ...(metadata.optional ? { optional: true } : {}),
  };
}

function mapBossEntries(gameId, entries, includeRegionInId = true) {
  const idCounts = new Map();

  return entries.map(([name, region, optional, content]) =>
    createBossEntry(
      gameId,
      name,
      {
        region,
        content,
        ...(optional ? { optional: true } : {}),
      },
      idCounts,
      includeRegionInId,
    ),
  );
}

function mapBossNames(gameId, names, metadataEntries) {
  const metadata = buildMetadataMap(metadataEntries);
  const idCounts = new Map();

  return names.map((name) => {
    const bossMetadata = metadata.get(slugify(name));

    if (!bossMetadata) {
      throw new Error(`Missing metadata for ${gameId} boss: ${name}`);
    }

    return createBossEntry(gameId, name, bossMetadata, idCounts, false);
  });
}

function toTs(value) {
  return JSON.stringify(value, null, 2);
}

const ds2NameFixes = new Map([[35, "Blue Smelter Demon"]]);
const bloodborneNameFixes = new Map([
  ["Ludwig the Accursed/Holy Blade", "Ludwig, the Accursed / Ludwig, the Holy Blade"],
]);
const sekiroNameFixes = new Map([["Demon Of Hatred", "Demon of Hatred"]]);

function applyNameFixes(names, fixes) {
  return names.map((name, index) => fixes.get(index) ?? fixes.get(name) ?? name);
}

const [ds1Raw, ds2Raw, bbRaw, ds3Raw, sekiroRaw, eldenRaw] = await Promise.all([
  loadListium(listiumSources.ds1),
  loadListium(listiumSources.ds2),
  loadListium(listiumSources.bb),
  loadListium(listiumSources.ds3),
  loadListium(listiumSources.sekiro),
  loadEldenRing(),
]);

const games = [
  {
    id: "demons-souls",
    title: "Demon's Souls",
    release: "2009",
    label: "Boletaria",
    palette: "from-amber-200/25 via-orange-500/10 to-transparent",
    bosses: mapBossEntries("demons-souls", demonsSouls),
  },
  {
    id: "dark-souls",
    title: "Dark Souls",
    release: "2011",
    label: "Lordran",
    palette: "from-yellow-200/25 via-stone-500/15 to-transparent",
    bosses: mapBossNames("dark-souls", ds1Raw, darkSoulsMetadata),
  },
  {
    id: "dark-souls-2",
    title: "Dark Souls II",
    release: "2014",
    label: "Drangleic",
    palette: "from-cyan-200/25 via-slate-500/15 to-transparent",
    bosses: mapBossNames("dark-souls-2", applyNameFixes(ds2Raw, ds2NameFixes), darkSouls2Metadata),
  },
  {
    id: "bloodborne",
    title: "Bloodborne",
    release: "2015",
    label: "Yharnam",
    palette: "from-rose-200/20 via-red-500/10 to-transparent",
    bosses: mapBossNames("bloodborne", applyNameFixes(bbRaw, bloodborneNameFixes), bloodborneMetadata),
  },
  {
    id: "dark-souls-3",
    title: "Dark Souls III",
    release: "2016",
    label: "Lothric",
    palette: "from-indigo-200/20 via-blue-500/10 to-transparent",
    bosses: mapBossNames("dark-souls-3", ds3Raw, darkSouls3Metadata),
  },
  {
    id: "sekiro",
    title: "Sekiro",
    release: "2019",
    label: "Ashina",
    palette: "from-lime-200/25 via-emerald-500/10 to-transparent",
    bosses: mapBossNames("sekiro", applyNameFixes(sekiroRaw, sekiroNameFixes), sekiroMetadata),
  },
  {
    id: "elden-ring",
    title: "Elden Ring",
    release: "2022",
    label: "The Lands Between",
    palette: "from-yellow-100/25 via-amber-400/15 to-transparent",
    bosses: mapBossEntries("elden-ring", eldenRaw),
  },
];

const allBosses = games.flatMap((game) => game.bosses.map((boss) => `${game.id}:${boss.id}`));
const duplicateBossIds = allBosses.filter((id, index) => allBosses.indexOf(id) !== index);

if (duplicateBossIds.length > 0) {
  throw new Error(`Duplicate boss ids remain after sync: ${duplicateBossIds.join(", ")}`);
}

for (const game of games) {
  for (const boss of game.bosses) {
    if (!boss.region) {
      throw new Error(`Missing region for ${game.id} boss: ${boss.name}`);
    }

    if (!boss.content) {
      throw new Error(`Missing content marker for ${game.id} boss: ${boss.name}`);
    }
  }
}

const file = `export type GameId =
  | "demons-souls"
  | "dark-souls"
  | "dark-souls-2"
  | "bloodborne"
  | "dark-souls-3"
  | "sekiro"
  | "elden-ring";

export type BossContent = "base" | "dlc";

export interface BossEntry {
  id: string;
  name: string;
  content: BossContent;
  optional?: boolean;
  region: string;
}

export interface GameEntry {
  id: GameId;
  title: string;
  release: string;
  label: string;
  palette: string;
  bosses: BossEntry[];
}

export const games: GameEntry[] = ${toTs(games)};
`;

await writeFile(new URL("../src/data/bosses.ts", import.meta.url), file);
console.log(`Wrote ${games.length} games and ${games.reduce((sum, game) => sum + game.bosses.length, 0)} bosses.`);
