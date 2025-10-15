import React from 'react'
import CartContext from './context/CartContext'
import CartProvider from './context/CartProvider'
import ProductList from './components/ProductList'
import CartDisplay from './components/CartDisplay'

function App() {
  return (
    <CartProvider>
      <ProductList />
      <CartDisplay />
    </CartProvider>
  )
}

export default App
