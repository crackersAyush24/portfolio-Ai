import React from 'react';
import { Brain, Code, Eye, Lightbulb } from 'lucide-react';
import MatrixRain from './MatrixRain';
import translations from '../i18n/translations';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  // Icons for each highlight block (kept local for visual style)
  const highlightIcons = [
    <Brain className="text-blue-500" size={32} />,
    <Code className="text-purple-500" size={32} />,
    <Eye className="text-teal-500" size={32} />,
    <Lightbulb className="text-orange-500" size={32} />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{translations.about?.[lang]?.heading}</h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${textSecondary}`}>
            {translations.about?.[lang]?.para}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 perspective-1000 relative z-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">{lang === 'de' ? 'Meine Reise' : 'My Journey'}</h3>
            <p className={`${textSecondary} text-lg leading-relaxed mb-4`}>
              {translations.about?.[lang]?.long?.journey1}
            </p>
            <p className={`${textSecondary} text-lg leading-relaxed mb-4`}>
              {translations.about?.[lang]?.long?.journey2}
            </p>
            <p className={`${textSecondary} text-lg leading-relaxed`}>
              {translations.about?.[lang]?.long?.journey3}
            </p>
          </div>

          <div className={`${cardBg} p-8 rounded-2xl shadow-2xl border transform hover:rotateY-12 hover:scale-105 transition-all duration-500`}>
            <h3 className="text-2xl font-bold mb-6">{translations.about?.[lang]?.quickFacts?.heading ?? (lang === 'de' ? 'Kurze Fakten' : 'Quick Facts')}</h3>
            <ul className="space-y-3">
              {(translations.about?.[lang]?.quickFacts?.items || []).map((item, idx) => (
                <li key={idx} className={`flex items-center ${textSecondary}`}>
                  <span className={`w-2 h-2 rounded-full mr-3`} style={{ background: ['#3B82F6', '#8B5CF6', '#10B981', '#14B8A6', '#FB923C'][idx % 5] }}></span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {(translations.about?.[lang]?.highlights || []).map((hl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ scale: 1.03 }}
              className={`text-center p-6 rounded-xl ${highlightBg} backdrop-blur-sm hover:bg-opacity-100 hover:shadow-lg transition-all duration-300 transform perspective-1000`}
            >
              <div className="flex justify-center mb-4">
                {highlightIcons[index]}
              </div>
              <h3 className="text-xl font-bold mb-3">{hl.title}</h3>
              <p className={`${textSecondary} leading-relaxed`}>{hl.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
