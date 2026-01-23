/**
 * Navigation constants and configuration
 */
export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    platform: 'github' as const,
    url: 'https://github.com/jhusseth',
    username: '@jhusseth',
  },
  {
    platform: 'linkedin' as const,
    url: 'https://linkedin.com/in/jhusseth-sanchez',
    username: 'Jhusseth',
  },
  {
    platform: 'twitter' as const,
    url: 'https://twitter.com/jhussetharias',
    username: '@jhussetharias',
  },
  {
    platform: 'email' as const,
    url: 'mailto:jhusethsanchez@gmail.com.com',
    username: 'jhusethsanchez@gmail.com.com',
  },
] as const;
