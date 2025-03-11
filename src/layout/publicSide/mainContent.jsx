import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <div style={{ backgroundColor: "#eeeeee", color: "#3b1e54" }}>
      <Navbar />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
