import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductOpen, setIsProductOpen] = useState(false)
  const [isPagesOpen, setIsPagesOpen] = useState(false)
  const location = useLocation()

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center space-x-3">
              {/* Circular Logo Design - Concentric circles with blue inner, green outer */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer circle - green */}
                  <circle cx="24" cy="24" r="22" stroke="#10b981" strokeWidth="2" fill="none"/>
                  {/* Middle circle - green */}
                  <circle cx="24" cy="24" r="16" stroke="#10b981" strokeWidth="2" fill="none"/>
                  {/* Inner circle - blue */}
                  <circle cx="24" cy="24" r="10" fill="#3b82f6"/>
                </svg>
              </div>
              {/* BANKIO Text - BAN in dark blue, KIO in dark green */}
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-[#1e3a8a]">BAN</span>
                <span className="text-2xl font-bold text-[#059669]">KIO</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links - Centered (Hidden on Register and Login pages) */}
          {location.pathname !== '/register' && location.pathname !== '/login' && (
            <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <Link 
                to="/" 
                className={`px-3 py-2 font-medium transition-all duration-200 text-base ${
                  location.pathname === '/' 
                    ? 'text-[#3b82f6] font-semibold' 
                    : 'text-gray-800 hover:text-[#3b82f6]'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 font-medium transition-all duration-200 text-base ${
                  location.pathname === '/about' 
                    ? 'text-[#3b82f6] font-semibold' 
                    : 'text-gray-800 hover:text-[#3b82f6]'
                }`}
              >
                About Us
              </Link>
              
              {/* Product Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsProductOpen(true)}
                onMouseLeave={() => setIsProductOpen(false)}
              >
                <button className="px-3 py-2 font-medium text-gray-800 hover:text-[#3b82f6] transition-all duration-200 text-base flex items-center">
                  Product
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProductOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    <Link to="/savings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#3b82f6] transition-colors">
                      Savings Account
                    </Link>
                    <Link to="/loans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#3b82f6] transition-colors">
                      Loans
                    </Link>
                    <Link to="/cards" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#3b82f6] transition-colors">
                      Credit Cards
                    </Link>
                  </div>
                )}
              </div>

              {/* Pages Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsPagesOpen(true)}
                onMouseLeave={() => setIsPagesOpen(false)}
              >
                <button className="px-3 py-2 font-medium text-gray-800 hover:text-[#3b82f6] transition-all duration-200 text-base flex items-center">
                  Pages
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isPagesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    <Link to="/terms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#3b82f6] transition-colors">
                      Terms & Conditions
                    </Link>
                    <Link to="/privacy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#3b82f6] transition-colors">
                      Privacy Policy
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                className={`px-3 py-2 font-medium transition-all duration-200 text-base ${
                  location.pathname === '/contact' 
                    ? 'text-[#3b82f6] font-semibold' 
                    : 'text-gray-800 hover:text-[#3b82f6]'
                }`}
              >
                Contact Us
              </Link>
            </div>
          )}

          {/* CTA Button / Login Section */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Show different content based on route */}
            {location.pathname === '/register' ? (
              <div className="flex items-center space-x-4">
                <span className="hidden md:block text-gray-700 font-medium text-sm md:text-base">
                  Already have account
                </span>
                <Link
                  to="/login"
                  className="px-6 py-2.5 bg-[#3b82f6] text-white font-bold rounded-lg hover:bg-[#2563eb] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 text-sm md:text-base uppercase"
                >
                  Login Now
                </Link>
              </div>
            ) : location.pathname === '/login' ? (
              <div className="flex items-center space-x-4">
                <span className="hidden md:block text-gray-700 font-medium text-sm md:text-base">
                  Don't have an account
                </span>
                <Link
                  to="/register"
                  className="px-6 py-2.5 bg-[#1e3a8a] text-white font-bold rounded-lg hover:bg-[#1e40af] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 text-sm md:text-base"
                >
                  Register
                </Link>
              </div>
            ) : (
              <Link
                to="/register"
                className="px-6 py-2.5 bg-[#3b82f6] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 text-sm md:text-base"
              >
                Open Account
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-fade-in-down">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === '/' 
                    ? 'text-[#3b82f6] bg-blue-50 font-semibold' 
                    : 'text-gray-800 hover:bg-gray-50 hover:text-[#3b82f6]'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === '/about' 
                    ? 'text-[#3b82f6] bg-blue-50 font-semibold' 
                    : 'text-gray-800 hover:bg-gray-50 hover:text-[#3b82f6]'
                }`}
              >
                About Us
              </Link>
              <div className="px-4 py-2">
                <button className="w-full text-left font-medium text-gray-800 hover:text-[#3b82f6] transition-colors">
                  Product
                </button>
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/savings" onClick={closeMobileMenu} className="block py-1 text-sm text-gray-600 hover:text-[#3b82f6]">
                    Savings Account
                  </Link>
                  <Link to="/loans" onClick={closeMobileMenu} className="block py-1 text-sm text-gray-600 hover:text-[#3b82f6]">
                    Loans
                  </Link>
                  <Link to="/cards" onClick={closeMobileMenu} className="block py-1 text-sm text-gray-600 hover:text-[#3b82f6]">
                    Credit Cards
                  </Link>
                </div>
              </div>
              <div className="px-4 py-2">
                <button className="w-full text-left font-medium text-gray-800 hover:text-[#3b82f6] transition-colors">
                  Pages
                </button>
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/terms" onClick={closeMobileMenu} className="block py-1 text-sm text-gray-600 hover:text-[#3b82f6]">
                    Terms & Conditions
                  </Link>
                  <Link to="/privacy" onClick={closeMobileMenu} className="block py-1 text-sm text-gray-600 hover:text-[#3b82f6]">
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <Link 
                to="/contact" 
                onClick={closeMobileMenu}
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === '/contact' 
                    ? 'text-[#3b82f6] bg-blue-50 font-semibold' 
                    : 'text-gray-800 hover:bg-gray-50 hover:text-[#3b82f6]'
                }`}
              >
                Contact Us
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 mt-2 bg-[#3b82f6] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-colors text-center"
              >
                Open Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

