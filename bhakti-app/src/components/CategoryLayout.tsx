import React from 'react';
import { BaseContent } from '@/lib/types';
import { Breadcrumbs, generateBreadcrumbs } from './Breadcrumbs';
import { BannerAd } from './AdBlock';

interface CategoryLayoutProps {
  title: string;
  description: string;
  icon: string;
  items: BaseContent[];
  contentType: 'festivals' | 'aartis' | 'bhajans' | 'mantras';
  children?: React.ReactNode;
}

export const CategoryLayout: React.FC<CategoryLayoutProps> = ({
  title,
  description,
  icon,
  items,
  contentType,
  children
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🪔</span>
              <h1 className="text-2xl font-bold text-orange-900">Bhajans</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/festivals" className="text-orange-800 hover:text-orange-600 font-medium">Festivals</a>
              <a href="/aartis" className="text-orange-800 hover:text-orange-600 font-medium">Aartis</a>
              <a href="/bhajans" className="text-orange-800 hover:text-orange-600 font-medium">Bhajans</a>
              <a href="/mantras" className="text-orange-800 hover:text-orange-600 font-medium">Mantras</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={generateBreadcrumbs(contentType)} />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">{icon}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-orange-700 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      {/* Banner Ad */}
      <BannerAd />

      {/* Main Content */}
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {children || (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`/${contentType}/${item.id}`}
                  className={`group bg-gradient-to-br ${item.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-white/20 text-white`}
                >
                  <div className="text-4xl mb-3 text-center">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-center">{item.name}</h3>
                  <p className="text-center text-sm opacity-90">{item.title}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-xl">🪔</span>
            <h3 className="text-xl font-bold">Bhajans</h3>
          </div>
          <p className="text-orange-200 mb-6">Preserving and sharing the sacred traditions of Hindu culture</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <a href="/privacy" className="text-orange-200 hover:text-white">Privacy Policy</a>
            <a href="/terms" className="text-orange-200 hover:text-white">Terms of Service</a>
            <a href="/contact" className="text-orange-200 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
