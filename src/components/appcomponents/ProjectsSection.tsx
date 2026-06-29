// app/components/ProjectsSection.tsx
export default function ProjectsSection() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-16">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project cards will go here */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-semibold text-gray-800">Project 1</h4>
          <p className="text-gray-600 mt-2">Project description goes here</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-semibold text-gray-800">Project 2</h4>
          <p className="text-gray-600 mt-2">Project description goes here</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-semibold text-gray-800">Project 3</h4>
          <p className="text-gray-600 mt-2">Project description goes here</p>
        </div>
      </div>
    </div>
  );
}