"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Music, Sparkles, ChevronRight, Clock, Heart, BookOpen, Volume2 } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const aartiData = {
  id: "ganesh-aarti",
  name: "श्री गणेश जी की आरती | Ganesh Ji Ki Aarti Lyrics in Hindi",
  title: "Jai Ganesh Jai Ganesh Deva",
  description: "The most beloved aarti dedicated to Lord Ganesha, the remover of obstacles and the god of wisdom.",
  deity: "Lord Ganesha",
  lyrics: {
    sanskrit: [
      "जय गणेश जय गणेश देवा, जय गणेश देवा।",
      "माता जाकी पार्वती, पिता महादेवा।",
      "एक दंत दयावंत, चार भुजा धारी।",
      "मस्तक सिंदूर सोहे, मूसे की सवारी।",
      "जय गणेश जय गणेश देवा, जय गणेश देवा।",
      "माता जाकी पार्वती, पिता महादेवा।",
      "पान चढ़े फल चढ़े, और चढ़े मेवा।",
      "लड्डुअन का भोग लगे, संत करें सेवा।",
      "जय गणेश जय गणेश देवा, जय गणेश देवा।",
      "माता जाकी पार्वती, पिता महादेवा।",
      "अंधन को आंख देत, कोढ़िन को काया।",
      "बांझन को पुत्र देत, निर्धन को माया।",
      "जय गणेश जय गणेश देवा, जय गणेश देवा।",
      "माता जाकी पार्वती, पिता महादेवा।",
      "सूर श्याम शरण आए, सफल कीजे सेवा।",
      "माता जाकी पार्वती, पिता महादेवा।",
      "दीनन की लाज रखो, शंभु सुतकारी।",
      "कामना को पूरण करो, जाऊं बलिहारी।",
      "जय गणेश जय गणेश देवा, जय गणेश देवा।",
      "माता जाकी पार्वती, पिता महादेवा।",
      "भगवान गणेश की जय, पार्वती के लल्ला की जय, ओम गं गणपतये नमः"
    ],
    translations: [
      {
        hindi: "ॐ हे गणेश देव, हे गणेश देव, आपकी जय हो।",
        english: "Om, victory to Lord Ganesha, victory to Lord Ganesha."
      },
      {
        hindi: "माता पार्वती और पिता महादेव शिव हैं।",
        english: "Your mother is Parvati and your father is great deity Shiva."
      },
      {
        hindi: "एक दांत वाले, दयावान और चार भुजाओं वाले।",
        english: "One-tusked, compassionate, and four-armed."
      },
      {
        hindi: "मस्तक पर सिंदूर लगाए, मूसे की सवारी करते हैं।",
        english: "You wear sindoor on your forehead and ride a mouse."
      },
      {
        hindi: "अंधों को आँख देते हैं, कोढ़ियों को काया देते हैं।",
        english: "You give sight to the blind and bodies to the lepers."
      },
      {
        hindi: "बाँझों को पुत्र देते हैं, निर्धनों को माया देते हैं।",
        english: "You give sons to the childless and wealth to the poor."
      },
      {
        hindi: "सूर्य, श्याम, शरण आए, सफल कीजे।",
        english: "Sun, Shyam, come to your shelter, grant success."
      },
      {
        hindi: "कामनाओं को पूर्ण कर लीजे, दुखियों को दूर करीजे।",
        english: "Fulfill all desires and remove all sorrows."
      },
      {
        hindi: "दीनों की लाज रखने वाले, दुखियों के दुख दूर करने वाले।",
        english: "Protector of the poor's honor, remover of their sorrows."
      },
      {
        hindi: "जय गणेश जय गणेश देवा, माता जाकी पार्वती पिता महादेवा।",
        english: "Jai Ganesh, Jai Ganesh Deva, mother is Parvati, father is Mahadeva."
      }
    ]
  },
  meaning: "This aarti glorifies Lord Ganesha as the remover of obstacles and bestower of wisdom.",
  significance: "Ganesh Aarti is performed to seek the blessings of Lord Ganesha for removing obstacles, granting wisdom, and achieving success in all endeavors.",
  benefits: [
    "Removal of obstacles and challenges",
    "Wisdom and intellectual clarity", 
    "Success in new ventures and projects",
    "Protection from negative energies"
  ]
};

export default function GaneshAartiPage() {
  const aarti = aartiData;
  
  if (!aarti) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('aartis', aarti.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
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

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          
          <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl shadow-xl p-8 md:p-12 border border-orange-200">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-8 flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-full mb-4 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center border-4 border-orange-300 shadow-lg">
                  <span className="text-white text-3xl font-bold">ग</span>
                </div>
                <Music className="h-8 w-8 text-orange-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mb-6">
                {aarti.name}
              </h1>
              <p className="text-xl text-orange-700 mb-2">{aarti.title}</p>
              <p className="text-gray-600 max-w-3xl mx-auto">{aarti.description}</p>
            </div>
          </div>
        </div>
      </section>

      <BannerAd />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
            <div className="flex items-center space-x-3 mb-2">
              <Heart className="w-5 h-5 text-orange-600" />
              <span className="font-medium">{aarti.deity}</span>
            </div>
            <p className="text-gray-600 text-sm">Deity</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
            <div className="flex items-center space-x-3 mb-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="font-medium">5-10 min</span>
            </div>
            <p className="text-gray-600 text-sm">Duration</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100">
            <div className="flex items-center space-x-3 mb-2">
              <BookOpen className="w-5 h-5 text-orange-600" />
              <span className="font-medium">Traditional</span>
            </div>
            <p className="text-gray-600 text-sm">Type</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Significance</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">{aarti.significance}</p>
            <p className="text-gray-600 leading-relaxed">{aarti.meaning}</p>
          </div>
        </section>

        <InContentAd />

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Sanskrit Shlokas</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
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

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Shloka Translations</h2>
          <div className="space-y-8 mb-12">
            {aarti.lyrics.sanskrit.map((shloka, index) => (
              <div key={index} className="text-center space-y-4">
                <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
                  {shloka}
                </p>
                {aarti.lyrics.translations[index] && (
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-orange-700 mb-2">Hindi:</p>
                        <p className="text-gray-700 leading-relaxed">{aarti.lyrics.translations[index].hindi}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-orange-700 mb-2">English:</p>
                        <p className="text-gray-700 leading-relaxed">{aarti.lyrics.translations[index].english}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <BannerAd />

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aarti.benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-3">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Related Aartis</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/aartis/durga-aarti" className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🔱</span>
                <h3 className="text-lg font-bold text-orange-800">Durga Aarti</h3>
              </div>
              <p className="text-gray-600 text-sm">Goddess Durga worship</p>
            </Link>
            
            <Link href="/aartis/krishna-aarti" className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🕉</span>
                <h3 className="text-lg font-bold text-orange-800">Krishna Aarti</h3>
              </div>
              <p className="text-gray-600 text-sm">Lord Krishna devotion</p>
            </Link>
            
            <Link href="/aartis/lakshmi-aarti" className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">💰</span>
                <h3 className="text-lg font-bold text-orange-800">Lakshmi Aarti</h3>
              </div>
              <p className="text-gray-600 text-sm">Goddess of wealth</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-orange-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">Bhakti</span>
          </div>
          <p className="text-orange-200">Celebrating the divine festivals of Sanatana Dharma with devotion and love</p>
        </div>
      </footer>
    </div>
  );
}
