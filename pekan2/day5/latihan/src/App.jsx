import './App.css'
import CounterWithReducer from './components/CounterReducer'
import Calculator from './components/TempConvert'
import ThemeProvider from './context/ThemeProvider.jsx'
import ThemedButton from './context/ThemedButton.jsx'
import ThemedParagraph from './context/ThemedParagraph.jsx'

function App() {

  return (
    <>
      <Calculator />
      <br />
      <hr />
      <CounterWithReducer />
      <br />
      <hr />
      <ThemeProvider>
        <div style ={{ padding: '10px', textAlign: 'center'}}>
          <h2>Contoh Context API</h2>
          <ThemedButton />
          <ThemedParagraph />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
