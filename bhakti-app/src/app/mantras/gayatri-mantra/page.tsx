"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, ChevronRight, Clock, Heart, BookOpen, Sun } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const mantraData = {
  id: "gayatri-mantra",
  name: "Gayatri Mantra",
  title: "Mother of the Vedas",
  description: "A powerful Vedic mantra dedicated to the Sun God, believed to enhance wisdom, intellect, and spiritual illumination.",
  deity: "Sun God (Savitur)",
  purpose: "Wisdom & Enlightenment",
  syllables: "24",
  lyrics: {
    sanskrit: [
      "ॐ भूर्भुवः स्वः",
      "तत्सवितुर्वरेण्यं",
      "भर्गो देवस्य धीमहि",
      "धियो यो नः प्रचोदयात्"
    ],
    english: [
      "Om Bhuur Bhuvah Svah",
      "Tat Savitur Varennyam",
      "Bhargo Devasya Dhiimahi",
      "Dhiyo Yo Nah Pracodayaat"
    ],
    meaning: [
      "We meditate on the divine light of the Sun God who is worthy of worship",
      "May he inspire our intellect and guide us towards enlightenment"
    ]
  },
  significance: "The Gayatri Mantra is considered the most sacred mantra in Hinduism, often called the 'Mother of the Vedas'. It is a prayer to the divine light of the Sun God to illuminate our intellect and guide us on the path of righteousness. The mantra is believed to contain the essence of all Vedic teachings and is recited by millions of devotees worldwide for spiritual growth and wisdom.",
  benefits: [
    "Enhanced intellect and wisdom",
    "Spiritual illumination and clarity",
    "Removal of ignorance and darkness",
    "Connection with divine cosmic energy"
  ],
  pronunciation: "Om Bhoor Bhoo-vah Swah, Tat Sa-vee-toor Var-ayn-yam, Bar-go Day-vas-ya Dhee-ma-hee, Dhee-yo Yo Nah Pra-cho-da-yaat",
  bestTime: "Early morning during sunrise (Brahma Muhurta)"
};

export default function GayatriMantraPage() {
  const mantra = mantraData;
  
  if (!mantra) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('mantras', mantra.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-yellow-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-yellow-600" />
              <h1 className="text-2xl font-bold text-yellow-900">Bhakti</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-yellow-700 hover:text-yellow-900 transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-yellow-700 hover:text-yellow-900 transition-colors">Aartis</Link>
              <Link href="/bhajans" className="text-yellow-700 hover:text-yellow-900 transition-colors">Bhajans</Link>
              <Link href="/chalisas" className="text-yellow-700 hover:text-yellow-900 transition-colors">Chalisas</Link>
              <Link href="/mantras" className="text-yellow-700 hover:text-yellow-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-yellow-700 hover:text-yellow-900 transition-colors">Stories</Link>
              <Link href="/gods" className="text-yellow-700 hover:text-yellow-900 transition-colors">Gods</Link>
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
          
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl shadow-xl p-8 md:p-12 border border-yellow-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Sun className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-yellow-900 mb-6">
                {mantra.name}
              </h1>
              <p className="text-xl text-yellow-700 mb-2">
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
          <div className="bg-white rounded-lg shadow-md p-6 border border-yellow-100">
            <div className="flex items-center space-x-3 mb-2">
              <Heart className="w-5 h-5 text-yellow-600" />
              <span className="font-medium">{mantra.deity}</span>
            </div>
            <p className="text-gray-600 text-sm">Deity</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-yellow-100">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="w-5 h-5 text-yellow-600" />
              <span className="font-medium">{mantra.syllables} syllables</span>
            </div>
            <p className="text-gray-600 text-sm">Length</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-yellow-100">
            <div className="flex items-center space-x-3 mb-2">
              <BookOpen className="w-5 h-5 text-yellow-600" />
              <span className="font-medium">{mantra.purpose}</span>
            </div>
            <p className="text-gray-600 text-sm">Purpose</p>
          </div>
        </div>

        {/* Significance Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Significance</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              {mantra.significance}
            </p>
          </div>
        </section>

        <InContentAd />

        {/* Sanskrit Lyrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Sanskrit Verses</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-100">
            <div className="space-y-3">
              {mantra.lyrics.sanskrit.map((line, index) => (
                <p key={index} className="text-2xl text-yellow-800 font-bold text-center leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* English Translation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">English Translation</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-100">
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
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Meaning</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-100">
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
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Pronunciation</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              {mantra.pronunciation}
            </p>
          </div>
        </section>

        {/* Best Time */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Best Time to Chant</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              {mantra.bestTime}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mantra.benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Related Mantras */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Related Mantras</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mantras/om-mantra" className="bg-white rounded-xl shadow-lg p-6 border border-yellow-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🕉️</span>
                <h3 className="text-lg font-bold text-yellow-800">Om Mantra</h3>
              </div>
              <p className="text-gray-600 text-sm">Primordial Sound</p>
            </Link>
            
            <Link href="/mantras/om-namah-shivaya" className="bg-white rounded-xl shadow-lg p-6 border border-yellow-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🔱</span>
                <h3 className="text-lg font-bold text-yellow-800">Om Namah Shivaya</h3>
              </div>
              <p className="text-gray-600 text-sm">Five Syllable Mantra</p>
            </Link>
            
            <Link href="/mantras/mahamrityunjaya-mantra" className="bg-white rounded-xl shadow-lg p-6 border border-yellow-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">💀</span>
                <h3 className="text-lg font-bold text-yellow-800">Mahamrityunjaya Mantra</h3>
              </div>
              <p className="text-gray-600 text-sm">Conqueror of Death</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">Bhakti</span>
          </div>
          <p className="text-yellow-200">
            Celebrating the divine festivals of Sanatana Dharma with devotion and love
          </p>
          <div className="mt-6 space-x-6 flex justify-center">
            <Link href="/festivals" className="text-yellow-200 hover:text-white transition-colors">
              Festivals
            </Link>
            <Link href="/aartis" className="text-yellow-200 hover:text-white transition-colors">
              Aartis
            </Link>
            <Link href="/mantras" className="text-yellow-200 hover:text-white transition-colors">
              Mantras
            </Link>
            <Link href="/stories" className="text-yellow-200 hover:text-white transition-colors">
              Stories
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
