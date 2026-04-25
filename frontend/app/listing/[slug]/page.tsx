'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface ListingDetail {
  id: number;
  title: string;
  category: string;
  location: string;
  price: number;
  type: 'Sale' | 'Rent';
  description: string;
  images: string[];
  seller: {
    name: string;
    phone: string;
    email: string;
    rating: number;
    listingsCount: number;
    joinDate: string;
  };
  specifications: {
    [key: string]: string;
  };
  features: string[];
  datePosted: string;
  views: number;
  condition: string;
  brand?: string;
  model?: string;
}

// Mock data - in real app, this would come from API based on slug
const allListings: { [key: string]: ListingDetail } = {
    'apple-iphone-15-pro': {
      id: 1,
      title: 'Apple iPhone 15 Pro',
      category: 'Technology',
      location: 'Boston, MA',
      price: 890.00,
      type: 'Sale',
      description: 'Latest iPhone with advanced camera system and A17 Pro chip. Brand new condition with original box and accessories included.',
      images: ['📱', '📱', '📱', '📱'],
      seller: {
        name: 'John Smith',
        phone: '+1 (555) 123-4567',
        email: 'john.smith@email.com',
        rating: 4.8,
        listingsCount: 12,
        joinDate: '2023-01-15'
      },
      specifications: {
        'Brand': 'Apple',
        'Model': 'iPhone 15 Pro',
        'Storage': '256GB',
        'Color': 'Space Black',
        'Condition': 'Brand New',
        'Warranty': '1 year Apple warranty'
      },
      features: [
        'A17 Pro chip with 6-core GPU',
        'Pro camera system',
        'Titanium design',
        'Action Button',
        'USB-C connectivity',
        'Face ID'
      ],
      datePosted: '2 days ago',
      views: 1247,
      condition: 'Brand New',
      brand: 'Apple',
      model: 'iPhone 15 Pro'
    },
    'professional-travel-kit': {
      id: 2,
      title: 'Professional Travel Kit',
      category: 'Services',
      location: 'San Francisco, CA',
      price: 580.00,
      type: 'Sale',
      description: 'Complete travel essentials for business professionals. Includes premium luggage, travel accessories, and organizational tools for the modern traveler.',
      images: ['🎒', '🎒', '🎒', '🎒'],
      seller: {
        name: 'Sarah Johnson',
        phone: '+1 (555) 234-5678',
        email: 'sarah.j@email.com',
        rating: 4.9,
        listingsCount: 8,
        joinDate: '2023-05-20'
      },
      specifications: {
        'Brand': 'TravelPro',
        'Material': 'Premium Nylon',
        'Capacity': '50L',
        'Weight': '3.5kg',
        'Color': 'Black',
        'Warranty': '2 years'
      },
      features: [
        'TSA approved locks',
        'Multiple compartments',
        'Laptop sleeve (17 inch)',
        'Water resistant',
        'Smooth rolling wheels',
        'Telescopic handle'
      ],
      datePosted: '1 week ago',
      views: 856,
      condition: 'New',
      brand: 'TravelPro',
      model: 'Professional Series'
    },
    'nikon-dslr-camera': {
      id: 3,
      title: 'Nikon DSLR Camera',
      category: 'Electronics',
      location: 'Alaska, USA',
      price: 560.00,
      type: 'Sale',
      description: 'Professional DSLR camera with multiple lenses included. Perfect for photography enthusiasts and professionals. Excellent condition.',
      images: ['📷', '📷', '📷', '📷'],
      seller: {
        name: 'Mike Chen',
        phone: '+1 (555) 345-6789',
        email: 'mike.chen@email.com',
        rating: 4.7,
        listingsCount: 15,
        joinDate: '2022-11-10'
      },
      specifications: {
        'Brand': 'Nikon',
        'Model': 'D7500',
        'Megapixels': '20.9 MP',
        'ISO Range': '100-51200',
        'Video': '4K UHD',
        'Screen': '3.2 inch touchscreen'
      },
      features: [
        '20.9 MP DX-format sensor',
        '4K UHD video recording',
        '51-point AF system',
        'Built-in Wi-Fi and Bluetooth',
        'Dual SD card slots',
        'Weather-sealed body'
      ],
      datePosted: '3 days ago',
      views: 1105,
      condition: 'Excellent',
      brand: 'Nikon',
      model: 'D7500'
    },
    'modern-office-chair': {
      id: 4,
      title: 'Modern Office Chair',
      category: 'Furniture',
      location: 'Las Vegas, NV',
      price: 85.00,
      type: 'Sale',
      description: 'Ergonomic office chair for comfortable working. Features adjustable height, lumbar support, and breathable mesh back. Perfect for home office or workspace.',
      images: ['🪑', '🪑', '🪑', '🪑'],
      seller: {
        name: 'David Martinez',
        phone: '+1 (555) 456-7890',
        email: 'david.m@email.com',
        rating: 4.6,
        listingsCount: 9,
        joinDate: '2023-03-15'
      },
      specifications: {
        'Brand': 'ErgoComfort',
        'Material': 'Mesh & Steel',
        'Weight Capacity': '300 lbs',
        'Height Adjustable': 'Yes',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      features: [
        'Ergonomic design',
        'Adjustable lumbar support',
        'Breathable mesh back',
        '360-degree swivel',
        'Smooth rolling casters',
        'Adjustable armrests'
      ],
      datePosted: '5 days ago',
      views: 542,
      condition: 'Like New',
      brand: 'ErgoComfort',
      model: 'EC-2000'
    },
    'executive-meeting-chair': {
      id: 5,
      title: 'Executive Meeting Chair',
      category: 'Furniture',
      location: 'Alaska, USA',
      price: 750.00,
      type: 'Sale',
      description: 'Premium executive chair for office meetings. High-quality leather upholstery with advanced ergonomic features. Perfect for executive offices and conference rooms.',
      images: ['🪑', '🪑', '🪑', '🪑'],
      seller: {
        name: 'Robert Wilson',
        phone: '+1 (555) 567-8901',
        email: 'robert.w@email.com',
        rating: 4.9,
        listingsCount: 6,
        joinDate: '2023-06-01'
      },
      specifications: {
        'Brand': 'Executive Pro',
        'Material': 'Genuine Leather',
        'Weight Capacity': '350 lbs',
        'Recline': 'Yes, up to 135°',
        'Color': 'Brown',
        'Warranty': '3 years'
      },
      features: [
        'Premium leather upholstery',
        'Multi-position recline',
        'Adjustable headrest',
        'Padded armrests',
        'Heavy-duty base',
        'Silent rolling wheels'
      ],
      datePosted: '1 day ago',
      views: 923,
      condition: 'New',
      brand: 'Executive Pro',
      model: 'EP-Executive'
    },
    'story-book-collection': {
      id: 6,
      title: 'Story Book Collection',
      category: 'Books & Magazine',
      location: 'New York, NY',
      price: 120.00,
      type: 'Rent',
      description: 'Complete collection of classic story books. Perfect for children and young readers. Includes timeless tales and illustrated editions.',
      images: ['📚', '📚', '📚', '📚'],
      seller: {
        name: 'Emily Brown',
        phone: '+1 (555) 678-9012',
        email: 'emily.b@email.com',
        rating: 4.8,
        listingsCount: 18,
        joinDate: '2022-09-20'
      },
      specifications: {
        'Number of Books': '25 books',
        'Condition': 'Very Good',
        'Age Range': '6-12 years',
        'Language': 'English',
        'Publisher': 'Various',
        'Rental Period': 'Monthly'
      },
      features: [
        'Classic children\'s stories',
        'Illustrated editions',
        'Hardcover books',
        'Educational content',
        'Age-appropriate',
        'Well-maintained'
      ],
      datePosted: '4 days ago',
      views: 645,
      condition: 'Very Good',
      brand: 'Various Publishers',
      model: 'Classic Collection'
    },
    'cctv-security-camera': {
      id: 7,
      title: 'CCTV Security Camera',
      category: 'Electronics',
      location: 'Delhi, India',
      price: 350.00,
      type: 'Sale',
      description: 'High-definition security camera system. Complete with 4 cameras, DVR, and all necessary cables. Perfect for home or business security.',
      images: ['📹', '📹', '📹', '📹'],
      seller: {
        name: 'Raj Patel',
        phone: '+91 98765 43210',
        email: 'raj.patel@email.com',
        rating: 4.7,
        listingsCount: 11,
        joinDate: '2023-02-10'
      },
      specifications: {
        'Resolution': '1080p Full HD',
        'Cameras Included': '4',
        'Storage': '1TB HDD',
        'Night Vision': 'Yes, up to 30m',
        'Weather Proof': 'Yes (IP66)',
        'Warranty': '2 years'
      },
      features: [
        '1080p Full HD recording',
        'Night vision capability',
        'Motion detection',
        'Remote viewing via app',
        'Weather-resistant cameras',
        'Easy installation'
      ],
      datePosted: '6 days ago',
      views: 789,
      condition: 'New',
      brand: 'SecureCam',
      model: 'SC-4CAM-1080'
    },
    'samsung-galaxy-s24': {
      id: 8,
      title: 'Samsung Galaxy S24',
      category: 'Technology',
      location: 'Delaware, USA',
      price: 299.00,
      type: 'Sale',
      description: 'Latest Samsung smartphone with advanced features. Excellent condition with minimal usage. Includes original charger and protective case.',
      images: ['📱', '📱', '📱', '📱'],
      seller: {
        name: 'Lisa Anderson',
        phone: '+1 (555) 789-0123',
        email: 'lisa.a@email.com',
        rating: 4.9,
        listingsCount: 7,
        joinDate: '2023-04-15'
      },
      specifications: {
        'Brand': 'Samsung',
        'Model': 'Galaxy S24',
        'Storage': '128GB',
        'RAM': '8GB',
        'Color': 'Phantom Black',
        'Battery': '4000mAh'
      },
      features: [
        '6.2-inch Dynamic AMOLED display',
        '50MP triple camera system',
        '5G connectivity',
        'Fast wireless charging',
        'Water resistant (IP68)',
        'Android 14'
      ],
      datePosted: '2 days ago',
      views: 1032,
      condition: 'Excellent',
      brand: 'Samsung',
      model: 'Galaxy S24'
    },
    'designer-handbag': {
      id: 9,
      title: 'Designer Handbag',
      category: 'Fashion',
      location: 'Los Angeles, CA',
      price: 450.00,
      type: 'Sale',
      description: 'Luxury designer handbag in excellent condition. Authentic with original dust bag and authenticity card. Timeless style perfect for any occasion.',
      images: ['👜', '👜', '👜', '👜'],
      seller: {
        name: 'Jessica Taylor',
        phone: '+1 (555) 890-1234',
        email: 'jessica.t@email.com',
        rating: 4.8,
        listingsCount: 14,
        joinDate: '2022-12-05'
      },
      specifications: {
        'Brand': 'Michael Kors',
        'Material': 'Genuine Leather',
        'Color': 'Brown',
        'Dimensions': '12" x 10" x 5"',
        'Authenticity': 'Verified',
        'Condition': 'Like New'
      },
      features: [
        'Genuine leather',
        'Gold-tone hardware',
        'Multiple compartments',
        'Adjustable strap',
        'Dust bag included',
        'Authenticity card'
      ],
      datePosted: '1 week ago',
      views: 876,
      condition: 'Like New',
      brand: 'Michael Kors',
      model: 'Signature Collection'
    },
    'gaming-laptop': {
      id: 10,
      title: 'Gaming Laptop',
      category: 'Technology',
      location: 'Chicago, IL',
      price: 1200.00,
      type: 'Sale',
      description: 'High-performance gaming laptop with RTX graphics. Perfect for gaming, video editing, and professional work. Excellent condition with upgraded RAM.',
      images: ['💻', '💻', '💻', '💻'],
      seller: {
        name: 'Alex Thompson',
        phone: '+1 (555) 901-2345',
        email: 'alex.t@email.com',
        rating: 4.9,
        listingsCount: 5,
        joinDate: '2023-07-20'
      },
      specifications: {
        'Brand': 'ASUS ROG',
        'Processor': 'Intel Core i7-12700H',
        'RAM': '32GB DDR5',
        'GPU': 'NVIDIA RTX 3070',
        'Storage': '1TB NVMe SSD',
        'Display': '15.6" 165Hz'
      },
      features: [
        'RTX 3070 graphics card',
        '165Hz refresh rate display',
        'RGB backlit keyboard',
        'Advanced cooling system',
        'Thunderbolt 4 port',
        'Wi-Fi 6E'
      ],
      datePosted: '3 days ago',
      views: 1456,
      condition: 'Excellent',
      brand: 'ASUS',
      model: 'ROG Strix G15'
    },
    'vintage-watch': {
      id: 11,
      title: 'Vintage Watch',
      category: 'Accessories',
      location: 'Miami, FL',
      price: 800.00,
      type: 'Sale',
      description: 'Classic vintage watch in perfect working condition. Timeless design with mechanical movement. Comes with original box and service history.',
      images: ['⌚', '⌚', '⌚', '⌚'],
      seller: {
        name: 'Christopher Lee',
        phone: '+1 (555) 012-3456',
        email: 'chris.lee@email.com',
        rating: 4.9,
        listingsCount: 13,
        joinDate: '2022-08-15'
      },
      specifications: {
        'Brand': 'Omega',
        'Model': 'Seamaster',
        'Year': '1965',
        'Movement': 'Automatic',
        'Case Material': 'Stainless Steel',
        'Strap': 'Leather'
      },
      features: [
        'Mechanical automatic movement',
        'Original dial',
        'Recently serviced',
        'Water resistant',
        'Original box included',
        'Service history available'
      ],
      datePosted: '5 days ago',
      views: 1234,
      condition: 'Excellent',
      brand: 'Omega',
      model: 'Seamaster Vintage'
    },
    'home-theater-system': {
      id: 12,
      title: 'Home Theater System',
      category: 'Electronics',
      location: 'Seattle, WA',
      price: 650.00,
      type: 'Sale',
      description: 'Complete home theater system with surround sound. Includes receiver, 5.1 speakers, subwoofer, and all cables. Perfect for movie enthusiasts.',
      images: ['🎬', '🎬', '🎬', '🎬'],
      seller: {
        name: 'Daniel Garcia',
        phone: '+1 (555) 123-4567',
        email: 'daniel.g@email.com',
        rating: 4.8,
        listingsCount: 10,
        joinDate: '2023-01-25'
      },
      specifications: {
        'Brand': 'Sony',
        'Configuration': '5.1 Surround',
        'Power Output': '1000W',
        'HDMI Inputs': '4',
        '4K Support': 'Yes',
        'Bluetooth': 'Yes'
      },
      features: [
        '5.1 surround sound',
        '4K HDR pass-through',
        'Wireless subwoofer',
        'Bluetooth streaming',
        'Multiple HDMI inputs',
        'Easy setup'
      ],
      datePosted: '2 days ago',
      views: 967,
      condition: 'Excellent',
      brand: 'Sony',
      model: 'HT-S7000'
    }
};

export default function ListingDetail() {
  const params = useParams();
  const [listing, setListing] = useState<ListingDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Simulate API call - in real app, fetch by slug
    const slug = params.slug as string;
    setTimeout(() => {
      const foundListing = allListings[slug];
      if (foundListing) {
        setListing(foundListing);
      }
      setIsLoading(false);
    }, 500);
  }, [params.slug]);

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent to seller!');
    setShowContactForm(false);
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  const relatedListings = [
    {
      id: 2,
      title: 'Samsung Galaxy S24 Ultra 512GB',
      price: 75000,
      location: 'Delhi, India',
      image: '📱',
      type: 'Sale',
      slug: 'samsung-galaxy-s24-ultra-512gb'
    },
    {
      id: 3,
      title: 'OnePlus 12 Pro 256GB',
      price: 55000,
      location: 'Bangalore, India',
      image: '📱',
      type: 'Sale',
      slug: 'oneplus-12-pro-256gb'
    },
    {
      id: 4,
      title: 'Google Pixel 8 Pro 128GB',
      price: 65000,
      location: 'Pune, India',
      image: '📱',
      type: 'Sale',
      slug: 'google-pixel-8-pro-128gb'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-rose-600" role="status" aria-label="Loading"></div>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Listing Not Found</h1>
          <Link href="/listings" className="text-blue-600 hover:text-blue-800">
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
                <Link href="/listings" className="text-gray-500 hover:text-gray-700">
                  Listings
                </Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
                <span className="text-gray-900 font-medium">{listing.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Images */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-6xl">
                    {listing.images[selectedImage]}
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {listing.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-2xl ${
                          selectedImage === index ? 'ring-2 ring-blue-500' : ''
                        }`}
                      >
                        {image}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      listing.type === 'Sale' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      #{listing.type}
                    </span>
                    <h1 className="text-2xl font-bold text-gray-900 mt-2">{listing.title}</h1>
                    <p className="text-gray-600 mt-1">{listing.location}</p>
                  </div>
                  
                  <div className="text-3xl font-bold text-gray-900">
                    ₹{listing.price.toLocaleString()}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{listing.views} views</span>
                    <span>•</span>
                    <span>Posted {listing.datePosted}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{listing.description}</p>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(listing.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">{key}</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {listing.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Seller Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Seller Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-blue-600">
                      {listing.seller.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{listing.seller.name}</h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(listing.seller.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{listing.seller.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">
                  <p>{listing.seller.listingsCount} listings</p>
                  <p>Member since {listing.seller.joinDate.split('-')[0]}</p>
                </div>

                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-rose-700 transition-colors duration-200"
                >
                  Contact Seller
                </button>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Safety Tips</h3>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li>• Meet in a public place</li>
                <li>• Inspect the item before payment</li>
                <li>• Use secure payment methods</li>
                <li>• Trust your instincts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Listings */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedListings.map((item) => (
              <Link
                key={item.id}
                href={`/listing/${item.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-4">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{item.image}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.location}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">₹{item.price.toLocaleString()}</span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      item.type === 'Sale' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      #{item.type}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Seller</h3>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactFormChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactFormChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleContactFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactFormChange}
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="I'm interested in this item..."
                />
              </div>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
