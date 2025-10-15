import React, {useContext} from "react";
import UserContext from "../context/UserContext";
import ThemedButton from "./ThemedDisplay";

export default function Navbar() {
    const { user } = useContext(UserContext)

    const navbarStyle = {
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff'
    }

    const leftSection = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'        
    }

    const avatarStyle = {
            display: 'flex',
            alignItems: 'center',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover'
    }

    return (
        <nav style={navbarStyle}>
            <div style={leftSection}>
                <img src={user.avatar} alt="user-avatar" style={avatarStyle} />
                {user.isLoggedIn && <span>{user.name}</span>}
            </div>
            <ThemedButton />
        </nav>
    )
}