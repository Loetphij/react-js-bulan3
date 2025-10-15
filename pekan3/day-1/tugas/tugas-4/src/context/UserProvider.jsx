import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";

export default function UserProvider({ children }) {
    const [user, setUser] = useState({
        name: 'Guest',
        email: '',
        isLoggedIn: false
    })

    const login = (name, email) => {
        setUser({ name, email, isLoggedIn: true})
    }

    const logout = () => {
        setUser({ name: '', email: '', isLoggedIn: false})
    }

    const contextValue = { user, login, logout }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}