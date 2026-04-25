import { Metadata } from 'next';

export const homeMetadata: Metadata = {
  title: 'InfoLive - Your Trusted Source for Quality Information',
  description: 'Discover, learn, and stay informed with InfoLive - your trusted source for quality information, insights, and knowledge that matters. Get verified news, expert analysis, and real-time updates.',
  keywords: ['information', 'news', 'insights', 'knowledge', 'verified content', 'expert analysis', 'real-time updates', 'quality information'],
  authors: [{ name: 'InfoLive Team' }],
  creator: 'InfoLive',
  publisher: 'InfoLive',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://infolive.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'InfoLive - Your Trusted Source for Quality Information',
    description: 'Discover, learn, and stay informed with InfoLive - your trusted source for quality information, insights, and knowledge that matters.',
    url: 'https://infolive.com',
    siteName: 'InfoLive',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InfoLive - Quality Information Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfoLive - Your Trusted Source for Quality Information',
    description: 'Discover, learn, and stay informed with InfoLive - your trusted source for quality information, insights, and knowledge that matters.',
    images: ['/twitter-image.jpg'],
    creator: '@infolive',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export const aboutMetadata: Metadata = {
  title: 'About InfoLive - Empowering People with Accurate Information',
  description: 'Learn about InfoLive\'s mission to empower people with accurate, timely, and reliable information. Meet our team and discover our values of accuracy, timeliness, integrity, and community.',
  keywords: ['about infolive', 'company mission', 'team', 'values', 'accuracy', 'reliable information', 'journalism', 'news team'],
  authors: [{ name: 'InfoLive Team' }],
  creator: 'InfoLive',
  publisher: 'InfoLive',
  metadataBase: new URL('https://infolive.com'),
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About InfoLive - Empowering People with Accurate Information',
    description: 'Learn about InfoLive\'s mission to empower people with accurate, timely, and reliable information. Meet our team and discover our values.',
    url: 'https://infolive.com/about',
    siteName: 'InfoLive',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About InfoLive - Our Mission and Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About InfoLive - Empowering People with Accurate Information',
    description: 'Learn about InfoLive\'s mission to empower people with accurate, timely, and reliable information.',
    images: ['/twitter-about.jpg'],
    creator: '@infolive',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const servicesMetadata: Metadata = {
  title: 'InfoLive Services - Comprehensive Information Solutions',
  description: 'Explore InfoLive\'s comprehensive information services including news, technology insights, business analysis, health information, lifestyle content, and educational resources.',
  keywords: ['information services', 'news service', 'technology insights', 'business analysis', 'health information', 'lifestyle content', 'educational resources', 'premium content'],
  authors: [{ name: 'InfoLive Team' }],
  creator: 'InfoLive',
  publisher: 'InfoLive',
  metadataBase: new URL('https://infolive.com'),
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'InfoLive Services - Comprehensive Information Solutions',
    description: 'Explore InfoLive\'s comprehensive information services including news, technology insights, business analysis, and more.',
    url: 'https://infolive.com/services',
    siteName: 'InfoLive',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'InfoLive Services - Information Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfoLive Services - Comprehensive Information Solutions',
    description: 'Explore InfoLive\'s comprehensive information services including news, technology insights, business analysis, and more.',
    images: ['/twitter-services.jpg'],
    creator: '@infolive',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const contactMetadata: Metadata = {
  title: 'Contact InfoLive - Get in Touch with Our Team',
  description: 'Contact InfoLive for inquiries, support, partnerships, or feedback. Reach out to our team via email, phone, or our contact form. We\'re here to help!',
  keywords: ['contact infolive', 'get in touch', 'support', 'partnership', 'feedback', 'customer service', 'help', 'inquiry'],
  authors: [{ name: 'InfoLive Team' }],
  creator: 'InfoLive',
  publisher: 'InfoLive',
  metadataBase: new URL('https://infolive.com'),
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact InfoLive - Get in Touch with Our Team',
    description: 'Contact InfoLive for inquiries, support, partnerships, or feedback. We\'re here to help!',
    url: 'https://infolive.com/contact',
    siteName: 'InfoLive',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact InfoLive - Get in Touch',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact InfoLive - Get in Touch with Our Team',
    description: 'Contact InfoLive for inquiries, support, partnerships, or feedback. We\'re here to help!',
    images: ['/twitter-contact.jpg'],
    creator: '@infolive',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const blogMetadata: Metadata = {
  title: 'InfoLive Blog - Latest Articles, Insights & Expert Analysis',
  description: 'Stay informed with InfoLive\'s latest articles, insights, and expert analysis. Covering technology, science, business, health, lifestyle, and more.',
  keywords: ['blog', 'articles', 'insights', 'expert analysis', 'technology news', 'science articles', 'business insights', 'health information', 'lifestyle tips'],
  authors: [{ name: 'InfoLive Team' }],
  creator: 'InfoLive',
  publisher: 'InfoLive',
  metadataBase: new URL('https://infolive.com'),
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'InfoLive Blog - Latest Articles, Insights & Expert Analysis',
    description: 'Stay informed with InfoLive\'s latest articles, insights, and expert analysis covering various topics.',
    url: 'https://infolive.com/blog',
    siteName: 'InfoLive',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'InfoLive Blog - Articles and Insights',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfoLive Blog - Latest Articles, Insights & Expert Analysis',
    description: 'Stay informed with InfoLive\'s latest articles, insights, and expert analysis.',
    images: ['/twitter-blog.jpg'],
    creator: '@infolive',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

