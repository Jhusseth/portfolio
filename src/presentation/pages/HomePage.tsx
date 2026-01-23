import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/presentation/components/organisms/HeroSection/HeroSection';
import { AboutSection } from '@/presentation/components/organisms/AboutSection/AboutSection';
import { ExperienceSection } from '@/presentation/components/organisms/ExperienceSection/ExperienceSection';
import { ProjectsSection } from '@/presentation/components/organisms/ProjectsSection/ProjectsSection';
import { SkillsSection } from '@/presentation/components/organisms/SkillsSection/SkillsSection';
import { ContactSection } from '@/presentation/components/organisms/ContactSection/ContactSection';
import { useLanguage } from '@/shared/hooks/useLanguage';

/**
 * Main homepage component containing all sections
 */
export const HomePage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const title =
    currentLanguage === 'es'
      ? 'Senior Software Engineer - Portafolio Profesional'
      : 'Senior Software Engineer - Professional Portfolio';

  const description =
    currentLanguage === 'es'
      ? 'Senior Software Engineer con más de 5 años de experiencia construyendo aplicaciones web escalables. Especializado en Java, Pyhton, NodeJS, Angular, React, TypeScript y arquitecturas modernas escalables.'
      : 'Senior Software Engineer with 5+ years of experience building scalable web applications. Specializing in  Java, Pyhton, NodeJS, Angular, React, TypeScript, and modern scalable architectures.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content=" Java, Pyhton, NodeJS, Angular, React, TypeScript, Full Stack Engineer, Web Development, JavaScript, Senior Engineer"
        />
        <html lang={currentLanguage} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jhusseth.com" />
        <meta property="og:image" content="https://jhusseth.com/og-image.jpg" />
        <meta property="og:locale" content={currentLanguage === 'es' ? 'es_ES' : 'en_US'} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://jhusseth.com/og-image.jpg" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://jhusseth.com" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Jhusseth" />
      </Helmet>

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
};
