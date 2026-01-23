import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '@/domain/entities/Experience';
import { Card } from '@/presentation/components/atoms/Card/Card';
import { useLanguage } from '@/shared/hooks/useLanguage';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

/**
 * Skill card component with animated progress bar
 */
export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const { t } = useLanguage();

  const getSkillPercentage = (level: string): number => {
    switch (level) {
      case 'beginner':
        return 25;
      case 'intermediate':
        return 50;
      case 'advanced':
        return 75;
      case 'expert':
        return 90;
      default:
        return 0;
    }
  };

  const getSkillColor = (level: string): string => {
    switch (level) {
      case 'beginner':
        return 'bg-yellow-500';
      case 'intermediate':
        return 'bg-blue-500';
      case 'advanced':
        return 'bg-green-500';
      case 'expert':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const percentage = getSkillPercentage(skill.level);
  const colorClass = getSkillColor(skill.level);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {skill.yearsOfExperience}y
          </span>
        </div>

        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-gray-400">
              {t(`skills.levels.${skill.level}`)}
            </span>
            <span className="text-gray-600 dark:text-gray-400">{percentage}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <motion.div
              className={`h-2 rounded-full ${colorClass}`}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
