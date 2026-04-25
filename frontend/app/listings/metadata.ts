import { generatePageMetadata } from '../lib/metadata-utils';
import { siteConfig } from '../config/site';

export const metadata = generatePageMetadata({
  title: 'All Listings - Buy & Sell Products and Services | InfoLive List',
  description: 'Discover thousands of listings across India. Browse smartphones, cameras, furniture, fashion, and more. Filter by category, location, and price. Connect with verified sellers instantly.',
  keywords: ['listings', 'classifieds', 'buy sell', 'marketplace india', 'used products', 'second hand', 'local classifieds', 'electronics for sale', 'furniture online', 'fashion deals', 'real estate listings', 'services directory', 'business listings'],
  path: '/listings',
  imagePath: '/og-listings.jpg',
  alternates: {
    canonical: `${siteConfig.url}/listings`,
  },
});
