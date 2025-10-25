import React, { useState, FC } from 'react';

interface Position {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  render: (position: Position) => React.ReactNode;
}

const MouseTracker: FC<MouseTrackerProps> = ({ render }) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div style={{ height: '200px', border: '1px solid black', position: 'relative' }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
};

const MouseTrackerTest: FC = () => {
  return (
    <div>
      <h2>Render Props Pattern</h2>
      <p>Gerakkan mouse Anda di dalam kotak di bawah ini:</p>
      <MouseTracker
        render={(mousePosition) => (
          <p style={{ position: 'absolute', top: mousePosition.y - 10, left: mousePosition.x - 10 }}>
            ({mousePosition.x}, {mousePosition.y})
          </p>
        )}
      />
      <p>
        *Pola Render Props juga sering digantikan oleh Custom Hooks di aplikasi modern.
        Namun, ini adalah pola yang penting untuk dipahami.
      </p>
    </div>
  );
};

export default MouseTrackerTest;