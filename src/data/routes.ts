import { darkSoulsRoutes } from "./routes/dark-souls";
import { demonsSoulsRoutes } from "./routes/demons-souls";

export type {
  BossRouteEntry,
  RouteInlineReveal,
  RouteParagraph,
} from "./routes/shared";

export const bossRoutes = {
  ...demonsSoulsRoutes,
  ...darkSoulsRoutes,
};
