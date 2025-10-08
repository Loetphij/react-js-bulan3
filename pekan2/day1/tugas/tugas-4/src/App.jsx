import { useRef } from 'react'

function App() {
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Nama kamu: ${inputRef.current.value}`)
  }

  return (
    <>
      <h3>Uncontrolled Components</h3>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <label>Nama : </label>
          <input 
            type="text"
            ref={inputRef}
            placeholder='Ketik nama anda...' />
          <button type='submit'>Submit</button>
        </form>
      </div>    
    </>

  )
}

export default App
