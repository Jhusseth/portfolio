import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

/**
 * Reusable Card component with glassmorphism effect
 */
export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  glass = false,
}) => {
  const baseClasses = 'rounded-xl border transition-all duration-300';
  
  const glassClasses = glass
    ? 'bg-white/10 backdrop-blur-md border-white/20 dark:bg-gray-900/10 dark:border-gray-700/20'
    : 'bg-white border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700';

  const hoverClasses = hover
    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(baseClasses, glassClasses, hoverClasses, className)}
    >
      {children}
    </motion.div>
  );
};