export interface RouteInlineReveal {
  id: string;
  hiddenText: string;
}

export interface RouteParagraph {
  textBefore?: string;
  reveal?: RouteInlineReveal;
  textAfter?: string;
}

export interface BossRouteEntry {
  paragraphs: RouteParagraph[];
  tips?: string[];
}

export const bossRoutes: Record<string, BossRouteEntry> = {
  "demons-souls:phalanx:boletarian-palace": {
    paragraphs: [
      {
        textBefore:
          "From the [thing]Archstone of the Covetous King[/thing] in the [place]Nexus[/place], enter [place]Gates of Boletaria[/place] and play through 1-1 until you unlock the shortcut that loops back to the opening gate.",
      },
      {
        textBefore:
          "After the shortcut is open, climb back up the tower, take the doorway beside the [entity]Blue Eye Knight[/entity], work across the wooden walkways and the dragon bridge, then pull the lever that raises the huge gate leading straight to [entity]Phalanx[/entity]'s fog wall.",
      },
      {
        textBefore:
          "Before you step through, make sure you kept the fire items from the level because ",
        reveal: {
          id: "phalanx-fire",
          hiddenText:
            "[entity]Phalanx[/entity] is heavily weak to fire.",
        },
        textAfter: "",
      },
    ],
    tips: [
      "Open with [thing]firebombs[/thing] or a [thing]Turpentine[/thing]-buffed weapon to strip away the [entity]hoplites[/entity] quickly, then collapse on the exposed core before the shield mass reforms.",
    ],
  },
  "demons-souls:tower-knight:boletarian-palace": {
    paragraphs: [
      {
        textBefore:
          "Warp to the [thing]Archstone of the Covetous King[/thing] in the [place]Nexus[/place], then take the [place]Phalanx[/place] Archstone into [place]The Lord's Path[/place]. Push forward under the bridge, clear the soldiers in the tunnel, and come back out to the long approach where the dragon strafes the road.",
      },
      {
        textBefore:
          "Use the covered side paths and timing between flame passes to cross the bridge sections, then keep moving through the carts, wolves, and bowmen until you reach the final gatehouse. Clear the soldiers there, pass the two [entity]Blue Eye Knights[/entity], and go straight through the fog into the courtyard.",
      },
      {
        textBefore:
          "Pass the last gatehouse and step through the fog to start the boss encounter.",
      },
    ],
    tips: [
      "Once the fight starts, sprint for one of the staircases at the back because the normal route is to kill the eight wall archers first.",
      "After the walls are clear, stay near [entity]Tower Knight[/entity]'s feet, break his balance by attacking the ankles, and punish his head when he falls.",
    ],
  },
  "demons-souls:penetrator:boletarian-palace": {
    paragraphs: [
      {
        textBefore:
          "After clearing at least one other archdemon, warp to the [thing]Tower Knight Archstone[/thing] in the [place]Nexus[/place] and enter [place]Inner Ward[/place]. Push through the burning dogs, the fat officials, and the side alleys until you reach the long staircase into the city interior.",
      },
      {
        textBefore:
          "Keep advancing through the gatehouses and battlements, cross the plaza where the soldiers and crossbowmen gather, then continue until the huge inner courtyard opens up ahead of you.",
      },
      {
        textBefore:
          "Once the barricades are down and the path is open, cross the plaza and go straight through the fog to reach [entity]Penetrator[/entity].",
      },
    ],
    tips: [
      "If [entity]Biorr[/entity] is alive and rescued, he can join the fight and draw aggro, but even without him the safe pattern is to bait a thrust, dodge to the side, and take one or two hits before backing out.",
    ],
  },
  "demons-souls:old-king-allant:boletarian-palace": {
    paragraphs: [
      {
        textBefore:
          "After [entity]Penetrator[/entity] falls, use the [thing]Penetrator Archstone[/thing] from the [place]Nexus[/place] to enter [place]The King's Tower[/place]. Climb the outer steps, clear the officials and archers, and follow the narrow ramparts toward the dead dragon overlook.",
      },
      {
        textBefore:
          "Work your way up the tower approach, past the [entity]Blue Dragon[/entity] bridge section and through the final stairwell until you reach the lift that carries you into the throne room ruins.",
      },
      {
        textBefore:
          "Ride the lift up, step into the shattered audience chamber, and cross the long hall to the fog gate at the far end to face [entity]Old King Allant[/entity].",
      },
    ],
    tips: [
      "[entity]Old King Allant[/entity] is at his most dangerous when you stay in front of him for too long. Bait a combo or charge, dodge off-line, land a short punish, and reset before he can start the soul-draining grab.",
    ],
  },
  "demons-souls:red-dragon:boletarian-palace": {
    paragraphs: [
      {
        textBefore:
          "Warp to the [thing]Phalanx Archstone[/thing] in the [place]Nexus[/place] and enter [place]The Lord's Path[/place]. Clear the opening tunnel and move up to the first exposed bridge section under the [entity]Red Dragon[/entity]'s bombing run.",
      },
      {
        textBefore:
          "Use the side cover and bridge structures to reach a stable position on the approach where the optional dragon encounter is available.",
      },
      {
        textBefore:
          "From that position, you can deal with the [entity]Red Dragon[/entity] before continuing deeper into the level.",
      },
    ],
    tips: [
      "This is mostly a ranged kill. Shoot during the turn or glide portion of each pass, then get back behind cover before the next flame sweep lands.",
    ],
  },
  "demons-souls:blue-dragon:boletarian-palace": {
    paragraphs: [
      {
        textBefore:
          "Use the [thing]Penetrator Archstone[/thing] from the [place]Nexus[/place] to return to [place]The King's Tower[/place]. Climb the tower path again until you reach the long staircase and bridge section guarded by the [entity]Blue Dragon[/entity].",
      },
      {
        textBefore:
          "Push up the approach until you can enter the stone doorway just beyond its fire lane. From that entrance, the optional dragon encounter is available.",
      },
      {
        textBefore:
          "Deal with the [entity]Blue Dragon[/entity] from that section if you want the route above to open up more safely.",
      },
    ],
    tips: [
      "This fight is safest as a ranged execution. Shoot from the doorway or other hard cover, and do not overcommit on the bridge where the fire breath still clips the path.",
    ],
  },
  "demons-souls:armor-spider:stonefang-tunnel": {
    paragraphs: [
      {
        textBefore:
          "Warp to the [thing]Archstone of the Burrow King[/thing] in the [place]Nexus[/place] and enter [place]Smithing Grounds[/place]. Ride the lift machinery down, clear the miners and dogs through the tunnels, and follow the main descent toward the forge chambers.",
      },
      {
        textBefore:
          "Stay on the straightforward mine route until the tunnels narrow into the long, webbed corridor that leads directly to the boss arena.",
      },
      {
        textBefore:
          "Step through the fog at the end of that tunnel to reach [entity]Armor Spider[/entity].",
      },
    ],
    tips: [
      "The arena is a straight tunnel, so this is a rhythm fight. Use the side walls and your distance to avoid the web, fireballs, and slam, then punish while the spider resets.",
    ],
  },
  "demons-souls:flamelurker:stonefang-tunnel": {
    paragraphs: [
      {
        textBefore:
          "Use the [thing]Armor Spider Archstone[/thing] from the [place]Nexus[/place] to enter [place]The Tunnel City[/place]. Follow the descending mine paths and wooden catwalks deeper underground, working past the miners, exploding carts, and bearbugs until the route opens into the lava caverns.",
      },
      {
        textBefore:
          "Keep following the downward route toward the giant ribbed cavern and the circular mining pit. Drop and descend through the lower passages until you reach the fog at the bottom section of the tunnels.",
      },
      {
        textBefore:
          "Go through that fog to reach [entity]Flamelurker[/entity]'s lair.",
      },
    ],
    tips: [
      "[entity]Flamelurker[/entity] is aggressive enough that greed gets punished fast. Keep the fight wide, dodge through single swings instead of backing straight away, and lean on magic or magic-buffed weapons if you have them.",
    ],
  },
  "demons-souls:dragon-god:stonefang-tunnel": {
    paragraphs: [
      {
        textBefore:
          "After defeating [entity]Flamelurker[/entity], warp to the [thing]Flamelurker Archstone[/thing] from the [place]Nexus[/place] and enter the [place]Underground Temple[/place]. Follow the temple corridor down to the ruined arena where the dragon skeletons and collapsed masonry mark the path ahead.",
      },
      {
        textBefore:
          "Advance into the ruined temple and enter the arena to begin the [entity]Dragon God[/entity] encounter.",
      },
    ],
    tips: [
      "Advance from cover to cover through the rubble lanes until you reach the ballista mechanisms on each side of the temple.",
      "Use the siege engines to break [entity]Dragon God[/entity]'s defenses, then move through the lower temple path to finish the encounter at close range.",
      "Treat this as a cover puzzle, not a straight duel. Watch the eye glow, move only when you are not being tracked, and use the debris piles as hard breaks in line of sight.",
    ],
  },
  "demons-souls:fool-s-idol:tower-of-latria": {
    paragraphs: [
      {
        textBefore:
          "Warp to the [thing]Archstone of the Tower Queen[/thing] in the [place]Nexus[/place] and enter [place]Prison of Hope[/place]. Work through the prison blocks, collect the keys that open the upper levels, and loop across the towers until you unlock the church-side route above the chapel.",
      },
      {
        textBefore:
          "From the upper walkways, make your way into the church approach and through the final side passages that overlook the boss floor.",
      },
      {
        textBefore:
          "Drop into the chapel and enter the fog to begin the [entity]Fool's Idol[/entity] encounter. If you want the boss clear to count immediately, ",
        reveal: {
          id: "fools-idol-reviver",
          hiddenText:
            "go up the side tower first and kill the hidden reviver above the church before committing to the boss room.",
        },
        textAfter: "",
      },
    ],
    tips: [
      "The real [entity]Fool's Idol[/entity] is the only copy that casts the heavier spell pattern and does not show a separate lock-on health bar. Pillars keep the fight controlled if you move between casts instead of chasing every teleport.",
    ],
  },
  "demons-souls:maneater:tower-of-latria": {
    paragraphs: [
      {
        textBefore:
          "Use the [thing]Fool's Idol Archstone[/thing] from the [place]Nexus[/place] to enter [place]Upper Latria[/place]. Cross the chains and towers, make your way through the heart chamber and stairwells, and keep climbing until the route narrows into the high outer walkways.",
      },
      {
        textBefore:
          "Follow the upper approach to the cathedral bridge and continue all the way out to the long rooftop platform at the top of the tower.",
      },
      {
        textBefore:
          "Step through the fog at the end of that causeway to face the [entity]Maneaters[/entity].",
      },
    ],
    tips: [
      "The arena is the real threat. Fight near the center brazier when possible, pressure the first [entity]Maneater[/entity] hard before the second fully joins, and do not roll carelessly off the sides just to chase damage.",
    ],
  },
  "demons-souls:old-monk:tower-of-latria": {
    paragraphs: [
      {
        textBefore:
          "After defeating the [entity]Maneaters[/entity], warp to the [thing]Maneater Archstone[/thing] in the [place]Nexus[/place] and enter [place]The Ivory Tower[/place]. Climb the long staircase, clearing the black phantom mind flayers and the man centipedes as you go.",
      },
      {
        textBefore:
          "Keep ascending until you reach the small antechamber with the final fog gate on the left side.",
      },
      {
        textBefore:
          "Go through that fog to begin the [entity]Old Monk[/entity] encounter.",
      },
    ],
    tips: [
      "In online play this can be a player-controlled black phantom. Treat it like a duel: clear your stamina, punish obvious spell casts or long recoveries, and do not assume the target will behave like a normal boss AI.",
    ],
  },
  "demons-souls:adjudicator:shrine-of-storms": {
    paragraphs: [
      {
        textBefore:
          "Warp to the [thing]Archstone of the Shadowmen[/thing] in the [place]Nexus[/place] and enter [place]Island's Edge[/place]. Push through the cliff path, the skeletons, and the ruined shrine corridors until the route bends down into the circular chamber beyond the fog.",
      },
      {
        textBefore:
          "Take the stairs down into the judge's arena to confront [entity]Adjudicator[/entity].",
      },
    ],
    tips: [
      "You can either cut the wound in his side from below to make him collapse or attack the bird on his head from the upper ledges. The safe method is whichever keeps you from getting flattened by the cleaver swing.",
    ],
  },
  "demons-souls:old-hero:shrine-of-storms": {
    paragraphs: [
      {
        textBefore:
          "Use the [thing]Adjudicator Archstone[/thing] from the [place]Nexus[/place] to enter [place]The Ritual Path[/place]. Work down through the reaper caverns and the cliffside tunnels, then keep following the only forward route until the path loops back upward toward the final cave and staircase.",
      },
      {
        textBefore:
          "Climb the last stairs and pass through the fog at the top to reach [entity]Old Hero[/entity].",
      },
    ],
    tips: [
      "[entity]Old Hero[/entity] is blind. If you keep your movement disciplined and avoid loud, greedy strings, you can stay on his flanks, land a few hits, and reposition before he homes in on you.",
    ],
  },
  "demons-souls:storm-king:shrine-of-storms": {
    paragraphs: [
      {
        textBefore:
          "After [entity]Old Hero[/entity], warp to the [thing]Old Hero Archstone[/thing] in the [place]Nexus[/place] and enter the final [place]Shrine of Storms[/place] stretch. Follow the cliffside path into the vast open altar where the storm beasts circle overhead.",
      },
      {
        textBefore:
          "Move into the arena far enough to trigger the encounter across the open field.",
      },
      {
        textBefore:
          "The [entity]Storm King[/entity] encounter takes place in that open altar basin.",
      },
    ],
    tips: [
      "The intended answer is the [thing]Storm Ruler[/thing]. Clear the smaller rays when you need breathing room, then time the great gust slash into [entity]Storm King[/entity]'s flight path.",
    ],
  },
  "demons-souls:leechmonger:valley-of-defilement": {
    paragraphs: [
      {
        textBefore:
          "Warp to the [thing]Archstone of the Chieftain[/thing] in the [place]Nexus[/place] and enter [place]Depraved Chasm[/place]. Follow the rotten scaffolds and shacks downward, cross the narrow wooden bridges, and keep descending through the plague-ridden settlement toward the lowest fog door.",
      },
      {
        textBefore:
          "Drop to the bottom section beneath the beams and enter the fog to reach [entity]Leechmonger[/entity].",
      },
    ],
    tips: [
      "[entity]Leechmonger[/entity] is extremely vulnerable to fire. If you brought [thing]firebombs[/thing] or a fire buff, this becomes much easier because you can stop the regeneration before it spirals.",
    ],
  },
  "demons-souls:dirty-colossus:valley-of-defilement": {
    paragraphs: [
      {
        textBefore:
          "Use the [thing]Leechmonger Archstone[/thing] from the [place]Nexus[/place] to enter [place]Swamp of Sorrow[/place]. Drop into the poison swamp, follow the lantern-marked islands and boardwalks, and keep working through the shantytown until you reach the second major fog gate and the wooden structures beyond it.",
      },
      {
        textBefore:
          "Climb through the final scaffold route to the boss chamber and step through the fog to face [entity]Dirty Colossus[/entity].",
      },
    ],
    tips: [
      "[entity]Dirty Colossus[/entity] is easier if you stay close enough to circle the body instead of backing across the room. Fire damage helps, and breaking line on the flies keeps the chip damage under control.",
    ],
  },
  "demons-souls:maiden-astraea:valley-of-defilement": {
    paragraphs: [
      {
        textBefore:
          "After [entity]Dirty Colossus[/entity], use the [thing]Dirty Colossus Archstone[/thing] from the [place]Nexus[/place] to enter [place]Rotting Haven[/place]. Follow the plank path down into the final diseased basin until you can see [entity]Garl Vinland[/entity] guarding [entity]Maiden Astraea[/entity] across the blood swamp.",
      },
      {
        textBefore:
          "Advance through the basin and descend into the final chamber where [entity]Garl Vinland[/entity] guards [entity]Maiden Astraea[/entity].",
      },
      {
        textBefore:
          "That descent leads directly into the final encounter space.",
      },
    ],
    tips: [
      "This is more of a moral and positional fight than a duel. The direct route commits you to [entity]Garl Vinland[/entity], while the side descent lets you approach [entity]Maiden Astraea[/entity] herself.",
      "If you engage [entity]Garl Vinland[/entity], use the terrain and do not let the swamp pin you in place; if you take the side approach, commit quickly before the pressure closes in.",
    ],
  },
  "demons-souls:vanguard:shrine-of-storms": {
    paragraphs: [
      {
        textBefore:
          "This boss only exists on the opening [place]Tutorial[/place] route. Start a fresh game, clear the initial training halls without dying, and keep moving through the palace until you reach the last fog gate at the end of the sequence.",
      },
      {
        textBefore:
          "Enter that fog to face the optional tutorial [entity]Vanguard[/entity].",
      },
    ],
    tips: [
      "The safest clear is patience. Stay near a rear leg, avoid getting trapped in front of the cleaver, and only take short punishes because one mistake here usually ends the tutorial run.",
    ],
  },
  "demons-souls:king-allant:the-nexus": {
    paragraphs: [
      {
        textBefore:
          "After every archdemon is dead, return to the [place]Nexus[/place] and speak to the [entity]Maiden in Black[/entity] when you are ready to finish the run. She will take you down into [place]Below the Nexus[/place], the final path inside the [place]Old One[/place].",
      },
      {
        textBefore:
          "Walk through the roots and branches, break the obstructions in your way, and continue through the final fog deep inside the beast.",
      },
      {
        textBefore:
          "At the end of that path you will find the true [entity]King Allant[/entity].",
      },
    ],
    tips: [
      "This last encounter is not a real duel. Finish [entity]King Allant[/entity], take [thing]Soulbrandt[/thing], and keep moving to trigger the ending choice.",
    ],
  },
};
