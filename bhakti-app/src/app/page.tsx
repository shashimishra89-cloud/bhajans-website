import Link from "next/link";
import { Search, Sparkles, Heart, Calendar } from "lucide-react";
import { BannerAd } from "@/components/AdSense";
import { getFeaturedFestivals } from "@/config/festivals";

export default function Home() {
  const featuredFestivals = getFeaturedFestivals();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-orange-600" />
              <h1 className="text-2xl font-bold text-orange-900">Bhajans</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-orange-800 hover:text-orange-600 font-medium">Festivals</Link>
              <Link href="/gods" className="text-orange-800 hover:text-orange-600 font-medium">Gods</Link>
              <Link href="/search" className="text-orange-800 hover:text-orange-600 font-medium">Search</Link>
              <Link href="/about" className="text-orange-800 hover:text-orange-600 font-medium">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-orange-900 mb-6">
            Bhajans
          </h2>
          <p className="text-xl md:text-2xl text-orange-800 mb-4 font-medium">
            Hindu Festivals, Gods & Sacred Songs
          </p>
          <p className="text-lg text-orange-700 mb-12 max-w-2xl mx-auto">
            Discover the rich heritage of Hindu culture through festivals, deities, bhajans, and aartis
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Link href="/search" className="block">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-orange-400" />
                <input
                  type="text"
                  placeholder="Search festivals, gods, bhajans, or aartis..."
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-orange-200 rounded-full focus:border-orange-400 focus:outline-none bg-white/90 backdrop-blur-sm cursor-pointer"
                  readOnly
                />
              </div>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/festivals" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Explore Festivals
            </Link>
            <Link href="/gods" className="bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Discover Gods
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Ad */}
      <BannerAd adSlot="1234567890" />

      {/* Featured Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured Festivals */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-orange-900 mb-8 text-center">Featured Festivals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {featuredFestivals.map((festival) => (
                <Link key={festival.id} href={`/festivals/${festival.id}`}>
                  <div className={`bg-gradient-to-br ${festival.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-white/20 text-white`}>
                    <div className="text-4xl mb-3 text-center">{festival.icon}</div>
                    <h4 className="text-xl font-bold mb-2 text-center">{festival.name}</h4>
                    <p className="text-center text-sm opacity-90">{festival.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Beloved Deities */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-orange-900 mb-8 text-center">Beloved Deities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Krishna", title: "The Divine Cowherd", icon: "🦚" },
                { name: "Ganesha", title: "Remover of Obstacles", icon: "🐘" },
                { name: "Durga", title: "Divine Mother", icon: "🦁" }
              ].map((god) => (
                <Link key={god.name} href={`/gods/${god.name.toLowerCase()}`}>
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-100">
                    <div className="text-5xl mb-4 text-center">{god.icon}</div>
                    <h4 className="text-2xl font-bold text-orange-900 mb-2 text-center">{god.name}</h4>
                    <p className="text-orange-700 text-center">{god.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-orange-900 mb-2">Festival Calendar</h4>
              <p className="text-orange-700">Discover the significance and rituals of Hindu festivals throughout the year</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-orange-900 mb-2">Sacred Songs</h4>
              <p className="text-orange-700">Complete bhajans and aartis with Hindi text and English translations</p>
            </div>
            <div className="text-center">
              <Search className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-orange-900 mb-2">Easy Search</h4>
              <p className="text-orange-700">Find any festival, deity, or devotional song quickly and easily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <h3 className="text-xl font-bold">Bhajans</h3>
          </div>
          <p className="text-orange-200 mb-6">Preserving and sharing the sacred traditions of Hindu culture</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <Link href="/privacy" className="text-orange-200 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-orange-200 hover:text-white">Terms of Service</Link>
            <Link href="/contact" className="text-orange-200 hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
