import useFetch from "../hooks/useFetch";

export default function Post() {
    const { data, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts/1'
    )

    if(loading) return <p>Loading . . .</p>
    if(error) return <p>Error: {error} </p>

    return (
        <div className="post">
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    )
}