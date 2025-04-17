import React, { useState, useEffect } from "react";
import "./loadingPage.css";
import { PropagateLoader } from "react-spinners";
export default function LoadingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;

    const interval = setInterval(() => {
      if (currentProgress < 60) {
        currentProgress += 2;
      } else if (currentProgress < 90) {
        currentProgress += 1;
      } else {
        currentProgress += 0.2;
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        currentProgress = 100;
      }

      setProgress(currentProgress);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <PropagateLoader color="#3b1e54" />
      <br />
      <br />
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      {/* <h2>Loading {progress}%</h2> */}
    </div>
  );
}
