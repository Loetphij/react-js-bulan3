import React, { useEffect, useState } from 'react'


export default function ThemeSwitcher() {
    const [dark, setDark] = useState(() => !!document.documentElement.classList.contains('dark'))


    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
        try {
        localStorage.setItem('theme-dark', dark ? '1' : '0')
        } catch {}
    }, [dark])


    useEffect(() => {
    try {
        const stored = localStorage.getItem('theme-dark')
        if (stored !== null) setDark(stored === '1')
        } catch {}
    }, [])


    return (
        <button
            aria-label="Toggle theme"
            className="px-3 py-1 border rounded-md text-sm"
            onClick={() => setDark((s) => !s)}
        >
            {dark ? '☾' : '☀︎'}
        </button>
    )
}