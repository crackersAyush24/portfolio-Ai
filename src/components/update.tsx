import React, { useState, FC } from 'react';
import { Brain, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface UpdatesProps {
  darkMode: boolean;
}

const Updates: FC<UpdatesProps> = ({ darkMode }) => {
  const updates = [
    {
      title: "AI Professional Course (IBM-Coursera)",
      date: "16-08-2025 → Ongoing",
      icon: <Brain size={28} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      description: `Currently enhancing my AI & Machine Learning skills with a comprehensive professional course. Covers deep learning, NLP, and real-world AI applications.`,
    },
    {
      title: "Delivery Person Risk Management Project",
      date: "10-10-2025 → Ongoing",
      icon: <Zap size={28} className={darkMode ? 'text-orange-400' : 'text-orange-500'} />,
      description: `Working on a data-driven project to analyze and manage delivery personnel risks using predictive analytics and AI.`,
    },
  ];

  const sectionBg = darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-b from-gray-50 via-white to-gray-100';
  const cardBg = darkMode ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-100 text-gray-900';
  const titleColor = darkMode ? 'text-gray-100' : 'text-gray-900';
  const subTextColor = darkMode ? 'text-gray-300' : 'text-gray-600';
  const gradientGlow = darkMode ? 'from-blue-400 to-purple-600' : 'from-blue-400 to-purple-500';

  return (
    <section id="updates" className={`py-24 transition-colors duration-500 ${sectionBg}`}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-5xl font-extrabold mb-3 tracking-tight ${titleColor}`}>
            Ongoing & Recent Updates
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${subTextColor}`}>
            Here are the projects and learning journeys I’m currently exploring.
          </p>

          <motion.div
            className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r"
            style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`, '--tw-gradient-from': gradientGlow.split(' ')[0], '--tw-gradient-to': gradientGlow.split(' ')[1] }}
            animate={{ backgroundPosition: ['0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          />
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ReadMoreCard {...update} darkMode={darkMode} cardBg={cardBg} titleColor={titleColor} subTextColor={subTextColor} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ReadMoreCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  date: string;
  darkMode: boolean;
  cardBg: string;
  titleColor: string;
  subTextColor: string;
}

const ReadMoreCard: FC<ReadMoreCardProps> = ({ title, icon, description, date, darkMode, cardBg, titleColor, subTextColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const lines = description.split('. ').filter(Boolean);
  const firstLine = lines[0] + (lines.length > 1 ? '.' : '');
  const rest = lines.slice(1).join('. ');

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 250 }}
      className={`relative p-6 ${cardBg} border rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 group`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 blur-md transition duration-500" style={{ backgroundImage: `linear-gradient(to right, ${darkMode ? '#3b82f6, #8b5cf6' : '#60a5fa, #8b5cf6'})` }} />

      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl shadow-inner bg-blue-50 group-hover:shadow-blue-100 transition">
            {icon}
          </div>
          <h3 className={`text-xl font-semibold leading-tight ${titleColor}`}>{title}</h3>
        </div>
        <span className="text-sm text-gray-500 font-medium">{date}</span>
      </div>

      <p className={`leading-relaxed relative z-10 ${subTextColor}`}>
        {firstLine} {rest && !isOpen && <span>... </span>}
        <AnimatePresence>
          {isOpen && rest && (
            <motion.span
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {rest}
            </motion.span>
          )}
        </AnimatePresence>

        {rest && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-500 ml-2 font-medium hover:underline focus:outline-none"
          >
            {isOpen ? 'Read Less' : 'Read More'}
          </button>
        )}
      </p>
    </motion.div>
  );
};

export default Updates;
