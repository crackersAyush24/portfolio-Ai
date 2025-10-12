import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { User, Zap, Code, Brain, Book, Mail, Briefcase, Bot } from 'lucide-react';

const ScrollingCharacter = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [robotState, setRobotState] = useState<'idle' | 'active' | 'clicked'>('idle');
  const [showWarning, setShowWarning] = useState(false);
  const [trailParticles, setTrailParticles] = useState<{ x: number, y: number, id: number }[]>([]);
  const [lightStreaks, setLightStreaks] = useState<{ x: number, y: number, id: number }[]>([]);
  const [sparks, setSparks] = useState<{ x: number, y: number, id: number }[]>([]);

  const sections = [
    { id: 'home', icon: User, colorFrom: '#00FFFF', colorTo: '#8A2BE2', name: 'Home' },
    { id: 'about', icon: Brain, colorFrom: '#FF69B4', colorTo: '#8A2BE2', name: 'About' },
    { id: 'skills', icon: Code, colorFrom: '#32CD32', colorTo: '#00FA9A', name: 'Skills' },
    { id: 'projects', icon: Zap, colorFrom: '#FFA500', colorTo: '#FF4500', name: 'Projects' },
    { id: 'experience', icon: Briefcase, colorFrom: '#7B68EE', colorTo: '#BA55D3', name: 'Experience' },
    { id: 'contact', icon: Mail, colorFrom: '#FF1493', colorTo: '#FF69B4', name: 'Contact' },
    { id: 'certificates', icon: Book, colorFrom: '#8B5CF6', colorTo: '#EC4899', name: 'Certificates' },
    { id: 'updates', icon: Zap, colorFrom: '#FFA500', colorTo: '#FF6347', name: 'Ongoing' }
  ];

  // Handle scroll progress and current section
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
  const { colorFrom, colorTo } = sections[currentSection] || { colorFrom: '#00FFFF', colorTo: '#8A2BE2' };

  // Trail particles for futuristic effect
  useEffect(() => {
    const particleId = Date.now();
    const yPosition = (scrollProgress / 100) * 320 - 160;
    setTrailParticles(prev => [...prev, { x: 0, y: yPosition, id: particleId }]);
    setLightStreaks(prev => [...prev, { x: 0, y: yPosition, id: particleId }]);
    const timer = setTimeout(() => {
      setTrailParticles(prev => prev.filter(p => p.id !== particleId));
      setLightStreaks(prev => prev.filter(p => p.id !== particleId));
    }, 1200);
    return () => clearTimeout(timer);
  }, [scrollProgress]);

  // Click handler for "irritated robot" effect + sparks
  const handleRobotClick = () => {
    setRobotState('clicked');
    setShowWarning(true);

    // Generate 8 sparks around robot
    const newSparks = Array.from({ length: 8 }).map(() => ({
      id: Date.now() + Math.random(),
      x: (Math.random() - 0.5) * 40,
      y: (Math.random() - 0.5) * 40
    }));
    setSparks(newSparks);

    setTimeout(() => {
      setShowWarning(false);
      setRobotState('idle');
      setSparks([]);
    }, 1500);
  };

  return (
    <div className="fixed right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-50 pointer-events-none">
      <div className="relative">

        {/* Scroll Progress Beam */}
        <div className="absolute right-16 md:right-20 top-0 w-1 h-80 bg-gray-900/20 rounded-full overflow-hidden">
          <motion.div
            className="w-full rounded-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 shadow-lg"
            style={{ height: `${scrollProgress}%` }}
            animate={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>

        {/* Robot */}
        <motion.div
          className="relative w-16 md:w-20 h-24 md:h-28 cursor-pointer pointer-events-auto"
          onClick={handleRobotClick}
          animate={{ y: (scrollProgress / 100) * 320 - 160 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20 }}
        >
          {/* Sparks */}
          {sparks.map(s => (
            <motion.div
              key={s.id}
              className="absolute w-2 h-2 bg-red-500 rounded-full"
              style={{ top: '50%', left: '50%' }}
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{ x: s.x, y: s.y, opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
          ))}

          {/* Trail Particles */}
          {trailParticles.map(p => (
            <motion.div
              key={p.id}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              initial={{ opacity: 0.6, scale: 0.7 }}
              animate={{ y: p.y, opacity: 0, scale: 0.3 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          ))}

          {/* Neon Light Streaks */}
          {lightStreaks.map(p => (
            <motion.div
              key={p.id}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{ boxShadow: `0 0 10px ${colorFrom}, 0 0 20px ${colorTo}` }}
              initial={{ opacity: 0.7, scale: 0.8 }}
              animate={{ y: p.y + Math.random() * 20 - 10, x: Math.random() * 20 - 10, opacity: 0, scale: 0.2 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            />
          ))}

          {/* Main Body */}
          <motion.div
            className="relative w-16 md:w-20 h-16 md:h-20 rounded-2xl shadow-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
              boxShadow: `0 0 30px ${colorFrom}, 0 0 60px ${colorTo}`
            }}
            animate={{
              scale: robotState === 'active' ? 1.15 : robotState === 'clicked' ? 1.2 : 1,
              rotate: robotState === 'active' ? 15 : robotState === 'clicked' ? 10 : 0
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Head */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 md:w-10 h-6 md:h-8 bg-gray-900 rounded-t-lg border border-white/20">
              {/* Antenna */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gray-700">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full animate-ping"></div>
              </div>
              {/* Eyes */}
              <div
                className={`absolute top-1 left-1 w-1 h-1 rounded-full animate-blink ${robotState === 'clicked' ? 'bg-red-500 animate-ping-fast' : 'bg-cyan-400'}`}
              ></div>
              <div
                className={`absolute top-1 right-1 w-1 h-1 rounded-full animate-blink animation-delay-200 ${robotState === 'clicked' ? 'bg-red-500 animate-ping-fast' : 'bg-cyan-400'}`}
              ></div>
            </div>

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <CurrentIcon size={26} className="text-white" />
            </div>

            {/* Arms & Legs */}
            <div className="absolute -left-1 top-4 w-2 h-6 bg-gray-700 rounded-full animate-pulse-slow"></div>
            <div className="absolute -right-1 top-4 w-2 h-6 bg-gray-700 rounded-full animate-pulse-slow animation-delay-300"></div>
            <div className="absolute -bottom-1 left-2 w-2 h-3 bg-gray-700 rounded-b-full animate-pulse-slow"></div>
            <div className="absolute -bottom-1 right-2 w-2 h-3 bg-gray-700 rounded-b-full animate-pulse-slow animation-delay-300"></div>

          

            {/* Energy Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-40"
              style={{ background: `radial-gradient(circle, ${colorFrom}, transparent 70%)` }}
              animate={{ scale: robotState === 'clicked' ? 1.3 : robotState === 'active' ? 1.25 : 1 }}
              transition={{ repeat: robotState === 'clicked' ? 0 : Infinity, duration: 2, repeatType: 'reverse' }}
            />
          </motion.div>

          {/* Section Label / Warning */}
          <AnimatePresence mode="wait">
            <motion.div
              key={showWarning ? 'warning' : sections[currentSection].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute right-24 top-1/2 transform -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl border border-cyan-400/40 flex items-center gap-2"
            >
              {showWarning ? (
                <span className="text-sm font-bold text-red-500 animate-pulse">⚠️ Don’t Disturb Me!</span>
              ) : (
                <>
                  <Bot size={16} className="text-cyan-400 animate-bounce-slow" />
                  <span className="text-sm font-bold text-white">{sections[currentSection]?.name}</span>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingCharacter;
