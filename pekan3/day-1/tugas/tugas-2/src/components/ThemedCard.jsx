import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemedCard() {
    const { theme } = useContext(ThemeContext)

    const style = {
        display: 'flex',
        flexDirection: 'column',
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: theme === "light" ? "#fff" : "#2a2a2a",
        border: theme === 'light' ? '#333 1px solid' : '#eee 1px solid',
        width: "250px",
        textAlign: "center",
        marginBottom: "15px",
    }

    return (
        <div style={style}>
            <h3>Theme Card</h3>
            <p>Lorem ipsum dolor sit amet, consectectur adipiscing elit</p>
        </div>
    )
}