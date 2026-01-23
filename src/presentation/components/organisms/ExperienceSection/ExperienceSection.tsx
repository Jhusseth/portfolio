import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import type { Experience } from '@/domain/entities/Experience';
import { GetExperienceUseCase } from '@/application/usecases/GetExperienceUseCase';
import { StaticExperienceRepository } from '@/infrastructure/repositories/StaticExperienceRepository';
import { Card } from '@/presentation/components/atoms/Card/Card';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { formatDateRange, calculateDuration } from '@/shared/utils/formatters';
import { fadeInUp, staggerContainer } from '@/shared/utils/animations';

/**
 * Experience timeline section
 */
export const ExperienceSection: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2 });
  const { t } = useLanguage();

  useEffect(() => {
    const loadExperiences = async (): Promise<void> => {
      const repository = new StaticExperienceRepository();
      const useCase = new GetExperienceUseCase(repository);
      const data = await useCase.executeExperiences(t);
      setExperiences(data);
    };

    void loadExperiences();
  }, [t]);

  return (
    <section id="experience" className="py-20" ref={ref}>
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
              {t('experience.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('experience.subtitle')}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((experience) => (
                <motion.div key={experience.id} variants={fadeInUp} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block" />

                  {/* Experience Card */}
                  <div className="md:ml-20">
                    <Card className="p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                              {experience.position}
                            </h3>
                            {experience.companyUrl && (
                              <a
                                href={experience.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:text-primary-700 dark:text-primary-400"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                            {experience.company}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {formatDateRange(experience.startDate, experience.endDate)}
                              </span>
                              <span className="text-gray-400">•</span>
                              <span>
                                {calculateDuration(experience.startDate, experience.endDate)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="font-medium text-gray-900 dark:text-white mb-3">
                          {t('experience.keyAchievements')}
                        </h5>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                            >
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white mb-3">
                          {t('experience.technologiesUsed')}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full dark:bg-primary-900/30 dark:text-primary-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
