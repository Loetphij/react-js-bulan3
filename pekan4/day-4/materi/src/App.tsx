import './App.css'
import { FC } from 'react';
import { TextInputWithFocusButton } from './components/TextInputWithFocusButton';
import { PersistentCounter } from './components/PErsistentCounter';
import InputKustom from './components/InputKustom';
import Modal from './components/Modal';
import MouseTrackerTest from './components/MouseTracker';

const App: FC = () => {
  return (
    <div>
      {/* <TextInputWithFocusButton />
      <hr />
      <PersistentCounter />
      <hr />
      <InputKustom />
      <hr />
      <Modal />
      <hr /> */}
      <MouseTrackerTest />
    </div>
  );
};

export default App;