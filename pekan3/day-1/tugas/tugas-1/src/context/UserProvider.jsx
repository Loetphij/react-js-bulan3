import React, { useState } from "react";
import UserContext from "./UserContext";

export default function UserProvider({ children }) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        isLoggedIn: false
    })

    const login = (name, email) => {
        setUser({ name, email, isLoggedIn: true})
    }

    const logout = () => {
        setUser({ name: '', email: '', isLoggedIn: false})
    }

    const updateProfile = (newData) => {
        setUser((prev) => ({...prev, ...newData}))
    }

    return (
        <UserContext.Provider value={{ user, login, logout, updateProfile }}>
            {children}
        </UserContext.Provider>
    )
}