import React, { lazy } from "react";

// project import
import MainLayout from "../components/MainLayout";
import LoginPage from "../pages/login";
import Loadable from "../components/Loader/Loadable";

// Lazy-loaded components
const Contact = Loadable(lazy(() => import("../pages/contact")));
const Profile = Loadable(lazy(() => import("../pages/profile")));
const Home = Loadable(lazy(() => import("../pages/home")));

// ==============================|| MAIN ROUTES ||============================== //

const LoginRoute = {
  path: "/",
  element: <LoginPage />,
};

const MainRoutes = {
  path: "/home",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ],
};

export { MainRoutes, LoginRoute };
