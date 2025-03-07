import { useRoutes } from "react-router-dom";

// routes
import { MainRoutes, LoginRoute } from "./MainRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, LoginRoute]);
}
