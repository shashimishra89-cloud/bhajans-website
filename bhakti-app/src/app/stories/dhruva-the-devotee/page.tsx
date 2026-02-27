"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Sparkles, ChevronRight, Clock, Heart, Star } from "lucide-react";
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const storyData = {
  id: "dhruva-the-devotee",
  name: "Dhruva the Devotee",
  title: "The Boy Who Became a Star",
  description: "The inspiring story of young Dhruva's unwavering devotion and how he attained the blessing of becoming the Pole Star.",
  category: "Devotional Stories",
  moral: "Perseverance and Faith",
  readTime: "7 min read",
  parts: [
    {
      title: "The King's Son",
      content: {
        english: "In ancient times, there lived a great king named Uttanapada who had two wives, Suniti and Suruchi. Suniti had a son named Dhruva, while Suruchi had a son named Uttama. The king loved Suruchi more and favored her son Uttama. Young Dhruva, though the elder son, often felt neglected and longed for his father's love and attention.",
        hindi: "प्राचीन काल में, उत्तानपाद नाम का एक महान राजा रहता था जिसकी दो पत्नियां थीं - सुनीति और सुरुचि। सुनीति का एक पुत्र था ध्रुव, जबकि सुरुचि का एक पुत्र था उत्तम। राजा सुरुचि को अधिक प्यार करता था और उसके पुत्र उत्तम को पसंद करता था। युवा ध्रुव, हालांकि बड़ा पुत्र था, अक्सर उपेक्षित महसूस करता था और अपने पिता के प्यार और ध्यान की लालसा रखता था।"
      },
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&auto=format"
    },
    {
      title: "The Cruel Words",
      content: {
        english: "One day, five-year-old Dhruva went to sit on his father's lap, but Suruchi stopped him harshly. She said, 'You cannot sit on the king's lap. Only my son Uttama has that right. If you want to sit on a throne, go and worship Lord Vishnu, who can give you a throne that no one can take away.' These words pierced young Dhruva's heart, but instead of feeling defeated, he became determined.",
        hindi: "एक दिन, पांच वर्षीय ध्रुव अपने पिता की गोद में बैठने गया, लेकिन सुरुचि ने उसे कठोरता से रोक दिया। उसने कहा, 'तुम राजा की गोद में नहीं बैठ सकते। केवल मेरे पुत्र उत्तम को यह अधिकार है। यदि तुम्हें किसी सिंहासन पर बैठना है, तो जाओ और भगवान विष्णु की पूजा करो, जो तुम्हें ऐसा सिंहासन दे सकते हैं जिसे कोई छीन नहीं सकता।' ये शब्द युवा ध्रुव के दिल को भेद गए, लेकिन हार महसूस करने के बजाय, वह दृढ़ हो गया।"
      },
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop&auto=format"
    },
    {
      title: "The Journey Begins",
      content: {
        english: "Dhruva immediately left the palace and went to the forest. His mother Suniti tried to stop him, but he was determined. With unwavering faith, he walked barefoot through dense forests, crossed rivers, and climbed mountains. He was just a little boy, but his devotion was stronger than any obstacle. Finally, he reached the banks of the Yamuna River, where he decided to perform intense penance.",
        hindi: "ध्रुव ने तुरंत महल छोड़ दिया और जंगल चला गया। उसकी मां सुनीति ने उसे रोकने की कोशिश की, लेकिन वह दृढ़ था। अटल विश्वास के साथ, वह बिना जूतों के घने जंगलों से होकर गया, नदियां पार कीं, और पहाड़ों पर चढ़ा। वह केवल एक छोटा लड़का था, लेकिन उसकी भक्ति किसी भी बाधा से मजबूत थी। अंत में, वह यमुना नदी के किनारे पहुंचा, जहां उसने तीव्र तपस्या करने का फैसला किया।"
      },
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop&auto=format"
    },
    {
      title: "Intense Penance",
      content: {
        english: "Dhruva began his penance with a single-minded focus on Lord Vishnu. He stood on one leg for months, with his hands raised above his head, chanting the name of Vishnu without eating or drinking. The forest animals gathered around him, amazed by his devotion. Even the gods in heaven were astonished by this little boy's unwavering determination. His body became weak, but his spirit grew stronger with each passing day.",
        hindi: "ध्रुव ने भगवान विष्णु पर एकाग्र होकर अपनी तपस्या शुरू की। वह महीनों तक एक पैर पर खड़ा रहा, अपने हाथों को अपने सिर के ऊपर उठाए हुए, बिना खाए-पिए विष्णु का नाम जपता रहा। जंगल के जानवर उसके चारों ओर इकट्ठे हो गए, उसकी भक्ति से आश्चर्यचकित होकर। स्वर्ग में देवता भी इस छोटे लड़के की अटल दृढ़ता से हैरान थे। उसका शरीर कमजोर हो गया, लेकिन उसकी आत्मा हर दिन मजबूत होती गई।"
      },
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&auto=format"
    },
    {
      title: "Divine Appearance",
      content: {
        english: "Finally, Lord Vishnu could no longer bear to see his little devotee suffering. He appeared before Dhruva in all his divine glory, riding on his eagle Garuda. The sight was so magnificent that Dhruva forgot all his pain and fell at the Lord's feet. Vishnu lifted him up and said, 'I am pleased with your devotion, my child. Ask for any boon you desire.' Dhruva asked only for a place in the Lord's heart forever.",
        hindi: "अंत में, भगवान विष्णु अपने छोटे भक्त को तकलीफ देते हुए और नहीं देख सके। वह अपने सभी दिव्य भव्यति में ध्रुव के सामने प्रकट हुए, अपनी गरुड़ पर सवार होकर। दृश्य इतना भव्य था कि ध्रुव अपने सभी दर्द भूल गया और प्रभु के पैरों में गिर गया। विष्णु ने उसे उठाया और कहा, 'मैं तुम्हारी भक्ति से प्रसन्न हूं, मेरे बच्चे। कोई भी वर मांगो जो तुम चाहते हो।' ध्रुव ने केवल प्रभु के हृदय में हमेशा के लिए एक स्थान मांगा।"
      },
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=400&fit=crop&auto=format"
    },
    {
      title: "The Eternal Star",
      content: {
        english: "Lord Vishnu was overwhelmed by Dhruva's selfless devotion. He blessed Dhruva not only with a place in his heart but also with a unique boon - Dhruva would become the Pole Star (Dhruva Tara), eternal and unchanging, visible to all beings on Earth. Thus, the little boy who was denied a father's lap on Earth received an eternal place in the cosmos, shining brightly as the North Star, guiding travelers and reminding everyone of the power of unwavering devotion.",
        hindi: "भगवान विष्णु ध्रुव की निस्वार्थ भक्ति से अभिभूत हुए। उन्होंने ध्रुव को न केवल अपने हृदय में स्थान दिया, बल्कि एक अद्वितीय वर भी दिया - ध्रुव ध्रुव तारा (पोल स्टार) बन जाएगा, जो शाश्वत और अपरिवर्तनीय है, पृथ्वी पर सभी प्राणियों के लिए दृश्यमान। इस तरह, छोटा लड़का जिसे पृथ्वी पर पिता की गोद से वंचित किया गया था, उसे ब्रह्मांड में एक शाश्वत स्थान मिला, उत्तरी तारे के रूप में चमकता हुआ, यात्रियों का मार्गदर्शन करता और हर किसी को अटल भक्ति की शक्ति की याद दिलाता।"
      },
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=400&fit=crop&auto=format"
    }
  ],
  significance: "The story of Dhruva teaches us that age is no barrier to devotion and that sincere, unwavering faith can move even the Supreme Being. It shows that God values the quality of devotion over worldly status or age, and that true devotion seeks only God's love, not material rewards.",
  lessons: [
    "Age is no barrier to spiritual achievement",
    "Unwavering faith can overcome any obstacle",
    "True devotion seeks only God's love",
    "Perseverance in the face of hardship brings divine rewards"
  ]
};

export default function DhruvaTheDevoteeStoryPage() {
  const story = storyData;
  
  if (!story) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs('stories', story.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-yellow-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-yellow-600" />
              <h1 className="text-2xl font-bold text-yellow-900">Bhakti</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-yellow-700 hover:text-yellow-900 transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-yellow-700 hover:text-yellow-900 transition-colors">Aartis</Link>
              <Link href="/mantras" className="text-yellow-700 hover:text-yellow-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-yellow-700 hover:text-yellow-900 transition-colors">Stories</Link>
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
          
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl shadow-xl p-8 md:p-12 border border-yellow-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Star className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-yellow-900 mb-6">
                {story.name}
              </h1>
              <p className="text-xl text-yellow-700 mb-2">
                {story.title}
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {story.description}
              </p>
              <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-yellow-600">
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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-yellow-100">
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
                  <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100">
                    <h4 className="text-lg font-bold text-yellow-900 mb-3">English</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {part.content.english}
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
                    <h4 className="text-lg font-bold text-orange-900 mb-3">हिन्दी</h4>
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
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Significance of the Story</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              {story.significance}
            </p>
          </div>
        </section>

        {/* Lessons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Moral Lessons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {story.lessons.map((lesson, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">
                  {lesson}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Related Stories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">Related Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/stories/ganesh-and-the-moon" className="bg-white rounded-xl shadow-lg p-6 border border-yellow-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🌙</span>
                <h3 className="text-lg font-bold text-yellow-800">Ganesh and the Moon</h3>
              </div>
              <p className="text-gray-600 text-sm">Why Lord Ganesha Cursed the Moon</p>
            </Link>
            
            <Link href="/stories/krishna-and-pootana" className="bg-white rounded-xl shadow-lg p-6 border border-yellow-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">👶</span>
                <h3 className="text-lg font-bold text-yellow-800">Krishna and Pootana</h3>
              </div>
              <p className="text-gray-600 text-sm">The Demon Who Came as a Mother</p>
            </Link>
            
            <Link href="/stories/prahlada-the-faithful" className="bg-white rounded-xl shadow-lg p-6 border border-yellow-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🦁</span>
                <h3 className="text-lg font-bold text-yellow-800">Prahlada Faithful</h3>
              </div>
              <p className="text-gray-600 text-sm">The Boy Who Defied His Father</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">Bhakti</span>
          </div>
          <p className="text-yellow-200">
            Celebrating the divine festivals of Sanatana Dharma with devotion and love
          </p>
          <div className="mt-6 space-x-6 flex justify-center">
            <Link href="/festivals" className="text-yellow-200 hover:text-white transition-colors">
              Festivals
            </Link>
            <Link href="/aartis" className="text-yellow-200 hover:text-white transition-colors">
              Aartis
            </Link>
            <Link href="/mantras" className="text-yellow-200 hover:text-white transition-colors">
              Mantras
            </Link>
            <Link href="/stories" className="text-yellow-200 hover:text-white transition-colors">
              Stories
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
