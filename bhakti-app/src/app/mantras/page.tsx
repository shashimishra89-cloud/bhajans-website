import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";
import { BannerAd } from "@/components/AdBlock";

export const metadata = {
  title: "Hindu Mantras - Bhakti",
  description: "Collection of powerful Hindu mantras for meditation, healing, and spiritual growth. Find Sanskrit mantras with meanings and proper pronunciation.",
  keywords: ["hindu mantras", "sanskrit mantras", "gayatri mantra", "om namah shivaya", "meditation mantras", "spiritual chants"],
};

// Mantra data
const mantras = [
  {
    id: "om-mantra",
    name: "Om Mantra",
    title: "The Primordial Sound",
    description: "The most sacred and fundamental mantra in Hinduism, representing the ultimate reality and cosmic vibration.",
    icon: "🕉️",
    color: "from-purple-400 to-indigo-500",
    purpose: "Meditation & Spiritual Awakening",
    syllables: "1"
  },
  {
    id: "gayatri-mantra",
    name: "Gayatri Mantra",
    title: "Mother of the Vedas",
    description: "A powerful Vedic mantra dedicated to the Sun God, believed to enhance wisdom, intellect, and spiritual illumination.",
    icon: "☀️",
    color: "from-yellow-400 to-orange-500",
    purpose: "Wisdom & Enlightenment",
    syllables: "24"
  },
  {
    id: "om-namah-shivaya",
    name: "Om Namah Shivaya",
    title: "Five Syllable Mantra",
    description: "A powerful mantra dedicated to Lord Shiva, representing the five elements and helping in spiritual transformation.",
    icon: "🔱",
    color: "from-blue-400 to-purple-500",
    purpose: "Spiritual Transformation",
    syllables: "5"
  },
  {
    id: "mahamrityunjaya-mantra",
    name: "Mahamrityunjaya Mantra",
    title: "Conqueror of Death",
    description: "A powerful mantra for healing, longevity, and overcoming fears, dedicated to Lord Shiva as the conqueror of death.",
    icon: "💀",
    color: "from-green-400 to-teal-500",
    purpose: "Healing & Longevity",
    syllables: "34"
  },
  {
    id: "om-tryambakam",
    name: "Om Tryambakam",
    title: "Three-Eyed One",
    description: "A variation of the Mahamrityunjaya mantra, invoking the three-eyed Lord Shiva for protection and healing.",
    icon: "👁️",
    color: "from-indigo-400 to-blue-500",
    purpose: "Protection & Healing",
    syllables: "12"
  },
  {
    id: "shanti-mantra",
    name: "Shanti Mantra",
    title: "Peace Chant",
    description: "Mantras for invoking peace in the mind, body, and environment, often chanted at the beginning and end of ceremonies.",
    icon: "🕊️",
    color: "from-pink-400 to-purple-500",
    purpose: "Peace & Harmony",
    syllables: "11"
  }
];

export default function MantrasPage() {
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
              <Link href="/festivals" className="text-orange-800 hover:text-orange-600 font-medium">Festivals</Link>
              <Link href="/aartis" className="text-orange-800 hover:text-orange-600 font-medium">Aartis</Link>
              <Link href="/bhajans" className="text-orange-800 hover:text-orange-600 font-medium">Bhajans</Link>
              <Link href="/mantras" className="text-orange-600 font-semibold">Mantras</Link>
              <Link href="/gods" className="text-orange-800 hover:text-orange-600 font-medium">Gods</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-8">
            <span className="text-6xl">🕉️</span>
            <h1 className="text-5xl font-bold text-orange-900">Hindu Mantras</h1>
          </div>
          <p className="text-xl text-orange-700 mb-8 max-w-2xl mx-auto">
            Discover the transformative power of sacred mantras - divine vibrations that 
            heal the mind, purify the soul, and connect us with the cosmic consciousness.
          </p>
        </div>
      </section>

      {/* AdSense */}
      <BannerAd adSlot="1234567898" />

      {/* Mantras Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mantras.map((mantra) => (
              <Link 
                key={mantra.id}
                href={`/mantras/${mantra.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${mantra.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">{mantra.icon}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-orange-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {mantra.name}
                      </h3>
                      <p className="text-orange-600 font-medium">{mantra.title}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-orange-400 group-hover:text-orange-600 transition-colors" />
                  </div>
                  
                  <p className="text-orange-700 mb-4 line-clamp-3">
                    {mantra.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-orange-600">
                    <div className="flex items-center space-x-2">
                      <span>🎯</span>
                      <span>{mantra.purpose}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>🔊</span>
                      <span>{mantra.syllables} syllables</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-900 mb-8">Benefits of Mantra Chanting</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-bold text-orange-900 mb-2">Mental Clarity</h3>
              <p className="text-orange-700">Enhances focus, reduces stress, and brings mental peace</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-lg font-bold text-orange-900 mb-2">Spiritual Growth</h3>
              <p className="text-orange-700">Deepens spiritual connection and accelerates inner transformation</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-bold text-orange-900 mb-2">Positive Energy</h3>
              <p className="text-orange-700">Creates protective aura and attracts positive vibrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">More Mantras Coming Soon</h2>
            <p className="text-lg text-orange-700 mb-6">
              We're adding more powerful mantras including Lakshmi mantras for prosperity, 
              Ganesh mantras for success, and specialized mantras for various life situations.
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
