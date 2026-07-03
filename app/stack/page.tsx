"use client";
import { useState } from 'react';
import { 
  FaCode, FaServer, FaLink, FaShieldAlt, FaChartBar, 
  FaArrowRight 
} from 'react-icons/fa';

export default function StackPage() {
  const [activeTab, setActiveTab] = useState('All');

  const stacks = [
    {
      category: 'Frontend',
      icon: <FaCode className="text-2xl" />,
      description: 'Building fast and engaging user experiences using React.js and Next.js for modern web applications.',
      tech: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
      category: 'Backend',
      icon: <FaServer className="text-2xl" />,
      description: 'Creating robust backend systems with Laravel and Node.js, focused on performance, scalability, and security.',
      tech: ['Laravel', 'Node.js', 'Express', 'PostgreSQL'],
    },
    {
      category: 'Blockchain',
      icon: <FaLink className="text-2xl" />,
      description: 'Implementing blockchain-based solutions for transparent, decentralized, and trustless systems.',
      tech: ['Ethereum', 'Solidity', 'Web3.js', 'Smart Contracts'],
    },
    {
      category: 'Cyber Security',
      icon: <FaShieldAlt className="text-2xl" />,
      description: 'Offering cybersecurity services to protect your applications, infrastructure, and data from modern threats.',
      tech: ['Penetration Testing', 'OWASP', 'Encryption', 'Zero Trust'],
    },
    {
      category: 'Data Analysis',
      icon: <FaChartBar className="text-2xl" />,
      description: 'Turning raw data into actionable insights to help you make smarter decisions and optimize performance.',
      tech: ['Python', 'Pandas', 'SQL', 'Tableau'],
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[2px] w-8 bg-blue-900"></span>
            <span className="text-blue-900 font-semibold tracking-widest text-xs uppercase">Our Capabilities</span>
            <span className="h-[2px] w-8 bg-blue-900"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Technology Stack
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering modern digital solutions with a strong foundation in frontend, backend, security, blockchain, and data.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button 
            onClick={() => setActiveTab('All')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === 'All' 
                ? 'bg-blue-900 text-white shadow-md' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All
          </button>
          {stacks.map((stack) => (
            <button 
              key={stack.category}
              onClick={() => setActiveTab(stack.category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === stack.category 
                  ? 'bg-blue-900 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {stack.category}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks
            .filter((stack) => activeTab === 'All' || activeTab === stack.category)
            .map((stack, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Blue Gradient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>

              {/* Icon Circle - Blue Themed */}
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 mb-4">
                {stack.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                {stack.category}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {stack.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {stack.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full group-hover:bg-blue-100 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button className="flex items-center gap-2 text-sm font-semibold text-slate-700 group-hover:text-blue-900 transition-colors">
                Learn More
                <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}