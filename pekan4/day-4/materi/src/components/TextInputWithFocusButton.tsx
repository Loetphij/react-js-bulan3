import { useRef, FC } from 'react';

interface TextInputWithFocusButtonProps {}

export const TextInputWithFocusButton: FC<TextInputWithFocusButtonProps> = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>useRef: Mengakses DOM</h2>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Fokus pada Input</button>
    </div>
  );
};

