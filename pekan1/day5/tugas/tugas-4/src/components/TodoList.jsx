import { useState } from "react";
import styles from "./TodoList.module.css";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Membuat aplikasi To-do", completed: false },
    { id: 2, task: "Belajar React dasar", completed: false },
  ]);

  const [newTodoTask, setNewTodoTask] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodoTask.trim() === "") return;

    const newTodo = {
      id: todos.length + 1,
      task: newTodoTask,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTodoTask("");
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>Daftar Tugas</h2>
        <form onSubmit={addTodo} className={styles.form}>
          <input
            type="text"
            value={newTodoTask}
            onChange={(e) => setNewTodoTask(e.target.value)}
            placeholder="Tambahkan tugas..."
            className={styles.input}
          />
          <button type="submit" className={styles.addBtn}>
            Tambah
          </button>
        </form>

        <ul className={styles.list}>
          {todos.map((todo) => (
            <li key={todo.id} className={styles.listItem}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className={styles.checkbox}
                />
                <span
                  className={
                    todo.completed ? styles.completedTask : styles.taskText
                  }
                >
                  {todo.task}
                </span>
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className={styles.deleteBtn}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
