import React, { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key)
            return storedValue ? JSON.parse(storedValue) : initialValue
        } catch (error) {
            console.error('Gagal mengambil data dari localStorage', error)
            return initialValue
        }
    })
    
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error('Gagal menyimpan data ke localStorage: ', error)
        }
    }, [key, value])

    return [value, setValue]
}