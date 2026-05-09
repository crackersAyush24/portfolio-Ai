import React from 'react';
import { Brain, Code, Eye, Lightbulb } from 'lucide-react';
import MatrixRain from './MatrixRain';
import translations from '../i18n/translations';
import { useLanguage } from '../contexts/LanguageContext';

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
      icon: <Eye className="text-teal-500" size={32} />,
      title: "Image Processing",
      description: "Practical expertise in image denoising, segmentation, and microscopy image analysis"
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

  const { lang } = useLanguage();

  return (
    <section id="about" className={`py-20 relative overflow-hidden ${sectionBg}`}>
      <MatrixRain />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{translations.about[lang].heading}</h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${textSecondary}`}>
            {translations.about[lang].para}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 perspective-1000 relative z-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">{lang === 'de' ? 'Meine Reise' : 'My Journey'}</h3>
            <p className={`${textSecondary} text-lg leading-relaxed mb-4`}>
              {translations.about[lang].long.journey1}
            </p>
            <p className={`${textSecondary} text-lg leading-relaxed mb-4`}>
              {translations.about[lang].long.journey2}
            </p>
            <p className={`${textSecondary} text-lg leading-relaxed`}>
              {translations.about[lang].long.journey3}
            </p>
          </div>

          <div className={`${cardBg} p-8 rounded-2xl shadow-2xl border transform hover:rotateY-12 hover:scale-105 transition-all duration-500`}>
            <h3 className="text-2xl font-bold mb-6">{lang === 'de' ? 'Kurze Fakten' : 'Quick Facts'}</h3>
            <ul className="space-y-3">
              <li className={`flex items-center ${textSecondary}`}>
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {lang === 'de' ? 'Ansässig in Dresden, Deutschland' : 'Located in Dresden, Germany'}
              </li>
              <li className={`flex items-center ${textSecondary}`}>
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                2+ years in Data Analysis & AI/ML
              </li>
              <li className={`flex items-center ${textSecondary}`}>
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                {lang === 'de' ? 'Studium M.Sc. Informatik, TU Dresden (2025)' : 'Studying M.Sc. Computer Science, TU Dresden (2025)'}
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
