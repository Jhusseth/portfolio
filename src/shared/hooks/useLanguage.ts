import { useTranslation } from 'react-i18next';

export type Language = 'en' | 'es';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

/**
 * Custom hook for language management
 */
export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language as Language;

  const changeLanguage = (language: Language): void => {
    i18n.changeLanguage(language);
  };

  const getCurrentLanguageOption = (): LanguageOption => {
    return LANGUAGES.find(lang => lang.code === currentLanguage) || LANGUAGES[0]!;
  };

  return {
    currentLanguage,
    changeLanguage,
    getCurrentLanguageOption,
    t,
    languages: LANGUAGES,
  };
};