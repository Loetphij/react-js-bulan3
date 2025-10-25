import React from "react";
import MouseTracker from "./MouseTracker";

const Example2: React.FC = () => {
  return (
    <div className="example-box-2">
      <h2>Mouse Tracker - Gambar Mengikuti Kursor</h2>
      <MouseTracker>
        {(pos) => (
          <img
            src="https://cdn.custom-cursor.com/packs/5069/minimal-cat-pack.png"
            alt="Kucing"
            className="moving-img"
            style={{
              left: `${pos.x - 12}px`,
              top: `${pos.y - 5}px`,
            }}
          />
        )}
      </MouseTracker>
    </div>
  );
};

export default Example2;
