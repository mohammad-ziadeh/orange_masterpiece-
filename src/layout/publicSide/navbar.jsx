import React from "react";
import "./styles/navbar.css";
export default function navbar() {
  return (
    <nav className="navBar">
      <div>
      <a  href="/">Home</a>
      <a style={{marginLeft:"120px"}} href="/about">About</a>
      </div>
      <a href="http://localhost:8000/login">Log in</a>
    </nav>
  );
}
