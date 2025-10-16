import React from "react"
import FriendStatus from "./components/FriendStatus"
import UserStatus from "./components/UserStatus"

function App() {
  return (
    <>
      <h2>Contoh Custom Hook</h2>
      <p><strong>Status Teman 1:</strong> <FriendStatus friendId={1}/> </p>
      <p><strong>Status Teman 2:</strong> <FriendStatus friendId={2}/> </p>
      <p><strong>Status Anda:</strong> <UserStatus /> </p>
    </>
  )
}

export default App
