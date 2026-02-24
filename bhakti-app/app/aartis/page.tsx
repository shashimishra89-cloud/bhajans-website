import { CategoryLayout } from '@/components/CategoryLayout';
import { ContentLoader, staticAartis } from '@/lib/contentLoader';
import { generateMetadata } from '@/components/SEO';

export const metadata = generateMetadata({
  title: 'Aartis',
  description: 'Sacred Hindu aartis and devotional songs for worship and prayer. Complete collection of traditional aartis for various deities.',
  keywords: ['hindu aartis', 'devotional songs', 'aarti', 'worship', 'prayer', 'hindu rituals'],
  canonical: 'https://bhakti.justhobby.net/aartis'
});

export default async function AartisPage() {
  // Try to load from JSON files, fallback to static data
  let aartis = staticAartis;
  
  try {
    aartis = await ContentLoader.getAllAartis();
  } catch (error) {
    console.warn('Failed to load aartis from JSON, using static data');
  }

  return (
    <CategoryLayout
      title="Aartis"
      description="Sacred Hindu aartis and devotional songs for worship and prayer. Complete collection of traditional aartis for various deities."
      icon="🕯️"
      items={aartis}
      contentType="aartis"
    />
  );
}
