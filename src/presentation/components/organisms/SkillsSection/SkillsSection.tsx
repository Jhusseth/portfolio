import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Skill, SkillCategory } from '@/domain/entities/Experience';
import { GetExperienceUseCase } from '@/application/usecases/GetExperienceUseCase';
import { StaticExperienceRepository } from '@/infrastructure/repositories/StaticExperienceRepository';
import { SkillCard } from '@/presentation/components/molecules/SkillCard/SkillCard';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { fadeInUp, staggerContainer } from '@/shared/utils/animations';

/**
 * Skills matrix section with categorized skills
 */
export const SkillsSection: React.FC = () => {
  const [skillsByCategory, setSkillsByCategory] = useState<Record<SkillCategory, Skill[]>>(
    {} as Record<SkillCategory, Skill[]>
  );
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2 });
  const { t } = useLanguage();

  const categoryLabels: Record<SkillCategory, string> = {
    frontend: t('skills.categories.frontend'),
    backend: t('skills.categories.backend'),
    database: t('skills.categories.database'),
    devops: t('skills.categories.devops'),
    mobile: t('skills.categories.mobile'),
    design: t('skills.categories.design'),
    tools: t('skills.categories.tools'),
  };

  useEffect(() => {
    const loadSkills = async (): Promise<void> => {
      const repository = new StaticExperienceRepository();
      const useCase = new GetExperienceUseCase(repository);
      const data = await useCase.executeSkillsByCategory();
      setSkillsByCategory(data);
    };

    void loadSkills();
  }, []);

  return (
    <section id="skills" className="py-20" ref={ref}>
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
              {t('skills.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {Object.entries(skillsByCategory).map(([category, skills]) => {
              if (!skills || skills.length === 0) return null;

              return (
                <motion.div key={category} variants={fadeInUp} className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                    {categoryLabels[category as SkillCategory]}
                  </h3>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                      <SkillCard key={skill.id} skill={skill} index={index} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Skills Summary */}
          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('skills.alwaysLearning.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('skills.alwaysLearning.description')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
