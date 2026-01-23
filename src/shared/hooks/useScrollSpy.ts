import { useState, useEffect } from 'react';

/**
 * Custom hook for scroll spy functionality
 */
export const useScrollSpy = (sectionIds: string[], offset = 100): string => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + offset;

      // Find the section that is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]!);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]!);
          break;
        }
      }
    };

    // Set initial active section
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};
