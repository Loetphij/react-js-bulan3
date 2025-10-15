import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export default function ProductList() {
    const { addItem } = useContext(CartContext)

    const products = [
        { id: 1, name: "Laptop", price: 8000000 },
        { id: 2, name: "Headphone", price: 500000 },
        { id: 3, name: "Mouse", price: 150000 },
    ]

    return (
        <div className="container">
            <h2>Daftar Produk</h2>
            {products.map((p) => (
                <div key={p.id} className="product-item">
                    <span>
                        {p.name} = Rp {p.price.toLocaleString("id-ID")}
                    </span>
                    <button style={{ marginLeft: '10px'}} onClick={() => addItem(p)}>
                        Add to Cart
                    </button>
                </div>
                ))
            }
        </div>
    )
}