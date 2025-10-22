import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Login } from './components/Login'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProtectedRoute from './routes/ProtectedRoute'


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)


  return (
    <div className="min-h-screen">
      <Navbar isAuthenticated={isAuthenticated} onLogout={() => setIsAuthenticated(false)} />


      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />


        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />


        <Route
        path="/about"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <About />
          </ProtectedRoute>
        }
        />


        <Route
        path="/contact"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Contact />
          </ProtectedRoute>
        }
        />


        <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/login'} />} />
      </Routes>
    </div>
  )
}