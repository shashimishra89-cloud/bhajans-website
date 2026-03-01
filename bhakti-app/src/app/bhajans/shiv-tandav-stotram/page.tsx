"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Music, Sparkles, ChevronRight, Clock, Heart, BookOpen } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const bhajanData = {
  id: "shiv-tandav-stotram",
  name: "Shiv Tandav Stotram",
  title: "Cosmic Dance of Shiva",
  description: "A powerful hymn describing Lord Shiva's cosmic dance, composed by Ravana, showcasing the divine power and beauty of Shiva.",
  deity: "Lord Shiva",
  verses: "15",
  lyrics: {
    sanskrit: [
      "जटा टवी गलज्जल प्रवाह पवितस्थले",
      "गलेऽवलम्बितं लम्बितां भुजंगतुंग मालिकम्।",
      "डमड्डमड्डमड्डमन्निनाद वड्डमेगधूषणं",
      "चकार चलतततभुजंग तुंग मालिकम्॥",
      "धिमिर्धिमिर्धिमिर्धिमिर्निनाद वज्रैर्चमत्करैः",
      "धक्काधक्काधक्काधक्कानिनाद वज्रैर्चमत्करैः।",
      "वेध वेध वेध वेध निनाद वज्रैर्चमत्करैः",
      "धक्काधक्काधक्काधक्कानिनाद वज्रैर्चमत्करैः॥",
      "जटा कटा कटा कटा कटा कटा कटा कटा",
      "जटा कटा कटा कटा कटा कटा कटा",
      "जटा कटा कटा कटा कटा कटा कटा",
      "जटा कटा कटा कटा कटा कटा कटा॥"
    ],
    english: [
      "Jata Tavi Galajjal Pravaha Pavitasthale",
      "Galevalambitam Lambitam Bhujatung Malikam।",
      "Damaddamaddamaddamanninad Vaddamegdhushanam",
      "Chakar Chalatatbhajang Tung Malikam॥",
      "Dhimirdhimirdhimirdhimirninad Vajrairchamatkaraih",
      "Dhakkadhakkadhakkadhakkaninad Vajrairchamatkaraih।",
      "Vedha Vedha Vedha Vedha Ninad Vajrairchamatkaraih",
      "Dhakkadhakkadhakkadhakkaninad Vajrairchamatkaraih॥",
      "Jata Kata Kata Kata Kata Kata Kata Kata",
      "Jata Kata Kata Kata Kata Kata Kata Kata",
      "Jata Kata Kata Kata Kata Kata Kata Kata",
      "Jata Kata Kata Kata Kata Kata Kata Kata॥"
    ]
  },
  meaning: "Shiv Tandav Stotram is a powerful hymn composed by Ravana, the demon king of Lanka, after being blessed by Lord Shiva. It describes Lord Shiva's cosmic dance (Tandava) with vivid imagery of his matted hair, the Ganga flowing from his locks, the sound of his damaru, and the power of his movements. The stotram captures the divine energy and destructive aspect of Shiva's dance.",
  significance: "Shiv Tandav Stotram is recited to invoke the powerful energy of Lord Shiva and seek his blessings for strength, courage, and spiritual transformation. It is believed that regular recitation helps overcome obstacles and connects the devotee with the cosmic energy of Shiva.",
  benefits: [
    "Inner strength and courage",
    "Spiritual transformation and growth",
    "Removal of obstacles and fears",
    "Connection with divine cosmic energy"
  ]
};

export default function ShivTandavStotramPage() {
  const bhajan = bhajanData;
  
  if (!bhajan) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('bhajans', bhajan.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-purple-900">Bhakti</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-purple-700 hover:text-purple-900 transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-purple-700 hover:text-purple-900 transition-colors">Aartis</Link>
              <Link href="/bhajans" className="text-purple-700 hover:text-purple-900 transition-colors">Bhajans</Link>
              <Link href="/chalisas" className="text-purple-700 hover:text-purple-900 transition-colors">Chalisas</Link>
              <Link href="/mantras" className="text-purple-700 hover:text-purple-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-purple-700 hover:text-purple-900 transition-colors">Stories</Link>
              <Link href="/gods" className="text-purple-700 hover:text-purple-900 transition-colors">Gods</Link>
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
          
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-xl p-8 md:p-12 border border-purple-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Music className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
                {bhajan.name}
              </h1>
              <p className="text-xl text-purple-700 mb-2">
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
          <div className="bg-white rounded-lg shadow-md p-6 border border-purple-100">
            <div className="flex items-center space-x-3 mb-2">
              <Heart className="w-5 h-5 text-purple-600" />
              <span className="font-medium">{bhajan.deity}</span>
            </div>
            <p className="text-gray-600 text-sm">Deity</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-purple-100">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="w-5 h-5 text-purple-600" />
              <span className="font-medium">{bhajan.verses} verses</span>
            </div>
            <p className="text-gray-600 text-sm">Length</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-purple-100">
            <div className="flex items-center space-x-3 mb-2">
              <BookOpen className="w-5 h-5 text-purple-600" />
              <span className="font-medium">Powerful</span>
            </div>
            <p className="text-gray-600 text-sm">Type</p>
          </div>
        </div>

        {/* Significance Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Significance</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
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
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Sanskrit Verses</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
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
          <h2 className="text-3xl font-bold text-purple-900 mb-6">English Translation</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
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
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bhajan.benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-purple-800 mb-3">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Related Bhajans */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Related Bhajans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/bhajans/hanuman-chalisa" className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">💪</span>
                <h3 className="text-lg font-bold text-purple-800">Hanuman Chalisa</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Hanuman</p>
            </Link>
            
            <Link href="/bhajans/vishnu-sahasranam" className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🔱</span>
                <h3 className="text-lg font-bold text-purple-800">Vishnu Sahasranam</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Vishnu</p>
            </Link>
            
            <Link href="/bhajans/madhurashtakam" className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🎵</span>
                <h3 className="text-lg font-bold text-purple-800">Madhurashtakam</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Krishna</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">Bhakti</span>
          </div>
          <p className="text-purple-200">
            Celebrating the divine festivals of Sanatana Dharma with devotion and love
          </p>
          <div className="mt-6 space-x-6 flex justify-center">
            <Link href="/festivals" className="text-purple-200 hover:text-white transition-colors">
              Festivals
            </Link>
            <Link href="/aartis" className="text-purple-200 hover:text-white transition-colors">
              Aartis
            </Link>
            <Link href="/mantras" className="text-purple-200 hover:text-white transition-colors">
              Mantras
            </Link>
            <Link href="/stories" className="text-purple-200 hover:text-white transition-colors">
              Stories
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
