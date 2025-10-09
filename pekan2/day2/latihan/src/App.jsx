import React, { useState } from "react"

function App() {
  const produkAwal = [
    { id: 1, name: "Laptop", price: 1200000 },
    { id: 2, name: "Mouse", price: 25000 },
    { id: 3, name: "Keyboard", price: 75000 },
    { id: 4, name: "Monitor", price: 300000 },
  ];

  const [products, setProducts] = useState(produkAwal)

  const handleShowProducts = () => setProducts(produkAwal)
  const handleEmptyArray = () => setProducts([])
  const handleSetNull = () => setProducts(null)

  return (
    <div className="container">
      <h2>Daftar Produk</h2>
      <div className="list">
        {(() => {
          switch (true) {
            case products === null:
              return <p style={{color: "#ff0000ff"}}>Data produk tidak tersedia.</p>

            case Array.isArray(products) && products.length === 0:
              return <p>Tidak ada produk yang ditambahkan.</p>

            case Array.isArray(products):
              return (
                <ul>
                  {products.map((product) => (
                    <li key={product.id}>
                      {product.name} - Rp. {product.price}
                    </li>
                  ))}
                </ul>
              );

            default:
              return <p style={{color: "red"}}>Terjadi kesalahan data.</p>
          }
        })()}
      </div>
      
      <div>
        <button onClick={handleShowProducts}>Tampilkan Produk</button>
        <button onClick={handleEmptyArray}>Kosongkan Array</button>
        <button onClick={handleSetNull}>Set Null</button>
      </div>
    </div>
  );
}

export default App;
