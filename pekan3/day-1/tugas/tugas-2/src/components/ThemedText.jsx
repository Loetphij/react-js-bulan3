import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemedText() {
    const { theme } = useContext(ThemeContext)

    const style = {
        fontSize: '20px',
        color: theme === 'light' ? '#333' : '#eee'
    }

    return <p style={style}>Tema saat ini: { theme }</p>
}