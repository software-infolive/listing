import Script from 'next/script';

interface StructuredDataProps {
  type: 'website' | 'organization' | 'article' | 'service';
  data?: {
    title?: string;
    description?: string;
    author?: string;
    datePublished?: string;
    dateModified?: string;
  };
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type === 'website' ? 'WebSite' : type === 'organization' ? 'Organization' : type === 'article' ? 'Article' : 'Service',
    };

    switch (type) {
      case 'website':
        return {
          ...baseData,
          name: "InfoLive",
          description: "Your trusted source for quality information, insights, and knowledge that matters.",
          url: "https://infolive.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://infolive.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
      
      case 'organization':
        return {
          ...baseData,
          name: "InfoLive",
          description: "Empowering people with accurate, timely, and reliable information.",
          url: "https://infolive.com",
          logo: "https://infolive.com/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-123-4567",
            contactType: "customer service",
            email: "info@infolive.com"
          },
          sameAs: [
            "https://twitter.com/infolive",
            "https://linkedin.com/company/infolive",
            "https://facebook.com/infolive"
          ]
        };
      
      case 'article':
        return {
          ...baseData,
          headline: data?.title || "InfoLive Article",
          description: data?.description || "Quality information and insights",
          author: {
            "@type": "Person",
            name: data?.author || "InfoLive Team"
          },
          publisher: {
            "@type": "Organization",
            name: "InfoLive",
            logo: {
              "@type": "ImageObject",
              url: "https://infolive.com/logo.png"
            }
          },
          datePublished: data?.datePublished || "2024-01-01T00:00:00.000Z",
          dateModified: data?.dateModified || "2024-01-01T00:00:00.000Z"
        };
      
      case 'service':
        return {
          ...baseData,
          name: "InfoLive Information Services",
          description: "Comprehensive information services including news, technology insights, business analysis, and more.",
          provider: {
            "@type": "Organization",
            name: "InfoLive"
          },
          areaServed: "Worldwide",
          serviceType: "Information Services"
        };
      
      default:
        return baseData;
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  );
}
