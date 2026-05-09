import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../i18n/translations';
import { Github, Linkedin, Mail } from 'lucide-react';

const AppFooter: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations;

  return (
    <footer className="w-full py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Social icons - subtle hover glow */}
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a
            href="https://github.com/crackersAyush24?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transform transition-all duration-200 hover:scale-110 hover:shadow-[0_8px_24px_rgba(99,102,241,0.12)] rounded-full p-1"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/ayush-chaubey-90751422b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transform transition-all duration-200 hover:scale-110 hover:shadow-[0_8px_24px_rgba(59,130,246,0.12)] rounded-full p-1"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:chaubeyayush04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="text-gray-500 hover:text-rose-500 dark:hover:text-rose-400 transform transition-all duration-200 hover:scale-110 hover:shadow-[0_8px_24px_rgba(244,63,94,0.12)] rounded-full p-1"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-gray-300 dark:text-gray-400">{t.footer[lang].copyright}</p>
        <p className="text-gray-400 dark:text-gray-500 mt-2">{t.footer[lang].crafted}</p>
      </div>
    </footer>
  );
};

export default AppFooter;
