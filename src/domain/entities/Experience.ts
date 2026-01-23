/**
 * Professional experience entity
 */
export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly position: string;
  readonly description: string;
  readonly achievements: string[];
  readonly technologies: string[];
  readonly startDate: Date;
  readonly endDate?: Date;
  readonly location: string;
  readonly companyUrl?: string;
  readonly logoUrl?: string;
}

/**
 * Skill entity representing technical competencies
 */
export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly category: SkillCategory;
  readonly level: SkillLevel;
  readonly yearsOfExperience: number;
  readonly iconUrl?: string;
}

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'mobile'
  | 'design'
  | 'tools';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
