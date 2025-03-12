import React from "react";
import "./line.css";
export default function Line({color}) {
  return (
    <div className="hr-container">
      <span style={{color}}>★★★</span>
    </div>
  );
}
