import { useState, useEffect } from "react";
import Screen from './Screen'
//import WelcomePage from "../../pages/welcomePage/welcomePage";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
function loadingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5650);
  }, []);

  return (
    <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          duration={1.4}
          initiallyVisible={false}
        >
      {loading ? (
        <Screen />
      ) : (
        <>
        {/* <WelcomePage />  */}
        </>
      )}
    </ScrollAnimation>
  );
}

export default loadingPage;
