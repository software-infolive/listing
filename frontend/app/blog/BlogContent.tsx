'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { allBlogPosts, blogCategories, getBlogPostsByCategory } from '../lib/blog-data';

const POSTS_PER_PAGE = 6;

export default function BlogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || 'all';
  const pageFromUrl = parseInt(searchParams.get('page') || '1', 10);
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
      setFilteredPosts(getBlogPostsByCategory(categoryFromUrl));
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  const handleCategoryClick = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    const categoryPosts = getBlogPostsByCategory(categorySlug);
    setFilteredPosts(categoryPosts);
    setCurrentPage(1); // Reset to page 1 when category changes
    updateURL(categorySlug, 1);
  };

  // Apply search filter on top of category filter
  const searchFilteredPosts = filteredPosts.filter(post => {
    const searchLower = searchTerm.toLowerCase();
    return searchTerm === '' ||
           post.title.toLowerCase().includes(searchLower) ||
           post.excerpt.toLowerCase().includes(searchLower) ||
           post.category.toLowerCase().includes(searchLower) ||
           post.author.toLowerCase().includes(searchLower) ||
           post.tags.some(tag => tag.toLowerCase().includes(searchLower));
  });

  // Pagination calculations
  const totalPosts = searchFilteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const blogPosts = searchFilteredPosts.slice(startIndex, endIndex);

  // Reset to page 1 when search changes
  useEffect(() => {
    if (searchTerm !== '') {
      setCurrentPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const updateURL = (category: string, page: number) => {
    const params = new URLSearchParams();
    if (category !== 'all') {
      params.set('category', category);
    }
    if (page > 1) {
      params.set('page', page.toString());
    }
    const queryString = params.toString();
    const newUrl = queryString ? `/blog?${queryString}` : '/blog';
    router.push(newUrl, { scroll: false });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateURL(selectedCategory, page);
    // Scroll to top of blog posts section
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);
      
      // Calculate range around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push('...');
      }
      
      // Add pages around current page
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      
      // Show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-rose-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Stay informed with our latest articles, insights, and expert analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles by keyword, author, or tag..."
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
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog?category=${category.slug}`}
                onClick={() => handleCategoryClick(category.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.slug
                    ? "bg-rose-600 text-white"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category.name} ({category.count})
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-rose-600 to-rose-800 rounded-lg p-8 text-white mb-16">
            <div className="flex items-center mb-4">
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Future of Information: How AI is Transforming News and Media
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              An in-depth look at how artificial intelligence is revolutionizing the way we consume and create information, 
              and what this means for the future of journalism and media.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-blue-100">By Dr. Sarah Chen</span>
                <span className="text-blue-200">•</span>
                <span className="text-blue-100">March 18, 2024</span>
                <span className="text-blue-200">•</span>
                <span className="text-blue-100">12 min read</span>
              </div>
              <Link
                href="/blog/future-of-artificial-intelligence-2024"
                className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <div className="text-4xl mb-4">{post.image}</div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-rose-600 hover:text-rose-800 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">No articles found matching your search.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setFilteredPosts(allBlogPosts);
                }}
                className="text-rose-600 hover:text-rose-800 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss our latest articles and insights.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && blogPosts.length > 0 && (
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4">
              {/* Page Info */}
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1} - {Math.min(endIndex, totalPosts)} of {totalPosts} articles
              </div>

              {/* Pagination Controls */}
              <nav className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-rose-600'
                  }`}
                  aria-label="Previous page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((page, index) => (
                  <React.Fragment key={index}>
                    {page === '...' ? (
                      <span className="px-3 py-2 text-gray-400">...</span>
                    ) : (
                      <button
                        onClick={() => handlePageChange(page as number)}
                        className={`min-w-[40px] px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                          currentPage === page
                            ? 'bg-rose-600 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-rose-600'
                        }`}
                        aria-label={`Go to page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                      >
                        {page}
                      </button>
                    )}
                  </React.Fragment>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    currentPage === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-rose-600'
                  }`}
                  aria-label="Next page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>

              {/* Quick Jump (for more than 5 pages) */}
              {totalPages > 5 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Go to page:</span>
                  <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={currentPage}
                    onChange={(e) => {
                      const page = parseInt(e.target.value, 10);
                      if (page >= 1 && page <= totalPages) {
                        handlePageChange(page);
                      }
                    }}
                    className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <span className="text-sm text-gray-600">of {totalPages}</span>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
