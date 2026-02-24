import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Sparkles, ChevronRight, Clock, MapPin, Heart, BookOpen } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

// Static data - in production this would be loaded from JSON
const festivalData = {
  id: "holi",
  name: "Holi",
  title: "Festival of Colors",
  description: "Holi is the vibrant Hindu festival of colors celebrating the arrival of spring, the eternal love of Radha and Krishna, and the victory of good over evil. People celebrate by throwing colored powder, dancing, and sharing sweets.",
  duration: "2 days",
  icon: "🎨",
  significance: "Celebrates the divine love of Radha and Krishna, the arrival of spring, and the victory of good over evil.",
  date: "March",
  regions: ["North India", "Nepal", "Bangladesh", "Pakistan", "Mauritius", "Fiji"],
  sections: [
    {
      type: "hero",
      title: "Welcome to Holi",
      content: "Holi, known as the festival of colors, is one of the most joyous and vibrant Hindu festivals. It marks the arrival of spring and celebrates the eternal love between Radha and Krishna."
    },
    {
      type: "historical_significance",
      title: "Historical Significance",
      content: "Holi has ancient roots and is mentioned in Hindu scriptures like the Vedas and Puranas. The festival celebrates various divine events and has been celebrated for thousands of years across the Indian subcontinent."
    },
    {
      type: "stories",
      title: "Famous Stories",
      content: "Holi is associated with several beautiful stories from Hindu mythology, each teaching important moral lessons.",
      subsections: [
        {
          title: "Radha and Krishna's Love",
          content: "The most popular story of Holi celebrates the divine love between Radha and Krishna. Young Krishna, jealous of Radha's fair complexion, playfully colored her face with colors. Radha, in turn, colored Krishna's face, and this divine play became the tradition of applying colors during Holi."
        },
        {
          title: "Prahlada and Holika",
          content: "The festival also commemorates the story of Prahlada, a devout devotee of Lord Vishnu, and his evil aunt Holika. Holika had a boon that made her immune to fire, but when she tried to burn Prahlada, the boon failed and she was burned while Prahlada was saved by Vishnu's protection."
        },
        {
          title: "Kamadeva's Revival",
          content: "In some traditions, Holi also celebrates the revival of Kamadeva, the god of love, who was burned to ashes by Lord Shiva's third eye but later revived on this day."
        }
      ]
    },
    {
      type: "rituals",
      title: "Rituals and Celebrations",
      content: "Holi celebrations span two days with distinct rituals and traditions.",
      subsections: [
        {
          title: "Holika Dahan",
          content: "The first night of Holi involves the Holika Dahan ceremony, where bonfires are lit to symbolize the burning of evil. People gather around the fire, perform rituals, and offer prayers for the destruction of their inner evils."
        },
        {
          title: "Rangwali Holi",
          content: "The second day is the main celebration where people play with colors. Streets come alive with people throwing colored powder (gulal) and colored water, dancing to traditional songs, and sharing festive foods."
        },
        {
          title: "Traditional Foods",
          content: "Special Holi delicacies include gujiya (sweet dumplings), mathri (savory snacks), thandai (cooling drink), and various sweets that are shared among family and friends."
        },
        {
          title: "Cultural Events",
          content: "In regions like Mathura and Vrindavan, Holi celebrations last for over a week with special events like Lathmar Holi, where women playfully beat men with sticks, reenacting Krishna's playful encounters with the gopis."
        }
      ]
    }
  ]
};

export const metadata = {
  title: "Holi Festival - Festival of Colors | Bhakti",
  description: "Complete guide to Holi festival with colors, rituals, stories, and celebrations. Learn about the Festival of Colors and its significance.",
  keywords: ["holi", "festival of colors", "radha krishna", "holi celebrations", "holi colors", "holi rituals", "hindu festival", "spring festival"],
};

export default function HoliPage() {
  const festival = festivalData;
  
  if (!festival) {
    notFound();
  }

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

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={generateBreadcrumbs("festivals", festival.name)} />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className="text-8xl">{festival.icon}</span>
            <div className="text-left">
              <h1 className="text-5xl font-bold text-orange-900 mb-2">{festival.name}</h1>
              <p className="text-2xl text-orange-600 font-medium">{festival.title}</p>
            </div>
          </div>
          <p className="text-xl text-orange-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {festival.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-orange-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">{festival.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">{festival.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{festival.regions.length}+ Regions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Ad */}
      <BannerAd adSlot="1234567102" />

      {/* Main Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {festival.sections.map((section, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-bold text-orange-900 mb-6">{section.title}</h2>
              <div className="prose prose-orange max-w-none">
                <p className="text-lg text-orange-700 leading-relaxed mb-6">{section.content}</p>
                
                {section.subsections && (
                  <div className="space-y-8 mt-8">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-200">
                        <h3 className="text-xl font-bold text-orange-900 mb-3">{subsection.title}</h3>
                        <p className="text-orange-700 leading-relaxed">{subsection.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {index < festival.sections.length - 1 && <InContentAd adSlot={`123456710${index + 3}`} />}
            </div>
          ))}

          {/* Significance Section */}
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-orange-900 mb-6">Spiritual Significance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-orange-900 mb-2">Divine Love</h3>
                  <p className="text-orange-700">Holi celebrates the eternal love between Radha and Krishna, representing the union of the individual soul with the divine.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BookOpen className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-orange-900 mb-2">Equality and Joy</h3>
                  <p className="text-orange-700">During Holi, all social barriers dissolve as everyone comes together to celebrate with colors, symbolizing equality and universal brotherhood.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Festivals */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-orange-900 mb-8">Related Festivals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/festivals/diwali" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-4 text-center">🪔</div>
                <h3 className="text-lg font-bold text-orange-900 text-center group-hover:text-orange-600">Diwali</h3>
                <p className="text-orange-600 text-center text-sm mt-2">Festival of Lights</p>
              </Link>
              <Link href="/festivals/ganesh-chaturthi" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-4 text-center">🐘</div>
                <h3 className="text-lg font-bold text-orange-900 text-center group-hover:text-orange-600">Ganesh Chaturthi</h3>
                <p className="text-orange-600 text-center text-sm mt-2">Lord Ganesha's Birthday</p>
              </Link>
              <Link href="/festivals/navratri" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-4 text-center">💃</div>
                <h3 className="text-lg font-bold text-orange-900 text-center group-hover:text-orange-600">Navratri</h3>
                <p className="text-orange-600 text-center text-sm mt-2">Nine Nights of Goddess</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

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
