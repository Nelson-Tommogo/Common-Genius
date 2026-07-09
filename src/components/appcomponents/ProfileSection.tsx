// app/components/ProfileSection.tsx
"use client";

export default function ProfileSection() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-6xl mx-auto items-center mb-12 md:mb-16">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-48 sm:w-56 md:w-80 lg:w-96 h-48 sm:h-56 md:h-80 lg:h-96">
          <img 
            src="https://res.cloudinary.com/df64ucx5w/image/upload/v1782755698/profile_kpktwb.jpg" 
            alt="Nelson Tommogo - Profile" 
            className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white"
            style={{ objectPosition: 'top center' }}
          />
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 -m-1"></div>
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Hello I'm Nelson Tommogo</h2>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
          Senior Software Engineer with a passion for building scalable and efficient Mobile web applications in React, Next.js, kotlin - KMP, Flutter and Laravel. My Goal to Continue contributing to projects and solutions that shape Kenyas and Africa Ecosystem.
        </p>
        <div className="flex gap-2 pt-2 flex-wrap">
          <a 
            href="https://github.com/Nelson-Tommogo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 md:px-4 py-2 md:py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2 text-sm md:text-base"
          >
            <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a 
            href="https://docs.google.com/document/d/1zsdXTa0WTB6ypN5Jk9tqEh4C4NK_t56yty4eK0XNa6s/edit?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 md:px-6 py-2 md:py-2.5 bg-blue-900 text-white rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2 text-sm md:text-base"
          >
            <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
}