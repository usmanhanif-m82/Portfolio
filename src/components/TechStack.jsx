import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
  ];

  return (
    <div className="p-6 pt-20 max-w-6xl mx-auto">
      <div className="mb-8 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">My Tech Stack</h2>
       
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 group flex flex-col items-center"
          >
            <div className="w-12 h-12 mb-2 bg-gray-50 rounded-md flex items-center justify-center p-1">
              <img 
                src={tech.icon} 
                alt={tech.name}
                className="w-full h-full object-contain"
                loading="lazy"
                onError={(e) => {
                  // Special handling for Tailwind CSS if needed
                  if (tech.name === "Tailwind CSS") {
                    e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg";
                  } else {
                    e.target.src = "https://via.placeholder.com/48";
                  }
                }}
              />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default TechStack;