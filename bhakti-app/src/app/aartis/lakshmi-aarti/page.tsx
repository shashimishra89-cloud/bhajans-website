"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Music, Sparkles, ChevronRight, Clock, Heart, BookOpen, Volume2 } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const aartiData = {
  id: "lakshmi-aarti",
  name: "Lakshmi Aarti",
  title: "Om Jai Lakshmi Mata",
  description: "A powerful devotional prayer to Goddess Lakshmi, the goddess of wealth, fortune, and prosperity.",
  deity: "Goddess Lakshmi",
  lyrics: {
    sanskrit: [
      "ॐ जय लक्ष्मी माता, माया जय लक्ष्मी माता।",
      "त्वां नित्यं सेवत, हरि विषया विधाता॥",
      "दीनानां रक्षां कुरु, सदा भगवन्।",
      "दुःखानां नाशं कुरु, भक्तानां आशाः।",
      "जय लक्ष्मी माता, माया जय लक्ष्मी माता।",
      "त्वां नित्यं सेवत, हरि विषया विधाता॥",
      "काञ्चनेन त्वद्भवनम्, स्फटिकेन त्वद्थानम्।",
      "चाँदीना त्वद्पादौ, सुवर्णेण त्वद्वासम्।",
      "गजारूढा महाराज्ञी, चम्पकपुष्पशोभिनी।",
      "भृगुः त्वद्दासः, नारदः गुणगानम्।",
      "जय लक्ष्मी माता, माया जय लक्ष्मी माता।",
      "त्वां नित्यं सेवत, हरि विषया विधाता॥",
      "शुभगुणसागरा, गुणामृतधारा।",
      "जगतः जननी, त्वं शुभकर्मभारा।",
      "सुखसम्पत्तीनां खानी, दारिद्र्यनाशिनी।",
      "अष्टसिद्धिनवनिधीनां दात्री, त्वमेव।",
      "जय लक्ष्मी माता, माया जय लक्ष्मी माता।",
      "त्वां नित्यं सेवत, हरि विषया विधाता॥",
      "मातर्त्वमेव जगतः माता, ब्रह्मा विष्णु महेश्वराः।",
      "सर्वसुखानां खानी, सर्वकलानां रेखा।",
      "भक्तानां सेवां कुरु, अपारां विनतिं शृणु।",
      "दीनानां लाजं रक्ष, दुःखितानां दुःखनाशम्।",
      "जय लक्ष्मी माता, माया जय लक्ष्मी माता।",
      "त्वां नित्यं सेवत, हरि विषया विधाता॥"

    ],
    translations: [
      {
        hindi: "ॐ हे लक्ष्मी माता, जय हो आपकी।",
        english: "Om, victory to Mother Lakshmi, victory to Mother Lakshmi."
      },
      {
        hindi: "आपकी सेवा हर समय होती है।",
        english: "You are served daily, in every aspect of life."
      },
      {
        hindi: "दीनों की रक्षा करो, हे भगवान।",
        english: "Protect the poor, always, O God."
      },
      {
        hindi: "दुखों का नाश करो, भक्तों की आस रखो।",
        english: "Destroy the sorrows, fulfill the hopes of devotees."
      },
      {
        hindi: "जय लक्ष्मी माता...।",
        english: "Victory to Mother Lakshmi..."
      },
      {
        hindi: "सोने का भवन, चांदी का सिंहासन।",
        english: "Your abode is made of gold, your throne of silver."
      },
      {
        hindi: "चांदी के पैर, सोने के वस्त्र।",
        english: "Your feet are of silver, your clothes of gold."
      },
      {
        hindi: "हाथी पर सवार महारानी।",
        english: "Queen riding an elephant, with champak flower garland."
      },
      {
        hindi: "भृगु सेवक, नारद गुण गान।",
        english: "Sage Bhrigu is your servant, Narada sings your praises."
      },
      {
        hindi: "जय लक्ष्मी माता...।",
        english: "Victory to Mother Lakshmi..."
      },
      {
        hindi: "शुभ गुणों का सागर, अमृत की धारा।",
        english: "Ocean of virtuous qualities, stream of nectar-like virtues."
      },
      {
        hindi: "जगत की जननी, शुभ कर्मों की शरण।",
        english: "Mother of the world, you are the refuge of good deeds."
      },
      {
        hindi: "सुख और संपत्ति का खजाना।",
        english: "Treasure of happiness and wealth, destroyer of poverty."
      },
      {
        hindi: "अष्ट सिद्धियां और नौ निधियां देने वाली।",
        english: "Eight siddhis and nine treasures, you are the giver."
      },
      {
        hindi: "जय लक्ष्मी माता...।",
        english: "Victory to Mother Lakshmi..."
      },
      {
        hindi: "मां, तुम ही जगत की माता।",
        english: "Mother, you are the mother of the world."
      },
      {
        hindi: "ब्रह्मा, विष्णु, महेश के साथ।",
        english: "Brahma, Vishnu, Mahesh."
      },
      {
        hindi: "सभी सुखों का खजाना।",
        english: "Treasure of all happiness, essence of all arts."
      },
      {
        hindi: "भक्तों की सेवा करो, अपार प्रार्थना सुनो।",
        english: "Serve the devotees, hear their endless prayers."
      },
      {
        hindi: "दीनों की लाज रखो, दुखियों के दुख दूर करो।",
        english: "Protect the honor of the poor, destroy the sorrows of the distressed."
      },
      {
        hindi: "जय लक्ष्मी माता...।",
        english: "Victory to Mother Lakshmi..."
      }
    ]
  },
  meaning: "This aarti glorifies Goddess Lakshmi as the divine mother who provides wealth, prosperity, and removes poverty. It describes her golden abode, her role as the universal mother, and her power to grant both material and spiritual abundance.",
  significance: "Lakshmi Aarti is performed to seek the blessings of Goddess Lakshmi for wealth, prosperity, and success. It is especially important during Diwali, the festival of lights, when Goddess Lakshmi is worshipped for abundance and fortune.",
  benefits: [
    "Wealth and financial prosperity",
    "Success in business and career",
    "Removal of poverty and obstacles",
    "Spiritual abundance and peace"
  ]
};

export default function LakshmiAartiPage() {
  const aarti = aartiData;
  
  if (!aarti) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('aartis', aarti.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
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
              <Link href="/mantras" className="text-yellow-700 hover:text-yellow-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-yellow-700 hover:text-yellow-900 transition-colors">Stories</Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          
          <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl shadow-xl p-8 md:p-12 border border-yellow-200">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-8 flex flex-col items-center justify-center">
                <img 
                  src="/images/lakshmi.jpg" 
                  alt="Goddess Lakshmi" 
                  className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-yellow-300 shadow-lg"
                />
                <Music className="h-8 w-8 text-yellow-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-yellow-900 mb-6">
                {aarti.name}
              </h1>
              <p className="text-xl text-yellow-700 mb-2">{aarti.title}</p>
              <p className="text-gray-600 max-w-3xl mx-auto">{aarti.description}</p>
            </div>
          </div>
        </div>
      </section>

      <BannerAd />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border border-yellow-100">
            <div className="flex items-center space-x-3 mb-2">
              <Heart className="w-5 h-5 text-yellow-600" />
              <span className="font-medium">{aarti.deity}</span>
            </div>
            <p className="text-gray-600 text-sm">Deity</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-yellow-100">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="w-5 h-5 text-yellow-600" />
              <span className="font-medium">5-10 min</span>
            </div>
            <p className="text-gray-600 text-sm">Duration</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-yellow-100">
            <div className="flex items-center space-x-3 mb-2">
              <BookOpen className="w-5 h-5 text-yellow-600" />
              <span className="font-medium">Traditional</span>
            </div>
            <p className="text-gray-600 text-sm">Type</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Significance</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-100">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">{aarti.significance}</p>
            <p className="text-gray-600 leading-relaxed">{aarti.meaning}</p>
          </div>
        </section>

        <InContentAd />

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Sanskrit Shlokas</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-100">
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

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Shloka Translations</h2>
          <div className="space-y-6">
            {aarti.lyrics.translations.map((translation, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-yellow-100">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100">
                    <h4 className="text-lg font-bold text-yellow-900 mb-3">हिन्दी</h4>
                    <p className="text-gray-700 leading-relaxed" dir="rtl">{translation.hindi}</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
                    <h4 className="text-lg font-bold text-amber-900 mb-3">English</h4>
                    <p className="text-gray-700 leading-relaxed">{translation.english}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <BannerAd />

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aarti.benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Related Aartis</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/aartis/ganesh-aarti" className="bg-white rounded-xl shadow-lg p-6 border border-yellow-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🐘</span>
                <h3 className="text-lg font-bold text-yellow-800">Ganesh Aarti</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Ganesha worship</p>
            </Link>
            
            <Link href="/aartis/shiv-aarti" className="bg-white rounded-xl shadow-lg p-6 border border-yellow-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🔱</span>
                <h3 className="text-lg font-bold text-yellow-800">Shiv Aarti</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Shiva devotion</p>
            </Link>
            
            <Link href="/aartis/durga-aarti" className="bg-white rounded-xl shadow-lg p-6 border border-yellow-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">👸</span>
                <h3 className="text-lg font-bold text-yellow-800">Durga Aarti</h3>
              </div>
              <p className="text-gray-600 text-sm">Goddess Durga worship</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">Bhakti</span>
          </div>
          <p className="text-yellow-200">Celebrating the divine festivals of Sanatana Dharma with devotion and love</p>
        </div>
      </footer>
    </div>
  );
}
