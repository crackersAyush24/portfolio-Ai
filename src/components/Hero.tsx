import React, { FC, useRef, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../i18n/translations';
import GlitchText from './GlitchText';
import NeuralNetworkAnimation from './NeuralNetworkAnimation';

interface HeroProps {
  resumeFile?: string;
  darkMode: boolean;
}

const Hero: FC<HeroProps> = ({ resumeFile = 'Ayush_chaubey_job1-6.pdf', darkMode }) => {
  const resumeUrl = import.meta.env.BASE_URL + resumeFile + `?v=${Date.now()}`;

  const handleOpenPdf = () => {
    const newWindow = window.open(resumeUrl, '_blank');
    if (newWindow) newWindow.focus();
  };

  const { lang } = useLanguage();


  const btnRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !btnRef.current) return;

    const btn = btnRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const threshold = 160;
      if (dist < threshold && dist > 0) {
        const force = (threshold - dist) / threshold; // 0..1
        const tx = (dx / dist) * force * 18;
        const ty = (dy / dist) * force * 10;
        btn.style.transform = `translate(${tx}px, ${ty}px) scale(${1 + force * 0.06})`;
      } else {
        btn.style.transform = '';
      }
    };

    const handleLeave = () => {
      if (btn) btn.style.transform = '';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleLeave);
    };
  }, [darkMode]);

  const t: Record<string, Record<string, string>> = {
    en: {
      heroLine1: 'Transforming data into actionable insights through machine learning and AI-powered solutions.',
  heroLine2: translations.about?.[lang]?.para ?? 'Recently accepted a role focused on image denoising and semantic segmentation for chemical-peeled microscopy images — building denoising pipelines, U-Net segmentation models, and production-ready APIs. Based in Dresden, Germany and pursuing an M.Sc. in Computer Science at TU Dresden (2026).',
      viewResume: 'View / Download Resume',
      contact: 'Get In Touch'
    },
    de: {
      heroLine1: 'Ich verwandele Daten in umsetzbare Erkenntnisse mit Machine Learning und KI-Lösungen.',
      heroLine2: 'Kürzlich eine Rolle angenommen, die sich auf Bildentrauschung und semantische Segmentierung von chemisch präparierten Mikroskopiebildern konzentriert — Entwicklung von Denoising-Pipelines, U-Net-Segmentierungsmodellen und produktionsreifen APIs. In Dresden, Deutschland ansässig und Studiere M.Sc. Informatik an der TU Dresden (2026).',
      viewResume: 'Lebenslauf ansehen / herunterladen',
      contact: 'Kontakt'
    }
  };

  const bgClass = darkMode
    ? 'bg-gray-900 text-gray-100'
    : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900';

  const buttonBg = darkMode
    ? 'bg-gray-800 text-gray-100 border border-gray-700 hover:bg-gray-700'
    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white';

  const textColor = darkMode ? 'text-gray-100' : 'text-gray-900';
  const subTextColor = darkMode ? 'text-gray-300' : 'text-gray-600';

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 ${bgClass}`}
    >
      <NeuralNetworkAnimation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center relative z-10">

          {/* Logo */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white text-4xl font-bold transform hover:rotateY-180 hover:scale-110 transition-all duration-700 shadow-2xl hover:shadow-3xl perspective-1000 relative">
              AC
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 animate-ping opacity-20"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Heading */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${textColor}`}>
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              <GlitchText text="Data Analyst & AI Engineer" />
            </span>
          </h1>

          {/* Description */}
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${subTextColor}`}>
            {t[lang].heroLine1}
            {" "}
            {t[lang].heroLine2}
          </p>

          {/* Buttons */}
          <div ref={containerRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Open PDF - magnetic button */}
            <div className="relative">
              <button
                ref={btnRef}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const parent = containerRef.current ?? document.body;
                  const parentRect = parent.getBoundingClientRect();
                  const clientX = e.clientX;
                  const clientY = e.clientY;
                  const x = clientX - parentRect.left;
                  const y = clientY - parentRect.top;

                  for (let i = 0; i < 9; i++) {
                    const p = document.createElement('span');
                    const size = Math.random() * 6 + 4;
                    p.style.position = 'absolute';
                    p.style.left = `${x - size / 2}px`;
                    p.style.top = `${y - size / 2}px`;
                    p.style.width = `${size}px`;
                    p.style.height = `${size}px`;
                    p.style.borderRadius = '50%';
                    p.style.background = darkMode ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.98)';
                    p.style.pointerEvents = 'none';
                    p.style.transform = 'translate(0,0) scale(1)';
                    p.style.transition = `transform 700ms cubic-bezier(.2,.8,.2,1), opacity 700ms ease-out`;
                    parent.appendChild(p);
                    const angle = Math.random() * Math.PI * 2;
                    const dist = 36 + Math.random() * 40;
                    requestAnimationFrame(() => {
                      p.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px) scale(0.4)`;
                      p.style.opacity = '0';
                    });
                    setTimeout(() => p.remove(), 800);
                  }

                  handleOpenPdf();
                }}
                className={`flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 perspective-1000 ${buttonBg}`}
              >
                <Download size={20} />
                {t[lang].viewResume}
              </button>
            </div>

            {/* Scroll to Contact */}
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className={`border-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:rotateX-3 perspective-1000 ${
                darkMode
                  ? 'border-gray-700 text-gray-100 hover:border-gray-400 hover:text-gray-200'
                  : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              {t[lang].contact}
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/crackersAyush24?tab=repositories"
              className={`transform hover:scale-110 hover:rotateY-12 hover:-translate-y-1 transition-all duration-300 ${darkMode ? 'text-gray-100 hover:text-gray-200' : 'text-gray-600 hover:text-blue-600'}`}
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-chaubey-90751422b"
              className={`transform hover:scale-110 hover:rotateY-12 hover:-translate-y-1 transition-all duration-300 ${darkMode ? 'text-gray-100 hover:text-gray-200' : 'text-gray-600 hover:text-blue-600'}`}
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chaubeyayush04@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Send Email"
              className={`transform hover:scale-110 hover:rotateY-12 hover:-translate-y-1 transition-all duration-300 ${darkMode ? 'text-gray-100 hover:text-gray-200' : 'text-gray-600 hover:text-blue-600'}`}
            >
              <Mail size={28} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
