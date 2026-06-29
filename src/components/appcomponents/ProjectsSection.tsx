export default function ProjectsSection() {
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

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 px-4">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Projects</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative w-full h-[240px] bg-gray-200 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Overlay with project name */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white text-xl font-bold drop-shadow-lg">
                  {project.name}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Project Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
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
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all hover:shadow-lg hover:scale-105 active:scale-95"
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
    </div>
  );
}