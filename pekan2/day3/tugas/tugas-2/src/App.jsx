import React, { useEffect, useState } from 'react'


function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    console.log(`Fetching user data for userId: ${userId}`)

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching user:', error)
        setLoading(false)
      })
  }, [userId])

  if (loading) return <p>Memuat data user . . .</p>
  if (!user) return <p>User tidak ditemukan</p>

  return (
    <div className='userProfile'>
      <h2>Profil User</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Id: {userId} </p>
    </div>
  )
}


function App() {
  const [currentUserId, setCurrentUserId ] = useState(1)
  return (
    <>
      <h1>Aplikasi Profil Pengguna</h1>
      <UserProfile userId={currentUserId}/>
      <button onClick={() => setCurrentUserId(prevId => prevId + 1)}>
        Lihat User Berikutnya
      </button>
      <button onClick={() => setCurrentUserId(prevId => prevId - 1)}>
        Lihat User Sebelumnya
      </button>
    </>
  )
}

export default App