import React, { lazy } from "react";

// project import
import MainLayout from "../layout/studentSide/MainLayout";
import PublicSite from "../layout/publicSide/mainContent";
import Loadable from "../components/Loader/Loadable";
import Login from "../pages/login";

// Lazy-loaded components

// -------{Public Side}------- //
const About = Loadable(lazy(() => import("../pages/aboutPage/about")));
const Landing = Loadable(lazy(() => import("../pages/welcomePage/welcomePage")));

//import Landing from "../components/loadingPage/loadingPage"
// -------{Public Side}------- //

// #################################################################

// -------{Student Side}------- //

// -------{Student Side}------- //

// ==============================|| MAIN ROUTES ||============================== //

const LoginRoute = {
  path: "/login",
  element: <Login />,
};

const MainRoutes = {
  path: "/home",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <About />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <About />,
    },
  ],
};

// ########################################################

const PublicSiteRoutes = {
  path: "/",
  element: <PublicSite />,
  children: [
    {
      path: "",
      element: <Landing />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <About />,
    },
  ],
};

export { MainRoutes, LoginRoute, PublicSiteRoutes };
