import { Festival, Aarti, Bhajan, Mantra, ContentType } from './types';

// Content loader utility functions
export class ContentLoader {
  private static basePath = '/content';

  // Festival content loading
  static async getAllFestivals(): Promise<Festival[]> {
    const festivals: Festival[] = [];
    
    try {
      const festivalFiles = [
        'diwali.json',
        'holi.json', 
        'navratri.json',
        'ganesh-chaturthi.json'
      ];

      for (const file of festivalFiles) {
        const festival = await this.loadFestival(file.replace('.json', ''));
        if (festival) festivals.push(festival);
      }
    } catch (error) {
      console.error('Error loading festivals:', error);
    }

    return festivals;
  }

  static async getFestival(slug: string): Promise<Festival | null> {
    try {
      const response = await fetch(`${this.basePath}/festivals/${slug}.json`);
      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      console.error(`Error loading festival ${slug}:`, error);
      return null;
    }
  }

  static async loadFestival(slug: string): Promise<Festival | null> {
    return this.getFestival(slug);
  }

  // Aarti content loading
  static async getAllAartis(): Promise<Aarti[]> {
    // Placeholder - will be populated when aarti content is added
    return [];
  }

  static async getAarti(slug: string): Promise<Aarti | null> {
    try {
      const response = await fetch(`${this.basePath}/aartis/${slug}.json`);
      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      console.error(`Error loading aarti ${slug}:`, error);
      return null;
    }
  }

  // Bhajan content loading
  static async getAllBhajans(): Promise<Bhajan[]> {
    // Placeholder - will be populated when bhajan content is added
    return [];
  }

  static async getBhajan(slug: string): Promise<Bhajan | null> {
    try {
      const response = await fetch(`${this.basePath}/bhajans/${slug}.json`);
      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      console.error(`Error loading bhajan ${slug}:`, error);
      return null;
    }
  }

  // Mantra content loading
  static async getAllMantras(): Promise<Mantra[]> {
    // Placeholder - will be populated when mantra content is added
    return [];
  }

  static async getMantra(slug: string): Promise<Mantra | null> {
    try {
      const response = await fetch(`${this.basePath}/mantras/${slug}.json`);
      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      console.error(`Error loading mantra ${slug}:`, error);
      return null;
    }
  }

  // Helper functions
  static getFeaturedFestivals(festivals: Festival[]): Festival[] {
    return festivals.filter(f => f.featured);
  }

  static getFestivalsByCategory(festivals: Festival[]): { [key: string]: Festival[] } {
    return festivals.reduce((acc, festival) => {
      const category = this.categorizeFestival(festival);
      if (!acc[category]) acc[category] = [];
      acc[category].push(festival);
      return acc;
    }, {} as { [key: string]: Festival[] });
  }

  private static categorizeFestival(festival: Festival): string {
    // Simple categorization logic - can be enhanced
    const majorFestivals = ['diwali', 'holi', 'navratri', 'ganesh-chaturthi'];
    return majorFestivals.includes(festival.id) ? 'major' : 'regional';
  }

  // Search functionality
  static searchContent(query: string, contentType?: 'festivals' | 'aartis' | 'bhajans' | 'mantras'): Promise<ContentType[]> {
    // Implement search logic
    return Promise.resolve([]);
  }
}

// Static content for development (fallback)
export const staticFestivals: Festival[] = [
  {
    id: "diwali",
    name: "Diwali",
    title: "Festival of Lights",
    description: "The most celebrated Hindu festival, symbolizing the victory of light over darkness and good over evil.",
    duration: "5 days",
    icon: "🪔",
    color: "from-yellow-400 to-orange-500",
    featured: true,
    significance: "Celebrates the return of Lord Rama to Ayodhya after 14 years of exile.",
    rituals: ["Lighting diyas", "Worshipping Goddess Lakshmi", "Exchanging gifts"],
    sections: [],
    seo: {
      keywords: ["diwali", "festival of lights", "lord rama"],
      description: "Diwali Festival of Lights - Complete guide with stories and rituals."
    }
  },
  {
    id: "holi",
    name: "Holi",
    title: "Festival of Colors",
    description: "Spring festival celebrating love, joy, and the triumph of good over evil through colors and music.",
    duration: "2 days",
    icon: "🎨",
    color: "from-pink-400 to-red-500",
    featured: true,
    significance: "Celebrates the divine love of Radha and Krishna.",
    rituals: ["Playing with colors", "Holika Dahan", "Singing and dancing"],
    sections: [],
    seo: {
      keywords: ["holi", "festival of colors", "krishna radha"],
      description: "Holi Festival of Colors - Complete guide with stories and rituals."
    }
  },
  {
    id: "navratri",
    name: "Navratri",
    title: "Nine Nights of the Goddess",
    description: "Nine-day festival honoring Goddess Durga and her nine divine forms (Navadurga).",
    duration: "9 nights, 10 days",
    icon: "🌙",
    color: "from-purple-400 to-indigo-500",
    featured: true,
    significance: "Honors the nine forms of Goddess Durga.",
    rituals: ["Daily worship", "Garba dance", "Fasting"],
    sections: [],
    seo: {
      keywords: ["navratri", "goddess durga", "navadurga"],
      description: "Navratri Nine Nights of Goddess - Complete guide with stories and rituals."
    }
  },
  {
    id: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    title: "Festival of Lord Ganesha",
    description: "A vibrant Hindu festival celebrating the birth of Lord Ganesha, the remover of obstacles.",
    duration: "11 days",
    icon: "🐘",
    color: "from-green-400 to-teal-500",
    featured: true,
    significance: "Celebrates the birth of Lord Ganesha.",
    rituals: ["Installing Ganesha idols", "Daily prayers", "Modak offerings"],
    sections: [],
    seo: {
      keywords: ["ganesh chaturthi", "lord ganesha", "remover of obstacles"],
      description: "Ganesh Chaturthi Festival - Complete guide with stories and rituals."
    }
  }
];
