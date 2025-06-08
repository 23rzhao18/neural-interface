'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          <Link 
                href="/" 
                className={`sci-fi-nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                Neuron Interface Project
              </Link>
          <ul className="flex">
            <li>
              <Link 
                href="/about" 
                className={`sci-fi-nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/technology" 
                className={`sci-fi-nav-link ${isActive('/technology') ? 'active' : ''}`}
              >
                Technology
              </Link>
            </li>
            <li>
              <Link 
                href="/applications" 
                className={`sci-fi-nav-link ${isActive('/applications') ? 'active' : ''}`}
              >
                Applications
              </Link>
            </li>
            <li>
              <Link 
                href="/team" 
                className={`sci-fi-nav-link ${isActive('/team') ? 'active' : ''}`}
              >
                Team
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`sci-fi-nav-link ${isActive('/contact') ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}