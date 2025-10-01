import React, { useState } from 'react';
import { Brain, Zap } from 'lucide-react';

const Updates = () => {
  const updates = [
    {
      title: "AI Professional Course(IBM-Coursera)",
      date: "16-08-2025 to Ongoing",
      icon: <Brain className="text-blue-600" size={24} />,
      description: `Currently enhancing my AI & Machine Learning skills with a comprehensive professional course. Covers deep learning, NLP, and real-world AI applications.`
    },
    {
      title: "Delivery Person Risk Management Project",
      date: "10-10-2025 to Ongoing",
      icon: <Zap className="text-orange-500" size={24} />,
      description: `Working on a data-driven project to analyze and manage delivery personnel risks using predictive analytics and AI.`
    }
  ];

  return (
    <section id="updates" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ongoing / Updates</h2>
          <p className="text-gray-600 text-lg">Latest projects and courses I am currently working on.</p>
        </div>

        <div className="space-y-8">
          {updates.map((update, index) => (
            <ReadMoreCard
              key={index}
              title={update.title}
              icon={update.icon}
              description={update.description}
              date={update.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReadMoreCard = ({ title, icon, description, date }: { title: string; icon: React.ReactNode; description: string; date: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Split description into first line and rest
  const lines = description.split('. ').filter(Boolean);
  const firstLine = lines[0] + (lines.length > 1 ? '.' : '');
  const rest = lines.slice(1).join('. ');

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          {icon}
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <span className="text-gray-400 font-medium text-sm">{date}</span>
      </div>
      <p className="text-gray-700">
        {firstLine} {rest && !isOpen && <span>... </span>}
        {isOpen && rest && <span>{rest}</span>}
        {rest && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-500 ml-2 font-medium hover:underline"
          >
            {isOpen ? "Read Less" : "Read More"}
          </button>
        )}
      </p>
    </div>
  );
};

export default Updates;
