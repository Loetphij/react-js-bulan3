import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    const contextValue = { theme, toggleTheme }

    const appStyle = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: theme === "light" ? "#ffffffff" : "#1e1e1e",
        color: theme === "light" ? "#222" : "#eee",
        minHeight: "100vh",
        transition: "all 0.3s ease",
    }

    return (
        <ThemeContext.Provider value={contextValue}>
        <div style={appStyle}>{children}</div>
        </ThemeContext.Provider>
    )
}
