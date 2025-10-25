import React, { useRef, useImperativeHandle, forwardRef, FC, ReactNode } from 'react';

interface ModalHandle {
  open: () => void;
  close: () => void;
}

interface ModalProps {
  children: ReactNode;
}

const Modals = forwardRef<ModalHandle, ModalProps>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      border: '1px solid black',
      zIndex: 1000
    }}>
      <h3>Ini adalah Modal</h3>
      <p>{props.children}</p>
      <button onClick={() => setIsOpen(false)}>Tutup</button>
    </div>
  );
});

const Modal: FC = () => {
  const modalRef = useRef<ModalHandle | null>(null);

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  return (
    <div>
      <h2>useImperativeHandle: Mengontrol Komponen Anak</h2>
      <button onClick={handleOpenModal}>Buka Modal</button>
      <button onClick={handleCloseModal}>Tutup Modal</button>
      <Modals ref={modalRef}>
        <p>Konten di dalam modal.</p>
      </Modals>
    </div>
  );
};

export default Modal;