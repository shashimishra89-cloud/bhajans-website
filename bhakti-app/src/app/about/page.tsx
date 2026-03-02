import Link from "next/link";
import { Sparkles, Heart, BookOpen, Target, Users } from "lucide-react";

export const metadata = {
  title: "About Us - Bhakti",
  description: "Learn about Bhakti's mission to preserve and share Hindu devotional content. Discover our commitment to authenticity, accessibility, and spiritual education.",
  keywords: ["about bhakti", "hindu devotional platform", "spiritual mission", "cultural preservation"],
};

export default function AboutPage() {
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-8">
            <Heart className="w-16 h-16 text-orange-600" />
            <h1 className="text-5xl font-bold text-orange-900">About Bhakti</h1>
          </div>
          <p className="text-xl text-orange-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            A sacred digital sanctuary where ancient Hindu traditions meet modern accessibility. 
            We are dedicated to preserving and sharing the rich tapestry of devotional content 
            for generations to come.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-900 mb-6">Our Sacred Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">Preserve Tradition</h3>
              <p className="text-orange-700 leading-relaxed">
                Safeguard ancient wisdom and devotional practices in their authentic form
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">Make Accessible</h3>
              <p className="text-orange-700 leading-relaxed">
                Bring sacred content to everyone, everywhere, in beautiful and easy-to-use format
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">Build Community</h3>
              <p className="text-orange-700 leading-relaxed">
                Connect devotees worldwide and foster spiritual growth through shared knowledge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-6 text-center">Our Story</h2>
            
            <div className="prose prose-lg max-w-none text-orange-800">
              <p className="mb-6 leading-relaxed">
                <strong>Bhakti</strong> was born from a deep reverence for Hindu spiritual traditions and a recognition 
                that in our fast-paced digital world, sacred knowledge needed a dedicated home. We observed devotees 
                struggling to find authentic, well-organized content scattered across countless websites and apps.
              </p>
              
              <p className="mb-6 leading-relaxed">
                Our journey began with a simple question: <em>"What if there was one place where every festival, 
                aarti, bhajan, mantra, and devotional story could be found with ease and reverence?"</em> 
                This question evolved into our sacred mission to create the most comprehensive, authentic, and accessible 
                platform for Hindu devotional content.
              </p>
              
              <p className="mb-6 leading-relaxed">
                Today, Bhakti serves thousands of devotees worldwide, offering carefully curated content that 
                honors the depth and beauty of Hindu traditions. Every piece of content is researched, verified, 
                and presented with the respect it deserves.
              </p>
              
              <p className="leading-relaxed italic text-center text-orange-700">
                "We are not just preserving content; we are nurturing the eternal flame of devotion 
                that has illuminated countless souls for millennia."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-900 mb-6">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-orange-900 mb-4">🙏 Authenticity</h3>
              <p className="text-orange-700 leading-relaxed mb-4">
                Every bhajan, aarti, and mantra is verified for accuracy and cultural authenticity. 
                We work with scholars and practitioners to ensure our content respects traditional knowledge.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-orange-900 mb-4">🕉️ Reverence</h3>
              <p className="text-orange-700 leading-relaxed mb-4">
                We approach all content with deep respect for its spiritual significance. Our platform honors 
                the sacred nature of these traditions and presents them with the dignity they deserve.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-orange-900 mb-4">📚 Education</h3>
              <p className="text-orange-700 leading-relaxed mb-4">
                Beyond providing content, we offer context, meanings, and cultural significance to help 
                users deepen their understanding and practice of Bhakti.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-orange-900 mb-4">🌍 Inclusivity</h3>
              <p className="text-orange-700 leading-relaxed mb-4">
                Bhakti welcomes everyone regardless of background, knowledge level, or spiritual path. 
                We believe devotion is universal and should be accessible to all who seek it.
              </p>
            </div>
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
              <Link href="/chalisas" className="text-orange-200 hover:text-white transition-colors">Chalisas</Link>
              <Link href="/mantras" className="text-orange-200 hover:text-white transition-colors">Mantras</Link>
              <Link href="/stories" className="text-orange-200 hover:text-white transition-colors">Stories</Link>
              <Link href="/gods" className="text-orange-200 hover:text-white transition-colors">Gods</Link>
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
