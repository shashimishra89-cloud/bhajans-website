import { notFound } from 'next/navigation';
import { ContentLoader, staticBhajans } from '@/lib/contentLoader';
import { SectionRenderer } from '@/components/SectionRenderer';
import { Breadcrumbs, generateBreadcrumbs } from '@/components/Breadcrumbs';
import { BannerAd, InContentAd } from '@/components/AdBlock';
import { generateMetadata, generateBreadcrumbStructuredData } from '@/components/SEO';
import { ArrowLeft, Music, Clock } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all bhajans
export async function generateStaticParams() {
  const bhajans = staticBhajans;
  return bhajans.map((bhajan) => ({
    slug: bhajan.id,
  }));
}

// Generate metadata for each bhajan
export async function generateMetadata({ params }: PageProps) {
  const bhajan = await ContentLoader.getBhajan(params.slug) || 
                staticBhajans.find(b => b.id === params.slug);
  
  if (!bhajan) return {};

  return generateMetadata({
    title: `${bhajan.name} - ${bhajan.title}`,
    description: bhajan.seo?.description || bhajan.description,
    keywords: bhajan.seo?.keywords || [bhajan.name, 'hindu bhajan', bhajan.title.toLowerCase()],
    canonical: `https://bhakti.justhobby.net/bhajans/${bhajan.id}`
  });
}

export default async function BhajanDetailPage({ params }: PageProps) {
  // Try to load from JSON file, fallback to static data
  let bhajan = await ContentLoader.getBhajan(params.slug);
  
  if (!bhajan) {
    bhajan = staticBhajans.find(b => b.id === params.slug);
  }

  if (!bhajan) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('bhajans', bhajan.name);
  const structuredData = generateBreadcrumbStructuredData([
    { name: 'Home', url: 'https://bhakti.justhobby.net' },
    { name: 'Bhajans', url: 'https://bhakti.justhobby.net/bhajans' },
    { name: bhajan.name, url: `https://bhakti.justhobby.net/bhajans/${bhajan.id}` }
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
              <Link href="/festivals" className="text-orange-800 hover:text-orange-600 font-medium">Festivals</Link>
              <Link href="/aartis" className="text-orange-800 hover:text-orange-600 font-medium">Aartis</Link>
              <Link href="/bhajans" className="text-orange-600 font-semibold">Bhajans</Link>
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
        <Link href="/bhajans" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Bhajans</span>
        </Link>
      </div>

      {/* Bhajan Hero */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">{bhajan.icon}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
            {bhajan.name}
          </h2>
          <p className="text-2xl text-orange-700 mb-6">{bhajan.title}</p>
          <p className="text-lg text-orange-800 leading-relaxed max-w-3xl mx-auto">
            {bhajan.description}
          </p>
          
          {/* Bhajan Info */}
          <div className="flex justify-center space-x-8 mt-8 text-sm text-orange-600">
            {bhajan.duration && (
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{bhajan.duration}</span>
              </div>
            )}
            {bhajan.deity && (
              <div className="flex items-center space-x-2">
                <Music className="h-4 w-4" />
                <span className="text-orange-700">{bhajan.deity}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Banner Ad */}
      <BannerAd />

      {/* Bhajan Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Sections with automatic ad injection */}
          <SectionRenderer sections={bhajan.sections} showAds={true} />
        </div>
      </section>
    </div>
  );
}
