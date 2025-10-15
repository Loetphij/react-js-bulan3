import React from "react";
import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import NotificationContext from "../contexts/NotificationContext";

export default function Header() {
    const { language, toggleLanguage } = useContext(LanguageContext)
    const { count, addNotification, clearNotification } = useContext(NotificationContext)

    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0088ffff',
        color: '#fff',
        padding: '10p 20px',
        padding: '5px',
    }

    return (
        <header style={headerStyle}>
            <div>
                Bahasa: {' '}
                <strong>{language === 'id' ? 'Indonesia' : 'English'}</strong>
            </div>

            <div>
                Notifikasi: <strong>{count}</strong>
            </div>

            <div>
                <button onClick={toggleLanguage}>Ganti Bahasa</button>
                <button onClick={addNotification}>Tambah Notif</button>
                <button onClick={clearNotification}>Hapus Notif</button>
            </div>
        </header>
    )
}