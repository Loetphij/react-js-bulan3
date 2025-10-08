import { useState } from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [submittedData, setSubmittedData] = useState('')

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailError('Email tidak valid!')
    } else {
      setEmailError('')
    }
  }

  const validatePassword = (password) => {
    if (password.length < 6 ) {
      setPasswordError('Password minimal 6 karakter!')
    } else {
      setPasswordError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validateEmail(email)
    validatePassword(password)

    if (!emailError && !passwordError && username && email && password ) {
      setSubmittedData({ email, password, noHP })
      setUsername('')
      setEmail('')
      setPassword('')

    } else {
      setSubmittedData( null )
      alert('Terdapat error dalam form!')
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h2>
          Form Register
        </h2>        

        <div>
          <label>Username: </label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
              validateUsername(e.target.value)}}
              placeholder="Masukkan username..."
          />
        </div>

        <div>
          <label>Email: </label>
          <input 
            type="text" 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              validateEmail(e.target.value)}}
              placeholder="Masukkan email..."
          />
          {emailError && <p>{emailError}</p>}
        </div>

        <div>
          <label>Password: </label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              validatePassword(e.target.value)}}
              placeholder="Masukkan password..."
          />
          {passwordError && <p>{passwordError}</p>}
        </div>

        <button 
          type="submit"
          onClick={alert('Selamat bergabung')}
          >
          Submit
        </button>

        {submittedData && (
          <div>
            <h3>Data yg disubmit:</h3>
            <p><b>Username:</b> {submittedData.username}</p>
            <p><b>Email:</b> {submittedData.email}</p>
            <p><b>Password:</b> {submittedData.password}</p>
          </div>
        )}
      </form>
    </div>
  )
}

export default App
