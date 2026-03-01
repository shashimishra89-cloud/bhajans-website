import Link from "next/link";
import { Music, Sparkles, ChevronRight } from "lucide-react";
import { BannerAd } from "@/components/AdBlock";

export const metadata = {
  title: "Chalisas - Bhakti",
  description: "Collection of sacred Chalisas - 40-verse devotional hymns dedicated to various deities. Find complete text, translations, and spiritual significance.",
  keywords: ["chalisas", "hanuman chalisa", "devotional hymns", "40 verses", "sacred texts"],
};

// Chalisa data
const chalisas = [
  {
    id: "hanuman-chalisa",
    name: "Hanuman Chalisa",
    title: "40 Verses of Hanuman",
    description: "The most powerful prayer to Lord Hanuman, consisting of 40 verses (chaupais) praising his glory and seeking his blessings.",
    icon: "💪",
    color: "from-orange-400 to-red-500",
    deity: "Lord Hanuman",
    verses: "40"
  }
];

export default function ChalisasPage() {
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
              <Link href="/festivals" className="text-red-800 hover:text-red-900 transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-red-800 hover:text-red-900 transition-colors">Aartis</Link>
              <Link href="/bhajans" className="text-red-800 hover:text-red-900 transition-colors">Bhajans</Link>
              <Link href="/chalisas" className="text-red-600 font-semibold">Chalisas</Link>
              <Link href="/mantras" className="text-red-800 hover:text-red-900 transition-colors">Mantras</Link>
              <Link href="/gods" className="text-red-800 hover:text-red-900 transition-colors">Gods</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-8">
            <Music className="w-12 h-12 text-red-600" />
            <h1 className="text-5xl font-bold text-red-900">Sacred Chalisas</h1>
          </div>
          <p className="text-xl text-red-700 mb-8 max-w-2xl mx-auto">
            Explore the divine power of Chalisas - 40-verse devotional hymns that embody 
            the essence of devotion, strength, and spiritual wisdom. Each Chalisa is a 
            gateway to divine blessings and spiritual transformation.
          </p>
        </div>
      </section>

      {/* AdSense */}
      <BannerAd adSlot="1234567897" />

      {/* Chalisas Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chalisas.map((chalisa) => (
              <Link 
                key={chalisa.id}
                href={`/bhajans/${chalisa.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${chalisa.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">{chalisa.icon}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-red-900 mb-2 group-hover:text-red-600 transition-colors">
                        {chalisa.name}
                      </h3>
                      <p className="text-red-600 font-medium">{chalisa.title}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-red-400 group-hover:text-red-600 transition-colors" />
                  </div>
                  
                  <p className="text-red-700 mb-4 line-clamp-3">
                    {chalisa.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-red-600">
                    <div className="flex items-center space-x-2">
                      <span>🙏</span>
                      <span>{chalisa.deity}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>📝</span>
                      <span>{chalisa.verses} verses</span>
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
            <h2 className="text-3xl font-bold text-red-900 mb-4">More Chalisas Coming Soon</h2>
            <p className="text-lg text-red-700 mb-6">
              We're adding more sacred Chalisas including popular compositions dedicated to 
              various deities, regional variations, and traditional texts from 
              different spiritual traditions and saints.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              <span>Back to Home</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

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
