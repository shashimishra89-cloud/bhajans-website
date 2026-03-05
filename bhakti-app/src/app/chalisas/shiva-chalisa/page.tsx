"use client";

import React from 'react';
import Link from 'next/link';
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const ShivaChalisaPage = () => {
  const chalisaData = {
    id: "Shiva-chalisa",
    name: "Shiva Chalisa",
    title: "शिव चालीसा - Shiva Chalisa",
    description: "Complete Shiva Chalisa with Hindi lyrics, English translations, and spiritual significance.",
    icon: "🕉️",
    color: "from-blue-500 to-purple-500",
    deity: "Lord Shiva",
    verses: "41",
    lyrics: {
      hindi: [
        "जय गिरिजा पति दीन दयाला। सदा करत सन्तन प्रतिपाला॥",
        "भाल चन्द्रमा सोहत नीके। कानन कुण्डल नागफनी के॥",
        "अंग गौर शिर गंग बहाये। मुण्डमाल तन क्षार लगाये॥",
        "वस्त्र खाल बाघम्बर सोहे। छवि को देखि नाग मन मोहे॥",
        "मैना मातु की हवे दुलारी। बाम अंग सोहत छवि न्यारी॥",
        "कर त्रिशूल सोहत छवि भारी। करत सदा शत्रुन क्षयकारी॥",
        "नन्दि गणेश सोहै तहँ कैसे। सागर मध्य कमल हैं जैसे॥",
        "कार्तिक श्याम और गणराऊ। या छवि को कहि जात न काऊ॥",
        "देवन जबहीं जाय पुकारा। तब ही दुख प्रभु आप निवारा॥",
        "किया उपद्रव तारक भारी। देवन सब मिलि तुमहिं जुहारी॥",
        "तुरत षडानन आप पठायउ। लवनिमेष महँ मारि गिरायउ॥",
        "आप जलंधर असुर संहारा। सुयश तुम्हार विदित संसारा॥",
        "त्रिपुरासुर सन युद्ध मचाई। सबहिं कृपा कर लीन बचाई॥",
        "किया तपहिं भागीरथ भारी। पुरब प्रतिज्ञा तासु पुरारी॥",
        "दानिन महँ तुम सम कोउ नाहीं। सेवक स्तुति करत सदाहीं॥",
        "वेद माहि महिमा तुम गाई। अकथ अनादि भेद नहिं पाई॥",
        "प्रकटी उदधि मंथन में ज्वाला। जरत सुरासुर भए विहाला॥",
        "कीन्ही दया तहं करी सहाई। नीलकण्ठ तब नाम कहाई॥",
        "पूजन रामचन्द्र जब कीन्हा। जीत के लंक विभीषण दीन्हा॥",
        "सहस कमल में हो रहे धारी। कीन्ह परीक्षा तबहिं पुरारी॥",
        "एक कमल प्रभु राखेउ जोई। कमल नयन पूजन चहं सोई॥",
        "कठिन भक्ति देखी प्रभु शंकर। भए प्रसन्न दिए इच्छित वर॥",
        "जय जय जय अनन्त अविनाशी। करत कृपा सब के घटवासी॥",
        "दुष्ट सकल नित मोहि सतावै। भ्रमत रहौं मोहि चैन न आवै॥",
        "त्राहि त्राहि मैं नाथ पुकारो। येहि अवसर मोहि आन उबारो॥",
        "लै त्रिशूल शत्रुन को मारो। संकट ते मोहि आन उबारो॥",
        "मात-पिता भ्राता सब होई। संकट में पूछत नहिं कोई॥",
        "स्वामी एक है आस तुम्हारी। आय हरहु मम संकट भारी॥",
        "धन निर्धन को देत सदा हीं। जो कोई जांचे सो फल पाहीं॥",
        "अस्तुति केहि विधि करैं तुम्हारी। क्षमहु नाथ अब चूक हमारी॥",
        "शंकर हो संकट के नाशन। मंगल कारण विघ्न विनाशन॥",
        "योगी यति मुनि ध्यान लगावैं। शारद नारद शीश नवावैं॥",
        "नमो नमो जय नमः शिवाय। सुर ब्रह्मादिक पार न पाय॥",
        "जो यह पाठ करे मन लाई। ता पर होत है शम्भु सहाई॥",
        "ॠनियां जो कोई हो अधिकारी। पाठ करे सो पावन हारी॥",
        "पुत्र होन कर इच्छा जोई। निश्चय शिव प्रसाद तेहि होई॥",
        "पण्डित त्रयोदशी को लावे। ध्यान पूर्वक होम करावे॥",
        "त्रयोदशी व्रत करै हमेशा। ताके तन नहीं रहै कलेशा॥",
        "धूप दीप नैवेद्य चढ़ावे। शंकर सम्मुख पाठ सुनावे॥",
        "जन्म जन्म के पाप नसावे। अन्त धाम शिवपुर में पावे॥",
        "कहैं अयोध्यादास आस तुम्हारी। जानि सकल दुःख हरहु हमारी॥"
      ],
      translations: [
        {
          hindi: "जय गिरिजा पति दीन दयाला। सदा करत सन्तन प्रतिपाला॥",
          english: "Victory to Girija's husband, compassionate to the poor. Always protects your devotees."
        },
        {
          hindi: "भाल चन्द्रमा सोहत नीके। कानन कुण्डल नागफनी के॥",
          english: "The moon adorns your forehead beautifully. Serpents serve as your earrings."
        },
        {
          hindi: "अंग गौर शिर गंग बहाये। मुण्डमाल तन क्षार लगाये॥",
          english: "Your body is fair, Ganga flows in your hair. Garland of skulls, body smeared with ashes."
        },
        {
          hindi: "वस्त्र खाल बाघम्बर सोहे। छवि को देखि नाग मन मोहे॥",
          english: "Tiger skin looks beautiful as clothing. Seeing your form, the serpent's heart is captivated."
        },
        {
          hindi: "मैना मातु की हवे दुलारी। बाम अंग सोहत छवि न्यारी॥",
          english: "Mother Maina's beloved is beautiful. Your left side holds a unique form."
        },
        {
          hindi: "कर त्रिशूल सोहत छवि भारी। करत सदा शत्रुन क्षयकारी॥",
          english: "Trident in hand looks magnificent in your form. Always destroys the enemies."
        },
        {
          hindi: "नन्दि गणेश सोहै तहँ कैसे। सागर मध्य कमल हैं जैसे॥",
          english: "Nandi and Ganesha look beautiful there. Like lotuses in the middle of the ocean."
        },
        {
          hindi: "कार्तिक श्याम और गणराऊ। या छवि को कहि जात न काऊ॥",
          english: "Kartikeya, Shyam, and Ganesha are present. This form cannot be described in words."
        },
        {
          hindi: "देवन जबहीं जाय पुकारा। तब ही दुख प्रभु आप निवारा॥",
          english: "Whenever the gods cry out, you, Lord, remove their sorrows."
        },
        {
          hindi: "किया उपद्रव तारक भारी। देवन सब मिलि तुमहिं जुहारी॥",
          english: "When the planets caused great disturbance, all the gods together prayed to you."
        },
        {
          hindi: "तुरत षडानन आप पठायउ। लवनिमेष महँ मारि गिरायउ॥",
          english: "You immediately sent Shadanan. Who killed Lavanimesh and made him fall."
        },
        {
          hindi: "आप जलंधर असुर संहारा। सुयश तुम्हार विदित संसारा॥",
          english: "You killed the demon Jalandhar. Your glory is known throughout the world."
        },
        {
          hindi: "त्रिपुरासुर सन युद्ध मचाई। सबहिं कृपा कर लीन बचाई॥",
          english: "You fought a war with Tripurasur. By your grace, saved everyone."
        },
        {
          hindi: "किया तपहिं भागीरथ भारी। पुरब प्रतिज्ञा तासु पुरारी॥",
          english: "Bhagirath did severe penance. You fulfilled his promise."
        },
        {
          hindi: "दानिन महँ तुम सम कोउ नाहीं। सेवक स्तुति करत सदाहीं॥",
          english: "In giving, none is equal to you. Your servants always praise you."
        },
        {
          hindi: "वेद माहि महिमा तुम गाई। अकथ अनादि भेद नहिं पाई॥",
          english: "Your glory is sung in the Vedas. Indescribable, beginningless, no difference found."
        },
        {
          hindi: "प्रकटी उदधि मंथन में ज्वाला। जरत सुरासुर भए विहाला॥",
          english: "Flames appeared during ocean churning. Gods and demons became distressed."
        },
        {
          hindi: "कीन्ही दया तहं करी सहाई। नीलकण्ठ तब नाम कहाई॥",
          english: "You had mercy and helped them. Then you were named Neelkanth."
        },
        {
          hindi: "पूजन रामचन्द्र जब कीन्हा। जीत के लंक विभीषण दीन्हा॥",
          english: "When Ramachandra worshipped you. He conquered Lanka and gave it to Vibhishan."
        },
        {
          hindi: "सहस कमल में हो रहे धारी। कीन्ह परीक्षा तबहिं पुरारी॥",
          english: "You were holding a thousand lotuses. Then the Lord tested you."
        },
        {
          hindi: "एक कमल प्रभु राखेउ जोई। कमल नयन पूजन चहं सोई॥",
          english: "Whoever keeps one lotus for the Lord. Lotus-eyed Lord wants to worship only him."
        },
        {
          hindi: "कठिन भक्ति देखी प्रभु शंकर। भए प्रसन्न दिए इच्छित वर॥",
          english: "Seeing the difficult devotion, Lord Shankar. Became pleased and gave the desired boon."
        },
        {
          hindi: "जय जय जय अनन्त अविनाशी। करत कृपा सब के घटवासी॥",
          english: "Victory, victory, victory to the infinite, indestructible. By your grace, you reside in everyone's heart."
        },
        {
          hindi: "दुष्ट सकल नित मोहि सतावै। भ्रमत रहौं मोहि चैन न आवै॥",
          english: "All wicked people always torment me. I wander deluded, no consciousness comes."
        },
        {
          hindi: "त्राहि त्राहि मैं नाथ पुकारो। येहि अवसर मोहि आन उबारो॥",
          english: "Save, save, I cry out to you, Lord. Save me in this moment."
        },
        {
          hindi: "लै त्रिशूल शत्रुन को मारो। संकट ते मोहि आन उबारो॥",
          english: "Take the trident and kill the enemies. Save me from this crisis."
        },
        {
          hindi: "मात-पिता भ्राता सब होई। संकट में पूछत नहिं कोई॥",
          english: "Mother, father, brother all are there. In crisis, no one asks."
        },
        {
          hindi: "स्वामी एक है आस तुम्हारी। आय हरहु मम संकट भारी॥",
          english: "You are the only hope, Lord. Come and remove my great crisis."
        },
        {
          hindi: "धन निर्धन को देत सदा हीं। जो कोई जांचे सो फल पाहीं॥",
          english: "You always give wealth to the poor. Whoever tests you gets the fruit."
        },
        {
          hindi: "अस्तुति केहि विधि करैं तुम्हारी। क्षमहु नाथ अब चूक हमारी॥",
          english: "In whatever way I praise you. Forgive me, Lord, for my mistakes now."
        },
        {
          hindi: "शंकर हो संकट के नाशन। मंगल कारण विघ्न विनाशन॥",
          english: "Shankar is the destroyer of crises. Causer of auspiciousness, destroyer of obstacles."
        },
        {
          hindi: "योगी यति मुनि ध्यान लगावैं। शारद नारद शीश नवावैं॥",
          english: "Yogis, ascetics, and sages meditate. Sharada and Narada bow their heads."
        },
        {
          hindi: "नमो नमो जय नमः शिवाय। सुर ब्रह्मादिक पार न पाय॥",
          english: "Salutations, salutations, victory to Namah Shivaya. Gods including Brahma cannot cross you."
        },
        {
          hindi: "जो यह पाठ करे मन लाई। ता पर होत है शम्भु सहाई॥",
          english: "Whoever reads this with devotion. Shambhu becomes their protector."
        },
        {
          hindi: "ॠनियां जो कोई हो अधिकारी। पाठ करे सो पावन हारी॥",
          english: "Whoever is a ruler or authority. Reading this becomes pure."
        },
        {
          hindi: "पुत्र होन कर इच्छा जोई। निश्चय शिव प्रसाद तेहि होई॥",
          english: "Whoever desires to have a son. Definitely gets it by Shiva's grace."
        },
        {
          hindi: "पण्डित त्रयोदशी को लावे। ध्यान पूर्वक होम करावे॥",
          english: "Bring a pandit on the thirteenth day. Have havan performed with meditation."
        },
        {
          hindi: "त्रयोदशी व्रत करै हमेशा। ताके तन नहीं रहै कलेशा॥",
          english: "Whoever fasts on the thirteenth day always. No sorrow remains in their body."
        },
        {
          hindi: "धूप दीप नैवेद्य चढ़ावे। शंकर सम्मुख पाठ सुनावे॥",
          english: "Offer incense, lamp, and food offerings. Have the reading recited in front of Shankar."
        },
        {
          hindi: "जन्म जन्म के पाप नसावे। अन्त धाम शिवपुर में पावे॥",
          english: "Sins of many births are destroyed. At the end, attains Shiva's abode."
        },
        {
          hindi: "कहैं अयोध्यादास आस तुम्हारी। जानि सकल दुःख हरहु हमारी॥",
          english: "Says Ayodhyadas with hope in you. Knowing all, remove our sorrows."
        }
      ]
    },
    significance: {
      title: "Spiritual Significance of Shiva Chalisa",
      content: [
        "Shiva Chalisa is a powerful devotional hymn dedicated to Lord Shiva, the supreme deity of transformation and destruction in Hinduism.",
        "The Chalisa consists of 40 verses (chaupais) that praise the various forms, powers, and divine attributes of Lord Shiva.",
        "Regular recitation of Shiva Chalisa is believed to bring spiritual growth, remove obstacles, and grant blessings from Lord Shiva.",
        "It is especially powerful during Mahashivaratri celebrations and Mondays, which are considered auspicious days for Lord Shiva worship."
      ]
    },
    benefits: {
      title: "Benefits of Reciting Shiva Chalisa",
      content: [
        "Brings peace of mind and spiritual enlightenment",
        "Helps overcome fear, anxiety, and negative thoughts",
        "Provides protection from evil forces and negative energies",
        "Removes obstacles in personal and professional life",
        "Strengthens willpower and self-discipline",
        "Promotes health, longevity, and well-being",
        "Helps achieve success in spiritual practices",
        "Brings harmony in family and relationships"
      ]
    },
    practice: {
      title: "How to Practice Shiva Chalisa",
      content: [
        "Best time to recite: Early morning (Brahma Muhurta) or Monday evening",
        "Face the north or east direction while reciting",
        "Light a diya (lamp) and offer bilva leaves to Lord Shiva",
        "Maintain cleanliness and wear clean clothes, preferably white",
        "Recite with devotion, faith, and concentration on Lord Shiva",
        "Can be recited daily or especially on Mondays and Mahashivaratri",
        "Complete the recitation by offering water and seeking blessings"
      ]
    }
  };

  const breadcrumbs = generateBreadcrumbs('bhajans', chalisaData.title);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              भक्ति
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/chalisas" className="text-gray-700 hover:text-blue-600 transition-colors">
                चालीसा
              </Link>
              <Link href="/aartis" className="text-gray-700 hover:text-blue-600 transition-colors">
                आरती
              </Link>
              <Link href="/bhajans" className="text-gray-700 hover:text-blue-600 transition-colors">
                भजन
              </Link>
              <Link href="/festivals" className="text-gray-700 hover:text-blue-600 transition-colors">
                त्योहार
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-gray-500">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href || "/"} className="text-blue-600 hover:text-blue-700">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {chalisaData.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {chalisaData.description}
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {chalisaData.verses} verses
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {chalisaData.deity}
              </span>
            </div>
          </div>
        </div>
      </div>

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
            पूर्ण शिव चालीसा (Complete Shiva Chalisa in Hindi)
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
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
            शिव चालीसा - Shiva Chalisa Lyrics
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
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
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
                  <span className="text-blue-500 mr-2 mt-1">•</span>
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
              © 2024 भक्ति - Devotional Content for Spiritual Practice
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Made with devotion for all devotees
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShivaChalisaPage;
