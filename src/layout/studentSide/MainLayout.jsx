import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "./heroSection";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
