import React from "react";
import "./welcome.css";

// Start Reusable Parts ---------------------------------
import Line from "../../components/reusables/Line";
import Scroll from "../../components/reusables/motionScroll";
// End Reusable Parts ---------------------------------

// Start Includes ---------------------------------
import Nav from "../../include/home/navbar";
// import Footer from "../../include/home/footer";

// End Includes --------------------------------

// Start Packages ---------------------------------
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
// End Packages ---------------------------------

export default function welcomePage() {
  return (
    <>
      <div className="body">
        <Nav />
        <div className="Hero"></div>
        <Line />
        <br />
        <br />
        <h1 style={{ textAlign: "center" }}>Welcome to LMC</h1>
        <br />
        <div style={{ display: "grid", justifyItems: "center" }}>
          <TypeAnimation
            sequence={[
              "Your gateway for easy and fast connection between you and your students",
              2700,
              "Your gateway for easy and fast connection between you and your teachers",
              2700,
            ]}
            wrapper="span"
            speed={65}
            style={{
              fontSize: "23px",
            }}
            repeat={Infinity}
          />
        </div>

        <br />
        <br />
        <br />
        <Line />
        <section
          style={{
            textAlign: "center",
            display: "grid",
            justifyItems: "center",
          }}
        >
          <h2>Encouraging Active Engagement Among Students</h2>
          <br />
          <br />
          <h3>Badges:</h3>
          <p
            style={{ marginLeft: "20%", marginRight: "20%", fontSize: "20px" }}
          >
            LMC is a platform that empowers students to take ownership of their
            learning by awarding them badges and rankings for their dedication
            to completing tasks early and consistently attending classes on
            time.
          </p>
          <br />
          <div>
            {" "}
            <ScrollAnimation
              animateIn="fadeIn"
              animateOnce={true}
              duration={1.4}
              initiallyVisible={false}
            >
              <div className="badges"></div>
            </ScrollAnimation>
          </div>

          <blockquote
            style={{ marginLeft: "15%", marginRight: "15%", fontSize: "18px" }}
          >
            "Badges act as digital acknowledgments of achievements, encouraging
            students to set and attain goals. Research shows that while they may
            not directly boost academic performance, students generally perceive
            them positively and find them motivating." — PubMed Study, 2022
          </blockquote>
          <br />
          <br />
          <h3>Weekly Rankings and Resets:</h3>
          <br />
          <p
            style={{ marginLeft: "20%", marginRight: "20%", fontSize: "18px" }}
          >
            To ensure fairness and sustained motivation, LMC features a ranking
            system that resets weekly. This gives every student a fresh
            opportunity to compete, improve their standing, and stay engaged in
            their learning journey. By resetting the rankings, students are
            inspired to stay active, push their limits, and consistently perform
            at their best.
          </p>
        </section>
        <Line />
        <h1 style={{ textAlign: "center" }}>Our Partners:</h1>
        <br />
        <br />
        <Scroll />
        <Line />
        <br />
      </div>
    </>
  );
}
