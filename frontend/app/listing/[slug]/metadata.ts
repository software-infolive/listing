import { Metadata } from 'next'
import { siteConfig } from '../../config/site'

// Mock listing data - In production, fetch from database
interface ListingData {
  title: string;
  price: string;
  description: string;
  category: string;
  location: string;
  seller: string;
}

const allListings: { [key: string]: ListingData } = {
  'apple-iphone-15-pro': {
    title: 'Apple iPhone 15 Pro',
    price: '₹1,29,999',
    description: 'Latest iPhone 15 Pro with A17 Pro chip, titanium design, and advanced camera system. Brand new, sealed pack with 1 year warranty.',
    category: 'Electronics',
    location: 'Mumbai, Maharashtra',
    seller: 'Premium Electronics Store',
  },
  'professional-travel-kit': {
    title: 'Professional Travel Kit',
    price: '₹4,999',
    description: 'Complete travel kit with luggage, accessories, and organizers. Perfect for frequent travelers.',
    category: 'Travel & Luggage',
    location: 'Bangalore, Karnataka',
    seller: 'Travel Gear Shop',
  },
  'nikon-dslr-camera': {
    title: 'Nikon DSLR Camera',
    price: '₹45,000',
    description: 'Professional DSLR camera with 24MP sensor, excellent condition with all accessories.',
    category: 'Cameras & Photography',
    location: 'Delhi, NCR',
    seller: 'Camera World',
  },
  'modern-office-chair': {
    title: 'Modern Office Chair',
    price: '₹8,999',
    description: 'Ergonomic office chair with lumbar support, breathable mesh, and adjustable features.',
    category: 'Furniture',
    location: 'Pune, Maharashtra',
    seller: 'Office Furniture Hub',
  },
  'executive-meeting-chair': {
    title: 'Executive Meeting Chair',
    price: '₹12,999',
    description: 'Premium executive chair for meetings and conferences. Leather finish with excellent comfort.',
    category: 'Furniture',
    location: 'Hyderabad, Telangana',
    seller: 'Premium Furniture',
  },
  'story-book-collection': {
    title: 'Story Book Collection',
    price: '₹2,499',
    description: 'Collection of 50+ classic story books for children. Great condition, educational content.',
    category: 'Books',
    location: 'Chennai, Tamil Nadu',
    seller: 'BookStore Online',
  },
  'cctv-security-camera': {
    title: 'CCTV Security Camera',
    price: '₹6,999',
    description: '8-channel CCTV system with night vision, motion detection, and mobile app support.',
    category: 'Electronics',
    location: 'Kolkata, West Bengal',
    seller: 'Security Systems',
  },
  'samsung-galaxy-s24': {
    title: 'Samsung Galaxy S24',
    price: '₹89,999',
    description: 'Latest Samsung flagship with AI features, excellent camera, and powerful performance.',
    category: 'Electronics',
    location: 'Mumbai, Maharashtra',
    seller: 'Mobile World',
  },
  'designer-handbag': {
    title: 'Designer Handbag',
    price: '₹15,999',
    description: 'Authentic designer handbag, genuine leather, barely used with dust bag and certificate.',
    category: 'Fashion',
    location: 'Delhi, NCR',
    seller: 'Luxury Fashion Store',
  },
  'gaming-laptop': {
    title: 'Gaming Laptop',
    price: '₹95,000',
    description: 'High-performance gaming laptop with RTX 4060, Intel i7, 16GB RAM, and 144Hz display.',
    category: 'Electronics',
    location: 'Bangalore, Karnataka',
    seller: 'Tech Gaming Store',
  },
  'vintage-watch': {
    title: 'Vintage Watch',
    price: '₹35,000',
    description: 'Rare vintage watch from 1980s, working condition, collector\'s item with authenticity certificate.',
    category: 'Accessories',
    location: 'Jaipur, Rajasthan',
    seller: 'Vintage Collections',
  },
  'home-theater-system': {
    title: 'Home Theater System',
    price: '₹42,000',
    description: '5.1 channel home theater with powerful subwoofer, Bluetooth connectivity, and remote control.',
    category: 'Electronics',
    location: 'Ahmedabad, Gujarat',
    seller: 'Audio Solutions',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const listing = allListings[slug]

  if (!listing) {
    return {
      title: 'Listing Not Found | InfoLive List',
      description: 'The requested listing could not be found. Browse other listings on InfoLive.',
    }
  }

  const title = `${listing.title} - ${listing.price} | Buy in ${listing.location} | InfoLive List`
  const description = `${listing.description} Listed in ${listing.category}. Contact ${listing.seller} to buy this product in ${listing.location}. Genuine sellers, verified listings.`
  const url = `${siteConfig.url}/listing/${slug}`

  return {
    title,
    description,
    keywords: [
      listing.title,
      `buy ${listing.title}`,
      `${listing.title} price`,
      listing.category,
      `${listing.category} for sale`,
      listing.location,
      `buy in ${listing.location}`,
      'classified ads',
      'online marketplace',
      'buy sell',
      'second hand',
      'local listings',
    ],
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    publisher: siteConfig.creator,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: `${siteConfig.url}/og-listing.jpg`,
          width: 1200,
          height: 630,
          alt: listing.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@infolive',
      images: [`${siteConfig.url}/og-listing.jpg`],
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
      google: siteConfig.verification.google,
    },
  }
}
