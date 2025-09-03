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

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
serasi-parket-website/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro
│   ├── pages/              # Page routes
│   │   ├── index.astro     # Homepage
│   │   ├── about.astro     # About page
│   │   ├── contact.astro   # Contact page
│   │   └── products/       # Product pages
│   │       ├── index.astro
│   │       └── kayu-jati.astro
│   └── styles/             # Global styles
├── public/                 # Static assets
│   ├── images/            # Product images, logos, etc
│   ├── videos/            # Hero background videos
│   └── robots.txt         # SEO robots file
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
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

## 📊 Analytics & Tracking

### Google Analytics 4 Setup
```javascript
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: document.title,
  page_location: window.location.href,
  content_group1: 'Wood Products'
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
- Global styles: Tailwind config di `tailwind.config.mjs`
- Component styles: Inline Tailwind classes
- Custom animations: Defined di Tailwind config

## 🔧 Configuration

### Environment Setup
1. Replace `GA_MEASUREMENT_ID` dengan Google Analytics ID asli
2. Update contact information dan social media links
3. Ganti placeholder images dengan assets asli
4. Set up domain di `astro.config.mjs`

### SEO Configuration
- Meta descriptions di setiap page
- Open Graph images di `/public/images/`
- Schema.org markup di Layout.astro
- Sitemap auto-generated dari pages

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly navigation
- Optimized forms untuk mobile
- Fast loading dengan lazy loading
- Progressive enhancement

## 🚀 Deployment

### Build & Deploy
```bash
# Production build
npm run build

# Preview before deploy
npm run preview
```

### Hosting Recommendations
- **Vercel** - Optimal untuk Astro.js
- **Netlify** - Great Astro support
- **GitHub Pages** - Free hosting option

### Post-Deployment Checklist
- [ ] Update Google Analytics ID
- [ ] Test all contact forms
- [ ] Verify WhatsApp links
- [ ] Check mobile responsiveness
- [ ] Test site speed (aim for 90+ Lighthouse)
- [ ] Submit sitemap ke Google Search Console

## 📞 Support & Contact

Untuk pertanyaan teknis atau customization lebih lanjut:

- **Email**: technical@serasi-parket.com
- **WhatsApp**: +62 812 3456 7890
- **Documentation**: Astro.js Official Docs

---

**Serasi Parket** - Premium Wood Supplier Indonesia  
*Website built with ❤️ using Astro.js*
