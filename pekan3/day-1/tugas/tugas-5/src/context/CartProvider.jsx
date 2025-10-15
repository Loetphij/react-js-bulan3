import React, { useState, useMemo } from "react";
import CartContext from "./CartContext";

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addItem = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id)
            if (existing) {
                return prev.map((item) =>
                item.id === product.id ?
                    { ...item, qty: item.qty + 1} 
                    : item
                )
            }
            return [...prev, { ...product, qty: 1}]
        })
    }

    const removeItem = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    const total = useMemo(
        () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
        [cart]
    )

    const contextValue = { cart, addItem, removeItem, clearCart, total}
    
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}