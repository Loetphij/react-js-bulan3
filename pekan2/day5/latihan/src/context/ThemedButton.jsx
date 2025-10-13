import { useContext } from "react";
import ThemeContext from "./ThemeContext.jsx";


function ThemedButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const buttonStyle = {
        backgroundColor: theme === 'light' ? '#eee' : '#222',
        color: theme === 'light' ? '#222' : '#eee',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }

    return (
        <button style={buttonStyle} onClick={toggleTheme}>
            Ganti Tema (Theme)
        </button>
    )
}

export default ThemedButton