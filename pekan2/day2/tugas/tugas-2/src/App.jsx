import React, { useState } from "react"

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Halo! Selamat datang kembali" },
    { id: 2, text: "Ada tugas baru di kelas React hari ini!" },
    { id: 3, text: "Jangan lupa push project ke GitHub" },
  ]);

  return (
    <div>
      <h2>Conditional Rendering dengan ? : (Ternary) dan && (AND) </h2>

      {isLogin ? (
        <div className="messages">
          <h3>Selamat datang kembali, User!</h3>

          {messages.length > 0 ? (
            <div>
              <p>Ada {messages.length} pesan baru </p>
              <ul>
                {messages.map((msg) => (
                  <li key={msg.id}>
                    {msg.text}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Tidak ada pesan baru</p>
          )}
          <button onClick={() => setMessages([])}>Hapus Pesan</button>
        </div>
      ) : (
        <p>Silakan login untuk melihat pesanmu.</p>
      )}

      <div>
        <button onClick={() => setIsLogin(true)}>Login</button>
        <button onClick={() => setIsLogin(false)}>Logout</button>
      </div>
    </div>
  );
}

export default App;
