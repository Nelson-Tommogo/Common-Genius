"use client";
import { useState, useEffect, SetStateAction } from 'react';

const projects = [
  {
    id: 1,
    name: "SmartMavuno",
    description: "A smart agricultural platform that helps farmers optimize crop yields through data-driven insights and real-time monitoring.",
    image: "https://res.cloudinary.com/df64ucx5w/image/upload/v1782758720/smartmavuno_phlmfo.png",
    link: "https://smartmavuno.com",
    technologies: ["React", "Node.js", "MongoDB", "AI/ML"]
  },
  {
    id: 2,
    name: "Mebiut",
    description: "A modern web application designed to streamline business operations and enhance productivity through intuitive tools and seamless workflows.",
    image: "https://res.cloudinary.com/df64ucx5w/image/upload/v1782758721/mebiut_vyejxj.png",
    link: "https://mebiut.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"]
  },
  {
    id: 3,
    name: "Omnipower Solutions",
    description: "Web Based platform for Omnipower Solutions, a leading provider of energy solutions, showcasing their products and services with an intuitive user interface, with payment integration for seamless transactions.",
    image: "https://res.cloudinary.com/df64ucx5w/image/upload/v1783442085/omnipowersolutions_wicka3.png",
    link: "https://omnipowersolutions.co.ke/",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    id: 4,
    name: "Ushahidi Evidence Platform",
    description: "AI powered web based platform for uploading evidences, certificates, OB Exerpts, CCTV Footages and other documents for later retrieval and use in court, Schools or personal use.",
    image: "https://res.cloudinary.com/df64ucx5w/image/upload/v1783442501/ushahidi_iw29ml.png",
    link: "https://ushahidi-beta.vercel.app/",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AI/ML"]
  }
  
];

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerView, setProjectsPerView] = useState(1);

  useEffect(() => {
    const updateProjectsPerView = () => {
      if (window.innerWidth >= 1024) setProjectsPerView(3);
      else if (window.innerWidth >= 768) setProjectsPerView(2);
      else setProjectsPerView(1);
    };

    updateProjectsPerView();
    window.addEventListener('resize', updateProjectsPerView);
    return () => window.removeEventListener('resize', updateProjectsPerView);
  }, []);

  useEffect(() => {
    const totalSlides = Math.ceil(projects.length / projectsPerView);
    if (totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev === totalSlides - 1 ? 0 : prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [projectsPerView]);

  const totalSlides = Math.ceil(projects.length / projectsPerView);

  const goToPrevious = () => setCurrentIndex((prev) => prev === 0 ? totalSlides - 1 : prev - 1);
  const goToNext = () => setCurrentIndex((prev) => prev === totalSlides - 1 ? 0 : prev + 1);
  const goToSlide = (index: SetStateAction<number>) => setCurrentIndex(index);

  const getVisibleProjects = () => {
    const start = currentIndex * projectsPerView;
    return projects.slice(start, start + projectsPerView);
  };

  const visibleProjects = getVisibleProjects();

  return (
    <main className="min-h-screen bg-slate-50 py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
<div className="pt-20 md:pt-24 lg:pt-28 pb-6 md:pb-10">
  <div className="text-center max-w-4xl mx-auto px-4">
    <div className="flex items-center justify-center gap-2 mb-4 md:mb-5">
      <span className="h-[2px] w-6 md:w-10 bg-gradient-to-r from-blue-900 to-blue-600"></span>
      <span className="text-blue-900 font-semibold tracking-[0.15em] text-xs md:text-sm uppercase">
        My Work
      </span>
      <span className="h-[2px] w-6 md:w-10 bg-gradient-to-l from-blue-900 to-blue-600"></span>
    </div>
    
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-3 md:mb-4 leading-tight">
      Projects
    </h1>
    
    <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
      Explore active and upcoming projects built with modern technologies.
    </p>
  </div>
</div>

        {/* Projects Carousel */}
        <div className="relative mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {visibleProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg md:rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] bg-slate-200 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                    <span className="text-white text-lg md:text-xl font-bold drop-shadow-lg block truncate">
                      {project.name}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2.5 md:px-3 py-0.5 md:py-1 bg-blue-50 text-blue-900 text-xs font-medium rounded-full border border-blue-100">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-blue-900 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-blue-800 transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                  >
                    Visit Project
                    <svg className="w-3 md:w-4 h-3 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white/90 hover:bg-white rounded-full p-1.5 md:p-2 shadow-lg transition-all hover:scale-110 z-10 backdrop-blur-sm border border-slate-200"
              >
                <svg className="w-4 md:w-6 h-4 md:h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white/90 hover:bg-white rounded-full p-1.5 md:p-2 shadow-lg transition-all hover:scale-110 z-10 backdrop-blur-sm border border-slate-200"
              >
                <svg className="w-4 md:w-6 h-4 md:h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-900 w-6 md:w-8 h-2 md:h-3' : 'bg-slate-300 hover:bg-slate-400 w-2 md:w-3 h-2 md:h-3'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}