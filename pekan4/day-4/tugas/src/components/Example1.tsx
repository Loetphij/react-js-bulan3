import React from "react";
import MouseTracker from "./MouseTrackerFunction";

const Example1: React.FC = () => {
  return (
    <div className="example-box">
      <h2>Mouse Tracker - Koordinat</h2>
      <MouseTracker>
        {(pos) => (
          <p>
            Posisi mouse: X = <b>{pos.x}</b>, Y = <b>{pos.y}</b>
          </p>
        )}
      </MouseTracker>
    </div>
  );
};

export default Example1;
