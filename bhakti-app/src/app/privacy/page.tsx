import Link from "next/link";
import { Sparkles, Shield, Eye, Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
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
            <Shield className="h-8 w-8 text-orange-600" />
            <h1 className="text-4xl font-bold text-orange-900">Privacy Policy</h1>
          </div>

          <div className="prose prose-orange max-w-none">
            <p className="text-lg text-orange-800 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2" />
                Information We Collect
              </h2>
              <p className="text-orange-800 mb-4">
                At Bhajans, we are committed to protecting your privacy. We collect minimal information to provide you with the best experience:
              </p>
              <ul className="list-disc pl-6 text-orange-800 space-y-2">
                <li>Search queries to improve our content recommendations</li>
                <li>Basic analytics data to understand how our site is used</li>
                <li>Cookies for site functionality and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-2" />
                How We Use Your Information
              </h2>
              <p className="text-orange-800 mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 text-orange-800 space-y-2">
                <li>Provide and improve our services</li>
                <li>Personalize your experience</li>
                <li>Analyze site usage and performance</li>
                <li>Ensure site security and prevent abuse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Google AdSense</h2>
              <p className="text-orange-800 mb-4">
                This site uses Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on your prior visits to this website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-orange-600 hover:text-orange-700 underline">Google's Ads Settings</a>.
              </p>
              <p className="text-orange-800 mb-4">
                Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Cookies</h2>
              <p className="text-orange-800 mb-4">
                We use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 text-orange-800 space-y-2">
                <li>Remember your preferences</li>
                <li>Analyze site traffic and usage</li>
                <li>Provide personalized content and ads</li>
              </ul>
              <p className="text-orange-800 mt-4">
                You can control cookies through your browser settings, but disabling them may affect site functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Third-Party Services</h2>
              <p className="text-orange-800 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Data Security</h2>
              <p className="text-orange-800 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Changes to This Policy</h2>
              <p className="text-orange-800 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Contact Us</h2>
              <p className="text-orange-800 mb-4">
                If you have any questions about this Privacy Policy, please contact us through our <Link href="/contact" className="text-orange-600 hover:text-orange-700 underline">contact page</Link>.
              </p>
            </section>
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
            <Link href="/privacy" className="text-white font-semibold">Privacy Policy</Link>
            <Link href="/terms" className="text-orange-200 hover:text-white">Terms of Service</Link>
            <Link href="/contact" className="text-orange-200 hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
