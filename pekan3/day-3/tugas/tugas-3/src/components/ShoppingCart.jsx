import { useCallback, useState } from "react";
import { sampleProducts } from "../../../tugas-2/src/components/ExpensiveCalculation";
import ExpensiveChild from "./ExpensiveChild";

export default function ShoppingCart() {
    const [cart, setCart] = useState([])
    const [otherState, setOtherState] = useState(0)

    const handleAddToCart = useCallback((product) => {
        console.log(`Menambahkan ${product.name} ke keranjang`)
        setCart(prevCart => [...prevCart, product])
    }, [])

    const clearCart = useCallback(() => {
        setCart([])
    }, [])


    return (
        <div className="cart">
            <h2>Contoh useCallback - Optimasi Callback Functions</h2>
            <button onClick={() => setOtherState(otherState + 1)}>
                Update State Lain (Count: {otherState})
            </button>

            <button onClick={clearCart}>
                Kosongkan Keranjang
            </button>

            <p>Klik tombol "Update State Lain" dan lihat console</p>
            <h3>Produk Tersedia</h3>
            <div className="list">
                {sampleProducts.map(product => (
                    <div className="item">
                        <ExpensiveChild 
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}    
                        />                        
                    </div>
                    

                ))}
            </div>
            <div className="keranjang">
                <h3>Keranjang Belanja ({cart.length} item) </h3>
                {cart.map((item, index) => (
                    <div className="cart-item" key={index}>
                        {item.name} - Rp {item.price.toLocaleString()}
                    </div>
                ))}
            </div>
        </div>
    )
}