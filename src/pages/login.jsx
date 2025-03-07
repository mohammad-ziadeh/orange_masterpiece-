import React from "react";
import "./styles/login.css";
import Header from "../include/login/loginHeader";
import Card from "../include/login/card";
export default function login() {
  return (
    <body className="body">
      <section className="main-card">
        <Header />
        <Card />
      </section>
    </body>
  );
}
