"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Sparkles, ChevronRight, Clock, Heart, Moon } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const storyData = {
  id: "ganesh-and-the-moon",
  name: "Ganesh and the Moon",
  title: "Why Lord Ganesha Cursed the Moon",
  description: "The fascinating story of why Lord Ganesha cursed the moon and why we avoid looking at the moon on Ganesh Chaturthi.",
  category: "Ganesha Stories",
  moral: "Humility and Respect",
  readTime: "5 min read",
  parts: [
    {
      title: "The Divine Feast",
      content: {
        english: "Once upon a time, Lord Shiva and Goddess Parvati decided to celebrate the birth of their son, Lord Ganesha, with a grand feast. All the gods, goddesses, and celestial beings were invited to this divine celebration. The atmosphere was filled with joy and festivity as everyone gathered to honor the beloved elephant-headed deity.",
        hindi: "एक समय था जब भगवान शिव और देवी पार्वती ने अपने पुत्र भगवान गणेश के जन्म का जश्न एक भव्य भोज के साथ मनाना किया। सभी देवताओं, देवियों और दिव्य प्राणियों को इस दिव्य उत्सव के लिए आमंत्रित किया गया था। प्रिय हाथी-सिर वाले देवता का सम्मान करने के लिए जब सभी लोग एकत्रित हुए, तो वातावरण खुशी और त्योहार से भर गया था।"
      },
      image: "https://images.unsplash.com/photo-1532274492911-6a012e826f22?w=800&h=400&fit=crop&auto=format"
    },
    {
      title: "The Moon's Laughter",
      content: {
        english: "During the feast, Lord Ganesha, known for his love of sweets, was enjoying various delicacies. His round belly swelled as he ate modak, ladoos, and other sweets. The moon, Chandra, who was also present at the feast, couldn't help but laugh at Ganesha's appearance and his love for food. Chandra mocked Ganesha, saying, 'Look at this elephant-headed god with his big belly! How can someone so fond of eating be worshipped?'",
        hindi: "भोज के दौरान, भगवान गणेश, जो मिठाइयों के प्रति अपने प्रेम के लिए जाने जाते थे, विभिन्न व्यंजनों का आनंद ले रहे थे। जब उन्होंने मोदक, लड्डू और अन्य मिठाइयाँ खाईं, तो उनका गोल पेट सूज गया। चंद्रमा, जो भोज में भी मौजूद थे, गणेश के स्वरूप और भोजन के प्रति उनके प्रेम को देखकर हंसने से खुद नहीं रोक सके। चंद्र ने गणेश का मजाक उड़ाया, 'देखो इस हाथी-सिर वाले भगवान को उसके बड़े पेट के साथ! कोई जो इतना खाना पसंद करता है, वह कैसे पूजा जा सकता है?'"
      },
      image: "https://images.unsplash.com/photo-1493559657723-1e5683e3b7e7?w=800&h=400&fit=crop&auto=format"
    },
    {
      title: "Ganesha's Anger",
      content: {
        english: "Hearing the moon's mockery, Lord Ganesha became furious. His eyes burned with anger at this insult. He stood up and declared, 'You, who show your face differently each day, who waxes and wanes, dare to laugh at my form? I curse you that no one shall look at your face on Ganesh Chaturthi. Anyone who sees the moon on this day will face false accusations and disgrace.'",
        hindi: "चंद्र के उपहास सुनकर, भगवान गणेश क्रुद्ध हो गए। इस अपमान पर उनकी आँखें क्रोध से जल उठीं। वे खड़े हुए और घोषणा की, 'तुम, जो हर दिन अलग-अलग रूप दिखाते हो, जो बढ़ते और घटते हो, मेरे स्वरूप पर हंसने की हिम्मत करते हो? मैं तुम्हें श्राप देता हूँ कि गणेश चतुर्थी के दिन कोई भी तुम्हारा चेहरा नहीं देखेगा। इस दिन चंद्रमा को देखने वाला कोई भी व्यक्ति झूठे आरोपों और अपमान का सामना करेगा।'"
      },
      image: "https://images.unsplash.com/photo-1535016120720-40c6463b8a14?w=800&h=400&fit=crop&auto=format"
    },
    {
      title: "The Moon's Repentance",
      content: {
        english: "Realizing his grave mistake, the moon immediately fell at Ganesha's feet and begged for forgiveness. 'O Lord Ganesha, please forgive my foolishness. I spoke without understanding your divine nature. Please revoke this harsh curse.' All the other gods and goddesses also pleaded with Ganesha on behalf of the moon.",
        hindi: "अपनी गंभीर गलती को महसूस करकर, चंद्रमा तुरंत गणेश के पैरों में गिरकर क्षमा मांगने लगा। 'हे भगवान गणेश, कृपया मेरी मूर्खता को क्षमा करें। मैंने आपके दिव्य स्वभाव को समझे बिना बोला। कृपया यह कठोर श्राप वापस लें।' सभी अन्य देवताओं और देवियों ने भी चंद्रमा की ओर से गणेश से विनती की।"
      },
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&auto=format"
    },
    {
      title: "A Partial Remedy",
      content: {
        english: "Seeing the moon's sincere repentance and the pleas of other deities, Lord Ganesha's heart softened. He said, 'The curse cannot be completely removed, but I will give some relief. On the fourth day of the bright fortnight, if someone accidentally sees the moon, they can redeem themselves by listening to the story of the Syamantaka jewel and the false accusation against Krishna.' Thus, even today, devotees avoid looking at the moon on Ganesh Chaturthi.",
        hindi: "चंद्रमा की निष्ठावंत पश्चाताप और अन्य देवताओं की विनती देखकर, भगवान गणेश का हृदय पिघल गया। उन्होंने कहा, 'श्राप को पूरी तरह से हटाया नहीं जा सकता, लेकिन मैं कुछ राहत दूंगा। शुक्ल पक्ष के चौथे दिन, यदि कोई गलती से चंद्रमा को देख लेता है, तो वह स्यमंतक मणि और कृष्ण के खिलाफ झूठे आरोप की कहानी सुनकर अपने को बचा सकता है।' इस तरह, आज भी, भक्त गणेश चतुर्थी के दिन चंद्रमा को देखने से बचते हैं।"
      },
      image: "https://images.unsplash.com/photo-1489450145827-5a9e0b4da643?w=800&h=400&fit=crop&auto=format"
    }
  ],
  significance: "This story teaches us the importance of humility and respect for others, regardless of their appearance. It also shows how even gods can be affected by anger and the power of sincere repentance. The tradition of not looking at the moon on Ganesh Chaturthi continues to this day as a reminder of this divine incident.",
  lessons: [
    "Never judge others by their appearance",
    "Words can cause deep hurt, so speak with kindness",
    "Sincere repentance can soften even the hardest heart",
    "Divine beings value humility and respect above all"
  ]
};

export default function GaneshAndTheMoonStoryPage() {
  const story = storyData;
  
  if (!story) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('stories', story.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-blue-900">Bhakti</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-blue-700 hover:text-blue-900 transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-blue-700 hover:text-blue-900 transition-colors">Aartis</Link>
              <Link href="/bhajans" className="text-blue-700 hover:text-blue-900 transition-colors">Bhajans</Link>
              <Link href="/chalisas" className="text-blue-700 hover:text-blue-900 transition-colors">Chalisas</Link>
              <Link href="/mantras" className="text-blue-700 hover:text-blue-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-blue-700 hover:text-blue-900 transition-colors">Stories</Link>
              <Link href="/gods" className="text-blue-700 hover:text-blue-900 transition-colors">Gods</Link>
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
          
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-xl p-8 md:p-12 border border-blue-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Moon className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
                {story.name}
              </h1>
              <p className="text-xl text-blue-700 mb-2">
                {story.title}
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {story.description}
              </p>
              <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-blue-600">
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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
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
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <h4 className="text-lg font-bold text-blue-900 mb-3">English</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {part.content.english}
                    </p>
                  </div>
                  
                  <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
                    <h4 className="text-lg font-bold text-indigo-900 mb-3">हिन्दी</h4>
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
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Significance of the Story</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              {story.significance}
            </p>
          </div>
        </section>

        {/* Lessons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Moral Lessons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {story.lessons.map((lesson, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  {lesson}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Related Stories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Related Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/stories/krishna-and-pootana" className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">👶</span>
                <h3 className="text-lg font-bold text-blue-800">Krishna and Pootana</h3>
              </div>
              <p className="text-gray-600 text-sm">The Demon Who Came as a Mother</p>
            </Link>
            
            <Link href="/stories/dhruva-the-devotee" className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">⭐</span>
                <h3 className="text-lg font-bold text-blue-800">Dhruva Devotee</h3>
              </div>
              <p className="text-gray-600 text-sm">The Boy Who Became a Star</p>
            </Link>
            
            <Link href="/stories/prahlada-the-faithful" className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🦁</span>
                <h3 className="text-lg font-bold text-blue-800">Prahlada Faithful</h3>
              </div>
              <p className="text-gray-600 text-sm">The Boy Who Defied His Father</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">Bhakti</span>
          </div>
          <p className="text-blue-200">
            Celebrating the divine festivals of Sanatana Dharma with devotion and love
          </p>
          <div className="mt-6 space-x-6 flex justify-center">
            <Link href="/festivals" className="text-blue-200 hover:text-white transition-colors">
              Festivals
            </Link>
            <Link href="/aartis" className="text-blue-200 hover:text-white transition-colors">
              Aartis
            </Link>
            <Link href="/mantras" className="text-blue-200 hover:text-white transition-colors">
              Mantras
            </Link>
            <Link href="/stories" className="text-blue-200 hover:text-white transition-colors">
              Stories
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
