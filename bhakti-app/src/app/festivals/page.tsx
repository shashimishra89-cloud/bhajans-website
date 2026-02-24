import Link from "next/link";
import { Calendar, Sparkles, ChevronRight } from "lucide-react";
import { BannerAd } from "@/components/AdBlock";

export const metadata = {
  title: "Hindu Festivals - Bhakti",
  description: "Explore the rich heritage of Hindu festivals with detailed information, rituals, and significance. Discover Diwali, Holi, Navratri, Ganesh Chaturthi and more.",
  keywords: ["hindu festivals", "diwali", "holi", "navratri", "ganesh chaturthi", "hindu celebrations", "indian festivals"],
};

// Festival data
const festivals = [
  {
    id: "diwali",
    name: "Diwali",
    title: "Festival of Lights",
    description: "The Hindu festival of lights, symbolizing the victory of light over darkness, good over evil.",
    icon: "🪔",
    color: "from-orange-400 to-yellow-500",
    date: "October/November",
    duration: "5 days"
  },
  {
    id: "holi",
    name: "Holi",
    title: "Festival of Colors",
    description: "The vibrant festival of colors celebrating the arrival of spring and the victory of good over evil.",
    icon: "🎨",
    color: "from-pink-400 to-purple-500",
    date: "March",
    duration: "2 days"
  },
  {
    id: "navratri",
    name: "Navratri",
    title: "Nine Nights of Goddess",
    description: "Nine nights dedicated to the nine forms of Goddess Durga, celebrated with dance and devotion.",
    icon: "💃",
    color: "from-red-400 to-orange-500",
    date: "October/November",
    duration: "9 nights"
  },
  {
    id: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    title: "Lord Ganesha's Birthday",
    description: "Celebration of the birth of Lord Ganesha, the remover of obstacles.",
    icon: "🐘",
    color: "from-green-400 to-teal-500",
    date: "August/September",
    duration: "10 days"
  }
];

export default function FestivalsPage() {
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
              <Link href="/festivals" className="text-orange-600 font-semibold">Festivals</Link>
              <Link href="/aartis" className="text-orange-800 hover:text-orange-600 font-medium">Aartis</Link>
              <Link href="/bhajans" className="text-orange-800 hover:text-orange-600 font-medium">Bhajans</Link>
              <Link href="/mantras" className="text-orange-800 hover:text-orange-600 font-medium">Mantras</Link>
              <Link href="/gods" className="text-orange-800 hover:text-orange-600 font-medium">Gods</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-8">
            <Calendar className="w-12 h-12 text-orange-600" />
            <h1 className="text-5xl font-bold text-orange-900">Hindu Festivals</h1>
          </div>
          <p className="text-xl text-orange-700 mb-8 max-w-2xl mx-auto">
            Discover the vibrant tapestry of Hindu festivals, each celebrating divine stories, 
            seasonal changes, and eternal values that have been cherished for millennia.
          </p>
        </div>
      </section>

      {/* AdSense */}
      <BannerAd adSlot="1234567895" />

      {/* Festivals Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {festivals.map((festival) => (
              <Link 
                key={festival.id}
                href={`/festivals/${festival.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${festival.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">{festival.icon}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {festival.name}
                      </h3>
                      <p className="text-orange-600 font-medium">{festival.title}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-orange-400 group-hover:text-orange-600 transition-colors" />
                  </div>
                  
                  <p className="text-orange-700 mb-4 line-clamp-2">
                    {festival.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-orange-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{festival.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>⏱</span>
                      <span>{festival.duration}</span>
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
            <h2 className="text-3xl font-bold text-orange-900 mb-4">More Festivals Coming Soon</h2>
            <p className="text-lg text-orange-700 mb-6">
              We're working on bringing you detailed information about many more Hindu festivals including 
              Raksha Bandhan, Janmashtami, Durga Puja, and more.
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
