"use client";

import { useState, useEffect } from "react"

export default function Home() {
  // Services data
  const services = [
    { id: 1, name: "Mobile Development", description: "Building responsive and high-performance mobile applications for iOS and Android platforms." },
    { id: 2, name: "Web Development", description: "Creating dynamic and interactive web applications using modern frameworks and technologies." },
    { id: 3, name: "UI/UX Design", description: "Designing user-friendly interfaces and experiences that enhance usability and engagement." },
    { id: 4, name: "Backend Development", description: "Developing robust server-side logic, APIs, and database management for seamless application functionality." },
  ];

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen py-2 px-4">
      {/* Image and Description side by side */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto items-center mb-16">
        {/* Image Div */}
        <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-300 rounded-lg shadow-md flex items-center justify-center overflow-hidden">
          <img 
            src="/your-image.jpg" 
            alt="Profile image" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Description Div */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Hello I'm Nelson Tommogo</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Senior Software Engineer with a passion for building scalable and efficient web applications. I specialize in React, Next.js, and Node.js, and have experience working on both frontend and backend development. My goal is to create seamless user experiences while ensuring high performance and maintainability of the codebase.
          </p>
          <div className="flex gap-3 pt-2">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Services Carousel Section */}
      <div className="w-full max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Services</h3>
        
        <div className="relative bg-white rounded-xl shadow-lg p-8 min-h-[180px]">
          {/* Service Name - Always visible, doesn't change */}
          <div className="text-center mb-4">
            <h4 className="text-2xl font-semibold text-blue-600">
              {services[currentIndex].name}
            </h4>
          </div>

          {/* Service Description - Auto-plays */}
          <div className="flex flex-col items-center text-center">
            <p className="text-gray-600 leading-relaxed max-w-2xl text-lg">
              {services[currentIndex].description}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors"
            aria-label="Previous service"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors"
            aria-label="Next service"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}