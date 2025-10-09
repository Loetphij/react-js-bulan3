import React from 'react';
import { useState } from 'react';

function App() {
  const initialTask = [
    { id: 1, teks: 'Bikin ucapan HBD buat temen', deadline: "12 Oktober 2025" },
    { id: 2, teks: 'Ngopi', deadline: " - (Kapan aja)" },
    { id: 3, teks: 'Kebut tugas', deadline: "9 Oktober 2025" }
  ]

  const [ tasks, setTasks ] = useState(initialTask)

  const handleShowTask = () => setTasks(initialTask)
  const handleEmptyTask = () => setTasks([])
  const handleSetNull = () => setTasks(null)

  return (
    <div className='container'>
      <h2>Daftar Tugas (To-do List)</h2>
      <div className='taskList'>
        {(() => {
          switch (true) {
            case tasks === null:
              return <p style={{color: "#ff0000ff"}}>Data tugas tidak tersedia</p>
             
            case Array.isArray(tasks) && tasks.length === 0:
              return <p>Tidak ada tugas yang ditambahkan</p>

            case Array.isArray(tasks):
              return (
                <ul>
                  {initialTask.map((task) => (
                    <li key={task.id}>
                      {task.teks} <br />
                      <b>Deadline:</b> {task.deadline}
                      <br />
                    </li>
                  ))}
                </ul>
              )
            
              default:
                return <p style={{color: "#ff0000ff"}}>Terjadi kesalahan data, coba lagi nanti</p>
          }
        })()}
      </div>

      <div>
        <button onClick={handleShowTask}>Tampilkan Tugas</button>
        <button onClick={handleEmptyTask}>Kosongkan Daftar</button>
        <button onClick={handleSetNull}>Set Null</button>
      </div>
    </div>
  );
}

export default App;
