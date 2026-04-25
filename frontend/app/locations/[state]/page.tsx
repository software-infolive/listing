'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getStateBySlug } from '../../lib/india-locations';

export default function StateDetail() {
  const params = useParams();
  const [state, setState] = useState(getStateBySlug(params.state as string));
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const stateData = getStateBySlug(params.state as string);
    setState(stateData);
  }, [params.state]);

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">State Not Found</h1>
          <Link href="/locations" className="text-rose-600 hover:text-rose-800">
            Back to Locations
          </Link>
        </div>
      </div>
    );
  }

  const filteredDistricts = state.districts.filter(district =>
    district.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-rose-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{state.name}</h1>
            <p className="text-xl mb-2">Capital: {state.capital}</p>
            <p className="text-rose-100">{state.famousFor}</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li><Link href="/locations" className="text-gray-500 hover:text-gray-700">Locations</Link></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li><span className="text-gray-900 font-medium">{state.name}</span></li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search districts..."
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

      {/* Districts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Districts in {state.name}</h2>
            <p className="text-xl text-gray-600">{state.totalListings.toLocaleString()} total listings</p>
          </div>

          {filteredDistricts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDistricts.map((district) => (
                <Link
                  key={district.slug}
                  href={`/locations/${state.slug}/${district.slug}`}
                  className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-rose-300 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                      {district.name}
                    </h3>
                    <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium">
                      {district.listingsCount}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {district.cities.length} {district.cities.length === 1 ? 'city' : 'cities'}
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
              <p className="text-xl text-gray-600 mb-4">No districts found matching &ldquo;{searchTerm}&rdquo;</p>
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
    </div>
  );
}
