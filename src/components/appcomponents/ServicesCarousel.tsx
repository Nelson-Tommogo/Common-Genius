// app/components/ServicesCarousel.tsx
"use client";

import router from "next/router";
import { useState, useEffect } from "react";

// Services data with Cloudinary images
const services = [
  { 
    id: 1, 
    name: "Mobile Development", 
    description: "Building responsive and high-performance mobile applications for iOS and Android platforms.",
    image: "https://res.cloudinary.com/df64ucx5w/image/upload/v1782757871/web_yroiac.jpg"
  },
  { 
    id: 2, 
    name: "Web Development", 
    description: "Creating dynamic and interactive web applications using modern frameworks and technologies.",
    image: "https://res.cloudinary.com/df64ucx5w/image/upload/v1782757870/web1_xhqeki.jpg"
  },
  { 
    id: 3, 
    name: "UI/UX Design", 
    description: "Designing user-friendly interfaces and experiences that enhance usability and engagement.",
    image: "https://res.cloudinary.com/df64ucx5w/image/upload/v1782757869/web2_rmbj5h.jpg"
  },
  { 
    id: 4, 
    name: "Backend Development", 
    description: "Developing robust server-side logic, APIs, and database management for seamless application functionality.",
    image: "https://res.cloudinary.com/df64ucx5w/image/upload/v1782757869/web3_a1hqvb.jpg"
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(5);

  // Calculate years of experience based on current year
  useEffect(() => {
    const startYear = 2021; // Started in 2021
    const currentYear = new Date().getFullYear();
    const experience = currentYear - startYear;
    setYearsOfExperience(experience);
  }, []);

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

  const scrollToContact = () => {
    router.push('/contacts');
  };

  const currentService = services[currentIndex];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-12 md:mb-16">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">My Services</h3>
      
      <div className="relative bg-white rounded-lg md:rounded-xl shadow-lg overflow-hidden">
        {/* Service Card with Image */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image Section - Fixed size */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={currentService.image}
              alt={currentService.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-black/50 md:via-transparent md:to-transparent"></div>
            
            {/* Years of Experience Flag */}
            <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-blue-900/90 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg backdrop-blur-sm flex items-center gap-2 shadow-lg border border-blue-400/20 text-xs md:text-sm">
              <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold">{yearsOfExperience}+</span>
              <span className="hidden sm:inline text-xs md:text-sm font-normal">Years Experience</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
            {/* Service Name with Icon */}
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="w-1 h-6 md:h-8 bg-blue-900 rounded-full"></span>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                {currentService.name}
              </h4>
            </div>

            {/* Service Description */}
            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-lg mb-4 md:mb-6">
              {currentService.description}
            </p>

            {/* Experience Badge - Mobile Only */}
            <div className="md:hidden bg-blue-50 text-blue-900 px-3 py-2 rounded-lg mb-4 flex items-center gap-2 self-start border border-blue-100 text-xs sm:text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold">{yearsOfExperience}+</span>
              <span className="text-xs sm:text-sm">Years Experience</span>
            </div>

            {/* Get It Button */}
            <button
              onClick={scrollToContact}
              className="self-start px-4 md:px-8 py-2 md:py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 text-sm md:text-base"
            >
              Get It
              <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 md:p-2 shadow-lg transition-all hover:scale-110 z-10 backdrop-blur-sm"
          aria-label="Previous service"
        >
          <svg className="w-4 md:w-6 h-4 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 md:p-2 shadow-lg transition-all hover:scale-110 z-10 backdrop-blur-sm"
          aria-label="Next service"
        >
          <svg className="w-4 md:w-6 h-4 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all ${
                index === currentIndex ? 'bg-blue-900 w-6 md:w-8 h-2 md:h-3' : 'bg-white/60 hover:bg-white/80 w-2 md:w-3 h-2 md:h-3'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}