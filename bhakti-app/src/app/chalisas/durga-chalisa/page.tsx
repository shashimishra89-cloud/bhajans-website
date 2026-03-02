"use client";

import Link from "next/link";
import { Music, Sparkles, ChevronRight, BookOpen, Heart, Clock } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

export default function DurgaChalisaPage() {
  const chalisa = {
    name: "Durga Chalisa",
    title: "40 Verses of Goddess Durga",
    description: "Sacred hymn dedicated to Goddess Durga, the divine mother who protects devotees and destroys evil forces.",
    icon: "👑",
    color: "from-red-400 to-pink-500",
    deity: "Goddess Durga",
    verses: "40",
    lyrics: {
      hindi: [
        "जय अम्बे गौरी, मैया जय श्यामा गौरी।",
        "तुमको निशिदिन ध्यावत, हरि ब्रह्मा शिवरी॥",
        "माँ शरनागत दीनारी, बड़न करुणा सिंधारी।",
        "सुन सकल विश्व हिंडोला, बजे ताल मृदंग बाजे॥",
        "तुम ही जग की माता, तुम ही हो भगवती।",
        "तुम ही अन्नदा जगदम्बा, तुम ही भवानी॥",
        "जय जय जय तुम ही, जय जगदम्बा।",
        "जय जय जय तुम ही, जय भवानी॥",
        "ब्रह्मा, विष्णु, महेश, सब करें तुमको वंदन।",
        "सकल चराचर जग में, तुम ही सुखदाता॥",
        "शुम्भ, निशुम्भ, दैत्य, तुमने मारे संहारा।",
        "रक्तबीज को मार कर, दिया वर दुहाई॥",
        "महिषासुर मर्दिनी, तुमको सब कहें।",
        "जय जय जगदम्बा, सुनहु मेरी बानी॥",
        "कातिक मास की शुक्ला, नवमी को आवत।",
        "भक्तन को देन को, दाता देवी भावत॥",
        "नवरात्र में तुमको, भक्त जपत निशिदिन।",
        "जो कोई तुमको ध्यावत, तारे सकल संतान॥",
        "तुमको भक्त जो नित्य, ध्यावत निशिचर।",
        "दुःख दारिद्रय निकट, नहीं रहें विचार॥",
        "धन धान्य बहु धाम, सुख सम्पत्ति पावत।",
        "गृह बार बसो रहे, नहीं कोई विचार॥",
        "जो तुमको भजत भावे, प्रेम से फल पावत।",
        "दुष्ट दलन को मारे, भय से बचावत॥",
        "जय जय जय दुर्गा, तुम ही सुखदाता।",
        "करो कृपा माता, मो पर अवताता॥",
        "जय जय जय जय, जय जगदम्बा।",
        "जय जय जय जय, जय भवानी॥",
        "दोहा",
        "शुभ गुण सागर, शुभ दायिनी।",
        "कविराज आगर, करें विनयी॥",
        "जो कोई जपत नित्य, दुर्गा चालीसा।",
        "तात सुख सम्पत्ति, पावत निराला॥",
        "पाठ करत भक्त, पूरन होई इच्छा।",
        "दुर्गा माँ की, करे सदा रक्षा॥"
      ],
      translations: [
        {
          hindi: "जय अम्बे गौरी, मैया जय श्यामा गौरी।",
          english: "Victory to Mother Amba Gauri, victory to Mother Shyama Gauri."
        },
        {
          hindi: "तुमको निशिदिन ध्यावत, हरि ब्रह्मा शिवरी॥",
          english: "Hari, Brahma, and Shiva meditate upon you day and night."
        },
        {
          hindi: "माँ शरनागत दीनारी, बड़न करुणा सिंधारी।",
          english: "O Mother, I take refuge at your feet, ocean of compassion."
        },
        {
          hindi: "सुन सकल विश्व हिंडोला, बजे ताल मृदंग बाजे॥",
          english: "The entire universe swings to your rhythm, as drums and cymbals play."
        },
        {
          hindi: "तुम ही जग की माता, तुम ही हो भगवती।",
          english: "You alone are the Mother of the world, you alone are the Goddess."
        },
        {
          hindi: "तुम ही अन्नदा जगदम्बा, तुम ही भवानी॥",
          english: "You are Annapurna, Jagdamba, and you are Bhavani."
        },
        {
          hindi: "जय जय जय तुम ही, जय जगदम्बा।",
          english: "Victory, victory, victory to you alone, victory to Jagdamba."
        },
        {
          hindi: "जय जय जय तुम ही, जय भवानी॥",
          english: "Victory, victory, victory to you alone, victory to Bhavani."
        },
        {
          hindi: "ब्रह्मा, विष्णु, महेश, सब करें तुमको वंदन।",
          english: "Brahma, Vishnu, and Mahesh all worship you."
        },
        {
          hindi: "सकल चराचर जग में, तुम ही सुखदाता॥",
          english: "In the entire mobile and immobile world, you alone are the giver of happiness."
        },
        {
          hindi: "शुम्भ, निशुम्भ, दैत्य, तुमने मारे संहारा।",
          english: "You killed the demons Shumbha and Nishumbha."
        },
        {
          hindi: "रक्तबीज को मार कर, दिया वर दुहाई॥",
          english: "After killing Raktabeeja, you granted the boon they sought."
        },
        {
          hindi: "महिषासुर मर्दिनी, तुमको सब कहें।",
          english: "Everyone calls you Mahishasura Mardini (slayer of Mahishasura)."
        },
        {
          hindi: "जय जय जगदम्बा, सुनहु मेरी बानी॥",
          english: "Victory to Jagdamba, listen to my prayer."
        },
        {
          hindi: "कातिक मास की शुक्ला, नवमी को आवत।",
          english: "On the ninth day of the bright fortnight of Kartik month."
        },
        {
          hindi: "भक्तन को देन को, दाता देवी भावत॥",
          english: "The benevolent Goddess wishes to give blessings to devotees."
        },
        {
          hindi: "नवरात्र में तुमको, भक्त जपत निशिदिन।",
          english: "During Navratri, devotees chant your name day and night."
        },
        {
          hindi: "जो कोई तुमको ध्यावत, तारे सकल संतान॥",
          english: "Whoever meditates upon you, saves their entire lineage."
        },
        {
          hindi: "तुमको भक्त जो नित्य, ध्यावत निशिचर।",
          english: "Your devotees who always meditate upon you, even at night."
        },
        {
          hindi: "दुःख दारिद्रय निकट, नहीं रहें विचार॥",
          english: "Poverty and suffering stay far away, no worries remain."
        },
        {
          hindi: "धन धान्य बहु धाम, सुख सम्पत्ति पावत।",
          english: "They receive abundant wealth, grain, happiness, and prosperity."
        },
        {
          hindi: "गृह बार बसो रहे, नहीं कोई विचार॥",
          english: "They live happily in their homes, without any worries."
        },
        {
          hindi: "जो तुमको भजत भावे, प्रेम से फल पावत।",
          english: "Whoever worships you with devotion, receives the fruits of their love."
        },
        {
          hindi: "दुष्ट दलन को मारे, भय से बचावत॥",
          english: "You destroy wicked armies and protect from fear."
        },
        {
          hindi: "जय जय जय दुर्गा, तुम ही सुखदाता।",
          english: "Victory, victory, victory to Durga, you alone are the giver of happiness."
        },
        {
          hindi: "करो कृपा माता, मो पर अवताता॥",
          english: "Have mercy, Mother, and descend upon me."
        },
        {
          hindi: "जय जय जय जय, जय जगदम्बा।",
          english: "Victory, victory, victory, victory, victory to Jagdamba."
        },
        {
          hindi: "जय जय जय जय, जय भवानी॥",
          english: "Victory, victory, victory, victory, victory to Bhavani."
        },
        {
          hindi: "दोहा",
          english: "Couplet"
        },
        {
          hindi: "शुभ गुण सागर, शुभ दायिनी।",
          english: "Ocean of virtuous qualities, giver of auspiciousness."
        },
        {
          hindi: "कविराज आगर, करें विनयी॥",
          english: "The poet Aagar humbly prays."
        },
        {
          hindi: "जो कोई जपत नित्य, दुर्गा चालीसा।",
          english: "Whoever chants the Durga Chalisa daily."
        },
        {
          hindi: "तात सुख सम्पत्ति, पावत निराला॥",
          english: "Receives unparalleled happiness and prosperity."
        },
        {
          hindi: "पाठ करत भक्त, पूरन होई इच्छा।",
          english: "By reciting, the devotee's wishes are fulfilled."
        },
        {
          hindi: "दुर्गा माँ की, करे सदा रक्षा॥",
          english: "May Mother Durga always protect."
        }
      ]
    },
    benefits: [
      "Protection from negative forces and evil influences",
      "Blessings for courage, strength, and confidence",
      "Fulfillment of desires and removal of obstacles",
      "Peace of mind and spiritual growth",
      "Prosperity and success in endeavors"
    ],
    significance: "Durga Chalisa is a powerful 40-verse hymn dedicated to Goddess Durga, the supreme divine mother. Regular recitation brings divine protection, courage, and spiritual transformation."
  };

  const breadcrumbs = generateBreadcrumbs('chalisas', chalisa.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-red-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-red-600" />
              <h1 className="text-2xl font-bold text-red-900">Bhakti</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-red-700 hover:text-red-900 transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-red-700 hover:text-red-900 transition-colors">Aartis</Link>
              <Link href="/bhajans" className="text-red-700 hover:text-red-900 transition-colors">Bhajans</Link>
              <Link href="/chalisas" className="text-red-600 font-semibold">Chalisas</Link>
              <Link href="/mantras" className="text-red-700 hover:text-red-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-red-700 hover:text-red-900 transition-colors">Stories</Link>
              <Link href="/gods" className="text-red-700 hover:text-red-900 transition-colors">Gods</Link>
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
          
          <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl shadow-xl p-8 md:p-12 border border-red-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-5xl">{chalisa.icon}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
                {chalisa.name}
              </h1>
              <p className="text-xl text-red-700 mb-6">
                {chalisa.title}
              </p>
              <p className="text-lg text-red-600 max-w-2xl mx-auto">
                {chalisa.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <BannerAd />

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Significance */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-red-100">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Spiritual Significance</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {chalisa.significance}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {chalisa.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">Practice Guidelines</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Recite with pure heart and devotion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Best time: Early morning or evening</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Offer red flowers and incense</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Maintain cleanliness and purity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <InContentAd />

          {/* Lyrics */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-red-100">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Durga Chalisa Lyrics</h2>
            
            <div className="space-y-8">
              {/* Hindi Lyrics */}
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-4">हिंदी गीत (Hindi Lyrics)</h3>
                <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                  <div className="space-y-3 text-right">
                    {chalisa.lyrics.hindi.map((verse, index) => (
                      <div key={index} className="text-lg text-gray-800 leading-relaxed">
                        {verse}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Translations */}
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-4">English Translation</h3>
                <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                  <div className="space-y-4">
                    {chalisa.lyrics.translations.map((translation, index) => (
                      <div key={index} className="border-l-4 border-orange-400 pl-4">
                        <div className="text-lg text-gray-800 font-medium mb-1 text-right">
                          {translation.hindi}
                        </div>
                        <div className="text-gray-700">
                          {translation.english}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BannerAd />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-900 to-orange-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Bhakti</h3>
            </div>
            <p className="text-xl text-red-200 mb-8 max-w-2xl mx-auto">
              A Sacred Space for Devotion
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Link href="/festivals" className="text-red-200 hover:text-white transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-red-200 hover:text-white transition-colors">Aartis</Link>
              <Link href="/bhajans" className="text-red-200 hover:text-white transition-colors">Bhajans</Link>
              <Link href="/chalisas" className="text-red-200 hover:text-white transition-colors">Chalisas</Link>
              <Link href="/mantras" className="text-red-200 hover:text-white transition-colors">Mantras</Link>
              <Link href="/stories" className="text-red-200 hover:text-white transition-colors">Stories</Link>
            </div>
          </div>
          
          <div className="border-t border-red-800 pt-8 text-center">
            <p className="text-red-300 text-sm mb-4">
              © 2024 Bhakti. Preserving and sharing sacred traditions of Hindu culture.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <Link href="/privacy" className="text-red-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-red-300 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/contact" className="text-red-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
