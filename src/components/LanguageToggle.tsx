import React from 'react';
import { useLanguage } from '../hooks/useLanguage.tsx';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-16 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm font-medium shadow-sm hover:shadow transition"
      aria-label="Toggle language"
      title={language === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'}
    >
      {language === 'pt' ? 'PT' : 'EN'}
    </button>
  );
};


