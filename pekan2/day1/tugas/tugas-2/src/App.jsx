import { useState } from 'react'

function App() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Event preventDefault() dipanggil! Form tidak reload.")
    setSubmitted(true)
  }

  const handleDivClick = () => {
    alert("Div utama diklik!")
  }

  const handleFormClick = () => {
    alert("Form diklik!")
  }

  const handleButtonClick = (e) => {
    e.stopPropagation()
    alert("Tombol di dalam div diklik!")
  }

  const handleInputClick = (e) => {
    e.stopPropagation()
    console.log("Input diklik, tidak memicu div")
  }

  return (
    <div onClick={handleDivClick} className="container">
      <form onSubmit={handleSubmit} onClick={handleFormClick} className="form-box">
        <h3>SyntheticEvent Demo</h3>

        <input 
          type="text" 
          placeholder="Ketik sesuatu..."
          onClick={handleInputClick}
        />

        <button 
          type="submit"
          onClick={handleButtonClick}
        >
          Klik / Submit
        </button>

        {submitted && (
          <p className="success-msg">
            Form berhasil disubmit (tanpa reload)
          </p>
        )}
      </form>
    </div>
  )
}

export default App
