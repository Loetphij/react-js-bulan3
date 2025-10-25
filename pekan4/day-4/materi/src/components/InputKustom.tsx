import React, { useRef, forwardRef, FC } from 'react';

interface InputKustomProps {
  placeholder?: string;
  style?: React.CSSProperties;
}

const InputCustom = forwardRef<HTMLInputElement, InputKustomProps>((props, ref) => {
  return (
    <input type="text" ref={ref} {...props} style={{ padding: '8px', border: '1px solid #ccc', ...props.style }} />
  );
});

const InputKustom: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = 'Fokus dari Induk!';
    }
  };

  return (
    <div>
      <h2>forwardRef: Meneruskan Ref ke Komponen Kustom</h2>
      <InputCustom ref={inputRef} placeholder="Ketik sesuatu..." />
      <button onClick={handleClick}>Fokus dan Isi Input Kustom</button>
    </div>
  );
};

export default InputKustom;