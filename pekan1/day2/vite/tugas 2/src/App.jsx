import './App.css'

function App() {
  const userName = "fufufafa"
  let price = 250000
  let discount = 0.25 // 25%

  const priceAfterDiscount = (price, discount) => price - price * discount
  return (
    <>
      <h1>Halo, {userName}! Selamat datang kembali</h1>
      <p>Harga aseli: {price}</p>
      <p>Diskon: {discount}</p>
      <p>Harga yang perlu dibayarkan: Rp {priceAfterDiscount(price, discount)}</p>
      <p>250.000 * 0.25 = {250000 * 0.25}</p>
    </>
  )
}

export default App
