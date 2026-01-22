import type { Experience, Skill } from '@/domain/entities/Experience';
import type { ExperienceRepository } from '@/domain/repositories/ExperienceRepository';

/**
 * Static implementation of ExperienceRepository for demo purposes
 */
export class StaticExperienceRepository implements ExperienceRepository {
  private getExperiences(t: (key: string) => string): Experience[] {
    return [
      {
        id: '1',
        company: t('experience.experiences.techInnovators.company'),
        position: t('experience.experiences.techInnovators.position'),
        description: t('experience.experiences.techInnovators.description'),
        achievements: [
          t('experience.experiences.techInnovators.achievements.0'),
          t('experience.experiences.techInnovators.achievements.1'),
          t('experience.experiences.techInnovators.achievements.2'),
          t('experience.experiences.techInnovators.achievements.3'),
        ],
        technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS'],
        startDate: new Date('2022-03-01'),
        endDate: new Date('2023-12-31'),
        location: t('experience.experiences.techInnovators.location'),
        companyUrl: 'https://techinnovators.com',
      },
      {
        id: '2',
        company: t('experience.experiences.digitalSolutions.company'),
        position: t('experience.experiences.digitalSolutions.position'),
        description: t('experience.experiences.digitalSolutions.description'),
        achievements: [
          t('experience.experiences.digitalSolutions.achievements.0'),
          t('experience.experiences.digitalSolutions.achievements.1'),
          t('experience.experiences.digitalSolutions.achievements.2'),
          t('experience.experiences.digitalSolutions.achievements.3'),
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Jenkins'],
        startDate: new Date('2020-06-15'),
        endDate: new Date('2022-02-28'),
        location: t('experience.experiences.digitalSolutions.location'),
        companyUrl: 'https://digitalsolutions.com',
      },
      {
        id: '3',
        company: t('experience.experiences.startupXYZ.company'),
        position: t('experience.experiences.startupXYZ.position'),
        description: t('experience.experiences.startupXYZ.description'),
        achievements: [
          t('experience.experiences.startupXYZ.achievements.0'),
          t('experience.experiences.startupXYZ.achievements.1'),
          t('experience.experiences.startupXYZ.achievements.2'),
          t('experience.experiences.startupXYZ.achievements.3'),
        ],
        technologies: ['React', 'Redux', 'Sass', 'Webpack', 'Firebase'],
        startDate: new Date('2019-01-10'),
        endDate: new Date('2020-05-30'),
        location: t('experience.experiences.startupXYZ.location'),
        companyUrl: 'https://startupxyz.com',
      },
    ];
  }

  private readonly skills: Skill[] = [
    // Frontend
    { id: '1', name: 'React', category: 'frontend', level: 'expert', yearsOfExperience: 5 },
    { id: '2', name: 'TypeScript', category: 'frontend', level: 'expert', yearsOfExperience: 4 },
    { id: '3', name: 'Next.js', category: 'frontend', level: 'advanced', yearsOfExperience: 3 },
    { id: '4', name: 'Vue.js', category: 'frontend', level: 'advanced', yearsOfExperience: 2 },
    { id: '5', name: 'JavaScript', category: 'frontend', level: 'expert', yearsOfExperience: 6 },
    { id: '6', name: 'HTML5', category: 'frontend', level: 'expert', yearsOfExperience: 6 },
    { id: '7', name: 'CSS3', category: 'frontend', level: 'expert', yearsOfExperience: 6 },
    { id: '8', name: 'Tailwind CSS', category: 'frontend', level: 'advanced', yearsOfExperience: 3 },
    
    // Backend
    { id: '9', name: 'Node.js', category: 'backend', level: 'advanced', yearsOfExperience: 4 },
    { id: '10', name: 'Express.js', category: 'backend', level: 'advanced', yearsOfExperience: 4 },
    { id: '11', name: 'GraphQL', category: 'backend', level: 'intermediate', yearsOfExperience: 2 },
    { id: '12', name: 'REST APIs', category: 'backend', level: 'expert', yearsOfExperience: 5 },
    
    // Database
    { id: '13', name: 'PostgreSQL', category: 'database', level: 'advanced', yearsOfExperience: 3 },
    { id: '14', name: 'MongoDB', category: 'database', level: 'intermediate', yearsOfExperience: 2 },
    { id: '15', name: 'Redis', category: 'database', level: 'intermediate', yearsOfExperience: 2 },
    
    // DevOps
    { id: '16', name: 'Docker', category: 'devops', level: 'advanced', yearsOfExperience: 3 },
    { id: '17', name: 'AWS', category: 'devops', level: 'intermediate', yearsOfExperience: 2 },
    { id: '18', name: 'CI/CD', category: 'devops', level: 'advanced', yearsOfExperience: 3 },
    { id: '19', name: 'Kubernetes', category: 'devops', level: 'beginner', yearsOfExperience: 1 },
    
    // Tools
    { id: '20', name: 'Git', category: 'tools', level: 'expert', yearsOfExperience: 6 },
    { id: '21', name: 'Webpack', category: 'tools', level: 'advanced', yearsOfExperience: 4 },
    { id: '22', name: 'Vite', category: 'tools', level: 'advanced', yearsOfExperience: 2 },
    { id: '23', name: 'Jest', category: 'tools', level: 'advanced', yearsOfExperience: 4 },
    { id: '24', name: 'Cypress', category: 'tools', level: 'intermediate', yearsOfExperience: 2 },
  ];

  async getAllExperiences(t?: (key: string) => string): Promise<Experience[]> {
    if (!t) {
      // Fallback for when translation function is not available
      return [
        {
          id: '1',
          company: 'Tech Innovators Inc.',
          position: 'Senior Software Developer',
          description: 'Led full stack development for enterprise applications serving 100K+ users',
          achievements: [
            'Reduced bundle size by 40% through code splitting and optimization',
            'Implemented micro-frontend architecture reducing deployment time by 60%',
            'Mentored 5 junior developers and established code review processes',
            'Built reusable component library adopted across 8 different projects',
          ],
          technologies: ['Java', 'Python', 'NodeJs', 'React', 'TypeScript', 'Angular', 'AWS'],
          startDate: new Date('2022-03-01'),
          endDate: new Date('2023-12-31'),
          location: 'San Francisco, CA',
          companyUrl: 'https://techinnovators.com',
        },
        {
          id: '2',
          company: 'Digital Solutions Ltd.',
          position: 'Full Stack Developer',
          description: 'Developed and maintained multiple client projects using modern web technologies',
          achievements: [
            'Built 12+ responsive web applications from concept to deployment',
            'Improved application performance by 50% through optimization techniques',
            'Integrated third-party APIs and payment gateways for e-commerce solutions',
            'Collaborated with design team to implement pixel-perfect UI components',
          ],
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Jenkins'],
          startDate: new Date('2020-06-15'),
          endDate: new Date('2022-02-28'),
          location: 'New York, NY',
          companyUrl: 'https://digitalsolutions.com',
        },
        {
          id: '3',
          company: 'StartupXYZ',
          position: 'Frontend Developer',
          description: 'Early-stage startup focused on building innovative SaaS products',
          achievements: [
            'Developed MVP that secured $2M in Series A funding',
            'Implemented real-time features using WebSocket technology',
            'Created responsive design system used across all company products',
            'Optimized SEO resulting in 200% increase in organic traffic',
          ],
          technologies: ['React', 'Redux', 'Sass', 'Webpack', 'Firebase'],
          startDate: new Date('2019-01-10'),
          endDate: new Date('2020-05-30'),
          location: 'Austin, TX',
          companyUrl: 'https://startupxyz.com',
        },
      ];
    }
    
    return this.getExperiences(t);
  }

  async getAllSkills(): Promise<Skill[]> {
    return [...this.skills];
  }

  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return this.skills.filter(skill => skill.category === category);
  }
}