import React from 'react'
import LanguageProvider from './contexts/LanguageProvider'
import NotificationProvider from './contexts/NotificationProvider'
import Header from './components/Header'

function App() {
  return (
    <LanguageProvider>
      <NotificationProvider>
        <Header /> 
      </NotificationProvider>
    </LanguageProvider>
  )
}

export default App
