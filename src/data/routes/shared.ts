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

export type BossRouteMap = Record<string, BossRouteEntry>;
