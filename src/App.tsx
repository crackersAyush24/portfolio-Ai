import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollingCharacter from './components/ScrollingCharacter';
import AIParticleBackground from './components/AIParticleBackground';
import AyushChatbot from './components/AyushChatbot';
import Updates from './components/update';
import Certificates from './components/Certificates';

function App() {
  const [darkMode, setDarkMode] = useState(false); // ✅ global dark mode state

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-500`}>
      {/* Background and floating characters */}
      <AIParticleBackground darkMode={darkMode} /> {/* Pass darkMode prop */}
      <ScrollingCharacter />

      {/* Header with toggle */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main content */}
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Certificates darkMode={darkMode} /> {/* darkMode prop passed */}
        <Updates darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Floating Chatbot */}
      <AyushChatbot />

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-900 text-white'} py-8 transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 dark:text-gray-400">
            © 2024 Ayush Chaubey. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-gray-400 dark:text-gray-500 mt-2">
            Crafted with ❤️ for data-driven innovation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
