import React, { useRef } from "react";

const InputFocus: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="example-box-3">
      <h2>useRef - Fokus ke Input</h2>
      <input ref={inputRef} type="text" placeholder="Klik tombol untuk fokus" />
      <br />
      <button onClick={handleFocus} style={{ marginTop: "10px" }} className="btn">
        Fokuskan Input
      </button>
    </div>
  );
};

export default InputFocus;
