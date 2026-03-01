"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Sparkles, ChevronRight, Clock, Heart, Baby } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const storyData = {
  id: "krishna-and-pootana",
  name: "Krishna and Pootana",
  title: "The Demon Who Came as a Mother",
  description: "The story of how baby Krishna defeated the demon Pootana who came disguised as a beautiful woman to kill him.",
  category: "Krishna Stories",
  moral: "Divine Protection",
  readTime: "6 min read",
  parts: [
    {
      title: "The Evil Plot",
      content: {
        english: "In the ancient kingdom of Mathura, when Lord Krishna was just an infant, his maternal uncle Kansa received a terrifying prophecy. The divine voice had declared that Kansa would be killed by the eighth son of his sister Devaki. Enraged and fearful, Kansa had already killed six of Devaki's children. When the eighth child Krishna was born, Vasudeva secretly carried the baby across the Yamuna River to Gokul, where he was raised by Yashoda and Nanda.",
        hindi: "प्राचीन कालीने मथुरा के राज्य में, जब भगवान कृष्ण केवल एक शिशु थे, तब उनके मामा कांस ने एक भयानक भविष्य सुना था। दिव्य स्वर ने घोषणा की थी कि कांस का उनकी बहन देवकी के आठवें पुत्र द्वारा मारा जाएगा। क्रोधित और भयभीत होकर, कांस ने पहले ही देवकी के छह बच्चों को मार डाला था। जब आठवां बच्चा कृष्ण पैदा हुआ, तो वासुदेव ने बच्चे कृष्ण को यमुना नदी पार कर गोकुल ले गया, जहां वह यशोदा और नंद के पालन में पले।"
      },
      image: "https://images.unsplash.com/photo-15284599362820-29a54066c6fa?w=800&h=400&fit=crop&auto=format"
    },
    {
      title: "Pootana's Deception",
      content: {
        english: "Kansa, desperate to kill Krishna, summoned the wicked demoness Pootana. She was known for her ability to take any form and her expertise in killing infants through deception. Kansa commanded her to go to Gokul and kill all newborn babies, particularly the one with divine signs. Pootana, understanding the task, transformed herself into a beautiful young woman with a captivating smile, gentle eyes, and a motherly appearance that could fool anyone.",
        hindi: "कृष्ण को मारने के लिए बेताब कांस ने दुष्ट राक्षसी पूतना को बुलाया। वह किसी भी रूप धारण करने और छल से शिशुओं को मारने में अपनी विशेषता के लिए जानी जाती थी। कांस ने उसे गोकुल जाकर सभी नवजात शिशुओं को मारने और विशेष रूप से दिव्य चिह्नों वाले उस एक को मारने का आदेश दिया। पूतना ने अपना काम समझकर खुद को एक सुंदर युवती महिला में बदल लिया, जिसकी मुस्कान आकर्षक थी, नेत्र स्निग्ध थे, और एक मातृत्वपूर्ण रूप था जो किसी को भी छला सकता था।"
      },
      image: "https://images.unsplash.com/photo-1494790108755-2616b6125ba6?w=800&h=400&fit=crop&auto=format"
    },
    {
      title: "The Poisoned Breast",
      content: {
        english: "Pootana arrived in Gokul and found baby Krishna sleeping in his cradle. She approached with a mother's warmth, her heart filled with deadly poison. She had smeared a deadly poison on her breasts, intending to kill the divine child when he would drink her milk. The other women of Gokul were deceived by her beauty and motherly appearance, not suspecting the evil lurking beneath her charming facade.",
        hindi: "पूतना गोकुल पहुंची और बच्चे कृष्ण को उनकी पालने में सोते हुए पाया। वह एक मां की गर्मजल के साथ पास गई, उसके हृदय में घातक विष से भरा हुआ था। उसने अपने स्तनों पर एक घातक विष लगा था, ताकि जब वह दिव्य बच्चा उसका दूध पीए तो उसे मार दे। गोकुल की अन्य महिलाएं उसकी सुंदरता और मातृत्वपूर्ण रूप से धोखी गईं, उसके आकर्षक रूप के पीछे छिपे हुए बुरे को नहीं संदेहा।"
      },
      image: "https://images.unsplash.com/photo-1573496493647-d75a86414b2a?w=800&h=400&fit=crop&auto=format"
    },
    {
      title: "Divine Intervention",
      content: {
        english: "As Pootana offered her poisoned breast to baby Krishna, the Lord appeared to know everything. Though in infant form, Krishna was the Supreme Personality of Godhead. He smiled knowingly and accepted her offering. Instead of drinking the milk, Krishna began sucking her life force along with the poison. Pootana screamed in agony as she felt her very being being drained away. The divine child had not taken her milk but her life itself.",
        hindi: "जैसे ही पूतना ने बच्चे कृष्ण को अपना विष युक्त स्तन पेश किया, प्रभु ने सब कुछ जानने के लिए प्रतीत होना लगा। शिशु रूप में होने के बावजूद, कृष्ण परमात्मा भगवान थे। उन्होंने जानकर मुस्कुराया और उसका भेंट स्वीकार किया। कृष्ण ने दूध नहीं पी, बल्कि विष के साथ उसकी जीवन शक्ति को चूसना शुरू कर दिया। पूतना दर्द से चिल्लाई क्योंकि उसने अपने अस्तित्व को ही निकला जा रहा था। दिव्य बच्चे ने उसका दूध नहीं लिया था, बल्कि उसका जीवन ही।"
      },
      image: "https://images.unsplash.com/photo-1544947950-fb072c27b265?w=800&h=400&fit=crop&auto=format"
    },
    {
      title: "The Demon's End",
      content: {
        english: "Pootana's body began to burn and twist as the divine poison worked through her system. Her beautiful form melted away to reveal her true demonic appearance. With a final scream that shook the heavens, she fell dead, her body crashing to the ground. The people of Gokul rushed to the scene, only to find the demoness's corpse and baby Krishna smiling innocently in his cradle, completely unharmed. They realized that the child was no ordinary baby but a divine being who had protected himself.",
        hindi: "जैसे ही दिव्य विष उसके शरीर में काम करने लगा, पूतना का शरीर जलने और मुड़ने लगा। उसका सुंदर रूप पिघल गया और उसका वास्तविक रूप सामने आ गया। आकाश को हिलाने वाली एक अंतिम चीख के साथ, वह ढेर गिर पड़ी, उसका शरीर जमीन पर जा धमका। गोकुल के लोग घटनास्थल पर दौड़े, लेकिन उन्हें केवल राक्षसी का शव और अपनी पालन में मासूम से मुस्कुराते हुए बच्चे कृष्ण को पाया, जो पूरी तरह सुरक्षित थे। उन्हें महसूस किया कि यह बच्चा कोई साधारण शिशु नहीं था, बल्कि एक दिव्य प्राणी था जिसने खुद की रक्षा की थी।"
      },
      image: "https://images.unsplash.com/photo-1515372039744-b8e02fb3d776?w=800&h=400&fit=crop&auto=format"
    }
  ],
  significance: "This story demonstrates the divine nature of Lord Krishna and how evil forces cannot harm the Supreme Being. It shows that God protects his devotees and that divine wisdom can see through any deception. The story also illustrates how the Lord can transform poison into nectar and death into life itself.",
  lessons: [
    "Evil can never triumph over divine power",
    "God protects those who surrender to Him",
    "Appearances can be deceiving - look for the truth within",
    "Divine wisdom sees through all deception"
  ]
};

export default function KrishnaAndPootanaStoryPage() {
  const story = storyData;
  
  if (!story) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('stories', story.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-purple-900">Bhakti</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-purple-700 hover:text-purple-900 transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-purple-700 hover:text-purple-900 transition-colors">Aartis</Link>
              <Link href="/bhajans" className="text-purple-700 hover:text-purple-900 transition-colors">Bhajans</Link>
              <Link href="/chalisas" className="text-purple-700 hover:text-purple-900 transition-colors">Chalisas</Link>
              <Link href="/mantras" className="text-purple-700 hover:text-purple-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-purple-700 hover:text-purple-900 transition-colors">Stories</Link>
              <Link href="/gods" className="text-purple-700 hover:text-purple-900 transition-colors">Gods</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-xl p-8 md:p-12 border border-purple-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Baby className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
                {story.name}
              </h1>
              <p className="text-xl text-purple-700 mb-2">
                {story.title}
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {story.description}
              </p>
              <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-purple-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{story.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{story.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BannerAd />

      {/* Story Parts */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {story.parts.map((part, index) => (
          <section key={index} className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100">
              <div className="relative h-64 md:h-96">
                <img 
                  src={part.image} 
                  alt={part.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Part {index + 1}: {part.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                    <h4 className="text-lg font-bold text-purple-900 mb-3">English</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {part.content.english}
                    </p>
                  </div>
                  
                  <div className="bg-pink-50 rounded-lg p-6 border border-pink-100">
                    <h4 className="text-lg font-bold text-pink-900 mb-3">हिन्दी</h4>
                    <p className="text-gray-700 leading-relaxed" dir="rtl">
                      {part.content.hindi}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <InContentAd />

        {/* Significance Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Significance of the Story</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              {story.significance}
            </p>
          </div>
        </section>

        {/* Lessons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Moral Lessons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {story.lessons.map((lesson, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-purple-800 mb-3">
                  {lesson}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Related Stories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Related Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/stories/ganesh-and-the-moon" className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🌙</span>
                <h3 className="text-lg font-bold text-purple-800">Ganesh and the Moon</h3>
              </div>
              <p className="text-gray-600 text-sm">Why Lord Ganesha Cursed the Moon</p>
            </Link>
            
            <Link href="/stories/dhruva-the-devotee" className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">⭐</span>
                <h3 className="text-lg font-bold text-purple-800">Dhruva Devotee</h3>
              </div>
              <p className="text-gray-600 text-sm">The Boy Who Became a Star</p>
            </Link>
            
            <Link href="/stories/prahlada-the-faithful" className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🦁</span>
                <h3 className="text-lg font-bold text-purple-800">Prahlada Faithful</h3>
              </div>
              <p className="text-gray-600 text-sm">The Boy Who Defied His Father</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">Bhakti</span>
          </div>
          <p className="text-purple-200">
            Celebrating the divine festivals of Sanatana Dharma with devotion and love
          </p>
          <div className="mt-6 space-x-6 flex justify-center">
            <Link href="/festivals" className="text-purple-200 hover:text-white transition-colors">
              Festivals
            </Link>
            <Link href="/aartis" className="text-purple-200 hover:text-white transition-colors">
              Aartis
            </Link>
            <Link href="/mantras" className="text-purple-200 hover:text-white transition-colors">
              Mantras
            </Link>
            <Link href="/stories" className="text-purple-200 hover:text-white transition-colors">
              Stories
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
