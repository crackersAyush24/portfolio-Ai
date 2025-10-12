import React, { useState } from 'react';
import { Brain, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Updates = () => {
  const updates = [
    {
      title: "AI Professional Course (IBM-Coursera)",
      date: "16-08-2025 → Ongoing",
      icon: <Brain className="text-blue-600" size={28} />,
      description: `Currently enhancing my AI & Machine Learning skills with a comprehensive professional course. Covers deep learning, NLP, and real-world AI applications.`,
    },
    {
      title: "Delivery Person Risk Management Project",
      date: "10-10-2025 → Ongoing",
      icon: <Zap className="text-orange-500" size={28} />,
      description: `Working on a data-driven project to analyze and manage delivery personnel risks using predictive analytics and AI.`,
    },
  ];

  return (
    <section id="updates" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Ongoing & Recent Updates
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are the projects and learning journeys I’m currently exploring.
          </p>

          {/* Animated gradient line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
            animate={{ backgroundPosition: ['0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            style={{ backgroundSize: '200% auto' }}
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
              <ReadMoreCard {...update} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReadMoreCard = ({
  title,
  icon,
  description,
  date,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  date: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const lines = description.split('. ').filter(Boolean);
  const firstLine = lines[0] + (lines.length > 1 ? '.' : '');
  const rest = lines.slice(1).join('. ');

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 250 }}
      className="relative p-6 bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Gradient border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 blur-md transition duration-500" />

      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-50 rounded-xl shadow-inner group-hover:shadow-blue-100 transition">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            {title}
          </h3>
        </div>
        <span className="text-sm text-gray-500 font-medium">{date}</span>
      </div>

      <p className="text-gray-700 leading-relaxed relative z-10">
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
            className="text-blue-600 ml-2 font-medium hover:underline focus:outline-none"
          >
            {isOpen ? 'Read Less' : 'Read More'}
          </button>
        )}
      </p>
    </motion.div>
  );
};

export default Updates;
