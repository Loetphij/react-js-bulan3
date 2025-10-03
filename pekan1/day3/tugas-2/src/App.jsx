import ProductCard from "./component.jsx"
function App() {

  return (
    <>
      <ProductCard productName="Kaos" price={45000} stock={0} isAvailable={false} />
      <ProductCard productName="Kemeja" price={65000} stock={25} isAvailable={true} />
      <ProductCard productName="Celana" price={70000} stock={15} isAvailable={true} />
    </>
  )
}

export default App
