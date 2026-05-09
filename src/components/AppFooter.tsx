import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../i18n/translations';

const AppFooter: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations;

  return (
    <>
      <p className="text-gray-300 dark:text-gray-400">{t.footer[lang].copyright}</p>
      <p className="text-gray-400 dark:text-gray-500 mt-2">{t.footer[lang].crafted}</p>
    </>
  );
};

export default AppFooter;
