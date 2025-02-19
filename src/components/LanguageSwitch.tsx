import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20 text-sm font-medium"
      title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Languages className="h-4 w-4" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
}