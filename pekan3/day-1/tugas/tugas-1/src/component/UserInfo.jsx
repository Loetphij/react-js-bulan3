import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function UserInfo() {
    const { user, login, logout, updateProfile } = useContext(UserContext)
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        if (nameInput.trim() && emailInput.trim()) {
            login(nameInput.trim(), emailInput.trim())
            setNameInput('')
            setEmailInput('')
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        if (nameInput.trim() || emailInput.trim()) {
            updateProfile({
                ...(nameInput.trim() && { name: nameInput.trim() }),
                ...(emailInput.trim() && { name: emailInput.trim() })
            })
            setNameInput('')
            setEmailInput('')
        }
    }

    return (
        <div>
            {!user.isLoggedIn ? (
                <>
                    <h3>Silahkan login terlebih dahulu</h3>
                    <form onSubmit={handleLogin}>
                        <input 
                            type="text" 
                            placeholder="Nama"
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                        />
                        <input 
                            type="email" 
                            placeholder="Email"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                        />
                        <button type="submit">Login</button>
                    </form>
                </>
            ) : (
                <>
                    <h3>Halo, {user.name}!</h3>
                    <p>Emailmu: {user.email}</p>

                    <form onSubmit={handleUpdate}>
                        <input
                            type="text"
                            placeholder="Ubah nama..."
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Ubah email..."
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                        />
                        <button type="submit">
                            Update Profil
                        </button>
                    </form>

                    <button onClick={logout}>
                        Logout
                    </button>

                </>
            )}
        </div>
    )
}