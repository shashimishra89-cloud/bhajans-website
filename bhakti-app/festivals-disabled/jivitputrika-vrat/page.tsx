"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles, Calendar, Heart } from "lucide-react";
import { BannerAd } from "@/components/AdSense";

export default function JivitputrikaVratPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-orange-600" />
              <h1 className="text-2xl font-bold text-orange-900">Bhajans</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/festivals" className="text-orange-800 hover:text-orange-600 font-medium">Festivals</Link>
              <Link href="/gods" className="text-orange-800 hover:text-orange-600 font-medium">Gods</Link>
              <Link href="/search" className="text-orange-800 hover:text-orange-600 font-medium">Search</Link>
              <Link href="/about" className="text-orange-800 hover:text-orange-600 font-medium">About</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <Link href="/festivals" className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-6 font-medium">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Festivals
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Jivitputrika Vrat Katha</h1>
            <p className="text-2xl md:text-3xl font-semibold opacity-95">जीवित्पुत्रिका व्रत कथा</p>
            <div className="flex items-center justify-center mt-6 space-x-6 text-orange-100">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Festival</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                <span>Sacred Vrat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Festival Image */}
        <div className="text-center mb-12">
          <div className="w-full max-w-4xl mx-auto h-96 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl shadow-2xl border-4 border-orange-200 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-8xl mb-4">🙏</div>
              <h3 className="text-3xl font-bold mb-2">जीवित्पुत्रिका व्रत</h3>
              <p className="text-xl opacity-90">Sacred Fast for Children's Wellbeing</p>
            </div>
          </div>
        </div>

        {/* Banner Ad */}
        <BannerAd adSlot="1234567890" />

        {/* Vrat Katha Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-900 mb-4">व्रत कथा (Vrat Katha)</h2>
            <p className="text-lg text-orange-700 max-w-3xl mx-auto">
              The sacred stories and legends associated with Jivitputrika Vrat, a powerful fast observed by mothers for the long life and prosperity of their children.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-r from-orange-300 to-yellow-400 border-b-4 border-orange-200 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">👩‍👦</div>
                  <p className="text-lg font-semibold">माता की महिमा</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-900 mb-4 border-b-2 border-orange-100 pb-2">
                  पहली कथा - माता की महिमा
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-800 text-sm uppercase tracking-wide mb-2">हिंदी में:</h4>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 text-gray-800 leading-relaxed">
                      प्राचीन काल में एक धर्मपरायण स्त्री थी जो अपने पुत्र की लंबी आयु के लिए जीवित्पुत्रिका व्रत करती थी। उसकी अटूट श्रद्धा और भक्ति से प्रभावित होकर माता ने उसके पुत्र को दीर्घायु का वरदान दिया। इस व्रत की महिमा से उसका पुत्र सभी संकटों से मुक्त हो गया और उसका जीवन खुशियों से भर गया। यह व्रत माताओं के लिए अत्यंत फलदायी है।
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-800 text-sm uppercase tracking-wide mb-2">Hinglish में:</h4>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 text-gray-800 leading-relaxed italic">
                      Prachin kaal mein ek dharmaparayan stri thi jo apne putra ki lambi aayu ke liye Jivitputrika vrat karti thi. Uski atoot shraddha aur bhakti se prabhavit hokar mata ne uske putra ko dirghaayu ka vardan diya. Is vrat ki mahima se uska putra sabhi sankaton se mukt ho gaya aur uska jeevan khushiyon se bhar gaya. Yeh vrat mataon ke liye atyant phaldayee hai.
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-800 text-sm uppercase tracking-wide mb-2">English Translation:</h4>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 text-gray-800 leading-relaxed">
                      In ancient times, there was a devout woman who observed the Jivitputrika fast for her son's long life. Impressed by her unwavering faith and devotion, the Divine Mother blessed her son with longevity. Through the glory of this fast, her son was freed from all troubles and his life was filled with happiness. This fast is extremely beneficial for mothers.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-r from-purple-400 to-pink-500 border-b-4 border-orange-200 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">👭</div>
                  <p className="text-lg font-semibold">सात बहनों की कथा</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-900 mb-4 border-b-2 border-orange-100 pb-2">
                  दूसरी कथा - सात माताओं की कहानी
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-800 text-sm uppercase tracking-wide mb-2">हिंदी में:</h4>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 text-gray-800 leading-relaxed">
                      एक गांव में सात बहनें रहती थीं जो हर साल जीवित्पुत्रिका व्रत करती थीं। एक बार उनमें से एक बहन ने व्रत नहीं किया और उसका पुत्र बीमार पड़ गया। अन्य बहनों ने उसे व्रत का महत्व समझाया और सभी मिलकर व्रत किया। माता की कृपा से उसका पुत्र स्वस्थ हो गया। तब से वे सभी नियमित रूप से यह व्रत करने लगीं।
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-800 text-sm uppercase tracking-wide mb-2">Hinglish में:</h4>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 text-gray-800 leading-relaxed italic">
                      Ek gaon mein saat bahenein rehti thi jo har saal Jivitputrika vrat karti thi. Ek baar unme se ek bahen ne vrat nahi kiya aur uska putra bimar pad gaya. Anya bahenon ne use vrat ka mahatva samjhaya aur sabhi milkar vrat kiya. Mata ki kripa se uska putra swasth ho gaya. Tab se ve sabhi niyamit roop se yeh vrat karne lagi.
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-800 text-sm uppercase tracking-wide mb-2">English Translation:</h4>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 text-gray-800 leading-relaxed">
                      In a village, seven sisters lived who observed the Jivitputrika fast every year. Once, one of the sisters did not observe the fast and her son fell ill. The other sisters explained the importance of the fast to her and they all observed it together. By the Mother's grace, her son recovered. Since then, they all began observing this fast regularly.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <img 
                src="/story3-image.jpg" 
                alt="Image for the third story" 
                className="w-full h-48 object-cover border-b-4 border-orange-200"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-900 mb-4 border-b-2 border-orange-100 pb-2">
                  तीसरी कथा - राजा की रानी
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-800 text-sm uppercase tracking-wide mb-2">हिंदी में:</h4>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 text-gray-800 leading-relaxed">
                      एक राजा की रानी निःसंतान थी। एक संत ने उसे जीवित्पुत्रिका व्रत करने की सलाह दी। रानी ने पूरी श्रद्धा से व्रत किया और माता से पुत्र की कामना की। माता ने उसकी प्रार्थना सुनी और उसे एक सुंदर पुत्र का वरदान दिया। राजकुमार का जन्म हुआ और राज्य में खुशियां मनाई गईं। रानी आजीवन इस व्रत को करती रही।
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-800 text-sm uppercase tracking-wide mb-2">Hinglish में:</h4>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 text-gray-800 leading-relaxed italic">
                      Ek raja ki rani nihsantan thi. Ek sant ne use Jivitputrika vrat karne ki salah di. Rani ne puri shraddha se vrat kiya aur mata se putra ki kamana ki. Mata ne uski prarthana suni aur use ek sundar putra ka vardan diya. Rajkumar ka janma hua aur rajya mein khushiyan manai gayi. Rani aajeevan is vrat ko karti rahi.
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-800 text-sm uppercase tracking-wide mb-2">English Translation:</h4>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 text-gray-800 leading-relaxed">
                      A king's queen was childless. A sage advised her to observe the Jivitputrika fast. The queen observed the fast with complete devotion and prayed to the Mother for a son. The Mother heard her prayer and blessed her with a beautiful son. The prince was born and celebrations were held throughout the kingdom. The queen continued to observe this fast throughout her life.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 4 */}
            <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <img 
                src="/story4-image.jpg" 
                alt="Image for the fourth story" 
                className="w-full h-48 object-cover border-b-4 border-orange-200"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-900 mb-4 border-b-2 border-orange-100 pb-2">
                  चौथी कथा - गरीब विधवा की कहानी
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-800 text-sm uppercase tracking-wide mb-2">हिंदी में:</h4>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 text-gray-800 leading-relaxed">
                      एक गरीब विधवा का एकमात्र पुत्र था जो उसके जीवन का सहारा था। एक दिन उसका पुत्र गंभीर रूप से बीमार पड़ गया। पड़ोसी महिलाओं ने उसे जीवित्पुत्रिका व्रत करने की सलाह दी। उसने बिना कुछ खाए-पिए पूरे दिन व्रत रखा और रात भर जागकर माता से प्रार्थना की। सुबह तक उसका पुत्र पूरी तरह स्वस्थ हो गया।
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-800 text-sm uppercase tracking-wide mb-2">Hinglish में:</h4>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 text-gray-800 leading-relaxed italic">
                      Ek gareeb vidhwa ka ekmatra putra tha jo uske jeevan ka sahara tha. Ek din uska putra gambhir roop se bimar pad gaya. Padosi mahilaon ne use Jivitputrika vrat karne ki salah di. Usne bina kuch khaye-piye pure din vrat rakha aur raat bhar jagkar mata se prarthana ki. Subah tak uska putra puri tarah swasth ho gaya.
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-800 text-sm uppercase tracking-wide mb-2">English Translation:</h4>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 text-gray-800 leading-relaxed">
                      A poor widow had an only son who was the support of her life. One day her son fell seriously ill. Neighboring women advised her to observe the Jivitputrika fast. She fasted the entire day without eating or drinking anything and stayed awake all night praying to the Mother. By morning, her son was completely healthy.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 5 */}
            <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <img 
                src="/story5-image.jpg" 
                alt="Image for the fifth story" 
                className="w-full h-48 object-cover border-b-4 border-orange-200"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-900 mb-4 border-b-2 border-orange-100 pb-2">
                  पांचवीं कथा - व्रत की शक्ति
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-800 text-sm uppercase tracking-wide mb-2">हिंदी में:</h4>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 text-gray-800 leading-relaxed">
                      एक नगर में महामारी फैली और कई बच्चे बीमार पड़ गए। नगर की सभी माताओं ने एक साथ मिलकर जीवित्पुत्रिका व्रत किया। उन्होंने पूरी रात जागकर माता की आराधना की और अपने बच्चों की सुरक्षा की प्रार्थना की। माता की अपार कृपा से महामारी समाप्त हो गई और सभी बच्चे स्वस्थ हो गए। तब से यह व्रत उस नगर में बहुत प्रसिद्ध हो गया।
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-800 text-sm uppercase tracking-wide mb-2">Hinglish में:</h4>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 text-gray-800 leading-relaxed italic">
                      Ek nagar mein mahamari faili aur kai bachche bimar pad gaye. Nagar ki sabhi mataon ne ek saath milkar Jivitputrika vrat kiya. Unhone puri raat jagkar mata ki aradhana ki aur apne bachchon ki suraksha ki prarthana ki. Mata ki apar kripa se mahamari samapt ho gayi aur sabhi bachche swasth ho gaye. Tab se yeh vrat us nagar mein bahut prasiddh ho gaya.
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-800 text-sm uppercase tracking-wide mb-2">English Translation:</h4>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 text-gray-800 leading-relaxed">
                      An epidemic spread in a city and many children fell ill. All the mothers of the city together observed the Jivitputrika fast. They stayed awake all night worshipping the Mother and praying for their children's safety. By the Mother's infinite grace, the epidemic ended and all children became healthy. Since then, this fast became very famous in that city.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 6 */}
            <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <img 
                src="/story6-image.jpg" 
                alt="Image for the sixth story" 
                className="w-full h-48 object-cover border-b-4 border-orange-200"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-900 mb-4 border-b-2 border-orange-100 pb-2">
                  छठी कथा - माता का आशीर्वाद
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-800 text-sm uppercase tracking-wide mb-2">हिंदी में:</h4>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 text-gray-800 leading-relaxed">
                      एक धनी सेठ की पत्नी अपने पुत्र के भविष्य को लेकर चिंतित रहती थी। उसने सुना कि जीवित्पुत्रिका व्रत से संतान की रक्षा होती है। उसने नियमित रूप से यह व्रत करना शुरू किया। कुछ वर्षों बाद उसका पुत्र एक महान विद्वान और धर्मात्मा बना। लोग कहते थे कि यह माता के आशीर्वाद का फल है। सेठानी ने अपने जीवन भर यह व्रत जारी रखा।
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-800 text-sm uppercase tracking-wide mb-2">Hinglish में:</h4>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 text-gray-800 leading-relaxed italic">
                      Ek dhani seth ki patni apne putra ke bhavishya ko lekar chintit rehti thi. Usne suna ki Jivitputrika vrat se santan ki raksha hoti hai. Usne niyamit roop se yeh vrat karna shuru kiya. Kuch varshon baad uska putra ek mahan vidwan aur dharmatma bana. Log kehte the ki yeh mata ke aashirwad ka phal hai. Sethani ne apne jeevan bhar yeh vrat jaari rakha.
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-800 text-sm uppercase tracking-wide mb-2">English Translation:</h4>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 text-gray-800 leading-relaxed">
                      A wealthy merchant's wife was always worried about her son's future. She heard that the Jivitputrika fast protects children. She began observing this fast regularly. After some years, her son became a great scholar and righteous person. People said this was the result of the Mother's blessings. The merchant's wife continued this fast throughout her life.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Festivals */}
        <section className="mt-16 mb-12">
          <h3 className="text-3xl font-bold text-orange-900 mb-8 text-center">Related Festivals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/festivals/karva-chauth" className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-100">
              <div className="text-4xl mb-3 text-center">🌙</div>
              <h4 className="text-xl font-bold text-orange-900 mb-2 text-center">Karva Chauth</h4>
              <p className="text-orange-700 text-center">Fast for husband's long life</p>
            </Link>
            <Link href="/festivals/teej" className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-100">
              <div className="text-4xl mb-3 text-center">🌿</div>
              <h4 className="text-xl font-bold text-orange-900 mb-2 text-center">Teej</h4>
              <p className="text-orange-700 text-center">Festival of married women</p>
            </Link>
            <Link href="/festivals/vat-savitri" className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-orange-100">
              <div className="text-4xl mb-3 text-center">🌳</div>
              <h4 className="text-xl font-bold text-orange-900 mb-2 text-center">Vat Savitri</h4>
              <p className="text-orange-700 text-center">Banyan tree worship</p>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-12 px-4 sm:px-6 lg:px-8">
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
