import { Metadata } from 'next';
import { siteConfig } from '../config/site';

export function generatePageMetadata({
  title,
  description,
  keywords,
  path,
  imagePath,
  alternates,
}: {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  imagePath?: string;
  alternates?: { canonical?: string };
}): Metadata {
  const baseUrl = siteConfig.url;
  const fullUrl = `${baseUrl}${path}`;
  const imageUrl = imagePath ? `${baseUrl}${imagePath}` : `${baseUrl}/og-default.jpg`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'InfoLive Team' }],
    creator: 'InfoLive',
    publisher: 'InfoLive',
    metadataBase: new URL(baseUrl),
    alternates: alternates || {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'InfoLive',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@infolive',
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
  };
}
