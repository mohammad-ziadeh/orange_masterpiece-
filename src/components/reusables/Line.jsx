import React from "react";
import "./line.css";
export default function Line({ color, margin }) {
  return (
    <div className="hr-container" style={{ margin }}>
      <span style={{ color }}>★★★</span>
    </div>
  );
}
