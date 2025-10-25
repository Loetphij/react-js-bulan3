import React, { useState } from "react";
import ModalPortal from "./components/ModalPortal";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <h1>React Portal & Render Props Demo</h1>

      <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
        Contoh Modal
      </button>

      <ModalPortal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Halo dari Modal!</h2>
        <p>Ini contoh React Portal</p>
      </ModalPortal>

      <Example1 />
      <Example2 />
    </div>
  );
};

export default App;
