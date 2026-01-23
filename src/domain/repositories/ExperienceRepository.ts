import type { Experience, Skill, SkillCategory } from '../entities/Experience';

/**
 * Repository interface for experience and skills data operations
 */
export interface ExperienceRepository {
  /**
   * Retrieves all professional experiences
   */
  getAllExperiences(t?: (key: string) => string): Promise<Experience[]>;

  /**
   * Retrieves all skills
   */
  getAllSkills(): Promise<Skill[]>;

  /**
   * Retrieves skills by category
   */
  getSkillsByCategory(category: SkillCategory): Promise<Skill[]>;
}
