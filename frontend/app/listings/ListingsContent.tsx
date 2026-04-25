'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getAllStates } from '../lib/india-locations';

export default function ListingsContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const locationFromUrl = searchParams.get('location');
  const stateFromUrl = searchParams.get('state');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'All Categories');
  const [selectedLocation, setSelectedLocation] = useState(locationFromUrl || stateFromUrl || 'All Locations');
  const [currentPage, setCurrentPage] = useState(1);

  const states = getAllStates();

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
    if (locationFromUrl || stateFromUrl) {
      setSelectedLocation(locationFromUrl || stateFromUrl || 'All Locations');
    }
  }, [categoryFromUrl, locationFromUrl, stateFromUrl]);

  const categories = [
    { name: 'All Categories', count: 200 },
    { name: 'Technology', count: 35 },
    { name: 'Business', count: 22 },
    { name: 'Health & Wellness', count: 55 },
    { name: 'Education', count: 21 },
    { name: 'Lifestyle', count: 44 },
    { name: 'Science', count: 65 },
    { name: 'Entertainment', count: 22 },
    { name: 'Sports', count: 25 },
    { name: 'Travel', count: 42 },
    { name: 'Food & Cooking', count: 32 },
    { name: 'Fashion', count: 15 },
    { name: 'Finance', count: 65 },
  ];

  const listings = [
    {
      id: 1,
      title: 'Apple iPhone 15 Pro',
      category: 'Technology',
      location: 'Mumbai, Maharashtra',
      state: 'Maharashtra',
      district: 'Mumbai',
      city: 'Mumbai',
      price: 890.00,
      type: 'Sale' as const,
      image: '📱',
      description: 'Latest iPhone with advanced camera system and A17 Pro chip',
      datePosted: '2 days ago',
      slug: 'apple-iphone-15-pro'
    },
    {
      id: 2,
      title: 'Professional Travel Kit',
      category: 'Business',
      location: 'Delhi',
      state: 'Delhi',
      district: 'Central Delhi',
      city: 'Connaught Place',
      price: 580.00,
      type: 'Sale' as const,
      image: '🎒',
      description: 'Complete travel essentials for business professionals',
      datePosted: '1 week ago',
      slug: 'professional-travel-kit'
    },
    {
      id: 3,
      title: 'Nikon DSLR Camera',
      category: 'Electronics',
      location: 'Bengaluru, Karnataka',
      state: 'Karnataka',
      district: 'Bengaluru Urban',
      city: 'Bengaluru',
      price: 560.00,
      type: 'Sale' as const,
      image: '📷',
      description: 'Professional DSLR camera with multiple lenses included',
      datePosted: '3 days ago',
      slug: 'nikon-dslr-camera'
    },
    {
      id: 4,
      title: 'Modern Office Chair',
      category: 'Furniture',
      location: 'Pune, Maharashtra',
      state: 'Maharashtra',
      district: 'Pune',
      city: 'Pune',
      price: 85.00,
      type: 'Sale' as const,
      image: '🪑',
      description: 'Ergonomic office chair for comfortable working',
      datePosted: '5 days ago',
      slug: 'modern-office-chair'
    },
    {
      id: 5,
      title: 'Executive Meeting Chair',
      category: 'Furniture',
      location: 'Chennai, Tamil Nadu',
      state: 'Tamil Nadu',
      district: 'Chennai',
      city: 'Chennai',
      price: 750.00,
      type: 'Sale' as const,
      image: '🪑',
      description: 'Premium executive chair for office meetings',
      datePosted: '1 day ago',
      slug: 'executive-meeting-chair'
    },
    {
      id: 6,
      title: 'Story Book Collection',
      category: 'Education',
      location: 'Kolkata, West Bengal',
      state: 'West Bengal',
      district: 'Kolkata',
      city: 'Kolkata',
      price: 120.00,
      type: 'Rent' as const,
      image: '📚',
      description: 'Complete collection of classic story books',
      datePosted: '4 days ago',
      slug: 'story-book-collection'
    },
    {
      id: 7,
      title: 'CCTV Security Camera',
      category: 'Electronics',
      location: 'Hyderabad, Telangana',
      state: 'Telangana',
      district: 'Hyderabad',
      city: 'Hyderabad',
      price: 350.00,
      type: 'Sale' as const,
      image: '📹',
      description: 'High-definition security camera system',
      datePosted: '6 days ago',
      slug: 'cctv-security-camera'
    },
    {
      id: 8,
      title: 'Samsung Galaxy S24',
      category: 'Technology',
      location: 'Ahmedabad, Gujarat',
      state: 'Gujarat',
      district: 'Ahmedabad',
      city: 'Ahmedabad',
      price: 299.00,
      type: 'Sale' as const,
      image: '📱',
      description: 'Latest Samsung smartphone with advanced features',
      datePosted: '2 days ago',
      slug: 'samsung-galaxy-s24'
    },
    {
      id: 9,
      title: 'Designer Handbag',
      category: 'Fashion',
      location: 'Jaipur, Rajasthan',
      state: 'Rajasthan',
      district: 'Jaipur',
      city: 'Jaipur',
      price: 450.00,
      type: 'Sale' as const,
      image: '👜',
      description: 'Luxury designer handbag in excellent condition',
      datePosted: '1 week ago',
      slug: 'designer-handbag'
    },
    {
      id: 10,
      title: 'Gaming Laptop',
      category: 'Technology',
      location: 'Kochi, Kerala',
      state: 'Kerala',
      district: 'Kochi',
      city: 'Kochi',
      price: 1200.00,
      type: 'Sale' as const,
      image: '💻',
      description: 'High-performance gaming laptop with RTX graphics',
      datePosted: '3 days ago',
      slug: 'gaming-laptop'
    },
    {
      id: 11,
      title: 'Vintage Watch',
      category: 'Accessories',
      location: 'Ludhiana, Punjab',
      state: 'Punjab',
      district: 'Ludhiana',
      city: 'Ludhiana',
      price: 800.00,
      type: 'Sale' as const,
      image: '⌚',
      description: 'Classic vintage watch in perfect working condition',
      datePosted: '5 days ago',
      slug: 'vintage-watch'
    },
    {
      id: 12,
      title: 'Home Theater System',
      category: 'Electronics',
      location: 'Lucknow, Uttar Pradesh',
      state: 'Uttar Pradesh',
      district: 'Lucknow',
      city: 'Lucknow',
      price: 650.00,
      type: 'Sale' as const,
      image: '🎬',
      description: 'Complete home theater system with surround sound',
      datePosted: '2 days ago',
      slug: 'home-theater-system'
    }
  ];

  const filteredListings = listings.filter(listing => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === '' || 
                         listing.title.toLowerCase().includes(searchLower) ||
                         listing.description.toLowerCase().includes(searchLower) ||
                         listing.category.toLowerCase().includes(searchLower) ||
                         listing.location.toLowerCase().includes(searchLower);
    const matchesCategory = selectedCategory === 'All Categories' || listing.category === selectedCategory;
    const matchesLocation = selectedLocation === '' || selectedLocation === 'All Locations' ||
                           listing.state?.toLowerCase() === selectedLocation.toLowerCase() ||
                           listing.city?.toLowerCase().includes(selectedLocation.toLowerCase()) ||
                           listing.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentListings = filteredListings.slice(startIndex, endIndex);

  const locations = [
    'Chicago', 'New York City', 'San Francisco', 'Washington', 'Boston',
    'Los Angeles', 'Seattle', 'Las Vegas', 'San Diego'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Login', href: '/login' },
    { name: 'Sign Up', href: '/signup' },
    { name: 'Help & Support', href: '/support' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-rose-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Listings</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover amazing products and services in our marketplace
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
                <span className="text-gray-900 font-medium">Listings</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="lg:col-span-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search ads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  const category = e.target.value;
                  setSelectedCategory(category);
                  const params = new URLSearchParams();
                  if (category !== 'All Categories') params.append('category', category);
                  if (selectedLocation !== 'All Locations') params.append('location', selectedLocation);
                  window.location.href = params.toString() ? `/listings?${params.toString()}` : '/listings';
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => {
                  const location = e.target.value;
                  setSelectedLocation(location);
                  const params = new URLSearchParams();
                  if (selectedCategory !== 'All Categories') params.append('category', selectedCategory);
                  if (location !== 'All Locations') params.append('location', location);
                  window.location.href = params.toString() ? `/listings?${params.toString()}` : '/listings';
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option value="All Locations">All Locations</option>
                <optgroup label="States">
                  {states.map((state) => (
                    <option key={state.slug} value={state.name}>
                      {state.name} ({state.totalListings})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Popular Cities">
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Pune">Pune</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Kochi">Kochi</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">All Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.name === 'All Categories' ? '/listings' : `/listings?category=${encodeURIComponent(category.name)}`}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category.name
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.name} ({category.count})
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Listings Grid */}
            <div className="flex-1">
              <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredListings.length)} of {filteredListings.length} ads found
                </h2>
                {selectedLocation && selectedLocation !== 'All Locations' && (
                  <div className="flex items-center gap-2">
                    <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">
                      📍 {selectedLocation}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedLocation('All Locations');
                        const params = new URLSearchParams();
                        if (selectedCategory !== 'All Categories') params.append('category', selectedCategory);
                        window.location.href = params.toString() ? `/listings?${params.toString()}` : '/listings';
                      }}
                      className="text-sm text-rose-600 hover:text-rose-800"
                    >
                      ✕ Clear
                    </button>
                  </div>
                )}
              </div>

              {currentListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentListings.map((listing) => (
                  <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          listing.type === 'Sale' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          #{listing.type}
                        </span>
                        <span className="text-sm text-gray-500">{listing.datePosted}</span>
                      </div>
                      
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{listing.image}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{listing.title}</h3>
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Link 
                            href={`/listings?category=${encodeURIComponent(listing.category)}`}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full hover:bg-blue-200"
                          >
                            {listing.category}
                          </Link>
                          <Link
                            href={`/listings?location=${listing.city}`}
                            className="text-xs text-gray-600 hover:text-rose-600"
                          >
                            📍 {listing.location}
                          </Link>
                        </div>
                        <p className="text-sm text-gray-500">{listing.description}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">${listing.price.toFixed(2)}</span>
                    <Link
                      href={`/listing/${listing.slug}`}
                      className="bg-rose-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-rose-700 transition-colors duration-200 inline-block"
                    >
                      View Details
                    </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600 mb-4">No listings found matching your search.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All Categories');
                      window.location.href = '/listings';
                    }}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && currentListings.length > 0 && (
                <div className="flex justify-center mt-8">
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                          currentPage === page
                            ? 'bg-rose-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
