import React from "react"
import UserProvider from "./context/UserProvider"
import Profile from "./components/Profile"

function App() {
  return (
    <UserProvider>
      <Profile />
    </UserProvider>
  )
}

export default App
