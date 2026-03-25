export interface RouteInlineReveal {
  id: string;
  buttonLabel: string;
  hiddenText: string;
}

export interface RouteParagraph {
  textBefore?: string;
  reveal?: RouteInlineReveal;
  textAfter?: string;
}

export interface BossRouteEntry {
  paragraphs: RouteParagraph[];
}

export const bossRoutes: Record<string, BossRouteEntry> = {
  "demons-souls:phalanx:boletarian-palace": {
    paragraphs: [
      {
        textBefore:
          "From the Archstone of the Covetous King in the Nexus, enter Gates of Boletaria and play through 1-1 until you unlock the shortcut that loops back to the opening gate.",
      },
      {
        textBefore:
          "After the shortcut is open, climb back up the tower, take the doorway beside the Blue Eye Knight, work across the wooden walkways and the dragon bridge, then pull the lever that raises the huge gate leading straight to Phalanx's fog wall.",
      },
      {
        textBefore: "Before you step through, make sure you kept the fire items from the level because ",
        reveal: {
          id: "phalanx-fire",
          buttonLabel: "Reveal Requirement",
          hiddenText:
            "Phalanx is heavily weak to fire, so firebombs and Turpentine make the fight dramatically easier.",
        },
        textAfter: " Use the bombs to strip away the hoplites and then finish the exposed core.",
      },
    ],
  },
};
