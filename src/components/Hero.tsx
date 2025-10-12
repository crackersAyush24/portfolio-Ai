import React, { FC } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import GlitchText from './GlitchText';
import NeuralNetworkAnimation from './NeuralNetworkAnimation';

interface HeroProps {
  resumeFile?: string;
}

const Hero: FC<HeroProps> = ({
  resumeFile = 'Ayush_chaubey_job1.pdf',
}) => {
  // Append timestamp to force cache busting
  const resumeUrl = import.meta.env.BASE_URL + resumeFile + `?v=${Date.now()}`;

  const handleOpenPdf = () => {
    const newWindow = window.open(resumeUrl, '_blank');
    if (newWindow) newWindow.focus();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      <NeuralNetworkAnimation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">

          {/* Logo */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white text-4xl font-bold transform hover:rotateY-180 hover:scale-110 transition-all duration-700 shadow-2xl hover:shadow-3xl perspective-1000 relative">
              AC
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 animate-ping opacity-20"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              <GlitchText text="Data Analyst & AI Engineer" />
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed relative z-10">
            Transforming data into actionable insights through machine learning, predictive analytics,
            and AI-powered solutions. Specialized in job matching, candidate screening, and business intelligence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            
            {/* Open PDF in new tab for preview and download */}
            <button
              onClick={handleOpenPdf}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 hover:rotateX-5 transition-all duration-300 flex items-center gap-2 perspective-1000"
            >
              <Download size={20} />
              View / Download Resume
            </button>

            {/* Scroll to Contact */}
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:rotateX-3 perspective-1000"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/crackersAyush24?tab=repositories"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 hover:rotateY-12 hover:-translate-y-1 transition-all duration-300 perspective-1000"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-chaubey-90751422b"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 hover:rotateY-12 hover:-translate-y-1 transition-all duration-300 perspective-1000"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chaubeyayush04@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Send Email"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 hover:rotateY-12 hover:-translate-y-1 transition-all duration-300"
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
