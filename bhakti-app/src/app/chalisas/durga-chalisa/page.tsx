"use client";

import React from 'react';
import Link from 'next/link';
import { BannerAd, InContentAd } from "@/components/AdBlock";
import { Breadcrumbs, generateBreadcrumbs } from "@/components/Breadcrumbs";

const DurgaChalisaPage = () => {
  const chalisaData = {
    id: "durga-chalisa",
    name: "Durga Chalisa",
    title: "दुर्गा चालीसा - Durga Chalisa",
    description: "Complete Durga Chalisa with Hindi lyrics, English translations, and spiritual significance.",
    icon: "🔱",
    color: "from-red-500 to-pink-500",
    deity: "Goddess Durga",
    verses: "40",
    lyrics: {
      hindi: [
        "नमो नमो दुर्गे सुख करनी। नमो नमो अंबे दुःख हरनी॥",
        "निरंकार है ज्योति तुम्हारी। तिहूं लोक फैली उजियारी॥",
        "शशि लालाट मुख महाविशाला। नेत्र लाल भृकुटि विकराला॥",
        "रूप मातु को अधिक सुहावे। दरश करत जन अति सुख पावे॥",
        "तुम संसार शक्ति लै कीना। पालन हेतु अन्न धन दीना॥",
        "अन्नपूर्णा हुई जग पाला। तुम ही आदि सुन्दरी बाला॥",
        "प्रलयकाल सब नाशन हारी। तुम गौरी शिवशंकर प्यारी॥",
        "शिव योगी तुम्हरे गुण गावें। ब्रह्मा विष्णु तुम्हें नित ध्यावें॥",
        "रूप सरस्वती को तुम धारा। दे सुबुद्धि ऋषि मुनिन उबारा॥",
        "धरयो रूप नरसिंह को अम्बा। परगट भई फाड़कर खम्बा॥",
        "रक्षा करि प्रह्लाद बचायो। हिरण्याक्ष को स्वर्ग पठायो॥",
        "लक्ष्मी रूप धरो जग माहीं। श्री नारायण अंग समाहीं॥",
        "क्षीरसिन्धु में करत विलासा। दयासिन्धु दीजै मन आसा॥",
        "हिंगलाज में तुम्हीं भवानी। महिमा अमित न जात बखानी॥",
        "मातंगी अरु धूमावति माता। भुवनेश्वरी बगला सुख दाता॥",
        "श्री भैरव तारा जग तारिणी। छिन्न भाल भव दुःख निवारिणी॥",
        "केहरि वाहन सोह भवानी। लांगुर वीर चलत अगवानी॥",
        "कर में खप्पर खड्ग विराजै। जाको देख काल डर भाजै॥",
        "सोहै अस्त्र और त्रिशूला। जाते उठत शत्रु हिय शूला॥",
        "नगरकोट में तुम्हीं विराजत। तिहुँलोक में डंका बाजत॥",
        "शुम्भ निशुम्भ दानव तुम मारे। रक्तन बीज शंखन संहारे॥",
        "महिषासुर नृप अति अभिमानी। जेहि अघ भार मही अकुलानी॥",
        "रूप कराल कालिका धारा। सेन सहित तुम तिहि संहारा॥",
        "परी गाढ़ सन्तन पर जब जब। भई सहाय मातु तुम तब तब॥",
        "अमर पुरी औरो सब लोका। तब महिमा सब रहें अशोका॥",
        "ज्वाला में है ज्योति तुम्हारी। तुम्हें सदा पूजें नर-नारी॥",
        "प्रेम भक्ति से जो यश गावें। दुःख दारिद्र निकट नहिं आवें॥",
        "ध्यावे तुम्हें जो नर मन लाई। जन्म-मरण ताकौ छुटि जाई॥",
        "जोगी सुर मुनि कहत पुकारी। योग न हो बिन शक्ति तुम्हारी॥",
        "शंकर आचारज तप कीनो। काम क्रोध जीति सब लीनो॥",
        "निशिदिन ध्यान धरो शंकर को। काहु काल नहिं सुमिरो तुमको॥",
        "शक्ति रूप का मरम न पायो। शक्ति गई तब मन पछितायो॥",
        "शरणागत हुई कीर्ति बखानी। जय जय जय जगदम्ब भवानी॥",
        "भई प्रसन्न आदि जगदम्बा। दई शक्ति नहिं कीन विलम्बा॥",
        "मोको मातु कष्ट अति घेरो। तुम बिन कौन हरै दुःख मेरो॥",
        "आशा तृष्णा निपट सतावें। मोह मदादिक सब बिनशावे॥",
        "शत्रु नाश कीजै महारानी। सुमिरौं इकचित तुम्हें भवानी॥",
        "करो कृपा हे मातु दयाला। ऋद्धि-सिद्धि दै करहु निहाला॥",
        "जब लगि जियऊं दया फल पाऊं। तुम्हरो यश मैं सदा सुनाऊं॥",
        "श्री दुर्गा चालीसा जो कोई गावै। सब सुख भोग परमपद पावै॥",
        "देवीदास शरण निज जानी। करहु कृपा जगदम्ब भवानी॥"
      ],
      translations: [
        {
          hindi: "नमो नमो दुर्गे सुख करनी। नमो नमो अंबे दुःख हरनी॥",
          english: "Salutations to Durga who brings happiness. Salutations to Amba who removes sorrows."
        },
        {
          hindi: "निरंकार है ज्योति तुम्हारी। तिहूं लोक फैली उजियारी॥",
          english: "You are the one who is beyond attributes, O Mother. The whole world is your creation."
        },
        {
          hindi: "शशि लालाट मुख महाविशाला। नेत्र लाल भृकुटि विकराला॥",
          english: "Shiva's skull is in your hands, the great illusion is destroyed."
        },
        {
          hindi: "रूप मातु को अधिक सुहावे। दरश करत जन अति सुख पावे॥",
          english: "You hold the form of mother nature, making people happy by your sight."
        },
        {
          hindi: "तुम संसार शक्ति लै कीना। पालन हेतु अन्न धन दीना॥",
          english: "You are the goddess who holds all power, protecting the world."
        },
        {
          hindi: "अन्नपूर्णा हुई जग पाला। तुम ही आदि सुन्दरी बाला॥",
          english: "Annapurna who sustains the world. You are the first Sundari."
        },
        {
          hindi: "प्रलयकाल सब नाशन हारी। तुम गौरी शिवशंकर प्यारी॥",
          english: "Prahlada's aunt is burning. You are dear to Gauri Shankar."
        },
        {
          hindi: "शिव योगी तुम्हरे गुण गावें। ब्रह्मा विष्णु तुम्हें नित ध्यावें॥",
          english: "Shiva and yogis are your servants. Brahma and Vishnu meditate upon you."
        },
        {
          hindi: "रूप सरस्वती को तुम धारा। दे सुबुद्धि ऋषि मुनिन उबारा॥",
          english: "You hold the essence of all forms. The creator Brahma is amazed."
        },
        {
          hindi: "धरयो रूप नरसिंह को अम्बा। परगट भई फाड़कर खम्बा॥",
          english: "In the form of a demon, you became Mother Amba. You tore apart the demon."
        },
        {
          hindi: "रक्षा करि प्रह्लाद बचायो। हिरण्याक्ष को स्वर्ग पठायो॥",
          english: "You protected Prahlada and killed Hiranyakashipu. You sent him to heaven."
        },
        {
          hindi: "लक्ष्मी रूप धरो जग माहीं। श्री नारायण अंग समाहीं॥",
          english: "You took the form of Lakshmi and fought the demon. The goddess was pleased."
        },
        {
          hindi: "क्षीरसिन्धु में करत विलासा। दयासिन्धु दीजै मन आसा॥",
          english: "You play in the ocean of milk. The ocean of mercy fulfills our desires."
        },
        {
          hindi: "हिंगलाज में तुम्हीं भवानी। महिमा अमित न जात बखानी॥",
          english: "You are Bhavani in Hinglaj. Your glory cannot be described in words."
        },
        {
          hindi: "मातंगी अरु धूमावति माता। भुवनेश्वरी बगला सुख दाता॥",
          english: "Matangi and Dhumavati are mothers. Bhuvaneshwari and Bagla give happiness."
        },
        {
          hindi: "श्री भैरव तारा जग तारिणी। छिन्न भाल भव दुःख निवारिणी॥",
          english: "Shri Bhairav and Tara save the world. Chhinnabhala removes worldly suffering."
        },
        {
          hindi: "केहरि वाहन सोह भवानी। लांगुर वीर चलत अगवानी॥",
          english: "The lion vehicle looks beautiful, O Bhavani. The brave monkey leads the procession."
        },
        {
          hindi: "कर में खप्पर खड्ग विराजै। जाको देख काल डर भाजै॥",
          english: "Skull and sword shine in your hands. Even death fears seeing you."
        },
        {
          hindi: "सोहै अस्त्र और त्रिशूला। जाते उठत शत्रु हिय शूला॥",
          english: "Your weapons and trident look beautiful. Enemies' hearts burn with fear."
        },
        {
          hindi: "नगरकोट में तुम्हीं विराजत। तिहुँलोक में डंका बाजत॥",
          english: "You rule in Nagarkot. Drums play in all three worlds."
        },
        {
          hindi: "शुम्भ निशुम्भ दानव तुम मारे। रक्तन बीज शंखन संहारे॥",
          english: "You killed the demons Shumbha and Nishumbha. You destroyed Raktabeeja and Shumbha."
        },
        {
          hindi: "महिषासुर नृप अति अभिमानी। जेहि अघ भार मही अकुलानी॥",
          english: "Mahishasura was very arrogant. The earth was troubled by his sins."
        },
        {
          hindi: "रूप कराल कालिका धारा। सेन सहित तुम तिहि संहारा॥",
          english: "You took the fierce form of Kalika. You destroyed him along with his army."
        },
        {
          hindi: "परी गाढ़ सन्तन पर जब जब। भई सहाय मातु तुम तब तब॥",
          english: "Whenever demons troubled saints. You helped them, O Mother."
        },
        {
          hindi: "अमर पुरी औरो सब लोका। तब महिमा सब रहें अशोका॥",
          english: "Amarpuri and all other worlds. Became happy by your glory."
        },
        {
          hindi: "ज्वाला में है ज्योति तुम्हारी। तुम्हें सदा पूजें नर-नारी॥",
          english: "Your light shines in Jwala. Men and women always worship you."
        },
        {
          hindi: "प्रेम भक्ति से जो यश गावें। दुःख दारिद्र निकट नहिं आवें॥",
          english: "Those who sing your glory with love and devotion. Sorrow and poverty never come near them."
        },
        {
          hindi: "ध्यावे तुम्हें जो नर मन लाई। जन्म-मरण ताकौ छुटि जाई॥",
          english: "Whoever meditates upon you with devotion. Is freed from the cycle of birth and death."
        },
        {
          hindi: "जोगी सुर मुनि कहत पुकारी। योग न हो बिन शक्ति तुम्हारी॥",
          english: "Yogis, gods, and sages call out. Yoga is not possible without your power."
        },
        {
          hindi: "शंकर आचारज तप कीनो। काम क्रोध जीति सब लीनो॥",
          english: "Shankar performed penance. He conquered desire and anger."
        },
        {
          hindi: "निशिदिन ध्यान धरो शंकर को। काहु काल नहिं सुमिरो तुमको॥",
          english: "Shankar meditates upon you day and night. He never forgets you."
        },
        {
          hindi: "शक्ति रूप का मरम न पायो। शक्ति गई तब मन पछितायो॥",
          english: "He didn't understand the secret of your power form. When power left, he repented."
        },
        {
          hindi: "शरणागत हुई कीर्ति बखानी। जय जय जय जगदम्ब भवानी॥",
          english: "Taking refuge, I sing your glory. Victory, victory, victory to Jagdamba Bhavani."
        },
        {
          hindi: "भई प्रसन्न आदि जगदम्बा। दई शक्ति नहिं कीन विलम्बा॥",
          english: "The first Jagdamba became pleased. She gave power without delay."
        },
        {
          hindi: "मोको मातु कष्ट अति घेरो। तुम बिन कौन हरै दुःख मेरो॥",
          english: "O Mother, I am surrounded by great troubles. Who can remove my sorrows except you?"
        },
        {
          hindi: "आशा तृष्णा निपट सतावें। मोह मदादिक सब बिनशावे॥",
          english: "Hope and desire torment me. Destroy attachment, ego, and all."
        },
        {
          hindi: "शत्रु नाश कीजै महारानी। सुमिरौं इकचित तुम्हें भवानी॥",
          english: "Destroy enemies, O great queen. I remember you, O Bhavani."
        },
        {
          hindi: "करो कृपा हे मातु दयाला। ऋद्धि-सिद्धि दै करहु निहाला॥",
          english: "Have mercy, O compassionate Mother. Grant me wealth and accomplishments."
        },
        {
          hindi: "जब लगि जियऊं दया फल पाऊं। तुम्हरो यश मैं सदा सुनाऊं॥",
          english: "As long as I live, I will receive the fruit of your mercy. I will always sing your glory."
        },
        {
          hindi: "श्री दुर्गा चालीसा जो कोई गावै। सब सुख भोग परमपद पावै॥",
          english: "Whoever sings Shri Durga Chalisa. Gets all happiness and attains the supreme state."
        },
        {
          hindi: "देवीदास शरण निज जानी। करहु कृपा जगदम्ब भवानी॥",
          english: "Devidas takes refuge knowing you. Have mercy, O Jagdamba Bhavani."
        }
      ]
    },
    significance: {
      title: "Spiritual Significance of Durga Chalisa",
      content: [
        "Durga Chalisa is a powerful devotional hymn dedicated to Goddess Durga, the supreme feminine power in Hinduism.",
        "The Chalisa consists of 40 verses (chaupais) that praise the various forms, powers, and deeds of Goddess Durga.",
        "Regular recitation of Durga Chalisa is believed to bring divine protection, remove obstacles, and fulfill sincere wishes.",
        "It is especially powerful during Navratri celebrations and other auspicious occasions dedicated to the Goddess."
      ]
    },
    benefits: {
      title: "Benefits of Reciting Durga Chalisa",
      content: [
        "Provides protection from negative energies and evil forces",
        "Helps overcome fear, anxiety, and mental stress",
        "Brings peace, prosperity, and happiness to the family",
        "Removes obstacles in personal and professional life",
        "Strengthens spiritual connection and devotion",
        "Fulfills sincere wishes and desires",
        "Provides courage and strength to face life's challenges",
        "Purifies the mind and soul"
      ]
    },
    practice: {
      title: "How to Practice Durga Chalisa",
      content: [
        "Best time to recite: Early morning (Brahma Muhurta) or evening during sunset",
        "Face the north or east direction while reciting",
        "Light a diya (lamp) and offer flowers to the Goddess",
        "Maintain cleanliness and wear clean clothes",
        "Recite with devotion, faith, and concentration",
        "Can be recited daily or especially on Tuesdays and Fridays",
        "Complete the recitation by offering prasad and seeking blessings"
      ]
    }
  };

  const breadcrumbs = generateBreadcrumbs('bhajans', chalisaData.title);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-red-600">
              भक्ति
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/chalisas" className="text-gray-700 hover:text-red-600 transition-colors">
                चालीसा
              </Link>
              <Link href="/aartis" className="text-gray-700 hover:text-red-600 transition-colors">
                आरती
              </Link>
              <Link href="/bhajans" className="text-gray-700 hover:text-red-600 transition-colors">
                भजन
              </Link>
              <Link href="/festivals" className="text-gray-700 hover:text-red-600 transition-colors">
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
                    <Link href={crumb.href || "/"} className="text-red-600 hover:text-red-700">
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
      <div className="relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-500 text-white">
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
                {chalisaData.verses} वर्स
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
            पूर्ण दुर्गा चालीसा (Complete Durga Chalisa in Hindi)
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <div className="space-y-3 text-right">
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
            दुर्गा चालीसा - Durga Chalisa Lyrics
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
                  <span className="text-red-500 mr-2 mt-1">✓</span>
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
                  <span className="text-red-500 mr-2 mt-1">•</span>
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

export default DurgaChalisaPage;
