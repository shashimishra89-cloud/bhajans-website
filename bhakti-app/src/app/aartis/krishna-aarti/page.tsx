"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Music, Sparkles, ChevronRight, Clock, Heart, BookOpen } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const aartiData = {
  id: "krishna-aarti",
  name: "Krishna Aarti",
  title: "Om Jai Shri Krishna",
  description: "A devotional prayer to Lord Krishna, the divine cowherd and embodiment of love and wisdom.",
  deity: "Lord Krishna",
  lyrics: {
    sanskrit: [
      "ॐ जय श्रीकृष्णः, जय श्रीकृष्णः",
      "गोपालः कृष्णः, जय श्रीकृष्णः",
      "जय श्रीकृष्णः...",
      "वृन्दावनस्य राजा, जय श्रीकृष्णः",
      "गोपीनां प्रियः, जय श्रीकृष्णः",
      "जय श्रीकृष्णः...",
      "माखनचोरः राजा, जय श्रीकृष्णः",
      "राधिकायाः प्रियः, जय श्रीकृष्णः",
      "जय श्रीकृष्णः...",
      "वंशीवादकः राजा, जय श्रीकृष्णः",
      "यशोदायाः लालः, जय श्रीकृष्णः",
      "जय श्रीकृष्णः...",
      "गीतायाः दाता, जय श्रीकृष्णः",
      "धर्मस्य रक्षिता, जय श्रीकृष्णः",
      "जय श्रीकृष्णः...",
      "भक्तानां सहचारी, जय श्रीकृष्णः",
      "दुःखिनां दाता, जय श्रीकृष्णः",
      "जय श्रीकृष्णः...",
      "ॐ जय श्रीकृष्णः, जय श्रीकृष्णः",
      "गोपालः कृष्णः, जय श्रीकृष्णः",
      "जय श्रीकृष्णः..."
    ],
    translations: [
      {
        hindi: "ॐ हे श्री कृष्ण, जय हो आपकी।",
        english: "Om, victory to Lord Krishna, victory to Lord Krishna."
      },
      {
        hindi: "गोपाल कृष्ण, जय हो आपकी।",
        english: "Gopal Krishna, victory to you."
      },
      {
        hindi: "जय श्री कृष्ण...",
        english: "Victory to Lord Krishna..."
      },
      {
        hindi: "वृंदावन के राजा, जय हो।",
        english: "King of Vrindavan, victory to you."
      },
      {
        hindi: "गोपियों का प्रिय, जय हो।",
        english: "Beloved of the Gopis, victory to you."
      },
      {
        hindi: "जय श्री कृष्ण...",
        english: "Victory to Lord Krishna..."
      },
      {
        hindi: "माखन चोर राजा, जय हो।",
        english: "Butter thief king, victory to you."
      },
      {
        hindi: "राधिका का प्रिय, जय हो।",
        english: "Beloved of Radhika, victory to you."
      },
      {
        hindi: "जय श्री कृष्ण...",
        english: "Victory to Lord Krishna..."
      },
      {
        hindi: "बांसुरी वादक राजा, जय हो।",
        english: "Flute-playing king, victory to you."
      },
      {
        hindi: "यशोदा का लाल, जय हो।",
        english: "Son of Yashoda, victory to you."
      },
      {
        hindi: "जय श्री कृष्ण...",
        english: "Victory to Lord Krishna..."
      },
      {
        hindi: "गीता का दाता, जय हो।",
        english: "Giver of the Gita, victory to you."
      },
      {
        hindi: "धर्म का रक्षक, जय हो।",
        english: "Protector of dharma, victory to you."
      },
      {
        hindi: "जय श्री कृष्ण...",
        english: "Victory to Lord Krishna..."
      },
      {
        hindi: "भक्तों का साथी, जय हो।",
        english: "Companion of devotees, victory to you."
      },
      {
        hindi: "दुखियों का दाता, जय हो।",
        english: "Giver to the sorrowful, victory to you."
      },
      {
        hindi: "जय श्री कृष्ण...",
        english: "Victory to Lord Krishna..."
      },
      {
        hindi: "ॐ हे श्री कृष्ण, जय हो आपकी।",
        english: "Om, victory to Lord Krishna, victory to you."
      }
    ]
  },
  meaning: "This aarti glorifies Lord Krishna in his various divine aspects - as the king of Vrindavan, the beloved of the gopis, the butter thief, the flute player, the giver of the Bhagavad Gita, and the protector of dharma. It celebrates his divine play (lila) and his role as the supreme source of love and wisdom.",
  significance: "Krishna Aarti is performed to seek the blessings of Lord Krishna for love, wisdom, and spiritual guidance. It helps devotees connect with his divine energy and experience the bliss of devotion.",
  benefits: [
    "Divine love and compassion",
    "Spiritual wisdom and guidance",
      "Inner peace and happiness",
      "Blessings for family harmony"
  ]
};

export default function KrishnaAartiPage() {
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
              {aarti.lyrics.sanskrit.map((line: string, index: number) => (
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
            
            <Link href="/aartis/shiv-aarti" className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🔱</span>
                <h3 className="text-lg font-bold text-blue-800">Shiv Aarti</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Shiva</p>
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
