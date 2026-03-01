import Link from "next/link";
import { Music, Sparkles, ChevronRight } from "lucide-react";
import { BannerAd } from "@/components/AdBlock";

export const metadata = {
  title: "Hindu Bhajans - Bhakti",
  description: "Collection of Hindu bhajans and devotional songs. Find lyrics, meanings, and significance of popular bhajans dedicated to various deities.",
  keywords: ["hindu bhajans", "devotional songs", "bhajan lyrics", "hanuman chalisa", "vishnu sahasranam", "shiv tandav"],
};

// Bhajan data
const bhajans = [
  {
    id: "hanuman-chalisa",
    name: "Hanuman Chalisa",
    title: "40 Verses of Hanuman",
    description: "The most powerful prayer to Lord Hanuman, consisting of 40 verses (chaupais) praising his glory and seeking his blessings.",
    icon: "💪",
    color: "from-orange-400 to-red-500",
    deity: "Lord Hanuman",
    verses: "40"
  },
  {
    id: "vishnu-sahasranam",
    name: "Vishnu Sahasranam",
    title: "Thousand Names of Vishnu",
    description: "A sacred hymn listing the thousand names of Lord Vishnu, each representing his divine qualities and powers.",
    icon: "🔱",
    color: "from-blue-400 to-indigo-500",
    deity: "Lord Vishnu",
    verses: "1000"
  },
  {
    id: "shiv-tandav-stotram",
    name: "Shiv Tandav Stotram",
    title: "Cosmic Dance of Shiva",
    description: "A powerful hymn describing Lord Shiva's cosmic dance, composed by Ravana, showcasing the divine power and beauty of Shiva.",
    icon: "🔥",
    color: "from-purple-400 to-pink-500",
    deity: "Lord Shiva",
    verses: "15"
  },
  {
    id: "madhurashtakam",
    name: "Madhurashtakam",
    title: "Eight Verses of Sweetness",
    description: "A beautiful composition by Vallabhacharya describing the sweetness and divine beauty of Lord Krishna.",
    icon: "🎵",
    color: "from-pink-400 to-purple-500",
    deity: "Lord Krishna",
    verses: "8"
  },
  {
    id: "ramcharitmanas",
    name: "Ramcharitmanas",
    title: "The Lake of Rama's Deeds",
    description: "An epic poem composed by Tulsidas, narrating the life and deeds of Lord Rama in Awadhi language.",
    icon: "🏹",
    color: "from-green-400 to-teal-500",
    deity: "Lord Rama",
    verses: "1000+"
  },
  {
    id: "devi-mahatmyam",
    name: "Devi Mahatmyam",
    title: "Glory of the Goddess",
    description: "A sacred text describing the glory of the Divine Mother Durga and her victory over demons.",
    icon: "👑",
    color: "from-red-400 to-orange-500",
    deity: "Goddess Durga",
    verses: "700"
  }
];

export default function BhajansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-orange-600" />
              <h1 className="text-2xl font-bold text-orange-900">Bhakti</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-orange-800 hover:text-orange-900 transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-orange-800 hover:text-orange-900 transition-colors">Aartis</Link>
              <Link href="/bhajans" className="text-orange-600 font-semibold">Bhajans</Link>
              <Link href="/chalisas" className="text-orange-800 hover:text-orange-900 transition-colors">Chalisas</Link>
              <Link href="/mantras" className="text-orange-800 hover:text-orange-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-orange-800 hover:text-orange-900 transition-colors">Stories</Link>
              <Link href="/gods" className="text-orange-800 hover:text-orange-900 transition-colors">Gods</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-8">
            <Music className="w-12 h-12 text-orange-600" />
            <h1 className="text-5xl font-bold text-orange-900">Hindu Bhajans</h1>
          </div>
          <p className="text-xl text-orange-700 mb-8 max-w-2xl mx-auto">
            Immerse yourself in the divine melodies of Hindu bhajans - devotional songs that 
            touch the soul, purify the mind, and awaken the heart to spiritual consciousness.
          </p>
        </div>
      </section>

      {/* AdSense */}
      <BannerAd adSlot="1234567897" />

      {/* Bhajans Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bhajans.map((bhajan) => (
              <Link 
                key={bhajan.id}
                href={`/bhajans/${bhajan.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${bhajan.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">{bhajan.icon}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-orange-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {bhajan.name}
                      </h3>
                      <p className="text-orange-600 font-medium">{bhajan.title}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-orange-400 group-hover:text-orange-600 transition-colors" />
                  </div>
                  
                  <p className="text-orange-700 mb-4 line-clamp-3">
                    {bhajan.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-orange-600">
                    <div className="flex items-center space-x-2">
                      <span>🙏</span>
                      <span>{bhajan.deity}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>📝</span>
                      <span>{bhajan.verses} verses</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">More Bhajans Coming Soon</h2>
            <p className="text-lg text-orange-700 mb-6">
              We're adding more devotional songs including popular regional bhajans, 
              kirtans, and traditional compositions from various saints and poets.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              <span>Back to Home</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-900 to-red-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Bhakti</h3>
            </div>
            <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
              A Sacred Space for Devotion
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Link href="/festivals" className="text-orange-200 hover:text-white transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-orange-200 hover:text-white transition-colors">Aartis</Link>
              <Link href="/bhajans" className="text-orange-200 hover:text-white transition-colors">Bhajans</Link>
              <Link href="/chalisas" className="text-orange-200 hover:text-white transition-colors">Chalisas</Link>
              <Link href="/mantras" className="text-orange-200 hover:text-white transition-colors">Mantras</Link>
              <Link href="/stories" className="text-orange-200 hover:text-white transition-colors">Stories</Link>
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
        </div>
      </footer>
    </div>
  );
}
