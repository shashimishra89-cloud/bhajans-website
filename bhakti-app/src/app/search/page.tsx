'use client';

import { useState, useEffect, Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Sparkles, Search, Filter, Calendar, Heart, Music, Crown } from 'lucide-react';

// Mock search data - in production this would come from Cloudflare D1
const searchData = {
  festivals: [
    {
      id: "diwali",
      name: "Diwali",
      title: "Festival of Lights",
      description: "The most celebrated Hindu festival symbolizing the victory of light over darkness",
      type: "festival",
      tags: ["lights", "lakshmi", "prosperity", "victory", "good over evil"]
    },
    {
      id: "holi",
      name: "Holi",
      title: "Festival of Colors",
      description: "Spring festival celebrating love, joy, and the triumph of good over evil through colors",
      type: "festival",
      tags: ["colors", "spring", "krishna", "radha", "joy", "love"]
    },
    {
      id: "navratri",
      name: "Navratri",
      title: "Nine Nights of the Goddess",
      description: "Nine-day festival honoring Goddess Durga and her nine divine forms",
      type: "festival",
      tags: ["durga", "goddess", "nine nights", "dance", "garba", "shakti"]
    },
    {
      id: "ganesh-chaturthi",
      name: "Ganesh Chaturthi",
      title: "Festival of Lord Ganesha",
      description: "Vibrant festival celebrating the birth of Lord Ganesha, the remover of obstacles",
      type: "festival",
      tags: ["ganesha", "elephant", "obstacles", "wisdom", "modak", "vinayaka"]
    },
    {
      id: "krishna-janmashtami",
      name: "Krishna Janmashtami",
      title: "Birth of Lord Krishna",
      description: "Celebrates the birth of Lord Krishna, the eighth avatar of Lord Vishnu",
      type: "festival",
      tags: ["krishna", "birth", "avatar", "vishnu", "midnight", "dahi handi", "vrindavan"]
    },
    {
      id: "maha-shivaratri",
      name: "Maha Shivaratri",
      title: "The Great Night of Shiva",
      description: "Most significant festival dedicated to Lord Shiva, observed with night-long prayers",
      type: "festival",
      tags: ["shiva", "night", "meditation", "fasting", "cosmic dance", "nilakantha"]
    }
  ],
  gods: [
    {
      id: "krishna",
      name: "Lord Krishna",
      title: "The Divine Cowherd",
      description: "The eighth avatar of Vishnu, known for his teachings in the Bhagavad Gita",
      type: "god",
      tags: ["vishnu", "avatar", "gita", "cowherd", "flute", "radha", "vrindavan"]
    },
    {
      id: "ganesha",
      name: "Lord Ganesha",
      title: "The Remover of Obstacles",
      description: "The elephant-headed deity who removes obstacles and brings good fortune",
      type: "god",
      tags: ["elephant", "obstacles", "wisdom", "prosperity", "vinayaka", "ganapati"]
    },
    {
      id: "durga",
      name: "Goddess Durga",
      title: "The Divine Mother",
      description: "The fierce and protective goddess representing divine feminine power",
      type: "god",
      tags: ["goddess", "mother", "shakti", "protection", "warrior", "mahishasura"]
    },
    {
      id: "rama",
      name: "Lord Rama",
      title: "The Ideal King",
      description: "The seventh avatar of Vishnu, embodying dharma and righteousness",
      type: "god",
      tags: ["vishnu", "avatar", "dharma", "righteousness", "ayodhya", "sita", "ramayana"]
    },
    {
      id: "shiva",
      name: "Lord Shiva",
      title: "The Destroyer and Transformer",
      description: "One of the principal deities, known as the destroyer and transformer within the Trimurti",
      type: "god",
      tags: ["trimurti", "destroyer", "transformer", "nataraja", "dance", "meditation", "trident"]
    }
  ],
  bhajans: [
    {
      id: "krishna-krishna-hare",
      title: "Krishna Krishna Hare Krishna",
      description: "The famous Hare Krishna mantra for divine consciousness",
      type: "bhajan",
      deity: "krishna",
      tags: ["mantra", "hare krishna", "chanting", "meditation", "divine names"]
    },
    {
      id: "vakratunda-mahakaya",
      title: "Vakratunda Mahakaya",
      description: "Powerful shloka praising Ganesha's form and seeking blessings",
      type: "bhajan",
      deity: "ganesha",
      tags: ["shloka", "obstacles", "curved trunk", "mighty body", "sun brilliance"]
    },
    {
      id: "jai-ambe-gauri",
      title: "Jai Ambe Gauri",
      description: "Powerful aarti invoking Goddess Durga's blessings and protection",
      type: "bhajan",
      deity: "durga",
      tags: ["aarti", "divine mother", "protection", "gauri", "shyama"]
    },
    {
      id: "raghupati-raghav",
      title: "Raghupati Raghav Raja Ram",
      description: "Gandhi's favorite bhajan praising Lord Rama as the universal divine",
      type: "bhajan",
      deity: "rama",
      tags: ["gandhi", "universal", "raghu dynasty", "sita ram", "purifier"]
    },
    {
      id: "deepavali-aarti",
      title: "Deepavali Aarti",
      description: "Traditional aarti celebrating the essence of Diwali with lights and blessings",
      type: "bhajan",
      festival: "diwali",
      tags: ["diwali", "lights", "lamps", "darkness", "lakshmi blessings"]
    },
    {
      id: "holi-khele-raghuveera",
      title: "Holi Khele Raghuveera",
      description: "Bhajan celebrating Lord Rama playing Holi in Ayodhya with joy and colors",
      type: "bhajan",
      festival: "holi",
      tags: ["holi", "colors", "rama", "ayodhya", "joy", "gulal"]
    }
  ]
};

const allItems = [...searchData.festivals, ...searchData.gods, ...searchData.bhajans];

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setQuery(query);
    }
  }, [searchParams]);

  const filteredResults = useMemo(() => {
    let results = allItems;

    // Filter by type
    if (selectedCategory !== "all") {
      results = results.filter(item => item.type === selectedCategory);
    }

    // Filter by search query
    if (query.trim()) {
      const queryLower = query.toLowerCase();
      results = results.filter(item => {
        const searchableText = [
          (item as any).name || item.title,
          item.title,
          item.description,
          ...(item.tags || [])
        ].join(" ").toLowerCase();
        
        return searchableText.includes(queryLower);
      });
    }

    return results;
  }, [query, selectedCategory]);

  const getItemIcon = (type: string) => {
    switch (type) {
      case "festival": return <Calendar className="h-5 w-5" />;
      case "god": return <Crown className="h-5 w-5" />;
      case "bhajan": return <Music className="h-5 w-5" />;
      default: return <Heart className="h-5 w-5" />;
    }
  };

  const getItemLink = (item: any) => {
    switch (item.type) {
      case "festival": return `/festivals/${item.id}`;
      case "god": return `/gods/${item.id}`;
      case "bhajan": 
        if (item.deity) return `/gods/${item.deity}`;
        if (item.festival) return `/festivals/${item.festival}`;
        return "#";
      default: return "#";
    }
  };

  const getItemColor = (type: string) => {
    switch (type) {
      case "festival": return "from-orange-400 to-red-500";
      case "god": return "from-purple-400 to-indigo-500";
      case "bhajan": return "from-green-400 to-teal-500";
      default: return "from-gray-400 to-gray-500";
    }
  };

  return (
    <>
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
              <Link href="/gods" className="text-orange-800 hover:text-orange-600 font-medium">Gods</Link>
              <Link href="/search" className="text-white bg-orange-600 px-4 py-2 rounded-lg font-medium">Search</Link>
              <Link href="/about" className="text-orange-800 hover:text-orange-600 font-medium">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Search Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Search className="h-16 w-16 text-orange-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-6">
            Search Bhajans
          </h2>
          <p className="text-xl text-orange-700 mb-8">
            Find festivals, gods, bhajans, and aartis from our comprehensive repository
          </p>
        </div>
      </section>

      {/* Search Interface */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-orange-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search festivals, gods, bhajans, or aartis..."
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-orange-200 rounded-full focus:border-orange-400 focus:outline-none bg-white/90 backdrop-blur-sm"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'all'
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 border-2 border-orange-200 hover:border-orange-400"
              }`}
            >
              <Filter className="h-4 w-4" />
              <span>All ({allItems.length})</span>
            </button>
            <button
              onClick={() => setSelectedCategory('festival')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'festival'
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 border-2 border-orange-200 hover:border-orange-400"
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span>Festivals ({searchData.festivals.length})</span>
            </button>
            <button
              onClick={() => setSelectedCategory('god')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'god'
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 border-2 border-orange-200 hover:border-orange-400"
              }`}
            >
              <Crown className="h-4 w-4" />
              <span>Gods ({searchData.gods.length})</span>
            </button>
            <button
              onClick={() => setSelectedCategory('bhajan')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'bhajan'
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 border-2 border-orange-200 hover:border-orange-400"
              }`}
            >
              <Music className="h-4 w-4" />
              <span>Bhajans ({searchData.bhajans.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {!query ? (
            <div className="mb-6">
              <p className="text-orange-700 mb-4">Found {filteredResults.length} results for "{query}"</p>
            </div>
          ) : (
            <div className="mb-6">
              <p className="text-orange-700 text-lg">
                Found <strong>{filteredResults.length}</strong> results for "<strong>{query}</strong>"
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults.map((item: any, index: number) => (
              <Link key={`${item.type}-${item.id}`} href={getItemLink(item)}>
                <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-orange-100 overflow-hidden">
                  {/* Item Header */}
                  <div className={`bg-gradient-to-r ${getItemColor(item.type)} p-4 text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getItemIcon(item.type)}
                        <span className="text-sm font-medium capitalize">{item.type}</span>
                      </div>
                      <Heart className="h-5 w-5 opacity-80" />
                    </div>
                  </div>

                  {/* Item Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-2 group-hover:text-orange-700 transition-colors">
                      {(item as any).name || item.title}
                    </h3>
                    {item.title && (item as any).name !== item.title && (
                      <p className="text-orange-600 font-medium mb-2">{item.title}</p>
                    )}
                    <p className="text-orange-800 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 3).map((tag: string, index: number) => (
                          <span key={index} className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 3 && (
                          <span className="text-orange-600 text-xs px-2 py-1">
                            +{item.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredResults.length === 0 && query && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-orange-900 mb-2">No results found for "{query}"</h3>
              <p className="text-orange-700 mb-6">
                Try searching with different keywords or browse our collections
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/festivals" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                  Browse Festivals
                </Link>
                <Link href="/gods" className="bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors">
                  Browse Gods
                </Link>
              </div>
            </div>
          )}
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
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-orange-800">Loading search...</p>
          </div>
        </div>
      }>
        <SearchContent />
      </Suspense>
    </div>
  );
}
