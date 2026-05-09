import { useState } from 'react';
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
import { LanguageProvider } from './contexts/LanguageContext';
import Updates from './components/update';
import Certificates from './components/Certificates';
import AppFooter from './components/AppFooter';
import WelcomeOverlay from './components/WelcomeOverlay';
// footer translations will be used via useLanguage inlined below

function App() {
  const [darkMode, setDarkMode] = useState(false); // ✅ global dark mode state

  return (
    <LanguageProvider>
      <div className={`${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-500`}>
  <WelcomeOverlay />
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
      <AppFooter />
      </div>
    </LanguageProvider>
  );
}

export default App;
