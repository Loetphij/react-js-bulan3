import React, { useState } from "react";
import ModalPortal from "./components/ModalPortal";
import HOC from "./components/HOC";
import InputFocus from "./components/InputFocus";
import MouseTracker from "./components/MouseTracker";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <h1>Evaluasi Harian 4</h1>

      <InputFocus />
      <div className="example-box-3">
        <h2>Portal Modal</h2>
        <p>Klik untuk memunculkan modal</p><br />
        <button className="btn" onClick={() => setIsModalOpen(true)} style={{ margin: '0.5rem'}}>
          Contoh Modal
        </button>

        <ModalPortal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Halo dari Modal!</h2>
          <p>Ini contoh React Portal</p>
        </ModalPortal>
      </div>

      <HOC />
      
      <MouseTracker />
    </div>
  );
};

export default App;
