import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./welcome.css";

export default function welcomePage() {
  return (
    <>
      <div className="body">
        <nav className="navBar">
          <a href="/login">Login</a>
        </nav>
        <div className="Hero"></div>
        <br />
        <h1 style={{ textAlign: "center" }}>Welcome to LMC</h1>
        <br />
        <TypeAnimation
          sequence={[
            "Your gateway for easy and fast connection between you and your students",
            2500,
            "Your gateway for easy and fast connection between you and your teachers",
            2500,
          ]}
          wrapper="span"
          speed={65}
          style={{
            fontSize: "23px",
            marginLeft: "20%",
          }}
          repeat={Infinity}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="hr-container">
          <span>~~~~</span>
        </div>
        <section style={{ textAlign: "center" }}>
          <h3>Encouraging Active Engagement Among Students</h3>
          <br />
          <p
            style={{ marginLeft: "20%", marginRight: "20%", fontSize: "20px" }}
          >
            LMC is a platform that empowers students to take ownership of their
            learning by awarding them badges and rankings for their dedication
            to completing tasks early and consistently attending classes on time
          </p>
          <br />
          <div className="badges"></div>
        </section>
      </div>
    </>
  );
}
