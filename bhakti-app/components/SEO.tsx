import Head from 'next/head';
import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  structuredData
}) => {
  const fullTitle = title.includes('Bhajans') ? title : `${title} | Bhajans`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Bhajans" />
      <meta name="language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
};

// Helper functions for generating structured data
export const generateFestivalStructuredData = (festival: any) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": festival.name,
  "description": festival.description,
  "startDate": festival.date,
  "location": {
    "@type": "Place",
    "name": "India"
  },
  "image": festival.ogImage,
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
});

export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const generateWebsiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Bhajans",
  "description": "Discover the rich heritage of Hindu culture through festivals, deities, bhajans, and aartis",
  "url": "https://bhakti.justhobby.net",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://bhakti.justhobby.net/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

// For Next.js App Router metadata
export const generateMetadata = (props: SEOProps): Metadata => {
  const fullTitle = props.title.includes('Bhajans') ? props.title : `${props.title} | Bhajans`;
  
  return {
    title: fullTitle,
    description: props.description,
    keywords: props.keywords,
    openGraph: {
      title: fullTitle,
      description: props.description,
      type: props.ogType as any,
      images: props.ogImage ? [{ url: props.ogImage }] : undefined,
      url: props.canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: props.description,
      images: props.ogImage ? [props.ogImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: 'Bhajans' }],
    alternates: {
      canonical: props.canonical,
    },
  };
};
