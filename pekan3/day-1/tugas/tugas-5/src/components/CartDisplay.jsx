import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export default function CartDisplay() {
    const { cart, removeItem, clearCart, total } = useContext(CartContext)

    return (
        <div className="container">
            <h2>Keranjang Belanja</h2>
            {cart.length === 0 ? (
                <p className="cart-empty">Keranjang kosong</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <span>
                                {item.name} x {item.qty} = Rp{" "}
                                {(item.price * item.qty).toLocaleString('id-Id')}
                            </span>
                            <button style={{marginLeft: '10px'}} onClick={() => removeItem(item.id)}>
                                Hapus
                            </button>
                        </div>
                    ))}
                    <h3 className="cart-total">Total: Rp {total.toLocaleString('id-ID')}</h3>
                    <button onClick={clearCart}>Kosongkan keranjang</button>
                </>
            )}
        </div>
    )
}