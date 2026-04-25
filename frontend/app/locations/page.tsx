'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getAllStates, getTotalListingsCount } from '../lib/india-locations';

export default function Locations() {
  const [searchTerm, setSearchTerm] = useState('');
  const states = getAllStates();
  const totalListings = getTotalListingsCount();

  const filteredStates = states.filter(state =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    state.capital.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-rose-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore India</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-4">
              Discover listings across states, districts, and cities of India
            </p>
            <p className="text-lg text-rose-100">
              {totalListings.toLocaleString()} listings across {states.length} states
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
                <span className="text-gray-900 font-medium">Locations</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search states by name or capital..."
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

      {/* States Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by State
            </h2>
            <p className="text-xl text-gray-600">
              Select a state to explore districts and cities
            </p>
          </div>

          {filteredStates.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStates.map((state) => (
                <Link
                  key={state.slug}
                  href={`/locations/${state.slug}`}
                  className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-rose-300 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors">
                        {state.name}
                      </h3>
                      <p className="text-sm text-gray-600">Capital: {state.capital}</p>
                    </div>
                    <div className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium">
                      {state.totalListings}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {state.famousFor}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {state.districts.length} districts
                    </span>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-rose-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">No states found matching &ldquo;{searchTerm}&rdquo;</p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-rose-600 hover:text-rose-800 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">{states.length}</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">
                {states.reduce((total, state) => total + state.districts.length, 0)}
              </div>
              <div className="text-gray-600">Districts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">
                {states.reduce((total, state) => 
                  total + state.districts.reduce((distTotal, dist) => distTotal + dist.cities.length, 0), 0
                )}
              </div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">{totalListings.toLocaleString()}</div>
              <div className="text-gray-600">Total Listings</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
