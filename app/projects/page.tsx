"use client";
import { useState, useEffect } from 'react';

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
  const goToSlide = (index) => setCurrentIndex(index);

  const getVisibleProjects = () => {
    const start = currentIndex * projectsPerView;
    return projects.slice(start, start + projectsPerView);
  };

  const visibleProjects = getVisibleProjects();

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[2px] w-8 bg-blue-900"></span>
            <span className="text-blue-900 font-semibold tracking-widest text-xs uppercase">Our Work</span>
            <span className="h-[2px] w-8 bg-blue-900"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Projects
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore active and upcoming projects built with modern technologies.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative w-full h-[220px] bg-slate-200 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white text-xl font-bold drop-shadow-lg block truncate">
                      {project.name}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-900 text-xs font-medium rounded-full border border-blue-100">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                  >
                    Visit Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10 backdrop-blur-sm border border-slate-200"
              >
                <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10 backdrop-blur-sm border border-slate-200"
              >
                <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-900 w-8' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}