import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollingCharacter from './components/ScrollingCharacter';
import AIParticleBackground from './components/AIParticleBackground';
import AyushChatbot from './components/AyushChatbot'; // 👈 Import your chatbot

function App() {
  return (
    <div className="min-h-screen">
      <AIParticleBackground />
      <Header />
      <ScrollingCharacter />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Floating Chatbot */}
      <AyushChatbot />  {/* 👈 Add chatbot here */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">
              © 2024 Ayush Chaubey. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-400 mt-2">
              Crafted with ❤️ for data-driven innovation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
