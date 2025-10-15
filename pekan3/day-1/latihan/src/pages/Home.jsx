import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import ThemeContext from "../context/ThemeContext";

export default function Home() {
    const { user, login } = useContext(UserContext)
    const { theme } = useContext(ThemeContext)
    const [ usernameInput, setUsernameInput] = useState('')

    const homeStyle = {
        backgroundColor: theme === 'light' ? '#fafafa' : "#222",
        color: theme === 'light' ? '#222' : '#fafafa',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }

    const inputStyle = {
        padding: "10px 15px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "16px",
        marginBottom: "10px",
        outline: "none",        
    }

    const buttonStyle = {
        padding: "8px 15px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#007bff",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "500",
    }

    const handleLogin = () => {
        if (usernameInput.trim()) {
            login(usernameInput.trim())
            setUsernameInput("")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (usernameInput.trim()) {
            login(usernameInput.trim())
            setUsernameInput("")
        }
    }

    return (
        <div style={homeStyle}>
            {!user.isLoggedIn ? (
                <>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Nama kamu..."
                            value={usernameInput}
                            onChange={(e) => setUsernameInput(e.target.value)}
                            style={inputStyle}
                        />
                        <br />
                        <button type="submit" style={buttonStyle} onClick={handleLogin}>
                            Masuk
                        </button>
                    </form>
                </>
            ) : (
                <>
                    <h1>Halo</h1>
                    <h2>Selamat datang, {user.name}</h2>
                </>
            )}
        </div>
    )
}