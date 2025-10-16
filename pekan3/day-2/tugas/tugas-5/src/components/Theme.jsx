import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Theme() {
    const [theme, setTheme] = useLocalStorage('theme', 'light')
    const [username, setUsername] = useLocalStorage('username', '')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className={`app ${theme}`}>
            <div className="container">
                <h2>Contoh useLocalStorage (Theme & Username)</h2>
                <div className="card">
                    <label htmlFor="username">Masukkan Username...</label>
                    <input 
                        type="text" 
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Masukkan nama..."
                    />
                </div>
                <div className="card">
                    <button onClick={toggleTheme}>
                        Ganti ke Mode {theme === 'light' ? 'Dark' : 'Light' }
                    </button>
                </div>
                <div className="card-info">
                    <p><strong>Tema saat ini:</strong> {theme}</p>
                    <p><strong>Nama:</strong> {username || '-'}</p>
                    <p>*Data tersimpan di localStorage</p>
                </div>
            </div>
        </div>
    )
}