import React from 'react';
import Counter from './components/Counter';
import UserList from './components/UserList';
import TodoList from './components/TodoList';
import './App.css'

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Demo Redux Toolkit</h1>
      <Counter />
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;
