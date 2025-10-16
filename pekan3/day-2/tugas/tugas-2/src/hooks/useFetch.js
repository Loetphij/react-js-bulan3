import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(!url) return;

        setLoading(true)
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Network was not ok')
                return res.json()
            })
            .then((json) => setData(json))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }, [url])

    return { data, loading, error}
}