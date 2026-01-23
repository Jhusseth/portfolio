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
        title: t('projects.items.foundationPlatform.title'),
        description: t('projects.items.foundationPlatform.description'),
        longDescription: t('projects.items.foundationPlatform.longDescription'),
        technologies: [
          { name: 'Java', category: 'backend' },
          { name: 'Spring Boot', category: 'backend' },
          { name: 'React', category: 'frontend' },
          { name: 'PostgreSQL', category: 'database' },
          { name: 'AWS S3', category: 'devops' },
          { name: 'Docker', category: 'devops' },
        ],
        imageUrl: '/portfolio/projects/foundation-platform.webp',
        githubUrl: 'https://github.com/slaydep/fundacion_pelitos',
        liveUrl: undefined,
        featured: true,
        category: 'web',
        createdAt: new Date('2025-06-07'),
      },
      {
        id: '2',
        title: t('projects.items.expenseTracker.title'),
        description: t('projects.items.expenseTracker.description'),
        longDescription: t('projects.items.expenseTracker.longDescription'),
        technologies: [
          { name: 'Java', category: 'backend' },
          { name: 'Spring Boot', category: 'backend' },
          { name: 'React', category: 'frontend' },
          { name: 'MongoDB', category: 'database' },
          { name: 'Chart.js', category: 'frontend' },
        ],
        imageUrl: '/portfolio/projects/expense-tracker.webp',
        githubUrl: 'https://github.com/Jhusseth/expense-tracker-pro',
        liveUrl: 'https://jhusseth.github.io/expense-tracker-pro/',
        featured: true,
        category: 'web',
        createdAt: new Date('2026-01-15'),
      },
      {
        id: '3',
        title: t('projects.items.weddingInvitation.title'),
        description: t('projects.items.weddingInvitation.description'),
        longDescription: t('projects.items.weddingInvitation.longDescription'),
        technologies: [
          { name: 'Node.js', category: 'backend' },
          { name: 'React', category: 'frontend' },
          { name: 'TypeScript', category: 'frontend' },
          { name: 'MongoDB', category: 'database' },
          { name: 'Tailwind CSS', category: 'frontend' },
        ],
        imageUrl: '/portfolio/projects/wedding-invitation.webp',
        githubUrl: 'https://github.com/Jhusseth/wedding-invitation',
        liveUrl: 'https://jhusseth.github.io/wedding-invitation',
        featured: true,
        category: 'web',
        createdAt: new Date('2025-10-06'),
      },
      {
        id: '4',
        title: t('projects.items.meliInventory.title'),
        description: t('projects.items.meliInventory.description'),
        longDescription: t('projects.items.meliInventory.longDescription'),
        technologies: [
          { name: 'Java', category: 'backend' },
          { name: 'Spring Boot', category: 'backend' },
          { name: 'React', category: 'frontend' },
          { name: 'PostgreSQL', category: 'database' },
          { name: 'REST APIs', category: 'backend' },
        ],
        imageUrl: '/portfolio/projects/meli-inventory.webp',
        githubUrl: 'https://github.com/Jhusseth/meli-inventory-prototype',
        liveUrl: undefined,
        featured: false,
        category: 'web',
        createdAt: new Date('2025-09-29'),
      },
      {
        id: '5',
        title: t('projects.items.javaComparation.title'),
        description: t('projects.items.javaComparation.description'),
        longDescription: t('projects.items.javaComparation.longDescription'),
        technologies: [
          { name: 'Java', category: 'backend' },
          { name: 'Spring Boot', category: 'backend' },
          { name: 'Angular', category: 'frontend' },
          { name: 'TypeScript', category: 'frontend' },
          { name: 'PostgreSQL', category: 'database' },
        ],
        imageUrl: '/portfolio/projects/java-comparation.webp',
        githubUrl: 'https://github.com/Jhusseth/java-version-comparation',
        liveUrl: undefined,
        featured: false,
        category: 'library',
        createdAt: new Date('2025-10-03'),
      },
      {
        id: '6',
        title: t('projects.items.logsECSLibrary.title'),
        description: t('projects.items.logsECSLibrary.description'),
        longDescription: t('projects.items.logsECSLibrary.longDescription'),
        technologies: [
          { name: 'Java', category: 'backend' },
          { name: 'Spring Boot', category: 'backend' },
          { name: 'AWS ECS', category: 'devops' },
          { name: 'CloudWatch', category: 'devops' },
          { name: 'Maven', category: 'tool' },
        ],
        imageUrl: '/portfolio/projects/logs-ecs-library.webp',
        githubUrl: 'https://github.com/bancolombia/ecs-logs-java',
        liveUrl: undefined,
        featured: false,
        category: 'library',
        createdAt: new Date('2025-10-01'),
      },
    ];
  }

  async getAll(t?: (key: string) => string): Promise<Project[]> {
    if (!t) {
      // Fallback for when translation function is not available
      return [
        {
          id: '1',
          title: 'Pet Foundation Platform',
          description:
            'Full-stack solution for adoption and donation management with Java Spring Boot and React',
          longDescription:
            'Comprehensive pet foundation platform featuring adoption management, animal registry, donation system, administrative dashboard and PostgreSQL database. Implements secure authentication, AWS S3 image uploads and email notifications.',
          technologies: [
            { name: 'Java', category: 'backend' },
            { name: 'Spring Boot', category: 'backend' },
            { name: 'React', category: 'frontend' },
            { name: 'PostgreSQL', category: 'database' },
            { name: 'AWS S3', category: 'devops' },
            { name: 'Docker', category: 'devops' },
          ],
          imageUrl: '/portfolio/projects/foundation-platform.webp',
          githubUrl: 'https://github.com/slaydep/fundacion_pelitos',
          liveUrl: undefined,
          featured: true,
          category: 'web',
          createdAt: new Date('2025-06-07'),
        },
        {
          id: '2',
          title: 'Personal Expense Tracker',
          description: 'Personal financial management application with analytics and reports',
          longDescription:
            'Personal expense tracking system with automatic categorization, interactive data visualization with charts, monthly reports and Excel export. Developed with reactive architecture and MongoDB database for flexible storage.',
          technologies: [
            { name: 'Java', category: 'backend' },
            { name: 'Spring Boot', category: 'backend' },
            { name: 'React', category: 'frontend' },
            { name: 'MongoDB', category: 'database' },
            { name: 'Chart.js', category: 'frontend' },
          ],
          imageUrl: '/portfolio/projects/expense-tracker.webp',
          githubUrl: 'https://github.com/Jhusseth/expense-tracker-pro',
          liveUrl: 'https://jhusseth.github.io/expense-tracker-pro/',
          featured: true,
          category: 'web',
          createdAt: new Date('2026-01-15'),
        },
        {
          id: '3',
          title: 'Digital Wedding Invitation',
          description: 'Digital invitation system with RSVP and event management',
          longDescription:
            'Elegant platform for digital wedding invitations with RSVP confirmation, photo gallery, event timeline, Google Maps integration and gift registry management. Responsive design with CSS3 animations and Node.js backend.',
          technologies: [
            { name: 'Node.js', category: 'backend' },
            { name: 'React', category: 'frontend' },
            { name: 'TypeScript', category: 'frontend' },
            { name: 'MongoDB', category: 'database' },
            { name: 'Tailwind CSS', category: 'frontend' },
          ],
          imageUrl: '/portfolio/projects/wedding-invitation.webp',
          githubUrl: 'https://github.com/Jhusseth/wedding-invitation',
          liveUrl: 'https://jhusseth.github.io/wedding-invitation',
          featured: true,
          category: 'web',
          createdAt: new Date('2025-10-06'),
        },
        {
          id: '4',
          title: 'Mercado Libre Inventory System',
          description: 'Automated inventory synchronized with Mercado Libre API',
          longDescription:
            'Inventory management tool that automatically synchronizes products, prices and stock with Mercado Libre. Includes sales notifications, best-selling product analysis, bulk updates and profitability reports. Built with Spring Boot and React.',
          technologies: [
            { name: 'Java', category: 'backend' },
            { name: 'Spring Boot', category: 'backend' },
            { name: 'React', category: 'frontend' },
            { name: 'PostgreSQL', category: 'database' },
            { name: 'REST APIs', category: 'backend' },
          ],
          imageUrl: '/portfolio/projects/meli-inventory.webp',
          githubUrl: 'https://github.com/Jhusseth/meli-inventory-prototype',
          liveUrl: undefined,
          featured: false,
          category: 'web',
          createdAt: new Date('2025-09-29'),
        },
        {
          id: '5',
          title: 'Java Comparison Tool',
          description: 'Comparative analysis of Java versions and features',
          longDescription:
            'Web application to compare features, performance and syntax across different Java versions (8, 11, 17, 21). Includes code examples, performance benchmarks, migration guides and best practices. Developed with Spring Boot 3.x and Angular.',
          technologies: [
            { name: 'Java', category: 'backend' },
            { name: 'Spring Boot', category: 'backend' },
            { name: 'Angular', category: 'frontend' },
            { name: 'TypeScript', category: 'frontend' },
            { name: 'PostgreSQL', category: 'database' },
          ],
          imageUrl: '/portfolio/projects/java-comparation.webp',
          githubUrl: 'https://github.com/Jhusseth/java-version-comparation',
          liveUrl: undefined,
          featured: false,
          category: 'library',
          createdAt: new Date('2025-10-03'),
        },
        {
          id: '6',
          title: 'AWS ECS Logging Library',
          description: 'Java library for structured logging in ECS containers',
          longDescription:
            'Open-source library for centralized logging in Java applications running on AWS ECS. Integrates CloudWatch Logs, structured JSON format, distributed trace correlation and custom metrics. Compatible with Spring Boot and auto-configuration.',
          technologies: [
            { name: 'Java', category: 'backend' },
            { name: 'Spring Boot', category: 'backend' },
            { name: 'AWS ECS', category: 'devops' },
            { name: 'CloudWatch', category: 'devops' },
            { name: 'Maven', category: 'tool' },
          ],
          imageUrl: '/portfolio/projects/logs-ecs-library.webp',
          githubUrl: 'https://github.com/bancolombia/ecs-logs-java',
          liveUrl: undefined,
          featured: false,
          category: 'library',
          createdAt: new Date('2025-10-01'),
        },
      ];
    }

    return this.getProjects(t);
  }

  async getByCategory(category: ProjectCategory, t?: (key: string) => string): Promise<Project[]> {
    const projects = await this.getAll(t);
    return projects.filter((project) => project.category === category);
  }

  async getFeatured(t?: (key: string) => string): Promise<Project[]> {
    const projects = await this.getAll(t);
    return projects.filter((project) => project.featured);
  }

  async getById(id: string, t?: (key: string) => string): Promise<Project | null> {
    const projects = await this.getAll(t);
    return projects.find((project) => project.id === id) || null;
  }
}
