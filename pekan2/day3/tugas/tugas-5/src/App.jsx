import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    console.log('Memulai fetch data simulasi...')

    const timer = setTimeout(() => {
      setData({ id: 1, title: 'Contoh data' })
      setLoading(false)
      console.log('Fetch selesai')
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>Simulasi Data Fetch</h2>
      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
    </>
  );
}

export default App
