# AGENTS.md

## Product Pillars

- Performance is a first-class requirement. The site should feel immediate.
- Aesthetics matter, but the visual language must stay severe and Souls-like.
- Data accuracy matters. If content is uncertain, verify it before shipping.

## App Scope

- This is a local-only checklist app.
- State is stored in `localStorage`.
- The app is for Soulsborne bosses.
- The user tracks one game at a time.

## Stack Decisions

- Frontend: Solid.
- Styling: Tailwind plus project CSS in `src/styles.css`.
- Deploy target: Cloudflare via Wrangler.
- Production domain: `souls.kaf.sh`.

## Visual Direction

- Keep the UI minimal and Souls-themed.
- Default palette is black and white with restrained accent colors where explicitly used.
- Do not add rounded corners. Square edges are the rule.
- The checklist should dominate the viewport. Do not let decorative layout displace the main list.
- Avoid decorative copy. Keep only text that helps the user act.

Examples of copy that should stay removed unless explicitly requested:
- `Local archive`
- `Overall archive`
- `Game index`
- ornamental year/world labels like `2011 Lordran`

Allowed decorative/progress copy example:
- `2/28 bosses recorded`

## Screenshot Rule

- Any UI change requires screenshot refresh.
- Update:
  - `docs/screenshots/overview.png`
  - `docs/screenshots/search-malenia.png`
- Use `agent-browser` for screenshot work.

## Navigation and Layout

- Desktop uses a left navigation rail.
- Mobile uses a compact top navigation pattern.
- Only one game is visible at a time.
- Active game selection is persisted locally.

## Interaction Rules

- Search and filters are scoped to the active game only.
- Search/filter/toggle interactions must not replay full-page enter animations.
- Sidebar content should not rerender or visually reload on checkbox toggles.
- Reduced motion support should be preserved.

## Route Modal Rules

- Route content is authored per boss. No shared generic region route strings.
- `Path` is only for getting to the boss.
- `Fight` is separate from `Path`.
- Any engagement strategy, combat tactic, or boss-specific execution guidance belongs in `Fight`, not `Path`.
- Fight tips should be obscured by default and revealed on click.
- Keep inline click-to-reveal support available inside route copy for future route-specific spoilers.

## Route Spoiler Presentation

- Do not use a button for inline spoiler text in route paragraphs.
- Inline reveal should be text-height and visually part of the sentence.
- It exists to obscure spoiler text, not to introduce button chrome.

## Route Token Colors

When authoring route copy, use semantic inline tags in `src/data/routes.ts`:

- `[thing]...[/thing]` for items, objects, tools, archstones, weapons
- `[place]...[/place]` for locations
- `[entity]...[/entity]` for characters, enemies, bosses, NPCs

These render as:
- thing: yellow
- place: blue
- entity: red

## Route Authoring Standard

- Be careful and accurate.
- Verify inferred content with web search when needed.
- Separate progression instructions from combat advice.
- If a line starts to answer "how do I beat this?", move it to `tips`.
- If a line answers "how do I get there?", it belongs in `paragraphs`.

## Spoiler Mode

- Spoiler mode is opt-in.
- Uncleared boss names are hidden.
- Cleared bosses reveal automatically.
- Hidden bosses remain searchable by real name.
- Hover reveal on pointer devices should stay slow and restrained.

## DLC and Final Boss Treatment

- DLC bosses keep distinct DLC-specific accent colors.
- Different DLCs should not share the same accent color.
- Final bosses get a distinct colored flare.

## Content Hygiene

- Preserve the hard separation between route data and UI logic.
- Prefer adding content to `src/data/routes.ts` instead of hardcoding route strings in components.
- When content changes affect the rendered UI, rebuild, redeploy, and refresh screenshots.
