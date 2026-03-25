export type GameId =
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

export const games: GameEntry[] = [
  {
    "id": "demons-souls",
    "title": "Demon's Souls",
    "release": "2009",
    "label": "Boletaria",
    "palette": "from-amber-200/25 via-orange-500/10 to-transparent",
    "bosses": [
      {
        "id": "demons-souls:phalanx:boletarian-palace",
        "name": "Phalanx",
        "region": "Boletarian Palace",
        "content": "base"
      },
      {
        "id": "demons-souls:tower-knight:boletarian-palace",
        "name": "Tower Knight",
        "region": "Boletarian Palace",
        "content": "base"
      },
      {
        "id": "demons-souls:penetrator:boletarian-palace",
        "name": "Penetrator",
        "region": "Boletarian Palace",
        "content": "base"
      },
      {
        "id": "demons-souls:old-king-allant:boletarian-palace",
        "name": "Old King Allant",
        "region": "Boletarian Palace",
        "content": "base"
      },
      {
        "id": "demons-souls:red-dragon:boletarian-palace",
        "name": "Red Dragon",
        "region": "Boletarian Palace",
        "content": "base",
        "optional": true
      },
      {
        "id": "demons-souls:blue-dragon:boletarian-palace",
        "name": "Blue Dragon",
        "region": "Boletarian Palace",
        "content": "base",
        "optional": true
      },
      {
        "id": "demons-souls:armor-spider:stonefang-tunnel",
        "name": "Armor Spider",
        "region": "Stonefang Tunnel",
        "content": "base"
      },
      {
        "id": "demons-souls:flamelurker:stonefang-tunnel",
        "name": "Flamelurker",
        "region": "Stonefang Tunnel",
        "content": "base"
      },
      {
        "id": "demons-souls:dragon-god:stonefang-tunnel",
        "name": "Dragon God",
        "region": "Stonefang Tunnel",
        "content": "base"
      },
      {
        "id": "demons-souls:fool-s-idol:tower-of-latria",
        "name": "Fool's Idol",
        "region": "Tower of Latria",
        "content": "base"
      },
      {
        "id": "demons-souls:maneater:tower-of-latria",
        "name": "Maneater",
        "region": "Tower of Latria",
        "content": "base"
      },
      {
        "id": "demons-souls:old-monk:tower-of-latria",
        "name": "Old Monk",
        "region": "Tower of Latria",
        "content": "base"
      },
      {
        "id": "demons-souls:adjudicator:shrine-of-storms",
        "name": "Adjudicator",
        "region": "Shrine of Storms",
        "content": "base"
      },
      {
        "id": "demons-souls:old-hero:shrine-of-storms",
        "name": "Old Hero",
        "region": "Shrine of Storms",
        "content": "base"
      },
      {
        "id": "demons-souls:storm-king:shrine-of-storms",
        "name": "Storm King",
        "region": "Shrine of Storms",
        "content": "base"
      },
      {
        "id": "demons-souls:leechmonger:valley-of-defilement",
        "name": "Leechmonger",
        "region": "Valley of Defilement",
        "content": "base"
      },
      {
        "id": "demons-souls:dirty-colossus:valley-of-defilement",
        "name": "Dirty Colossus",
        "region": "Valley of Defilement",
        "content": "base"
      },
      {
        "id": "demons-souls:maiden-astraea:valley-of-defilement",
        "name": "Maiden Astraea",
        "region": "Valley of Defilement",
        "content": "base"
      },
      {
        "id": "demons-souls:vanguard:shrine-of-storms",
        "name": "Vanguard",
        "region": "Shrine of Storms",
        "content": "base",
        "optional": true
      },
      {
        "id": "demons-souls:king-allant:the-nexus",
        "name": "King Allant",
        "region": "The Nexus",
        "content": "base"
      }
    ]
  },
  {
    "id": "dark-souls",
    "title": "Dark Souls",
    "release": "2011",
    "label": "Lordran",
    "palette": "from-yellow-200/25 via-stone-500/15 to-transparent",
    "bosses": [
      {
        "id": "dark-souls:asylum-demon",
        "name": "Asylum Demon",
        "region": "Northern Undead Asylum",
        "content": "base"
      },
      {
        "id": "dark-souls:taurus-demon",
        "name": "Taurus Demon",
        "region": "Undead Burg",
        "content": "base"
      },
      {
        "id": "dark-souls:hellkite-dragon-the-bridge-wyvern",
        "name": "Hellkite Dragon / The Bridge Wyvern",
        "region": "Undead Burg",
        "content": "base"
      },
      {
        "id": "dark-souls:bell-gargoyles",
        "name": "Bell Gargoyles",
        "region": "Undead Parish",
        "content": "base"
      },
      {
        "id": "dark-souls:capra-demon",
        "name": "Capra Demon",
        "region": "Lower Undead Burg",
        "content": "base"
      },
      {
        "id": "dark-souls:moonlight-butterfly",
        "name": "Moonlight Butterfly",
        "region": "Darkroot Garden",
        "content": "base"
      },
      {
        "id": "dark-souls:gaping-dragon",
        "name": "Gaping Dragon",
        "region": "The Depths",
        "content": "base"
      },
      {
        "id": "dark-souls:stray-demon",
        "name": "Stray Demon",
        "region": "Northern Undead Asylum",
        "content": "base"
      },
      {
        "id": "dark-souls:chaos-witch-quelaag",
        "name": "Chaos Witch Quelaag",
        "region": "Quelaag's Domain",
        "content": "base"
      },
      {
        "id": "dark-souls:great-grey-wolf-sif",
        "name": "Great Grey Wolf Sif",
        "region": "Darkroot Garden",
        "content": "base"
      },
      {
        "id": "dark-souls:hydra",
        "name": "Hydra",
        "region": "Darkroot Basin",
        "content": "base"
      },
      {
        "id": "dark-souls:iron-golem",
        "name": "Iron Golem",
        "region": "Sen's Fortress",
        "content": "base"
      },
      {
        "id": "dark-souls:crossbreed-priscilla",
        "name": "Crossbreed Priscilla",
        "region": "Painted World of Ariamis",
        "content": "base"
      },
      {
        "id": "dark-souls:ornstein-and-smough",
        "name": "Ornstein and Smough",
        "region": "Anor Londo",
        "content": "base"
      },
      {
        "id": "dark-souls:dark-sun-gwyndolin",
        "name": "Dark Sun Gwyndolin",
        "region": "Anor Londo",
        "content": "base"
      },
      {
        "id": "dark-souls:pinwheel",
        "name": "Pinwheel",
        "region": "The Catacombs",
        "content": "base"
      },
      {
        "id": "dark-souls:gravelord-nito",
        "name": "Gravelord Nito",
        "region": "Tomb of the Giants",
        "content": "base"
      },
      {
        "id": "dark-souls:seath-the-scaleless",
        "name": "Seath the Scaleless",
        "region": "Crystal Cave",
        "content": "base"
      },
      {
        "id": "dark-souls:the-four-kings",
        "name": "The Four Kings",
        "region": "New Londo Ruins",
        "content": "base"
      },
      {
        "id": "dark-souls:ceaseless-discharge",
        "name": "Ceaseless Discharge",
        "region": "Demon Ruins",
        "content": "base"
      },
      {
        "id": "dark-souls:centipede-demon",
        "name": "Centipede Demon",
        "region": "Demon Ruins",
        "content": "base"
      },
      {
        "id": "dark-souls:firesage-demon",
        "name": "Firesage Demon",
        "region": "Demon Ruins",
        "content": "base"
      },
      {
        "id": "dark-souls:bed-of-chaos",
        "name": "Bed of Chaos",
        "region": "Lost Izalith",
        "content": "base"
      },
      {
        "id": "dark-souls:gwyn-lord-of-cinder",
        "name": "Gwyn, Lord of Cinder",
        "region": "Kiln of the First Flame",
        "content": "base"
      },
      {
        "id": "dark-souls:sanctuary-guardian",
        "name": "Sanctuary Guardian",
        "region": "Sanctuary Garden",
        "content": "dlc"
      },
      {
        "id": "dark-souls:artorias-the-abysswalker",
        "name": "Artorias the Abysswalker",
        "region": "Oolacile Township",
        "content": "dlc"
      },
      {
        "id": "dark-souls:black-dragon-kalameet",
        "name": "Black Dragon Kalameet",
        "region": "Royal Wood",
        "content": "dlc"
      },
      {
        "id": "dark-souls:manus-father-of-the-abyss",
        "name": "Manus, Father of the Abyss",
        "region": "Chasm of the Abyss",
        "content": "dlc"
      }
    ]
  },
  {
    "id": "dark-souls-2",
    "title": "Dark Souls II",
    "release": "2014",
    "label": "Drangleic",
    "palette": "from-cyan-200/25 via-slate-500/15 to-transparent",
    "bosses": [
      {
        "id": "dark-souls-2:the-last-giant",
        "name": "The Last Giant",
        "region": "Forest of Fallen Giants",
        "content": "base"
      },
      {
        "id": "dark-souls-2:the-pursuer",
        "name": "The Pursuer",
        "region": "Forest of Fallen Giants",
        "content": "base"
      },
      {
        "id": "dark-souls-2:executioner-s-chariot",
        "name": "Executioner's Chariot",
        "region": "Huntsman's Copse",
        "content": "base"
      },
      {
        "id": "dark-souls-2:looking-glass-knight",
        "name": "Looking Glass Knight",
        "region": "Drangleic Castle",
        "content": "base"
      },
      {
        "id": "dark-souls-2:the-skeleton-lords",
        "name": "The Skeleton Lords",
        "region": "Huntsman's Copse",
        "content": "base"
      },
      {
        "id": "dark-souls-2:flexile-sentry",
        "name": "Flexile Sentry",
        "region": "No-Man's Wharf",
        "content": "base"
      },
      {
        "id": "dark-souls-2:lost-sinner",
        "name": "Lost Sinner",
        "region": "Sinner's Rise",
        "content": "base"
      },
      {
        "id": "dark-souls-2:belfry-gargoyles",
        "name": "Belfry Gargoyles",
        "region": "Belfry Luna",
        "content": "base"
      },
      {
        "id": "dark-souls-2:ruin-sentinels",
        "name": "Ruin Sentinels",
        "region": "The Lost Bastille",
        "content": "base"
      },
      {
        "id": "dark-souls-2:royal-rat-vanguard",
        "name": "Royal Rat Vanguard",
        "region": "Grave of Saints",
        "content": "base"
      },
      {
        "id": "dark-souls-2:royal-rat-authority",
        "name": "Royal Rat Authority",
        "region": "Doors of Pharros",
        "content": "base"
      },
      {
        "id": "dark-souls-2:scorpioness-najka",
        "name": "Scorpioness Najka",
        "region": "Shaded Woods",
        "content": "base"
      },
      {
        "id": "dark-souls-2:the-duke-s-dear-freja",
        "name": "The Duke's Dear Freja",
        "region": "Brightstone Cove Tseldora",
        "content": "base"
      },
      {
        "id": "dark-souls-2:mytha-the-baneful-queen",
        "name": "Mytha, The Baneful Queen",
        "region": "Earthen Peak",
        "content": "base"
      },
      {
        "id": "dark-souls-2:the-rotten",
        "name": "The Rotten",
        "region": "Black Gulch",
        "content": "base"
      },
      {
        "id": "dark-souls-2:old-dragonslayer",
        "name": "Old Dragonslayer",
        "region": "Heide's Tower of Flame",
        "content": "base"
      },
      {
        "id": "dark-souls-2:covetous-demon",
        "name": "Covetous Demon",
        "region": "Earthen Peak",
        "content": "base"
      },
      {
        "id": "dark-souls-2:smelter-demon",
        "name": "Smelter Demon",
        "region": "Iron Keep",
        "content": "base"
      },
      {
        "id": "dark-souls-2:old-iron-king",
        "name": "Old Iron King",
        "region": "Iron Keep",
        "content": "base"
      },
      {
        "id": "dark-souls-2:guardian-dragon",
        "name": "Guardian Dragon",
        "region": "Aldia's Keep",
        "content": "base"
      },
      {
        "id": "dark-souls-2:demon-of-song",
        "name": "Demon of Song",
        "region": "Shrine of Amana",
        "content": "base"
      },
      {
        "id": "dark-souls-2:velstadt-the-royal-aegis",
        "name": "Velstadt, The Royal Aegis",
        "region": "Undead Crypt",
        "content": "base"
      },
      {
        "id": "dark-souls-2:vendrick",
        "name": "Vendrick",
        "region": "Undead Crypt",
        "content": "base"
      },
      {
        "id": "dark-souls-2:darklurker",
        "name": "Darklurker",
        "region": "Dark Chasm of Old",
        "content": "base"
      },
      {
        "id": "dark-souls-2:dragonrider",
        "name": "Dragonrider",
        "region": "Heide's Tower of Flame",
        "content": "base"
      },
      {
        "id": "dark-souls-2:twin-dragonriders",
        "name": "Twin Dragonriders",
        "region": "Drangleic Castle",
        "content": "base"
      },
      {
        "id": "dark-souls-2:prowling-magus-and-congregation",
        "name": "Prowling Magus and Congregation",
        "region": "Brightstone Cove Tseldora",
        "content": "base"
      },
      {
        "id": "dark-souls-2:giant-lord",
        "name": "Giant Lord",
        "region": "Memory of Jeigh",
        "content": "base"
      },
      {
        "id": "dark-souls-2:ancient-dragon",
        "name": "Ancient Dragon",
        "region": "Dragon Shrine",
        "content": "base"
      },
      {
        "id": "dark-souls-2:throne-watcher-and-throne-defender",
        "name": "Throne Watcher and Throne Defender",
        "region": "Throne of Want",
        "content": "base"
      },
      {
        "id": "dark-souls-2:nashandra",
        "name": "Nashandra",
        "region": "Throne of Want",
        "content": "base"
      },
      {
        "id": "dark-souls-2:aldia-scholar-of-the-first-sin",
        "name": "Aldia, Scholar of The First Sin",
        "region": "Throne of Want",
        "content": "base"
      },
      {
        "id": "dark-souls-2:elana-squalid-queen",
        "name": "Elana, Squalid Queen",
        "region": "Dragon's Sanctum",
        "content": "dlc"
      },
      {
        "id": "dark-souls-2:sinh-the-slumbering-dragon",
        "name": "Sinh, The Slumbering Dragon",
        "region": "Dragon's Rest",
        "content": "dlc"
      },
      {
        "id": "dark-souls-2:afflicted-graverobber-ancient-soldier-varg-and-cerah-the-old-explorer",
        "name": "Afflicted Graverobber, Ancient Soldier Varg and Cerah The Old Explorer",
        "region": "Cave of the Dead",
        "content": "dlc"
      },
      {
        "id": "dark-souls-2:blue-smelter-demon",
        "name": "Blue Smelter Demon",
        "region": "Iron Passage",
        "content": "dlc"
      },
      {
        "id": "dark-souls-2:fume-knight",
        "name": "Fume Knight",
        "region": "Brume Tower",
        "content": "dlc"
      },
      {
        "id": "dark-souls-2:sir-alonne",
        "name": "Sir Alonne",
        "region": "Memory of the Old Iron King",
        "content": "dlc"
      },
      {
        "id": "dark-souls-2:burnt-ivory-king",
        "name": "Burnt Ivory King",
        "region": "Old Chaos",
        "content": "dlc"
      },
      {
        "id": "dark-souls-2:aava-the-king-s-pet",
        "name": "Aava, The King's Pet",
        "region": "Frozen Eleum Loyce",
        "content": "dlc"
      },
      {
        "id": "dark-souls-2:lud-and-zallen-the-king-s-pets",
        "name": "Lud and Zallen, The King's Pets",
        "region": "Frigid Outskirts",
        "content": "dlc"
      }
    ]
  },
  {
    "id": "bloodborne",
    "title": "Bloodborne",
    "release": "2015",
    "label": "Yharnam",
    "palette": "from-rose-200/20 via-red-500/10 to-transparent",
    "bosses": [
      {
        "id": "bloodborne:cleric-beast",
        "name": "Cleric Beast",
        "region": "Central Yharnam",
        "content": "base"
      },
      {
        "id": "bloodborne:father-gascoigne",
        "name": "Father Gascoigne",
        "region": "Tomb of Oedon",
        "content": "base"
      },
      {
        "id": "bloodborne:blood-starved-beast",
        "name": "Blood-Starved Beast",
        "region": "Old Yharnam",
        "content": "base"
      },
      {
        "id": "bloodborne:vicar-amelia",
        "name": "Vicar Amelia",
        "region": "Grand Cathedral",
        "content": "base"
      },
      {
        "id": "bloodborne:the-witch-of-hemwick",
        "name": "The Witch of Hemwick",
        "region": "Hemwick Charnel Lane",
        "content": "base"
      },
      {
        "id": "bloodborne:darkbeast-paarl",
        "name": "Darkbeast Paarl",
        "region": "Hypogean Gaol",
        "content": "base"
      },
      {
        "id": "bloodborne:shadow-of-yharnam",
        "name": "Shadow of Yharnam",
        "region": "Forbidden Woods",
        "content": "base"
      },
      {
        "id": "bloodborne:rom-the-vacuous-spider",
        "name": "Rom, The Vacuous Spider",
        "region": "Moonside Lake",
        "content": "base"
      },
      {
        "id": "bloodborne:the-one-reborn",
        "name": "The One Reborn",
        "region": "Yahar'gul",
        "content": "base"
      },
      {
        "id": "bloodborne:martyr-logarius",
        "name": "Martyr Logarius",
        "region": "Forsaken Castle Cainhurst",
        "content": "base"
      },
      {
        "id": "bloodborne:amygdala",
        "name": "Amygdala",
        "region": "Nightmare Frontier",
        "content": "base"
      },
      {
        "id": "bloodborne:celestial-emissary",
        "name": "Celestial Emissary",
        "region": "Upper Cathedral Ward",
        "content": "base"
      },
      {
        "id": "bloodborne:ebrietas-daughter-of-the-cosmos",
        "name": "Ebrietas, Daughter of the Cosmos",
        "region": "Altar of Despair",
        "content": "base"
      },
      {
        "id": "bloodborne:micolash-host-of-the-nightmare",
        "name": "Micolash, Host of the Nightmare",
        "region": "Nightmare of Mensis",
        "content": "base"
      },
      {
        "id": "bloodborne:mergo-s-wet-nurse",
        "name": "Mergo’s Wet Nurse",
        "region": "Mergo's Loft",
        "content": "base"
      },
      {
        "id": "bloodborne:gehrman-the-first-hunter",
        "name": "Gehrman, the First Hunter",
        "region": "Hunter's Dream",
        "content": "base"
      },
      {
        "id": "bloodborne:moon-presence",
        "name": "Moon Presence",
        "region": "Hunter's Dream",
        "content": "base"
      },
      {
        "id": "bloodborne:undead-giant",
        "name": "Undead Giant",
        "region": "Pthumeru Chalice",
        "content": "base"
      },
      {
        "id": "bloodborne:merciless-watcher",
        "name": "Merciless Watcher",
        "region": "Pthumeru Chalice",
        "content": "base"
      },
      {
        "id": "bloodborne:watchdog-of-the-old-lords",
        "name": "Watchdog of the Old Lords",
        "region": "Defiled Chalice",
        "content": "base"
      },
      {
        "id": "bloodborne:beast-possessed-soul",
        "name": "Beast-possessed Soul",
        "region": "Ailing Loran",
        "content": "base"
      },
      {
        "id": "bloodborne:keeper-of-the-old-lords",
        "name": "Keeper of the Old Lords",
        "region": "Defiled Chalice",
        "content": "base"
      },
      {
        "id": "bloodborne:pthumerian-descendant",
        "name": "Pthumerian Descendant",
        "region": "Great Pthumeru Ihyll",
        "content": "base"
      },
      {
        "id": "bloodborne:maneater-boar",
        "name": "Maneater Boar",
        "region": "Pthumeru Chalice",
        "content": "base"
      },
      {
        "id": "bloodborne:bloodletting-beast",
        "name": "Bloodletting Beast",
        "region": "Great Pthumeru Ihyll",
        "content": "base"
      },
      {
        "id": "bloodborne:brainsucker",
        "name": "Brainsucker",
        "region": "Isz Gravestone",
        "content": "base"
      },
      {
        "id": "bloodborne:forgotten-madman",
        "name": "Forgotten Madman",
        "region": "Lower Pthumeru Chalice",
        "content": "base"
      },
      {
        "id": "bloodborne:pthumerian-elder",
        "name": "Pthumerian Elder",
        "region": "Lower Hintertomb",
        "content": "base"
      },
      {
        "id": "bloodborne:abhorrent-beast",
        "name": "Abhorrent Beast",
        "region": "Ailing Loran",
        "content": "base"
      },
      {
        "id": "bloodborne:loran-silverbeast",
        "name": "Loran Silverbeast",
        "region": "Lower Loran",
        "content": "base"
      },
      {
        "id": "bloodborne:loran-darkbeast",
        "name": "Loran Darkbeast",
        "region": "Lower Loran",
        "content": "base"
      },
      {
        "id": "bloodborne:yharnam-pthumerian-queen",
        "name": "Yharnam, Pthumerian Queen",
        "region": "Great Pthumeru Ihyll",
        "content": "base"
      },
      {
        "id": "bloodborne:headless-bloodletting-beast",
        "name": "Headless Bloodletting Beast",
        "region": "Great Pthumeru Ihyll",
        "content": "base"
      },
      {
        "id": "bloodborne:ludwig-the-accursed-ludwig-the-holy-blade",
        "name": "Ludwig, the Accursed / Ludwig, the Holy Blade",
        "region": "Hunter's Nightmare",
        "content": "dlc"
      },
      {
        "id": "bloodborne:laurence-the-first-vicar",
        "name": "Laurence, the First Vicar",
        "region": "Grand Cathedral",
        "content": "dlc"
      },
      {
        "id": "bloodborne:living-failures",
        "name": "Living Failures",
        "region": "Research Hall",
        "content": "dlc"
      },
      {
        "id": "bloodborne:lady-maria-of-the-astral-clocktower",
        "name": "Lady Maria of the Astral Clocktower",
        "region": "Astral Clocktower",
        "content": "dlc"
      },
      {
        "id": "bloodborne:orphan-of-kos",
        "name": "Orphan of Kos",
        "region": "Fishing Hamlet",
        "content": "dlc"
      }
    ]
  },
  {
    "id": "dark-souls-3",
    "title": "Dark Souls III",
    "release": "2016",
    "label": "Lothric",
    "palette": "from-indigo-200/20 via-blue-500/10 to-transparent",
    "bosses": [
      {
        "id": "dark-souls-3:iudex-gundyr",
        "name": "Iudex Gundyr",
        "region": "Cemetery of Ash",
        "content": "base"
      },
      {
        "id": "dark-souls-3:vordt-of-the-boreal-valley",
        "name": "Vordt of the Boreal Valley",
        "region": "High Wall of Lothric",
        "content": "base"
      },
      {
        "id": "dark-souls-3:curse-rotted-greatwood",
        "name": "Curse-Rotted Greatwood",
        "region": "Undead Settlement",
        "content": "base"
      },
      {
        "id": "dark-souls-3:crystal-sage",
        "name": "Crystal Sage",
        "region": "Road of Sacrifices",
        "content": "base"
      },
      {
        "id": "dark-souls-3:abyss-watchers",
        "name": "Abyss Watchers",
        "region": "Farron Keep",
        "content": "base"
      },
      {
        "id": "dark-souls-3:deacons-of-the-deep",
        "name": "Deacons of the Deep",
        "region": "Cathedral of the Deep",
        "content": "base"
      },
      {
        "id": "dark-souls-3:high-lord-wolnir",
        "name": "High Lord Wolnir",
        "region": "Catacombs of Carthus",
        "content": "base"
      },
      {
        "id": "dark-souls-3:old-demon-king",
        "name": "Old Demon King",
        "region": "Smouldering Lake",
        "content": "base"
      },
      {
        "id": "dark-souls-3:pontiff-sulyvahn",
        "name": "Pontiff Sulyvahn",
        "region": "Irithyll of the Boreal Valley",
        "content": "base"
      },
      {
        "id": "dark-souls-3:yhorm-the-giant",
        "name": "Yhorm the Giant",
        "region": "Profaned Capital",
        "content": "base"
      },
      {
        "id": "dark-souls-3:aldrich-devourer-of-gods",
        "name": "Aldrich, Devourer of Gods",
        "region": "Anor Londo",
        "content": "base"
      },
      {
        "id": "dark-souls-3:dancer-of-the-boreal-valley",
        "name": "Dancer of the Boreal Valley",
        "region": "High Wall of Lothric",
        "content": "base"
      },
      {
        "id": "dark-souls-3:dragonslayer-armour",
        "name": "Dragonslayer Armour",
        "region": "Lothric Castle",
        "content": "base"
      },
      {
        "id": "dark-souls-3:oceiros-the-consumed-king",
        "name": "Oceiros, the Consumed King",
        "region": "Consumed King's Garden",
        "content": "base"
      },
      {
        "id": "dark-souls-3:champion-gundyr",
        "name": "Champion Gundyr",
        "region": "Untended Graves",
        "content": "base"
      },
      {
        "id": "dark-souls-3:lothric-younger-prince",
        "name": "Lothric, Younger Prince",
        "region": "Grand Archives",
        "content": "base"
      },
      {
        "id": "dark-souls-3:ancient-wyvern",
        "name": "Ancient Wyvern",
        "region": "Archdragon Peak",
        "content": "base"
      },
      {
        "id": "dark-souls-3:nameless-king",
        "name": "Nameless King",
        "region": "Archdragon Peak",
        "content": "base"
      },
      {
        "id": "dark-souls-3:soul-of-cinder",
        "name": "Soul of Cinder",
        "region": "Kiln of the First Flame",
        "content": "base"
      },
      {
        "id": "dark-souls-3:sister-friede",
        "name": "Sister Friede",
        "region": "Ariandel Chapel",
        "content": "dlc"
      },
      {
        "id": "dark-souls-3:champion-s-gravetender-gravetender-greatwolf",
        "name": "Champion's Gravetender & Gravetender Greatwolf",
        "region": "Depths of the Painting",
        "content": "dlc"
      },
      {
        "id": "dark-souls-3:demon-in-pain-demon-from-below-demon-prince",
        "name": "Demon in Pain & Demon From Below / Demon Prince",
        "region": "The Dreg Heap",
        "content": "dlc"
      },
      {
        "id": "dark-souls-3:halflight-spear-of-the-church",
        "name": "Halflight, Spear of the Church",
        "region": "Church of Filianore",
        "content": "dlc"
      },
      {
        "id": "dark-souls-3:darkeater-midir",
        "name": "Darkeater Midir",
        "region": "The Ringed City",
        "content": "dlc"
      },
      {
        "id": "dark-souls-3:slave-knight-gael",
        "name": "Slave Knight Gael",
        "region": "Filianore's Rest",
        "content": "dlc"
      }
    ]
  },
  {
    "id": "sekiro",
    "title": "Sekiro",
    "release": "2019",
    "label": "Ashina",
    "palette": "from-lime-200/25 via-emerald-500/10 to-transparent",
    "bosses": [
      {
        "id": "sekiro:general-naomori-kawarada",
        "name": "General Naomori Kawarada",
        "region": "Ashina Outskirts",
        "content": "base"
      },
      {
        "id": "sekiro:chained-ogre",
        "name": "Chained Ogre",
        "region": "Ashina Outskirts",
        "content": "base"
      },
      {
        "id": "sekiro:general-tenzen-yamauchi",
        "name": "General Tenzen Yamauchi",
        "region": "Ashina Outskirts",
        "content": "base"
      },
      {
        "id": "sekiro:gyoubu-oniwa",
        "name": "Gyoubu Oniwa",
        "region": "Ashina Outskirts",
        "content": "base"
      },
      {
        "id": "sekiro:shinobi-hunter-enshin-of-misen",
        "name": "Shinobi Hunter Enshin of Misen",
        "region": "Hirata Estate",
        "content": "base"
      },
      {
        "id": "sekiro:juzou-the-drunkard",
        "name": "Juzou the Drunkard",
        "region": "Hirata Estate",
        "content": "base"
      },
      {
        "id": "sekiro:lady-butterfly",
        "name": "Lady Butterfly",
        "region": "Hirata Estate",
        "content": "base"
      },
      {
        "id": "sekiro:blazing-bull",
        "name": "Blazing Bull",
        "region": "Ashina Castle",
        "content": "base"
      },
      {
        "id": "sekiro:general-kuranosuke-matsumoto",
        "name": "General Kuranosuke Matsumoto",
        "region": "Ashina Castle",
        "content": "base"
      },
      {
        "id": "sekiro:seven-ashina-spears-shikibu-toshikatsu-yamauchi",
        "name": "Seven Ashina Spears – Shikibu Toshikatsu Yamauchi",
        "region": "Ashina Reservoir",
        "content": "base"
      },
      {
        "id": "sekiro:lone-shadow-longswordsman",
        "name": "Lone Shadow Longswordsman",
        "region": "Ashina Reservoir",
        "content": "base"
      },
      {
        "id": "sekiro:ashina-elite-jinsuke-saze",
        "name": "Ashina Elite – Jinsuke Saze",
        "region": "Ashina Castle",
        "content": "base"
      },
      {
        "id": "sekiro:genichiro-ashina",
        "name": "Genichiro Ashina",
        "region": "Ashina Castle",
        "content": "base"
      },
      {
        "id": "sekiro:armored-warrior",
        "name": "Armored Warrior",
        "region": "Senpou Temple, Mt. Kongo",
        "content": "base"
      },
      {
        "id": "sekiro:long-arm-centipede-sen-un",
        "name": "Long-arm Centipede Sen’un",
        "region": "Senpou Temple, Mt. Kongo",
        "content": "base"
      },
      {
        "id": "sekiro:folding-screen-monkeys",
        "name": "Folding Screen Monkeys",
        "region": "Hall of Illusions",
        "content": "base"
      },
      {
        "id": "sekiro:snake-eyes-shirahagi",
        "name": "Snake Eyes Shirahagi",
        "region": "Ashina Depths",
        "content": "base"
      },
      {
        "id": "sekiro:tokujiro-the-glutton",
        "name": "Tokujiro the Glutton",
        "region": "Ashina Depths",
        "content": "base"
      },
      {
        "id": "sekiro:mist-noble",
        "name": "Mist Noble",
        "region": "Mibu Village",
        "content": "base"
      },
      {
        "id": "sekiro:o-rin-of-the-water",
        "name": "O’rin of the Water",
        "region": "Mibu Village",
        "content": "base"
      },
      {
        "id": "sekiro:corrupted-monk",
        "name": "Corrupted Monk",
        "region": "Mibu Village",
        "content": "base"
      },
      {
        "id": "sekiro:snake-eyes-shirafuji",
        "name": "Snake Eyes Shirafuji",
        "region": "Sunken Valley",
        "content": "base"
      },
      {
        "id": "sekiro:long-arm-centipede-giraffe",
        "name": "Long-arm Centipede Giraffe",
        "region": "Gun Fort",
        "content": "base"
      },
      {
        "id": "sekiro:guardian-ape",
        "name": "Guardian Ape",
        "region": "Sunken Valley",
        "content": "base"
      },
      {
        "id": "sekiro:lone-shadow-vilehand",
        "name": "Lone Shadow Vilehand",
        "region": "Ashina Castle",
        "content": "base"
      },
      {
        "id": "sekiro:emma-the-gentle-blade",
        "name": "Emma, The Gentle Blade",
        "region": "Ashina Castle",
        "content": "base"
      },
      {
        "id": "sekiro:isshin-ashina",
        "name": "Isshin Ashina",
        "region": "Ashina Castle",
        "content": "base"
      },
      {
        "id": "sekiro:great-shinobi-owl",
        "name": "Great Shinobi Owl",
        "region": "Ashina Castle",
        "content": "base"
      },
      {
        "id": "sekiro:true-corrupted-monk",
        "name": "True Corrupted Monk",
        "region": "Fountainhead Palace",
        "content": "base"
      },
      {
        "id": "sekiro:great-serpent",
        "name": "Great Serpent",
        "region": "Sunken Valley",
        "content": "base"
      },
      {
        "id": "sekiro:guardian-ape-undying",
        "name": "Guardian Ape Undying",
        "region": "Ashina Depths",
        "content": "base"
      },
      {
        "id": "sekiro:sakura-bull-of-the-palace",
        "name": "Sakura Bull of the Palace",
        "region": "Fountainhead Palace",
        "content": "base"
      },
      {
        "id": "sekiro:okami-leader-shizu",
        "name": "Okami Leader Shizu",
        "region": "Fountainhead Palace",
        "content": "base"
      },
      {
        "id": "sekiro:great-colored-carp",
        "name": "Great Colored Carp",
        "region": "Fountainhead Palace",
        "content": "base"
      },
      {
        "id": "sekiro:shichimen-warrior",
        "name": "Shichimen Warrior",
        "region": "Various locations",
        "content": "base"
      },
      {
        "id": "sekiro:lone-shadow-masanaga-the-spear-bearer",
        "name": "Lone Shadow Masanaga the Spear-Bearer",
        "region": "Ashina Outskirts",
        "content": "base"
      },
      {
        "id": "sekiro:headless",
        "name": "Headless",
        "region": "Various locations",
        "content": "base"
      },
      {
        "id": "sekiro:underwater-headless",
        "name": "Underwater Headless",
        "region": "Various locations",
        "content": "base"
      },
      {
        "id": "sekiro:divine-dragon",
        "name": "Divine Dragon",
        "region": "Fountainhead Palace",
        "content": "base"
      },
      {
        "id": "sekiro:seven-ashina-spears-shume-masaji-oniwa",
        "name": "Seven Ashina Spears – Shume Masaji Oniwa",
        "region": "Ashina Reservoir",
        "content": "base"
      },
      {
        "id": "sekiro:shigekichi-of-the-red-guard",
        "name": "Shigekichi of the Red Guard",
        "region": "Ashina Outskirts",
        "content": "base"
      },
      {
        "id": "sekiro:ashina-elite-ujinari-mizuo",
        "name": "Ashina Elite – Ujinari Mizuo",
        "region": "Ashina Castle",
        "content": "base"
      },
      {
        "id": "sekiro:demon-of-hatred",
        "name": "Demon of Hatred",
        "region": "Ashina Outskirts",
        "content": "base"
      },
      {
        "id": "sekiro:lone-shadow-masanaga-spear-bearer-purification-ending-only",
        "name": "Lone Shadow Masanaga Spear-Bearer (Purification Ending Only)",
        "region": "Hirata Estate",
        "content": "base"
      },
      {
        "id": "sekiro:juzou-the-drunkard-2nd-version-purification-ending-only",
        "name": "Juzou the Drunkard 2nd Version (Purification Ending Only)",
        "region": "Hirata Estate",
        "content": "base"
      },
      {
        "id": "sekiro:owl-father-great-shinobi-owl-purification-ending-only",
        "name": "Owl Father – Great Shinobi Owl (Purification Ending Only)",
        "region": "Hirata Estate",
        "content": "base"
      },
      {
        "id": "sekiro:isshin-the-sword-saint-endboss",
        "name": "Isshin, the Sword Saint (Endboss)",
        "region": "Ashina Reservoir",
        "content": "base"
      }
    ]
  },
  {
    "id": "elden-ring",
    "title": "Elden Ring",
    "release": "2022",
    "label": "The Lands Between",
    "palette": "from-yellow-100/25 via-amber-400/15 to-transparent",
    "bosses": [
      {
        "id": "elden-ring:beastman-of-farum-azula:groveside-cave",
        "name": "Beastman of Farum Azula",
        "region": "Groveside Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:bell-bearing-hunter:church-of-elleh-night",
        "name": "Bell Bearing Hunter",
        "region": "Church of Elleh (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:black-knife-assassin:deathtouched-catacombs",
        "name": "Black Knife Assassin",
        "region": "Deathtouched Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:bloodhound-knight-darriwil:forlorn-hound-evergaol",
        "name": "Bloodhound Knight Darriwil",
        "region": "Forlorn Hound Evergaol",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:crucible-knight:stormhill-evergaol",
        "name": "Crucible Knight",
        "region": "Stormhill Evergaol",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:deathbird:east-limgrave-night",
        "name": "Deathbird",
        "region": "East Limgrave (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:demi-human-chief-duo:coastal-cave",
        "name": "Demi-Human Chief (duo)",
        "region": "Coastal Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:erdtree-burial-watchdog:stormfoot-catacombs",
        "name": "Erdtree Burial Watchdog",
        "region": "Stormfoot Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:flying-dragon-agheel:dragon-burnt-ruins",
        "name": "Flying Dragon Agheel",
        "region": "Dragon-Burnt Ruins",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:godrick-the-grafted:stormveil-castle",
        "name": "Godrick the Grafted",
        "region": "Stormveil Castle",
        "content": "base"
      },
      {
        "id": "elden-ring:grafted-scion:chapel-of-anticipation",
        "name": "Grafted Scion",
        "region": "Chapel of Anticipation",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:grave-warden-duelist:murkwater-catacombs",
        "name": "Grave Warden Duelist",
        "region": "Murkwater Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:guardian-golem:highroad-cave",
        "name": "Guardian Golem",
        "region": "Highroad Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:mad-pumpkin-head:waypoint-ruins",
        "name": "Mad Pumpkin Head",
        "region": "Waypoint Ruins",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:margit-the-fell-omen:stormhill",
        "name": "Margit, the Fell Omen",
        "region": "Stormhill",
        "content": "base"
      },
      {
        "id": "elden-ring:night-s-cavalry:agheel-lake-north-night",
        "name": "Night's Cavalry",
        "region": "Agheel Lake North (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:patches:murkwater-cave",
        "name": "Patches",
        "region": "Murkwater Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:soldier-of-godrick:stranded-graveyard",
        "name": "Soldier of Godrick",
        "region": "Stranded Graveyard",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:tibia-mariner:summonwater-village",
        "name": "Tibia Mariner",
        "region": "Summonwater Village",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:tree-sentinel:church-of-elleh-road",
        "name": "Tree Sentinel",
        "region": "Church of Elleh Road",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:ulcerated-tree-spirit:fringefolk-hero-s-grave",
        "name": "Ulcerated Tree Spirit",
        "region": "Fringefolk Hero's Grave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:ancient-hero-of-zamor:weeping-evergaol",
        "name": "Ancient Hero of Zamor",
        "region": "Weeping Evergaol",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:cemetery-shade:impaler-s-catacombs",
        "name": "Cemetery Shade",
        "region": "Impaler's Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:deathbird:weeping-peninsula-night",
        "name": "Deathbird",
        "region": "Weeping Peninsula (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:erdtree-avatar:minor-erdtree-weeping",
        "name": "Erdtree Avatar",
        "region": "Minor Erdtree (Weeping)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:erdtree-burial-watchdog:tombsward-catacombs",
        "name": "Erdtree Burial Watchdog",
        "region": "Tombsward Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:leonine-misbegotten:castle-morne",
        "name": "Leonine Misbegotten",
        "region": "Castle Morne",
        "content": "base"
      },
      {
        "id": "elden-ring:miranda-blossom:tombsward-cave",
        "name": "Miranda Blossom",
        "region": "Tombsward Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:night-s-cavalry:weeping-peninsula-night",
        "name": "Night's Cavalry",
        "region": "Weeping Peninsula (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:runebear:earthbore-cave",
        "name": "Runebear",
        "region": "Earthbore Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:scaly-misbegotten:morne-moangrave",
        "name": "Scaly Misbegotten",
        "region": "Morne Moangrave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:stonedigger-troll:morne-tunnel",
        "name": "Stonedigger Troll",
        "region": "Morne Tunnel",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:adan-thief-of-fire:malefactor-s-evergaol",
        "name": "Adan, Thief of Fire",
        "region": "Malefactor's Evergaol",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:alecto-black-knife-ringleader:ringleader-s-evergaol",
        "name": "Alecto, Black Knife Ringleader",
        "region": "Ringleader's Evergaol",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:bell-bearing-hunter:liurnia-night",
        "name": "Bell Bearing Hunter",
        "region": "Liurnia (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:black-knife-assassin:black-knife-catacombs",
        "name": "Black Knife Assassin",
        "region": "Black Knife Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:bloodhound-knight:lakeside-crystal-cave",
        "name": "Bloodhound Knight",
        "region": "Lakeside Crystal Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:bols-carian-knight:cuckoo-evergaol",
        "name": "Bols, Carian Knight",
        "region": "Cuckoo Evergaol",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:cemetery-shade:black-knife-catacombs",
        "name": "Cemetery Shade",
        "region": "Black Knife Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:cleanrot-knight:stillwater-cave",
        "name": "Cleanrot Knight",
        "region": "Stillwater Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:crystalian:raya-lucaria-crystal-tunnel",
        "name": "Crystalian",
        "region": "Raya Lucaria Crystal Tunnel",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:crystalian-spear-crystalian-staff:academy-crystal-cave",
        "name": "Crystalian (Spear) & Crystalian (Staff)",
        "region": "Academy Crystal Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:death-rite-bird:liurnia-night",
        "name": "Death Rite Bird",
        "region": "Liurnia (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:deathbird:liurnia-night",
        "name": "Deathbird",
        "region": "Liurnia (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:erdtree-avatar:minor-erdtree-east-liurnia",
        "name": "Erdtree Avatar",
        "region": "Minor Erdtree (East Liurnia)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:erdtree-avatar-2nd:minor-erdtree-west-liurnia",
        "name": "Erdtree Avatar (2nd)",
        "region": "Minor Erdtree (West Liurnia)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:erdtree-burial-watchdog:cliffbottom-catacombs",
        "name": "Erdtree Burial Watchdog",
        "region": "Cliffbottom Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:glintstone-dragon-adula:academy-gate-town",
        "name": "Glintstone Dragon Adula",
        "region": "Academy Gate Town",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:glintstone-dragon-smarag:academy-gate-town",
        "name": "Glintstone Dragon Smarag",
        "region": "Academy Gate Town",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:magma-wyrm-makar:ruin-strewn-precipice",
        "name": "Magma Wyrm Makar",
        "region": "Ruin-Strewn Precipice",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:night-s-cavalry:liurnia-night",
        "name": "Night's Cavalry",
        "region": "Liurnia (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:omenkiller:village-of-the-albinaurics",
        "name": "Omenkiller",
        "region": "Village of the Albinaurics",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:onyx-lord:royal-grave-evergaol-area",
        "name": "Onyx Lord",
        "region": "Royal Grave Evergaol area",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:royal-knight-loretta:caria-manor",
        "name": "Royal Knight Loretta",
        "region": "Caria Manor",
        "content": "base"
      },
      {
        "id": "elden-ring:royal-revenant:kingsrealm-ruins",
        "name": "Royal Revenant",
        "region": "Kingsrealm Ruins",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:spirit-caller-snail-crucible-knight-duo:road-s-end-catacombs",
        "name": "Spirit-Caller Snail (Crucible Knight duo)",
        "region": "Road's End Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:tibia-mariner:liurnia-near-carian-study",
        "name": "Tibia Mariner",
        "region": "Liurnia (near Carian Study)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:night-s-cavalry-bellum-highway:bellum-highway-night",
        "name": "Night's Cavalry (Bellum Highway)",
        "region": "Bellum Highway (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:glintstone-dragon-adula-moonlight-altar:moonlight-altar",
        "name": "Glintstone Dragon Adula (Moonlight Altar)",
        "region": "Moonlight Altar",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:red-wolf-of-radagon:debate-parlor",
        "name": "Red Wolf of Radagon",
        "region": "Debate Parlor",
        "content": "base"
      },
      {
        "id": "elden-ring:rennala-queen-of-the-full-moon:grand-library",
        "name": "Rennala, Queen of the Full Moon",
        "region": "Grand Library",
        "content": "base"
      },
      {
        "id": "elden-ring:cemetery-shade:war-dead-catacombs",
        "name": "Cemetery Shade",
        "region": "War-Dead Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:crucible-knight-misbegotten-warrior:redmane-castle",
        "name": "Crucible Knight & Misbegotten Warrior",
        "region": "Redmane Castle",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:death-rite-bird:caelid-night",
        "name": "Death Rite Bird",
        "region": "Caelid (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:decaying-ekzykes:caelid-highway-south",
        "name": "Decaying Ekzykes",
        "region": "Caelid Highway South",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:erdtree-burial-watchdog-duo:minor-erdtree-church",
        "name": "Erdtree Burial Watchdog (duo)",
        "region": "Minor Erdtree Church",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:fallingstar-beast:sellia-crystal-tunnel-top",
        "name": "Fallingstar Beast",
        "region": "Sellia Crystal Tunnel (top)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:frenzied-duelist:gaol-cave",
        "name": "Frenzied Duelist",
        "region": "Gaol Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:mad-pumpkin-head-duo:caelid-cave",
        "name": "Mad Pumpkin Head (duo)",
        "region": "Caelid (cave)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:magma-wyrm:gael-tunnel",
        "name": "Magma Wyrm",
        "region": "Gael Tunnel",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:night-s-cavalry:caelid-night",
        "name": "Night's Cavalry",
        "region": "Caelid (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:nox-swordstress-nox-priest:sellia-hideaway",
        "name": "Nox Swordstress & Nox Priest",
        "region": "Sellia Hideaway",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:putrid-avatar:minor-erdtree-caelid",
        "name": "Putrid Avatar",
        "region": "Minor Erdtree (Caelid)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:starscourge-radahn:redmane-castle",
        "name": "Starscourge Radahn",
        "region": "Redmane Castle",
        "content": "base"
      },
      {
        "id": "elden-ring:commander-o-neil:swamp-of-aeonia",
        "name": "Commander O'Neil",
        "region": "Swamp of Aeonia",
        "content": "base"
      },
      {
        "id": "elden-ring:battlemage-hugues:sellia-evergaol",
        "name": "Battlemage Hugues",
        "region": "Sellia Evergaol",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:beastman-of-farum-azula-dragonbarrow:dragonbarrow-cave",
        "name": "Beastman of Farum Azula (Dragonbarrow)",
        "region": "Dragonbarrow Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:bell-bearing-hunter-dragonbarrow:isolated-merchant-s-shack-night",
        "name": "Bell Bearing Hunter (Dragonbarrow)",
        "region": "Isolated Merchant's Shack (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:black-blade-kindred:bestial-sanctum",
        "name": "Black Blade Kindred",
        "region": "Bestial Sanctum",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:cleanrot-knight:dragonbarrow-cave",
        "name": "Cleanrot Knight",
        "region": "Dragonbarrow Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:flying-dragon-greyll:farum-greatbridge",
        "name": "Flying Dragon Greyll",
        "region": "Farum Greatbridge",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:godskin-apostle-dragonbarrow:dragon-temple",
        "name": "Godskin Apostle (Dragonbarrow)",
        "region": "Dragon Temple",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:night-s-cavalry-dragonbarrow:dragonbarrow-night",
        "name": "Night's Cavalry (Dragonbarrow)",
        "region": "Dragonbarrow (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:putrid-avatar-dragonbarrow:minor-erdtree-dragonbarrow",
        "name": "Putrid Avatar (Dragonbarrow)",
        "region": "Minor Erdtree (Dragonbarrow)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:putrid-crystalian:sellia-crystal-tunnel",
        "name": "Putrid Crystalian",
        "region": "Sellia Crystal Tunnel",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:putrid-tree-spirit:war-dead-catacombs",
        "name": "Putrid Tree Spirit",
        "region": "War-Dead Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:ancient-dragon-lansseax:altus-plateau",
        "name": "Ancient Dragon Lansseax",
        "region": "Altus Plateau",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:ancient-hero-of-zamor:sainted-hero-s-grave",
        "name": "Ancient Hero of Zamor",
        "region": "Sainted Hero's Grave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:black-knife-assassin-sage-s-cave:sage-s-cave",
        "name": "Black Knife Assassin (Sage's Cave)",
        "region": "Sage's Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:black-knife-assassin-sainted-hero-s-grave:sainted-hero-s-grave",
        "name": "Black Knife Assassin (Sainted Hero's Grave)",
        "region": "Sainted Hero's Grave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:crystalian-spear-crystalian-ringblade:old-altus-tunnel",
        "name": "Crystalian (Spear) & Crystalian (Ringblade)",
        "region": "Old Altus Tunnel",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:demi-human-queen-gilika:old-altus-tunnel",
        "name": "Demi-Human Queen Gilika",
        "region": "Old Altus Tunnel",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:elemer-of-the-briar:the-shaded-castle",
        "name": "Elemer of the Briar",
        "region": "The Shaded Castle",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:erdtree-burial-watchdog:wyndham-catacombs",
        "name": "Erdtree Burial Watchdog",
        "region": "Wyndham Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:fallingstar-beast:old-altus-tunnel-top",
        "name": "Fallingstar Beast",
        "region": "Old Altus Tunnel (top)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:godefroy-the-grafted:golden-lineage-evergaol",
        "name": "Godefroy the Grafted",
        "region": "Golden Lineage Evergaol",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:godskin-apostle:windmill-village-dominula",
        "name": "Godskin Apostle",
        "region": "Windmill Village (Dominula)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:necromancer-garris:sage-s-cave",
        "name": "Necromancer Garris",
        "region": "Sage's Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:night-s-cavalry:altus-plateau-night",
        "name": "Night's Cavalry",
        "region": "Altus Plateau (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:omenkiller-miranda-the-blighted-bloom:perfumer-s-grotto",
        "name": "Omenkiller & Miranda the Blighted Bloom",
        "region": "Perfumer's Grotto",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:perfumer-tricia-misbegotten-warrior:unsightly-catacombs",
        "name": "Perfumer Tricia & Misbegotten Warrior",
        "region": "Unsightly Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:sanguine-noble:altus-plateau-night",
        "name": "Sanguine Noble",
        "region": "Altus Plateau (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:stonedigger-troll:old-altus-tunnel",
        "name": "Stonedigger Troll",
        "region": "Old Altus Tunnel",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:tibia-mariner:altus-plateau",
        "name": "Tibia Mariner",
        "region": "Altus Plateau",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:tree-sentinel-duo:outer-wall-phantom-tree",
        "name": "Tree Sentinel duo",
        "region": "Outer Wall Phantom Tree",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:wormface:altus-plateau-near-erdtree",
        "name": "Wormface",
        "region": "Altus Plateau (near Erdtree)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:deathbird:altus-plateau-night",
        "name": "Deathbird",
        "region": "Altus Plateau (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:erdtree-avatar:minor-erdtree-altus-plateau",
        "name": "Erdtree Avatar",
        "region": "Minor Erdtree (Altus Plateau)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:abductor-virgin-duo:volcano-manor",
        "name": "Abductor Virgin (duo)",
        "region": "Volcano Manor",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:demi-human-queen-maggie:hermit-village",
        "name": "Demi-Human Queen Maggie",
        "region": "Hermit Village",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:demi-human-queen-margot:perfumer-s-ruins",
        "name": "Demi-Human Queen Margot",
        "region": "Perfumer's Ruins",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:full-grown-fallingstar-beast:mt-gelmir-crater",
        "name": "Full-Grown Fallingstar Beast",
        "region": "Mt. Gelmir Crater",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:god-devouring-serpent-rykard-lord-of-blasphemy:volcano-manor",
        "name": "God-Devouring Serpent / Rykard, Lord of Blasphemy",
        "region": "Volcano Manor",
        "content": "base"
      },
      {
        "id": "elden-ring:godskin-noble:volcano-manor",
        "name": "Godskin Noble",
        "region": "Volcano Manor",
        "content": "base"
      },
      {
        "id": "elden-ring:kindred-of-rot-duo:volcano-manor",
        "name": "Kindred of Rot (duo)",
        "region": "Volcano Manor",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:magma-wyrm:mt-gelmir",
        "name": "Magma Wyrm",
        "region": "Mt. Gelmir",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:red-wolf-of-the-champion:volcano-manor-interior",
        "name": "Red Wolf of the Champion",
        "region": "Volcano Manor interior",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:ulcerated-tree-spirit:volcano-manor",
        "name": "Ulcerated Tree Spirit",
        "region": "Volcano Manor",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:bell-bearing-hunter:hermit-merchant-s-shack-night",
        "name": "Bell Bearing Hunter",
        "region": "Hermit Merchant's Shack (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:ancestor-spirit:siofra-river",
        "name": "Ancestor Spirit",
        "region": "Siofra River",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:dragonkin-soldier:siofra-river",
        "name": "Dragonkin Soldier",
        "region": "Siofra River",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:mimic-tear:nokron-eternal-city",
        "name": "Mimic Tear",
        "region": "Nokron, Eternal City",
        "content": "base"
      },
      {
        "id": "elden-ring:regal-ancestor-spirit:nokron-eternal-city",
        "name": "Regal Ancestor Spirit",
        "region": "Nokron, Eternal City",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:valiant-gargoyle-valiant-gargoyle-twinblade:siofra-aqueduct",
        "name": "Valiant Gargoyle & Valiant Gargoyle (Twinblade)",
        "region": "Siofra Aqueduct",
        "content": "base"
      },
      {
        "id": "elden-ring:mohg-lord-of-blood:mohgwyn-palace",
        "name": "Mohg, Lord of Blood",
        "region": "Mohgwyn Palace",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:dragonkin-soldier-of-nokstella:ainsel-river",
        "name": "Dragonkin Soldier of Nokstella",
        "region": "Ainsel River",
        "content": "base"
      },
      {
        "id": "elden-ring:astel-naturalborn-of-the-void:grand-cloister",
        "name": "Astel, Naturalborn of the Void",
        "region": "Grand Cloister",
        "content": "base"
      },
      {
        "id": "elden-ring:dragonkin-soldier:lake-of-rot",
        "name": "Dragonkin Soldier",
        "region": "Lake of Rot",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:bell-bearing-hunter:capital-outskirts-night",
        "name": "Bell Bearing Hunter",
        "region": "Capital Outskirts (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:crucible-knight-crucible-knight-ordovis:auriza-hero-s-grave",
        "name": "Crucible Knight & Crucible Knight Ordovis",
        "region": "Auriza Hero's Grave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:deathbird:capital-outskirts-night",
        "name": "Deathbird",
        "region": "Capital Outskirts (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:draconic-tree-sentinel:capital-rampart",
        "name": "Draconic Tree Sentinel",
        "region": "Capital Rampart",
        "content": "base"
      },
      {
        "id": "elden-ring:esgar-priest-of-blood:leyndell-catacombs",
        "name": "Esgar, Priest of Blood",
        "region": "Leyndell Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:fell-twins:outer-wall-phantom-tree",
        "name": "Fell Twins",
        "region": "Outer Wall Phantom Tree",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:godfrey-first-elden-lord:erdtree-sanctuary",
        "name": "Godfrey, First Elden Lord",
        "region": "Erdtree Sanctuary",
        "content": "base"
      },
      {
        "id": "elden-ring:grave-warden-duelist:auriza-side-tomb",
        "name": "Grave Warden Duelist",
        "region": "Auriza Side Tomb",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:mohg-the-omen:subterranean-shunning-grounds",
        "name": "Mohg, the Omen",
        "region": "Subterranean Shunning-Grounds",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:morgott-the-omen-king:erdtree-sanctuary",
        "name": "Morgott, the Omen King",
        "region": "Erdtree Sanctuary",
        "content": "base"
      },
      {
        "id": "elden-ring:night-s-cavalry:east-capital-rampart-night",
        "name": "Night's Cavalry",
        "region": "East Capital Rampart (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:onyx-lord:royal-grave-evergaol-area-2",
        "name": "Onyx Lord",
        "region": "Royal Grave Evergaol area",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:crucible-knight-siluria:deeproot-depths",
        "name": "Crucible Knight Siluria",
        "region": "Deeproot Depths",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:fia-s-champions:deeproot-depths",
        "name": "Fia's Champions",
        "region": "Deeproot Depths",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:lichdragon-fortissax:deeproot-depths",
        "name": "Lichdragon Fortissax",
        "region": "Deeproot Depths",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:black-blade-kindred:grand-lift-of-rold",
        "name": "Black Blade Kindred",
        "region": "Grand Lift of Rold",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:night-s-cavalry:forbidden-lands-night",
        "name": "Night's Cavalry",
        "region": "Forbidden Lands (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:stray-mimic-tear:hidden-path-to-the-haligtree",
        "name": "Stray Mimic Tear",
        "region": "Hidden Path to the Haligtree",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:borealis-the-freezing-fog:freezing-lake",
        "name": "Borealis the Freezing Fog",
        "region": "Freezing Lake",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:commander-niall:castle-sol",
        "name": "Commander Niall",
        "region": "Castle Sol",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:death-rite-bird:mountaintops-night",
        "name": "Death Rite Bird",
        "region": "Mountaintops (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:erdtree-avatar:minor-erdtree-mountaintops",
        "name": "Erdtree Avatar",
        "region": "Minor Erdtree (Mountaintops)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:roundtable-knight-vyke:lord-contender-s-evergaol",
        "name": "Roundtable Knight Vyke",
        "region": "Lord Contender's Evergaol",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:spiritcaller-snail-godskin-apostle-godskin-noble:spiritcaller-s-cave",
        "name": "Spiritcaller Snail (Godskin Apostle & Godskin Noble)",
        "region": "Spiritcaller's Cave",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:ancient-hero-of-zamor:zamor-ruins",
        "name": "Ancient Hero of Zamor",
        "region": "Zamor Ruins",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:fire-giant:forge-of-the-giants",
        "name": "Fire Giant",
        "region": "Forge of the Giants",
        "content": "base"
      },
      {
        "id": "elden-ring:ulcerated-tree-spirit:giants-mountaintop-catacombs",
        "name": "Ulcerated Tree Spirit",
        "region": "Giants' Mountaintop Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:astel-stars-of-darkness:yelough-anix-tunnel",
        "name": "Astel, Stars of Darkness",
        "region": "Yelough Anix Tunnel",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:death-rite-bird:consecrated-snowfield-night",
        "name": "Death Rite Bird",
        "region": "Consecrated Snowfield (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:great-wyrm-theodorix:consecrated-snowfield",
        "name": "Great Wyrm Theodorix",
        "region": "Consecrated Snowfield",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:misbegotten-crusader:consecrated-snowfield",
        "name": "Misbegotten Crusader",
        "region": "Consecrated Snowfield",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:night-s-cavalry-duo:consecrated-snowfield-night",
        "name": "Night's Cavalry (duo)",
        "region": "Consecrated Snowfield (Night)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:putrid-avatar:minor-erdtree-snowfield",
        "name": "Putrid Avatar",
        "region": "Minor Erdtree (Snowfield)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:putrid-grave-warden-duelist:ord-catacombs",
        "name": "Putrid Grave Warden Duelist",
        "region": "Ord Catacombs",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:loretta-knight-of-the-haligtree:haligtree-treetops",
        "name": "Loretta, Knight of the Haligtree",
        "region": "Haligtree Treetops",
        "content": "base"
      },
      {
        "id": "elden-ring:malenia-blade-of-miquella:elphael-brace-of-haligtree",
        "name": "Malenia, Blade of Miquella",
        "region": "Elphael, Brace of Haligtree",
        "content": "base"
      },
      {
        "id": "elden-ring:beast-clergyman-maliketh-the-black-blade:farum-azula",
        "name": "Beast Clergyman / Maliketh, the Black Blade",
        "region": "Farum Azula",
        "content": "base"
      },
      {
        "id": "elden-ring:dragonlord-placidusax:farum-azula-hidden-arena",
        "name": "Dragonlord Placidusax",
        "region": "Farum Azula (hidden arena)",
        "content": "base",
        "optional": true
      },
      {
        "id": "elden-ring:godskin-duo:farum-azula",
        "name": "Godskin Duo",
        "region": "Farum Azula",
        "content": "base"
      },
      {
        "id": "elden-ring:sir-gideon-ofnir-the-all-knowing:ashen-capital",
        "name": "Sir Gideon Ofnir, the All-Knowing",
        "region": "Ashen Capital",
        "content": "base"
      },
      {
        "id": "elden-ring:godfrey-first-elden-lord-hoarah-loux-warrior:erdtree-sanctuary",
        "name": "Godfrey, First Elden Lord / Hoarah Loux, Warrior",
        "region": "Erdtree Sanctuary",
        "content": "base"
      },
      {
        "id": "elden-ring:radagon-of-the-golden-order-elden-beast:elden-throne",
        "name": "Radagon of the Golden Order / Elden Beast",
        "region": "Elden Throne",
        "content": "base"
      },
      {
        "id": "elden-ring:chief-bloodfiend:fog-rift-catacombs",
        "name": "Chief Bloodfiend",
        "region": "Fog Rift Catacombs",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:demi-human-swordmaster-onze:moorth-ruins",
        "name": "Demi-Human Swordmaster Onze",
        "region": "Moorth Ruins",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:furnace-golem:gravesite-plain",
        "name": "Furnace Golem",
        "region": "Gravesite Plain",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:ghostflame-dragon:gravesite-plain",
        "name": "Ghostflame Dragon",
        "region": "Gravesite Plain",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:knight-of-the-solitary-gaol:belurat-gaol",
        "name": "Knight of the Solitary Gaol",
        "region": "Belurat Gaol",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:red-bear:gravesite-plain",
        "name": "Red Bear",
        "region": "Gravesite Plain",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:divine-beast-dancing-lion:belurat-tower-settlement",
        "name": "Divine Beast Dancing Lion",
        "region": "Belurat, Tower Settlement",
        "content": "dlc"
      },
      {
        "id": "elden-ring:rellana-twin-moon-knight:castle-ensis",
        "name": "Rellana, Twin Moon Knight",
        "region": "Castle Ensis",
        "content": "dlc"
      },
      {
        "id": "elden-ring:black-knight-edredd:belurat-gaol",
        "name": "Black Knight Edredd",
        "region": "Belurat Gaol",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:black-knight-garrew:shadow-keep-area",
        "name": "Black Knight Garrew",
        "region": "Shadow Keep (area)",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:count-ymir-mother-of-fingers:cathedral-of-manus-metyr",
        "name": "Count Ymir, Mother of Fingers",
        "region": "Cathedral of Manus Metyr",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:curseblade-labirith:darklight-catacombs",
        "name": "Curseblade Labirith",
        "region": "Darklight Catacombs",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:death-knight:scadu-altus",
        "name": "Death Knight",
        "region": "Scadu Altus",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:dryleaf-dane:moorth-ruins-area",
        "name": "Dryleaf Dane",
        "region": "Moorth Ruins area",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:ghostflame-dragon:scadu-altus",
        "name": "Ghostflame Dragon",
        "region": "Scadu Altus",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:jori-elder-inquisitor:divided-falls",
        "name": "Jori, Elder Inquisitor",
        "region": "Divided Falls",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:metyr-mother-of-fingers:finger-ruins-of-rhia",
        "name": "Metyr, Mother of Fingers",
        "region": "Finger Ruins of Rhia",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:rakshasa:shadow-keep",
        "name": "Rakshasa",
        "region": "Shadow Keep",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:ralva-the-great-red-bear:scadu-altus",
        "name": "Ralva the Great Red Bear",
        "region": "Scadu Altus",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:dancer-of-ranah:cerulean-coast",
        "name": "Dancer of Ranah",
        "region": "Cerulean Coast",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:demi-human-queen-marigga:cerulean-coast",
        "name": "Demi-Human Queen Marigga",
        "region": "Cerulean Coast",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:ghostflame-dragon:cerulean-coast",
        "name": "Ghostflame Dragon",
        "region": "Cerulean Coast",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:putrescent-knight:stone-coffin-fissure",
        "name": "Putrescent Knight",
        "region": "Stone Coffin Fissure",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:death-rite-bird:charo-s-hidden-grave-night",
        "name": "Death Rite Bird",
        "region": "Charo's Hidden Grave (Night)",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:lamenter:finger-ruins-of-dheo",
        "name": "Lamenter",
        "region": "Finger Ruins of Dheo",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:tibia-mariner:charo-s-hidden-grave",
        "name": "Tibia Mariner",
        "region": "Charo's Hidden Grave",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:commander-gaius:scaduview",
        "name": "Commander Gaius",
        "region": "Scaduview",
        "content": "dlc"
      },
      {
        "id": "elden-ring:fallingstar-beast:scaduview",
        "name": "Fallingstar Beast",
        "region": "Scaduview",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:scadutree-avatar:minor-erdtree-shadow-realm",
        "name": "Scadutree Avatar",
        "region": "Minor Erdtree (Shadow Realm)",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:tree-sentinel-duo:scaduview",
        "name": "Tree Sentinel (duo)",
        "region": "Scaduview",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:midra-lord-of-frenzied-flame:midra-s-manse",
        "name": "Midra, Lord of Frenzied Flame",
        "region": "Midra's Manse",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:ancient-dragon-man:foot-of-the-jagged-peak",
        "name": "Ancient Dragon-Man",
        "region": "Foot of the Jagged Peak",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:jagged-peak-drake:jagged-peak-lower",
        "name": "Jagged Peak Drake",
        "region": "Jagged Peak (lower)",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:jagged-peak-drake-2nd:jagged-peak-mid",
        "name": "Jagged Peak Drake (2nd)",
        "region": "Jagged Peak (mid)",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:ancient-dragon-senessax:ancient-ruins-base",
        "name": "Ancient Dragon Senessax",
        "region": "Ancient Ruins Base",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:bayle-the-dread:jagged-peak",
        "name": "Bayle the Dread",
        "region": "Jagged Peak",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:death-knight:rauh-base",
        "name": "Death Knight",
        "region": "Rauh Base",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:rugalea-the-great-red-bear:dragon-s-pit-area",
        "name": "Rugalea the Great Red Bear",
        "region": "Dragon's Pit area",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:golden-hippopotamus:shadow-keep",
        "name": "Golden Hippopotamus",
        "region": "Shadow Keep",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:messmer-the-impaler-base-serpent-messmer:shadow-keep",
        "name": "Messmer the Impaler / Base Serpent Messmer",
        "region": "Shadow Keep",
        "content": "dlc"
      },
      {
        "id": "elden-ring:divine-beast-dancing-lion:ancient-ruins-of-rauh",
        "name": "Divine Beast Dancing Lion",
        "region": "Ancient Ruins of Rauh",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:romina-saint-of-the-bud:church-district",
        "name": "Romina, Saint of the Bud",
        "region": "Church District",
        "content": "dlc"
      },
      {
        "id": "elden-ring:promised-consort-radahn-radahn-consort-of-miquella:enir-ilim",
        "name": "Promised Consort Radahn / Radahn, Consort of Miquella",
        "region": "Enir-Ilim",
        "content": "dlc"
      },
      {
        "id": "elden-ring:ash-of-war-scarab:various-locations",
        "name": "Ash of War Scarab",
        "region": "Various locations",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:baleful-shadow:ainsel-river-ranni-quest",
        "name": "Baleful Shadow",
        "region": "Ainsel River (Ranni quest)",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:blaidd-the-half-wolf:mistwood-ruins",
        "name": "Blaidd the Half-Wolf",
        "region": "Mistwood Ruins",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:crucible-knight-devonia:leyndell-invasion",
        "name": "Crucible Knight Devonia",
        "region": "Leyndell (invasion)",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:divine-beast-warrior:land-of-shadow",
        "name": "Divine Beast Warrior",
        "region": "Land of Shadow",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:dragon-imp:various-locations",
        "name": "Dragon Imp",
        "region": "Various locations",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:elder-dragon-greyoll:dragonbarrow",
        "name": "Elder Dragon Greyoll",
        "region": "Dragonbarrow",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:ensha-of-the-royal-remains:roundtable-hold-invasion",
        "name": "Ensha of the Royal Remains",
        "region": "Roundtable Hold (invasion)",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:erdtree-avatar:minor-erdtree-unmarked",
        "name": "Erdtree Avatar",
        "region": "Minor Erdtree (unmarked)",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:fire-knight-kood:land-of-shadow",
        "name": "Fire Knight Kood",
        "region": "Land of Shadow",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:fire-knight-salza:land-of-shadow",
        "name": "Fire Knight Salza",
        "region": "Land of Shadow",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:fire-knight-wego:land-of-shadow",
        "name": "Fire Knight Wego",
        "region": "Land of Shadow",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:fire-prelate:mountaintops-farum-azula",
        "name": "Fire Prelate",
        "region": "Mountaintops / Farum Azula",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:furnace-golem:land-of-shadow-unmarked",
        "name": "Furnace Golem",
        "region": "Land of Shadow (unmarked)",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:golden-hippopotamus:land-of-shadow-invasion",
        "name": "Golden Hippopotamus",
        "region": "Land of Shadow (invasion)",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:mimic-tear:nokron-hidden",
        "name": "Mimic Tear",
        "region": "Nokron (hidden)",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:miquella-s-followers:enir-ilim",
        "name": "Miquella's Followers",
        "region": "Enir-Ilim",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:putrid-avatar:minor-erdtree-unmarked",
        "name": "Putrid Avatar",
        "region": "Minor Erdtree (unmarked)",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:putrid-tree-spirit:various-locations",
        "name": "Putrid Tree Spirit",
        "region": "Various locations",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:scorched-tree-spirit:land-of-shadow",
        "name": "Scorched Tree Spirit",
        "region": "Land of Shadow",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:troll-pot-thrower:various-locations",
        "name": "Troll Pot-Thrower",
        "region": "Various locations",
        "content": "dlc",
        "optional": true
      },
      {
        "id": "elden-ring:ulcerated-tree-spirit:various-locations-unmarked",
        "name": "Ulcerated Tree Spirit",
        "region": "Various locations (unmarked)",
        "content": "dlc",
        "optional": true
      }
    ]
  }
];
