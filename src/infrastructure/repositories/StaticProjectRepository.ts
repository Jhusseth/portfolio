import type { Project, ProjectCategory } from '@/domain/entities/Project';
import type { ProjectRepository } from '@/domain/repositories/ProjectRepository';

/**
 * Static implementation of ProjectRepository for demo purposes
 */
export class StaticProjectRepository implements ProjectRepository {
  private getProjects(t: (key: string) => string): Project[] {
    return [
      {
        id: '1',
        title: t('projects.items.ecommerce.title'),
        description: t('projects.items.ecommerce.description'),
        longDescription: t('projects.items.ecommerce.longDescription'),
        technologies: [
          { name: 'React', category: 'frontend' },
          { name: 'TypeScript', category: 'frontend' },
          { name: 'Node.js', category: 'backend' },
          { name: 'PostgreSQL', category: 'database' },
          { name: 'Docker', category: 'devops' },
        ],
        imageUrl: '/projects/ecommerce.webp',
        githubUrl: 'https://github.com/username/ecommerce-platform',
        liveUrl: 'https://ecommerce-demo.vercel.app',
        featured: true,
        category: 'web',
        createdAt: new Date('2023-06-15'),
      },
      {
        id: '2',
        title: t('projects.items.taskManager.title'),
        description: t('projects.items.taskManager.description'),
        longDescription: t('projects.items.taskManager.longDescription'),
        technologies: [
          { name: 'React', category: 'frontend' },
          { name: 'Redux Toolkit', category: 'frontend' },
          { name: 'Socket.io', category: 'backend' },
          { name: 'MongoDB', category: 'database' },
        ],
        imageUrl: '/projects/taskmanager.webp',
        githubUrl: 'https://github.com/username/task-manager',
        liveUrl: 'https://taskmanager-demo.vercel.app',
        featured: true,
        category: 'web',
        createdAt: new Date('2023-08-20'),
      },
      {
        id: '3',
        title: t('projects.items.componentLibrary.title'),
        description: t('projects.items.componentLibrary.description'),
        longDescription: t('projects.items.componentLibrary.longDescription'),
        technologies: [
          { name: 'React', category: 'frontend' },
          { name: 'TypeScript', category: 'frontend' },
          { name: 'Storybook', category: 'tool' },
          { name: 'Jest', category: 'tool' },
        ],
        imageUrl: '/projects/component-library.webp',
        githubUrl: 'https://github.com/username/react-ui-library',
        liveUrl: 'https://ui-library-storybook.vercel.app',
        featured: false,
        category: 'library',
        createdAt: new Date('2023-04-10'),
      },
    ];
  }

  async getAll(t?: (key: string) => string): Promise<Project[]> {
    if (!t) {
      // Fallback for when translation function is not available
      return [
        {
          id: '1',
          title: 'E-Commerce Platform',
          description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
          longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing, and admin dashboard. Built with modern technologies and best practices.',
          technologies: [
            { name: 'React', category: 'frontend' },
            { name: 'TypeScript', category: 'frontend' },
            { name: 'Node.js', category: 'backend' },
            { name: 'PostgreSQL', category: 'database' },
            { name: 'Docker', category: 'devops' },
          ],
          imageUrl: '/projects/ecommerce.webp',
          githubUrl: 'https://github.com/username/ecommerce-platform',
          liveUrl: 'https://ecommerce-demo.vercel.app',
          featured: true,
          category: 'web',
          createdAt: new Date('2023-06-15'),
        },
        {
          id: '2',
          title: 'Task Management App',
          description: 'Collaborative task management with real-time updates',
          longDescription: 'A modern task management application with real-time collaboration, drag-and-drop interface, team management, and advanced filtering capabilities.',
          technologies: [
            { name: 'React', category: 'frontend' },
            { name: 'Redux Toolkit', category: 'frontend' },
            { name: 'Socket.io', category: 'backend' },
            { name: 'MongoDB', category: 'database' },
          ],
          imageUrl: '/projects/taskmanager.webp',
          githubUrl: 'https://github.com/username/task-manager',
          liveUrl: 'https://taskmanager-demo.vercel.app',
          featured: true,
          category: 'web',
          createdAt: new Date('2023-08-20'),
        },
        {
          id: '3',
          title: 'React Component Library',
          description: 'Reusable UI components with Storybook documentation',
          longDescription: 'A comprehensive React component library with TypeScript support, extensive documentation, and automated testing. Includes 50+ components following design system principles.',
          technologies: [
            { name: 'React', category: 'frontend' },
            { name: 'TypeScript', category: 'frontend' },
            { name: 'Storybook', category: 'tool' },
            { name: 'Jest', category: 'tool' },
          ],
          imageUrl: '/projects/component-library.webp',
          githubUrl: 'https://github.com/username/react-ui-library',
          liveUrl: 'https://ui-library-storybook.vercel.app',
          featured: false,
          category: 'library',
          createdAt: new Date('2023-04-10'),
        },
      ];
    }
    
    return this.getProjects(t);
  }

  async getByCategory(category: ProjectCategory, t?: (key: string) => string): Promise<Project[]> {
    const projects = await this.getAll(t);
    return projects.filter(project => project.category === category);
  }

  async getFeatured(t?: (key: string) => string): Promise<Project[]> {
    const projects = await this.getAll(t);
    return projects.filter(project => project.featured);
  }

  async getById(id: string, t?: (key: string) => string): Promise<Project | null> {
    const projects = await this.getAll(t);
    return projects.find(project => project.id === id) || null;
  }
}