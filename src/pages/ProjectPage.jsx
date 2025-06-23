import React from 'react';
import project1 from '../Assets/project1.png';
import project2 from '../Assets/project2.png';
import project3 from '../Assets/project3.png';
import project4 from '../Assets/project4.png';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      title: "WebFix Solution",
      description: "Professional website development services",
      image: project1,
      link: "webfix.com"
    },
    {
      id: 2,
      title: "Madisaver",
      description: "",
      image: project2,
      link: "https://starlit-heliotrope-d45da9.netlify.app/"
    },
    {
      id: 3,
      title: "Ecommerce Platform",
      description: "Responsive website for Electric Shop",
      image: project3,
      link: "https://incandescent-cucurucho-7d3689.netlify.app/"
    },
    {
      id: 4,
      title: "Tour Website",
      description: "Responsive Tour Website",
      image: project4,
      link: "https://starlit-heliotrope-d45da9.netlify.app/"
    }
  ];

  return (
    <div className='p-6'>
      <h1 className='font-[500] text-[25px] leading-[48px] py-5'>Projects</h1>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <a href={project.link} target='_blank' rel='noopener noreferrer' className="block h-full">
                {/* Image Container */}
                <div className="relative h-64 bg-gray-50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="max-h-full max-w-full object-scale-down"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-gray-200 mt-1">{project.description}</p>
                    </div>
                  </div>
                  {/* View Project Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center shadow-md">
                      <FaExternalLinkAlt className="text-gray-700 mr-2" />
                      <span className="font-medium text-gray-700">View Project</span>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Info (visible on mobile) */}
                <div className="p-5 md:hidden">
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mt-1">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage;