'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getDistrictBySlug, getStateBySlug } from '../../../lib/india-locations';

export default function DistrictDetail() {
  const params = useParams();
  const [state, setState] = useState(getStateBySlug(params.state as string));
  const [district, setDistrict] = useState(getDistrictBySlug(params.state as string, params.district as string));
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const stateData = getStateBySlug(params.state as string);
    const districtData = getDistrictBySlug(params.state as string, params.district as string);
    setState(stateData);
    setDistrict(districtData);
  }, [params.state, params.district]);

  if (!state || !district) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">District Not Found</h1>
          <Link href="/locations" className="text-rose-600 hover:text-rose-800">
            Back to Locations
          </Link>
        </div>
      </div>
    );
  }

  const filteredCities = district.cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-rose-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{district.name}</h1>
            <p className="text-xl mb-2">{state.name}</p>
            <p className="text-rose-100">{district.listingsCount} listings available</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li><Link href="/locations" className="text-gray-500 hover:text-gray-700">Locations</Link></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li><Link href={`/locations/${state.slug}`} className="text-gray-500 hover:text-gray-700">{state.name}</Link></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li><span className="text-gray-900 font-medium">{district.name}</span></li>
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
                placeholder="Search cities..."
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

      {/* Cities Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cities in {district.name}</h2>
            <p className="text-xl text-gray-600">{district.cities.length} {district.cities.length === 1 ? 'city' : 'cities'} available</p>
          </div>

          {filteredCities.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${state.slug}/${district.slug}/${city.slug}`}
                  className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-rose-300 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-sm text-gray-600">Population: {city.population}</p>
                    </div>
                    <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium">
                      {city.listingsCount}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {city.famousFor}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-rose-600 group-hover:text-rose-800">
                      View listings →
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
              <p className="text-xl text-gray-600 mb-4">No cities found matching &ldquo;{searchTerm}&rdquo;</p>
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
