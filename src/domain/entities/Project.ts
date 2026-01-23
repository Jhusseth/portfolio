/**
 * Project entity representing a portfolio project
 */
export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly longDescription?: string;
  readonly technologies: Technology[];
  readonly imageUrl: string;
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly featured: boolean;
  readonly category: ProjectCategory;
  readonly createdAt: Date;
}

export interface Technology {
  readonly name: string;
  readonly category: TechnologyCategory;
  readonly iconUrl?: string;
}

export type ProjectCategory = 'web' | 'mobile' | 'desktop' | 'library' | 'tool';

export type TechnologyCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'tool';
