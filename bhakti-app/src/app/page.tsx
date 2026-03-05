'use client';

import Link from "next/link";
import { Sparkles, Calendar, Music, BookOpen, Heart, ChevronRight } from "lucide-react";
import { BannerAd, InContentAd, ADSENSE_CONFIG } from "@/components/AdBlock";
import "@/styles/animations.css";

// Category data
const categories = [
  {
    id: "festivals",
    title: "Festivals",
    description: "Celebrate divine festivals with rituals, stories, and traditions",
    icon: "🎉",
    image: "/images/categories/festivals.svg",
    href: "/festivals",
    color: "from-orange-400 to-red-500"
  },
  {
    id: "aartis",
    title: "Aartis",
    description: "Sacred prayers and worship ceremonies",
    icon: "🪔",
    image: "/images/categories/aartis.svg",
    href: "/aartis",
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: "bhajans",
    title: "Bhajans",
    description: "Devotional songs and sacred hymns",
    icon: "🎵",
    image: "/images/categories/bhajans.svg",
    href: "/bhajans",
    color: "from-pink-400 to-purple-500"
  },
  {
    id: "chalisas",
    title: "Chalisas",
    description: "Sacred 40-verse devotional hymns dedicated to various deities",
    icon: "🪔",
    image: "/images/categories/chalisas.svg",
    href: "/chalisas",
    color: "from-red-400 to-orange-500"
  },
  {
    id: "mantras",
    title: "Mantras",
    description: "Powerful chants and spiritual vibrations",
    icon: "🕉️",
    image: "/images/categories/mantras.svg",
    href: "/mantras",
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: "stories",
    title: "Devotional Stories",
    description: "Ancient tales and divine legends",
    icon: "📖",
    image: "/images/categories/stories.svg",
    href: "/stories",
    color: "from-green-400 to-teal-500"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/mandala-pattern.svg')] bg-repeat"></div>
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo and Brand */}
            <div className="flex justify-center items-center space-x-3 mb-8 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Bhakti
              </h1>
            </div>
            
            {/* Tagline */}
            <p className="text-2xl sm:text-3xl text-orange-800 mb-6 font-medium animate-fade-in-delayed">
              All Devotion. One Place.
            </p>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-orange-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed-2">
              Bhakti is a platform dedicated to sharing Hindu festivals, sacred stories, devotional knowledge, 
              and spiritual traditions in one place. Discover authentic content on aartis, bhajans, mantras, 
              and the rich cultural heritage of Hinduism.
            </p>
            
            {/* Additional Description for AdSense */}
            <p className="text-base sm:text-lg text-orange-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed-2">
              Explore comprehensive guides on Hindu festivals like Diwali and Holi, learn traditional aartis 
              and bhajans, access powerful mantras, and read inspiring devotional stories that have been 
              passed down through generations.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed-3">
              <button 
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Begin Your Journey</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <Link 
                href="/search" 
                className="bg-white/80 backdrop-blur-sm text-orange-600 border-2 border-orange-300 hover:bg-orange-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore Content
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense After Hero */}
      <BannerAd adSlot={ADSENSE_CONFIG.AD_SLOTS.HERO_BANNER} />

      {/* Category Grid Section */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-orange-900 mb-4">
              Explore Divine Content
            </h2>
            <p className="text-xl text-orange-700 max-w-2xl mx-auto">
              Every aspect of Bhakti, thoughtfully organized and beautifully presented
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {categories.map((category, index) => (
              <Link 
                key={category.id}
                href={category.href}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
              >
                {/* Category Image */}
                <div className={`h-48 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">{category.icon}</span>
                  </div>
                </div>
                
                {/* Category Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-orange-700 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors">
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense After Categories */}
      <InContentAd adSlot={ADSENSE_CONFIG.AD_SLOTS.CATEGORIES_INCONTENT} />

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-900 mb-8">
            Our Sacred Mission
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">Centralize Devotion</h3>
              <p className="text-orange-700 leading-relaxed">
                Bring together all aspects of Bhakti in one sacred, accessible platform
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">Preserve Tradition</h3>
              <p className="text-orange-700 leading-relaxed">
                Protect and share ancient wisdom for future generations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">Inspire Devotion</h3>
              <p className="text-orange-700 leading-relaxed">
                Create meaningful spiritual experiences for modern devotees
              </p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-orange-800 leading-relaxed mb-4">
              <strong>Bhakti</strong> was created with a simple yet profound vision: to be the definitive digital sanctuary 
              for all devotional content. In a world where spiritual knowledge is scattered across countless platforms, 
              we envisioned one sacred space where every festival, aarti, bhajan, mantra, and story could be found 
              with ease and reverence.
            </p>
            <p className="text-lg text-orange-800 leading-relaxed">
              Our long-term goal is to become the most trusted and comprehensive resource for Hindu devotional content, 
              helping millions connect with their spiritual roots and deepen their practice of Bhakti.
            </p>
          </div>
        </div>
      </section>

      {/* What is Bhakti Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-orange-900 mb-6">
              What is Bhakti?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-orange-800 leading-relaxed mb-6">
                <strong>Bhakti</strong> (भक्ति) is the Sanskrit word for "devotion" or "love" - a profound spiritual path 
                centered on pure, unconditional love and surrender to the Divine. It represents one of the most 
                beautiful and accessible approaches to spiritual realization in Hindu tradition.
              </p>
              
              <p className="text-lg text-orange-800 leading-relaxed mb-6">
                Unlike paths focused solely on knowledge (Jnana) or rituals (Karma), Bhakti emphasizes the 
                heart's connection with the Divine. Through devotional practices like singing bhajans, 
                chanting mantras, performing aartis, and celebrating festivals, devotees cultivate a personal 
                relationship with their chosen deity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-3">🙏 The Path of Love</h3>
                  <p className="text-orange-700 leading-relaxed">
                    Bhakti transforms ordinary actions into divine worship through love and devotion, 
                    making spirituality accessible to everyone regardless of background or knowledge.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-3">🕉️ Universal Devotion</h3>
                  <p className="text-orange-700 leading-relaxed">
                    Whether through Krishna, Shiva, Devi, or the formless Divine, Bhakti embraces 
                    all paths that lead to spiritual union through pure love and surrender.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-orange-800 leading-relaxed mt-8 text-center italic">
                "Bhakti is not just worship - it is the very essence of spiritual life, 
                the eternal dance between the soul and the Divine."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense After What is Bhakti */}
      <InContentAd adSlot={ADSENSE_CONFIG.AD_SLOTS.FEATURED_INCONTENT} />

      {/* Featured Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-orange-900 mb-4">
              Featured Content
            </h2>
            <p className="text-xl text-orange-700 max-w-2xl mx-auto">
              Discover our most beloved festivals, aartis, and devotional content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Festival */}
            <Link href="/festivals/diwali" className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🪔</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-orange-600 font-semibold">Featured Festival</span>
                <h3 className="text-xl font-bold text-orange-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Diwali - Festival of Lights
                </h3>
                <p className="text-orange-700 mb-4">
                  Celebrate the victory of light over darkness with rituals, stories, and traditions
                </p>
                <div className="flex items-center text-orange-600 font-medium">
                  <span>Explore Festival</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Featured Aarti */}
            <Link href="/aartis/ganesh-aarti" className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🙏</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-orange-600 font-semibold">Featured Aarti</span>
                <h3 className="text-xl font-bold text-orange-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Ganesh Aarti
                </h3>
                <p className="text-orange-700 mb-4">
                  Sacred prayer ceremony to Lord Ganesha, the remover of obstacles
                </p>
                <div className="flex items-center text-orange-600 font-medium">
                  <span>Read Aarti</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Featured Bhajan */}
            <Link href="/bhajans/hanuman-chalisa" className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-400 to-orange-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🕉️</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-orange-600 font-semibold">Featured Bhajan</span>
                <h3 className="text-xl font-bold text-orange-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Hanuman Chalisa
                </h3>
                <p className="text-orange-700 mb-4">
                  The powerful 40-verse hymn dedicated to Lord Hanuman
                </p>
                <div className="flex items-center text-orange-600 font-medium">
                  <span>Read Chalisa</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
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
              <Link href="/gods" className="text-orange-200 hover:text-white transition-colors">Gods</Link>
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

      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bhakti",
            "url": "https://bhakti.justhobby.net",
            "description": "A sacred space for all Bhakti content including festivals, aartis, bhajans, mantras, and devotional stories.",
            "logo": "https://bhakti.justhobby.net/logo.png",
            "sameAs": []
          })
        }}
      />
    </div>
  );
}
