import React, { useEffect, useState } from "react";
import axios from 'axios'

function Axios() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                setData(response.data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    console.log(loading)
    if (loading) return <p>Memuat data . . .</p>
    if (error) return <p>Terjadi kesalahan: {error.message}</p>

    return (
        <>
            <h1>Data dari Axios</h1>
            <h3>{data.name}</h3>
            <p>Email: {data.email}</p>
            <p>Telepon: {data.phone}</p>
        </>
    )
}

export default Axios