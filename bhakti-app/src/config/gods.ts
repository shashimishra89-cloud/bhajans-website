// Gods/Deities configuration - Easy to modify and add new deities
export interface God {
  id: string;
  name: string;
  title: string;
  description: string;
  domain: string;
  icon: string;
  color: string;
  mantras?: string[];
  significance?: string;
  festivals?: string[];
  featured?: boolean;
}

export const godsConfig: God[] = [
  {
    id: "krishna",
    name: "Lord Krishna",
    title: "The Divine Cowherd",
    description: "The eighth avatar of Vishnu, known for his teachings in the Bhagavad Gita and his playful, loving nature.",
    domain: "Love, Compassion, Divine Play",
    icon: "🦚",
    color: "from-blue-400 to-indigo-600",
    featured: true
  },
  {
    id: "ganesha",
    name: "Lord Ganesha", 
    title: "The Remover of Obstacles",
    description: "The elephant-headed deity who removes obstacles and brings good fortune, wisdom, and new beginnings.",
    domain: "Wisdom, Prosperity, New Beginnings",
    icon: "🐘",
    color: "from-orange-400 to-red-500",
    featured: true
  },
  {
    id: "durga",
    name: "Goddess Durga",
    title: "The Divine Mother",
    description: "The fierce and protective goddess who represents divine feminine power and the triumph of good over evil.",
    domain: "Protection, Strength, Divine Feminine",
    icon: "🌺",
    color: "from-pink-400 to-purple-600",
    featured: true
  },
  {
    id: "rama",
    name: "Lord Rama",
    title: "The Ideal King",
    description: "The seventh avatar of Vishnu, embodying dharma, righteousness, and the perfect devotion of a son, husband, and king.",
    domain: "Dharma, Righteousness, Honor",
    icon: "🏹",
    color: "from-green-400 to-teal-600",
    featured: true
  }
];

// Helper functions
export const getFeaturedGods = () => godsConfig.filter(g => g.featured);
export const getGodById = (id: string) => godsConfig.find(g => g.id === id);
export const getAllGods = () => godsConfig;
