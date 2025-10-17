import React, { useState, useMemo } from "react";

export default function ProductList({ products, searchTerm }) {
  const [sortBy, setSortBy] = useState("name")

  const filteredAndSortedProducts = useMemo(() => {
    console.log("Melakukan filter dan sort produk...")

    const startTime = performance.now()

    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    filtered.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      } else if (sortBy === "price") {
        return a.price - b.price
      } else if (sortBy === "rating") {
        return b.rating - a.rating
      }
      return 0
    })

    const endTime = performance.now();
    console.log(`Waktu perhitungan: ${endTime - startTime}ms`)

    return filtered;
  }, [products, searchTerm, sortBy])

  return (
    <div className="container">
      <h2>Daftar Produk</h2>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Nama</option>
        <option value="price">Harga</option>
        <option value="rating">Rating</option>
      </select>

      <ul>
        {filteredAndSortedProducts.map((product) => (
          <li key={product.id}>
            {product.name} — Rp{product.price.toLocaleString()} — ★ {product.rating}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const sampleProducts = [
  { id: 1, name: "Laptop Gaming", price: 15000000, rating: 4.5 },
  { id: 2, name: "Smartphone", price: 5000000, rating: 4.2 },
  { id: 3, name: "Headphone", price: 800000, rating: 4.8 },
  { id: 4, name: "Mouse Wireless", price: 200000, rating: 4.0 },
  { id: 5, name: "Keyboard Mechanical", price: 1200000, rating: 4.6 },
]
