# Deployment Guide

This guide covers how to deploy your Senior Software Portfolio to GitHub Pages and configure it for production use.

## 🚀 Quick Deployment to GitHub Pages

### 1. Repository Setup

1. **Create a new repository** on GitHub named `senior-react-portfolio`
2. **Push your code** to the repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/jhusseth/portfolio.git
   git push -u origin main
   ```

### 2. Configure GitHub Secrets

Go to your repository Settings > Secrets and variables > Actions, and add:

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

### 3. Enable GitHub Pages

1. Go to repository **Settings > Pages**
2. Under "Source", select **"GitHub Actions"**
3. The deployment will trigger automatically on the next push to main

### 4. Update Configuration

Update these files with your information:

**vite.config.ts**:

```typescript
base: '/portfolio/',
```

**package.json**:

```json
"homepage": "https://jhusseth.github.io/portfolio"
```

## 📧 EmailJS Setup

### 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Create a free account
3. Create a new service (Gmail, Outlook, etc.)

### 2. Create Email Template

Create a template with these variables:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_name}}` - Your name

### 3. Get Credentials

- **Service ID**: Found in EmailJS dashboard > Email Services
- **Template ID**: Found in EmailJS dashboard > Email Templates
- **Public Key**: Found in EmailJS dashboard > Account > API Keys

## 🌐 Custom Domain Setup

### 1. Add CNAME File

Create `public/CNAME` with your domain:

```
yourdomain.com
```

### 2. Update GitHub Workflow

In `.github/workflows/deploy.yml`, uncomment and update:

```yaml
cname: yourdomain.com
```

### 3. Configure DNS

Add these DNS records with your domain provider:

**For apex domain (yourdomain.com)**:

```
A    185.199.108.153
A    185.199.109.153
A    185.199.110.153
A    185.199.111.153
```

**For www subdomain**:

```
CNAME    jhusseth.github.io
```

### 4. Update URLs

Update all instances of URLs in:

- `index.html` (meta tags)
- `public/sitemap.xml`
- `README.md`
- Social media links

## 🔧 Environment Variables

### Development (.env.local)

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RESUME_URL_EN=https://drive.google.com/file/d/your-english-resume-id/view
VITE_RESUME_URL_ES=https://drive.google.com/file/d/your-spanish-resume-id/view
```

### Production (GitHub Secrets)

Set the same variables as GitHub repository secrets for automatic deployment:

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
- `VITE_RESUME_URL_EN`: URL to your English resume/CV
- `VITE_RESUME_URL_ES`: URL to your Spanish resume/CV

### Resume/CV URLs Setup

You can use different types of URLs for your resume:

**Option 1: Google Drive (Recommended)**

1. Upload your resume to Google Drive
2. Right-click and select "Get link"
3. Make sure it's set to "Anyone with the link can view"
4. Use the full Google Drive URL

**Option 2: GitHub Repository**

```env
VITE_RESUME_URL_EN=https://github.com/yourusername/resume/raw/main/resume-en.pdf
VITE_RESUME_URL_ES=https://github.com/yourusername/resume/raw/main/resume-es.pdf
```

**Option 3: External Hosting**

```env
VITE_RESUME_URL_EN=https://your-website.com/resume-en.pdf
VITE_RESUME_URL_ES=https://your-website.com/resume-es.pdf
```

**Option 4: Public Folder (Local)**

```env
VITE_RESUME_URL_EN=/resume-en.pdf
VITE_RESUME_URL_ES=/resume-es.pdf
```

### Production (GitHub Secrets)

Set the same variables as GitHub repository secrets for automatic deployment.

## 📊 Performance Optimization

### 1. Image Optimization

- Use WebP format for images
- Compress images before adding to `public/`
- Add proper alt tags for accessibility

### 2. Bundle Analysis

```bash
npm run build
npx vite-bundle-analyzer dist
```

### 3. Lighthouse Testing

Test your deployed site:

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for Performance, Accessibility, Best Practices, SEO

Target scores: 90+ in all categories

## 🔍 SEO Configuration

### 1. Update Meta Tags

In `src/presentation/pages/HomePage.tsx`, update:

- Title and description
- Open Graph tags
- Twitter Card tags
- Canonical URL

### 2. Structured Data

Update the JSON-LD in `index.html` with your information:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jhusseth",
  "jobTitle": "Senior Software Engineer",
  "url": "https://jhusseth.com",
  "sameAs": ["https://linkedin.com/in/jhusseth-sanchez"]
}
```

### 3. Sitemap

Update `public/sitemap.xml` with your domain and last modified dates.

## 🚨 Troubleshooting

### Common Issues

**1. 404 on GitHub Pages**

- Check that `base` in `vite.config.ts` matches your repository name
- Ensure GitHub Pages is enabled and set to GitHub Actions

**2. Contact Form Not Working**

- Verify EmailJS credentials in GitHub Secrets
- Check browser console for CORS errors
- Test EmailJS configuration in their dashboard

**3. Images Not Loading**

- Ensure images are in `public/` directory
- Use absolute paths starting with `/`
- Check image file extensions and names

**4. Build Failures**

- Check TypeScript errors: `npm run type-check`
- Fix linting issues: `npm run lint:fix`
- Verify all dependencies are installed

### Debug Commands

```bash
# Check build locally
npm run build && npm run preview

# Verify TypeScript
npm run type-check

# Check for linting issues
npm run lint

# Test production build
npm run build
```

## 📱 PWA Configuration

The portfolio includes PWA capabilities:

### Features Included

- Service Worker for caching
- Web App Manifest
- Offline support
- Install prompt

### Testing PWA

1. Build and serve the app
2. Open Chrome DevTools > Application
3. Check Service Workers and Manifest tabs
4. Test offline functionality

## 🔄 Continuous Deployment

The GitHub Actions workflow automatically:

1. **Triggers** on push to main branch
2. **Installs** dependencies
3. **Runs** linting and type checking
4. **Builds** the production bundle
5. **Deploys** to GitHub Pages

### Manual Deployment

If needed, deploy manually:

```bash
npm run build
npm run deploy
```

## 📈 Analytics (Optional)

### Google Analytics 4

1. Create GA4 property
2. Add tracking ID to environment variables
3. Implement tracking in components

### Monitoring

Consider adding:

- Error tracking (Sentry)
- Performance monitoring
- User analytics

---

**Need help?** Check the [main README](README.md) or create an issue in the repository.
