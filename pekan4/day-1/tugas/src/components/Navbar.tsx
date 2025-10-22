import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Logo from './Logo'
import { Link, useNavigate } from 'react-router-dom'


export default function Navbar({ isAuthenticated, onLogout }: { isAuthenticated: boolean; onLogout: () => void }) {
    const nav = useNavigate()
    return (
        <header className="w-full px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Logo />
            </div>


            <nav className="flex items-center gap-4">
                {isAuthenticated ? (
                <>
                    <Link to="/" className="text-sm">Home</Link>
                    <Link to="/about" className="text-sm">About</Link>
                    <Link to="/contact" className="text-sm">Contact</Link>
                    <button className="text-sm underline" onClick={() => { onLogout(); nav('/login') }}>Logout</button>
                </>
                ) : null}


                <ThemeSwitcher />
            </nav>
        </header>
    )
}