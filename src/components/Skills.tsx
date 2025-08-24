import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Classical ML (Regression, Classification)", level: 90 },
        { name: "Deep Learning (CNNs, RNNs, LSTMs)", level: 70 },
        { name: "Natural Language Processing", level: 75 },
        { name: "Predictive Analytics", level: 95 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 60 },
        { name: "C++", level: 50 },
  
      ]
    },
    {
      title: "Data Analysis & Visualization",
      skills: [
        { name: "pandas & NumPy", level: 95 },
        { name: "Excel & Power BI", level: 90 },
        { name: "Scikit-learn", level: 90 },
        { name: "TensorFlow/PyTorch", level: 80 }
      ]
    },
    {
      title: "Development & Deployment",
      skills: [
        { name: "Streamlit", level: 85 },
       
        { name: "Database Integration", level: 80 },
        { name: "Cloud Basics", level: 70 }
      ]
    }
  ];

  const technologies = [
    "Python", "Java", "C++", "Scikit-learn", "TensorFlow", "PyTorch",
    "Pandas", "NumPy", "Excel", "Power BI", "Streamlit", "React",
    "Machine Learning", "Deep Learning", "NLP", "Git"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* AI Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="#3b82f6" strokeWidth="1"/>
              <circle cx="10" cy="10" r="3" fill="#3b82f6"/>
              <circle cx="90" cy="10" r="3" fill="#3b82f6"/>
              <circle cx="90" cy="90" r="3" fill="#3b82f6"/>
              <circle cx="10" cy="90" r="3" fill="#3b82f6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-10">
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning in the rapidly evolving AI landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg transform hover:rotateY-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl perspective-1000 hologram-effect relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 data-flow"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 perspective-1000 hologram-effect relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 px-4 py-2 rounded-full font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 hover:rotate-2 circuit-glow border border-blue-200/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;