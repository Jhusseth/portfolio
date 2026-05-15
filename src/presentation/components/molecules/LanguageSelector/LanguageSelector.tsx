import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage, type Language } from '@/shared/hooks/useLanguage';
import { cn } from '@/shared/utils/cn';

/**
 * Language selector component with flag icons
 */
const FLAGS: Record<Language, React.ReactNode> = {
  en: (
    <svg width="22" height="16" viewBox="0 0 22 16" className="inline-block flex-shrink-0">
      <rect width="22" height="16" fill="#fff" />
      {[0, 2.46, 4.92, 7.38, 9.85, 12.31, 14.77].map((y) => (
        <rect key={y} width="22" height="1.23" y={y} fill="#b22234" />
      ))}
      <rect width="8.8" height="8" fill="#3c3b6e" />
    </svg>
  ),
  es: (
    <svg width="22" height="16" viewBox="0 0 22 16" className="inline-block flex-shrink-0">
      <rect width="22" height="16" fill="#c60b1e" />
      <rect width="22" height="8" y="4" fill="#ffc400" />
    </svg>
  ),
};

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage, getCurrentLanguageOption, languages } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = getCurrentLanguageOption();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (language: Language): void => {
    changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Select language"
      >
        {FLAGS[currentOption.code]}
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentOption.code.toUpperCase()}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200',
                  currentLanguage === language.code && 'bg-primary-50 dark:bg-primary-900/20'
                )}
                whileHover={{ x: 4 }}
              >
                {FLAGS[language.code]}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {language.name}
                </span>
                {currentLanguage === language.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto w-2 h-2 bg-primary-500 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
