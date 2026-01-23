import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/domain/entities/Project';
import { Card } from '@/presentation/components/atoms/Card/Card';
import { Button } from '@/presentation/components/atoms/Button/Button';
import { useLanguage } from '@/shared/hooks/useLanguage';

interface ProjectCardProps {
  project: Project;
}

/**
 * Project card component displaying project information
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useLanguage();

  return (
    <Card hover className="overflow-hidden group">
      <div className="relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                <Github className="w-4 h-4 mr-1" />
                {t('projects.buttons.code')}
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                {t('projects.buttons.live')}
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {project.title}
          </h3>
          {project.featured && (
            <span className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full dark:bg-primary-900 dark:text-primary-200">
              {t('projects.featured')}
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech.name}
              className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-md dark:bg-gray-700 dark:text-gray-200"
            >
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-md dark:bg-gray-700 dark:text-gray-200">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};
