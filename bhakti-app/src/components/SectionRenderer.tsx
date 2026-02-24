import React from 'react';
import { Section, ShlokaContent, BhajanContent } from '@/lib/types';
import { InContentAd } from './AdBlock';

interface SectionRendererProps {
  sections: Section[];
  showAds?: boolean;
}

export const SectionRenderer: React.FC<SectionRendererProps> = ({ sections, showAds = true }) => {
  const renderSection = (section: Section, index: number) => {
    const shouldShowAd = showAds && index > 0 && index % 2 === 0;

    switch (section.type) {
      case 'shloka':
        return <ShlokaSection key={index} section={section} />;
      case 'story':
        return <StorySection key={index} section={section} />;
      case 'bhajan':
        return <BhajanSection key={index} section={section} />;
      case 'aarti':
        return <AartiSection key={index} section={section} />;
      case 'mantra':
        return <MantraSection key={index} section={section} />;
      case 'ritual':
        return <RitualSection key={index} section={section} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <div key={index}>
          {renderSection(section, index)}
          {showAds && index > 0 && index % 2 === 0 && <InContentAd />}
        </div>
      ))}
    </div>
  );
};

// Shloka Section Component
const ShlokaSection: React.FC<{ section: Section }> = ({ section }) => {
  const content = section.content as ShlokaContent;
  
  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100">
      <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
        <span className="text-3xl mr-3">📜</span>
        {section.title}
      </h3>
      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
          <p className="text-lg font-medium text-orange-900 mb-2">Sanskrit:</p>
          <p className="text-orange-800 leading-relaxed">{content.sanskrit}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <p className="text-lg font-medium text-blue-900 mb-2">English:</p>
          <p className="text-blue-800 leading-relaxed">{content.english}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
          <p className="text-lg font-medium text-green-900 mb-2">Meaning:</p>
          <p className="text-green-800 leading-relaxed">{content.meaning}</p>
        </div>
      </div>
    </section>
  );
};

// Story Section Component
const StorySection: React.FC<{ section: Section }> = ({ section }) => {
  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100">
      <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
        <span className="text-3xl mr-3">📖</span>
        {section.title}
      </h3>
      <div className="prose prose-orange max-w-none">
        <p className="text-orange-800 leading-relaxed text-lg">{section.content as string}</p>
      </div>
    </section>
  );
};

// Bhajan Section Component
const BhajanSection: React.FC<{ section: Section }> = ({ section }) => {
  const content = section.content as BhajanContent;
  
  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100">
      <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
        <span className="text-3xl mr-3">🎵</span>
        {section.title}
      </h3>
      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
          <p className="text-lg font-medium text-orange-900 mb-2">हिंदी (Hindi):</p>
          <p className="text-orange-800 leading-relaxed whitespace-pre-line font-medium">{content.hindi}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <p className="text-lg font-medium text-blue-900 mb-2">English:</p>
          <p className="text-blue-800 leading-relaxed whitespace-pre-line">{content.english}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
          <p className="text-lg font-medium text-green-900 mb-2">Meaning:</p>
          <p className="text-green-800 leading-relaxed">{content.meaning}</p>
        </div>
      </div>
    </section>
  );
};

// Aarti Section Component
const AartiSection: React.FC<{ section: Section }> = ({ section }) => {
  const content = section.content as BhajanContent;
  
  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100">
      <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
        <span className="text-3xl mr-3">🪔</span>
        {section.title}
      </h3>
      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
          <p className="text-lg font-medium text-orange-900 mb-2">हिंदी (Hindi):</p>
          <p className="text-orange-800 leading-relaxed whitespace-pre-line font-medium">{content.hindi}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <p className="text-lg font-medium text-blue-900 mb-2">English:</p>
          <p className="text-blue-800 leading-relaxed whitespace-pre-line">{content.english}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
          <p className="text-lg font-medium text-green-900 mb-2">Meaning:</p>
          <p className="text-green-800 leading-relaxed">{content.meaning}</p>
        </div>
      </div>
    </section>
  );
};

// Mantra Section Component
const MantraSection: React.FC<{ section: Section }> = ({ section }) => {
  const content = section.content as ShlokaContent;
  
  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100">
      <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
        <span className="text-3xl mr-3">🕉️</span>
        {section.title}
      </h3>
      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
          <p className="text-lg font-medium text-orange-900 mb-2">Mantra:</p>
          <p className="text-orange-800 leading-relaxed">{content.sanskrit}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <p className="text-lg font-medium text-blue-900 mb-2">Transliteration:</p>
          <p className="text-blue-800 leading-relaxed">{content.english}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
          <p className="text-lg font-medium text-green-900 mb-2">Meaning:</p>
          <p className="text-green-800 leading-relaxed">{content.meaning}</p>
        </div>
      </div>
    </section>
  );
};

// Ritual Section Component
const RitualSection: React.FC<{ section: Section }> = ({ section }) => {
  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100">
      <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
        <span className="text-3xl mr-3">🙏</span>
        {section.title}
      </h3>
      <div className="prose prose-orange max-w-none">
        <p className="text-orange-800 leading-relaxed text-lg">{section.content as string}</p>
      </div>
    </section>
  );
};
