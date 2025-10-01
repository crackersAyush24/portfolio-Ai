import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { User, Zap, Code, Brain, Mail, Briefcase, Bot } from 'lucide-react';

const ScrollingCharacter = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [robotState, setRobotState] = useState('idle');

  const sections = [
    { id: 'home', icon: User, colorFrom: '#3B82F6', colorTo: '#06B6D4', name: 'Home' },
    { id: 'about', icon: Brain, colorFrom: '#8B5CF6', colorTo: '#EC4899', name: 'About' },
    { id: 'skills', icon: Code, colorFrom: '#22C55E', colorTo: '#14B8A6', name: 'Skills' },
    { id: 'projects', icon: Zap, colorFrom: '#F97316', colorTo: '#EF4444', name: 'Projects' },
    { id: 'experience', icon: Briefcase, colorFrom: '#6366F1', colorTo: '#A78BFA', name: 'Experience' },
    { id: 'contact', icon: Mail, colorFrom: '#EC4899', colorTo: '#F43F5E', name: 'Contact' },
    { id: 'updates', icon: Zap, colorFrom: '#F97316', colorTo: '#EF4444', name: 'Ongoing' }

  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = Math.min((window.scrollY / totalHeight) * 100, 100);
          setScrollProgress(progress);

          const viewportCenter = window.innerHeight / 2;
          let newCurrentSection = 0;

          for (let i = 0; i < sections.length; i++) {
            const element = document.getElementById(sections[i].id);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
                if (newCurrentSection !== i) {
                  setRobotState('active');
                  setTimeout(() => setRobotState('idle'), 800);
                }
                newCurrentSection = i;
                break;
              }
            }
          }

          setCurrentSection(newCurrentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CurrentIcon = sections[currentSection]?.icon || User;
  const { colorFrom, colorTo } = sections[currentSection] || { colorFrom: '#3B82F6', colorTo: '#06B6D4' };
  const particles = Array.from({ length: 8 });

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      {/* Robot & particles in a pointer-events-none wrapper so they don't block UI */}
      <div className="pointer-events-none relative">
        {/* Scroll Progress */}
        <div className="absolute right-20 top-0 w-1 h-80 bg-gray-200/50 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div
            className="w-full rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500"
            style={{ height: `${scrollProgress}%` }}
            animate={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>

        {/* Robot */}
        <motion.div
          className="relative w-16 h-20"
          animate={{ y: (scrollProgress / 100) * 280 - 140 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <motion.div
            className="relative w-16 h-16 rounded-xl shadow-xl"
            style={{ background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})` }}
            animate={{
              scale: robotState === 'active' ? 1.1 : 1,
              rotate: robotState === 'active' ? 12 : 0
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Head */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gray-800 rounded-t-lg">
              {/* Antenna */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gray-600">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
              </div>
              {/* Eyes */}
              <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-400 rounded-full animate-blink"></div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-blink animation-delay-200"></div>
            </div>

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <CurrentIcon size={24} className="text-white" />
            </div>

            {/* Arms & Legs */}
            <div className="absolute -left-1 top-4 w-2 h-6 bg-gray-700 rounded-full"></div>
            <div className="absolute -right-1 top-4 w-2 h-6 bg-gray-700 rounded-full"></div>
            <div className="absolute -bottom-1 left-2 w-1.5 h-3 bg-gray-700 rounded-b-full"></div>
            <div className="absolute -bottom-1 right-2 w-1.5 h-3 bg-gray-700 rounded-b-full"></div>

            {/* Chest Panel */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-gray-800/30 rounded border border-white/20">
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-blue-400 rounded-full animate-pulse animation-delay-200"></div>
              <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-white/40 rounded"></div>
            </div>

            {/* Energy Glow */}
            <div className={`absolute inset-0 rounded-xl opacity-30 animate-pulse`} style={{ background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})` }}></div>
          </motion.div>

          {/* Floating Data Particles */}
          <div className="absolute inset-0">
            {particles.map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-fall opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Robot Shadow */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-black/20 rounded-full blur-sm"></div>

          {/* Section Label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={sections[currentSection].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute right-24 top-1/2 transform -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl border border-cyan-400/30 flex items-center gap-2 pointer-events-auto"
            >
              <Bot size={14} className="text-cyan-400" />
              <span className="text-sm font-bold text-white">{sections[currentSection]?.name}</span>
              <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>
          </AnimatePresence>

          {/* Data Stream Effect */}
          {robotState === 'active' && (
            <>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-cyan-400/40 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-purple-400/40 rounded-full animate-ping animation-delay-200"></div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingCharacter;
