"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, ChevronRight, Clock, Heart, BookOpen, Shield } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const mantraData = {
  id: "mahamrityunjaya-mantra",
  name: "Mahamrityunjaya Mantra",
  title: "Conqueror of Death",
  description: "A powerful mantra for healing, longevity, and overcoming fears, dedicated to Lord Shiva as the conqueror of death.",
  deity: "Lord Shiva",
  purpose: "Healing & Longevity",
  syllables: "33",
  lyrics: {
    sanskrit: [
      "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्",
      "उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय माऽमृतात्"
    ],
    english: [
      "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam",
      "Urvarukamiva Bandhanan Mrityormukshiya Maamritat"
    ],
    meaning: [
      "We worship the three-eyed Lord Shiva who is fragrant and nourishes all beings",
      "May he liberate us from death, for the sake of immortality, even as the cucumber is severed from its bondage to the creeper"
    ]
  },
  significance: "The Mahamrityunjaya Mantra is one of the most powerful mantras in Hinduism, dedicated to Lord Shiva in his form as the conqueror of death. It is believed to have the power to heal physical and mental ailments, remove fears, and grant longevity. The mantra is often recited for protection, healing, and spiritual liberation.",
  benefits: [
    "Physical and mental healing",
    "Protection from accidents and misfortune",
    "Overcoming fear of death",
    "Spiritual liberation and longevity"
  ],
  pronunciation: "Om Try-am-bakam Yaa-jaa-ma-he Su-gand-him Pushti-vard-ha-nam, Ur-va-ru-ka-mi-va Ban-dha-naan Mri-tyor-muk-shi-yaa Maa-am-ri-taat",
  bestTime: "Early morning and evening, especially during Mondays and on Shivratri"
};

export default function MahamrityunjayaMantraPage() {
  const mantra = mantraData;
  
  if (!mantra) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('mantras', mantra.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-green-900">Bhakti</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-green-700 hover:text-green-900 transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-green-700 hover:text-green-900 transition-colors">Aartis</Link>
              <Link href="/bhajans" className="text-green-700 hover:text-green-900 transition-colors">Bhajans</Link>
              <Link href="/chalisas" className="text-green-700 hover:text-green-900 transition-colors">Chalisas</Link>
              <Link href="/mantras" className="text-green-700 hover:text-green-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-green-700 hover:text-green-900 transition-colors">Stories</Link>
              <Link href="/gods" className="text-green-700 hover:text-green-900 transition-colors">Gods</Link>
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
          
          <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl shadow-xl p-8 md:p-12 border border-green-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6">
                {mantra.name}
              </h1>
              <p className="text-xl text-green-700 mb-2">
                {mantra.title}
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {mantra.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <BannerAd />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mantra Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
            <div className="flex items-center space-x-3 mb-2">
              <Heart className="w-5 h-5 text-green-600" />
              <span className="font-medium">{mantra.deity}</span>
            </div>
            <p className="text-gray-600 text-sm">Deity</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="w-5 h-5 text-green-600" />
              <span className="font-medium">{mantra.syllables} syllables</span>
            </div>
            <p className="text-gray-600 text-sm">Length</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
            <div className="flex items-center space-x-3 mb-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              <span className="font-medium">{mantra.purpose}</span>
            </div>
            <p className="text-gray-600 text-sm">Purpose</p>
          </div>
        </div>

        {/* Significance Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Significance</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              {mantra.significance}
            </p>
          </div>
        </section>

        <InContentAd />

        {/* Sanskrit Lyrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Sanskrit Verses</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
            <div className="space-y-3">
              {mantra.lyrics.sanskrit.map((line, index) => (
                <p key={index} className="text-2xl text-green-800 font-bold text-center leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* English Translation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-6">English Translation</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
            <div className="space-y-3">
              {mantra.lyrics.english.map((line, index) => (
                <p key={index} className="text-lg text-gray-700 text-center leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Meaning */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Meaning</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
            <div className="space-y-3">
              {mantra.lyrics.meaning.map((line, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        <BannerAd />

        {/* Pronunciation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Pronunciation</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              {mantra.pronunciation}
            </p>
          </div>
        </section>

        {/* Best Time */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Best Time to Chant</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              {mantra.bestTime}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mantra.benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-3">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Related Mantras */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Related Mantras</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mantras/om-mantra" className="bg-white rounded-xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🕉️</span>
                <h3 className="text-lg font-bold text-green-800">Om Mantra</h3>
              </div>
              <p className="text-gray-600 text-sm">Primordial Sound</p>
            </Link>
            
            <Link href="/mantras/om-namah-shivaya" className="bg-white rounded-xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🔱</span>
                <h3 className="text-lg font-bold text-green-800">Om Namah Shivaya</h3>
              </div>
              <p className="text-gray-600 text-sm">Five Syllable Mantra</p>
            </Link>
            
            <Link href="/mantras/gayatri-mantra" className="bg-white rounded-xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">☀️</span>
                <h3 className="text-lg font-bold text-green-800">Gayatri Mantra</h3>
              </div>
              <p className="text-gray-600 text-sm">Mother of the Vedas</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">Bhakti</span>
          </div>
          <p className="text-green-200">
            Celebrating the divine festivals of Sanatana Dharma with devotion and love
          </p>
          <div className="mt-6 space-x-6 flex justify-center">
            <Link href="/festivals" className="text-green-200 hover:text-white transition-colors">
              Festivals
            </Link>
            <Link href="/aartis" className="text-green-200 hover:text-white transition-colors">
              Aartis
            </Link>
            <Link href="/mantras" className="text-green-200 hover:text-white transition-colors">
              Mantras
            </Link>
            <Link href="/stories" className="text-green-200 hover:text-white transition-colors">
              Stories
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
