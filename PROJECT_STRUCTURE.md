# Dying Light: The Beast Wiki - Project Structure

This document provides a complete overview of the project structure for the Dying Light: The Beast Wiki.

## 📁 Root Directory Structure

```
dyinglightthebeast-wiki/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment workflow
├── content/                        # Content files (Markdown)
│   ├── _index.md                  # Homepage content
│   ├── quests/                    # Quest walkthroughs
│   │   ├── _index.md             # Quests section page
│   │   └── first-night.md        # Sample quest
│   ├── items/                     # Item database
│   │   ├── _index.md             # Items section page
│   │   └── pipe-wrench.md        # Sample item
│   ├── characters/                # Character profiles
│   │   ├── _index.md             # Characters section page
│   │   └── dr-zere.md           # Sample character
│   ├── skills/                    # Skill tree guides
│   │   ├── _index.md             # Skills section page
│   │   └── survivor-sense.md     # Sample skill
│   └── map/                       # Location guides
│       ├── _index.md             # Map section page
│       └── tower-safe-house.md  # Sample location
├── themes/
│   └── dying-light-theme/         # Custom Hugo theme
│       ├── layouts/               # HTML templates
│       │   ├── _default/          # Default layouts
│       │   │   ├── baseof.html   # Base template
│       │   │   ├── single.html   # Single page layout
│       │   │   └── list.html     # List page layout
│       │   ├── index.html         # Homepage layout
│       │   └── partials/         # Reusable partials
│       │       ├── seo.html      # SEO meta tags
│       │       └── search-index.html # Search index generation
│       ├── static/                # Static assets
│       │   ├── css/
│       │   │   └── custom.css    # Custom styles
│       │   ├── js/
│       │   │   ├── main.js       # Main JavaScript
│       │   │   ├── search.js    # Search functionality
│       │   │   └── lunr-index.js # Search index template
│       │   └── images/
│       │       ├── logo.svg      # Site logo
│       │       └── favicon.svg   # Favicon
│       └── theme.toml            # Theme configuration
├── static/                        # Site-wide static files
│   ├── robots.txt                # Search engine directives
│   └── site.webmanifest         # PWA manifest
├── hugo.toml                     # Hugo configuration
├── README.md                     # Main documentation
├── DEPLOYMENT.md                 # Deployment guide
├── CONTENT_GUIDELINES.md         # Content creation guidelines
├── package.json                  # Node.js dependencies
├── .markdownlint.json           # Markdown linting rules
├── .gitignore                   # Git ignore rules
├── test-build.sh               # Build test script (Linux/Mac)
├── test-build.bat              # Build test script (Windows)
└── LICENSE                     # MIT License
```

## 🎨 Theme Structure

### Layouts (`themes/dying-light-theme/layouts/`)

- **`_default/baseof.html`**: Base template with navigation, footer, and scripts
- **`_default/single.html`**: Layout for individual pages (quests, items, etc.)
- **`_default/list.html`**: Layout for section pages (quests list, items list, etc.)
- **`index.html`**: Homepage layout with hero section and featured content
- **`partials/seo.html`**: SEO meta tags and structured data
- **`partials/search-index.html`**: Search index generation

### Static Assets (`themes/dying-light-theme/static/`)

- **`css/custom.css`**: Custom styles with Dying Light theme
- **`js/main.js`**: Main JavaScript functionality
- **`js/search.js`**: Lunr.js search implementation
- **`js/lunr-index.js`**: Search index template
- **`images/logo.svg`**: Site logo
- **`images/favicon.svg`**: Favicon

## 📝 Content Structure

### Content Types

1. **Quests** (`content/quests/`)
   - Main story quests
   - Side quests
   - Community quests
   - Each quest includes objectives, walkthrough, tips, and rewards

2. **Items** (`content/items/`)
   - Weapons (melee, ranged)
   - Blueprints (crafting recipes)
   - Consumables (health, buffs)
   - Equipment (armor, accessories)
   - Each item includes stats, description, and usage tips

3. **Characters** (`content/characters/`)
   - Survivors and allies
   - Enemies and bosses
   - Merchants and NPCs
   - Each character includes background, role, and interactions

4. **Skills** (`content/skills/`)
   - Survivor skills
   - Agility skills
   - Power skills
   - Night Hunter skills
   - Each skill includes description, effects, and progression

5. **Locations** (`content/map/`)
   - Safe houses
   - Merchant locations
   - Danger zones
   - Resource locations
   - Each location includes services, safety info, and tips

### Front Matter Structure

Each content file includes standardized front matter:

```yaml
---
title: "Page Title"
description: "SEO description"
date: 2024-01-01
type: "quest" # quest, item, character, skill, location
categories: ["main-story", "beginner"]
tags: ["tutorial", "combat"]
featured_image: "/images/section/item.jpg"
---
```

## 🔧 Configuration Files

### Hugo Configuration (`hugo.toml`)

- **Site settings**: Title, description, base URL
- **Theme configuration**: Theme name and parameters
- **Menu configuration**: Navigation menu items
- **SEO settings**: Meta tags, social media, analytics
- **Build settings**: Output formats, taxonomies

### Package Configuration (`package.json`)

- **Scripts**: Development, build, and deployment commands
- **Dependencies**: Development tools and linting
- **Metadata**: Project information and repository details

### Linting Configuration (`.markdownlint.json`)

- **Markdown rules**: Line length, heading styles, list formatting
- **Custom rules**: Project-specific linting rules
- **Exclusions**: Rules to ignore for specific cases

## 🚀 Deployment Structure

### GitHub Actions (`.github/workflows/deploy.yml`)

- **Build process**: Hugo build with minification
- **Deployment**: Cloudflare Pages integration
- **Preview**: PR preview deployments
- **Notifications**: PR comment with preview URL

### Cloudflare Pages Configuration

- **Build command**: `hugo --minify`
- **Build output**: `public` directory
- **Environment**: Production and preview environments
- **Custom domain**: `dyinglightthebeast.online`

## 🔍 Search Structure

### Search Implementation

- **Lunr.js**: Client-side search engine
- **Index generation**: Automatic content indexing
- **Search interface**: Modal overlay with real-time results
- **Filtering**: By type, category, and difficulty

### Search Data Structure

```javascript
{
  "id": "page-url",
  "title": "Page Title",
  "content": "Page content",
  "url": "/page-url/",
  "type": "quest",
  "description": "Page description",
  "categories": ["main-story"],
  "tags": ["tutorial"],
  "date": "2024-01-01"
}
```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Design Principles

- **Mobile-first**: Responsive design starting from mobile
- **Progressive enhancement**: Features added for larger screens
- **Touch-friendly**: Large buttons and touch targets
- **Performance**: Optimized for fast loading

## 🎯 SEO Structure

### Meta Tags

- **Title**: Dynamic titles with site name
- **Description**: SEO-optimized descriptions
- **Keywords**: Relevant keywords for each page
- **Canonical**: Proper canonical URLs
- **Open Graph**: Social media sharing
- **Twitter Cards**: Twitter-specific meta tags

### Structured Data

- **WebSite**: Homepage structured data
- **Article**: Individual page structured data
- **Breadcrumbs**: Navigation breadcrumbs
- **SearchAction**: Search functionality markup

## 🔒 Security Structure

### Content Security

- **Input validation**: All user input validated
- **XSS protection**: Content sanitization
- **CSRF protection**: Form protection
- **HTTPS**: SSL/TLS encryption

### Access Control

- **Repository access**: Limited to authorized users
- **Branch protection**: Main branch protection
- **Code review**: Required reviews for changes
- **Deployment**: Automated deployment process

## 📊 Performance Structure

### Optimization

- **Image optimization**: WebP format, compression
- **CSS optimization**: Minification, purging
- **JavaScript optimization**: Minification, bundling
- **Caching**: Browser and CDN caching

### Monitoring

- **Build time**: Hugo build performance
- **Page load**: Core Web Vitals
- **Search performance**: Search index size
- **User experience**: Mobile and desktop testing

---

**Note**: This structure is designed for scalability and maintainability. All components are modular and can be easily extended or modified as needed.
