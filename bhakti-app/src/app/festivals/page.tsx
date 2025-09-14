import Link from "next/link";
import { Sparkles, Calendar, Users, Heart } from "lucide-react";

const festivals = [
  {
    id: "diwali",
    name: "Diwali",
    title: "Festival of Lights",
    description: "The most celebrated Hindu festival, symbolizing the victory of light over darkness and good over evil.",
    duration: "5 days",
    icon: "🪔",
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: "holi",
    name: "Holi", 
    title: "Festival of Colors",
    description: "Spring festival celebrating love, joy, and the triumph of good over evil through colors and music.",
    duration: "2 days",
    icon: "🎨",
    color: "from-pink-400 to-red-500"
  },
  {
    id: "navratri",
    name: "Navratri",
    title: "Nine Nights of the Goddess", 
    description: "Nine-day festival honoring Goddess Durga and her nine divine forms (Navadurga).",
    duration: "9 nights, 10 days",
    icon: "🌙",
    color: "from-purple-400 to-indigo-500"
  },
  {
    id: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    title: "Festival of Lord Ganesha",
    description: "A vibrant Hindu festival celebrating the birth of Lord Ganesha, the remover of obstacles.",
    duration: "11 days", 
    icon: "🐘",
    color: "from-green-400 to-teal-500"
  }
];

export default function FestivalsPage() {
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
              <Link href="/festivals" className="text-orange-600 font-semibold">Festivals</Link>
              <Link href="/gods" className="text-orange-800 hover:text-orange-600 font-medium">Gods</Link>
              <Link href="/search" className="text-orange-800 hover:text-orange-600 font-medium">Search</Link>
              <Link href="/about" className="text-orange-800 hover:text-orange-600 font-medium">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="h-16 w-16 text-orange-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-6">
            Hindu Festivals
          </h2>
          <p className="text-xl text-orange-700 mb-8 max-w-2xl mx-auto">
            Discover the rich traditions, sacred rituals, and devotional songs of Hindu festivals celebrated throughout the year
          </p>
        </div>
      </section>

      {/* Festivals Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festivals.map((festival) => (
              <Link key={festival.id} href={`/festivals/${festival.id}`}>
                <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-orange-100 overflow-hidden">
                  {/* Festival Header */}
                  <div className={`bg-gradient-to-r ${festival.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{festival.name}</h3>
                        <p className="text-lg opacity-90">{festival.title}</p>
                      </div>
                      <div className="text-5xl">{festival.icon}</div>
                    </div>
                  </div>

                  {/* Festival Content */}
                  <div className="p-6">
                    <p className="text-orange-800 mb-4 leading-relaxed">
                      {festival.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-orange-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{festival.duration}</span>
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
          <h3 className="text-3xl font-bold text-orange-900 mb-8">What You'll Find</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-orange-900 mb-2">Festival Stories</h4>
              <p className="text-orange-700">Learn the significance and mythology behind each celebration</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-orange-900 mb-2">Sacred Songs</h4>
              <p className="text-orange-700">Complete bhajans and aartis with Hindi text and English translations</p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-orange-900 mb-2">Rituals & Traditions</h4>
              <p className="text-orange-700">Discover the customs and practices of each festival</p>
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
