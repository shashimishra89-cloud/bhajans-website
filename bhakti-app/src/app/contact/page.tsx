import Link from "next/link";
import { Sparkles, Mail, MessageCircle, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
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
              <Link href="/festivals" className="text-orange-800 hover:text-orange-600 font-medium">Festivals</Link>
              <Link href="/gods" className="text-orange-800 hover:text-orange-600 font-medium">Gods</Link>
              <Link href="/search" className="text-orange-800 hover:text-orange-600 font-medium">Search</Link>
              <Link href="/about" className="text-orange-800 hover:text-orange-600 font-medium">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-orange-100">
          <div className="flex items-center space-x-3 mb-8">
            <MessageCircle className="h-8 w-8 text-orange-600" />
            <h1 className="text-4xl font-bold text-orange-900">Contact Us</h1>
          </div>

          <div className="prose prose-orange max-w-none">
            <p className="text-lg text-orange-800 mb-8">
              We'd love to hear from you! Whether you have questions about our content, suggestions for new bhajans or festivals, or need help with the website, please don't hesitate to reach out.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-900">Email Us</h3>
                </div>
                <p className="text-orange-800 mb-2">For general inquiries:</p>
                <a href="mailto:info@bhakti.com" className="text-orange-600 hover:text-orange-700 font-medium">
                  info@bhakti.com
                </a>
                <p className="text-orange-800 mt-4 mb-2">For content suggestions:</p>
                <a href="mailto:content@bhakti.com" className="text-orange-600 hover:text-orange-700 font-medium">
                  content@bhakti.com
                </a>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-900">Feedback</h3>
                </div>
                <p className="text-orange-800 mb-4">
                  Your feedback helps us improve and add more authentic content to our repository. Let us know:
                </p>
                <ul className="list-disc pl-6 text-orange-800 space-y-1">
                  <li>Missing festivals or gods</li>
                  <li>Bhajan corrections or additions</li>
                  <li>Translation improvements</li>
                  <li>Website suggestions</li>
                </ul>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">About Our Content</h2>
              <p className="text-orange-800 mb-4">
                All bhajans, aartis, and religious content on Bhajans are carefully researched and verified for authenticity. We work with scholars and practitioners to ensure accuracy in our translations and cultural context.
              </p>
              <p className="text-orange-800 mb-4">
                If you notice any errors or have suggestions for improvements, please contact us. We are committed to maintaining the highest standards of authenticity and respect for Hindu traditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Response Time</h2>
              <p className="text-orange-800 mb-4">
                We typically respond to inquiries within 24-48 hours. For content-related questions or corrections, we may take additional time to research and verify information with our cultural consultants.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Contributing Content</h2>
              <p className="text-orange-800 mb-4">
                Are you a scholar, practitioner, or enthusiast of Hindu culture? We welcome contributions of authentic bhajans, aartis, and cultural information. Please contact us at <a href="mailto:content@bhakti.com" className="text-orange-600 hover:text-orange-700 underline">content@bhakti.com</a> with:
              </p>
              <ul className="list-disc pl-6 text-orange-800 space-y-2">
                <li>Original text in Devanagari script</li>
                <li>Accurate English translation</li>
                <li>Cultural context and significance</li>
                <li>Source or traditional reference</li>
              </ul>
            </section>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-orange-900 mb-3">🙏 Namaste</h3>
              <p className="text-orange-800">
                Thank you for being part of our mission to preserve and share the beautiful traditions of Hindu culture. Your support and feedback help us serve the global community better.
              </p>
            </div>
          </div>
        </div>
      </div>

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
            <Link href="/contact" className="text-white font-semibold">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
