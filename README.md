# Serasi Parket Website

Website company profile untuk **Serasi Parket** - supplier parquet kayu premium Indonesia. Dibangun dengan Astro.js untuk performa optimal dan SEO yang excellent.

## 🌟 Features

### ✅ Technical Excellence

- **Astro.js** - Modern static site generator dengan performance terbaik
- **Tailwind CSS** - Utility-first CSS framework untuk design yang konsisten
- **TypeScript** - Type safety dan better developer experience
- **Responsive Design** - Mobile-first approach, optimal di semua device
- **SEO Optimized** - Meta tags, structured data, sitemap.xml
- **Performance Optimized** - Lazy loading, image optimization, code splitting

### ✅ Business Features

- **Product Catalog** - 8 jenis kayu premium dengan detail lengkap
- **Interactive Filters** - Filter by category, application, search
- **Inquiry System** - Lead generation forms dengan tracking
- **Contact Integration** - Multiple contact methods, maps, business hours
- **Newsletter Signup** - Email capture dengan popup dan footer forms
- **WhatsApp Integration** - Floating button dan direct links
- **Google Analytics 4** - Complete tracking setup
- **Schema.org Markup** - Rich snippets untuk search engines

### ✅ Content Management

- **About Page** - Company story, vision, mission, team, values
- **Product Pages** - Detailed specs, applications, grades, galleries
- **Blog Ready** - Structure siap untuk content marketing
- **Testimonials** - Customer reviews dan success stories
- **FAQ Section** - Common questions dengan toggle functionality

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env # lalu isi PUBLIC_GA_ID

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Run type checking
npm run type-check
```

## 📁 Project Structure

```
serasi-parket-website/
├── .github/
│   └── workflows/
│       └── build-deploy.yml    # CI/CD pipeline
├── src/
│   ├── components/             # Reusable components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/               # Page layouts
│   │   └── Layout.astro
│   ├── pages/                 # Page routes
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About page
│   │   ├── contact.astro      # Contact page
│   │   └── products/          # Product pages
│   │       ├── index.astro
│   │       └── kayu-jati.astro
│   └── styles/                # Global styles
│       └── global.css
├── public/                    # Static assets
│   ├── images/               # Product images, logos, etc
│   ├── videos/               # Hero background videos
│   └── robots.txt            # SEO robots file
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── .eslintrc.cjs             # ESLint configuration
├── .prettierrc               # Prettier configuration
├── vercel.json               # Vercel deployment config
├── lighthouserc.js           # Lighthouse CI config
└── package.json
```

## 🎨 Design System

### Colors

- **Primary**: Warm brown tones (#c46831 - #391b10)
- **Wood**: Natural wood colors (light, medium, dark, charcoal)
- **Accent**: Supporting colors untuk highlights

### Typography

- **Display**: Playfair Display (headings)
- **Body**: Inter (content)

### Components

- Responsive navigation dengan dropdowns
- Product cards dengan hover effects
- Interactive image galleries
- Form components dengan validation
- Modal dialogs untuk inquiries

## 🔧 Development

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format

# Type checking
npm run type-check

# Build and test
npm run build
```

### Git Workflow

1. Create feature branch: `git checkout -b feature/nama-fitur`
2. Make changes and commit: `git commit -m "feat: tambah fitur baru"`
3. Push branch: `git push origin feature/nama-fitur`
4. Create Pull Request ke `develop` branch
5. Setelah review, merge ke `develop`
6. Deploy ke production melalui merge ke `main`

## 🚀 CI/CD Pipeline

### GitHub Actions Workflow

- **Test & Lint**: ESLint, Prettier, Type checking
- **Build**: Production build dengan optimizations
- **Security**: npm audit untuk vulnerabilities
- **Lighthouse**: Performance audit untuk PRs
- **Deploy Staging**: Auto deploy ke staging dari `develop`
- **Deploy Production**: Auto deploy ke production dari `main`

### Deployment Environments

- **Development**: Local development server
- **Staging**: Vercel preview deployments dari `develop`
- **Production**: Vercel production dari `main`

## 📊 Analytics & Tracking

### Google Analytics 4 Setup

```javascript
gtag('config', import.meta.env.PUBLIC_GA_ID, {
  page_title: document.title,
  page_location: window.location.href,
  content_group1: 'Wood Products',
});
```

### Custom Events

- Newsletter signups
- Product inquiries
- Phone/WhatsApp clicks
- Scroll depth tracking
- Video engagement
- Lead generation

## 🛠 Customization

### Adding New Products

1. Add product data in `/src/pages/products/index.astro`
2. Create detail page `/src/pages/products/new-product.astro`
3. Add product images in `/public/images/products/`
4. Update sitemap in `astro.config.mjs`

### Modifying Contact Info

Update contact details in:

- `/src/components/Header.astro`
- `/src/components/Footer.astro`
- `/src/pages/contact.astro`
- `/src/layouts/Layout.astro` (Schema.org)

### Styling Changes

- Global styles: `/src/styles/global.css`
- Component styles: Inline Tailwind classes
- Custom animations: Defined in global.css

## 📱 Performance & SEO

### Lighthouse Scores Target

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Optimizations

- Image lazy loading dan optimization
- CSS code splitting
- JavaScript tree shaking
- Preconnect untuk external resources
- Critical CSS inlining
- Gzip compression

## 🔒 Security

### Security Headers

```json
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin"
}
```

### Best Practices

- npm audit untuk dependencies
- CSP headers untuk XSS protection
- Secure cookie settings
- HTTPS enforcement

## 🚀 Deployment

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

Set di Vercel dashboard:

- `PUBLIC_GA_ID`: Google Analytics ID
- `VERCEL_TOKEN`: Deployment token
- `VERCEL_ORG_ID`: Organization ID
- `VERCEL_PROJECT_ID`: Project ID

### Post-Deployment Checklist

- [ ] Update Google Analytics ID
- [ ] Test all contact forms
- [ ] Verify WhatsApp links
- [ ] Check mobile responsiveness
- [ ] Test site speed (aim for 90+ Lighthouse)
- [ ] Submit sitemap ke Google Search Console
- [ ] Monitor Core Web Vitals

## 📞 Support & Maintenance

### Monitoring

- Vercel Analytics untuk performance
- Google Search Console untuk SEO
- Google Analytics untuk user behavior
- Lighthouse CI untuk continuous monitoring

### Maintenance Tasks

- Monthly dependency updates
- Quarterly security audits
- Performance optimization reviews
- Content updates dan SEO improvements

---

**Serasi Parket** - Premium Wood Supplier Indonesia  
_Website built with ❤️ using Astro.js_
