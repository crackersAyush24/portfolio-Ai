import React from 'react';
import { ExternalLink, Github, Brain, Eye, MessageCircle, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Resume Ranking & Job Matching App",
      description: "Built comprehensive HR-tech solution with resume parsing, job matching, candidate ranking, and interview scheduling. Extended to React Native mobile version with database integration.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Streamlit", "React Native", "Machine Learning", "NLP"],
      icon: <Brain className="text-blue-600" size={24} />,
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Foresight Realty - AI Real Estate Framework",
      description: "Research project analyzing properties with AI integration. Features location analytics, price forecasting, and investment scoring for real estate investment decisions.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Machine Learning", "Analytics", "Forecasting", "Research"],
      icon: <TrendingUp className="text-purple-600" size={24} />,
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Social Media Analytics Toolkit",
      description: "Built prototypes with Google Trends, Trendsmap, and Tweepsmap integration. Focused on location analytics, search engine analytics, and SEO analysis for business insights.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Analytics APIs", "SEO Tools", "Data Visualization", "Research"],
      icon: <Eye className="text-teal-600" size={24} />,
      github: "#",
      demo: "#",
      featured: false
    },
   
  ];

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Floating AI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full neural-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full neural-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-teal-500 rounded-full neural-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-orange-500 rounded-full neural-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-10">
            A showcase of AI solutions that have made real-world impact, 
            from healthcare to autonomous systems.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center relative z-10 ${
              project.featured ? 'p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl' : ''
            }`}>
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <div className="relative group overflow-hidden rounded-xl shadow-lg transform hover:rotateY-12 hover:scale-105 transition-all duration-500 perspective-1000 hologram-effect">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300 circuit-glow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                    <div className="absolute bottom-4 left-4 text-white font-bold">AI Powered</div>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <div className="flex items-center mb-4">
                  {project.icon}
                  {project.featured && (
                    <span className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;