import { CategoryLayout } from '@/components/CategoryLayout';
import { ContentLoader, staticBhajans } from '@/lib/contentLoader';
import { generateMetadata } from '@/components/SEO';

export const metadata = generateMetadata({
  title: 'Bhajans',
  description: 'Devotional Hindu bhajans and spiritual songs. Collection of traditional and contemporary bhajans for worship and meditation.',
  keywords: ['hindu bhajans', 'devotional songs', 'bhakti songs', 'spiritual music', 'hindu worship'],
  canonical: 'https://bhakti.justhobby.net/bhajans'
});

export default async function BhajansPage() {
  // Try to load from JSON files, fallback to static data
  let bhajans = staticBhajans;
  
  try {
    bhajans = await ContentLoader.getAllBhajans();
  } catch (error) {
    console.warn('Failed to load bhajans from JSON, using static data');
  }

  return (
    <CategoryLayout
      title="Bhajans"
      description="Devotional Hindu bhajans and spiritual songs. Collection of traditional and contemporary bhajans for worship and meditation."
      icon="🎵"
      items={bhajans}
      contentType="bhajans"
    />
  );
}
