// Site configuration
export const siteConfig = {
  name: 'InfoLive',
  description: 'Your trusted source for quality information, insights, and knowledge that matters.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://infolive.in',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/infolive',
    facebook: 'https://www.facebook.com/infolive.in',
    linkedin: 'https://linkedin.com/company/infolive',
  },
  creator: 'InfoLive Team',
  keywords: [
    'information',
    'news',
    'insights',
    'knowledge',
    'verified content',
    'expert analysis',
    'marketplace',
    'listings',
    'classifieds',
  ],
  contact: {
    email: 'info@infolive.com',
    phone: '+1 (555) 123-4567',
    address: '123 Information Street, New York, NY 10001',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'your-google-verification-code',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || 'your-yandex-verification-code',
  },
};
