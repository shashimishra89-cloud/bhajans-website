"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Music, Sparkles, ChevronRight, Clock, Heart, BookOpen } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const bhajanData = {
  id: "vishnu-sahasranam",
  name: "Vishnu Sahasranam",
  title: "Thousand Names of Vishnu",
  description: "A sacred hymn listing the thousand names of Lord Vishnu, each representing his divine qualities and powers.",
  deity: "Lord Vishnu",
  verses: "1000",
  lyrics: {
    hindi: [
      "श्रीविष्णोर्विष्णोर्विष्णोर्विष्णुर्विष्णुर्विष्णुर्विष्णुर्विष्णुः",
      "विष्णुर्विष्णोर्विष्णोर्विष्णुर्विष्णुर्विष्णुर्विष्णुर्विष्णुः",
      "विष्णुर्विष्णोर्विष्णोर्विष्णुर्विष्णुर्विष्णुर्विष्णुर्विष्णुः",
      "विष्णुर्विष्णोर्विष्णोर्विष्णुर्विष्णुर्विष्णुर्विष्णुर्विष्णुः",
      "ओम विष्णवे नमः",
      "ओम नमो भगवते वासुदेवाय",
      "ओम नमः सन्निधात्रे",
      "ओम नमः सहस्राक्षाय",
      "ओम नमः सहस्रपादाय",
      "ओम नमः सहस्रशीर्षाय",
      "ओम नमः सहस्रनेत्राय",
      "ओम नमः सहस्रमुखाय"
    ],
    english: [
      "Shri Vishnor Vishnor Vishnor Vishnu Vishnu Vishnu Vishnu",
      "Vishnu Vishnor Vishnor Vishnu Vishnu Vishnu Vishnu Vishnu",
      "Vishnu Vishnor Vishnor Vishnu Vishnu Vishnu Vishnu Vishnu",
      "Vishnu Vishnor Vishnor Vishnu Vishnu Vishnu Vishnu Vishnu",
      "Om Vishnave Namah",
      "Om Namo Bhagavate Vasudevaya",
      "Om Namah Sannidhatre",
      "Om Namah Sahasrakshaya",
      "Om Namah Sahasrapadaya",
      "Om Namah Sahrashirshe",
      "Om Namah Sahasranetraya",
      "Om Namah Sahasramukhaya"
    ]
  },
  meaning: "Vishnu Sahasranam is a sacred hymn from the Mahabharata that lists the thousand names of Lord Vishnu. Each name represents a different aspect, quality, or manifestation of Vishnu. The Sahasranam is considered one of the most powerful prayers for spiritual growth and divine blessings.",
  significance: "Vishnu Sahasranam is recited to seek the blessings of Lord Vishnu for protection, prosperity, and spiritual liberation. It is believed that regular recitation of these names purifies the mind, removes obstacles, and brings peace and harmony to life.",
  benefits: [
    "Spiritual purification and liberation",
    "Protection from negative influences",
    "Prosperity and success in life",
    "Inner peace and divine connection"
  ]
};

export default function VishnuSahasranamPage() {
  const bhajan = bhajanData;
  
  if (!bhajan) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('bhajans', bhajan.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-blue-900">Bhakti</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-blue-700 hover:text-blue-900 transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-blue-700 hover:text-blue-900 transition-colors">Aartis</Link>
              <Link href="/mantras" className="text-blue-700 hover:text-blue-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-blue-700 hover:text-blue-900 transition-colors">Stories</Link>
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
          
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-xl p-8 md:p-12 border border-blue-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Music className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
                {bhajan.name}
              </h1>
              <p className="text-xl text-blue-700 mb-2">
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
          <div className="bg-white rounded-lg shadow-md p-6 border border-blue-100">
            <div className="flex items-center space-x-3 mb-2">
              <Heart className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{bhajan.deity}</span>
            </div>
            <p className="text-gray-600 text-sm">Deity</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-blue-100">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{bhajan.verses} names</span>
            </div>
            <p className="text-gray-600 text-sm">Length</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-blue-100">
            <div className="flex items-center space-x-3 mb-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Sacred</span>
            </div>
            <p className="text-gray-600 text-sm">Type</p>
          </div>
        </div>

        {/* Significance Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Significance</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {bhajan.significance}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {bhajan.meaning}
            </p>
          </div>
        </section>

        <InContentAd />

        {/* Hindi Names */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Divine Names</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <div className="space-y-3">
              {bhajan.lyrics.hindi.map((line, index) => (
                <p key={index} className="text-lg text-gray-700 font-medium leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* English Translation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">English Translation</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <div className="space-y-3">
              {bhajan.lyrics.english.map((line, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        <BannerAd />

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bhajan.benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Related Bhajans */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Related Bhajans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/bhajans/hanuman-chalisa" className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">💪</span>
                <h3 className="text-lg font-bold text-blue-800">Hanuman Chalisa</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Hanuman</p>
            </Link>
            
            <Link href="/bhajans/shiv-tandav-stotram" className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🔥</span>
                <h3 className="text-lg font-bold text-blue-800">Shiv Tandav Stotram</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Shiva</p>
            </Link>
            
            <Link href="/bhajans/madhurashtakam" className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🎵</span>
                <h3 className="text-lg font-bold text-blue-800">Madhurashtakam</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Krishna</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">Bhakti</span>
          </div>
          <p className="text-blue-200">
            Celebrating the divine festivals of Sanatana Dharma with devotion and love
          </p>
          <div className="mt-6 space-x-6 flex justify-center">
            <Link href="/festivals" className="text-blue-200 hover:text-white transition-colors">
              Festivals
            </Link>
            <Link href="/aartis" className="text-blue-200 hover:text-white transition-colors">
              Aartis
            </Link>
            <Link href="/mantras" className="text-blue-200 hover:text-white transition-colors">
              Mantras
            </Link>
            <Link href="/stories" className="text-blue-200 hover:text-white transition-colors">
              Stories
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
