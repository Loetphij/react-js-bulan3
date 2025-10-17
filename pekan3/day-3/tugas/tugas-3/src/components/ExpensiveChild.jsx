import React from "react";

const ExpensiveChild = React.memo(({ onAddToCart, product }) => {
    console.log(`ExpensiveChild untuk ${product.name} di-render`)

    return (
        <div className="child">
            <h4>{product.name}</h4>
            <p>Harga: Rp {product.price.toLocaleString()}</p>
            <button onClick={() => onAddToCart(product)}>
                Tambah ke keranjang
            </button>
        </div>
    )
})

export default ExpensiveChild