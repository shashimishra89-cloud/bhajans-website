"use client";

import Link from "next/link";
import { Music, Sparkles, ChevronRight, BookOpen, Heart, Clock } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";
import bhajanData from "../../../../content/bhajans/hanuman-chalisa.json";

export default function HanumanChalisaPage() {
  const bhajan = bhajanData;
  
  if (!bhajan) {
    return <div>Loading...</div>;
  }

  const breadcrumbs = generateBreadcrumbs('bhajans', bhajan.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-orange-600" />
              <h1 className="text-2xl font-bold text-orange-900">Bhakti</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-orange-700 hover:text-orange-900 transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-orange-700 hover:text-orange-900 transition-colors">Aartis</Link>
              <Link href="/bhajans" className="text-orange-600 font-semibold">Bhajans</Link>
              <Link href="/chalisas" className="text-orange-700 hover:text-orange-900 transition-colors">Chalisas</Link>
              <Link href="/mantras" className="text-orange-700 hover:text-orange-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-orange-700 hover:text-orange-900 transition-colors">Stories</Link>
              <Link href="/gods" className="text-orange-700 hover:text-orange-900 transition-colors">Gods</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          
          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl shadow-xl p-8 md:p-12 border border-orange-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Music className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-6">
                {bhajan.name}
              </h1>
              <p className="text-xl text-orange-700 mb-2">
                {bhajan.title}
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {bhajan.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <BannerAd />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bhajan Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
            <div className="flex items-center space-x-4 text-sm text-orange-600">
              <div className="flex items-center space-x-1">
                <span>🙏</span>
                <span>{bhajan.deity}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📝</span>
                <span>{bhajan.duration}</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="font-medium">{bhajan.duration}</span>
            </div>
            <p className="text-gray-600 text-sm">Length</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
            <div className="flex items-center space-x-3 mb-2">
              <BookOpen className="w-5 h-5 text-orange-600" />
              <span className="font-medium">Devotional</span>
            </div>
            <p className="text-gray-600 text-sm">Type</p>
          </div>
        </div>

        {/* Significance Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Significance</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {bhajan.significance}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {bhajan.significance}
            </p>
          </div>
        </section>

        <InContentAd />

        {/* Hindi Lyrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Complete Hanuman Chalisa (हिंदी)</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
            <div className="space-y-6">
              {bhajan.sections.find(section => section.type === 'lyrics')?.subsections?.map((subsection: any, index: any) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-xl font-bold text-orange-800 mb-3">{subsection.title}</h3>
                  <p className="text-lg text-gray-700 font-medium leading-relaxed whitespace-pre-line">
                    {subsection.hindi}
                  </p>
                  <p className="text-sm text-gray-600 italic">{subsection.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BannerAd />
        
        {/* English Translation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">English Translation</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
            <div className="space-y-6">
              {bhajan.sections.find(section => section.type === 'lyrics')?.subsections?.map((subsection: any, index: any) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-xl font-bold text-orange-800 mb-3">{subsection.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {subsection.english}
                  </p>
                  <p className="text-sm text-gray-600 italic">{subsection.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BannerAd />

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bhajan.sections.find(section => section.type === 'benefits')?.subsections?.map((benefit: any, index: any) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Bhajans */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Related Bhajans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/bhajans/vishnu-sahasranam" className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🔱</span>
                <h3 className="text-lg font-bold text-orange-800">Vishnu Sahasranam</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Vishnu</p>
            </Link>
            
            <Link href="/bhajans/shiv-tandav-stotram" className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🔥</span>
                <h3 className="text-lg font-bold text-orange-800">Shiv Tandav Stotram</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Shiva</p>
            </Link>
            
            <Link href="/bhajans/madhurashtakam" className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🎵</span>
                <h3 className="text-lg font-bold text-orange-800">Madhurashtakam</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Krishna</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">Bhakti</span>
          </div>
          <p className="text-orange-200">
            Celebrating the divine festivals of Sanatana Dharma with devotion and love
          </p>
          <div className="mt-6 space-x-6 flex justify-center">
            <Link href="/festivals" className="text-orange-200 hover:text-white transition-colors">
              Festivals
            </Link>
            <Link href="/aartis" className="text-orange-200 hover:text-white transition-colors">
              Aartis
            </Link>
            <Link href="/bhajans" className="text-orange-200 hover:text-white transition-colors">
              Bhajans
            </Link>
            <Link href="/chalisas" className="text-orange-200 hover:text-white transition-colors">
              Chalisas
            </Link>
            <Link href="/mantras" className="text-orange-200 hover:text-white transition-colors">
              Mantras
            </Link>
            <Link href="/stories" className="text-orange-200 hover:text-white transition-colors">
              Stories
            </Link>
            <Link href="/gods" className="text-orange-200 hover:text-white transition-colors">
              Gods
            </Link>
          </div>
        </div>
        
        <div className="border-t border-orange-800 pt-8 text-center">
            <p className="text-orange-300 text-sm mb-4">
              © 2024 Bhakti. Preserving and sharing sacred traditions of Hindu culture.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <Link href="/privacy" className="text-orange-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-orange-300 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/contact" className="text-orange-300 hover:text-white transition-colors">Contact</Link>
            </div>
        </div>
      </footer>
    </div>
  );
}
