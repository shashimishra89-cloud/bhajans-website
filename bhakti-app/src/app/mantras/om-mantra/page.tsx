import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, ChevronRight, Clock, Heart, BookOpen, Volume2 } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

// Static data - in production this would be loaded from JSON
const mantraData = {
  id: "om-mantra",
  name: "Om Mantra",
  title: "The Primordial Sound",
  description: "The most sacred and fundamental mantra in Hinduism, representing the ultimate reality and cosmic vibration. Om is considered the sound of the universe and the essence of all Vedas.",
  duration: "5-15 minutes",
  icon: "🕉️",
  significance: "Represents the ultimate reality, consciousness, and the cosmic vibration from which all creation emerges.",
  sections: [
    {
      type: "hero",
      title: "The Sacred Om",
      content: "Om is not just a sound but the vibration of the universe itself. It is the primordial sound from which all creation emerged and represents the ultimate reality, Brahman."
    },
    {
      type: "historical_significance",
      title: "Ancient Origins",
      content: "The Om mantra has its roots in ancient Vedic texts and is mentioned in the Upanishads as the essence of all teachings. It has been chanted by sages and seekers for thousands of years as a means to connect with the divine."
    },
    {
      type: "meaning",
      title: "Symbolism and Meaning",
      content: "The symbol Om represents the complete cosmic reality and consists of four parts, each with deep spiritual significance.",
      subsections: [
        {
          title: "The Three Sounds",
          content: "Om is composed of three distinct sounds: A-U-M, representing the three states of consciousness and the three major Hindu deities - Brahma (creator), Vishnu (preserver), and Shiva (transformer)."
        },
        {
          title: "The Bindu",
          content: "The dot above the three curves (bindu) represents the fourth state - Turiya, or pure consciousness, beyond the three states of waking, dreaming, and deep sleep."
        },
        {
          title: "The Crescent",
          content: "The overall shape represents the individual soul's journey from ignorance to enlightenment, and the ultimate merging with the universal consciousness."
        }
      ]
    },
    {
      type: "benefits",
      title: "Benefits of Chanting",
      content: "Regular chanting of Om brings profound spiritual and psychological benefits to practitioners.",
      subsections: [
        {
          title: "Spiritual Benefits",
          content: "Creates deep inner peace, enhances spiritual awareness, connects with universal consciousness, and accelerates spiritual growth."
        },
        {
          title: "Mental Benefits",
          content: "Reduces stress and anxiety, improves focus and concentration, calms the mind, and enhances mental clarity."
        },
        {
          title: "Physical Benefits",
          content: "Lowers blood pressure, improves breathing, strengthens the respiratory system, and promotes overall physical relaxation."
        },
        {
          title: "Emotional Benefits",
          content: "Balances emotions, increases feelings of well-being, reduces negative thoughts, and promotes emotional stability."
        }
      ]
    },
    {
      type: "practice",
      title: "How to Practice",
      content: "The Om mantra can be practiced in various ways depending on your experience and spiritual goals.",
      subsections: [
        {
          title: "Basic Chanting",
          content: "Sit comfortably in a quiet place, close your eyes, take a deep breath, and chant 'Om' slowly and deeply. Focus on the vibration and feeling it resonate through your body."
        },
        {
          title: "Japa Meditation",
          content: "Use a mala (prayer beads) to count 108 repetitions of Om. This helps maintain focus and deepens the meditative experience."
        },
        {
          title: "Mental Chanting",
          content: "Chant Om mentally throughout the day during work, travel, or stressful situations to maintain inner peace and focus."
        },
        {
          title: "Group Chanting",
          content: "Participate in group chanting sessions to experience the amplified collective energy and community connection."
        }
      ]
    }
  ]
};

export const metadata = {
  title: "Om Mantra - The Primordial Sound | Bhakti",
  description: "Learn about the sacred Om mantra, its meaning, benefits, and how to practice. Discover the primordial sound of the universe.",
  keywords: ["om mantra", "primordial sound", "universal vibration", "meditation mantra", "hindu chanting", "spiritual practice", "om meaning"],
};

export default function OmMantraPage() {
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
              <Link href="/mantras" className="text-orange-600 font-semibold">Mantras</Link>
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
              <span className="font-medium">Universal Vibration</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">{mantra.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Sacred Sound</span>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Ad */}
      <BannerAd adSlot="1234567300" />

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
              
              {index < mantra.sections.length - 1 && <InContentAd adSlot={`123456730${index + 1}`} />}
            </div>
          ))}

          {/* Scientific Perspective */}
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-orange-900 mb-6">Scientific Perspective</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <BookOpen className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-orange-900 mb-2">Frequency Research</h3>
                  <p className="text-orange-700">Studies show that chanting Om creates specific brainwave patterns associated with deep meditation and relaxation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-orange-900 mb-2">Vibrational Healing</h3>
                  <p className="text-orange-700">The 432 Hz frequency of Om is believed to have healing properties and harmonize with natural rhythms.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Mantras */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-orange-900 mb-8">Related Mantras</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/mantras/om-namah-shivaya" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-4 text-center">🔱</div>
                <h3 className="text-lg font-bold text-orange-900 text-center group-hover:text-orange-600">Om Namah Shivaya</h3>
                <p className="text-orange-600 text-center text-sm mt-2">Lord Shiva Mantra</p>
              </Link>
              <Link href="/mantras/gayatri-mantra" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-4 text-center">☀️</div>
                <h3 className="text-lg font-bold text-orange-900 text-center group-hover:text-orange-600">Gayatri Mantra</h3>
                <p className="text-orange-600 text-center text-sm mt-2">Mother of Vedas</p>
              </Link>
              <Link href="/mantras/mahamrityunjaya" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-4 text-center">💀</div>
                <h3 className="text-lg font-bold text-orange-900 text-center group-hover:text-orange-600">Mahamrityunjaya</h3>
                <p className="text-orange-600 text-center text-sm mt-2">Death Conquering Mantra</p>
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
