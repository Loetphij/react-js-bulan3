import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log(`Const berubah jadi: ${count}`)
    document.title = `Count: ${count}`
  }, [count])

  useEffect(() => {
    console.log(`Nama berubah jadi: ${name}`)
  }, [name])

  useEffect(() => {
    console.log('Komponen pertama kali dimuat')

    const handleKeyDown = (event) => {
      console.log(`Tombol "${event.key} ditekan"`)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      console.log('Event listener keydown dihapus')
    }
  }, [])
  return (
    <>
      <h1>Contoh Multiple useEffect Hooks</h1>
      <div className='container'>
        <p><b>Count:</b> {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>
          Tambah count
        </button>

        <br /><br />

        <input 
          type="text"
          placeholder='Ketik nama...'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p>Nama: {name || '(belum diisi)'}</p>        
      </div>

    </>
  )
}

export default App
