import AlertBox from "./components/AlertBox.jsx"

function App() {

  return (
    <>
      <h2>AlertBox</h2>
      <AlertBox type="success">Data berhasil disimpan</AlertBox>
      <AlertBox type="warning">Kupon akan Kadaluarsa dalam 3 hari</AlertBox>
      <AlertBox type="error">Terjadi kesalahan pada error</AlertBox>
    </>
  )
}

export default App
