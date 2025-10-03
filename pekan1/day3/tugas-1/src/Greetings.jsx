function Greeting() {
    const name = "Budi"
    return <h1>Halo, {name}! Selamat datang.</h1>
}

Greeting.defaultProps = { name: 'Guest'}

export default Greeting