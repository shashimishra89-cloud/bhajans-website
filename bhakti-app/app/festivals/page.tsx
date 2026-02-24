import { CategoryLayout } from '@/components/CategoryLayout';
import { ContentLoader, staticFestivals } from '@/lib/contentLoader';
import { generateMetadata } from '@/components/SEO';

export const metadata = generateMetadata({
  title: 'Hindu Festivals',
  description: 'Discover the rich traditions, sacred rituals, and devotional songs of Hindu festivals celebrated throughout the year',
  keywords: ['hindu festivals', 'diwali', 'holi', 'navratri', 'ganesh chaturthi', 'hindu culture'],
  canonical: 'https://bhakti.justhobby.net/festivals'
});

export default async function FestivalsPage() {
  // Try to load from JSON files, fallback to static data
  let festivals = staticFestivals;
  
  try {
    festivals = await ContentLoader.getAllFestivals();
  } catch (error) {
    console.warn('Failed to load festivals from JSON, using static data');
  }

  return (
    <CategoryLayout
      title="Hindu Festivals"
      description="Discover the rich traditions, sacred rituals, and devotional songs of Hindu festivals celebrated throughout the year"
      icon="🎭"
      items={festivals}
      contentType="festivals"
    />
  );
}
