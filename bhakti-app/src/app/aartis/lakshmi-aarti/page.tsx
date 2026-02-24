import Link from "next/link";
import { notFound } from "next/navigation";
import { Music, Sparkles, ChevronRight, Clock, Heart, BookOpen, Volume2 } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

// Static data - in production this would be loaded from JSON
const aartiData = {
  id: "lakshmi-aarti",
  name: "Lakshmi Aarti",
  title: "Om Jai Lakshmi Mata",
  description: "A powerful devotional prayer to Goddess Lakshmi, the goddess of wealth, fortune, and prosperity. This aarti is performed to seek her blessings for abundance and success in life.",
  duration: "6 minutes",
  icon: "💰",
  deity: "Goddess Lakshmi",
  significance: "Invokes Goddess Lakshmi's blessings for wealth, prosperity, good fortune, and spiritual abundance.",
  sections: [
    {
      type: "hero",
      title: "Goddess Lakshmi Aarti",
      content: "The Lakshmi Aarti is a beautiful hymn dedicated to Goddess Lakshmi, the divine embodiment of wealth, prosperity, and fortune. She is worshipped as the provider of both material and spiritual abundance."
    },
    {
      type: "historical_significance",
      title: "Historical Significance",
      content: "Goddess Lakshmi has been worshipped since Vedic times as the goddess of wealth and prosperity. This aarti has been sung for centuries, especially during Diwali, when Lakshmi is believed to visit homes and bless them with abundance."
    },
    {
      type: "lyrics",
      title: "Complete Aarti Lyrics",
      content: "The complete lyrics of Lakshmi Aarti in Hindi with English translation.",
      subsections: [
        {
          title: "Hindi Lyrics",
          content: `ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता
तुमको निसदिन सेवत, हर विषय विराटा
दीन की रखवाली, करो सदा भगवान
करो दुखन को नाश, भगतन की आस

जय लक्ष्मी माता, मैया जय लक्ष्मी माता
तुमको निसदिन सेवत, हर विषय विराटा

कंचन से तुम्हारा भवन, साकर से तुम्हारा थान
चाँदी से तुम्हारा पाँव, सोने से तुम्हारा बान
गज सवारी महारानी, चम्पक बेली बार
भृगु तुम्हारी सेवक, नारद गुन गान

जय लक्ष्मी माता, मैया जय लक्ष्मी माता
तुमको निसदिन सेवत, हर विषय विराटा

शुभ गुन सागर, गुन अमृत धार
जग की जननी, तुम शुभ करन हार
सुख सम्पत्ति की खान, दुख दारिद की नाश
अष्ट सिद्धि नव निधि, तुम ही दाता

जय लक्ष्मी माता, मैया जय लक्ष्मी माता
तुमको निसदिन सेवत, हर विषय विराटा

माँ तुम ही जग की माता, ब्रह्मा विष्णु महेश
सर्व सुख की खान, सर्व विधा की रेश
करो भगतन की सेवा, सुन विनती अपार
दीन की लाज रखवन, दुखियन के दुख नाश

जय लक्ष्मी माता, मैया जय लक्ष्मी माता
तुमको निसदिन सेवत, हर विषय विराटा`
        },
        {
          title: "English Translation",
          content: `Om Victory to Mother Lakshmi, Maya Victory to Mother Lakshmi
You are served daily, in every aspect of life
Protect the poor, always, O God
Destroy the sorrows, fulfill the hopes of devotees

Victory to Mother Lakshmi, Maya Victory to Mother Lakshmi
You are served daily, in every aspect of life

Your abode is made of gold, your throne of silver
Your feet are of silver, your clothes of gold
Queen riding an elephant, with champak flower garland
Sage Bhrigu is your servant, Narada sings your praises

Victory to Mother Lakshmi, Maya Victory to Mother Lakshmi
You are served daily, in every aspect of life

Ocean of virtuous qualities, stream of nectar-like virtues
Mother of the world, you are the refuge of good deeds
Treasure of happiness and wealth, destroyer of poverty
Eight siddhis and nine treasures, you are the giver

Victory to Mother Lakshmi, Maya Victory to Mother Lakshmi
You are served daily, in every aspect of life

Mother, you are the mother of the world, Brahma, Vishnu, Mahesh
Treasure of all happiness, essence of all arts
Serve the devotees, hear their endless prayers
Protect the honor of the poor, destroy the sorrows of the distressed

Victory to Mother Lakshmi, Maya Victory to Mother Lakshmi
You are served daily, in every aspect of life`
        }
      ]
    },
    {
      type: "meaning",
      title: "Spiritual Meaning",
      content: "The Lakshmi Aarti praises the divine qualities of Goddess Lakshmi and seeks her blessings for both material and spiritual prosperity.",
      subsections: [
        {
          title: "Wealth and Wisdom",
          content: "The aarti emphasizes that true wealth includes not just material abundance but also wisdom, virtues, and spiritual prosperity."
        },
        {
          title: "Divine Protection",
          content: "Goddess Lakshmi is portrayed as the protector of the poor and destroyer of poverty, showing her compassionate nature."
        },
        {
          title: "Universal Mother",
          content: "References to her being the mother of the world and served by all gods highlight her supreme position in the divine hierarchy."
        }
      ]
    },
    {
      type: "benefits",
      title: "Benefits of Reciting",
      content: "Regular recitation of Lakshmi Aarti brings numerous blessings to devotees.",
      subsections: [
        {
          title: "Material Benefits",
          content: "Attracts wealth, prosperity, success in business, financial stability, and abundance in all areas of life."
        },
        {
          title: "Spiritual Benefits",
          content: "Enhances spiritual wealth, removes inner poverty, increases devotion, and brings peace and contentment."
        },
        {
          title: "Family Benefits",
          content: "Brings harmony to family, removes conflicts, ensures well-being of children, and protects the household."
        }
      ]
    }
  ]
};

export const metadata = {
  title: "Lakshmi Aarti - Om Jai Lakshmi Mata | Bhakti",
  description: "Complete Lakshmi Aarti with lyrics in Hindi and English, meaning, and significance. Learn the proper way to perform Goddess Lakshmi aarti.",
  keywords: ["lakshmi aarti", "goddess lakshmi", "wealth goddess", "prosperity aarti", "diwali aarti", "om jai lakshmi mata", "hindu wealth prayer"],
};

export default function LakshmiAartiPage() {
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
      <BannerAd adSlot="1234567201" />

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
              
              {index < aarti.sections.length - 1 && <InContentAd adSlot={`123456720${index + 2}`} />}
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
                  <p className="text-orange-700">Best performed in the evening during daily puja, especially on Fridays.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BookOpen className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-orange-900 mb-2">Special Occasions</h3>
                  <p className="text-orange-700">Essential during Diwali Lakshmi Puja, new business launches, and housewarming ceremonies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Aartis */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-orange-900 mb-8">Related Aartis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/aartis/ganesh-aarti" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-4 text-center">🐘</div>
                <h3 className="text-lg font-bold text-orange-900 text-center group-hover:text-orange-600">Ganesh Aarti</h3>
                <p className="text-orange-600 text-center text-sm mt-2">Lord of Wisdom</p>
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
