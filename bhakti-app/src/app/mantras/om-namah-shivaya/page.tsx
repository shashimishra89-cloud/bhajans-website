import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, ChevronRight, Clock, Heart, BookOpen, Volume2 } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

// Static data - in production this would be loaded from JSON
const mantraData = {
  id: "om-namah-shivaya",
  name: "Om Namah Shivaya",
  title: "Five Syllable Mantra",
  description: "A powerful mantra dedicated to Lord Shiva, representing the five elements and helping devotees overcome negative qualities while cultivating positive virtues.",
  duration: "10-15 minutes",
  icon: "🔱",
  deity: "Lord Shiva",
  significance: "Invokes Lord Shiva's blessings for transformation, destruction of ego, and spiritual enlightenment.",
  sections: [
    {
      type: "hero",
      title: "The Sacred Five Syllables",
      content: "Om Namah Shivaya is one of the most powerful and widely chanted mantras in Hinduism. Each syllable represents a divine quality and together they create a transformative spiritual vibration."
    },
    {
      type: "historical_significance",
      title: "Ancient Wisdom",
      content: "This mantra finds its origins in ancient Vedic texts and has been chanted by sages and devotees for thousands of years. It is mentioned in the Yajur Veda and various Puranas as a means to connect with Lord Shiva."
    },
    {
      type: "meaning",
      title: "Deeper Meaning",
      content: "The mantra carries profound spiritual significance, with each syllable representing different aspects of divine consciousness.",
      subsections: [
        {
          title: "Om - The Cosmic Sound",
          content: "Represents the ultimate reality, the primordial sound from which all creation emerges. It connects us with the universal consciousness."
        },
        {
          title: "Namah - I Bow",
          content: "Expresses humility and surrender, acknowledging the divine nature of Lord Shiva and our position as seekers."
        },
        {
          title: "Shivaya - To Shiva",
          content: "Directs our devotion to Lord Shiva, the transformer and destroyer of ignorance, seeking his grace and blessings."
        },
        {
          title: "The Five Syllables",
          content: "Together, they create a complete spiritual practice that balances the five elements and five senses."
        }
      ]
    },
    {
      type: "benefits",
      title: "Spiritual Benefits",
      content: "Regular chanting of Om Namah Shivaya brings profound transformation and blessings to the practitioner.",
      subsections: [
        {
          title: "Inner Transformation",
          content: "Helps destroy ego, negative thoughts, and attachments that prevent spiritual growth."
        },
        {
          title: "Spiritual Protection",
          content: "Creates a divine shield against negative energies and influences from the external world."
        },
        {
          title: "Enhanced Meditation",
          content: "Deepens meditative experiences and facilitates connection with higher consciousness."
        },
        {
          title: "Karmic Cleansing",
          content: "Helps purify past karmic impressions and accelerates spiritual evolution."
        }
      ]
    },
    {
      type: "practice",
      title: "How to Practice",
      content: "The mantra can be practiced in various ways depending on your spiritual goals and experience level.",
      subsections: [
        {
          title: "Basic Chanting",
          content: "Sit in a quiet, clean space facing east. Take a few deep breaths to center yourself, then begin chanting 'Om Namah Shivaya' slowly and clearly."
        },
        {
          title: "Japa Meditation",
          content: "Use a rudraksha mala (prayer beads) to count 108 repetitions. This helps maintain focus and accumulates spiritual energy."
        },
        {
          title: "Mental Repetition",
          content: "Chant mentally throughout the day during work, travel, or stressful situations to maintain inner peace."
        },
        {
          title: "Water Offering",
          content: "After chanting, offer water to Lord Shiva while pouring from a vessel, symbolizing purification and respect."
        }
      ]
    }
  ]
};

export const metadata = {
  title: "Om Namah Shivaya - Five Syllable Mantra | Bhakti",
  description: "Learn about the powerful Om Namah Shivaya mantra, its meaning, benefits, and how to practice. Connect with Lord Shiva through this sacred chant.",
  keywords: ["om namah shivaya", "lord shiva mantra", "five syllable mantra", "shiva chanting", "hindu meditation", "spiritual transformation"],
};

export default function OmNamahShivayaPage() {
  const mantra = mantraData;
  
  if (!mantra) {
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
              <Link href="/aartis" className="text-orange-800 hover:text-orange-600 font-medium">Aartis</Link>
              <Link href="/bhajans" className="text-orange-800 hover:text-orange-600 font-medium">Bhajans</Link>
              <Link href="/chalisas" className="text-orange-800 hover:text-orange-600 font-medium">Chalisas</Link>
              <Link href="/mantras" className="text-orange-800 hover:text-orange-600 font-medium">Mantras</Link>
              <Link href="/stories" className="text-orange-800 hover:text-orange-600 font-medium">Stories</Link>
              <Link href="/gods" className="text-orange-800 hover:text-orange-600 font-medium">Gods</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={generateBreadcrumbs("mantras", mantra.name)} />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className="text-8xl">{mantra.icon}</span>
            <div className="text-left">
              <h1 className="text-5xl font-bold text-orange-900 mb-2">{mantra.name}</h1>
              <p className="text-2xl text-orange-600 font-medium">{mantra.title}</p>
            </div>
          </div>
          <p className="text-xl text-orange-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {mantra.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-orange-600">
            <div className="flex items-center space-x-2">
              <Volume2 className="w-5 h-5" />
              <span className="font-medium">Sacred Vibration</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">{mantra.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Divine Blessing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Ad */}
      <BannerAd adSlot="1234567301" />

      {/* Main Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {mantra.sections.map((section, index) => (
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
              
              {index < mantra.sections.length - 1 && <InContentAd adSlot={`123456730${index + 2}`} />}
            </div>
          ))}

          {/* Scientific Perspective */}
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-orange-900 mb-6">Scientific Perspective</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <BookOpen className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-orange-900 mb-2">Neurological Effects</h3>
                  <p className="text-orange-700">Research shows that chanting activates brain regions associated with relaxation, focus, and emotional regulation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-orange-900 mb-2">Stress Reduction</h3>
                  <p className="text-orange-700">Regular practice has been shown to reduce cortisol levels and activate the parasympathetic nervous system.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Mantras */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-orange-900 mb-8">Related Mantras</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/mantras/om-mantra" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-4 text-center">🕉️</div>
                <h3 className="text-lg font-bold text-orange-900 text-center group-hover:text-orange-600">Om Mantra</h3>
                <p className="text-orange-600 text-center text-sm mt-2">Primordial Sound</p>
              </Link>
              <Link href="/mantras/gayatri-mantra" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-4 text-center">☀️</div>
                <h3 className="text-lg font-bold text-orange-900 text-center group-hover:text-orange-600">Gayatri Mantra</h3>
                <p className="text-orange-600 text-center text-sm mt-2">Mother of Vedas</p>
              </Link>
              <Link href="/mantras/mahamrityunjaya" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-4 text-center">💀</div>
                <h3 className="text-lg font-bold text-orange-900 text-center group-hover:text-orange-600">Mahamrityunjaya</h3>
                <p className="text-orange-600 text-center text-sm mt-2">Death Conquering</p>
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
