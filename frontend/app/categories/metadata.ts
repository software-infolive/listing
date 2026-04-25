import { generatePageMetadata } from '../lib/metadata-utils';
import { siteConfig } from '../config/site';

export const metadata = generatePageMetadata({
  title: 'All Categories - Browse by Topic | InfoLive List',
  description: 'Explore 12+ diverse categories including Electronics, Furniture, Fashion, Automotive, Real Estate, Books, Services, and more. Find exactly what you\'re looking for in our comprehensive directory.',
  keywords: ['categories', 'browse categories', 'classified categories', 'electronics', 'furniture', 'fashion', 'automotive', 'real estate', 'books', 'services', 'pets', 'sports', 'home & garden', 'business directory'],
  path: '/categories',
  imagePath: '/og-categories.jpg',
  alternates: {
    canonical: `${siteConfig.url}/categories`,
  },
});
