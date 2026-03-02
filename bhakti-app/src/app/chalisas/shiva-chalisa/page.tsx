"use client";

import Link from "next/link";
import { Music, Sparkles, ChevronRight, BookOpen, Heart, Clock } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

export default function ShivaChalisaPage() {
  const chalisa = {
    name: "Shiva Chalisa",
    title: "40 Verses of Lord Shiva",
    description: "Sacred hymn dedicated to Lord Shiva, the destroyer of evil and transformer of consciousness, praising his divine attributes.",
    icon: "🕉️",
    color: "from-blue-400 to-purple-500",
    deity: "Lord Shiva",
    verses: "40",
    lyrics: {
      hindi: [
        "जय शिव शंकर, मंगल मूले।",
        "जय गंगाधर, गंगा जटा धारी॥",
        "भाल चन्द्रमा सोहत, नीलकंठ भाले।",
        "कण्ठ में वसंत राजा, भृंगी की माले॥",
        "वस्त्र भाले बाघ चर्म, साँवरे स्याम।",
        "भाले मुण्ड माला, भस्म अंग राम॥",
        "त्रिपुर त्रास देवता, भूत प्रेत आधार।",
        "भूत प्रेत पिशाच नाथ, सबके सर धार॥",
        "जटा जूट बिखराय, बाभन विखराय।",
        "गंगा जटा में बहत, जलधर को टार॥",
        "दमरू वादन शंकर, तांडव नृत्य करत।",
        "सब दिक दारुण गूंज, भूत गण विहरत॥",
        "नन्दी बैल सवारी, सोहत शम्भु भाली।",
        "देवता दानव मुनि, सब मिलि गावली॥",
        "करत त्रिशूल भुजदण्ड, भाले चन्द्र चकोर।",
        "जय जय शिव शंकर, ब्रह्मा विष्णु विचार॥",
        "जय जय शिव शंकर, जय गंगाधर।",
        "जय जय शिव शंकर, जय भोलेनाथ॥",
        "जय जय शिव शंकर, जय गिरिजापति।",
        "जय जय शिव शंकर, जय भूतनाथ॥",
        "जय जय शिव शंकर, जय चंद्रमौली।",
        "जय जय शिव शंकर, जय पिनाकधारी॥",
        "जय जय शिव शंकर, जय उमापति।",
        "जय जय शिव शंकर, जय गंगाधर॥",
        "जय जय शिव शंकर, जय भोलेनाथ।",
        "जय जय शिव शंकर, जय गिरिजापति॥",
        "जय जय शिव शंकर, जय भूतनाथ।",
        "जय जय शिव शंकर, जय चंद्रमौली॥",
        "जय जय शिव शंकर, जय पिनाकधारी।",
        "जय जय शिव शंकर, जय उमापति॥",
        "जय जय शिव शंकर, जय गंगाधर।",
        "जय जय शिव शंकर, जय भोलेनाथ॥",
        "जय जय शिव शंकर, जय गिरिजापति।",
        "जय जय शिव शंकर, जय भूतनाथ॥",
        "जय जय शिव शंकर, जय चंद्रमौली।",
        "जय जय शिव शंकर, जय पिनाकधारी॥",
        "जय जय शिव शंकर, जय उमापति।",
        "जय जय शिव शंकर, जय गंगाधर॥",
        "जय जय शिव शंकर, जय भोलेनाथ।",
        "जय जय शिव शंकर, जय गिरिजापति॥",
        "जय जय शिव शंकर, जय भूतनाथ।",
        "जय जय शिव शंकर, जय चंद्रमौली॥",
        "जय जय शिव शंकर, जय पिनाकधारी।",
        "जय जय शिव शंकर, जय उमापति॥",
        "दोहा",
        "शिव शंकर की आरती, जो कोई जपत ध्यावत।",
        "तात सुख सम्पत्ति पावत, दुःख नहीं लाभत॥",
        "पाठ करत शिव चालीसा, पूरन होई इच्छा।",
        "शिव शंकर की कृपा, सदा सुरक्षा रचा॥"
      ],
      translations: [
        {
          hindi: "जय शिव शंकर, मंगल मूले।",
          english: "Victory to Shiva Shankar, the source of auspiciousness."
        },
        {
          hindi: "जय गंगाधर, गंगा जटा धारी॥",
          english: "Victory to Ganga Dhara, who holds Ganga in his matted locks."
        },
        {
          hindi: "भाल चन्द्रमा सोहत, नीलकंठ भाले।",
          english: "The moon adorns his forehead, blue-throated one."
        },
        {
          hindi: "कण्ठ में वसंत राजा, भृंगी की माले॥",
          english: "King Vasant in his throat, garland of bees."
        },
        {
          hindi: "वस्त्र भाले बाघ चर्म, साँवरे स्याम।",
          english: "Wears tiger skin as clothing, dark complexioned."
        },
        {
          hindi: "भाले मुण्ड माला, भस्म अंग राम॥",
          english: "Garland of skulls on forehead, body smeared with ashes."
        },
        {
          hindi: "त्रिपुर त्रास देवता, भूत प्रेत आधार।",
          english: "Terror to the three cities, lord of ghosts and spirits."
        },
        {
          hindi: "भूत प्रेत पिशाच नाथ, सबके सर धार॥",
          english: "Lord of ghosts, spirits, and demons, master of all."
        },
        {
          hindi: "जटा जूट बिखराय, बाभन विखराय।",
          english: "Matted locks scattered, serpent spread out."
        },
        {
          hindi: "गंगा जटा में बहत, जलधर को टार॥",
          english: "Ganga flows in his locks, relieving the ocean."
        },
        {
          hindi: "दमरू वादन शंकर, तांडव नृत्य करत।",
          english: "Shankar plays the damaru, performs the Tandava dance."
        },
        {
          hindi: "सब दिक दारुण गूंज, भूत गण विहरत॥",
          english: "Terrible echoes in all directions, ghosts and spirits rejoice."
        },
        {
          hindi: "नन्दी बैल सवारी, सोहत शम्भु भाली।",
          english: "Rides Nandi the bull, Shambhu looks magnificent."
        },
        {
          hindi: "देवता दानव मुनि, सब मिलि गावली॥",
          english: "Devas, demons, and sages all sing his praises together."
        },
        {
          hindi: "करत त्रिशूल भुजदण्ड, भाले चन्द्र चकोर।",
          english: "Holds trident and staff, moon like a disc on forehead."
        },
        {
          hindi: "जय जय शिव शंकर, ब्रह्मा विष्णु विचार॥",
          english: "Victory to Shiva Shankar, contemplated by Brahma and Vishnu."
        },
        {
          hindi: "जय जय शिव शंकर, जय गंगाधर।",
          english: "Victory to Shiva Shankar, victory to Ganga Dhara."
        },
        {
          hindi: "जय जय शिव शंकर, जय भोलेनाथ॥",
          english: "Victory to Shiva Shankar, victory to Bholenath."
        },
        {
          hindi: "जय जय शिव शंकर, जय गिरिजापति।",
          english: "Victory to Shiva Shankar, victory to Girija Pati."
        },
        {
          hindi: "जय जय शिव शंकर, जय भूतनाथ॥",
          english: "Victory to Shiva Shankar, victory to Bhootnath."
        },
        {
          hindi: "जय जय शिव शंकर, जय चंद्रमौली।",
          english: "Victory to Shiva Shankar, victory to Chandramauli."
        },
        {
          hindi: "जय जय शिव शंकर, जय पिनाकधारी॥",
          english: "Victory to Shiva Shankar, victory to Pinakadhari."
        },
        {
          hindi: "जय जय शिव शंकर, जय उमापति।",
          english: "Victory to Shiva Shankar, victory to Umapati."
        },
        {
          hindi: "जय जय शिव शंकर, जय गंगाधर॥",
          english: "Victory to Shiva Shankar, victory to Ganga Dhara."
        },
        {
          hindi: "जय जय शिव शंकर, जय भोलेनाथ।",
          english: "Victory to Shiva Shankar, victory to Bholenath."
        },
        {
          hindi: "जय जय शिव शंकर, जय गिरिजापति॥",
          english: "Victory to Shiva Shankar, victory to Girija Pati."
        },
        {
          hindi: "जय जय शिव शंकर, जय भूतनाथ।",
          english: "Victory to Shiva Shankar, victory to Bhootnath."
        },
        {
          hindi: "जय जय शिव शंकर, जय चंद्रमौली॥",
          english: "Victory to Shiva Shankar, victory to Chandramauli."
        },
        {
          hindi: "जय जय शिव शंकर, जय पिनाकधारी।",
          english: "Victory to Shiva Shankar, victory to Pinakadhari."
        },
        {
          hindi: "जय जय शिव शंकर, जय उमापति॥",
          english: "Victory to Shiva Shankar, victory to Umapati."
        },
        {
          hindi: "जय जय शिव शंकर, जय गंगाधर।",
          english: "Victory to Shiva Shankar, victory to Ganga Dhara."
        },
        {
          hindi: "जय जय शिव शंकर, जय भोलेनाथ॥",
          english: "Victory to Shiva Shankar, victory to Bholenath."
        },
        {
          hindi: "जय जय शिव शंकर, जय गिरिजापति।",
          english: "Victory to Shiva Shankar, victory to Girija Pati."
        },
        {
          hindi: "जय जय शिव शंकर, जय भूतनाथ॥",
          english: "Victory to Shiva Shankar, victory to Bhootnath."
        },
        {
          hindi: "जय जय शिव शंकर, जय चंद्रमौली।",
          english: "Victory to Shiva Shankar, victory to Chandramauli."
        },
        {
          hindi: "जय जय शिव शंकर, जय पिनाकधारी॥",
          english: "Victory to Shiva Shankar, victory to Pinakadhari."
        },
        {
          hindi: "जय जय शिव शंकर, जय उमापति।",
          english: "Victory to Shiva Shankar, victory to Umapati."
        },
        {
          hindi: "जय जय शिव शंकर, जय गंगाधर॥",
          english: "Victory to Shiva Shankar, victory to Ganga Dhara."
        },
        {
          hindi: "जय जय शिव शंकर, जय भोलेनाथ।",
          english: "Victory to Shiva Shankar, victory to Bholenath."
        },
        {
          hindi: "जय जय शिव शंकर, जय गिरिजापति॥",
          english: "Victory to Shiva Shankar, victory to Girija Pati."
        },
        {
          hindi: "जय जय शिव शंकर, जय भूतनाथ।",
          english: "Victory to Shiva Shankar, victory to Bhootnath."
        },
        {
          hindi: "जय जय शिव शंकर, जय चंद्रमौली॥",
          english: "Victory to Shiva Shankar, victory to Chandramauli."
        },
        {
          hindi: "जय जय शिव शंकर, जय पिनाकधारी।",
          english: "Victory to Shiva Shankar, victory to Pinakadhari."
        },
        {
          hindi: "जय जय शिव शंकर, जय उमापति॥",
          english: "Victory to Shiva Shankar, victory to Umapati."
        },
        {
          hindi: "दोहा",
          english: "Couplet"
        },
        {
          hindi: "शिव शंकर की आरती, जो कोई जपत ध्यावत।",
          english: "Whoever chants the aarti of Shiva Shankar with devotion."
        },
        {
          hindi: "तात सुख सम्पत्ति पावत, दुःख नहीं लाभत॥",
          english: "Receives happiness and prosperity, never suffers sorrow."
        },
        {
          hindi: "पाठ करत शिव चालीसा, पूरन होई इच्छा।",
          english: "By reciting Shiva Chalisa, wishes are fulfilled."
        },
        {
          hindi: "शिव शंकर की कृपा, सदा सुरक्षा रचा॥",
          english: "By the grace of Shiva Shankar, always protected."
        }
      ]
    },
    benefits: [
      "Liberation from negative karma and past sins",
      "Spiritual awakening and enlightenment",
      "Peace of mind and emotional stability",
      "Success in meditation and spiritual practices",
      "Protection from evil forces and obstacles"
    ],
    significance: "Shiva Chalisa is a powerful 40-verse hymn dedicated to Lord Shiva, the supreme ascetic and transformer. Regular recitation brings spiritual purification, liberation from worldly attachments, and divine blessings."
  };

  const breadcrumbs = generateBreadcrumbs('chalisas', chalisa.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
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
              <Link href="/bhajans" className="text-blue-700 hover:text-blue-900 transition-colors">Bhajans</Link>
              <Link href="/chalisas" className="text-blue-600 font-semibold">Chalisas</Link>
              <Link href="/mantras" className="text-blue-700 hover:text-blue-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-blue-700 hover:text-blue-900 transition-colors">Stories</Link>
              <Link href="/gods" className="text-blue-700 hover:text-blue-900 transition-colors">Gods</Link>
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
                <span className="text-5xl">{chalisa.icon}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                {chalisa.name}
              </h1>
              <p className="text-xl text-blue-700 mb-6">
                {chalisa.title}
              </p>
              <p className="text-lg text-blue-600 max-w-2xl mx-auto">
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
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Spiritual Significance</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {chalisa.significance}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {chalisa.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Practice Guidelines</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Recite with pure heart and devotion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Best time: Early morning (Brahma Muhurta)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Offer bilva leaves and water</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Observe fasting on Mondays</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <InContentAd />

          {/* Lyrics */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Shiva Chalisa Lyrics</h2>
            
            <div className="space-y-8">
              {/* Hindi Lyrics */}
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">हिंदी गीत (Hindi Lyrics)</h3>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
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
                <h3 className="text-xl font-semibold text-blue-800 mb-4">English Translation</h3>
                <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                  <div className="space-y-4">
                    {chalisa.lyrics.translations.map((translation, index) => (
                      <div key={index} className="border-l-4 border-indigo-400 pl-4">
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
      <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Bhakti</h3>
            </div>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              A Sacred Space for Devotion
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Link href="/festivals" className="text-blue-200 hover:text-white transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-blue-200 hover:text-white transition-colors">Aartis</Link>
              <Link href="/bhajans" className="text-blue-200 hover:text-white transition-colors">Bhajans</Link>
              <Link href="/chalisas" className="text-blue-200 hover:text-white transition-colors">Chalisas</Link>
              <Link href="/mantras" className="text-blue-200 hover:text-white transition-colors">Mantras</Link>
              <Link href="/stories" className="text-blue-200 hover:text-white transition-colors">Stories</Link>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 text-center">
            <p className="text-blue-300 text-sm mb-4">
              © 2024 Bhakti. Preserving and sharing sacred traditions of Hindu culture.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <Link href="/privacy" className="text-blue-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-blue-300 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/contact" className="text-blue-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
