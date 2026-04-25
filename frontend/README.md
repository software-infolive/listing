# InfoLive - Information Hub & Marketplace

A modern, full-featured web application built with Next.js 15, TypeScript, and Tailwind CSS. InfoLive is a comprehensive information hub and marketplace platform featuring articles, listings, categories, and more.

## 🚀 Features

### Core Pages
- **Home Page** - Hero section with features and call-to-action
- **About Page** - Company information, mission, values, and team
- **Services Page** - Service offerings and premium subscriptions
- **Contact Page** - Contact form with seller information
- **Categories Page** - Browse information by category with search
- **Listings Page** - Marketplace with search and filter functionality
- **Blog Page** - Articles with category filtering and search
- **Login Page** - User authentication interface

### Advanced Features
- **Dynamic Routing** - SEO-friendly URLs for listings and blog posts
- **Search Functionality** - Keyword search across all major pages
- **Category Filtering** - Filter content by category with URL parameters
- **Responsive Design** - Mobile-first, works on all devices
- **SEO Optimized** - Complete metadata, sitemaps, and structured data
- **No Hydration Errors** - Properly configured Suspense boundaries

## 🎨 Theme Colors

### Brand Colors
```css
--primary: #842A3B        /* Deep burgundy/maroon */
--primary-dark: #6a2230   /* Darker burgundy */
--primary-light: #F5DAA7  /* Peachy beige accent */
--secondary: #0ea5e9      /* Sky blue */
--accent: #eab308         /* Yellow */
```

### Tailwind Classes
- **Primary**: `rose-600`, `rose-700`, `rose-800`
- **Accent**: `yellow-500`, `yellow-600`
- **Text**: `gray-700`, `gray-900`
- **Background**: `gray-50`, `gray-100`

## 📁 Project Structure

```
frontend/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Navigation.tsx   # Main navigation with mobile menu
│   │   └── StructuredData.tsx # SEO structured data
│   │
│   ├── config/             # Configuration files
│   │   └── site.ts         # Site-wide configuration
│   │
│   ├── hooks/              # Custom React hooks
│   │   └── useHydration.ts # Client-side hydration hook
│   │
│   ├── lib/                # Utility functions and data
│   │   ├── blog-data.ts    # Blog posts and categories data
│   │   └── metadata-utils.ts # Metadata generation utilities
│   │
│   ├── about/              # About page
│   │   ├── page.tsx
│   │   ├── metadata.ts
│   │   └── layout.tsx
│   │
│   ├── blog/               # Blog section
│   │   ├── page.tsx        # Blog list (with Suspense)
│   │   ├── BlogContent.tsx # Blog content with search
│   │   ├── metadata.ts
│   │   ├── layout.tsx
│   │   └── [slug]/         # Individual blog posts
│   │       ├── page.tsx
│   │       ├── metadata.ts
│   │       └── layout.tsx
│   │
│   ├── categories/         # Categories page
│   │   ├── page.tsx        # Category grid with search
│   │   ├── metadata.ts
│   │   └── layout.tsx
│   │
│   ├── contact/            # Contact page
│   │   ├── page.tsx        # Contact form
│   │   ├── metadata.ts
│   │   └── layout.tsx
│   │
│   ├── listings/           # Listings marketplace
│   │   ├── page.tsx        # Listings list (with Suspense)
│   │   ├── ListingsContent.tsx # Listings with search/filter
│   │   ├── metadata.ts
│   │   └── layout.tsx
│   │
│   ├── listing/            # Individual listings
│   │   └── [slug]/         # Dynamic listing detail pages
│   │       ├── page.tsx
│   │       ├── metadata.ts
│   │       └── layout.tsx
│   │
│   ├── login/              # Login page
│   │   ├── page.tsx        # Login form
│   │   ├── metadata.ts
│   │   └── layout.tsx
│   │
│   ├── services/           # Services page
│   │   ├── page.tsx
│   │   ├── metadata.ts
│   │   └── layout.tsx
│   │
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── metadata.ts         # Central metadata
│   ├── globals.css         # Global styles and theme
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── robots.ts           # Robots.txt configuration
│
├── public/                 # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── package.json            # Dependencies
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
└── eslint.config.mjs      # ESLint configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI**: React 19.1.0
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🌐 Pages & Routes

### Main Pages
- `/` - Home page
- `/about` - About us
- `/services` - Services and pricing
- `/contact` - Contact form
- `/categories` - Browse categories
- `/listings` - Marketplace listings
- `/blog` - Blog articles
- `/login` - User login

### Dynamic Routes
- `/listing/[slug]` - Individual listing detail
  - Example: `/listing/apple-iphone-15-pro`
  - Example: `/listing/nikon-dslr-camera`

- `/blog/[slug]` - Individual blog post
  - Example: `/blog/future-of-artificial-intelligence-2024`
  - Example: `/blog/understanding-climate-change-comprehensive-guide`

### Filtered Routes
- `/listings?category=Technology` - Filtered listings
- `/blog?category=technology` - Filtered blog posts

## 🔍 Search & Filter Features

### Categories Page
- **Search**: Filter categories by keyword
- **12 Categories**: Technology, Business, Health, Education, etc.
- **Direct Links**: Click category → Go to filtered listings

### Listings Page
- **Search Fields**: Title, Description, Category, Location
- **Category Filter**: Sidebar and dropdown
- **Pagination**: 12 items per page
- **12 Listings**: Various products and services

### Blog Page
- **Search Fields**: Title, Excerpt, Author, Tags, Category
- **Category Badges**: 7 categories (Technology, Science, Business, etc.)
- **18 Blog Posts**: Complete articles with full content
- **Related Articles**: Based on category

## 📊 Data Structure

### Listings Data
Located in: `app/listings/ListingsContent.tsx`
```typescript
{
  id: number,
  title: string,
  category: string,
  location: string,
  price: number,
  type: 'Sale' | 'Rent',
  image: string,
  description: string,
  slug: string
}
```

### Blog Posts Data
Located in: `app/lib/blog-data.ts`
```typescript
{
  id: number,
  slug: string,
  title: string,
  excerpt: string,
  content: string,
  author: string,
  authorBio: string,
  date: string,
  category: string,
  readTime: string,
  image: string,
  tags: string[],
  views: number
}
```

### Listing Detail Data
Located in: `app/listing/[slug]/page.tsx`
```typescript
{
  id: number,
  title: string,
  category: string,
  location: string,
  price: number,
  type: 'Sale' | 'Rent',
  description: string,
  images: string[],
  seller: {
    name: string,
    phone: string,
    email: string,
    rating: number,
    listingsCount: number,
    joinDate: string
  },
  specifications: { [key: string]: string },
  features: string[],
  datePosted: string,
  views: number,
  condition: string
}
```

## 🎯 SEO Features

### Metadata
- **Page-specific metadata** for each route
- **Dynamic metadata** for blog posts and listings
- **Open Graph tags** for social sharing
- **Twitter Cards** support
- **Canonical URLs** for all pages

### Sitemaps & Robots
- **Dynamic sitemap** (`/sitemap.xml`)
- **Robots.txt** configuration
- **Structured data** (JSON-LD)
- **Meta verification** ready

### SEO Configuration
Located in: `app/config/site.ts`
```typescript
{
  name: 'InfoLive',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://infolive.com',
  description: 'Your trusted source for quality information',
  keywords: [...],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  }
}
```

## 🎨 Component Architecture

### Client Components (use client)
- `Navigation.tsx` - Interactive navigation
- `BlogContent.tsx` - Blog with search/filter
- `ListingsContent.tsx` - Listings with search/filter
- `Contact/page.tsx` - Contact form
- `Login/page.tsx` - Login form
- `Listing/[slug]/page.tsx` - Listing details
- `Blog/[slug]/page.tsx` - Blog post details
- `Categories/page.tsx` - Category search

### Server Components
- `layout.tsx` - Root layout
- `page.tsx` (Home) - Static home page
- `About/page.tsx` - Static about page
- `Services/page.tsx` - Static services page
- All `metadata.ts` files

### Suspense Boundaries
Used for pages with `useSearchParams`:
- `Blog/page.tsx` - Wraps BlogContent
- `Listings/page.tsx` - Wraps ListingsContent

## 🔧 Configuration Files

### Site Configuration (`app/config/site.ts`)
```typescript
export const siteConfig = {
  name: 'InfoLive',
  description: 'Your trusted source...',
  url: process.env.NEXT_PUBLIC_SITE_URL,
  contact: { email, phone, address },
  verification: { google, yandex }
}
```

### Metadata Utilities (`app/lib/metadata-utils.ts`)
Centralized metadata generation:
```typescript
generatePageMetadata({
  title: string,
  description: string,
  keywords: string[],
  path: string,
  imagePath?: string
})
```

### Blog Data (`app/lib/blog-data.ts`)
- 18 complete blog posts
- 7 categories
- Helper functions:
  - `getBlogPostBySlug(slug)`
  - `getBlogPostsByCategory(category)`

## 🚦 Routing Strategy

### Static Routes
Simple page routes without parameters

### Dynamic Routes
- `[slug]` - Single parameter (blog posts, listings)
- Metadata generated dynamically
- Data fetched based on slug

### Query Parameters
- `?category=Technology` - Category filtering
- Handled with `useSearchParams`
- Wrapped in Suspense boundaries

## 🎭 Design System

### Typography
- **Headings**: Bold, large sizes (text-4xl, text-5xl)
- **Body**: Gray-700, readable sizes
- **Links**: Rose-600 with hover states

### Spacing
- **Sections**: py-16, py-20
- **Containers**: max-w-7xl mx-auto
- **Grid gaps**: gap-6, gap-8

### Components
- **Cards**: Rounded, shadowed, hover effects
- **Buttons**: Rounded-lg, semibold, transitions
- **Forms**: Focused ring states, proper validation
- **Footer**: Dark gradient, 4-column grid

## 🔐 Forms & Validation

### Contact Form
- Name, Email, Subject, Message
- Client-side validation
- Success feedback

### Login Form
- Email, Password
- Remember me option
- Social login buttons (Google, Facebook)
- Loading states

### Newsletter Signup
- Email input
- Subscribe button
- Appears on multiple pages

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Default (< 768px)
- **Tablet**: md: (768px+)
- **Desktop**: lg: (1024px+)
- **Large**: xl: (1280px+)

### Mobile Features
- Hamburger menu
- Collapsible navigation
- Touch-friendly buttons
- Responsive grids (1 → 2 → 3 columns)

## 🌟 Key Features

### Navigation
- Sticky header
- Mobile hamburger menu
- Login/Sign Up buttons
- Responsive layout
- Smooth transitions

### Search
- **Categories**: Search by name
- **Listings**: Search by title, description, category, location
- **Blog**: Search by title, excerpt, author, tags, category

### Filtering
- **URL-based**: Shareable filtered views
- **Category dropdowns**: Quick filtering
- **Sidebar navigation**: Visual category selection

### Pagination
- Listings page (12 per page)
- Blog page (6 per page)
- Previous/Next navigation
- Page number buttons

## 🗃️ Data Management

### Mock Data
Currently using static mock data for:
- Listings (12 items)
- Blog posts (18 articles)
- Categories (12 categories)

### Future Backend Integration
Replace mock data with API calls:
```typescript
// Example
const post = await fetch(`/api/blog/${slug}`).then(r => r.json());
```

## 🎯 SEO Implementation

### Per-Page Metadata
Each page has unique:
- Title
- Description
- Keywords
- Canonical URL
- Open Graph tags
- Twitter Cards

### Dynamic Metadata
Blog posts and listings generate metadata based on content:
```typescript
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  return { title: post.title, ... };
}
```

### Structured Data
JSON-LD for:
- Organization
- Website
- Articles
- Services

## 🔄 State Management

### Client State
- `useState` for form inputs
- `useState` for search/filter state
- `useEffect` for data loading
- `useSearchParams` for URL parameters

### Hydration Handling
- `useHydration` hook for client-side checks
- `Suspense` boundaries for async components
- `suppressHydrationWarning` for browser extensions

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic with App Router
- **Image Optimization**: Next.js Image component ready
- **Font Optimization**: Geist fonts with variable fonts
- **CSS Optimization**: Tailwind CSS with purging
- **Lazy Loading**: Components load on demand

## 📝 Environment Variables

Create `.env.local` in frontend folder:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# SEO Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
NEXT_PUBLIC_YANDEX_VERIFICATION=your-yandex-code
```

## 🧪 Development

### Running Locally
```bash
npm run dev
```
Starts development server at http://localhost:3000

### Building
```bash
npm run build
```
Creates optimized production build

### Production
```bash
npm start
```
Runs production server

### Linting
```bash
npm run lint
```
Checks code quality

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎨 Styling Guide

### Color Usage
```tsx
// Primary actions
className="bg-rose-600 hover:bg-rose-700"

// Text links
className="text-rose-600 hover:text-rose-800"

// Focus states
className="focus:ring-rose-500"

// Hero sections
className="bg-gradient-to-r from-rose-600 to-rose-800"
```

### Common Patterns
```tsx
// Card
className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg"

// Button
className="px-6 py-3 rounded-lg font-semibold transition-colors"

// Container
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```

## 🐛 Common Issues & Solutions

### Hydration Errors
**Issue**: Server/client HTML mismatch
**Solution**: 
- Use Suspense for `useSearchParams`
- Add `suppressHydrationWarning` to `<body>`
- Avoid `Date.now()` or `Math.random()` in render

### 404 Errors
**Issue**: Missing images
**Solution**: Use emoji icons or ensure images exist in `/public`

### Metadata Errors
**Issue**: `params` not awaited in Next.js 15
**Solution**: 
```typescript
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Use slug
}
```

## 📚 Key Pages Documentation

### Home Page (`/`)
- Hero with gradient background
- Features section (3 cards)
- Call-to-action section
- Footer with links

### Listings (`/listings`)
- Search bar (title, description, category, location)
- Category filter (sidebar + dropdown)
- Product grid (responsive)
- Pagination
- Footer

### Blog (`/blog`)
- Search bar (title, author, tags)
- Category filter badges
- Featured article section
- Article grid (3 columns)
- Newsletter signup
- Footer

### Listing Detail (`/listing/[slug]`)
- Image gallery with thumbnails
- Product details (price, location, specs)
- Seller information
- Contact seller modal
- Related listings
- Safety tips

### Blog Post (`/blog/[slug]`)
- Full article content
- Author bio
- Tags
- Related articles (same category)
- Newsletter CTA

## 🔗 Internal Linking

### Navigation Flow
```
Home → Categories → Listings (filtered) → Listing Detail
Home → Blog → Blog Post
Home → Services → Contact
```

### Category Linking
- Categories page → Listings (with category parameter)
- Blog categories → Blog (with category parameter)
- Footer categories → Filtered views

## 🎁 Additional Features

### Footer (All Pages)
- Mobile Apps section
- Quick Links
- Categories
- Contact Info
- Legal links (Terms, Privacy, Sitemap)

### Newsletter Signup
- Email input with validation
- Subscribe button
- Present on Blog and Categories pages

### Social Links
- Google/Facebook login (UI ready)
- Footer social links (planned)

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication (JWT)
- [ ] Real database (PostgreSQL/MongoDB)
- [ ] Image uploads for listings
- [ ] Comment system for blog
- [ ] User profiles
- [ ] Favorites/Bookmarks
- [ ] Advanced search filters
- [ ] Analytics dashboard

## 📄 License

Built for InfoLive - Information Hub & Marketplace

## 👥 Credits

Designed and Developed by InfoLive Team

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Framework**: Next.js 15.5.4  
**Node Version**: 20+
