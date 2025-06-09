'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navigationItems = [
    { href: '/about', label: 'About' },
    { href: '/technology', label: 'Technology' },
    { href: '/applications', label: 'Applications' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <header className="bg-white shadow-sm border-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          {/* Logo/Home Link */}
          <Link 
            href="/" 
            className={`sci-fi-nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Neuron Interface Project
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`sci-fi-nav-link ${isActive(item.href) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden sci-fi-hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className={`hamburger-line ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`hamburger-line ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`hamburger-line ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden mobile-nav-menu ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <div className="mobile-nav-content">
            <ul className="flex flex-col space-y-2 p-4">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`sci-fi-nav-link mobile-nav-item ${isActive(item.href) ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-nav-overlay"
            onClick={closeMobileMenu}
          ></div>
        )}
      </div>
    </header>
  )
}