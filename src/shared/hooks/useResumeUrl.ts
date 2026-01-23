import { useLanguage } from './useLanguage';

/**
 * Custom hook for getting the appropriate resume URL based on current language
 */
export const useResumeUrl = (): string => {
    const { currentLanguage } = useLanguage();

    const getResumeUrl = (): string => {
        const englishUrl = import.meta.env.VITE_RESUME_URL_EN;
        const spanishUrl = import.meta.env.VITE_RESUME_URL_ES;

        // Return appropriate URL based on current language
        if (currentLanguage === 'es' && spanishUrl) {
            return spanishUrl;
        }

        // Default to English URL or fallback
        return englishUrl || '/resume.pdf';
    };

    return getResumeUrl();
};