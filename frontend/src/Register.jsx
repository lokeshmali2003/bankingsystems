import { useState } from 'react'
import AnimatedSection from './components/AnimatedSection'
import Loading from './components/Loading'

function Register() {
  const [formData, setFormData] = useState({
    firstName: 'Jone',
    lastName: 'Fisher',
    email: '',
    referralCode: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      // Handle success/error here
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Form */}
          <AnimatedSection animation="fade-left" className="w-full">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 lg:p-10">
              {/* Header */}
              <div className="mb-6">
                <div className="inline-block mb-3">
                  <span className="text-sm md:text-base font-semibold text-[#10b981] tracking-wide uppercase">
                    The Power of Financial Freedom
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  Let's Get Started!
                </h1>
                <p className="text-base md:text-lg text-gray-600">
                  Please Enter your Email Address to Start your Online Application
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] outline-none transition-all bg-white"
                    placeholder="Enter your first name"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] outline-none transition-all bg-white"
                    placeholder="Enter your last name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Enter Your Email ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] outline-none transition-all bg-white"
                    placeholder="Your email ID here"
                    required
                  />
                </div>

                {/* Referral Code */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Someone invited you over?
                  </label>
                  <input
                    type="text"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] outline-none transition-all bg-white"
                    placeholder="Enter the referral code"
                  />
                </div>

                {/* Legal Text */}
                <div className="pt-2">
                  <p className="text-xs md:text-sm text-[#3b82f6] leading-relaxed">
                    By clicking submit, you agree to Bankio's{' '}
                    <a href="/terms" className="underline hover:text-[#2563eb]">Terms of Use</a>,{' '}
                    <a href="/privacy" className="underline hover:text-[#2563eb]">Privacy Policy</a>,{' '}
                    E-sign & communication Authorization.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3.5 bg-[#3b82f6] text-white font-semibold rounded-xl hover:bg-[#2563eb] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-base md:text-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loading size="sm" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Right Side - Illustration */}
          <AnimatedSection animation="fade-right" className="relative hidden lg:block">
            <div className="relative w-full h-[500px] md:h-[550px] flex items-center justify-center">
              
              {/* Background - Light Blue */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-50 rounded-3xl"></div>
              
              {/* Abstract Curved Shapes */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {/* Large White Curve */}
                <svg viewBox="0 0 400 500" className="w-full h-full absolute">
                  <path
                    d="M0,80 Q80,40 160,80 T320,80 L400,80 L400,500 L0,500 Z"
                    fill="white"
                    opacity="0.7"
                  />
                  <path
                    d="M0,120 Q120,60 240,120 T400,120 L400,500 L0,500 Z"
                    fill="white"
                    opacity="0.5"
                  />
                </svg>

                {/* Bar Graphs Background */}
                <div className="absolute bottom-16 left-8 opacity-25">
                  <svg viewBox="0 0 180 120" className="w-40 h-28">
                    <rect x="8" y="80" width="16" height="40" fill="#3b82f6" rx="2"/>
                    <rect x="32" y="65" width="16" height="55" fill="#3b82f6" rx="2"/>
                    <rect x="56" y="50" width="16" height="70" fill="#3b82f6" rx="2"/>
                    <rect x="80" y="70" width="16" height="50" fill="#3b82f6" rx="2"/>
                    <rect x="104" y="55" width="16" height="65" fill="#3b82f6" rx="2"/>
                    <rect x="128" y="40" width="16" height="80" fill="#3b82f6" rx="2"/>
                  </svg>
                </div>
                <div className="absolute bottom-24 right-8 opacity-25">
                  <svg viewBox="0 0 160 100" className="w-36 h-24">
                    <rect x="8" y="70" width="14" height="30" fill="#3b82f6" rx="2"/>
                    <rect x="28" y="60" width="14" height="40" fill="#3b82f6" rx="2"/>
                    <rect x="48" y="50" width="14" height="50" fill="#3b82f6" rx="2"/>
                    <rect x="68" y="65" width="14" height="35" fill="#3b82f6" rx="2"/>
                    <rect x="88" y="55" width="14" height="45" fill="#3b82f6" rx="2"/>
                  </svg>
                </div>
              </div>

              {/* Main Illustration */}
              <div className="relative z-10 flex items-center justify-center h-full">
                
                {/* Two People Shaking Hands */}
                <div className="relative flex items-center justify-center">
                  
                  {/* Person 1 (Left) */}
                  <div className="relative mr-8">
                    {/* Head */}
                    <div className="w-16 h-16 bg-[#d4a574] rounded-full mx-auto mb-2 relative z-10">
                      {/* Hair */}
                      <div className="absolute top-0 left-0 right-0 h-10 bg-[#1f2937] rounded-t-full"></div>
                      {/* Face features */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-1.5 h-1.5 bg-[#92400e] rounded-full absolute -left-2.5"></div>
                        <div className="w-1.5 h-1.5 bg-[#92400e] rounded-full absolute -right-2.5"></div>
                        <div className="w-5 h-2 bg-[#92400e] rounded-full absolute top-2.5 left-1/2 transform -translate-x-1/2"></div>
                      </div>
                    </div>
                    
                    {/* Body - Blue Shirt with Tie */}
                    <div className="w-20 h-28 bg-[#3b82f6] rounded-xl mx-auto relative z-10">
                      {/* Shirt */}
                      <div className="absolute top-1.5 left-1.5 right-1.5 h-24 bg-[#2563eb] rounded-lg"></div>
                      {/* Tie */}
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2.5 h-16 bg-blue-200 rounded-sm"></div>
                      {/* Sleeves */}
                      <div className="absolute top-3 left-0 w-3 h-20 bg-[#1e40af] rounded-r-lg"></div>
                      <div className="absolute top-3 right-0 w-3 h-20 bg-[#1e40af] rounded-l-lg"></div>
                    </div>
                    
                    {/* Legs - Dark Blue Pants */}
                    <div className="flex gap-1.5 justify-center mt-1.5">
                      <div className="w-8 h-16 bg-[#1e3a8a] rounded-lg"></div>
                      <div className="w-8 h-16 bg-[#1e3a8a] rounded-lg"></div>
                    </div>
                    
                    {/* Extended Right Hand */}
                    <div className="absolute top-16 right-2 w-6 h-10 bg-[#d4a574] rounded-full transform rotate-12 z-20"></div>
                  </div>

                  {/* Dollar Sign Icon - Between Hands */}
                  <div className="relative z-30 animate-float">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-white text-3xl font-bold">$</span>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-50 animate-ping"></div>
                  </div>

                  {/* Person 2 (Right) */}
                  <div className="relative ml-8">
                    {/* Head */}
                    <div className="w-16 h-16 bg-[#d4a574] rounded-full mx-auto mb-2 relative z-10">
                      {/* Hair */}
                      <div className="absolute top-0 left-0 right-0 h-10 bg-[#1f2937] rounded-t-full"></div>
                      {/* Beard */}
                      <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-10 h-5 bg-[#1f2937] rounded-b-full"></div>
                      {/* Face features */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-1.5 h-1.5 bg-[#92400e] rounded-full absolute -left-2.5"></div>
                        <div className="w-1.5 h-1.5 bg-[#92400e] rounded-full absolute -right-2.5"></div>
                      </div>
                    </div>
                    
                    {/* Body - Dark Blue Sweater */}
                    <div className="w-20 h-28 bg-[#1e3a8a] rounded-xl mx-auto relative z-10">
                      {/* Sweater details */}
                      <div className="absolute top-1.5 left-1.5 right-1.5 h-24 bg-[#1e40af] rounded-lg"></div>
                      {/* Sleeves */}
                      <div className="absolute top-3 left-0 w-3 h-20 bg-[#1e40af] rounded-r-lg"></div>
                      <div className="absolute top-3 right-0 w-3 h-20 bg-[#1e40af] rounded-l-lg"></div>
                    </div>
                    
                    {/* Legs - Light Blue Pants */}
                    <div className="flex gap-1.5 justify-center mt-1.5">
                      <div className="w-8 h-16 bg-blue-200 rounded-lg"></div>
                      <div className="w-8 h-16 bg-blue-200 rounded-lg"></div>
                    </div>
                    
                    {/* Extended Left Hand */}
                    <div className="absolute top-16 left-2 w-6 h-10 bg-[#d4a574] rounded-full transform -rotate-12 z-20"></div>
                    
                    {/* Briefcase in Left Hand */}
                    <div className="absolute top-20 left-6 w-10 h-7 bg-blue-200 rounded-lg shadow-lg transform rotate-12 z-30">
                      <div className="w-full h-0.5 bg-blue-300 rounded-t-lg"></div>
                      <div className="absolute top-0.5 left-1 w-1.5 h-1.5 bg-blue-400 rounded"></div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </AnimatedSection>

          {/* Mobile Illustration Placeholder */}
          <div className="lg:hidden mt-8">
            <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <span className="text-white text-5xl font-bold">$</span>
                </div>
                <p className="text-gray-700 font-semibold text-lg">Start Your Financial Journey</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register

