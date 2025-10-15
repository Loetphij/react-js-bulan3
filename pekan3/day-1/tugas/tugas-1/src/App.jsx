import React from 'react'
import UserProvider from './context/UserProvider'
import UserInfo from './component/UserInfo'

function App() {
  return (
    <UserProvider>
      <UserInfo />
    </UserProvider>
  )
}

export default App
