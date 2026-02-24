import Link from "next/link";
import { notFound } from "next/navigation";
import { Music, Sparkles, ChevronRight, Clock, Heart, BookOpen, Volume2 } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

// Static data - in production this would be loaded from JSON
const aartiData = {
  id: "ganesh-aarti",
  name: "Ganesh Aarti",
  title: "Jai Ganesh Jai Ganesh Deva",
  description: "The most beloved aarti dedicated to Lord Ganesha, the remover of obstacles and the god of wisdom. This aarti is performed before beginning any new venture or during Ganesh Chaturthi celebrations.",
  duration: "5 minutes",
  icon: "🐘",
  deity: "Lord Ganesha",
  significance: "Invokes Lord Ganesha's blessings for removing obstacles, granting wisdom, and ensuring success in all endeavors.",
  sections: [
    {
      type: "hero",
      title: "Lord Ganesha Aarti",
      content: "The Ganesh Aarti is a powerful devotional hymn that praises Lord Ganesha, the elephant-headed deity who removes obstacles and grants wisdom to his devotees."
    },
    {
      type: "historical_significance",
      title: "Historical Significance",
      content: "This aarti has been sung for centuries in Hindu tradition. It is especially significant during Ganesh Chaturthi and before starting any new work or venture."
    },
    {
      type: "lyrics",
      title: "Complete Aarti Lyrics",
      content: "The complete lyrics of Ganesh Aarti in Hindi with English translation.",
      subsections: [
        {
          title: "Hindi Lyrics",
          content: `जय गणेश जय गणेश देवा
माता जाकी पार्वती पिता महादेवा
एकदंत दयावंत चार भुजाधारी
मस्तक सिंदूर सोहे मूसे की सवारी

अंधे को आंख देत कोढ़ी को काया
बांझ को पुत्र देत निर्धन को माया
सूर श्याम शरण आए सफल कीजे
कामना को पूरण कर लीजे दुखियन को दूर करीजे

दीनन की लाज रखवन वाला
दुखियन के दुख दूर करन वाला
जय गणेश जय गणेश देवा
माता जाकी पार्वती पिता महादेवा

गौरी नंदन गजदंत गणेश
भोग लगावन भक्तन के देश
देवन की देव देव की देवता
जय गणेश जय गणेश देवा

जय गणेश जय गणेश देवा
माता जाकी पार्वती पिता महादेवा
जय गणेश जय गणेश देवा
माता जाकी पार्वती पिता महादेवा`
        },
        {
          title: "English Translation",
          content: `Victory to Lord Ganesha, Victory to Lord Ganesha, O God
Whose mother is Parvati and father is Mahadeva (Shiva)
The single-tusked, compassionate one with four arms
Whose forehead is adorned with vermillion and who rides a mouse

He gives sight to the blind, body to the leper
Son to the barren, wealth to the poor
Sun and Moon take refuge in you, fulfill our wishes
Complete our desires, remove the sorrows of the distressed

The protector of the honor of the poor
The remover of sorrows of the distressed
Victory to Lord Ganesha, Victory to Lord Ganesha, O God
Whose mother is Parvati and father is Mahadeva

Son of Gauri, elephant-faced Ganesha
Who accepts offerings from devotees in their land
God of gods, deity of deities
Victory to Lord Ganesha, Victory to Lord Ganesha, O God

Victory to Lord Ganesha, Victory to Lord Ganesha, O God
Whose mother is Parvati and father is Mahadeva
Victory to Lord Ganesha, Victory to Lord Ganesha, O God
Whose mother is Parvati and father is Mahadeva`
        }
      ]
    },
    {
      type: "meaning",
      title: "Spiritual Meaning",
      content: "The Ganesh Aarti praises Lord Ganesha's divine qualities and seeks his blessings. Each verse highlights different aspects of his power and compassion.",
      subsections: [
        {
          title: "Remover of Obstacles",
          content: "The aarti emphasizes Ganesha's role as Vighnaharta (remover of obstacles), helping devotees overcome challenges in their spiritual and material lives."
        },
        {
          title: "Symbolism of Form",
          content: "The large head represents wisdom and intelligence, while the small eyes indicate concentration. The mouse symbolizes the ego that must be controlled."
        },
        {
          title: "Divine Heritage",
          content: "References to Parvati and Mahadeva remind us of Ganesha's divine lineage and the balance of feminine and masculine energies."
        }
      ]
    },
    {
      type: "benefits",
      title: "Benefits of Reciting",
      content: "Regular recitation of Ganesh Aarti brings numerous spiritual and material benefits to devotees.",
      subsections: [
        {
          title: "Spiritual Benefits",
          content: "Enhances wisdom, removes spiritual obstacles, increases devotion, and brings inner peace and clarity of mind."
        },
        {
          title: "Material Benefits",
          content: "Success in new ventures, removal of career obstacles, prosperity, and fulfillment of sincere desires."
        },
        {
          title: "Mental Benefits",
          content: "Reduces anxiety, increases confidence, improves focus, and promotes positive thinking."
        }
      ]
    }
  ]
};

export const metadata = {
  title: "Ganesh Aarti - Jai Ganesh Jai Ganesh Deva | Bhakti",
  description: "Complete Ganesh Aarti with lyrics in Hindi and English, meaning, and significance. Learn the proper way to perform Lord Ganesha aarti.",
  keywords: ["ganesh aarti", "lord ganesha", "ganpati aarti", "obstacle remover", "wisdom god", "jai ganesh jai ganesh deva", "ganesh chaturthi"],
};

export default function GaneshAartiPage() {
  const aarti = aartiData;
  
  if (!aarti) {
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
              <Link href="/festivals" className="text-orange-800 hover:text-orange-600 font-medium">Festivals</Link>
              <Link href="/aartis" className="text-orange-600 font-semibold">Aartis</Link>
              <Link href="/bhajans" className="text-orange-800 hover:text-orange-600 font-medium">Bhajans</Link>
              <Link href="/mantras" className="text-orange-800 hover:text-orange-600 font-medium">Mantras</Link>
              <Link href="/gods" className="text-orange-800 hover:text-orange-600 font-medium">Gods</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={generateBreadcrumbs("aartis", aarti.name)} />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className="text-8xl">{aarti.icon}</span>
            <div className="text-left">
              <h1 className="text-5xl font-bold text-orange-900 mb-2">{aarti.name}</h1>
              <p className="text-2xl text-orange-600 font-medium">{aarti.title}</p>
            </div>
          </div>
          <p className="text-xl text-orange-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {aarti.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-orange-600">
            <div className="flex items-center space-x-2">
              <Music className="w-5 h-5" />
              <span className="font-medium">{aarti.deity}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">{aarti.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Volume2 className="w-5 h-5" />
              <span className="font-medium">Traditional Melody</span>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Ad */}
      <BannerAd adSlot="1234567200" />

      {/* Main Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {aarti.sections.map((section, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-bold text-orange-900 mb-6">{section.title}</h2>
              <div className="prose prose-orange max-w-none">
                <p className="text-lg text-orange-700 leading-relaxed mb-6">{section.content}</p>
                
                {section.subsections && (
                  <div className="space-y-8 mt-8">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-200">
                        <h3 className="text-xl font-bold text-orange-900 mb-3">{subsection.title}</h3>
                        <p className="text-orange-700 leading-relaxed whitespace-pre-line">{subsection.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {index < aarti.sections.length - 1 && <InContentAd adSlot={`123456720${index + 1}`} />}
            </div>
          ))}

          {/* Significance Section */}
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-orange-900 mb-6">When to Perform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-orange-900 mb-2">Daily Worship</h3>
                  <p className="text-orange-700">Best performed in the morning and evening during daily puja, especially on Tuesdays.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BookOpen className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-orange-900 mb-2">Special Occasions</h3>
                  <p className="text-orange-700">Essential during Ganesh Chaturthi, before starting new ventures, and during housewarming ceremonies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Aartis */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-orange-900 mb-8">Related Aartis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/aartis/lakshmi-aarti" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-4 text-center">💰</div>
                <h3 className="text-lg font-bold text-orange-900 text-center group-hover:text-orange-600">Lakshmi Aarti</h3>
                <p className="text-orange-600 text-center text-sm mt-2">Goddess of Wealth</p>
              </Link>
              <Link href="/aartis/shiva-aarti" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-4 text-center">🔱</div>
                <h3 className="text-lg font-bold text-orange-900 text-center group-hover:text-orange-600">Shiv Aarti</h3>
                <p className="text-orange-600 text-center text-sm mt-2">Lord of Destruction</p>
              </Link>
              <Link href="/aartis/durga-aarti" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-4 text-center">👑</div>
                <h3 className="text-lg font-bold text-orange-900 text-center group-hover:text-orange-600">Durga Aarti</h3>
                <p className="text-orange-600 text-center text-sm mt-2">Divine Mother</p>
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
