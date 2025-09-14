import Link from "next/link";
import { Sparkles, ArrowLeft, Music, Heart, Crown, Star, BookOpen, Flame } from "lucide-react";
import { InContentAd } from "@/components/AdSense";

// Mock data - in production this would come from Cloudflare D1
const godData: { [key: string]: any } = {
  krishna: {
    id: "krishna",
    name: "Lord Krishna",
    title: "The Divine Cowherd",
    description: "Lord Krishna is the eighth avatar of Vishnu and one of the most beloved deities in Hinduism. Known for his divine play (leela), his teachings in the Bhagavad Gita, and his role as a cowherd in Vrindavan, Krishna represents divine love, compassion, and wisdom.",
    domain: "Love, Compassion, Divine Play",
    icon: "🦚",
    attributes: [
      "Divine flute player",
      "Protector of devotees",
      "Teacher of the Bhagavad Gita",
      "Beloved of the gopis",
      "Destroyer of evil",
      "Embodiment of divine love"
    ],
    festivals: ["Janmashtami", "Holi", "Govardhan Puja"],
    shloka: {
      title: "Bhagavad Gita Chapter 18, Verse 66",
      sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
      english: "Abandon all varieties of dharma and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
      meaning: "This is Krishna's final instruction in the Bhagavad Gita, where he asks Arjuna to surrender completely to him, promising liberation from all sins and fears."
    },
    stories: [
      {
        title: "Krishna Lifting Govardhan Hill",
        content: "When Indra, the king of gods, became angry with the people of Vrindavan for not worshipping him, he sent torrential rains to flood the village. To protect the villagers and their cattle, young Krishna lifted the entire Govardhan hill on his little finger and held it like an umbrella for seven days and nights. This divine act demonstrated Krishna's supreme power and his love for his devotees, earning him the name Giridhari (holder of the mountain)."
      },
      {
        title: "The Butter Thief (Makhan Chor)",
        content: "As a child, Krishna was famous for stealing butter from the homes of the gopis (cowherd women) in Vrindavan. He would cleverly break the pots hanging from the ceiling and share the butter with his friends and monkeys. When the gopis complained to his mother Yashoda, she would try to catch him, but Krishna would charm everyone with his innocent smile. These playful acts represent the soul's longing for the divine and how God steals the hearts of his devotees with his love."
      }
    ],
    bhajan: {
      title: "Govind Bolo Hari Gopal Bolo",
      hindi: "गोविन्द बोलो हरि गोपाल बोलो\nराधा रमण हरि गोविन्द बोलो\nगोविन्द बोलो हरि गोपाल बोलो\n\nकृष्ण कन्हैया लाल बोलो\nनन्द के लाला गोपाल बोलो\nयशोदा के प्यारे कृष्ण बोलो\nव्रज के राजा गोविन्द बोलो",
      english: "Chant Govind, chant Hari Gopal\nRadha's beloved Hari Govind, chant\nChant Govind, chant Hari Gopal\n\nChant Krishna Kanhaiya Lal\nChant Nanda's darling Gopal\nChant Yashoda's beloved Krishna\nChant Vraja's king Govind",
      meaning: "This bhajan celebrates Krishna in his various forms - as Govind (protector of cows), Gopal (cowherd), and Radha Raman (beloved of Radha), invoking his divine presence through repetitive chanting of his holy names."
    },
    aarti: {
      title: "Aarti Kunj Bihari Ki",
      hindi: "आरती कुंज बिहारी की, श्री गिरिधर कृष्ण मुरारी की\nआरती कुंज बिहारी की\n\nगले में बैजन्ती माला, बजावै मुरली मधुर बाला\nश्रवण में कुण्डल झलकाला, नन्द के आनन्द नन्दलाला\nगगन सम अंग कान्ति काली, राधिका चमक रही आली\nलतन में ठाढ़े बनमाली\nभ्रमर सी अलक, कस्तूरी तिलक, चन्द्र सी झलक\nललित छवि श्यामा प्यारी की, श्री गिरिधर कृष्ण मुरारी की\nआरती कुंज बिहारी की",
      english: "Aarti of Kunj Bihari, Shri Giridhar Krishna Murari\nAarti of Kunj Bihari\n\nWearing a garland of basil leaves, playing the sweet flute\nEarrings shining in ears, joy of Nanda, beloved Nandlala\nBody dark like the sky, Radhika shines beside\nStanding gracefully in the garden\nCurls like bees, musk tilak, moon-like glow\nBeautiful form of beloved Shyama, Shri Giridhar Krishna Murari\nAarti of Kunj Bihari",
      meaning: "This aarti glorifies Lord Krishna as the one who wanders through the gardens of Vrindavan ('Kunj Bihari'). It beautifully describes his divine form with his peacock feather crown, his melodious flute, and his enchanting smile."
    }
  },
  ganesha: {
    id: "ganesha",
    name: "Lord Ganesha",
    title: "The Remover of Obstacles",
    description: "Lord Ganesha, the elephant-headed deity, is one of the most worshipped gods in Hinduism. Known as Vighnaharta (remover of obstacles) and Buddhi Vinayaka (lord of wisdom), Ganesha is invoked at the beginning of any new venture or important undertaking.",
    domain: "Wisdom, Prosperity, New Beginnings",
    icon: "🐘",
    attributes: [
      "Remover of obstacles",
      "Lord of beginnings",
      "Patron of arts and sciences",
      "Bestower of wisdom",
      "Protector of devotees",
      "Son of Lord Shiva and Parvati"
    ],
    festivals: ["Ganesh Chaturthi", "Sankashti Chaturthi"],
    shloka: {
      title: "Vakratunda Mahakaya",
      sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
      english: "O curved-trunk, mighty-bodied one, with the brilliance of a million suns. Make all my endeavors free of obstacles, O Lord, always.",
      meaning: "This powerful shloka is recited before beginning any important work, seeking Ganesha's blessings to remove all obstacles."
    },
    stories: [
      {
        title: "The Birth of Ganesha",
        content: "Goddess Parvati created Ganesha from the turmeric paste she used for her bath and breathed life into him. She asked him to guard the entrance while she bathed. When Lord Shiva returned and was stopped by Ganesha, not recognizing him, Shiva in anger severed the boy's head. To console the grieving Parvati, Shiva replaced Ganesha's head with that of an elephant and brought him back to life, making him the leader of his ganas (attendants)."
      },
      {
        title: "Ganesha and the Moon",
        content: "Once, after eating too many modaks (sweet dumplings), Ganesha's belly became so full that he fell from his mouse. The moon laughed at this sight, which angered Ganesha. He cursed the moon to disappear from the sky. When the world became dark, the gods pleaded with Ganesha to reverse the curse. Ganesha modified it so that the moon would wax and wane, sometimes visible and sometimes not. This is why we see different phases of the moon."
      }
    ],
    bhajan: {
      title: "Ganesha Sharanam Sharanam Ganesha",
      hindi: "गणेश शरणं शरणं गणेश\nगणेश शरणं शरणं गणेश\nविघ्न हरण मंगल करण गणेश\nगणेश शरणं शरणं गणेश\n\nगजानन हे गणनायक\nगौरी नंदन सद्गुरु दायक\nमोदक प्रिय मूषक वाहन\nमंगल मूर्ति भव भय हरण\nगणेश शरणं शरणं गणेश",
      english: "Ganesha, I surrender, I surrender to Ganesha\nGanesha, I surrender, I surrender to Ganesha\nRemover of obstacles, creator of auspiciousness, Ganesha\nGanesha, I surrender, I surrender to Ganesha\n\nO elephant-faced, leader of ganas\nSon of Gauri, giver of good teachers\nLover of modak, riding on mouse\nAuspicious form, remover of worldly fears\nGanesha, I surrender, I surrender to Ganesha",
      meaning: "This beautiful bhajan expresses complete surrender and devotion to Lord Ganesha, acknowledging him as the remover of obstacles and fears."
    },
    aarti: {
      title: "Sukhkarta Dukhharta",
      hindi: "सुखकर्ता दुःखहर्ता वार्ता विघ्नाची\nनुरवी पुरवी प्रेम कृपा जयाची\nसर्वांगी सुंदर उती शेंदुराची\nकंठी झळके माल मुक्ताफळांची\nजय देव जय देव जय मंगलमूर्ति\nदर्शनमात्रे मन कामना पुरती\n\nरत्नखचित फरा तुज गौरीकुमरा\nचंदनाची उटी कुंकुमकेशरा\nहिरे जडित मुकुट शोभतो बरा\nरुणझुणती नूपुरे चरणी घागरा\nजय देव जय देव जय मंगलमूर्ति\nदर्शनमात्रे मन कामना पुरती\n\nलंबोदर पीतांबर फणिवरबंधना\nसरळ सोंड वक्रतुंड त्रिनयना\nदास रामाचा वाट पाहे सदना\nसंकटी पावावे निर्वाणी रक्षावे सुरवरवंदना\nजय देव जय देव जय मंगलमूर्ति\nदर्शनमात्रे मन कामना पुरती",
      english: "Giver of happiness, remover of sorrows, destroyer of obstacles\nFulfill our desires with your love and grace\nBeautiful in every way, with the glow of vermillion\nNecklace of pearls shining around your neck\nVictory to the Lord, victory to the auspicious form\nJust your sight fulfills all desires of the mind\n\nGem-studded crown adorns you, O son of Gauri\nSandal paste and saffron adorn your body\nDiamond-studded crown looks beautiful\nTinkling anklets on your feet make sweet sounds\nVictory to the Lord, victory to the auspicious form\nJust your sight fulfills all desires of the mind\n\nBig-bellied, wearing yellow clothes, with serpent as sacred thread\nStraight trunk, curved tusk, three-eyed one\nRama's devotee always waits for you\nIn difficulties, may you protect and grant salvation, O one worshipped by gods\nVictory to the Lord, victory to the auspicious form\nJust your sight fulfills all desires of the mind",
      meaning: "This is the complete and most revered aarti of Lord Ganesha, sung during Ganesh Chaturthi and daily worship. It describes Ganesha's divine form in detail and praises him as the remover of obstacles and fulfiller of wishes."
    }
  },
  durga: {
    id: "durga",
    name: "Goddess Durga",
    title: "The Divine Mother",
    description: "Goddess Durga is the fierce and protective form of the Divine Mother in Hinduism. She represents Shakti (divine feminine power) and is revered as the destroyer of evil and protector of dharma. Durga is depicted with multiple arms, each holding different weapons, riding a lion or tiger.",
    domain: "Protection, Strength, Divine Feminine",
    icon: "🌺",
    attributes: [
      "Divine Mother",
      "Destroyer of evil",
      "Protector of devotees",
      "Embodiment of Shakti",
      "Warrior goddess",
      "Source of all power"
    ],
    festivals: ["Navratri", "Durga Puja", "Devi Paksha"],
    bhajans: [
      {
        id: 1,
        title: "Jai Ambe Gauri",
        type: "Aarti",
        hindi: "जय अम्बे गौरी, मैया जय श्यामा गौरी\nतुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी\nजय अम्बे गौरी",
        english: "Jai Ambe Gauri, Mother Jai Shyama Gauri\nDay and night meditate on you, Hari Brahma and Shiva\nJai Ambe Gauri",
        meaning: "This powerful aarti invokes the blessings of Goddess Durga in her form as Gauri, celebrating her divine power and protection. Even the trinity of gods - Vishnu, Brahma, and Shiva - meditate upon her."
      },
      {
        id: 2,
        title: "Durge Durge Durgatinashini",
        type: "Bhajan",
        hindi: "दुर्गे दुर्गे दुर्गतिनाशिनी\nदुर्गे दुर्गे दुर्गतिनाशिनी\nहरि हरि दुर्गे दुर्गतिनाशिनी",
        english: "Durge Durge, destroyer of difficulties\nDurge Durge, destroyer of difficulties\nHari Hari Durge, destroyer of difficulties",
        meaning: "This bhajan praises Goddess Durga as the destroyer of all difficulties and obstacles. The repetitive chanting creates a powerful vibration that invokes her protective energy."
      }
    ]
  },
  rama: {
    id: "rama",
    name: "Lord Rama",
    title: "The Ideal King",
    description: "Lord Rama is the seventh avatar of Vishnu and the central figure of the epic Ramayana. He embodies dharma (righteousness), honor, and the perfect devotion of a son, husband, and king. Rama's life serves as an ideal example of how to live according to dharmic principles.",
    domain: "Dharma, Righteousness, Honor",
    icon: "🏹",
    attributes: [
      "Embodiment of dharma",
      "Ideal son and husband",
      "Just and righteous king",
      "Protector of the innocent",
      "Destroyer of evil",
      "Perfect devotee of duty"
    ],
    festivals: ["Ram Navami", "Diwali", "Dussehra"],
    bhajans: [
      {
        id: 1,
        title: "Raghupati Raghav Raja Ram",
        type: "Bhajan",
        hindi: "रघुपति राघव राजा राम\nपतित पावन सीता राम\nरघुपति राघव राजा राम\nईश्वर अल्लाह तेरे नाम",
        english: "Raghupati Raghav Raja Ram\nPurifier of the fallen, Sita Ram\nRaghupati Raghav Raja Ram\nIshwar Allah are your names",
        meaning: "This bhajan, popularized by Mahatma Gandhi, praises Lord Rama as the king of the Raghu dynasty and acknowledges the universal nature of the divine, calling God by different names."
      },
      {
        id: 2,
        title: "Sri Ram Jai Ram",
        type: "Chant",
        hindi: "श्री राम जय राम जय जय राम\nश्री राम जय राम जय जय राम\nहरे राम हरे राम राम राम हरे हरे",
        english: "Sri Ram Jai Ram Jai Jai Ram\nSri Ram Jai Ram Jai Jai Ram\nHare Ram Hare Ram Ram Ram Hare Hare",
        meaning: "This powerful chant glorifies Lord Rama and creates a meditative state through repetitive recitation of his holy names, purifying the mind and heart of the devotee."
      }
    ]
  },
  shiva: {
    id: "shiva",
    name: "Lord Shiva",
    title: "The Destroyer and Transformer",
    description: "Lord Shiva is one of the principal deities of Hinduism, known as the destroyer and transformer within the Trimurti (the Hindu Trinity). He represents the cosmic forces of destruction and regeneration, and is revered as the supreme yogi, the master of meditation, and the lord of dance (Nataraja).",
    domain: "Destruction, Transformation, Meditation",
    icon: "🔱",
    attributes: [
      "The Great Destroyer",
      "Lord of Dance (Nataraja)",
      "Supreme Yogi",
      "Master of Meditation",
      "Destroyer of Evil",
      "Transformer of Universe"
    ],
    festivals: ["Maha Shivaratri", "Shravan Month", "Pradosh Vrat"],
    shloka: {
      title: "Mahamrityunjaya Mantra",
      sanskrit: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्॥",
      english: "We worship the three-eyed Lord Shiva, who is fragrant and who nourishes all beings. May he liberate us from death for the sake of immortality, just as a cucumber is detached from its creeper.",
      meaning: "This is the most powerful mantra dedicated to Lord Shiva, known as the Mahamrityunjaya Mantra. It is believed to have the power to conquer death and grant immortality, both spiritual and physical."
    },
    stories: [
      {
        title: "Shiva's Cosmic Dance (Tandava)",
        content: "Lord Shiva performs the cosmic dance called Tandava, which represents the eternal cycle of creation, preservation, and destruction of the universe. In his form as Nataraja, the Lord of Dance, Shiva dances within a ring of fire, symbolizing the cosmic cycles of time. His dance maintains the rhythm of the universe, and when he stops dancing, the universe will end, only to be recreated again. This dance represents the dynamic aspect of existence and the continuous flow of energy in the cosmos."
      },
      {
        title: "The Churning of the Ocean and the Poison",
        content: "During the great churning of the ocean (Samudra Manthan) by the gods and demons to obtain the nectar of immortality, a deadly poison called Halahala emerged that threatened to destroy all creation. To save the universe, Lord Shiva drank the poison and held it in his throat, which turned blue from the poison's effect. This is why Shiva is also called Nilakantha (the blue-throated one). This act of supreme sacrifice demonstrates Shiva's role as the protector of the universe and his willingness to bear suffering for the welfare of all beings."
      }
    ],
    bhajan: {
      title: "Bholenath Se Binti Hai Hamari",
      hindi: "भोलेनाथ से बिनती है हमारी\nहे शिव शंकर पार लगा दो नैया हमारी\nभोलेनाथ से बिनती है हमारी\n\nगंगाधर हरे त्रिशूलधारी\nडमरू की आवाज़ से जगत को तार दो\nनीलकंठ हे महादेव\nभक्तों की सुध लो हमारी\nभोलेनाथ से बिनती है हमारी",
      english: "Our prayer is to Bholenath\nO Shiva Shankar, help our boat cross to the other shore\nOur prayer is to Bholenath\n\nO bearer of Ganga, holder of trident\nWith the sound of your damaru, liberate the world\nO Nilakantha, O Mahadeva\nTake care of your devotees\nOur prayer is to Bholenath",
      meaning: "This devotional bhajan is a heartfelt prayer to Lord Shiva, addressing him by his various names and asking for his guidance and protection. It acknowledges his power to help devotees cross the ocean of worldly existence."
    },
    aarti: {
      title: "Om Jai Shiv Omkara",
      hindi: "ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा\nब्रह्मा विष्णु सदाशिव, अर्धांगी धारा\nॐ जय शिव ओंकारा\n\nएकानन चतुरानन पंचानन राजे\nहंसासन गरुड़ासन वृषवाहन साजे\nॐ जय शिव ओंकारा\n\nदो भुज चार चतुर्भुज दस भुज अति सोहे\nतीनों रूप निरखते त्रिभुवन जन मोहे\nॐ जय शिव ओंकारा\n\nअक्षमाला वनमाला रुद्राक्ष की माला\nचंदन मृगमद सोहे भाले शशि विशाला\nॐ जय शिव ओंकारा",
      english: "Om Jai Shiv Omkara, Lord Om Jai Shiv Omkara\nBrahma Vishnu Sadashiv, with Ardhangini (half-body as Parvati)\nOm Jai Shiv Omkara\n\nOne face, four faces, five faces reign\nSwan-seated, Garuda-seated, bull-mounted arranged\nOm Jai Shiv Omkara\n\nTwo arms, four arms, ten arms look beautiful\nSeeing the three forms, people of three worlds are enchanted\nOm Jai Shiv Omkara\n\nRosary, forest garland, rudraksha beads garland\nSandal and musk adorn, broad moon on forehead\nOm Jai Shiv Omkara",
      meaning: "This aarti is a beautiful and widely sung prayer to Lord Shiva. It praises his infinite form and his various divine attributes, such as his three eyes and his presence in the entire cosmos. It is a devotional song seeking his blessings for a life free from evil and ignorance."
    }
  }
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'ganesha' },
    { slug: 'krishna' },
    { slug: 'shiva' },
    { slug: 'rama' },
  ];
}

export default function GodDetailPage({ params }: PageProps) {
  const god = godData[params.slug];

  if (!god) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-900 mb-4">Deity Not Found</h1>
          <Link href="/gods" className="text-orange-600 hover:text-orange-700 font-medium">
            ← Back to Gods
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-orange-600" />
              <h1 className="text-2xl font-bold text-orange-900">Bhajans</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-orange-800 hover:text-orange-600 font-medium">Festivals</Link>
              <Link href="/gods" className="text-orange-600 font-semibold">Gods</Link>
              <Link href="/search" className="text-orange-800 hover:text-orange-600 font-medium">Search</Link>
              <Link href="/about" className="text-orange-800 hover:text-orange-600 font-medium">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/gods" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Gods</span>
        </Link>
      </div>

      {/* God Hero */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">{god.icon}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
            {god.name}
          </h2>
          <p className="text-2xl text-orange-700 mb-6">{god.title}</p>
          <p className="text-lg text-orange-800 leading-relaxed max-w-3xl mx-auto">
            {god.description}
          </p>
        </div>
      </section>

      {/* God Details */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Attributes */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-orange-100">
              <div className="flex items-center space-x-3 mb-6">
                <Crown className="h-6 w-6 text-orange-600" />
                <h3 className="text-2xl font-bold text-orange-900">Divine Attributes</h3>
              </div>
              <ul className="space-y-3">
                {god.attributes.map((attribute: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-orange-800">{attribute}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Domain & Festivals */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-orange-100">
              <div className="flex items-center space-x-3 mb-6">
                <Star className="h-6 w-6 text-orange-600" />
                <h3 className="text-2xl font-bold text-orange-900">Domain & Festivals</h3>
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-orange-900 mb-2">Divine Domain:</h4>
                <p className="text-orange-800">{god.domain}</p>
              </div>
              <div>
                <h4 className="font-bold text-orange-900 mb-3">Associated Festivals:</h4>
                <div className="flex flex-wrap gap-2">
                  {god.festivals.map((festival: string, index: number) => (
                    <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {festival}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections in order: Shloka, Stories, Bhajan, Aarti */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {/* Shloka Section */}
            {god.shloka && (
              <section>
                <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
                  <BookOpen className="mr-3" />
                  Sacred Shloka
                </h2>
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">{god.shloka.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-purple-800 mb-2">Sanskrit:</h4>
                      <p className="text-gray-700 whitespace-pre-line font-hindi text-lg">{god.shloka.sanskrit}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-2">English Translation:</h4>
                      <p className="text-gray-700 whitespace-pre-line">{god.shloka.english}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-2">Meaning:</h4>
                      <p className="text-gray-600 italic">{god.shloka.meaning}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Stories Section */}
            {god.stories && god.stories.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                  <BookOpen className="mr-3" />
                  Sacred Stories
                </h2>
                <div className="grid gap-6">
                  {god.stories.map((story: any, index: number) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4">{story.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{story.content}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bhajan Section */}
            {god.bhajan && (
              <section>
                <h2 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
                  <Music className="mr-3" />
                  Devotional Bhajan
                </h2>
                <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">{god.bhajan.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">Hindi/Sanskrit:</h4>
                      <p className="text-gray-700 whitespace-pre-line font-hindi">{god.bhajan.hindi}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">English Translation:</h4>
                      <p className="text-gray-700 whitespace-pre-line">{god.bhajan.english}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">Meaning:</h4>
                      <p className="text-gray-600 italic">{god.bhajan.meaning}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Aarti Section */}
            {god.aarti && (
              <section>
                <h2 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center">
                  <Flame className="mr-3" />
                  Sacred Aarti
                </h2>
                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-4">{god.aarti.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">Hindi/Sanskrit:</h4>
                      <p className="text-gray-700 whitespace-pre-line font-hindi">{god.aarti.hindi}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">English Translation:</h4>
                      <p className="text-gray-700 whitespace-pre-line">{god.aarti.english}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">Meaning:</h4>
                      <p className="text-gray-600 italic">{god.aarti.meaning}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* AdSense Ad Unit */}
            <div className="border-t border-orange-100 pt-8">
              <InContentAd adSlot="1234567890" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <h3 className="text-xl font-bold">Bhajans</h3>
          </div>
          <p className="text-orange-200 mb-6">Preserving and sharing the sacred traditions of Hindu culture</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <Link href="/privacy" className="text-orange-200 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-orange-200 hover:text-white">Terms of Service</Link>
            <Link href="/contact" className="text-orange-200 hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
