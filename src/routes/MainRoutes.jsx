import React, { lazy } from "react";

// project import
import MainLayout from "../layout/MainLayout";
import WelcomePage from "../pages/welcomePage/welcomePage";
import Loadable from "../components/Loader/Loadable";

// Lazy-loaded components
const Contact = Loadable(lazy(() => import("../pages/contact")));
const Profile = Loadable(lazy(() => import("../pages/profile")));
const Home = Loadable(lazy(() => import("../pages/home")));
const Login = Loadable(lazy(() => import("../pages/login")));

// ==============================|| MAIN ROUTES ||============================== //

const Entry = {
  path: "/",
  element: <WelcomePage />,
};
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

export { MainRoutes, LoginRoute,Entry };
