import Link from "next/link";
import { Sparkles, Crown, Heart, Star } from "lucide-react";

const gods = [
  {
    id: "krishna",
    name: "Lord Krishna",
    title: "The Divine Cowherd",
    description: "The eighth avatar of Vishnu, known for his teachings in the Bhagavad Gita and his playful, loving nature.",
    domain: "Love, Compassion, Divine Play",
    icon: "🦚",
    color: "from-blue-400 to-indigo-600"
  },
  {
    id: "ganesha",
    name: "Lord Ganesha", 
    title: "The Remover of Obstacles",
    description: "The elephant-headed deity who removes obstacles and brings good fortune, wisdom, and new beginnings.",
    domain: "Wisdom, Prosperity, New Beginnings",
    icon: "🐘",
    color: "from-orange-400 to-red-500"
  },
  {
    id: "durga",
    name: "Goddess Durga",
    title: "The Divine Mother",
    description: "The fierce and protective goddess who represents divine feminine power and the triumph of good over evil.",
    domain: "Protection, Strength, Divine Feminine",
    icon: "🌺",
    color: "from-pink-400 to-purple-600"
  },
  {
    id: "rama",
    name: "Lord Rama",
    title: "The Ideal King",
    description: "The seventh avatar of Vishnu, embodying dharma, righteousness, and the perfect devotion of a son, husband, and king.",
    domain: "Dharma, Righteousness, Honor",
    icon: "🏹",
    color: "from-green-400 to-teal-600"
  }
];

export default function GodsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-orange-600" />
              <h1 className="text-2xl font-bold text-orange-900">Bhajans</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-orange-800 hover:text-orange-600 font-medium">Festivals</Link>
              <Link href="/gods" className="text-orange-600 font-semibold">Gods</Link>
              <Link href="/search" className="text-orange-800 hover:text-orange-600 font-medium">Search</Link>
              <Link href="/about" className="text-orange-800 hover:text-orange-600 font-medium">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="h-16 w-16 text-orange-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-6">
            Hindu Deities
          </h2>
          <p className="text-xl text-orange-700 mb-8 max-w-2xl mx-auto">
            Explore the divine forms, sacred stories, and devotional songs dedicated to the beloved deities of Hindu tradition
          </p>
        </div>
      </section>

      {/* Gods Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gods.map((god) => (
              <Link key={god.id} href={`/gods/${god.id}`}>
                <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-orange-100 overflow-hidden">
                  {/* God Header */}
                  <div className={`bg-gradient-to-r ${god.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{god.name}</h3>
                        <p className="text-lg opacity-90">{god.title}</p>
                      </div>
                      <div className="text-5xl">{god.icon}</div>
                    </div>
                  </div>

                  {/* God Content */}
                  <div className="p-6">
                    <p className="text-orange-800 mb-4 leading-relaxed">
                      {god.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-orange-600">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4" />
                          <span>{god.domain}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-orange-600 group-hover:text-orange-700">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm font-medium">View Bhajans & Aartis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-orange-900 mb-8">Divine Wisdom & Devotion</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Crown className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-orange-900 mb-2">Sacred Stories</h4>
              <p className="text-orange-700">Discover the divine leelas and teachings of each deity</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-orange-900 mb-2">Devotional Songs</h4>
              <p className="text-orange-700">Beautiful bhajans and aartis with original text and translations</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-orange-900 mb-2">Spiritual Guidance</h4>
              <p className="text-orange-700">Learn the virtues and teachings each deity represents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <h3 className="text-xl font-bold">Bhajans</h3>
          </div>
          <p className="text-orange-200 mb-6">Preserving and sharing the sacred traditions of Hindu culture</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <Link href="/festivals" className="text-orange-200 hover:text-white">Festivals</Link>
            <Link href="/aartis" className="text-orange-200 hover:text-white">Aartis</Link>
            <Link href="/bhajans" className="text-orange-200 hover:text-white">Bhajans</Link>
            <Link href="/chalisas" className="text-orange-200 hover:text-white">Chalisas</Link>
            <Link href="/mantras" className="text-orange-200 hover:text-white">Mantras</Link>
            <Link href="/stories" className="text-orange-200 hover:text-white">Stories</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
