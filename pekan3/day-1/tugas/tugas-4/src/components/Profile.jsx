import React, { useState } from "react";
import useUserContext from "../context/useUserContext";

export default function Profile() {
    const { user, login, logout } = useUserContext()
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

    return (
        <div className="container">
            {user.isLoggedIn ? (
                <>
                    <h2>Halo, {user.name}</h2>
                    <p>Email mu: {user.email}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
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
            )}
        </div>
    )
}