import type { Experience, Skill, SkillCategory } from '@/domain/entities/Experience';
import type { ExperienceRepository } from '@/domain/repositories/ExperienceRepository';

/**
 * Use case for retrieving professional experience and skills
 */
export class GetExperienceUseCase {
  constructor(private readonly experienceRepository: ExperienceRepository) {}

  /**
   * Executes the use case to get all experiences
   */
  async executeExperiences(t?: (key: string) => string): Promise<Experience[]> {
    const experiences = await this.experienceRepository.getAllExperiences(t);
    return experiences.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  }

  /**
   * Executes the use case to get all skills
   */
  async executeSkills(): Promise<Skill[]> {
    return await this.experienceRepository.getAllSkills();
  }

  /**
   * Executes the use case to get skills grouped by category
   */
  async executeSkillsByCategory(): Promise<Record<SkillCategory, Skill[]>> {
    const skills = await this.experienceRepository.getAllSkills();
    
    return skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category]!.push(skill);
      return acc;
    }, {} as Record<SkillCategory, Skill[]>);
  }
}