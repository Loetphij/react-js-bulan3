import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [noHP, setNoHp] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [noHPError, setNoHpError] = useState('')

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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])(?!.*\s).{8,}$/
    if (password.length < 8 ) {
      setPasswordError('Password minimal 8 karakter!')
    } else if (!passwordRegex.test(password)) {
      setPasswordError('Password harus menggunakan simbol, huruf besar, dan tidak boleh menggunakan spasi')
    } else {
      setPasswordError('')
    }
  }

  const validateNoHP = (noHP) => {
    const noHpRegex = /^(?:\+62|62|0)8[1-9][0-9]{6,10}$/
    if (!noHpRegex.test(noHP)) {
      setNoHpError('Nomer HP tidak sesuai format Indonesia!')
    } else {
      setNoHpError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validateEmail(email)
    validatePassword(password)
    validateNoHP(noHP)

    if (!emailError && !passwordError && !noHPError && email && password && noHP) {
      setSubmittedData({ email, password, noHP })
      setEmail('')
      setPassword('')
      setNoHp('')
    } else {
      setSubmittedData( null )
      alert('Terdapat error dalam form!')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 to-blue-200 p-6">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-blue-100">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Form Register
        </h2>        

        <div className='mb-4'>
          <label className="block font-medium mb-1 text-gray-700">Email: </label>
          <input 
            type="text" 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              validateEmail(e.target.value)}}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="contoh: nama@email.com"
          />
          {emailError && <p className='text-red-500'>{emailError}</p>}
        </div>

        <div className='mb-4'>
          <label className="block font-medium mb-1 text-gray-700">No. HP: </label>
          <input 
            type="number" 
            value={noHP}
            onChange={(e) => {
              setNoHp(e.target.value)
              validateNoHP(e.target.value)}}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="contoh: 08xxxx atau +628xxxx"
          />
          {noHPError && <p className='text-red-500'>{noHPError}</p>}
        </div>

        <div className='mb-4'>
          <label className="block font-medium mb-1 text-gray-700">Password: </label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              validatePassword(e.target.value)}}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Minimal 8 karakter, ada huruf besar, simbol, angka"
          />
          {passwordError && <p className='text-red-500'>{passwordError}</p>}
        </div>
        
        <button type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Submit
        </button>

        {submittedData && (
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Data yg disubmit:</h3>
            <p><b className="font-medium">Email:</b> {submittedData.email}</p>
            <p><b className="font-medium">Password:</b> {submittedData.password}</p>
            <p><b className="font-medium">No. HP:</b> {submittedData.noHP}</p>
          </div>
        )}

      </form>

      
    </div>
  )
}

export default App
