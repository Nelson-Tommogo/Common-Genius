// app/components/ProjectsSection.tsx
"use client";

import { useState, useEffect } from "react";

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

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerView, setProjectsPerView] = useState(1);

  // Determine how many projects to show based on screen size
  useEffect(() => {
    const updateProjectsPerView = () => {
      if (window.innerWidth >= 1024) {
        setProjectsPerView(3); // lg: 3 projects
      } else if (window.innerWidth >= 768) {
        setProjectsPerView(2); // md: 2 projects
      } else {
        setProjectsPerView(1); // mobile: 1 project
      }
    };

    updateProjectsPerView();
    window.addEventListener('resize', updateProjectsPerView);
    return () => window.removeEventListener('resize', updateProjectsPerView);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const totalSlides = Math.ceil(projects.length / projectsPerView);
    if (totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [projectsPerView]);

  const totalSlides = Math.ceil(projects.length / projectsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Get current visible projects
  const getVisibleProjects = () => {
    const start = currentIndex * projectsPerView;
    const end = start + projectsPerView;
    return projects.slice(start, end);
  };

  const visibleProjects = getVisibleProjects();

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 px-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800">My Projects</h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {projects.length} Projects
        </span>
      </div>

      {/* Projects Carousel */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative w-full h-[220px] bg-gray-200 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white text-xl font-bold drop-shadow-lg block truncate">
                    {project.name}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-900 text-xs font-medium rounded-full border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visit Project Button */}
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

        {/* Navigation Arrows - Only show if more projects than visible */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10 backdrop-blur-sm border border-gray-200"
              aria-label="Previous projects"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10 backdrop-blur-sm border border-gray-200"
              aria-label="Next projects"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                index === currentIndex ? 'bg-blue-900 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* No Projects Message */}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects to display yet.</p>
        </div>
      )}
    </div>
  );
}