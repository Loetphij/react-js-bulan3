import React from 'react'
import ThemeProvider from './context/ThemeProvider'
import UserProvider from './context/UserProvider'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <div className="App">
            <Navbar />
            <Home />
          </div>
        </UserProvider>
      </ThemeProvider>
    </>
  )
}
