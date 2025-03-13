import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../../components/reusables/heroSection";
import Line from "../../components/reusables/Line";
import "./about.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LMCExpand = () => {
  const [expanded, setExpanded] = useState(false);

  // ----//-{BackGroundColorChange}-//---- //
  useLayoutEffect(() => {
    gsap.to(".start", {
      backgroundColor: "#3b1e54",
      color: "#eeeeee",
      scrollTrigger: {
        trigger: ".start",
        start: "top+=700vh top",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
      },
    });
  }, []);
  useLayoutEffect(() => {
    gsap.to(".start", {
      scrollTrigger: {
        trigger: ".start",
        start: "top+=250vh top",
        onEnter: () => setExpanded(true),
      },
    });
  }, []);

  return (
    <div className="start">
      <Hero name="About Us" />
      <Line />
      <div className="container">
        <motion.h1
          className="lmc"
          onClick={() => setExpanded(!expanded)}
          whileTap={{ scale: 0.9 }}
        >
          <p style={{ fontSize: "14px", padding: "0px" }}>click me</p>
          What does{" "}
          <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
            LMC
          </span>{" "}
          stand for?
        </motion.h1>

        <AnimatePresence>
          {expanded && (
            <div className="expanded-container">
              {["L", "M", "C"].map((letter, index) => (
                <motion.div
                  key={letter}
                  initial={{ opacity: 0, y: -20, scale: 1 }}
                  animate={{ opacity: 1, y: 0, scale: 1.2 }}
                  exit={{ opacity: 0, y: -20, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="letter-container"
                >
                  <motion.span className="letter">{letter}</motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    className="word"
                  >
                    {letter === "L"
                      ? "earning"
                      : letter === "M"
                      ? "anagement"
                      : "enter"}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
      <Line color="#3b1e54" />
      {/* start of pic section  */}
      <div className="picContainer">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          duration={1.6}
          initiallyVisible={false}
          className="pic1"
        >
          <div></div>
        </ScrollAnimation>
        <h3 className="picMidWord">Encouraging</h3>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          duration={1.6}
          initiallyVisible={false}
          className="pic2"
          delay={500}
        >
          <div></div>
        </ScrollAnimation>
        <h3 className="picMidWord">Support</h3>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          duration={1.6}
          initiallyVisible={false}
          className="pic3"
        >
          <div></div>
        </ScrollAnimation>
        <h3 className="picMidWord">Engaging</h3>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          duration={1.6}
          initiallyVisible={false}
          className="pic4"
        >
          <div></div>
        </ScrollAnimation>
      </div>
      {/* end of pic section  */}
      <section className="WhyContainer">
        <br />
        <h2 className="head">Why LMC?</h2>
        <br />
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={false}
          duration={1}
          initiallyVisible={false}
          className="topP"
        >
          <p>
            Whether you're a student, teacher, or administrator, LMC provides
            the tools and features you need to enhance the learning experience,
            facilitate task management, and foster collaborative learning in a
            dynamic, engaging environment.
          </p>
        </ScrollAnimation>

        <br />
        <br />
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={false}
          duration={1.2}
          initiallyVisible={false}
          className="leftP"
        >
          <div>
            <h2>Our Mission</h2>
            <br />

            <p>
              At LMC, our mission is to offer a user-friendly, feature-rich
              platform that helps students and educators achieve their goals
              through intuitive task assignments, random group creation, and
              performance tracking, making the English learning journey more
              engaging and effective.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={false}
          duration={1.6}
          initiallyVisible={false}
          className="rightP"
        >
          <div>
            <h2>Our Vision</h2>
            <br />
            <p>
              We envision LMC as a platform that inspires learning through
              features like random student selection and group assignments,
              fostering creativity, collaboration, and fairness. Our goal is to
              create an environment that enhances learning outcomes and promotes
              student development.
            </p>
          </div>
        </ScrollAnimation>
      </section>
      {/* end line */}
      <Line color="#eeeeee" margin="0px" />
      {/* end line */}
    </div>
  );
};

export default LMCExpand;
