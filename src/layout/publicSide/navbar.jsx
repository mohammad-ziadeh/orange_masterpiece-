import React from "react";
import "./styles/navbar.css";
export default function navbar() {
  return (
    <nav className="navBar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="http://localhost:8000/login">Log in</a>
    </nav>
  );
}
