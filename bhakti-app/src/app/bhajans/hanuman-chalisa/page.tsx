"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Music, Sparkles, ChevronRight, Clock, Heart, BookOpen } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const bhajanData = {
  id: "hanuman-chalisa",
  name: "Hanuman Chalisa",
  title: "40 Verses of Hanuman",
  description: "The most powerful prayer to Lord Hanuman, consisting of 40 verses (chaupais) praising his glory and seeking his blessings.",
  deity: "Lord Hanuman",
  verses: "40",
  lyrics: {
    hindi: [
      "श्रीगुरु चरन सरोज रज, निज मनु मुकुर सुधारि।",
      "बरनऊँ रघुबर बिमल जसु, जो दायक फल चारि॥",
      "बुद्धिहीन तनु जानिके, सुमिरौं पवनकुमार।",
      "बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥",
      "जय हनुमान ज्ञान गुन सागर।",
      "जय कपीस तिहुँ लोक उजागर॥",
      "राम दूत अतुलित बल धामा।",
      "अंजनि पुत्र पवनसुत नामा॥",
      "महाबीर बिक्रम बजरंगी।",
      "कुमति निवाज सुमिरौं पवनकुमार॥",
      "बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥",
      "जय हनुमान ज्ञान गुन सागर।",
      "जय कपीस तिहुँ लोक उजागर॥"
    ],
    english: [
      "Shri Guru Charan Saroja Raj, Nij Man Mukar Sudhari।",
      "Barnau Raghubar Bimal Jasu, Jo Dayak Phal Chari॥",
      "Buddhiheen Tanu Janike, Sumirau Pavan Kumar।",
      "Bal Buddhi Vidya Dehu Mohin, Harahu Kalesh Vikar॥",
      "Jai Hanuman Jnan Guna Sagar।",
      "Jai Kapisa Tihun Lok Ujagar॥",
      "Ram Doot Atulit Bal Dhama।",
      "Anjani Putra Pavan Sut Nama॥",
      "Mahabir Bikram Bajarangi।",
      "Kumati Nivar Sumirau Pavan Kumar॥",
      "Bal Buddhi Vidya Dehu Mohin, Harahu Kalesh Vikar॥",
      "Jai Hanuman Jnan Guna Sagar।",
      "Jai Kapisa Tihun Lok Ujagar॥"
    ]
  },
  meaning: "Hanuman Chalisa is a devotional hymn dedicated to Lord Hanuman, composed by Tulsidas. It describes Hanuman's devotion to Lord Rama, his strength, wisdom, and his role as the destroyer of evil. The Chalisa consists of 40 verses (chaupais) that praise Hanuman's divine qualities and seek his blessings.",
  significance: "Hanuman Chalisa is recited to seek strength, courage, wisdom, and protection from Lord Hanuman. It is believed to remove obstacles, ward off evil influences, and bring peace and prosperity to the devotee's life.",
  benefits: [
    "Strength and courage to face challenges",
    "Wisdom and clarity of mind",
    "Protection from negative energies",
    "Success in endeavors and obstacles removed"
  ]
};

export default function HanumanChalisaPage() {
  const bhajan = bhajanData;
  
  if (!bhajan) {
    notFound();
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
              <Link href="/mantras" className="text-orange-700 hover:text-orange-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-orange-700 hover:text-orange-900 transition-colors">Stories</Link>
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
            <div className="flex items-center space-x-3 mb-2">
              <Heart className="w-5 h-5 text-orange-600" />
              <span className="font-medium">{bhajan.deity}</span>
            </div>
            <p className="text-gray-600 text-sm">Deity</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="font-medium">{bhajan.verses} verses</span>
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
              {bhajan.meaning}
            </p>
          </div>
        </section>

        <InContentAd />

        {/* Hindi Lyrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Hindi Lyrics</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
            <div className="space-y-3">
              {bhajan.lyrics.hindi.map((line, index) => (
                <p key={index} className="text-lg text-gray-700 font-medium leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>
{/* Chalisa Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Hanuman Chalisa</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-orange-900 mb-4">Complete 40 Verses</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              The Hanuman Chalisa consists of 40 verses (chaupais) praising Lord Hanuman's glory, strength, and devotion. Each verse carries profound spiritual meaning and power.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                <h4 className="text-lg font-bold text-orange-800 mb-3">📖 Complete Text</h4>
                <p className="text-gray-700 mb-4">Read the complete Hanuman Chalisa with all 40 verses, proper Hindi pronunciation, and English translations.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-500 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-bold text-blue-800 mb-3">🎵 Audio Version</h4>
                <p className="text-gray-700 mb-4">Listen to the complete Hanuman Chalisa with proper pronunciation and rhythm.</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-500 rounded-xl p-6 border border-green-200">
                <h4 className="text-lg font-bold text-green-800 mb-3">📚 Download PDF</h4>
                <p className="text-gray-700 mb-4">Download the complete Hanuman Chalisa in PDF format for offline reading and sharing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        <BannerAd />
        
        {/* English Translation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">English Translation</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
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
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bhajan.benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-3">
                  {benefit}
                </h3>
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
            <Link href="/mantras" className="text-orange-200 hover:text-white transition-colors">
              Mantras
            </Link>
            <Link href="/stories" className="text-orange-200 hover:text-white transition-colors">
              Stories
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
