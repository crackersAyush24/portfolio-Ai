import React from 'react';
import { Brain, Code, Database, Lightbulb } from 'lucide-react';
import MatrixRain from './MatrixRain';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="text-blue-600" size={32} />,
      title: "AI Research",
      description: "5+ years developing neural networks and machine learning algorithms"
    },
    {
      icon: <Code className="text-purple-600" size={32} />,
      title: "Full-Stack Development",
      description: "Building scalable AI applications from concept to deployment"
    },
    {
      icon: <Database className="text-teal-600" size={32} />,
      title: "Data Science",
      description: "Expert in data analysis, visualization, and predictive modeling"
    },
    {
      icon: <Lightbulb className="text-orange-600" size={32} />,
      title: "Innovation",
      description: "Passionate about solving complex problems with creative AI solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <MatrixRain />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed relative z-10">
            I'm a passionate AI engineer with a mission to bridge the gap between 
            theoretical AI research and practical, real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 perspective-1000">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              With a B.E. in Computer Engineering from University of Mumbai and a strong CGPA of 8.67, 
              I've built expertise in data analysis, machine learning, and AI applications. My journey 
              began with academic excellence in mathematics and algorithms, evolving into practical 
              AI solutions for HR-tech and business intelligence.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              At Jobclassify, I've improved job matching accuracy by 30% using machine learning models 
              and automated candidate screening processes, saving 200+ hours monthly. I believe in 
              leveraging AI to streamline business processes and create meaningful impact.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              My goal is to pursue M.Sc. in AI/Data Science in Germany while building end-to-end 
              AI systems. I'm passionate about AI entrepreneurship and integrating intelligent 
              solutions into traditional business models.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl transform hover:rotateY-12 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl relative z-10 border border-blue-200/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Located in Mumbai, India
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                2+ years in Data Analysis & AI/ML
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                CGPA: 8.67 in Computer Engineering
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                30% improvement in ML model accuracy
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50/80 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:rotateX-5 hover:scale-105 perspective-1000 relative z-10 border border-gray-200/50">
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;