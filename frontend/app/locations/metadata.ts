import { generatePageMetadata } from '../lib/metadata-utils';
import { siteConfig } from '../config/site';

export const metadata = generatePageMetadata({
  title: 'Browse by Location - All States, Districts & Cities in India | InfoLive List',
  description: 'Find local listings across 28+ states and 700+ districts in India. Browse by state, district, or city to discover products and services near you. Complete coverage of urban and rural areas.',
  keywords: ['India locations', 'states of india', 'indian cities', 'districts in india', 'local classifieds', 'city wise listings', 'state wise ads', 'nearby listings', 'regional marketplace', 'local business directory', 'area wise search', 'location based shopping'],
  path: '/locations',
  imagePath: '/og-locations.jpg',
  alternates: {
    canonical: `${siteConfig.url}/locations`,
  },
});
