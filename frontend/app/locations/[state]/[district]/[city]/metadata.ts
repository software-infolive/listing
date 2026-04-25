import { Metadata } from 'next'
import { getCityBySlug, getDistrictBySlug, getStateBySlug } from '@/app/lib/india-locations'
import { siteConfig } from '@/app/config/site'

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ state: string; district: string; city: string }> 
}): Promise<Metadata> {
  const { state: stateSlug, district: districtSlug, city: citySlug } = await params
  const city = getCityBySlug(stateSlug, districtSlug, citySlug)
  const district = getDistrictBySlug(stateSlug, districtSlug)
  const state = getStateBySlug(stateSlug)

  if (!city || !district || !state) {
    return {
      title: 'City Not Found',
      description: 'The requested city could not be found.',
    }
  }

  const title = `${city.name}, ${district.name}, ${state.name} - Local Listings & Classifieds | InfoLive List`
  const description = `Discover local listings in ${city.name}, ${district.name}. Buy and sell products, find services, explore opportunities. Population: ${city.population}. Your local marketplace in ${state.name}.`
  const url = `${siteConfig.url}/locations/${stateSlug}/${districtSlug}/${citySlug}`

  return {
    title,
    description,
    keywords: [
      `${city.name}`,
      `${city.name} ${state.name}`,
      `${city.name} ${district.name}`,
      `classifieds in ${city.name}`,
      `${city.name} listings`,
      `buy sell ${city.name}`,
      `${city.name} marketplace`,
      `local business ${city.name}`,
      `${city.name} ads`,
      `${city.name} shopping`,
      `services in ${city.name}`,
      'local classifieds',
      'nearby listings',
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
          url: `${siteConfig.url}/og-location.jpg`,
          width: 1200,
          height: 630,
          alt: `${city.name}, ${district.name}, ${state.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@infolive',
      images: [`${siteConfig.url}/og-location.jpg`],
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

