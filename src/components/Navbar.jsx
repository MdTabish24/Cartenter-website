import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/40 backdrop-blur-xl border-b border-white/30 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="/public/images/logo.png" alt="Logo" className="h-16 w-16 object-contain" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Arvi Enterprises
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
            <Link to="/services" className="text-sm text-gray-700 hover:text-indigo-600 transition-colors">Services</Link>
            <Link to="/projects" className="text-sm text-gray-700 hover:text-indigo-600 transition-colors">Projects</Link>
            <Link to="/about" className="text-sm text-gray-700 hover:text-indigo-600 transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-gray-700 hover:text-indigo-600 transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="hidden md:flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200 hover:border-indigo-400 transition-all">
              <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span className="text-indigo-600 font-semibold text-sm">+91 98765 43210</span>
            </a>
            <Link to="/contact" className="hidden md:block bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-shadow">
              Contact Now
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/30 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Contact
              </Link>
              <div className="flex flex-col gap-3">
                <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-full border border-indigo-200">
                  <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="text-indigo-600 font-semibold text-sm">+91 98765 43210</span>
                </a>
                <Link to="/contact" className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-shadow text-center">
                  Contact Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
