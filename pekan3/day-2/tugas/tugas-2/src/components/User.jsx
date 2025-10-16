import useFetch from "../hooks/useFetch";

export default function User() {
    const { data, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/users/1'
    )

    if (loading) return <p>Loading user...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div className="user">
            <h3>{data.name}</h3>
            <p>Email : {data.email}</p>
            <p>Website : {data.website}</p>
        </div>
    )
}