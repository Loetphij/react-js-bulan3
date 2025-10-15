import React from "react"
import ThemeProvider from "./context/ThemeProvider"
import ThemedButton from "./components/ThemedButton"
import ThemedCard from "./components/ThemedCard"
import ThemedText from "./components/ThemedText"

function App() {
  return (
    <ThemeProvider>
      <h2>Contoh Theme Context</h2>
      <ThemedButton />
      <ThemedCard />
      <ThemedText />
    </ThemeProvider>
  )
}

export default App
