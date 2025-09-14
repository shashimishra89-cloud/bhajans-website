// Festivals configuration - Easy to modify and add new festivals
export interface Festival {
  id: string;
  name: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
  color: string;
  date?: string;
  significance?: string;
  rituals?: string[];
  featured?: boolean;
}

export const festivalsConfig: Festival[] = [
  {
    id: "diwali",
    name: "Diwali",
    title: "Festival of Lights",
    description: "The most celebrated Hindu festival, symbolizing the victory of light over darkness and good over evil.",
    duration: "5 days",
    icon: "🪔",
    color: "from-yellow-400 to-orange-500",
    featured: true
  },
  {
    id: "holi",
    name: "Holi", 
    title: "Festival of Colors",
    description: "Spring festival celebrating love, joy, and the triumph of good over evil through colors and music.",
    duration: "2 days",
    icon: "🎨",
    color: "from-pink-400 to-red-500",
    featured: true
  },
  {
    id: "navratri",
    name: "Navratri",
    title: "Nine Nights of the Goddess", 
    description: "Nine-day festival honoring Goddess Durga and her nine divine forms (Navadurga).",
    duration: "9 nights, 10 days",
    icon: "🌙",
    color: "from-purple-400 to-indigo-500",
    featured: true
  },
  {
    id: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    title: "Festival of Lord Ganesha",
    description: "A vibrant Hindu festival celebrating the birth of Lord Ganesha, the remover of obstacles.",
    duration: "11 days", 
    icon: "🐘",
    color: "from-green-400 to-teal-500",
    featured: true
  },
  {
    id: "jivitputrika-vrat",
    name: "Jivitputrika Vrat",
    title: "Sacred Fast for Children's Wellbeing",
    description: "A powerful fast observed by mothers for the long life, health, and prosperity of their children.",
    duration: "1 day",
    icon: "🙏",
    color: "from-orange-400 to-red-500",
    featured: true
  }
];

// Helper functions
export const getFeaturedFestivals = () => festivalsConfig.filter(f => f.featured);
export const getFestivalById = (id: string) => festivalsConfig.find(f => f.id === id);
export const getAllFestivals = () => festivalsConfig;
