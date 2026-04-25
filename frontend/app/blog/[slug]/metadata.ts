import { Metadata } from 'next';
import { getBlogPostBySlug } from '../../lib/blog-data';
import { siteConfig } from '../../config/site';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | InfoLive Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  const baseUrl = siteConfig.url;
  const postUrl = `${baseUrl}/blog/${slug}`;

  return {
    title: `${post.title} | InfoLive Blog`,
    description: post.excerpt,
    keywords: [...post.tags, post.category, 'blog', 'article', 'InfoLive', 'how to', 'tips', 'guide'],
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: siteConfig.name,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: siteConfig.name,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: `${baseUrl}/og-blog-post.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`${baseUrl}/twitter-blog-post.jpg`],
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
  };
}
