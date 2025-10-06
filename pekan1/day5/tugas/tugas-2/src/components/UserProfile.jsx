import { useState } from 'react'

function UserProfile() {
  const [name, setName] = useState('Amir-d-Daulah al-Bakhrusiyyah')
  const [age, setAge] = useState(25)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      <h2>User Profile</h2>
      {isEditing ? (
        <div className='form'>
          <h6>Editing...</h6>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button onClick={() => setIsEditing(false)}>Simpan</button>
        </div>
      ) : (
        <div>
          <p>Nama: {name}</p>
          <p>Usia: {age}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </>
  )
}

export default UserProfile