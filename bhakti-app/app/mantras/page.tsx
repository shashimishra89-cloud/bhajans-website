import { CategoryLayout } from '@/components/CategoryLayout';
import { ContentLoader, staticMantras } from '@/lib/contentLoader';
import { generateMetadata } from '@/components/SEO';

export const metadata = generateMetadata({
  title: 'Mantras',
  description: 'Sacred Hindu mantras and chants for spiritual growth and meditation. Collection of powerful Vedic mantras with meanings and benefits.',
  keywords: ['hindu mantras', 'vedic chants', 'spiritual mantras', 'meditation', 'sacred chants'],
  canonical: 'https://bhakti.justhobby.net/mantras'
});

export default async function MantrasPage() {
  // Try to load from JSON files, fallback to static data
  let mantras = staticMantras;
  
  try {
    mantras = await ContentLoader.getAllMantras();
  } catch (error) {
    console.warn('Failed to load mantras from JSON, using static data');
  }

  return (
    <CategoryLayout
      title="Mantras"
      description="Sacred Hindu mantras and chants for spiritual growth and meditation. Collection of powerful Vedic mantras with meanings and benefits."
      icon="🕉️"
      items={mantras}
      contentType="mantras"
    />
  );
}
