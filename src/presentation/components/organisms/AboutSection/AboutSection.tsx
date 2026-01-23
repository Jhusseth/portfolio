import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Award, Coffee } from 'lucide-react';
import { Card } from '@/presentation/components/atoms/Card/Card';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { fadeInUp, staggerContainer } from '@/shared/utils/animations';

/**
 * About section with personal information and stats
 */
export const AboutSection: React.FC = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2 });
  const { t } = useLanguage();

  const stats = [
    { icon: Code, label: t('about.stats.experience'), value: '5+' },
    { icon: Users, label: t('about.stats.projects'), value: '10+' },
    { icon: Award, label: t('about.stats.certifications'), value: '5+' },
    { icon: Coffee, label: t('about.stats.coffee'), value: '∞' },
  ];

  const values = [
    {
      title: t('about.values.cleanCode.title'),
      description: t('about.values.cleanCode.description'),
    },
    {
      title: t('about.values.userExperience.title'),
      description: t('about.values.userExperience.description'),
    },
    {
      title: t('about.values.continuousLearning.title'),
      description: t('about.values.continuousLearning.description'),
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Story */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('about.myJourney')}
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>{t('about.description1')}</p>
                <p>{t('about.description2')}</p>
                <p>{t('about.description3')}</p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={fadeInUp}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                      <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-600 dark:text-primary-400" />
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div variants={fadeInUp} className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              {t('about.whatDrivesMe')}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                  className="space-y-3"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
