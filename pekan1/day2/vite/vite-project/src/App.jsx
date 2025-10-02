function App() {
  const products = [
    {id: 1, name: "Bakso", price: 8000},
    {id: 2, name: "Mie Ayam", price: 10000},
    {id: 3, name: "Ayam Bakar", price: 15000},
    {id: 4, name: "Nasi Bakar", price: 15000},
  ]

  return (
    <>
      <div style={{
        display: "flex",
       
        gap: "20px"
      }}>
        {products.map((products) => (
          <div key={products.id}
          style={{
            padding: "10px",
            background: "#eee",
            display: "flex", 
            borderRadius: "15px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"  
          }}>
            <h2>{products.name}</h2>
            <h3>{products.price}</h3>
          </div>
        ))}
      </div>
    </>
  )
  
}

export default App