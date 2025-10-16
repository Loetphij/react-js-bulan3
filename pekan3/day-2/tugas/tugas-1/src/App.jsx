import PasswordInput from "./components/PasswordInput"
import PasswordStatus from "./components/PasswordStatus"

function App() {
  return (
    <div className="app">
      <h2>Contoh useToggle - Show/hide password</h2>
      <PasswordInput />
      <PasswordStatus />
    </div>
  )
}

export default App
