import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from './button'

export default function Navbar() {
  const location = useLocation()

  const links = [
    { to: '/basic', label: 'Basic Form' },
    { to: '/multistep', label: 'Multi-Step Form' },
    { to: '/dynamic', label: 'Dynamic Form' },
    { to: '/advanced', label: 'Advanced Integration' }
  ]

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-muted rounded-lg shadow-sm mb-6">
      <h1 className="text-xl font-bold">🧾 Form Showcase</h1>
      <div className="flex gap-3">
        {links.map(link => (
          <Link key={link.to} to={link.to}>
            <Button
              variant={location.pathname === link.to ? 'default' : 'outline'}
              className={cn(
                'transition-all',
                location.pathname === link.to && 'font-semibold shadow-md'
              )}
            >
              {link.label}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  )
}
