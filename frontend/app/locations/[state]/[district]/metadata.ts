import { Metadata } from 'next'
import { getDistrictBySlug, getStateBySlug } from '@/app/lib/india-locations'
import { siteConfig } from '@/app/config/site'

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ state: string; district: string }> 
}): Promise<Metadata> {
  const { state: stateSlug, district: districtSlug } = await params
  const district = getDistrictBySlug(stateSlug, districtSlug)
  const state = getStateBySlug(stateSlug)

  if (!district || !state) {
    return {
      title: 'District Not Found',
      description: 'The requested district could not be found.',
    }
  }

  const title = `${district.name}, ${state.name} - Cities & Towns | InfoLive List`
  const description = `Explore ${district.cities.length} cities and towns in ${district.name} district, ${state.name}. Find local listings, buy and sell products, discover services near you.`
  const url = `${siteConfig.url}/locations/${stateSlug}/${districtSlug}`

  return {
    title,
    description,
    keywords: [
      `${district.name}`,
      `${district.name} ${state.name}`,
      `${district.name} cities`,
      `classifieds in ${district.name}`,
      `${district.name} listings`,
      `buy sell ${district.name}`,
      `${district.name} marketplace`,
      `local business ${district.name}`,
      `${state.name} districts`,
      'India locations',
      'district directory',
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
          alt: `${district.name}, ${state.name}`,
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

