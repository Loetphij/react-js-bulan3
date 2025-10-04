import Buttons from "./components/Buttons.jsx"
import styles from "./components/Buttons.module.css"

function App() {
  return (
    <div className={styles.container}>
      <h2>Authentication</h2>
      <Buttons type="login" onClick={() => alert("Login diklik")}>
        Login
      </Buttons>
      <Buttons type="register" onClick={() => alert("Register diklik")}>
        Register
      </Buttons>
    </div>
  )
}

export default App
