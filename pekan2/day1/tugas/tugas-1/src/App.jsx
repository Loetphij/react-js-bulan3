import { useState } from 'react'

function App() {
  const [ teks, setTeks ] = useState('Arahkan cursor kesini')
  const [ bg, setBg ] = useState("#0042a4ff") 
  
  const handleClick = () => {
    alert('Tombol diklik')
    setBg('#00d9ffff')
  }

  const handleHoverEnter = () => {
    setBg('#0076baff')
    setTeks('Klik saya!')
    console.log('Mouse masuk area tombol')
  }

  const handleHoverLeave = () => {
    setBg("#0042a4ff")
    setTeks('Arahkan cursor kesini')
    console.log('Mouse keluar area tombol')
  }


  return (
    <>
      <h3>Event Handling</h3>
      <button
        onClick={handleClick}
        onMouseEnter={ handleHoverEnter }
        onMouseLeave={ handleHoverLeave}
        style={{
          width: "250px", 
          borderRadius: "8px", 
          border: "1px solid transparent", 
          backgroundColor: bg,
          padding: "0.6em 1.2em", 
          fontSize: "1em", 
          fontWeight: "500", 
          fontFamily: "inherit", 
          cursor: "pointer", 
          transition: "0.5s"
        }}
      >
        {teks}
      </button>
    </>
  )
}

export default App
