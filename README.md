# Senior Software Engineer Portfolio

A modern, professional portfolio website built with React 18, TypeScript, and Tailwind CSS, showcasing senior-level frontend development skills and following clean architecture principles. **Features full internationalization (i18n) support with English and Spanish languages.**

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Clean Architecture**: Hexagonal architecture with domain, application, infrastructure, and presentation layers
- **Internationalization (i18n)**: Full support for English and Spanish with react-i18next
- **Language Switching**: Elegant language selector with flag icons in the header
- **Responsive Design**: Mobile-first approach with Apple-inspired design language
- **Dark/Light Mode**: Persistent theme switching with system preference detection
- **Smooth Animations**: Framer Motion for fluid transitions and micro-interactions
- **Performance Optimized**: Code splitting, lazy loading, and bundle optimization
- **SEO Optimized**: Meta tags, Open Graph, structured data, and sitemap with language support
- **PWA Ready**: Service worker and offline capabilities
- **Contact Form**: Functional contact form with EmailJS integration and multilingual validation
- **Accessibility**: WCAG 2.1 AA compliant

## 🌐 Internationalization

The portfolio supports two languages:
- **English (en)** 🇺🇸 - Default language
- **Spanish (es)** 🇪🇸 - Complete translation

### Language Features
- **Automatic Detection**: Detects browser language preference
- **Persistent Selection**: Remembers user's language choice
- **Dynamic Content**: All text, labels, and messages are translated
- **SEO Support**: Language-specific meta tags and HTML lang attribute
- **Validation Messages**: Form validation errors in selected language

### Language Selector
Located in the header next to the theme toggle, featuring:
- Flag icons for visual identification
- Smooth dropdown animation
- Current language indicator
- Responsive design for mobile devices

## 🏗️ Architecture

The project follows hexagonal (clean) architecture principles:

```
src/
├── domain/          # Business entities and interfaces
├── application/     # Use cases and business logic
├── infrastructure/  # External services and data sources
├── presentation/    # React components and UI
├── shared/         # Common utilities, constants, hooks, and i18n
└── shared/i18n/    # Internationalization configuration and translations
    ├── index.ts    # i18n setup and configuration
    ├── locales/    # Translation files
    │   ├── en.json # English translations
    │   └── es.json # Spanish translations
    └── hooks/      # Language-related hooks
```

### Key Patterns

- **Repository Pattern**: Abstract data access
- **Use Case Pattern**: Encapsulate business logic
- **Atomic Design**: Component organization
- **SOLID Principles**: Clean, maintainable code
- **i18n Integration**: Seamless translation support throughout the architecture

## 🛠️ Tech Stack

### Core
- **React 18** - UI library with concurrent features
- **TypeScript** - Type safety and developer experience
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Internationalization
- **react-i18next** - React integration for i18next
- **i18next** - Internationalization framework
- **i18next-browser-languagedetector** - Automatic language detection

### Animation & UI
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **React Helmet Async** - SEO and meta tag management

### Development
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality gates
- **Conventional Commits** - Standardized commit messages

### Deployment
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - CI/CD pipeline
- **PWA** - Progressive Web App capabilities

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/senior-react-portfolio.git
   cd senior-react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🌐 Adding New Languages

To add support for additional languages:

1. **Create translation file**
   ```bash
   # Add new language file (e.g., French)
   touch src/shared/i18n/locales/fr.json
   ```

2. **Add translations**
   Copy the structure from `en.json` and translate all values.

3. **Update language configuration**
   ```typescript
   // src/shared/hooks/useLanguage.ts
   export const LANGUAGES: LanguageOption[] = [
     { code: 'en', name: 'English', flag: '🇺🇸' },
     { code: 'es', name: 'Español', flag: '🇪🇸' },
     { code: 'fr', name: 'Français', flag: '🇫🇷' }, // Add new language
   ];
   ```

4. **Import in i18n configuration**
   ```typescript
   // src/shared/i18n/index.ts
   import frTranslations from './locales/fr.json';
   
   const resources = {
     en: { translation: enTranslations },
     es: { translation: esTranslations },
     fr: { translation: frTranslations }, // Add new language
   };
   ```

## 📝 Customization

### Personal Information

1. **Update translations** in `src/shared/i18n/locales/`
2. **Modify data** in `src/infrastructure/repositories/`
3. **Replace images** in `public/` directory
4. **Update meta tags** in `src/presentation/pages/HomePage.tsx`

### Styling

- **Colors**: Modify `tailwind.config.js` color palette
- **Fonts**: Update font imports in `src/index.css`
- **Animations**: Customize in `src/shared/utils/animations.ts`

### Content Sections

Each section is a separate component in `src/presentation/components/organisms/`:
- `HeroSection` - Landing area with introduction
- `AboutSection` - Personal story and stats
- `ExperienceSection` - Professional timeline
- `ProjectsSection` - Portfolio showcase
- `SkillsSection` - Technical skills matrix
- `ContactSection` - Contact form and social links

All components automatically use the selected language through the `useLanguage` hook.

## 🚀 Deployment

### GitHub Pages

1. **Update repository settings**
   - Set base URL in `vite.config.ts`
   - Update workflow in `.github/workflows/deploy.yml`

2. **Add secrets to GitHub**
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

3. **Push to main branch**
   ```bash
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select "GitHub Actions" as source

### Custom Domain

1. **Add CNAME file** to `public/` directory
2. **Update sitemap.xml** with your domain
3. **Configure DNS** with your domain provider

## 📊 Performance

The portfolio is optimized for performance:

- **Lighthouse Score**: 90+ in all categories
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Lazy loading and prefetching
- **SEO**: Structured data and meta optimization
- **i18n Performance**: Efficient translation loading and caching

## 🧪 Testing

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type check
npm run type-check

# Format code
npm run format
```

## 📱 PWA Features

- **Offline Support**: Service worker caching
- **Install Prompt**: Add to home screen
- **App Manifest**: Native app-like experience
- **Performance**: Optimized loading and caching
- **Multilingual**: PWA manifest supports multiple languages

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking
npm run format       # Format with Prettier
npm run deploy       # Deploy to GitHub Pages
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Commit using conventional commits
6. Push and create a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from Apple's design language
- Icons from Lucide React
- Animations powered by Framer Motion
- Internationalization with react-i18next
- Built with modern React ecosystem

---

**Made with ❤️ and React by [Your Name]**

**Hecho con ❤️ y React por [Tu Nombre]**