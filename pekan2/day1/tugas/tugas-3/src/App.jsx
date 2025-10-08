import { useState } from 'react'

function App() {
  const [nama, setNama] = useState('')
  const [submitted, setSubmitted] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(nama)
    setNama('') 
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-box">
        <h3>Controlled Component Demo</h3>

        <label>Nama:</label>
        <input 
          type="text" 
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Ketik nama kamu..."
        />

        <p className="preview-text">
          Sedang diketik: <strong>{nama || '...'}</strong>
        </p>

        <button type="submit">
          Submit
        </button>

        {submitted && (
          <p className="success-msg">
            Data yang disubmit: <b>{submitted}</b>
          </p>
        )}
      </form>
    </div>
  )
}

export default App
