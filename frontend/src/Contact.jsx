import AnimatedSection from './components/AnimatedSection'

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-20 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up-delay">
            We're here to help. Get in touch with our team.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={0}>
          <div className="modern-card p-8 hover-lift">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-3"></span>
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white/80 backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white/80 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white/80 backdrop-blur-sm"
                  placeholder="What can we help you with?"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none bg-white/80 backdrop-blur-sm"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection animation="fade-right" delay={200}>
          <div className="space-y-6">
            <div className="modern-card p-8 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600 mb-1">support@bankingsystem.com</p>
                  <p className="text-gray-600">info@bankingsystem.com</p>
                </div>
              </div>
            </div>

            <div className="modern-card p-8 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 123-4568</p>
                </div>
              </div>
            </div>

            <div className="modern-card p-8 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600 mb-1">123 Banking Street</p>
                  <p className="text-gray-600 mb-1">Financial District</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="modern-card p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full mr-3"></span>
                Business Hours
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <span className="font-semibold">Monday - Friday</span>
                  <span className="text-blue-600 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
                  <span className="font-semibold">Saturday</span>
                  <span className="text-purple-600 font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-gray-500 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

export default Contact

