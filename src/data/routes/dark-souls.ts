import type { BossRouteMap } from "./shared";

export const darkSoulsRoutes: BossRouteMap = {
  "dark-souls:asylum-demon": {
    paragraphs: [
      {
        textBefore:
          "This is the opening boss of the [place]Northern Undead Asylum[/place]. Start a fresh run, escape your cell with the [thing]Dungeon Cell Key[/thing], and follow the tutorial corridor until you enter the first large hall.",
      },
      {
        textBefore:
          "You can first see [entity]Asylum Demon[/entity] from above there, but the intended route is to run past him through the side door, collect your starting gear and shield, then climb back up to the upper walkway.",
      },
      {
        textBefore:
          "Drop through the broken floor from that upper ledge to begin the proper fight with [entity]Asylum Demon[/entity].",
      },
    ],
    tips: [
      "Open with the plunging attack from the ledge because it removes a huge chunk of health before the real spacing starts.",
      "Stay behind or slightly to the side of [entity]Asylum Demon[/entity], punish one or two swings, and back out before the butt slam catches you.",
    ],
  },
  "dark-souls:taurus-demon": {
    paragraphs: [
      {
        textBefore:
          "From the [place]Firelink Shrine[/place] bonfire, take the aqueduct into [place]Undead Burg[/place], clear upward through the houses and bomb throwers, and rest at the burg bonfire if you want the shorter runback.",
      },
      {
        textBefore:
          "Keep pushing up the battlements, use the ladder shortcut that kicks back toward the bonfire, and work through the final rooftop stretch until you reach the long wall with two archers on the tower behind you.",
      },
      {
        textBefore:
          "Climb that ladder to kill the archers, come back down, and move forward on the rampart to trigger [entity]Taurus Demon[/entity].",
      },
    ],
    tips: [
      "After the trigger, sprint back to the ladder tower and use the plunging attack whenever the spacing allows it.",
      "If you stay on the bridge, fight near the middle and roll through the axe swing instead of getting pinned at the fog gate or the far wall.",
    ],
  },
  "dark-souls:hellkite-dragon-the-bridge-wyvern": {
    paragraphs: [
      {
        textBefore:
          "After [entity]Taurus Demon[/entity], cross the tower to the large bridge where you meet [entity]Solaire of Astora[/entity]. The optional [entity]Hellkite Dragon[/entity] encounter starts on the same [place]Undead Burg[/place] bridge that leads toward the [place]Undead Parish[/place].",
      },
      {
        textBefore:
          "Move onto the bridge far enough to draw the wyvern in, then use the stairwell and the under-bridge passage for cover while you reach a stable position near the midpoint or the parish-side end of the bridge.",
      },
      {
        textBefore:
          "From there, you can commit to dealing with the [entity]Hellkite Dragon[/entity] before continuing on to the portcullis and the sunlight altar side.",
      },
    ],
    tips: [
      "This is safest as a ranged attrition fight. Shoot during or just after the landing windows, then get back under cover before the flame sweep.",
      "If you only want to pass, bait the landing or flame pattern, sprint through the opening, and do not linger on the center span.",
    ],
  },
  "dark-souls:bell-gargoyles": {
    paragraphs: [
      {
        textBefore:
          "From the [place]Undead Parish[/place], either come up from the sunlight bridge or the [entity]Andre of Astora[/entity] side. Enter the church, clear the lower hall and the armored boar yard outside, then work your way up through the interior stairs.",
      },
      {
        textBefore:
          "Keep climbing past the [entity]Balder Knights[/entity] and the channeler level until you reach the church roof access. If you want the safer runback first, unlock the elevator shortcut that drops back to [place]Firelink Shrine[/place].",
      },
      {
        textBefore:
          "Take the final ladder to the rooftop and step through the fog to face the [entity]Bell Gargoyles[/entity].",
      },
    ],
    tips: [
      "The cleanest route is to burst the first gargoyle before the second fully joins, because the fight gets much harder once both control the roof with fire and halberd swings.",
      "Stay aware of the roof edges and angle your dodges inward, not sideways off the church.",
    ],
  },
  "dark-souls:capra-demon": {
    paragraphs: [
      {
        textBefore:
          "After picking up the [thing]Basement Key[/thing] in the [place]Undead Parish[/place], return to the locked door at the far end of the dragon bridge in [place]Undead Burg[/place] and enter [place]Lower Undead Burg[/place].",
      },
      {
        textBefore:
          "Push down through the thieves, dogs, and tight alleyways until you open the shortcut door back toward the upper burg route. Keep descending through the lower streets until the narrow dead-end arena entrance appears ahead.",
      },
      {
        textBefore:
          "Go through that fog gate to start the [entity]Capra Demon[/entity] fight.",
      },
    ],
    tips: [
      "The opening seconds decide the fight. Get up the stairs and onto the ledge quickly so the dogs lose their angle and the room stops smothering you.",
      "Once the dogs are gone, treat [entity]Capra Demon[/entity] like a normal ultra weapon duel: bait, roll, punish, reset.",
    ],
  },
  "dark-souls:moonlight-butterfly": {
    paragraphs: [
      {
        textBefore:
          "From [entity]Andre of Astora[/entity], enter [place]Darkroot Garden[/place] through the doorway beside his bonfire and follow the forest path until it opens into the stone knight clearing.",
      },
      {
        textBefore:
          "Hug the left side through the open garden, pass the sleeping [entity]Stone Knights[/entity], and continue into the tower stairwell that rises out of the woods.",
      },
      {
        textBefore:
          "Climb all the way up and cross the fog to the bridge where [entity]Moonlight Butterfly[/entity] waits.",
      },
    ],
    tips: [
      "If you are in human form, the [entity]Witch Beatrice[/entity] summon under the stairs makes this much easier for non-ranged builds.",
      "Most of the fight is about surviving the spell cycle until [entity]Moonlight Butterfly[/entity] lands. Punish the landing hard, then go back to dodging instead of chasing damage.",
    ],
  },
  "dark-souls:gaping-dragon": {
    paragraphs: [
      {
        textBefore:
          "Use the [thing]Key to Depths[/thing] from [entity]Capra Demon[/entity] to open the locked door near the butcher side of [place]Lower Undead Burg[/place], then descend into the [place]Depths[/place].",
      },
      {
        textBefore:
          "Work through the sewer channels, past the giant rat and the butcher rooms, then keep dropping deeper until you reach the large chamber with the channeler and the final route into the lower basin.",
      },
      {
        textBefore:
          "Cross the last open floor and step through the fog to face [entity]Gaping Dragon[/entity].",
      },
    ],
    tips: [
      "Kill the channeler on the balcony before committing to the boss room so you are not dealing with ranged buffs and projectiles during the fight.",
      "Once inside, bait the forward slam or charge, move to the flank, and take your damage while the dragon is recovering instead of staying in front of the head.",
    ],
  },
  "dark-souls:stray-demon": {
    paragraphs: [
      {
        textBefore:
          "To revisit the [place]Northern Undead Asylum[/place], return to the crow nest above [place]Firelink Shrine[/place], curl up in the nest, and let the crow carry you back.",
      },
      {
        textBefore:
          "Re-enter the old asylum, unlock the upper doors with the revisit keys, and make your way back to the original [entity]Asylum Demon[/entity] arena from the upper level.",
      },
      {
        textBefore:
          "Walk onto the center of the old floor until it collapses, dropping you into the lower chamber with [entity]Stray Demon[/entity].",
      },
    ],
    tips: [
      "[entity]Stray Demon[/entity] is much safer from behind than from the front because the explosive magic blasts cover his frontal space far better than his rear.",
      "Do not overstay after a punish. The delayed magic burst is what catches most greedy swings in this room.",
    ],
  },
  "dark-souls:chaos-witch-quelaag": {
    paragraphs: [
      {
        textBefore:
          "From the [place]Depths[/place], continue down the normal route into [place]Blighttown[/place], work through the upper scaffolds and ladders, and descend all the way into the poison swamp.",
      },
      {
        textBefore:
          "Follow the swamp edge toward the large cave mouth guarded by boulder-throwing infested giants. Rest at the swamp bonfire if you want the shorter retry route, then head inside [place]Quelaag's Domain[/place].",
      },
      {
        textBefore:
          "Move through the egg carrier tunnel and traverse the fog at the far end to fight [entity]Chaos Witch Quelaag[/entity].",
      },
    ],
    tips: [
      "Watch the human half, not just the spider body. Her tells for the explosion and sword swings are easier to read there.",
      "Stay disciplined around the lava pools. Most deaths come from getting trapped by terrain after a good punish window, not from failing the basic dodge timing.",
    ],
  },
  "dark-souls:great-grey-wolf-sif": {
    paragraphs: [
      {
        textBefore:
          "From [entity]Andre of Astora[/entity], enter [place]Darkroot Garden[/place] and continue through the forest toward the sealed gate that opens with the [thing]Crest of Artorias[/thing].",
      },
      {
        textBefore:
          "Pass through the hunter woods, keep moving toward the bright clearing beyond the bridge, and use the giant stone door to enter the graveyard at the far end of the garden.",
      },
      {
        textBefore:
          "Approach the enormous gravestone and sword in the center to trigger [entity]Great Grey Wolf Sif[/entity].",
      },
    ],
    tips: [
      "Fight under or just behind [entity]Sif[/entity] instead of at mid-range, because the long sword arcs are harder to manage if you stay in front.",
      "If you need healing, create distance after a leap or spin recovery rather than trying to flask under the body.",
    ],
  },
  "dark-souls:hydra": {
    paragraphs: [
      {
        textBefore:
          "From [entity]Andre of Astora[/entity], take the descending path into [place]Darkroot Basin[/place] and keep following the slope past the crystal golems and the black knight section until the route opens by the lake.",
      },
      {
        textBefore:
          "Move down to the shoreline carefully because the [entity]Hydra[/entity] begins firing water volleys as soon as you enter the basin. Clear the crystal golems on the bank first if you want the arena cleaner.",
      },
      {
        textBefore:
          "From the water's edge, the optional [entity]Hydra[/entity] encounter is fully active.",
      },
    ],
    tips: [
      "Block or dodge the ranged barrage on the approach, then get close enough that the heads start slamming the shoreline instead of spamming projectiles.",
      "Once the necks are in melee range, cut one head at a time and mind the drop-off in the water while you reposition.",
    ],
  },
  "dark-souls:iron-golem": {
    paragraphs: [
      {
        textBefore:
          "After ringing both Bells of Awakening, enter [place]Sen's Fortress[/place] from the gate above [place]Undead Parish[/place] and work through the pendulum halls, serpent soldiers, and trap corridors until you reach the rooftop section.",
      },
      {
        textBefore:
          "Cross the upper boulder routes and exterior walkways, climb the final tower, and kill the giant firebomb thrower above the arena before you commit to the boss gate.",
      },
      {
        textBefore:
          "Return to the fog below and step out onto the roof bridge to fight [entity]Iron Golem[/entity].",
      },
    ],
    tips: [
      "Breaking the golem's balance is the fastest way to end this. Hammer the legs and use the stagger to knock him off the platform if the positioning gives it to you.",
      "Do not ignore the firebomb giant. Leaving him alive makes an already awkward arena much less forgiving.",
    ],
  },
  "dark-souls:crossbreed-priscilla": {
    paragraphs: [
      {
        textBefore:
          "To reach [place]Painted World of Ariamis[/place], bring the [thing]Peculiar Doll[/thing] from the revisited [place]Northern Undead Asylum[/place] back to the giant painting in the lower cathedral of [place]Anor Londo[/place].",
      },
      {
        textBefore:
          "Once inside the painting, progress through the courtyard, battlements, and annex route until you reach the far end of the world where the boss bridge rises into the snowy graveyard.",
      },
      {
        textBefore:
          "Cross into the final white clearing and approach [entity]Crossbreed Priscilla[/entity]. She is optional and will let you leave if you simply walk past her to the ledge beyond.",
      },
    ],
    tips: [
      "If you choose to fight, watch the snow and footprints after she turns invisible. That is the cleanest way to track her position.",
      "Her scythe hits hard and bleeds quickly, so take single clean punishes and reset instead of trying to win the trade.",
    ],
  },
  "dark-souls:ornstein-and-smough": {
    paragraphs: [
      {
        textBefore:
          "After [entity]Iron Golem[/entity], ride the bat demons into [place]Anor Londo[/place], clear the cathedral approach, and work across the rafters until you can move the giant rotating staircase.",
      },
      {
        textBefore:
          "Use the staircase and interior halls to open the main cathedral route, then push through the silver knight wing and the giant sentry chamber until the long hallway with the final boss fog opens in front of you.",
      },
      {
        textBefore:
          "Traverse that fog to face [entity]Ornstein and Smough[/entity].",
      },
    ],
    tips: [
      "Use the pillars to separate them. The fight is much more manageable when one body blocks the other's line and charge angle.",
      "Decide early which second-phase boss you want, because your target order changes the rest of the fight completely.",
    ],
  },
  "dark-souls:dark-sun-gwyndolin": {
    paragraphs: [
      {
        textBefore:
          "Go to the bottom of the rotating staircase in [place]Anor Londo[/place] to reach the [place]Darkmoon Tomb[/place] bonfire. To open the way, either equip the [thing]Darkmoon Seance Ring[/thing] from the [place]Catacombs[/place] or dispel the illusion in [place]Anor Londo[/place] by attacking [entity]Gwynevere[/entity].",
      },
      {
        textBefore:
          "Once the statue behind the tomb is gone, descend the hidden stairway and move down the carpeted hall toward the fog. If you want the covenant first, kneel before entering.",
      },
      {
        textBefore:
          "Cross the fog when you are ready to fight [entity]Dark Sun Gwyndolin[/entity].",
      },
    ],
    tips: [
      "This is a sprint-and-cover fight. Use the hallway pillars to break line of sight on the magic volleys and close distance between casts.",
      "His bow shot is the most punishing attack at range. If you see it coming, focus on the timing first and your punish second.",
    ],
  },
  "dark-souls:pinwheel": {
    paragraphs: [
      {
        textBefore:
          "From the cemetery beside [place]Firelink Shrine[/place], descend into [place]The Catacombs[/place] and keep pushing downward through the skeleton bridges, necromancer rooms, and rotating trap sections.",
      },
      {
        textBefore:
          "Continue past [entity]Blacksmith Vamos[/entity]'s lower valley and through the wheel skeleton basin until you reach the final fog at the bottom of the catacombs.",
      },
      {
        textBefore:
          "Step through to confront [entity]Pinwheel[/entity].",
      },
    ],
    tips: [
      "[entity]Pinwheel[/entity] is fragile, so heavy early pressure usually ends the fight before the clone spam matters.",
      "If the copies do spread out, clear the closest threat and keep moving so the fireballs do not stack on top of each other.",
    ],
  },
  "dark-souls:gravelord-nito": {
    paragraphs: [
      {
        textBefore:
          "After [entity]Pinwheel[/entity], climb down the ladder in his arena into the [place]Tomb of the Giants[/place]. Bring a light source or [thing]Cast Light[/thing], because the route is built around near-total darkness.",
      },
      {
        textBefore:
          "Follow the narrow ledges and giant skeleton paths deeper into the tomb, pass the skeleton beast sections, and keep descending until the cave opens into the watery basin before the final fog gate.",
      },
      {
        textBefore:
          "Move through the pinwheel servant area and enter the fog to fight [entity]Gravelord Nito[/entity].",
      },
    ],
    tips: [
      "Do not rush toward the back of the room. Staying closer to where you land helps avoid waking the larger skeletons on the far side.",
      "Divine damage or a divine sidearm keeps the skeleton adds from immediately getting back up and makes the fight much cleaner.",
    ],
  },
  "dark-souls:seath-the-scaleless": {
    paragraphs: [
      {
        textBefore:
          "After placing the [thing]Lordvessel[/thing], enter [place]The Duke's Archives[/place] from [place]Anor Londo[/place] and push through the first archive wing until the scripted first encounter with [entity]Seath the Scaleless[/entity].",
      },
      {
        textBefore:
          "Escape the prison tower afterward, reopen the archive route from the upper library, and continue all the way through the crystal garden into [place]Crystal Cave[/place]. Follow the invisible paths and crystal bridges until you reach the final cavern.",
      },
      {
        textBefore:
          "At the end of that route, cross the fog to the true [entity]Seath the Scaleless[/entity] fight.",
      },
    ],
    tips: [
      "Break the [thing]Primordial Crystal[/thing] first or the fight is unwinnable. Once it shatters, move to Seath's flanks instead of staying in front of the breath attacks.",
      "If you want the tail cut, commit to the rear tail base during the early reposition window, not after the arena starts filling with crystals.",
    ],
  },
  "dark-souls:the-four-kings": {
    paragraphs: [
      {
        textBefore:
          "From the elevator below [place]Firelink Shrine[/place], enter [place]New Londo Ruins[/place] and work through the flooded city until you reach [entity]Ingward[/entity] and the mechanism that lowers the water.",
      },
      {
        textBefore:
          "Once the ruins are drained, continue through the lower buildings, over the wooden bridges, and past the [entity]Darkwraiths[/entity] until you reach the great doorway into the abyssal seal chamber.",
      },
      {
        textBefore:
          "Equip the [thing]Covenant of Artorias[/thing], go through the final fog, and drop into [place]The Abyss[/place] to begin the [entity]Four Kings[/entity] fight.",
      },
    ],
    tips: [
      "This is a damage race as much as a dodge test. Stay aggressive enough to kill each king before the next fully overlaps the arena.",
      "Fight at close range when possible, because several attacks are easier to survive point-blank than at medium distance.",
    ],
  },
  "dark-souls:ceaseless-discharge": {
    paragraphs: [
      {
        textBefore:
          "After [entity]Chaos Witch Quelaag[/entity], ring the second bell and descend through the hidden route behind her sister's chamber into the [place]Demon Ruins[/place].",
      },
      {
        textBefore:
          "Follow the long lava-side path down to the corpse carrying the [thing]Gold-Hemmed Black Set[/thing]. Looting that body or attacking from this platform activates [entity]Ceaseless Discharge[/entity].",
      },
      {
        textBefore:
          "That cliffside platform is the start of the boss encounter.",
      },
    ],
    tips: [
      "The simple method is to bait him back toward the entrance after waking him, then punish the arm at the ledge instead of dueling out in the lava basin.",
      "If you fight him in the open, respect the fire lines and do not get trapped near the corpse platform.",
    ],
  },
  "dark-souls:centipede-demon": {
    paragraphs: [
      {
        textBefore:
          "After [entity]Ceaseless Discharge[/entity] drains the lava, continue across the cooled lower [place]Demon Ruins[/place], pass the capra and taurus demon sections, and defeat [entity]Demon Firesage[/entity] on the way down.",
      },
      {
        textBefore:
          "From the bonfire beyond that fight, follow the root tunnel out to the vast lava arena at the base of the ruins.",
      },
      {
        textBefore:
          "Traverse the fog there to face [entity]Centipede Demon[/entity].",
      },
    ],
    tips: [
      "Use the safe land on the arena edge whenever you can. Fighting on solid ground is the difference between a readable duel and getting cooked by the floor.",
      "Cutting the tail or arm that drops the [thing]Orange Charred Ring[/thing] can make the rest of the encounter much safer if the fight drags on.",
    ],
  },
  "dark-souls:firesage-demon": {
    paragraphs: [
      {
        textBefore:
          "Once the lava is drained after [entity]Ceaseless Discharge[/entity], move deeper through the [place]Demon Ruins[/place] across the wide open lower field where the surviving demon packs now stand on solid ground.",
      },
      {
        textBefore:
          "Keep to the root-lined path that leads down toward the deeper ruins until you reach the fog gate blocking the next descent.",
      },
      {
        textBefore:
          "Go through that fog to fight [entity]Demon Firesage[/entity].",
      },
    ],
    tips: [
      "Treat him like the asylum demon variants, but with much more respect for the area blast. His magic explosion reaches farther than the model suggests.",
      "Circle to the rear, take short punishes, and get out before the follow-up slam or explosion clips you.",
    ],
  },
  "dark-souls:bed-of-chaos": {
    paragraphs: [
      {
        textBefore:
          "After [entity]Centipede Demon[/entity], use the [thing]Orange Charred Ring[/thing] or the Chaos Servant shortcut route to enter [place]Lost Izalith[/place] and cross the lava field toward the ruined city.",
      },
      {
        textBefore:
          "Work through the temple and branch-lined interior until you reach the massive root-choked chamber at the bottom of the city.",
      },
      {
        textBefore:
          "Traverse the final fog to begin the [entity]Bed of Chaos[/entity] encounter.",
      },
    ],
    tips: [
      "This is a pathing puzzle more than a normal boss. Break one side, reset your position, break the other, then commit to the center run only when the line is clear.",
      "Use a shield only if it helps you survive the arm sweeps. Most of the real progress comes from movement discipline and learning the floor collapses.",
    ],
  },
  "dark-souls:gwyn-lord-of-cinder": {
    paragraphs: [
      {
        textBefore:
          "After claiming the Lord Souls and offering them to the [thing]Lordvessel[/thing] at the [place]Firelink Altar[/place], the way to the [place]Kiln of the First Flame[/place] opens.",
      },
      {
        textBefore:
          "Enter the kiln, fight through the line of [entity]Black Knights[/entity], and follow the ash-covered slope all the way down to the arena of the First Flame.",
      },
      {
        textBefore:
          "At the end of the kiln, step through the fog to face [entity]Gwyn, Lord of Cinder[/entity].",
      },
    ],
    tips: [
      "[entity]Gwyn[/entity] is much easier if you can parry consistently, because several of his main sword strings are built to be turned against him.",
      "If you are not parrying, use the terrain and his recovery after leap or grab attempts to create your heal windows instead of trying to flask in neutral.",
    ],
  },
  "dark-souls:sanctuary-guardian": {
    paragraphs: [
      {
        textBefore:
          "To start the DLC, kill the [entity]Hydra[/entity] in [place]Darkroot Basin[/place], rescue [entity]Dusk of Oolacile[/entity] from the golden crystal golem in the lakeside cave, then later collect the [thing]Broken Pendant[/thing] from the crystal golem at the entrance to [place]The Duke's Archives[/place].",
      },
      {
        textBefore:
          "Return to the basin cave behind the hydra lake, interact with the dark portal, and let it pull you into the [place]Sanctuary Garden[/place].",
      },
      {
        textBefore:
          "Walk forward through the garden and cross the fog to fight the [entity]Sanctuary Guardian[/entity].",
      },
    ],
    tips: [
      "Stay mobile around the body and do not overcommit after the tail or horn swipes, because the lightning follow-ups close distance fast.",
      "If you can stay near the flank, the fight becomes much more readable than it looks from directly in front of the bridge.",
    ],
  },
  "dark-souls:artorias-the-abysswalker": {
    paragraphs: [
      {
        textBefore:
          "After [entity]Sanctuary Guardian[/entity], move through [place]Oolacile Sanctuary[/place] into [place]Royal Wood[/place]. Follow the outer edge and shortcuts through the forest until you reach the stone tower with the elevator down to the coliseum path.",
      },
      {
        textBefore:
          "Ride the elevator, clear the short lower approach, and continue to the fog gate at the end of the arena tunnel.",
      },
      {
        textBefore:
          "Traverse it to face [entity]Artorias the Abysswalker[/entity].",
      },
    ],
    tips: [
      "Artorias punishes panic healing hard. Heal only after the long leap, the sliding thrust recovery, or other clearly finished strings.",
      "If he starts charging the abyss buff, either break the cast with enough damage or back off and prepare for the much deadlier version of the fight.",
    ],
  },
  "dark-souls:black-dragon-kalameet": {
    paragraphs: [
      {
        textBefore:
          "You first encounter [entity]Black Dragon Kalameet[/entity] in [place]Royal Wood[/place], but the real fight opens later. After defeating [entity]Artorias the Abysswalker[/entity], continue through [place]Oolacile Township[/place] and pick up the [thing]Crest Key[/thing] from the mimic in the lower township.",
      },
      {
        textBefore:
          "Use that key to unlock [entity]Hawkeye Gough[/entity]'s tower in [place]Royal Wood[/place], speak with him so he brings [entity]Kalameet[/entity] down, then return to the valley below the waterfall and ladder route where the dragon had been strafing the area.",
      },
      {
        textBefore:
          "Enter the fog at the bottom of that valley to begin the true [entity]Black Dragon Kalameet[/entity] fight.",
      },
    ],
    tips: [
      "Physical damage works better than elemental damage here, and patience matters more than trying to force tail or head hits every window.",
      "If you want the tail cut, commit to learning the specific tail slam and fly-by punish windows. Chasing it at random just gets you burned or trampled.",
    ],
  },
  "dark-souls:manus-father-of-the-abyss": {
    paragraphs: [
      {
        textBefore:
          "After [entity]Artorias the Abysswalker[/entity], push through [place]Oolacile Township[/place] and descend into the dungeon route that leads down toward the abyssal caverns.",
      },
      {
        textBefore:
          "Follow the broken lifts, ladders, and cave descent into the [place]Chasm of the Abyss[/place], then keep dropping deeper through the humanity-filled tunnels until you reach the final fog gate at the bottom.",
      },
      {
        textBefore:
          "Step through there to face [entity]Manus, Father of the Abyss[/entity].",
      },
    ],
    tips: [
      "This fight gets much cleaner if you bring the [thing]Silver Pendant[/thing], because it gives you an answer to the dark magic bursts instead of forcing every dodge on reaction.",
      "Stay calm after each hit. Manus strings are long, and the second greedy swing is usually the one that gets punished.",
    ],
  },
};
