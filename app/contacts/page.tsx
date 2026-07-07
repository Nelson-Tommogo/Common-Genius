"use client";
import { useState } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaTwitter,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-[#fcfcfc] flex items-center justify-center px-4 py-8 md:py-12">
      <div className="w-full max-w-6xl">
        
        {/* Header Section */}
       <div className="pt-20 md:pt-24 lg:pt-28 pb-6 md:pb-10">
  <div className="text-center max-w-4xl mx-auto px-4">
    <div className="flex items-center justify-center gap-3 mb-4 md:mb-5">
      <span className="h-[2px] w-6 md:w-10 bg-gradient-to-r from-blue-900 to-blue-600"></span>
      <span className="text-blue-900 font-semibold tracking-[0.15em] text-xs md:text-sm uppercase">
        Get in touch
      </span>
      <span className="h-[2px] w-6 md:w-10 bg-gradient-to-l from-blue-900 to-blue-600"></span>
    </div>
    
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-3 md:mb-4 leading-tight">
      Let's Work Together
    </h1>
  </div>
</div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-4 md:gap-6">
            
            {/* Email Card */}
            <div className="bg-white rounded-lg md:rounded-2xl p-4 md:p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] flex items-center gap-4 md:gap-5">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-lg md:rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 text-lg md:text-xl shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5 md:mb-1">Email</p>
                <p className="text-slate-800 font-medium text-sm md:text-base">nelsontommogo9@gmail.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-lg md:rounded-2xl p-4 md:p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] flex items-center gap-4 md:gap-5">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-lg md:rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 text-lg md:text-xl shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5 md:mb-1">Phone</p>
                <p className="text-slate-800 font-medium text-sm md:text-base">+254 759735505</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-lg md:rounded-2xl p-4 md:p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] flex items-center gap-4 md:gap-5">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-lg md:rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 text-lg md:text-xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5 md:mb-1">Location</p>
                <p className="text-slate-800 font-medium text-sm md:text-base">Nairobi, Kenya</p>
              </div>
            </div>

            {/* Social Card */}
            <div className="bg-white rounded-lg md:rounded-2xl p-4 md:p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] flex-1">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">Find me online</p>
              <div className="flex gap-3 md:gap-4">
                <a 
                  href="https://www.linkedin.com/in/nelson-tommogo/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-[#f1f3f6] hover:bg-blue-100 flex items-center justify-center text-slate-800 hover:text-blue-900 transition-colors"
                >
                  <FaLinkedin className="text-lg md:text-xl" />
                </a>
                <a 
                  href="https://github.com/Nelson-Tommogo" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-[#f1f3f6] hover:bg-blue-100 flex items-center justify-center text-slate-800 hover:text-blue-900 transition-colors"
                >
                  <FaGithub className="text-lg md:text-xl" />
                </a>
                <a
                  href="https://twitter.com/nelson_tommogo"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-[#f1f3f6] hover:bg-blue-100 flex items-center justify-center text-slate-800 hover:text-blue-900 transition-colors"
                >
                  <FaTwitter className="text-lg md:text-xl" />
                </a>
                <a
                  href="https://www.facebook.com/nelson.tommogo"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-[#f1f3f6] hover:bg-blue-100 flex items-center justify-center text-slate-800 hover:text-blue-900 transition-colors"
                >
                  <FaFacebook className="text-lg md:text-xl" />
                </a>
                <a
                href="https://www.instagram.com/nelson_tommogo/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl bg-[#f1f3f6] hover:bg-blue-100 flex items-center justify-center text-slate-800 hover:text-blue-900 transition-colors"
                >
                  <FaInstagram className="text-lg md:text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all placeholder:text-slate-300 text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all placeholder:text-slate-300 text-sm md:text-base"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all placeholder:text-slate-300 text-sm md:text-base"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all resize-none placeholder:text-slate-300 text-sm md:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white font-semibold py-2.5 md:py-3.5 rounded-lg md:rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:from-blue-900 hover:to-slate-900 transition-all text-sm md:text-base"
              >
                <FaPaperPlane className="text-sm" />
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </main>
  );
}