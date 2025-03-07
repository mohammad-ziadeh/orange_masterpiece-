import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <header>My App Header</header>
      <main>
        <Outlet />
      </main>
      <footer>My App Footer</footer>
    </div>
  );
}
