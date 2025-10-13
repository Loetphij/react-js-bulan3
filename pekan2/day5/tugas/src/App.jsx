import './App.css'
import Calculator from './components/TempCalculator'
import Parent from './PropsDrilling/Parent'
import ThemedDisplay from './context/ThemeDisplay'
import ThemeProvider from './context/ThemeProvider'; 
import CounterWithReducer from './components/useReducerCounter';
import CounterStateSharing from './components/StateSharingCounter';


function App() {
  
  return (
    <>
      <Calculator />
      <br /><br />
      <hr />
      <Parent />
      <br />
      <hr />
      <CounterStateSharing />
      <br />
      <hr />
      <CounterWithReducer />
      <br /><br />
      <hr />
      <ThemeProvider>
        <div style ={{ padding: '10px', textAlign: 'center'}}>
          <ThemedDisplay />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
