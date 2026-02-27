"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Music, Sparkles, ChevronRight, Clock, Heart, BookOpen } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const aartiData = {
  id: "shiv-aarti",
  name: "Shiv Aarti",
  title: "Om Jai Shiv Omkara",
  description: "A powerful aarti dedicated to Lord Shiva, the supreme deity of destruction and transformation.",
  deity: "Lord Shiva",
  lyrics: {
    sanskrit: [
      "ॐ जय शिवोंकारः, प्रभुः शिवोंकारः",
      "ब्रह्मा विष्णुः सदाशिवः, ज्ञातः अकलन्कः",
      "जय शिवोंकारः...",
      "एकः निरञ्जनः, द्वौ निरञ्जनौ, त्रयः निरञ्जनाः, चत्वारः निरञ्जनाः",
      "पञ्च निरञ्जनाः, सप्त निरञ्जनाः, अष्ट निरञ्जनाः, नव निरञ्जनाः",
      "दश निरञ्जनाः, एकादश निरञ्जनाः, द्वादश निरञ्जनाः",
      "त्रयोदश निरञ्जनाः, चतुर्दश निरञ्जनाः, पञ्चदश निरञ्जनाः",
      "षोडश निरञ्जनाः, सप्तदश निरञ्जनाः, अष्टादश निरञ्जनाः, एकोनविंशतिः निरञ्जनाः",
      "एकोनविंशतिः निरञ्जनाः, विंशतिः निरञ्जनाः, एकविंशतिः निरञ्जनाः",
      "द्वाविंशतिः निरञ्जनाः, त्रयोविंशतिः निरञ्जनाः, चतुर्विंशतिः निरञ्जनाः",
      "पञ्चविंशतिः निरञ्जनाः, सप्तविंशतिः निरञ्जनाः, अष्टाविंशतिः निरञ्जनाः, एकोनत्रिंशत् निरञ्जनाः",
      "अष्टाविंशतिः निरञ्जनाः, एकोनत्रिंशत् निरञ्जनाः, विंशतिः निरञ्जनाः, एकविंशतिः निरञ्जनाः",
      "जय शिवोंकारः..."
    ],
    translations: [
      {
        hindi: "ॐ हे सभी शिव को, जो तीनों का स्वामी है, मैं उनकी पूजा करता हूँ।",
        english: "Om, to the three-eyed Lord Shiva, who is the essence of all knowledge, I offer my prayers."
      },
      {
        hindi: "ब्रम्हा, विष्णु, महेश, जानत अकलंका, सगर और चंद्र हैं।",
        english: "Brahma, Vishnu, and Mahesh, the creator, sustainer, and destroyer, I meditate upon."
      },
      {
        hindi: "जय शिव ओंकारा, जिनकी महिमा से सब संसारणों का नाश करते हैं।",
        english: "Jai Shiv Omkara, whose glory fills the entire universe."
      },
      {
        hindi: "एक निरंजन, दुइ निरंजन, तीन निरंजन, चार निरंजन, पंद्रह निरंजन।",
        english: "One without beginning, middle, or end, who pervades all existence."
      },
      {
        hindi: "पांच निरंजन, सात निरंजन, अठ निरंजन, नव निरंजन।",
        english: "Who wears the moon as his crown and the serpent as his necklace."
      },
      {
        hindi: "दश निरंजन, एक दश निरंजन, बारह निरंजन।",
        english: "One with three eyes in whom the three worlds reside."
      },
      {
        hindi: "तेरह निरंजन, चौदह निरंजन, पंद्रह निरंजन।",
        english: "Who removes all obstacles and grants all desires."
      },
      {
        hindi: "सोळास निरंजन, सत्रा निरंजन, अठ निरंजन, नव निरंजन।",
        english: "Whose form is frightening and who is compassionate."
      },
      {
        hindi: "एकोणीस निरंजन, वीस निरंजन, एक वीस निरंजन।",
        english: "One who gives both prosperity and liberation."
      },
      {
        hindi: "बाईस निरंजन, तेईस निरंजन, चोवीस निरंजन।",
        english: "Who is eternal and the witness to all."
      },
      {
        hindi: "अठ्ठाईस निरंजन, एकोणीस निरंजन, वीस निरंजन, एक वीस निरंजन।",
        english: "One who knows all and is beyond all gunas."
      },
      {
        hindi: "जय शिव ओंकारा...",
        english: "Jai Shiv Omkara..."
      }
    ]
  },
  meaning: "This aarti glorifies Lord Shiva as the supreme being who is beyond all attributes (Niranjan). It describes his various forms and manifestations, emphasizing his eternal nature and his role as the ultimate reality.",
  significance: "Shiv Aarti is performed to seek blessings of Lord Shiva for spiritual growth, destruction of evil, and transformation of consciousness. It helps devotees connect with the divine energy of Shiva.",
  benefits: [
    "Spiritual purification and transformation",
    "Removal of obstacles and negative energies",
    "Inner peace and mental clarity",
    "Blessings for spiritual progress"
  ]
};

export default function ShivAartiPage() {
  const aarti = aartiData;
  
  if (!aarti) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('aartis', aarti.name);

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
                {aarti.name}
              </h1>
              <p className="text-xl text-blue-700 mb-2">
                {aarti.title}
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {aarti.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <BannerAd />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Aarti Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border border-blue-100">
            <div className="flex items-center space-x-3 mb-2">
              <Heart className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{aarti.deity}</span>
            </div>
            <p className="text-gray-600 text-sm">Deity</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-blue-100">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-medium">5-10 min</span>
            </div>
            <p className="text-gray-600 text-sm">Duration</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-blue-100">
            <div className="flex items-center space-x-3 mb-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Traditional</span>
            </div>
            <p className="text-gray-600 text-sm">Type</p>
          </div>
        </div>

        {/* Significance Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Significance</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {aarti.significance}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {aarti.meaning}
            </p>
          </div>
        </section>

        <InContentAd />

        {/* Sanskrit Shlokas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Sanskrit Shlokas</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <div className="space-y-3">
              {aarti.lyrics.sanskrit.map((line, index) => (
                <p key={index} className="text-lg text-gray-700 font-medium leading-relaxed text-center">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        <InContentAd />

        {/* Translations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Shloka Translations</h2>
          <div className="space-y-6">
            {aarti.lyrics.translations.map((translation, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <h4 className="text-lg font-bold text-blue-900 mb-3">हिन्दी</h4>
                    <p className="text-gray-700 leading-relaxed" dir="rtl">
                      {translation.hindi}
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                    <h4 className="text-lg font-bold text-purple-900 mb-3">English</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {translation.english}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <BannerAd />

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aarti.benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Related Aartis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Related Aartis</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/aartis/ganesh-aarti" className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🐘</span>
                <h3 className="text-lg font-bold text-blue-800">Ganesh Aarti</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Ganesha</p>
            </Link>
            
            <Link href="/aartis/lakshmi-aarti" className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">💰</span>
                <h3 className="text-lg font-bold text-blue-800">Lakshmi Aarti</h3>
              </div>
              <p className="text-gray-600 text-sm">Goddess Lakshmi</p>
            </Link>
            
            <Link href="/aartis/durga-aarti" className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">👑</span>
                <h3 className="text-lg font-bold text-blue-800">Durga Aarti</h3>
              </div>
              <p className="text-gray-600 text-sm">Goddess Durga</p>
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
