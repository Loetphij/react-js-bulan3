import React , { useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log('Komponen di-render / di-update!')
  })

  return (
    <>
      <h2>useEffect Fungsi effect</h2>
      <p>Lihat console</p>
    </>
  )
}

export default App
