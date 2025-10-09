import React from 'react';

function App() {
  const tugasTugas = [
    { id: 1, teks: 'Bikin ucapan HBD buat temen', deadline: "12 Oktober 2025" },
    { id: 2, teks: 'Ngopi', deadline: " - (Kapan aja)" },
    { id: 3, teks: 'Kebut tugas', deadline: "9 Oktober 2025" }
  ];

  return (
    <div className='container'>
      <h2>Daftar Tugas (To-do List)</h2>
      <ul>
        {tugasTugas.map((tugas) => (
          <li key={tugas.id}>
            {tugas.teks} <br />
            <b>Deadline:</b> {tugas.deadline}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;