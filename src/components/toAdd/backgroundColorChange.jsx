import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function ScrollBackgroundColor() {
  useLayoutEffect(() => {
    gsap.to(".mainBody", {
      backgroundColor: "#3B1E54", // New background color
      scrollTrigger: {
        trigger: "body", // Body is the trigger for the scroll
        start: "top+=500vh top", // Start animation when scroll reaches the top
        end: "bottom bottom", // End animation when scroll reaches the bottom
        scrub: true, // Scrubs the scroll (smooth transition)
        markers: true, // Display markers for debugging (can be removed for production)
      },
    });
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default ScrollBackgroundColor;
