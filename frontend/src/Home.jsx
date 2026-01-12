import AnimatedSection from './components/AnimatedSection'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-28 px-4 md:px-8 overflow-hidden pb-4 md:pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <AnimatedSection animation="fade-left" className="space-y-6">
              {/* Slogan */}
              <div className="inline-block">
                <span className="text-sm md:text-base font-semibold text-[#059669] tracking-wide uppercase">
                  Simple. Transparent. Secure.
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Banking Solutions
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                Products and services designed to help you reach your financial goals.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/register"
                  className="px-8 py-3.5 bg-[#3b82f6] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center"
                >
                  Open Account
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center"
                >
                  Get in touch
                </Link>
              </div>
            </AnimatedSection>

            {/* Right Side - Bank Related Illustration */}
            <AnimatedSection animation="fade-right" className="relative hidden lg:block">
              <div className="relative w-full h-[500px] lg:h-[600px]">
                {/* Background - Bank Building */}
                <div className="absolute bottom-0 right-0 w-full h-64 opacity-10">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Bank Building */}
                    <rect x="100" y="50" width="200" height="150" fill="#3b82f6" opacity="0.4"/>
                    <rect x="120" y="70" width="160" height="130" fill="#2563eb" opacity="0.3"/>
                    {/* Columns */}
                    <rect x="130" y="80" width="20" height="100" fill="#1e40af" opacity="0.5"/>
                    <rect x="190" y="80" width="20" height="100" fill="#1e40af" opacity="0.5"/>
                    <rect x="250" y="80" width="20" height="100" fill="#1e40af" opacity="0.5"/>
                    {/* Bank Sign */}
                    <circle cx="200" cy="40" r="15" fill="#10b981"/>
                  </svg>
                </div>

                {/* Main Illustration Container */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    
                    {/* Credit Card - Top Right */}
                    <div className="absolute top-4 right-4 animate-float">
                      <div className="w-32 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-xl p-3 transform rotate-6 hover:rotate-12 transition-transform">
                        <div className="text-white text-xs mb-2">BANKIO</div>
                        <div className="text-white text-lg font-bold mb-1">**** **** 1234</div>
                        <div className="flex justify-between items-center">
                          <span className="text-white text-xs">12/25</span>
                          <div className="w-8 h-6 bg-white/20 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Money/Coins - Top Left */}
                    <div className="absolute top-8 left-4 animate-float" style={{animationDelay: '0.3s'}}>
                      <div className="flex gap-2">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                          <span className="text-white font-bold text-lg">$</span>
                        </div>
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
                          <span className="text-white font-bold text-lg">₹</span>
                        </div>
                      </div>
                    </div>

                    {/* Security Shield Icon */}
                    <div className="absolute top-20 right-12 animate-float" style={{animationDelay: '0.6s'}}>
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Chart/Graph - Left Side */}
                    <div className="absolute top-32 left-0 animate-float" style={{animationDelay: '0.9s'}}>
                      <div className="w-24 h-20 bg-white rounded-lg shadow-xl p-2">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                          <polyline points="10,50 25,40 40,30 55,20 70,15 85,10" 
                            fill="none" stroke="#3b82f6" strokeWidth="2"/>
                          <circle cx="10" cy="50" r="2" fill="#3b82f6"/>
                          <circle cx="25" cy="40" r="2" fill="#3b82f6"/>
                          <circle cx="40" cy="30" r="2" fill="#3b82f6"/>
                          <circle cx="55" cy="20" r="2" fill="#3b82f6"/>
                          <circle cx="70" cy="15" r="2" fill="#3b82f6"/>
                          <circle cx="85" cy="10" r="2" fill="#3b82f6"/>
                        </svg>
                      </div>
                    </div>

                    {/* Central Person with Banking Elements */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                      {/* Person */}
                      <div className="relative">
                        {/* Head */}
                        <div className="w-20 h-20 bg-[#92400e] rounded-full mx-auto mb-2 relative z-10">
                          {/* Glasses */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-7 border-2 border-gray-800 rounded-full"></div>
                        </div>
                        
                        {/* Body */}
                        <div className="w-24 h-28 bg-[#3b82f6] rounded-xl mx-auto relative z-10">
                          {/* Shirt */}
                          <div className="absolute top-2 left-2 right-2 h-20 bg-[#2563eb] rounded-lg"></div>
                        </div>
                        
                        {/* Legs */}
                        <div className="flex gap-2 justify-center mt-2 relative z-10">
                          <div className="w-10 h-20 bg-[#3b82f6] rounded-lg"></div>
                          <div className="w-10 h-20 bg-[#3b82f6] rounded-lg"></div>
                        </div>
                        
                        {/* Laptop with Banking Dashboard */}
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-28 h-20 bg-gray-800 rounded-lg shadow-2xl z-20">
                          <div className="w-full h-1 bg-gray-600 rounded-t-lg"></div>
                          <div className="p-2">
                            <div className="flex gap-1 mb-1">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="bg-blue-600 h-8 rounded flex items-center justify-center">
                              <span className="text-white text-xs font-bold">$12,450</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Floating Bank Icons */}
                        {/* Piggy Bank */}
                        <div className="absolute -top-4 right-8 animate-float" style={{animationDelay: '1.2s'}}>
                          <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-10 h-10 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Bank Building Icon */}
                        <div className="absolute -top-2 left-8 animate-float" style={{animationDelay: '1.5s'}}>
                          <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Checkmark - Success */}
                        <div className="absolute top-8 right-4 animate-float" style={{animationDelay: '0.8s'}}>
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Banking Icon - Bottom Right */}
                    <div className="absolute bottom-16 right-8 animate-float" style={{animationDelay: '1.8s'}}>
                      <div className="w-16 h-20 bg-white rounded-xl shadow-xl p-2">
                        <div className="w-full h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-1"></div>
                        <div className="flex gap-1 justify-center">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Lock/Security Icon - Bottom Left */}
                    <div className="absolute bottom-20 left-4 animate-float" style={{animationDelay: '2s'}}>
                      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                        </svg>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Mobile Illustration - Bank Related */}
            <div className="lg:hidden mt-8">
              <div className="relative w-full h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 overflow-hidden">
                {/* Credit Cards */}
                <div className="absolute top-4 right-4">
                  <div className="w-24 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-2 transform rotate-6">
                    <div className="text-white text-xs font-bold">BANKIO</div>
                    <div className="text-white text-sm mt-2">**** 1234</div>
                  </div>
                </div>
                
                {/* Money/Coins */}
                <div className="absolute top-6 left-4 flex gap-2">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">$</span>
                  </div>
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">₹</span>
                  </div>
                </div>
                
                {/* Central Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-20 h-20 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Security Icon */}
                <div className="absolute bottom-6 right-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Lock Icon */}
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Smart Banking Section */}
      <section className="py-4 md:py-6 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <AnimatedSection animation="fade-left" className="space-y-6">
              {/* Bell Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#3b82f6] rounded-full mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>

              {/* Smart Banking Label */}
              <div>
                <span className="text-sm md:text-base font-semibold text-[#10b981] tracking-wide uppercase">
                  Smart Banking
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Real time Notifications
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Your customer stay informed in real time with everything that's happening on his account: payments, transfer, advice. Get visibility on your customers' flows to anticipate their needs.
              </p>

              {/* Feature List */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Cards that work all across the world.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">No ATM fees. No minimum balance. No overdrafts.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Side - Illustration */}
            <AnimatedSection animation="fade-right" className="relative">
              <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
                
                {/* Background Elements */}
                {/* Bar Charts */}
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Vertical bars */}
                    <rect x="50" y="200" width="30" height="80" fill="#3b82f6"/>
                    <rect x="100" y="150" width="30" height="130" fill="#3b82f6"/>
                    <rect x="150" y="180" width="30" height="100" fill="#3b82f6"/>
                    <rect x="200" y="120" width="30" height="160" fill="#3b82f6"/>
                    <rect x="250" y="170" width="30" height="110" fill="#3b82f6"/>
                    <rect x="300" y="140" width="30" height="140" fill="#3b82f6"/>
                    <rect x="350" y="190" width="30" height="90" fill="#3b82f6"/>
                  </svg>
                </div>

                {/* Large Circular Background */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>

                {/* Email Icon - Background */}
                <div className="absolute top-20 right-20 animate-float">
                  <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center shadow-lg relative">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {/* Red notification dot */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>

                {/* Main Person with Phone */}
                <div className="relative z-10">
                  {/* Person */}
                  <div className="relative">
                    {/* Head */}
                    <div className="w-32 h-32 bg-[#d4a574] rounded-full mx-auto mb-4 relative">
                      {/* Hair */}
                      <div className="absolute top-0 left-0 right-0 h-20 bg-[#1f2937] rounded-t-full"></div>
                      {/* Face features */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 bg-[#92400e] rounded-full absolute -left-4"></div>
                        <div className="w-3 h-3 bg-[#92400e] rounded-full absolute -right-4"></div>
                        <div className="w-8 h-4 bg-[#92400e] rounded-full absolute top-4 left-1/2 transform -translate-x-1/2"></div>
                      </div>
                    </div>

                    {/* Body - Blue Top */}
                    <div className="w-40 h-48 bg-[#3b82f6] rounded-2xl mx-auto relative">
                      {/* Shirt details */}
                      <div className="absolute top-4 left-4 right-4 h-40 bg-[#2563eb] rounded-xl"></div>
                      {/* Sleeves */}
                      <div className="absolute top-8 left-0 w-8 h-32 bg-[#1e40af] rounded-r-xl"></div>
                      <div className="absolute top-8 right-0 w-8 h-32 bg-[#1e40af] rounded-l-xl"></div>
                    </div>

                    {/* Phone in Right Hand */}
                    <div className="absolute top-24 right-8 transform rotate-12 animate-float" style={{animationDelay: '0.3s'}}>
                      <div className="w-24 h-40 bg-gray-900 rounded-2xl p-2 shadow-2xl">
                        {/* Screen */}
                        <div className="w-full h-full bg-blue-50 rounded-xl p-3 flex flex-col items-center justify-center space-y-3">
                          {/* Bell Icon with Notification */}
                          <div className="relative">
                            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                              </svg>
                            </div>
                            {/* Concentric circles */}
                            <div className="absolute inset-0 border-2 border-blue-300 rounded-full animate-ping opacity-75"></div>
                            <div className="absolute inset-0 border-2 border-blue-200 rounded-full" style={{transform: 'scale(1.3)'}}></div>
                            <div className="absolute inset-0 border-2 border-blue-100 rounded-full" style={{transform: 'scale(1.6)'}}></div>
                          </div>
                          
                          {/* Alert Button */}
                          <button className="w-full py-2 bg-blue-400 text-white text-xs font-bold rounded-lg uppercase">
                            ALERT
                          </button>
                        </div>
                        {/* Phone frame */}
                        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Safe Investments Section */}
      <section className="py-4 md:py-6 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Illustration */}
            <AnimatedSection animation="fade-left" className="relative order-2 lg:order-1">
              <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
                
                {/* Background - Circular Gradient with Bar Graphs */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full opacity-50"></div>
                
                {/* Background Bar Graphs */}
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <rect x="50" y="200" width="40" height="80" fill="#3b82f6"/>
                    <rect x="110" y="150" width="40" height="130" fill="#3b82f6"/>
                    <rect x="170" y="180" width="40" height="100" fill="#3b82f6"/>
                    <rect x="230" y="120" width="40" height="160" fill="#3b82f6"/>
                    <rect x="290" y="170" width="40" height="110" fill="#3b82f6"/>
                    <rect x="350" y="140" width="40" height="140" fill="#3b82f6"/>
                  </svg>
                </div>

                {/* Upward Arrows - Growth Symbols */}
                <div className="absolute top-20 left-20 animate-float">
                  <svg className="w-12 h-12 text-blue-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                  </svg>
                </div>
                <div className="absolute top-32 right-32 animate-float" style={{animationDelay: '0.3s'}}>
                  <svg className="w-10 h-10 text-blue-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                  </svg>
                </div>
                <div className="absolute bottom-32 left-32 animate-float" style={{animationDelay: '0.6s'}}>
                  <svg className="w-14 h-14 text-blue-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                  </svg>
                </div>

                {/* Security Shield - Above Head */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 animate-float">
                  <div className="relative w-24 h-28 bg-green-100/80 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center shadow-xl p-3">
                    {/* Lock Icon */}
                    <svg className="w-8 h-8 text-green-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                    {/* Password Asterisks */}
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Central Woman Figure */}
                <div className="relative z-10 mt-16">
                  {/* Head */}
                  <div className="w-24 h-24 bg-[#d4a574] rounded-full mx-auto mb-3 relative">
                    {/* Hair */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-[#1f2937] rounded-t-full overflow-hidden">
                      {/* Hair ribbon */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-blue-200 rounded-full"></div>
                    </div>
                    {/* Face features */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-2 h-2 bg-[#92400e] rounded-full absolute -left-3"></div>
                      <div className="w-2 h-2 bg-[#92400e] rounded-full absolute -right-3"></div>
                      <div className="w-6 h-3 bg-[#92400e] rounded-full absolute top-3 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>

                  {/* Body - Blue Top */}
                  <div className="w-32 h-40 bg-[#3b82f6] rounded-2xl mx-auto relative">
                    {/* Shirt details */}
                    <div className="absolute top-2 left-2 right-2 h-36 bg-[#2563eb] rounded-xl"></div>
                    {/* Sleeves */}
                    <div className="absolute top-4 left-0 w-6 h-36 bg-[#1e40af] rounded-r-xl"></div>
                    <div className="absolute top-4 right-0 w-6 h-36 bg-[#1e40af] rounded-l-xl"></div>
                  </div>

                  {/* Left Hand - OK Gesture */}
                  <div className="absolute top-20 -left-4 animate-float" style={{animationDelay: '0.4s'}}>
                    <div className="w-12 h-16 bg-[#d4a574] rounded-full relative">
                      {/* Thumb and Index finger forming circle */}
                      <div className="absolute top-2 left-2 w-6 h-6 border-2 border-gray-800 rounded-full"></div>
                    </div>
                  </div>

                  {/* Right Hand - Extended towards Money */}
                  <div className="absolute top-24 -right-6 animate-float" style={{animationDelay: '0.7s'}}>
                    <div className="w-10 h-14 bg-[#d4a574] rounded-full transform rotate-12"></div>
                  </div>

                  {/* Money Bag */}
                  <div className="absolute top-32 right-8 animate-float" style={{animationDelay: '1s'}}>
                    <div className="relative">
                      {/* Bag */}
                      <div className="w-20 h-24 bg-white rounded-t-2xl rounded-b-lg shadow-2xl relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gray-300 rounded-t-lg"></div>
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-lg border-2 border-gray-200"></div>
                      </div>
                      
                      {/* Plant with Dollar Signs */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="flex gap-2">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">$</span>
                          </div>
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">$</span>
                          </div>
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">$</span>
                          </div>
                        </div>
                        {/* Stem */}
                        <div className="w-1 h-4 bg-green-600 mx-auto"></div>
                      </div>
                    </div>
                  </div>

                  {/* Coins Stack */}
                  <div className="absolute bottom-16 right-4 animate-float" style={{animationDelay: '1.3s'}}>
                    <div className="flex flex-col gap-1">
                      <div className="w-12 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-12 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-12 h-3 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Paper Money */}
                  <div className="absolute bottom-20 left-8 animate-float" style={{animationDelay: '1.6s'}}>
                    <div className="w-16 h-10 bg-green-600 rounded shadow-lg transform rotate-12">
                      <div className="text-white text-xs font-bold p-2">$100</div>
                    </div>
                  </div>
                </div>

              </div>
            </AnimatedSection>

            {/* Right Side - Text Content */}
            <AnimatedSection animation="fade-right" className="space-y-6 order-1 lg:order-2">
              {/* Checkmark Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#3b82f6] rounded-full mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Safe Investments Label */}
              <div>
                <span className="text-sm md:text-base font-semibold text-[#10b981] tracking-wide uppercase">
                  Safe Investments
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The Better Way to Save & Invest
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Bankio helps over 2 million customers achieve their financial goals by helping them save and invest with ease. Put that extra cash to use without putting it at risk with Bankio.
              </p>

              {/* Feature List */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Profitable to invest and Handy to manage</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Highest Returns on your investments</p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* CTA Section - Ready to make the leap */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
        {/* Background - Two-toned */}
        <div className="absolute inset-0">
          {/* Top Blue Background */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#1e3a8a]">
            {/* Abstract Pattern - Top Left */}
            <div className="absolute top-0 left-0 w-1/2 h-full opacity-20">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <path d="M0,100 Q50,80 100,100 T200,100 T300,100 T400,100" stroke="#60a5fa" strokeWidth="2" fill="none"/>
                <path d="M0,120 Q50,100 100,120 T200,120 T300,120 T400,120" stroke="#60a5fa" strokeWidth="2" fill="none"/>
                <path d="M0,140 Q50,120 100,140 T200,140 T300,140 T400,140" stroke="#60a5fa" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            {/* Large Circular Shape - Top Right */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full opacity-30 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          </div>
          {/* Bottom White Background */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"></div>
        </div>

        {/* Content Card */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection animation="scale" className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16">
            <div className="text-center space-y-6">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#059669]">
                Ready to make the leap?
              </h2>
              
              {/* Subheading */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Let us help you.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Link
                  to="/register"
                  className="px-8 py-4 bg-[#3b82f6] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-lg min-w-[180px] text-center"
                >
                  Open Account
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-lg min-w-[180px] text-center"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Financial Planning Section */}
      <section className="py-4 md:py-6 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Side - Text Content */}
            <AnimatedSection animation="fade-left" className="space-y-6">
              {/* Financial Planning Label */}
              <div>
                <span className="text-sm md:text-base font-semibold text-[#059669] tracking-wide uppercase">
                  Financial Planning
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Let's plan your finances the right way
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Lending that doesn't weigh you down. We know how hard is it to start something new, that's why we have the perfect plan for you.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/register"
                  className="inline-block px-8 py-4 bg-[#3b82f6] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-lg"
                >
                  Apply for a loan
                </Link>
              </div>
            </AnimatedSection>

            {/* Right Side - Loan Service Cards */}
            <AnimatedSection animation="fade-right" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Home Loans Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover-lift group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <div className="relative">
                      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Home Loans</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Lowest interest rates</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Fast Loan Processing</p>
                  </div>
                </div>
              </div>

              {/* Car Loans Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover-lift group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Car Loans</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Competitive rates</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Quick Easy</p>
                  </div>
                </div>
              </div>

              {/* Education Loans Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover-lift group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <div className="relative">
                      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7M12 14l-9-5M12 14l9-5" />
                      </svg>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">$</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Education Loans</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Pay back conveniently</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Fast Loan Processing</p>
                  </div>
                </div>
              </div>

              {/* Business Loans Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover-lift group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <div className="relative">
                      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">$</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Business Loans</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Easy Approvals</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Full Assistance</p>
                  </div>
                </div>
              </div>

            </AnimatedSection>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

