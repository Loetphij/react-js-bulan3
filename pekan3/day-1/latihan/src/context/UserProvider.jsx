import React, { useState } from "react";
import UserContext from "./UserContext";

export default function UserProvider({ children }) {
    const [user, setUser] = useState({ name: 'Guest', isLoggedIn: false, avatar: 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg' })

    const login = (username) => {
        setUser({ name: username, isLoggedIn: true, avatar:'https://upload.wikimedia.org/wikipedia/commons/b/b3/MahmutII.jpg'})
    }

    const logout = () => {
        setUser({ name: 'Guest', isLoggedIn: false, avatar:'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg'})
    }

    const contextValue = { user, login, logout}

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
} 