import AnimatedSection from './components/AnimatedSection'

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 md:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <AnimatedSection animation="fade-up" className="space-y-6">
            <div className="inline-block">
              <span className="text-sm md:text-base font-semibold text-[#059669] tracking-wide uppercase">
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              About <span className="text-[#3b82f6]">BANKIO</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Empowering financial freedom with innovative banking solutions. We combine cutting-edge technology with traditional banking values to deliver exceptional financial services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        {/* Bank Overview */}
        <section className="mb-16">
          <AnimatedSection animation="fade-up">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-1 h-12 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full mr-4"></span>
                Bank Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  BANKIO has been at the forefront of financial innovation for over two decades, 
                  serving millions of customers worldwide. We combine cutting-edge technology with 
                  traditional banking values to deliver exceptional financial services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Founded with a vision to make banking accessible, secure, and convenient, we have 
                  continuously evolved to meet the changing needs of our customers. Our commitment 
                  to excellence and customer satisfaction has made us a trusted name in the banking industry.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <AnimatedSection animation="scale" delay={100} className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3">20+</div>
                    <div className="text-gray-700 font-semibold">Years of Excellence</div>
                  </AnimatedSection>
                  <AnimatedSection animation="scale" delay={200} className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-3">5M+</div>
                    <div className="text-gray-700 font-semibold">Happy Customers</div>
                  </AnimatedSection>
                  <AnimatedSection animation="scale" delay={300} className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent mb-3">50+</div>
                    <div className="text-gray-700 font-semibold">Countries Served</div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <AnimatedSection animation="fade-left">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To provide accessible, secure, and innovative banking solutions that empower individuals 
                  and businesses to achieve their financial goals. We strive to make banking simple, 
                  transparent, and customer-centric.
                </p>
              </div>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection animation="fade-right">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To become the world's most trusted and innovative banking partner, setting new 
                  standards in financial services while maintaining the highest levels of security, 
                  integrity, and customer satisfaction.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <div className="inline-block mb-3">
              <span className="text-sm md:text-base font-semibold text-[#059669] tracking-wide uppercase">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Meet the experts leading our organization</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <AnimatedSection animation="scale" delay={100}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group">
                <div className="relative w-28 h-28 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  JD
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 transition-opacity blur-xl"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">John Davis</h3>
                <p className="text-[#3b82f6] font-semibold mb-4">Chief Executive Officer</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  With over 25 years of experience in banking and finance, John leads our strategic vision and growth initiatives.
                </p>
              </div>
            </AnimatedSection>

            {/* Team Member 2 */}
            <AnimatedSection animation="scale" delay={200}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group">
                <div className="relative w-28 h-28 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  SM
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-50 transition-opacity blur-xl"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Martinez</h3>
                <p className="text-[#3b82f6] font-semibold mb-4">Chief Technology Officer</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Sarah drives our technological innovation, ensuring we stay ahead in digital banking solutions.
                </p>
              </div>
            </AnimatedSection>

            {/* Team Member 3 */}
            <AnimatedSection animation="scale" delay={300}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group">
                <div className="relative w-28 h-28 bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  RW
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-50 transition-opacity blur-xl"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Robert Wilson</h3>
                <p className="text-[#3b82f6] font-semibold mb-4">Chief Security Officer</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Robert ensures the highest levels of security and compliance across all our banking operations.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Compliance & Security */}
        <section className="mb-16">
          <AnimatedSection animation="fade-up">
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12 lg:p-16 border border-blue-100 shadow-xl">
              <div className="text-center mb-12">
                <div className="inline-block mb-3">
                  <span className="text-sm md:text-base font-semibold text-[#059669] tracking-wide uppercase">
                    Security & Trust
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Compliance & Security
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">Your security is our top priority</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Compliance */}
                <AnimatedSection animation="fade-left">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Regulatory Compliance</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We strictly adhere to all banking regulations and standards set by financial authorities. 
                      Our compliance framework ensures we meet and exceed industry requirements.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">ISO 27001 Certified</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">PCI DSS Compliant</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">GDPR Compliant</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">Regular Audits & Assessments</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* Security */}
                <AnimatedSection animation="fade-right">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Security Measures</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Your security is our top priority. We employ multiple layers of protection to 
                      safeguard your financial data and transactions.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">256-bit SSL Encryption</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">Multi-Factor Authentication</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">Real-time Fraud Detection</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">Secure Data Centers</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>

              {/* Security Badge */}
              <AnimatedSection animation="scale" className="text-center">
                <div className="inline-flex items-center space-x-6 bg-white/90 backdrop-blur-sm px-10 py-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-bold text-gray-900 mb-1">Bank-Level Security</p>
                    <p className="text-sm text-gray-600">Your data is protected with industry-leading security standards</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  )
}

export default About

