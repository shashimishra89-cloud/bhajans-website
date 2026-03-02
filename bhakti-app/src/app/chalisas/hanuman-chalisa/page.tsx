"use client";

import React from 'react';
import Link from 'next/link';
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

export default function HanumanChalisaPage() {
  const chalisaData = {
    id: "hanuman-chalisa",
    name: "Hanuman Chalisa",
    title: "श्री हनुमान चालीसा - Hanuman Chalisa",
    description: "Complete Hanuman Chalisa with Hindi lyrics, English translations, and spiritual significance.",
    icon: "💪",
    color: "from-orange-500 to-red-500",
    deity: "Lord Hanuman",
    verses: "40",
    lyrics: {
      hindi: [
        "श्रीगुरु चरन सरोज रज , निजमन मुकुरु सुधारि। बरनउं रघुबर बिमल जसु, जो दायक फल चारि।। बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार। बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार।।",
        "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुं लोक उजागर।। राम दूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा।। महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी।। कंचन बरन बिराज सुबेसा। कानन कुण्डल कुँचित केसा।। हाथ बज्र औ ध्वजा बिराजे। कांधे मूंज जनेउ साजे।। शंकर सुवन केसरी नंदन। तेज प्रताप महा जग वंदन।। बिद्यावान गुनी अति चातुर। राम काज करिबे को आतुर।। प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया।। सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा।। भीम रूप धरि असुर संहारे। रामचन्द्र के काज संवारे।। लाय सजीवन लखन जियाये। श्री रघुबीर हरषि उर लाये।।",
        "रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई।। सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कण्ठ लगावैं।। सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा।। जम कुबेर दिगपाल जहां ते। कबि कोबिद कहि सके कहां ते।। तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा।। तुम्हरो मंत्र बिभीषन माना। लंकेश्वर भए सब जग जाना।। जुग सहस्र जोजन पर भानु। लील्यो ताहि मधुर फल जानू।। प्रभु मुद्रिका मेलि मुख माहीं। जलधि लांघि गये अचरज नाहीं।। दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते।।",
        "राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे।। सब सुख लहै तुम्हारी सरना। तुम रच्छक काहू को डर ना।। आपन तेज सम्हारो आपै। तीनों लोक हांक तें कांपै।। भूतपिसाच निकट नहिं आवै। महाबीर जब नाम सुनावै।। नासै रोग हरे सब पीरा। जपत निरन्तर हनुमत बीरा।। संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै।। सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा।। और मनोरथ जो कोई लावै। सोई अमित जीवन फल पावै।। चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा।।",
        "साधु संत के तुम रखवारे। असुर निकन्दन राम दुलारे।। अष्टसिद्धि नौ निधि के दाता। अस बर दीन जानकी माता।। राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा।। तुह्मरे भजन राम को पावै। जनम जनम के दुख बिसरावै।। अंत काल रघुबर पुर जाई। जहां जन्म हरिभक्त कहाई।। और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई।। संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा।। जय जय जय हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं।। जो सत बार पाठ कर कोई। छूटहि बन्दि महा सुख होई।। जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा।। तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महं डेरा।।",
        "पवनतनय संकट हरन, मंगल मूरति रूप। राम लखन सीता सहित, हृदय बसहु सुर भूप।।"
      ],
      translations: [
        {
          hindi: "श्रीगुरु चरन सरोज रज , निजमन मुकुरु सुधारि। बरनउं रघुबर बिमल जसु, जो दायक फल चारि।। बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार। बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार।।",
          english: "Having polished the mirror of my heart with the dust of my guru's lotus feet, I sing the pure fame of the best of the Raghu dynasty, which bestows the four fruits of life. Knowing my body to be devoid of intelligence, I remember Hanuman, the son of the Wind God. Grant me strength, intelligence, and knowledge, and remove all my afflictions and sins."
        },
        {
          hindi: "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुं लोक उजागर।। राम दूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा।। महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी।। कंचन बरन बिराज सुबेसा। कानन कुण्डल कुँचित केसा।। हाथ बज्र औ ध्वजा बिराजे। कांधे मूंज जनेउ साजे।। शंकर सुवन केसरी नंदन। तेज प्रताप महा जग वंदन।। बिद्यावान गुनी अति चातुर। राम काज करिबे को आतुर।। प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया।। सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा।। भीम रूप धरि असुर संहारे। रामचन्द्र के काज संवारे।। लाय सजीवन लखन जियाये। श्री रघुबीर हरषि उर लाये।।",
          english: "Victory to Hanuman, ocean of wisdom and virtue. Victory to the Monkey chief, illuminator of the three worlds. Messenger of Rama, abode of incomparable strength. Son of Anjana, named Son of the Wind. Great hero of mighty valor, body like thunderbolt. Destroyer of evil thoughts, companion of the good. Golden complexioned, wearing beautiful clothes. With ears like earrings and curly hair. You hold Mace and Flag in your hands. And a sacred thread of Munja grass adorns your shoulder. You are the embodiment of Lord Shiva and son of Kesari. You are honored by the whole world as the son of Pavan. You are extremely wise, virtuous and clever. You are always eager to do the work of Lord Rama. You delight in listening to the glories of Lord Rama. Ram, Lakshman and Sita reside in your heart. You assumed a tiny form to appear before Sita. You burned the entire Lanka with your fiery tail. You brought the Sanjivini herb and revived Lakshman. Rama embraced you with great joy."
        },
        {
          hindi: "रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई।। सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कण्ठ लगावैं।। सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा।। जम कुबेर दिगपाल जहां ते। कबि कोबिद कहि सके कहां ते।। तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा।। तुम्हरो मंत्र बिभीषन माना। लंकेश्वर भए सब जग जाना।। जुग सहस्र जोजन पर भानु। लील्यो ताहि मधुर फल जानू।। प्रभु मुद्रिका मेलि मुख माहीं। जलधि लांघि गये अचरज नाहीं।। दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते।।",
          english: "Lord Rama gave you great praise. You are dear to me like my brother Bharat. Your thousand mouths sing your glory. Saying this, Lord Rama embraced you. Sankadi, Brahmadi, Munis, Narad, Sarswat, and Ahisa. Yama, Kuber, Digpal from where. Who can say where the poets and scholars are. You did a favor to Sugriva. Made Rama meet and gave him the kingdom. Vibhishan accepted your mantra. Became the king of Lanka, known to the world. For a thousand yugas, a hundred crore yojanas to the sun. You swallowed it, considering it a sweet fruit. Taking the Lord's ring in your mouth. You crossed the ocean, there is no wonder. Difficult tasks of the world are accomplished. By your grace, they become easy."
        },
        {
          hindi: "राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे।। सब सुख लहै तुम्हारी सरना। तुम रच्छक काहू को डर ना।। आपन तेज सम्हारो आपै। तीनों लोक हांक तें कांपै।। भूतपिसाच निकट नहिं आवै। महाबीर जब नाम सुनावै।। नासै रोग हरे सब पीरा। जपत निरन्तर हनुमत बीरा।। संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै।। सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा।। और मनोरथ जो कोई लावै। सोई अमित जीवन फल पावै।। चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा।।",
          english: "You are the guardian at Rama's door. Without command, you don't go anywhere. All happiness is found at your feet. You are the protector, no one fears. You contain your own power. The three worlds tremble at your roar. Ghosts and demons don't come near. When the great hero's name is heard. Diseases end, all sorrows are destroyed. By continuously chanting Hanuman the hero. Hanuman rescues from troubles. Those who bring mind, speech, and meditation. Rama is the ascetic king of all. You accomplish all his tasks. Whatever desire anyone brings. They get the unlimited fruit of life. Your glory in all four ages. Is famous, illuminating the world."
        },
        {
          hindi: "साधु संत के तुम रखवारे। असुर निकन्दन राम दुलारे।। अष्टसिद्धि नौ निधि के दाता। अस बर दीन जानकी माता।। राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा।। तुह्मरे भजन राम को पावै। जनम जनम के दुख बिसरावै।। अंत काल रघुबर पुर जाई। जहां जन्म हरिभक्त कहाई।। और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई।। संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा।। जय जय जय हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं।। जो सत बार पाठ कर कोई। छूटहि बन्दि महा सुख होई।। जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा।। तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महं डेरा।।",
          english: "You are the protector of saints and sages. Destroyer of demons, beloved of Rama. Giver of eight siddhis and nine treasures. Mother Janaki gave this boon. Rama's essence is with you. Always remain the servant of Raghupati. By your worship, Rama is pleased. Sorrows of many births are forgotten. At the end of life, go to Raghupuri. Where the birth of Hari's devotee is said. Other deities don't hold the mind. Hanuman alone does all good. Troubles are cut, all sorrows end. Whoever remembers Hanuman the powerful hero. Victory, victory to Hanuman, Lord. Have mercy by the grace of Guru. Whoever reads this seven times. Becomes free, great happiness happens. Whoever reads this Hanuman Chalisa. Becomes successful, witness of Gaurisa. Tulsidas always serves Hari. May Lord reside in the heart."
        },
        {
          hindi: "पवनतनय संकट हरन, मंगल मूरति रूप। राम लखन सीता सहित, हृदय बसहु सुर भूप।।",
          english: "Son of Pavan, remover of troubles, embodiment of auspiciousness. With Rama, Lakshman, and Sita, reside in the heart, Lord of the world."
        }
      ]
    },
    significance: {
      title: "Spiritual Significance of Hanuman Chalisa",
      content: [
        "Hanuman Chalisa is a powerful devotional hymn dedicated to Lord Hanuman, the mighty devotee of Lord Rama who embodies strength, devotion, and selfless service.",
        "Composed by the great saint Goswami Tulsidas in the 16th century, this 40-verse prayer has become one of the most widely recited Hindu texts across the world.",
        "The Chalisa is believed to invoke Hanuman's divine blessings, providing protection, courage, and spiritual strength to devotees who recite it with faith and devotion.",
        "Regular recitation of Hanuman Chalisa is said to remove obstacles, ward off evil influences, and bring peace and prosperity to the practitioner's life."
      ]
    },
    benefits: {
      title: "Benefits of Reciting Hanuman Chalisa",
      content: [
        "Provides protection from negative energies and evil forces",
        "Enhances physical and mental strength and courage",
        "Removes obstacles and brings success in endeavors",
        "Promotes spiritual growth and devotion to Lord Rama",
        "Brings peace of mind and reduces stress and anxiety",
        "Helps overcome fears and builds self-confidence",
        "Creates positive energy and auspiciousness in life"
      ]
    },
    practice: {
      title: "How to Practice Hanuman Chalisa",
      content: [
        "Best time to recite: Early morning (Brahma Muhurta) or Tuesday/Saturday evening",
        "Sit facing north or east in a clean, quiet space",
        "Light a diya and offer flowers or prasad to Lord Hanuman",
        "Recite with devotion, concentration, and proper pronunciation",
        "Complete recitation takes approximately 10-15 minutes",
        "Can be recited daily, especially on Tuesdays and Saturdays",
        "Maintain a vegetarian diet and avoid alcohol on days of recitation"
      ]
    }
  };

  const breadcrumbs = generateBreadcrumbs('chalisas', chalisaData.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🙏</span>
              <h1 className="text-2xl font-bold text-orange-900">Bhakti</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-orange-700 hover:text-orange-900 transition-colors">Festivals</Link>
              <Link href="/aartis" className="text-orange-700 hover:text-orange-900 transition-colors">Aartis</Link>
              <Link href="/bhajans" className="text-orange-700 hover:text-orange-900 transition-colors">Bhajans</Link>
              <Link href="/chalisas" className="text-orange-600 font-semibold">Chalisas</Link>
              <Link href="/mantras" className="text-orange-700 hover:text-orange-900 transition-colors">Mantras</Link>
              <Link href="/stories" className="text-orange-700 hover:text-orange-900 transition-colors">Stories</Link>
              <Link href="/gods" className="text-orange-700 hover:text-orange-900 transition-colors">Gods</Link>
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
          
          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl shadow-xl p-8 md:p-12 border border-orange-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">{chalisaData.icon}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {chalisaData.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {chalisaData.description}
              </p>
              <div className="flex justify-center space-x-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  {chalisaData.verses} वर्स
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  {chalisaData.deity}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Ad */}
      <BannerAd />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Significance Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {chalisaData.significance.title}
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-4">
              {chalisaData.significance.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* In-Content Ad */}
        <InContentAd />

        {/* Complete Hindi Chalisa Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            पूर्ण हनुमान चालीसा (Complete Hanuman Chalisa in Hindi)
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <div className="space-y-3 text-left">
                {chalisaData.lyrics.hindi.map((verse, index) => (
                  <div key={index} className="text-lg text-gray-800 leading-relaxed">
                    {verse}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <InContentAd />

        {/* Verse-by-Verse Translation Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            हनुमान चालीसा - Hanuman Chalisa Lyrics
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              {chalisaData.lyrics.hindi.map((verse, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="text-right mb-2">
                    <p className="text-lg font-medium text-gray-800" dir="rtl">
                      {verse}
                    </p>
                  </div>
                  {chalisaData.lyrics.translations[index] && (
                    <div className="text-left mt-2">
                      <p className="text-sm text-gray-600 italic">
                        {chalisaData.lyrics.translations[index].english}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {chalisaData.benefits.title}
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ul className="space-y-3">
              {chalisaData.benefits.content.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {chalisaData.practice.title}
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ul className="space-y-3">
              {chalisaData.practice.content.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{instruction}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Banner Ad */}
        <BannerAd />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Bhakti. All rights reserved. Made with devotion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
