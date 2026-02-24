import Link from "next/link";
import { BookOpen, Sparkles, ChevronRight } from "lucide-react";
import { BannerAd } from "@/components/AdBlock";

export const metadata = {
  title: "Devotional Stories - Bhakti",
  description: "Collection of Hindu devotional stories, mythological tales, and spiritual narratives. Discover inspiring stories from Puranas, Ramayana, and Mahabharata.",
  keywords: ["hindu stories", "devotional stories", "mythological tales", "purana stories", "ramayana stories", "mahabharata stories"],
};

// Stories data
const stories = [
  {
    id: "ganesh-and-the-moon",
    name: "Ganesh and the Moon",
    title: "Why Lord Ganesha Cursed the Moon",
    description: "The fascinating story of why Lord Ganesha cursed the moon and why we avoid looking at the moon on Ganesh Chaturthi.",
    icon: "🌙",
    color: "from-blue-400 to-indigo-500",
    category: "Ganesha Stories",
    moral: "Humility and Respect"
  },
  {
    id: "krishna-and-pootana",
    name: "Krishna and Pootana",
    title: "The Demon Who Came as a Mother",
    description: "The story of how baby Krishna defeated the demon Pootana who came disguised as a beautiful woman to kill him.",
    icon: "👶",
    color: "from-purple-400 to-pink-500",
    category: "Krishna Stories",
    moral: "Divine Protection"
  },
  {
    id: "dhruva-the-devotee",
    name: "Dhruva the Devotee",
    title: "The Boy Who Became a Star",
    description: "The inspiring story of young Dhruva's unwavering devotion and how he attained the blessing of becoming the Pole Star.",
    icon: "⭐",
    color: "from-yellow-400 to-orange-500",
    category: "Devotional Stories",
    moral: "Perseverance and Faith"
  },
  {
    id: "prahlada-the-faithful",
    name: "Prahlada the Faithful",
    title: "The Boy Who Defied His Father",
    description: "The remarkable story of Prahlada, the young devotee of Vishnu who maintained his faith despite his father's cruelty.",
    icon: "🦁",
    color: "from-red-400 to-orange-500",
    category: "Vishnu Stories",
    moral: "Unshakeable Faith"
  },
  {
    id: "savitri-and-satyavan",
    name: "Savitri and Satyavan",
    title: "The Wife Who Defeated Death",
    description: "The legendary story of Savitri's devotion and wisdom in convincing Yama, the god of death, to restore her husband's life.",
    icon: "💑",
    color: "from-pink-400 to-purple-500",
    category: "Love Stories",
    moral: "True Love and Devotion"
  },
  {
    id: "gajendra-moksha",
    name: "Gajendra Moksha",
    title: "The Elephant's Liberation",
    description: "The story of how Lord Vishnu saved his devotee, the elephant king Gajendra, from the clutches of a crocodile.",
    icon: "🐘",
    color: "from-green-400 to-teal-500",
    category: "Vishnu Stories",
    moral: "Divine Rescue"
  }
];

export default function StoriesPage() {
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
            <BookOpen className="w-12 h-12 text-orange-600" />
            <h1 className="text-5xl font-bold text-orange-900">Devotional Stories</h1>
          </div>
          <p className="text-xl text-orange-700 mb-8 max-w-2xl mx-auto">
            Journey through the timeless tales of Hindu mythology - stories that inspire, 
            teach, and guide us on the path of righteousness and spiritual wisdom.
          </p>
        </div>
      </section>

      {/* AdSense */}
      <BannerAd adSlot="1234567899" />

      {/* Stories Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Link 
                key={story.id}
                href={`/stories/${story.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${story.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">{story.icon}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-orange-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {story.name}
                      </h3>
                      <p className="text-orange-600 font-medium">{story.title}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-orange-400 group-hover:text-orange-600 transition-colors" />
                  </div>
                  
                  <p className="text-orange-700 mb-4 line-clamp-3">
                    {story.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-orange-600">
                    <div className="flex items-center space-x-2">
                      <span>📚</span>
                      <span>{story.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>💡</span>
                      <span>{story.moral}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-900 mb-8">Story Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐘</span>
              </div>
              <h3 className="text-lg font-bold text-orange-900 mb-2">Ganesha Stories</h3>
              <p className="text-orange-700">Tales of wisdom and the remover of obstacles</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-lg font-bold text-orange-900 mb-2">Krishna Stories</h3>
              <p className="text-orange-700">Divine leelas and teachings of the blue god</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔱</span>
              </div>
              <h3 className="text-lg font-bold text-orange-900 mb-2">Vishnu Stories</h3>
              <p className="text-orange-700">Avatars and divine interventions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">More Stories Coming Soon</h2>
            <p className="text-lg text-orange-700 mb-6">
              We're adding more inspiring stories from the Ramayana, Mahabharata, Puranas, 
              and tales of saints and devotees that continue to inspire generations.
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
