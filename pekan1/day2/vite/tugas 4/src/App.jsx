function App() {
  const siswa = [
    {id: 1, nama: "Devan", TTL: "21 Agustus 2009"},
    {id: 2, nama: "Mavi", TTL: "20 Juli 2009"},
    {id: 3, nama: "Hamdan", TTL: "14 April 2009"},
    {id: 4, nama: "Luthfi", TTL: "21 Juli 2009"},
    {id: 5, nama: "Pasha", TTL: "12 Oktober 2009"},
    {id: 6, nama: "Rasendria", TTL: "29 Januari 2009"},
  ]

  return (
    <>
      <h1>Daftar Siswa :</h1>
      <ul>
        {siswa.map((siswa) => (
          <li key={siswa.id}>
            Nama: {siswa.nama}, TTL: {siswa.TTL}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
