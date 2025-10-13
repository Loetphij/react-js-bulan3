import { useContext } from "react"
import ThemeContext from "./ThemeContext.jsx"

function ThemedDisplay() {
const { theme, toggleTheme } = useContext(ThemeContext);

const buttonStyle = {
    backgroundColor: theme === "light" ? "#eee" : "#1a1a1a",
    color: theme === "light" ? "#1a1a1a" : "#eee",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px",
    transition: 'all 0.3s ease'
}

const paragraphStyle = {
    color: theme === "light" ? "#000" : "#fff",
    backgroundColor: theme === "light" ? "#fff" : "#1a1a1a",
    padding: "10px",
    borderRadius: "5px",
    transition: 'all 0.3s ease'
}

return (
    <div>
        <p style={{textAlign: "left"}}>5. Context API</p>
        <h2>Change Theme</h2>
        <button style={buttonStyle} onClick={toggleTheme}>
            Ganti Tema (Theme)
        </button>
        <p style={paragraphStyle}>
            Ini adalah paragraf dengan tema {theme}
        </p>
    </div>
)
}

export default ThemedDisplay
