import React, { useEffect, useState } from 'react'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: innerWidth,
    height: innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    console.log('Event listener ditambahkan')

    return () => {
      window.removeEventListener('resize', handleResize)
      console.log('Event listener dihapus')
    }
  }, [])

  return (
    <>
      <h1>Pelacak ukuran window</h1>
      <p>Lebar : {windowSize.width}</p>
      <p>Tinggi : {windowSize.height}</p>
    </>
  )
}

export default App
