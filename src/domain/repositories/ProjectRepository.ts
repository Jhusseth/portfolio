import type { Project, ProjectCategory } from '../entities/Project';

/**
 * Repository interface for project data operations
 */
export interface ProjectRepository {
  /**
   * Retrieves all projects
   */
  getAll(t?: (key: string) => string): Promise<Project[]>;

  /**
   * Retrieves projects by category
   */
  getByCategory(category: ProjectCategory, t?: (key: string) => string): Promise<Project[]>;

  /**
   * Retrieves featured projects
   */
  getFeatured(t?: (key: string) => string): Promise<Project[]>;

  /**
   * Retrieves a project by ID
   */
  getById(id: string, t?: (key: string) => string): Promise<Project | null>;
}
