import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '@/shared/constants/navigation';
import { Button } from '@/presentation/components/atoms/Button/Button';
import { useLanguage } from '@/shared/hooks/useLanguage';

/**
 * Footer component with navigation and social links
 */
export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navigationItems = [
    { id: 'home', label: t('navigation.home'), href: '#home' },
    { id: 'about', label: t('navigation.about'), href: '#about' },
    { id: 'experience', label: t('navigation.experience'), href: '#experience' },
    { id: 'projects', label: t('navigation.projects'), href: '#projects' },
    { id: 'skills', label: t('navigation.skills'), href: '#skills' },
    { id: 'contact', label: t('navigation.contact'), href: '#contact' },
  ];

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{t('footer.title')}</h3>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.quickLinks')}</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.connect')}</h4>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              {t('contact.social.available')}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} {t('footer.copyright')}</span>
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{t('footer.and')}</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            {t('footer.backToTop')}
          </Button>
        </div>
      </div>
    </footer>
  );
};