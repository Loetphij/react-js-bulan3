function App() {
  const headerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px'
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333',
    margin: '10px 0'
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto' }}>
      <header style={headerStyle}>
        <h1>Selamat Datang di Aplikasi React</h1>
      </header>
      <p style={paragraphStyle}>
        Ini adalah contoh penggunaan <strong>inline styles</strong> dalam React.
        Setiap properti CSS ditulis sebagai pasangan kunci-nilai dalam objek JavaScript.
      </p>
      <button style={{
        backgroundColor: '#61dafb',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1em'
      }}>
        Klik Saya
      </button>
    </div>
  );
}

export default App;