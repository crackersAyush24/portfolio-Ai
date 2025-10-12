import React from 'react';
import { Brain, Code, Database, Lightbulb } from 'lucide-react';
import MatrixRain from './MatrixRain';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: <Brain className="text-blue-500" size={32} />,
      title: "AI Research",
      description: "A years of developing neural networks and machine learning algorithms"
    },
    {
      icon: <Code className="text-purple-500" size={32} />,
      title: "Full-Stack Development",
      description: "Building scalable AI applications from concept to deployment"
    },
    {
      icon: <Database className="text-teal-500" size={32} />,
      title: "Data Science",
      description: "Expert in data analysis, visualization, and predictive modeling"
    },
    {
      icon: <Lightbulb className="text-orange-500" size={32} />,
      title: "Innovation",
      description: "Passionate about solving complex problems with creative AI solutions"
    }
  ];

  const sectionBg = darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900';
  const cardBg = darkMode ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-200 text-gray-900';
  const highlightBg = darkMode ? 'bg-gray-800/80 border-gray-700/50 text-gray-100' : 'bg-gray-50/80 border-gray-200/50 text-gray-900';
  const textSecondary = darkMode ? 'text-gray-300' : 'text-gray-600';

  return (
    <section id="about" className={`py-20 relative overflow-hidden ${sectionBg}`}>
      <MatrixRain />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${textSecondary}`}>
            I'm a passionate AI engineer with a mission to bridge the gap between 
            theoretical AI research and practical, real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 perspective-1000 relative z-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className={`${textSecondary} text-lg leading-relaxed mb-4`}>
              With a B.E. in Computer Engineering from University of Mumbai and a strong CGPA of 8.67, 
              I've built expertise in data analysis, machine learning, and AI applications. My journey 
              began with academic excellence in mathematics and algorithms, evolving into practical 
              AI solutions for HR-tech and business intelligence.
            </p>
            <p className={`${textSecondary} text-lg leading-relaxed mb-4`}>
              At Jobclassify, I've improved job matching accuracy by using machine learning models 
              and automated candidate screening processes, saving 200+ hours monthly. I believe in 
              leveraging AI to streamline business processes and create meaningful impact.
            </p>
            <p className={`${textSecondary} text-lg leading-relaxed`}>
              My goal is to pursue M.Sc. in AI/Data Science in Germany while building end-to-end 
              AI systems. I'm passionate about AI entrepreneurship and integrating intelligent 
              solutions into traditional business models.
            </p>
          </div>

          <div className={`${cardBg} p-8 rounded-2xl shadow-2xl border transform hover:rotateY-12 hover:scale-105 transition-all duration-500`}>
            <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
            <ul className="space-y-3">
              <li className={`flex items-center ${textSecondary}`}>
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Located in Mumbai, India
              </li>
              <li className={`flex items-center ${textSecondary}`}>
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                2+ years in Data Analysis & AI/ML
              </li>
              <li className={`flex items-center ${textSecondary}`}>
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                CGPA: 8.67 in Computer Engineering
              </li>
              <li className={`flex items-center ${textSecondary}`}>
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Improvement in ML model accuracy
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {highlights.map((highlight, index) => (
            <div key={index} className={`text-center p-6 rounded-xl ${highlightBg} backdrop-blur-sm hover:bg-opacity-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 perspective-1000`}>
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
              <p className={`${textSecondary} leading-relaxed`}>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
