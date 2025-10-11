import React, { useState, useEffect } from 'react';

function AbortFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal 

        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status} `)
                }

                const result = await response.json()
                setData(result)
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch dibatalkan')
                } else {
                    setError(err)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()

        return () => {
            abortController.abort()
            console.log('Permintaan dibatalkan saat cleanup')
        }
    }, [])

    if (loading) return <p>Memuat data (dengan pembatalan)...</p>;
    if (error) return <p>Terjadi kesalahan: {error.message}</p>;
    if (!data) return <p>Tidak ada data untuk ditampilkan.</p>;

    return (
        <>
            <h1>Data dari Fetch API (dengan AbortContoller)</h1>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </>
    )
}

export default AbortFetch