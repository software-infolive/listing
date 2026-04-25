'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'Technology', count: 35, icon: '💻', color: 'bg-blue-100 text-blue-600' },
    { name: 'Business', count: 22, icon: '💼', color: 'bg-green-100 text-green-600' },
    { name: 'Health & Wellness', count: 55, icon: '🏥', color: 'bg-red-100 text-red-600' },
    { name: 'Education', count: 21, icon: '📚', color: 'bg-purple-100 text-purple-600' },
    { name: 'Lifestyle', count: 44, icon: '🌟', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Science', count: 65, icon: '🔬', color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Entertainment', count: 22, icon: '🎬', color: 'bg-pink-100 text-pink-600' },
    { name: 'Sports', count: 25, icon: '⚽', color: 'bg-orange-100 text-orange-600' },
    { name: 'Travel', count: 42, icon: '✈️', color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Food & Cooking', count: 32, icon: '🍳', color: 'bg-amber-100 text-amber-600' },
    { name: 'Fashion', count: 15, icon: '👗', color: 'bg-rose-100 text-rose-600' },
    { name: 'Finance', count: 65, icon: '💰', color: 'bg-emerald-100 text-emerald-600' },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const locations = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Categories</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Explore our comprehensive collection of information categories
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
                <span className="text-gray-900 font-medium">Categories</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover information across various categories tailored to your interests and needs.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search categories by keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCategories.map((category, index) => (
              <Link
                key={index}
                href={`/listings?category=${encodeURIComponent(category.name)}`}
                className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.count} articles
                  </p>
                </div>
              </Link>
            ))}
          </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No categories found matching &ldquo;{searchTerm}&rdquo;</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 text-rose-600 hover:text-rose-800 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Newsletter</h2>
            <p className="text-xl text-gray-600 mb-8">
              We don&apos;t send spam so don&apos;t worry.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
