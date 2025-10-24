import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../features/todosSlice';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="card-container">
      <h2 className="card-title">📝 Daftar Tugas</h2>

      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tambah tugas baru..."
        />
        <button onClick={handleAdd}>Tambah</button>
      </div>

      <ul className="list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`list-item todo-item ${
              todo.completed ? 'completed' : ''
            }`}
          >
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>
            <button
              className="delete-btn"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
