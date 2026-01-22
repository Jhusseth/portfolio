import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Project, ProjectCategory } from '@/domain/entities/Project';
import { GetProjectsUseCase } from '@/application/usecases/GetProjectsUseCase';
import { StaticProjectRepository } from '@/infrastructure/repositories/StaticProjectRepository';
import { ProjectCard } from '@/presentation/components/molecules/ProjectCard/ProjectCard';
import { Button } from '@/presentation/components/atoms/Button/Button';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { fadeInUp, staggerContainer } from '@/shared/utils/animations';

/**
 * Projects showcase section with filtering
 */
export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2 });
  const { t } = useLanguage();

  const filters: Array<{ key: ProjectCategory | 'all'; label: string }> = [
    { key: 'all', label: t('projects.filters.all') },
    { key: 'web', label: t('projects.filters.web') },
    { key: 'mobile', label: t('projects.filters.mobile') },
    { key: 'library', label: t('projects.filters.library') },
    { key: 'tool', label: t('projects.filters.tool') },
  ];

  useEffect(() => {
    const loadProjects = async (): Promise<void> => {
      const repository = new StaticProjectRepository();
      const useCase = new GetProjectsUseCase(repository);
      const data = await useCase.execute(t);
      setProjects(data);
      setFilteredProjects(data);
    };

    void loadProjects();
  }, [t]);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? 'primary' : 'outline'}
                onClick={() => setActiveFilter(filter.key)}
                className="transition-all duration-200"
              >
                {filter.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={fadeInUp}
              className="text-center py-12"
            >
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {t('projects.noProjects')}
              </p>
            </motion.div>
          )}

          {/* View More Button */}
          <motion.div variants={fadeInUp} className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://github.com/yourusername', '_blank')}
            >
              {t('projects.viewAllGithub')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};