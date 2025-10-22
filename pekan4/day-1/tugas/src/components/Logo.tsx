import React, { useEffect, useState } from 'react'


export default function Logo() {
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'))
        })
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
        setIsDark(document.documentElement.classList.contains('dark'))
        return () => observer.disconnect()
    }, [])


    return (
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${isDark ? 'bg-gradient-to-r from-purple-500 to-green-400' : 'bg-blue-500'}`}>
        B
        </div>
        <span className="font-bold">Bakhrusiah</span>
        </div>
    )
}