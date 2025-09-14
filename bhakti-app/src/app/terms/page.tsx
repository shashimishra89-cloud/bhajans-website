import Link from "next/link";
import { Sparkles, FileText, Scale, AlertCircle } from "lucide-react";

export default function TermsOfServicePage() {
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
            <Scale className="h-8 w-8 text-orange-600" />
            <h1 className="text-4xl font-bold text-orange-900">Terms of Service</h1>
          </div>

          <div className="prose prose-orange max-w-none">
            <p className="text-lg text-orange-800 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2" />
                Acceptance of Terms
              </h2>
              <p className="text-orange-800 mb-4">
                By accessing and using the Bhajans website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Use License</h2>
              <p className="text-orange-800 mb-4">
                Permission is granted to temporarily download one copy of the materials on Bhajans' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-orange-800 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Content</h2>
              <p className="text-orange-800 mb-4">
                The content on this website, including bhajans, aartis, and religious information, is provided for educational and devotional purposes. We strive to ensure accuracy and authenticity of all religious content, but users should verify information from authoritative sources.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 mr-2" />
                Disclaimer
              </h2>
              <p className="text-orange-800 mb-4">
                The materials on Bhajans' website are provided on an 'as is' basis. Bhajans makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Limitations</h2>
              <p className="text-orange-800 mb-4">
                In no event shall Bhajans or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Bhajans' website, even if Bhajans or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Accuracy of Materials</h2>
              <p className="text-orange-800 mb-4">
                The materials appearing on Bhajans' website could include technical, typographical, or photographic errors. Bhajans does not warrant that any of the materials on its website are accurate, complete, or current. Bhajans may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Links</h2>
              <p className="text-orange-800 mb-4">
                Bhajans has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Bhajans of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Modifications</h2>
              <p className="text-orange-800 mb-4">
                Bhajans may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Governing Law</h2>
              <p className="text-orange-800 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Contact Information</h2>
              <p className="text-orange-800 mb-4">
                If you have any questions about these Terms of Service, please contact us through our <Link href="/contact" className="text-orange-600 hover:text-orange-700 underline">contact page</Link>.
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
            <Link href="/privacy" className="text-orange-200 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-white font-semibold">Terms of Service</Link>
            <Link href="/contact" className="text-orange-200 hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
