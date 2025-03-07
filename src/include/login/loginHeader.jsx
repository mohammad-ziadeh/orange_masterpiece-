import React from "react";
import "./log.css";
import Logo from "./pics/WA+Logo+White.png";

export default function loginHeader() {
  return (
    <section className="head_banner">
      <img src={Logo} alt="World_associates_logo" className="logo" />
      <h2 className="login-title">Login form</h2>


    </section>
  );
}
