import { Metadata } from 'next'
import { getStateBySlug } from '@/app/lib/india-locations'
import { siteConfig } from '@/app/config/site'

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params
  const state = getStateBySlug(stateSlug)

  if (!state) {
    return {
      title: 'State Not Found',
      description: 'The requested state could not be found.',
    }
  }

  const title = `${state.name} - Districts & Cities | InfoLive List`
  const description = `Explore ${state.districts.length} districts in ${state.name}. Find local listings, products, and services across all cities and towns. Browse classifieds in ${state.name}.`
  const url = `${siteConfig.url}/locations/${stateSlug}`

  return {
    title,
    description,
    keywords: [
      `${state.name}`,
      `${state.name} districts`,
      `${state.name} cities`,
      `classifieds in ${state.name}`,
      `${state.name} listings`,
      `buy sell ${state.name}`,
      `${state.name} marketplace`,
      `local business ${state.name}`,
      'India locations',
      'state directory',
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
          alt: `${state.name} - Browse by Location`,
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

