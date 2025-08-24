import React, { useState, useEffect } from 'react';
import { User, Zap, Code, Brain, Mail, Briefcase, Award } from 'lucide-react';

const ScrollingCharacter = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const sections = [
    { id: 'home', icon: User, color: 'from-blue-500 to-cyan-500', name: 'Home' },
    { id: 'about', icon: Brain, color: 'from-purple-500 to-pink-500', name: 'About' },
    { id: 'skills', icon: Code, color: 'from-green-500 to-teal-500', name: 'Skills' },
    { id: 'projects', icon: Zap, color: 'from-orange-500 to-red-500', name: 'Projects' },
    { id: 'experience', icon: Briefcase, color: 'from-indigo-500 to-purple-500', name: 'Experience' },
    { id: 'contact', icon: Mail, color: 'from-pink-500 to-rose-500', name: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Determine current section
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );
      
      let newCurrentSection = 0;
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            if (newCurrentSection !== index) {
              setIsJumping(true);
              setTimeout(() => setIsJumping(false), 600);
            }
            newCurrentSection = index;
          }
        }
      });
      
      setCurrentSection(newCurrentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  const CurrentIcon = sections[currentSection]?.icon || User;
  const currentColor = sections[currentSection]?.color || 'from-blue-500 to-cyan-500';

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 pointer-events-none">
      {/* Character Container */}
      <div className="relative">
        {/* Progress Track */}
        <div className="absolute right-16 top-0 w-1 h-96 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* 3D Character */}
        <div 
          className={`relative w-20 h-20 transition-all duration-600 ease-out transform ${
            isJumping 
              ? 'scale-125 -translate-y-8 rotate-12' 
              : 'scale-100 translate-y-0 rotate-0'
          }`}
          style={{
            transform: `translateY(${(scrollProgress / 100) * 320 - 160}px) ${
              isJumping ? 'scale(1.25) translateY(-32px) rotate(12deg)' : 'scale(1)'
            }`,
            transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          }}
        >
          {/* Character Shadow */}
          <div 
            className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black/20 rounded-full blur-sm transition-all duration-600 ${
              isJumping ? 'scale-75 opacity-50' : 'scale-100 opacity-100'
            }`}
          />

          {/* Main Character Body */}
          <div 
            className={`w-20 h-20 rounded-full bg-gradient-to-br ${currentColor} shadow-2xl flex items-center justify-center transform transition-all duration-500 hover:scale-110 perspective-1000`}
            style={{
              boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.3)',
              transform: `rotateY(${Math.sin(Date.now() * 0.001) * 10}deg) rotateX(${Math.cos(Date.now() * 0.001) * 5}deg)`
            }}
          >
            <CurrentIcon 
              size={32} 
              className={`text-white transition-all duration-300 ${
                isJumping ? 'animate-bounce' : ''
              }`}
            />
          </div>

          {/* Floating Particles */}
          {isJumping && (
            <>
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
              <div className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping animation-delay-100" />
              <div className="absolute -bottom-1 -left-3 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-200" />
            </>
          )}

          {/* Character Eyes */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex gap-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>

          {/* Character Smile */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-white rounded-full" />
        </div>

        {/* Section Label */}
        <div className="absolute right-24 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
          <span className="text-sm font-semibold text-gray-800">
            {sections[currentSection]?.name}
          </span>
        </div>

        {/* Jump Trail Effect */}
        {isJumping && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-blue-400/30 rounded-full animate-ping" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-purple-400/30 rounded-full animate-ping animation-delay-100" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollingCharacter;