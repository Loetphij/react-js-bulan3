import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemedButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    const style = {
       padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: theme === "light" ? "#0088ffff" : "#444",
        color: theme === "light" ? "#fff" : "#ddd",
        cursor: "pointer",
        fontWeight: "bold",
        marginBottom: "15px",
        width: '150px'
    }

    return <button style={style} onClick={toggleTheme}>GantiTema</button>
}