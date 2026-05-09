import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const WelcomeOverlay: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const { lang } = useLanguage();

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 4000); // show for 4 seconds

    // allow Escape key to dismiss early
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVisible(false);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="welcome"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto backdrop-blur-sm cursor-pointer"
          aria-hidden={!visible}
          onClick={() => setVisible(false)}
        >
          {/* Decorative animated background rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-teal-400 opacity-20"
              style={{ width: 420, height: 420 }}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: [0.8, 1.05, 0.95], opacity: [0.05, 0.18, 0.05] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="rounded-full border border-white/10"
              style={{ width: 260, height: 260 }}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [0.9, 1.08, 0.92], opacity: [0.06, 0.14, 0.06] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* small floating dots */}
            <motion.div
              className="absolute"
              initial={{ y: -10, opacity: 0.6 }}
              animate={{ y: [ -8, 8, -6 ], opacity: [0.6, 0.95, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: 0.2 }}
            >
              <div className="w-3 h-3 bg-white rounded-full opacity-80" />
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.45, opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="pointer-events-auto flex items-center justify-center p-6"
          >
            <div className="bg-white dark:bg-gray-900 bg-opacity-98 dark:bg-opacity-96 rounded-3xl px-10 py-8 shadow-3xl w-full max-w-4xl sm:max-w-3xl md:max-w-4xl border border-gray-100 dark:border-gray-800">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-gray-900 dark:text-gray-100 leading-tight">
                {lang === 'de' ? 'Willkommen' : "Welcome"}
              </h2>
              <p className="mt-4 text-center text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
                {lang === 'de' ? "Auf Ayushs Portfolio" : "to Ayush's Portfolio"}
              </p>
            </div>
          </motion.div>

          {/* Tap hint */}
          <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center pointer-events-none">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="text-sm sm:text-base text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-900/60 px-3 py-1 rounded-full shadow-sm"
            >
              {lang === 'de' ? 'Tippe irgendwo, um fortzufahren' : 'Tap anywhere to continue'}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeOverlay;
