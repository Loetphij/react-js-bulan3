import Card from './components/components.jsx'

function App() {
  
  return (
    <>
      <Card>
        <h2>Judul Kartu 1</h2>
        <p>Konten kartu 1</p>
        <button>Detail</button>
      </Card>

      <Card>
        <h1>MANUK</h1>
        <p>Manusia Unik Keren </p>
        <ul>
          <li>Sarijem</li>
          <li>Budi</li>
          <li>Tilan</li>
        </ul>
      </Card>
    </>
  );
}

export default App;