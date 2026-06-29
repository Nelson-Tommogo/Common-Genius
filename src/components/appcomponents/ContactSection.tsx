
export default function ContactSection() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT SIDE: Contact Information Cards */}
        <div className="space-y-6">
          
          {/* Contact Details Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-900 rounded-full"></span>
              Contact Information
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:nelsontommogo9@gmail.com" className="text-blue-900 hover:underline font-medium">
                    nelsontommogo9@gmail.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21c-1.156.579-3.206 1.756-4.224 2.708a1 1 0 01-.996.018L3 5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+254700000000" className="text-blue-900 hover:underline font-medium">
                    +254 700 000 000
                  </a>
                </div>
              </li>
              
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <span className="font-medium text-gray-800">Nairobi, Kenya</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-900 rounded-full"></span>
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {/* GitHub */}
              <a 
                href="https://github.com/Nelson-Tommogo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span className="font-medium">GitHub</span>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/nelson-tommogo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-medium">LinkedIn</span>
              </a>
              
              {/* X (Twitter) */}
              <a 
                href="https://x.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="font-medium">X</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Get In Touch</h3>
          <p className="text-gray-500 mb-6">Have a question or want to work together? Send me a message!</p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="How can I help you?"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}