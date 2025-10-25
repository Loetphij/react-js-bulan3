import { useRef, FC } from "react";

interface PersistentCounterProps {}

export const PersistentCounter: FC<PersistentCounterProps> = () => {
  const countRef = useRef<number>(0);

  const increment = () => {
    countRef.current += 1;
    console.log('Count (ref):', countRef.current);
  };

  return (
    <div>
      <h2>useRef: Menyimpan Nilai Persisten</h2>
      <p>Nilai dalam ref (cek konsol): {countRef.current}</p>
      <button onClick={increment}>Tambah Ref</button>
      <p>
        *Perubahan nilai ref tidak memicu re-render. Untuk melihat perubahan di UI,
        Anda perlu memicu re-render secara manual (misalnya dengan state lain).
      </p>
    </div>
  );
};
