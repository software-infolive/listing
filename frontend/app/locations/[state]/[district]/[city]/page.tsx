'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getCityBySlug, getDistrictBySlug, getStateBySlug } from '../../../../lib/india-locations';

export default function CityDetail() {
  const params = useParams();
  const [state, setState] = useState(getStateBySlug(params.state as string));
  const [district, setDistrict] = useState(getDistrictBySlug(params.state as string, params.district as string));
  const [city, setCity] = useState(getCityBySlug(params.state as string, params.district as string, params.city as string));

  useEffect(() => {
    const stateData = getStateBySlug(params.state as string);
    const districtData = getDistrictBySlug(params.state as string, params.district as string);
    const cityData = getCityBySlug(params.state as string, params.district as string, params.city as string);
    setState(stateData);
    setDistrict(districtData);
    setCity(cityData);
  }, [params.state, params.district, params.city]);

  if (!state || !district || !city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <Link href="/locations" className="text-rose-600 hover:text-rose-800">
            Back to Locations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-rose-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{city.name}</h1>
            <p className="text-xl mb-2">{district.name}, {state.name}</p>
            <p className="text-rose-100">Population: {city.population}</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center space-x-2 text-sm">
              <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li><Link href="/locations" className="text-gray-500 hover:text-gray-700">Locations</Link></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li><Link href={`/locations/${state.slug}`} className="text-gray-500 hover:text-gray-700">{state.name}</Link></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li><Link href={`/locations/${state.slug}/${district.slug}`} className="text-gray-500 hover:text-gray-700">{district.name}</Link></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li><span className="text-gray-900 font-medium">{city.name}</span></li>
            </ol>
          </nav>
        </div>
      </div>

      {/* City Information */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {city.name}</h2>
                <p className="text-gray-700 mb-4">
                  {city.name} is a vibrant city in {district.name} district of {state.name}. 
                  The city is famous for {city.famousFor}.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Population</h3>
                    <p className="text-2xl font-bold text-rose-600">{city.population}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Active Listings</h3>
                    <p className="text-2xl font-bold text-rose-600">{city.listingsCount}</p>
                  </div>
                </div>
              </div>

              {/* Listings CTA */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse Listings in {city.name}</h2>
                <p className="text-gray-700 mb-6">
                  Explore {city.listingsCount} listings available in {city.name}. 
                  Find products, services, and opportunities in your area.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/listings?location=${city.name}`}
                    className="inline-block bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors duration-200"
                  >
                    View All Listings
                  </Link>
                  <Link
                    href={`/listings?state=${state.name}`}
                    className="inline-block border-2 border-rose-600 text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors duration-200"
                  >
                    View {state.name} Listings
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">State:</span>
                    <Link href={`/locations/${state.slug}`} className="text-rose-600 hover:text-rose-800 font-medium">
                      {state.name}
                    </Link>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">District:</span>
                    <Link href={`/locations/${state.slug}/${district.slug}`} className="text-rose-600 hover:text-rose-800 font-medium">
                      {district.name}
                    </Link>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Population:</span>
                    <span className="font-medium text-gray-900">{city.population}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Listings:</span>
                    <span className="font-medium text-gray-900">{city.listingsCount}</span>
                  </div>
                </div>
              </div>

              {/* Famous For */}
              <div className="bg-rose-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-rose-900 mb-3">Famous For</h3>
                <p className="text-rose-800">{city.famousFor}</p>
              </div>

              {/* Nearby Cities */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Cities in {district.name}</h3>
                <div className="space-y-2">
                  {district.cities
                    .filter(c => c.slug !== city.slug)
                    .map((nearbyCity) => (
                      <Link
                        key={nearbyCity.slug}
                        href={`/locations/${state.slug}/${district.slug}/${nearbyCity.slug}`}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-900 font-medium">{nearbyCity.name}</span>
                          <span className="text-sm text-rose-600">{nearbyCity.listingsCount} listings</span>
                        </div>
                      </Link>
                    ))}
                  {district.cities.length === 1 && (
                    <p className="text-sm text-gray-500">No other cities in this district</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
