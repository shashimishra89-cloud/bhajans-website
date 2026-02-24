import { notFound } from 'next/navigation';
import { ContentLoader, staticMantras } from '@/lib/contentLoader';
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

// Generate static params for all mantras
export async function generateStaticParams() {
  const mantras = staticMantras;
  return mantras.map((mantra) => ({
    slug: mantra.id,
  }));
}

// Generate metadata for each mantra
export async function generateMetadata({ params }: PageProps) {
  const mantra = await ContentLoader.getMantra(params.slug) || 
                staticMantras.find(m => m.id === params.slug);
  
  if (!mantra) return {};

  return generateMetadata({
    title: `${mantra.name} - ${mantra.title}`,
    description: mantra.seo?.description || mantra.description,
    keywords: mantra.seo?.keywords || [mantra.name, 'hindu mantra', mantra.title.toLowerCase()],
    canonical: `https://bhakti.justhobby.net/mantras/${mantra.id}`
  });
}

export default async function MantraDetailPage({ params }: PageProps) {
  // Try to load from JSON file, fallback to static data
  let mantra = await ContentLoader.getMantra(params.slug);
  
  if (!mantra) {
    mantra = staticMantras.find(m => m.id === params.slug);
  }

  if (!mantra) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('mantras', mantra.name);
  const structuredData = generateBreadcrumbStructuredData([
    { name: 'Home', url: 'https://bhakti.justhobby.net' },
    { name: 'Mantras', url: 'https://bhakti.justhobby.net/mantras' },
    { name: mantra.name, url: `https://bhakti.justhobby.net/mantras/${mantra.id}` }
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
              <Link href="/bhajans" className="text-orange-800 hover:text-orange-600 font-medium">Bhajans</Link>
              <Link href="/mantras" className="text-orange-600 font-semibold">Mantras</Link>
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
        <Link href="/mantras" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Mantras</span>
        </Link>
      </div>

      {/* Mantra Hero */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">{mantra.icon}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
            {mantra.name}
          </h2>
          <p className="text-2xl text-orange-700 mb-6">{mantra.title}</p>
          <p className="text-lg text-orange-800 leading-relaxed max-w-3xl mx-auto">
            {mantra.description}
          </p>
          
          {/* Mantra Info */}
          <div className="flex justify-center space-x-8 mt-8 text-sm text-orange-600">
            {mantra.duration && (
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{mantra.duration}</span>
              </div>
            )}
            {mantra.deity && (
              <div className="flex items-center space-x-2">
                <Music className="h-4 w-4" />
                <span className="text-orange-700">{mantra.deity}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Banner Ad */}
      <BannerAd />

      {/* Mantra Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Sections with automatic ad injection */}
          <SectionRenderer sections={mantra.sections} showAds={true} />
        </div>
      </section>
    </div>
  );
}
