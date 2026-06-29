// app/components/ServicesCarousel.tsx
"use client";

import { useState, useEffect } from "react";

// Services data
const services = [
  { id: 1, name: "Mobile Development", description: "Building responsive and high-performance mobile applications for iOS and Android platforms." },
  { id: 2, name: "Web Development", description: "Creating dynamic and interactive web applications using modern frameworks and technologies." },
  { id: 3, name: "UI/UX Design", description: "Designing user-friendly interfaces and experiences that enhance usability and engagement." },
  { id: 4, name: "Backend Development", description: "Developing robust server-side logic, APIs, and database management for seamless application functionality." },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
    <div className="w-full max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Services</h3>
      
      <div className="relative bg-white rounded-xl shadow-lg p-8 min-h-[180px]">
        {/* Service Name */}
        <div className="text-center mb-4">
          <h4 className="text-2xl font-semibold text-blue-600">
            {services[currentIndex].name}
          </h4>
        </div>

        {/* Service Description */}
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
  );
}