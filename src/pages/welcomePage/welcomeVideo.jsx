import { transform } from "motion";
import { useState, useEffect } from "react";

export default function VideoScrollEffect() {
  const [scale, setScale] = useState(0.3);
  const [isFixed, setIsFixed] = useState(true);
  const maxWidth = 80;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const minScale = 0.2;
      const start = 700;
      const end = 900;

      setScale(
        scrollY < start
          ? minScale
          : scrollY > end
          ? 1
          : minScale + ((scrollY - start) / (end - start)) * (1 - minScale)
      );

      setIsFixed(scrollY <= end + 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const style = {
    position: isFixed ? "relative" : "relative",
    top: isFixed ? "80px" : "0",
    left: isFixed ? "120px" : "auto",
    right: isFixed ? "auto" : "50%",
    transform: isFixed ? "none" : "translateX(-50%)",
    width: `${scale * maxWidth}vw`,
    height: `${(scale * maxWidth * 9) / 16}vw`, 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      style={{
        height: "110vh",
        paddingTop: "10px",
        overflowX: "hidden",
        marginTop: "50px",
      }}
    >
      <div style={style}>
        <video
          src="welcomePageVideo.mp4"
          controls
          autoPlay
          muted
          style={{ width: "100%", height: "100%"}}
        />
      </div>
    </div>
  );
}
