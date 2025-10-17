import { useState } from "react"
import ProductList, { sampleProducts } from "./components/ExpensiveCalculation"

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [otherState, setOtherState] = useState(0)

  return (
    <div className="app">
      <h2>Contoh useMemo - Optimasi Expensive Calculation</h2>
    
      <input 
        type="text"
        placeholder="Cari produk..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}  
      />

      <button onClick={() => setOtherState(otherState + 1)}>
        Update state lain (Count: {otherState})
      </button>

      <p>
        Coba ubah state lain dan lihat console
      </p>

      <ProductList products={sampleProducts} searchTerm={searchTerm} className='list'/>
    </div>
  )
}

export default App
