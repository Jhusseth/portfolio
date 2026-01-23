/**
 * Utility functions for formatting data
 */

/**
 * Formats a date range for display
 */
export const formatDateRange = (startDate: Date, endDate?: Date): string => {
  const formatOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
  };

  const start = startDate.toLocaleDateString('en-US', formatOptions);
  const end = endDate ? endDate.toLocaleDateString('en-US', formatOptions) : 'Present';

  return `${start} - ${end}`;
};

/**
 * Calculates duration between two dates
 */
export const calculateDuration = (startDate: Date, endDate?: Date): string => {
  const end = endDate || new Date();
  const diffInMonths =
    (end.getFullYear() - startDate.getFullYear()) * 12 + (end.getMonth() - startDate.getMonth());

  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''}`;
  }

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (months === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  }

  return `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`;
};

/**
 * Formats skill level for display
 */
export const formatSkillLevel = (level: string): string => {
  return level.charAt(0).toUpperCase() + level.slice(1);
};

/**
 * Generates initials from a name
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};
