import { CategoryLayout } from '@/components/CategoryLayout';
import { ContentLoader, staticFestivals } from '@/lib/contentLoader';

export const metadata = {
  title: 'Hindu Festivals | Bhajans',
  description: 'Complete guide to Hindu festivals with rituals, stories, bhajans, and aartis. Celebrate the rich cultural heritage of Hinduism.',
  keywords: ['hindu festivals', 'indian festivals', 'diwali', 'holi', 'navratri', 'ganesh chaturthi'],
  openGraph: {
    title: 'Hindu Festivals | Bhajans',
    description: 'Complete guide to Hindu festivals with rituals, stories, bhajans, and aartis.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bhakti.justhobby.net/festivals'
  }
};

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
      description="Complete guide to Hindu festivals with rituals, stories, bhajans, and aartis. Celebrate the rich cultural heritage of Hinduism."
      icon="🎉"
      items={festivals}
      contentType="festivals"
    />
  );
}
