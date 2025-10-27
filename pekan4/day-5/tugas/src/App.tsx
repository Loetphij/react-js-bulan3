import { Outlet } from 'react-router-dom'
import Navbar from './components/ui/navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <Navbar />
      <main className="flex justify-center">
        <Outlet />
      </main>
    </div>
  )
}
