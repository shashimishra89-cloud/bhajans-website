"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Music, Sparkles, ChevronRight, Clock, Heart, BookOpen } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const bhajanData = {
  id: "madhurashtakam",
  name: "Madhurashtakam",
  title: "Eight Verses of Sweetness",
  description: "A beautiful composition by Vallabhacharya describing the sweetness and divine beauty of Lord Krishna.",
  deity: "Lord Krishna",
  verses: "8",
  lyrics: {
    sanskrit: [
      "अधरं मधुरं वदनं मधुरं नयनं मधुरं हसितं मधुरम्।",
      "हृदयं मधुरं हरणं मधुरं गमनं मधुरं मधुरं मधुरम्॥",
      "वचनं मधुरं चरितं मधुरं वेषणं मधुरं वलितं मधुरम्।",
      "विलासं मधुरं विहारं मधुरं विहरणं मधुरं मधुरं मधुरम्॥",
      "गोपीगणं मधुरं गोपीगणं मधुरं गोपीगणं मधुरं मधुरं मधुरम्।",
      "गोपीगणं मधुरं गोपीगणं मधुरं गोपीगणं मधुरं मधुरं मधुरम्॥",
      "व्रजं मधुरं व्रजं मधुरं व्रजं मधुरं व्रजं मधुरं मधुरं मधुरम्।",
      "व्रजं मधुरं व्रजं मधुरं व्रजं मधुरं व्रजं मधुरं मधुरं मधुरम्॥"
    ],
    english: [
      "Adharam Madhura Vadhanam Madhura Nayanam Madhura Hasitam Madharam।",
      "Hridayam Madhura Haranam Madhura Gamanam Madhura Madhuram Madharam॥",
      "Vachanam Madhura Charitam Madhura Veshanam Madhura Valitam Madharam।",
      "Vilasam Madhura Vihar Madhura Viharanam Madhura Madhuram Madharam॥",
      "Gopiganam Madhura Gopiganam Madhura Gopiganam Madhura Madhuram Madharam।",
      "Gopiganam Madhura Gopiganam Madhura Gopiganam Madhura Madhuram Madharam॥",
      "Vrajam Madhura Vrajam Madhura Vrajam Madhura Vrajam Madhura Madhuram Madharam।",
      "Vrajam Madhura Vrajam Madhura Vrajam Madhura Vrajam Madhura Madhuram Madharam॥"
    ]
  },
  meaning: "Madhurashtakam is a beautiful devotional composition by Sri Vallabhacharya that describes the sweetness of Lord Krishna in eight verses. Each verse emphasizes how every aspect of Krishna - his lips, face, eyes, smile, heart, activities, words, and even the land of Vrindavan - is supremely sweet. The composition celebrates the divine sweetness that permeates Krishna's entire being and his divine play.",
  significance: "Madhurashtakam is recited to experience the divine sweetness and love of Lord Krishna. It helps devotees develop a deeper emotional connection with Krishna and experience the bliss of his divine presence. The composition is particularly beloved in the Pushtimarg tradition.",
  benefits: [
    "Experience of divine love and sweetness",
    "Emotional purification and bliss",
    "Deeper connection with Lord Krishna",
    "Inner peace and spiritual joy"
  ]
};

export default function MadhurashtakamPage() {
  const bhajan = bhajanData;
  
  if (!bhajan) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('bhajans', bhajan.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-pink-600" />
              <h1 className="text-2xl font-bold text-pink-900">Bhakti</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-pink-700 hover:text-pink-900 transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-pink-700 hover:text-pink-900 transition-colors">Aartis</Link>
              <Link href="/mantras" className="text-pink-700 hover:text-pink-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-pink-700 hover:text-pink-900 transition-colors">Stories</Link>
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
          
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl shadow-xl p-8 md:p-12 border border-pink-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Music className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-pink-900 mb-6">
                {bhajan.name}
              </h1>
              <p className="text-xl text-pink-700 mb-2">
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
          <div className="bg-white rounded-lg shadow-md p-6 border border-pink-100">
            <div className="flex items-center space-x-3 mb-2">
              <Heart className="w-5 h-5 text-pink-600" />
              <span className="font-medium">{bhajan.deity}</span>
            </div>
            <p className="text-gray-600 text-sm">Deity</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-pink-100">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="w-5 h-5 text-pink-600" />
              <span className="font-medium">{bhajan.verses} verses</span>
            </div>
            <p className="text-gray-600 text-sm">Length</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-pink-100">
            <div className="flex items-center space-x-3 mb-2">
              <BookOpen className="w-5 h-5 text-pink-600" />
              <span className="font-medium">Devotional</span>
            </div>
            <p className="text-gray-600 text-sm">Type</p>
          </div>
        </div>

        {/* Significance Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-pink-900 mb-6">Significance</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-pink-100">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {bhajan.significance}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {bhajan.meaning}
            </p>
          </div>
        </section>

        <InContentAd />

        {/* Sanskrit Verses */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-pink-900 mb-6">Sanskrit Verses</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-pink-100">
            <div className="space-y-3">
              {bhajan.lyrics.sanskrit.map((line, index) => (
                <p key={index} className="text-lg text-gray-700 font-medium leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* English Translation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-pink-900 mb-6">English Translation</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-pink-100">
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
          <h2 className="text-3xl font-bold text-pink-900 mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bhajan.benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
                <h3 className="text-lg font-bold text-pink-800 mb-3">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Related Bhajans */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-pink-900 mb-6">Related Bhajans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/bhajans/hanuman-chalisa" className="bg-white rounded-xl shadow-lg p-6 border border-pink-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">💪</span>
                <h3 className="text-lg font-bold text-pink-800">Hanuman Chalisa</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Hanuman</p>
            </Link>
            
            <Link href="/bhajans/vishnu-sahasranam" className="bg-white rounded-xl shadow-lg p-6 border border-pink-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🔱</span>
                <h3 className="text-lg font-bold text-pink-800">Vishnu Sahasranam</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Vishnu</p>
            </Link>
            
            <Link href="/bhajans/shiv-tandav-stotram" className="bg-white rounded-xl shadow-lg p-6 border border-pink-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🔥</span>
                <h3 className="text-lg font-bold text-pink-800">Shiv Tandav Stotram</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Shiva</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-pink-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">Bhakti</span>
          </div>
          <p className="text-pink-200">
            Celebrating the divine festivals of Sanatana Dharma with devotion and love
          </p>
          <div className="mt-6 space-x-6 flex justify-center">
            <Link href="/festivals" className="text-pink-200 hover:text-white transition-colors">
              Festivals
            </Link>
            <Link href="/aartis" className="text-pink-200 hover:text-white transition-colors">
              Aartis
            </Link>
            <Link href="/mantras" className="text-pink-200 hover:text-white transition-colors">
              Mantras
            </Link>
            <Link href="/stories" className="text-pink-200 hover:text-white transition-colors">
              Stories
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
