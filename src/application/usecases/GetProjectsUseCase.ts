import type { Project, ProjectCategory } from '@/domain/entities/Project';
import type { ProjectRepository } from '@/domain/repositories/ProjectRepository';

/**
 * Use case for retrieving projects with various filters
 */
export class GetProjectsUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  /**
   * Executes the use case to get all projects
   */
  async execute(t?: (key: string) => string): Promise<Project[]> {
    return await this.projectRepository.getAll(t);
  }

  /**
   * Executes the use case to get projects by category
   */
  async executeByCategory(category: ProjectCategory, t?: (key: string) => string): Promise<Project[]> {
    return await this.projectRepository.getByCategory(category, t);
  }

  /**
   * Executes the use case to get featured projects
   */
  async executeFeatured(t?: (key: string) => string): Promise<Project[]> {
    return await this.projectRepository.getFeatured(t);
  }
}