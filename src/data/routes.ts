import { bloodborneRoutes } from "./routes/bloodborne";
import { darkSoulsRoutes } from "./routes/dark-souls";
import { darkSouls2Routes } from "./routes/dark-souls-2";
import { demonsSoulsRoutes } from "./routes/demons-souls";

export type {
  BossRouteEntry,
  RouteInlineReveal,
  RouteParagraph,
} from "./routes/shared";

export const bossRoutes = {
  ...bloodborneRoutes,
  ...demonsSoulsRoutes,
  ...darkSoulsRoutes,
  ...darkSouls2Routes,
};
