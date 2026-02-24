import { notFound } from 'next/navigation';
import { ContentLoader, staticFestivals } from '@/lib/contentLoader';
import { SectionRenderer } from '@/components/SectionRenderer';
import { Breadcrumbs, generateBreadcrumbs } from '@/components/Breadcrumbs';
import { BannerAd, InContentAd } from '@/components/AdBlock';
import { generateBreadcrumbStructuredData } from '@/components/SEO';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all festivals
export async function generateStaticParams() {
  const festivals = staticFestivals;
  return festivals.map((festival) => ({
    slug: festival.id,
  }));
}

// Generate metadata for each festival
export async function generateMetadata({ params }: PageProps) {
  const festival = await ContentLoader.getFestival(params.slug) || 
                 staticFestivals.find(f => f.id === params.slug);
  
  if (!festival) return {};

  return {
    title: `${festival.name} - ${festival.title}`,
    description: festival.seo?.description || festival.description,
    keywords: festival.seo?.keywords || [festival.name, 'hindu festival', festival.title.toLowerCase()],
    openGraph: {
      title: `${festival.name} - ${festival.title}`,
      description: festival.seo?.description || festival.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${festival.name} - ${festival.title}`,
      description: festival.seo?.description || festival.description,
    },
    alternates: {
      canonical: `https://bhakti.justhobby.net/festivals/${festival.id}`
    }
  };
}

export default async function FestivalDetailPage({ params }: PageProps) {
  // Try to load from JSON file, fallback to static data
  let festival = await ContentLoader.getFestival(params.slug);
  
  if (!festival) {
    festival = staticFestivals.find(f => f.id === params.slug);
  }

  if (!festival) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('festivals', festival.name);
  const structuredData = generateBreadcrumbStructuredData([
    { name: 'Home', url: 'https://bhakti.justhobby.net' },
    { name: 'Festivals', url: 'https://bhakti.justhobby.net/festivals' },
    { name: festival.name, url: `https://bhakti.justhobby.net/festivals/${festival.id}` }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🪔</span>
              <h1 className="text-2xl font-bold text-orange-900">Bhajans</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-orange-600 font-semibold">Festivals</Link>
              <Link href="/aartis" className="text-orange-800 hover:text-orange-600 font-medium">Aartis</Link>
              <Link href="/bhajans" className="text-orange-800 hover:text-orange-600 font-medium">Bhajans</Link>
              <Link href="/mantras" className="text-orange-800 hover:text-orange-600 font-medium">Mantras</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <Link href="/festivals" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Festivals</span>
        </Link>
      </div>

      {/* Festival Hero */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">{festival.icon}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
            {festival.name}
          </h2>
          <p className="text-2xl text-orange-700 mb-6">{festival.title}</p>
          <p className="text-lg text-orange-800 leading-relaxed max-w-3xl mx-auto">
            {festival.description}
          </p>
          
          {/* Festival Info */}
          <div className="flex justify-center space-x-8 mt-8 text-sm text-orange-600">
            {festival.duration && (
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{festival.duration}</span>
              </div>
            )}
            {festival.significance && (
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span className="text-orange-700">{festival.significance}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Banner Ad */}
      <BannerAd />

      {/* Festival Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Sections with automatic ad injection */}
          <SectionRenderer sections={festival.sections} showAds={true} />
        </div>
      </section>
    </div>
  );
}
