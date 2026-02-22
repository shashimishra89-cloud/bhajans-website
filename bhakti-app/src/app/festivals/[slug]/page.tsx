import Link from "next/link";
import { Calendar, Clock, Sparkles, Music, BookOpen, Flame, ArrowLeft, Users } from 'lucide-react';
import { InContentAd } from "@/components/AdSense";

// Mock data - in production this would come from Cloudflare D1
const festivalData: { [key: string]: any } = {
  diwali: {
    id: "diwali",
    name: "Diwali",
    title: "Festival of Lights (Jai Shree Ram)",
    description: "Diwali, also known as Deepavali, is the most celebrated Hindu festival symbolizing the victory of light over darkness, good over evil, and knowledge over ignorance. The festival spans five days, with each day having its own significance and rituals.",
    duration: "5 days",
    icon: "🪔",
    significance: "Celebrates the return of Lord Rama to Ayodhya after 14 years of exile and his victory over the demon king Ravana.",
    rituals: [
      "Cleaning and decorating homes",
      "Lighting diyas (oil lamps) and candles",
      "Creating rangoli patterns",
      "Worshipping Goddess Lakshmi",
      "Exchanging gifts and sweets",
      "Bursting fireworks"
    ],
    shloka: {
      title: "Mahalakshmi Stotram",
      sanskrit: "नमस्तेस्तु महामाये श्रीपीठे सुरपूजिते। शंखचक्र गदाहस्ते महालक्ष्मी नमोस्तुते॥",
      english: "I bow to Mahamaya, who is worshiped at Sripeetha by the gods, who holds the conch, discus, and mace in her hands. I bow to Mahalakshmi.",
      meaning: "This powerful shloka invokes Goddess Lakshmi, acknowledging her as the supreme divine mother who is worshipped by all gods and holds the divine weapons symbolizing protection and prosperity."
    },
    stories: [
      {
        title: "Lord Rama's Return",
        content: "The most well-known story of Diwali is the return of Lord Rama, his wife Sita, and his brother Lakshmana to Ayodhya after 14 years of exile. Lord Rama had defeated the demon king Ravana, and the people of Ayodhya lit countless oil lamps (diyas) to illuminate their path and celebrate the triumph of good over evil. This tradition of lighting lamps continues to this day, symbolizing the victory of light over darkness."
      },
      {
        title: "Goddess Lakshmi's Choice",
        content: "Another significant story is about the goddess of wealth and prosperity, Lakshmi. During the churning of the cosmic ocean (Samudra Manthan), Goddess Lakshmi emerged from the ocean. It is said that on this auspicious day of Diwali, she chose Lord Vishnu as her husband from among all the gods, making this day especially sacred for seeking her blessings for prosperity and abundance."
      }
    ],
    bhajan: {
      title: "Aarti Shree Lakshmi Ji",
      hindi: "आरती श्री लक्ष्मी जी की\nकमल वासिनी माता\nविष्णु प्रिया श्री लक्ष्मी\nजगत की माता\n\nतेरे द्वार आए हैं\nभक्त तेरे माता\nकष्ट हरो सुख दो\nसबका भला करो माता\n\nधन धान्य की देवी\nसबकी तुम माता\nकरुणा करो दया करो\nभक्तों पर माता",
      english: "Aarti of Shree Lakshmi Ji\nO Mother who resides on lotus\nBeloved of Vishnu, Shree Lakshmi\nMother of the world\n\nYour devotees have come\nTo your door, O Mother\nRemove sorrows, give happiness\nDo good for everyone, Mother\n\nGoddess of wealth and grains\nYou are everyone's mother\nShow compassion, show mercy\nOn your devotees, Mother",
      meaning: "This devotional bhajan is sung to honor Goddess Lakshmi, describing her divine attributes as the lotus-dwelling goddess and beloved consort of Lord Vishnu, seeking her blessings for prosperity and well-being."
    },
    aarti: {
      title: "Om Jai Lakshmi Mata",
      hindi: "ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता\nतुमको निशदिन ध्यावत, हर विष्णु विधाता\nॐ जय लक्ष्मी माता\n\nउमा रमा ब्रह्माणी, तुम शिव शक्ति भवानी\nतीनों लोक में व्याप्त, तेरी महिमा भवानी\nॐ जय लक्ष्मी माता\n\nमहालक्ष्मी जी आरती, कीजै जो कोई नर नारी\nउर आनंद अति होवै, पाप उतरे तन भारी\nॐ जय लक्ष्मी माता",
      english: "Om Jai Lakshmi Mata, Mother Jai Lakshmi Mata\nDay and night we meditate on you, Hari Vishnu the creator\nOm Jai Lakshmi Mata\n\nUma, Rama, Brahmani, you are Shiva's power Bhavani\nSpread across all three worlds, your glory O Bhavani\nOm Jai Lakshmi Mata\n\nWhoever performs Mahalakshmi's aarti, man or woman\nExperiences great joy in heart, heavy sins are removed from body\nOm Jai Lakshmi Mata",
      meaning: "This is the complete traditional aarti of Goddess Lakshmi, acknowledging her various forms and her omnipresence across all three worlds, seeking her blessings for spiritual joy and purification from sins."
    }
  },
  holi: {
    id: "holi",
    name: "Holi",
    title: "Festival of Colors",
    description: "Holi is a vibrant spring festival celebrating love, joy, and the triumph of good over evil. Known as the Festival of Colors, it marks the arrival of spring and the end of winter.",
    duration: "2 days",
    icon: "🎨",
    significance: "Celebrates the divine love of Radha and Krishna, and commemorates the victory of devotee Prahlad over the demoness Holika.",
    rituals: [
      "Holika Dahan (bonfire ceremony)",
      "Playing with colors (gulal)",
      "Singing and dancing",
      "Sharing festive foods",
      "Visiting friends and family",
      "Forgiveness and new beginnings"
    ],
    shloka: {
      title: "Krishna Holi Shloka",
      sanskrit: "रंगभूमि में राधे श्याम खेलें होली। गोपी गोपाल मिलकर मनावें होली॥",
      english: "In the colorful ground, Radha and Shyam play Holi. Gopis and Gopal together celebrate Holi.",
      meaning: "This shloka captures the divine play of Lord Krishna and Radha during Holi, symbolizing the eternal love and joy that transcends all boundaries."
    },
    stories: [
      {
        title: "Prahlad and Holika",
        content: "The story of Holi begins with the demon king Hiranyakashipu, who wanted everyone to worship only him. However, his son Prahlad was a devoted follower of Lord Vishnu. Enraged, Hiranyakashipu asked his sister Holika, who had a boon to remain unburnt by fire, to sit in a pyre with Prahlad on her lap. However, because of Prahlad's devotion and Holika's evil intentions, she was burned while Prahlad remained safe. This victory of good over evil is celebrated as Holika Dahan."
      },
      {
        title: "Krishna and the Colors",
        content: "Another beloved story is of young Krishna, who was self-conscious about his dark complexion compared to fair Radha. His mother Yashoda playfully suggested he could color Radha's face any color he wanted. Krishna took this advice and started the tradition of playing with colors during Holi. This playful act became a symbol of love transcending physical appearances and celebrating the divine connection between souls."
      }
    ],
    bhajan: {
      title: "Holi Khele Raghuveera",
      hindi: "होली खेले रघुवीरा अवध में\nहोली खेले रघुवीरा\nउड़त गुलाल लाल भयो अंबर\nखुशियों से भरा है यह समां\n\nब्रज में होली खेले कन्हैया\nराधे संग रंग में डूबे\nगोपियों के संग नाचे गाए\nप्रेम रस में सब को भिगोए\n\nहोली है भाई होली है\nरंगों का त्योहार होली है\nखुशियों का संचार होली है\nप्यार का उपहार होली है",
      english: "Raghuvira plays Holi in Ayodhya\nRaghuvira plays Holi\nFlying colors have made the sky red\nThis atmosphere is filled with joy\n\nKanhaiya plays Holi in Brij\nDrowned in colors with Radha\nDances and sings with the gopis\nDrenches everyone in love's essence\n\nIt's Holi brother, it's Holi\nHoli is the festival of colors\nHoli is the flow of happiness\nHoli is the gift of love",
      meaning: "This complete bhajan celebrates both Lord Rama and Krishna playing Holi, representing the joy, love, and divine play that characterizes this beautiful festival of colors."
    },
    aarti: {
      title: "Holi Aarti",
      hindi: "होली आई रे, होली आई\nरंग बरसे नीले गगन से\nधरती हर्षाई\n\nकृष्ण कन्हैया ब्रज में आए\nराधे संग रंग खेलाई\nगोपियों के मन को भाए\nहोली आई रे, होली आई\n\nगुलाल उड़ाए, पिचकारी चलाए\nसबको रंग में रंग जाए\nप्रेम की धारा बहाए\nहोली आई रे, होली आई",
      english: "Holi has come, Holi has come\nColors rain from the blue sky\nThe earth rejoices\n\nKrishna Kanhaiya came to Brij\nPlayed colors with Radha\nDelighted the hearts of gopis\nHoli has come, Holi has come\n\nThrows gulal, shoots water guns\nColors everyone in hues\nFlows the stream of love\nHoli has come, Holi has come",
      meaning: "This aarti celebrates the arrival of Holi with great joy, describing how Lord Krishna's divine play with colors brings happiness and love to all beings."
    }
  },
  navratri: {
    id: "navratri",
    name: "Navratri",
    title: "Nine Nights of the Goddess",
    description: "Navratri is a nine-day festival dedicated to the worship of Goddess Durga and her nine divine forms (Navadurga). It celebrates the divine feminine power and the victory of good over evil.",
    duration: "9 nights, 10 days",
    icon: "🌙",
    significance: "Honors the nine forms of Goddess Durga and celebrates her victory over the buffalo demon Mahishasura.",
    rituals: [
      "Daily worship of different forms of Durga",
      "Fasting and prayer",
      "Garba and Dandiya dance",
      "Decorating homes and temples",
      "Reading Durga Saptashati",
      "Kanya Pujan on the final day"
    ],
    shloka: {
      title: "Shailaputri Devi Mantra",
      sanskrit: "वन्दे वाञ्छितलाभाय चन्द्रार्धकृतशेखराम्। वृषारूढां शूलधरां शैलपुत्रीं यशस्विनीम्॥",
      english: "I bow to the illustrious Goddess Shailaputri who fulfills all desires, wears a crescent moon on her head, is mounted on a bull, and holds a trident.",
      meaning: "This shloka honors Goddess Shailaputri, the first form of Durga worshipped on the first day of Navratri, seeking her blessings for the fulfillment of righteous desires."
    },
    stories: [
      {
        title: "Mahishasura and Durga",
        content: "The central story of Navratri is the battle between Goddess Durga and the powerful demon Mahishasura. He had been granted a boon that he could not be killed by any man or god. Drunk with power, he terrorized the heavens and earth. To defeat him, the gods combined their divine powers to create Goddess Durga, who was equipped with weapons from all the gods. She fought Mahishasura for nine days and nights, and on the tenth day (Vijayadashami), she finally killed him, symbolizing the victory of good over evil."
      },
      {
        title: "The Nine Forms of Durga",
        content: "During Navratri, nine different forms of Goddess Durga are worshipped: Shailaputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, and Siddhidatri. Each form represents different aspects of divine feminine power and is worshipped on specific days with particular rituals, colors, and offerings, symbolizing the complete spectrum of divine energy."
      }
    ],
    bhajan: {
      title: "Hey Ma Durge",
      hindi: "हे मां दुर्गे सुख करनी\nतेरे बिना कौन सहारा\nजग जननी जग की तारा\n\nशेरों वाली माता\nभक्तों की रक्षा करने वाली\nदेवी शक्ति का रूप\nसबको शक्ति देने वाली\n\nमहिषासुर का संहार करने वाली\nधर्म की रक्षा करने वाली\nमां तेरी महिमा अपार\nतू ही जगत की आधार",
      english: "O Mother Durga, giver of happiness\nWho is our support without you\nMother of the world, star of the world\n\nMother who rides the lion\nProtector of devotees\nForm of divine power\nGiver of strength to all\n\nDestroyer of Mahishasura\nProtector of righteousness\nMother, your glory is infinite\nYou are the foundation of the world",
      meaning: "This devotional bhajan honors Goddess Durga as the supreme divine mother, acknowledging her role as protector, strength-giver, and the foundation of cosmic order."
    },
    aarti: {
      title: "Jai Ambe Gauri",
      hindi: "जय अम्बे गौरी, मैया जय श्यामा गौरी\nतुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी\nजय अम्बे गौरी\n\nमांग सिंदूर विराजत, टीको मृगमद को\nउज्ज्वल से दो नैना, चंद्रवदन नीको\nजय अम्बे गौरी\n\nकनक समान कलेवर, रक्ताम्बर राजै\nरक्त पुष्प गल माला, कंठन पर साजै\nजय अम्बे गौरी\n\nकेहरि वाहन राजत, खड्ग खप्पर धारी\nसुर-नर-मुनि जन सेवत, तिनके दुखहारी\nजय अम्बे गौरी",
      english: "Jai Ambe Gauri, Mother Jai Shyama Gauri\nDay and night meditate on you, Hari Brahma and Shiva\nJai Ambe Gauri\n\nVermillion adorns your forehead, tilak of musk\nTwo bright eyes, beautiful moon-like face\nJai Ambe Gauri\n\nGolden-like complexion, wearing red clothes\nGarland of red flowers, adorning the neck\nJai Ambe Gauri\n\nLion as vehicle shines, holding sword and skull\nGods, humans, and sages serve, you remove their sorrows\nJai Ambe Gauri",
      meaning: "This is the complete traditional aarti of Goddess Durga, describing her divine beauty, attributes, and her role as the remover of sorrows for all devotees."
    }
  },
  "ganesh-chaturthi": {
    id: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    title: "Festival of Lord Ganesha",
    description: "Ganesh Chaturthi is a vibrant Hindu festival celebrating the birth of Lord Ganesha, the elephant-headed deity known as the remover of obstacles and the patron of arts and sciences.",
    duration: "11 days",
    icon: "🐘",
    significance: "Celebrates the birth of Lord Ganesha and seeks his blessings for new beginnings, wisdom, and the removal of obstacles.",
    rituals: [
      "Installing Ganesha idols",
      "Daily prayers and offerings",
      "Modak preparation and offering",
      "Community celebrations",
      "Cultural programs and processions",
      "Visarjan (immersion ceremony)"
    ],
    shloka: {
      title: "Vakratunda Mahakaya",
      sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
      english: "O, Lord with a curved trunk and mighty body, whose splendor is equal to a million suns, please make all my endeavors free of obstacles, always.",
      meaning: "This powerful shloka is the most popular invocation to Lord Ganesha, recited before beginning any important work to seek his blessings for removing all obstacles and ensuring success."
    },
    stories: [
      {
        title: "The Story of the Moon",
        content: "According to one legend, on the day of Ganesh Chaturthi, Lord Ganesha was returning home after a feast. As he was walking, he tripped and fell, causing his stomach to burst open and all the modaks to spill out. The moon, who was watching, laughed at him. Angered by the moon's arrogance, Ganesha cursed the moon, saying that anyone who saw the moon on this day would be subject to false accusations. The curse was later softened, stating that one could look at the moon a second time to negate the effects."
      },
      {
        title: "The Birth of Ganesha",
        content: "Goddess Parvati created Ganesha from the turmeric paste she used for her bath and breathed life into him. She asked him to guard the entrance while she bathed. When Lord Shiva returned and was stopped by Ganesha, who didn't recognize him, Shiva in anger cut off the boy's head. Seeing Parvati's grief, Shiva promised to replace the head with that of the first living being he found, which was an elephant. Thus, Ganesha got his elephant head and was blessed to be worshipped first before any other deity."
      }
    ],
    bhajan: {
      title: "Sukh Karta Dukh Harta Varta Vighnachi",
      hindi: "सुख कर्ता दुःख हर्ता वार्ता विघ्नाची\nनुरवी पुरवी प्रेम कृपा जयाची\nसर्वांगी सुंदर उती शेंदुराची\nकंठी झळके माल मुक्ताफळांची\n\nजय देव जय देव जय मंगलमूर्ति\nदर्शनमात्रे मन कामना पुरती\n\nरत्नखचित फरा तुज गौरीकुमरा\nचंदनाची उटी कुंकुमकेशरा\nहिरे जडित मुकुट शोभतो बरा\nरुणझुणती नूपुरे चरणी घागरा\n\nजय देव जय देव जय मंगलमूर्ति\nदर्शनमात्रे मन कामना पुरती",
      english: "Giver of happiness, remover of sorrows, destroyer of obstacles\nFulfill our desires with your love and grace\nBeautiful in every way, with the glow of vermillion\nNecklace of pearls shining around your neck\n\nVictory to the Lord, victory to the auspicious form\nJust your sight fulfills all desires of the mind\n\nGem-studded crown adorns you, O son of Gauri\nSandal paste and saffron adorn your body\nDiamond-studded crown looks beautiful\nTinkling anklets on your feet make sweet sounds\n\nVictory to the Lord, victory to the auspicious form\nJust your sight fulfills all desires of the mind",
      meaning: "This is also the popular Marathi Ganesha Aarti, sung as a bhajan. It praises Lord Ganesha as the one who brings joy and happiness and is the remover of sorrow and obstacles. It is a beautiful invocation to seek his blessings."
    },
    aarti: {
      title: "Jai Ganesh Jai Ganesh Deva",
      hindi: "जय गणेश जय गणेश देवा\nमाता जाकी पार्वती पिता महादेवा\nएकदंत दयावंत चार भुजाधारी\nमस्तक सिंदूर सोहे मूसे की सवारी\n\nअंधे को आंख देत कोढ़ी को काया\nबांझ को पुत्र देत निर्धन को माया\nसूर श्याम शरण आए सफल कीजे सेवा\nमाता जाकी पार्वती पिता महादेवा\n\nदीनन की लाज राखो शंभु सुतकारी\nकामना करो पूरी आस तुम्हारी\nराम श्याम मेरे घट में बसो निरंतर\nमाता जाकी पार्वती पिता महादेवा\n\nजय गणेश जय गणेश जय गणेश देवा\nमाता जाकी पार्वती पिता महादेवा",
      english: "Victory to Ganesha, victory to Lord Ganesha\nWhose mother is Parvati and father is Mahadeva\nOne-tusked, compassionate, bearer of four arms\nVermillion adorns his forehead, riding on a mouse\n\nYou give eyes to the blind, body to the leper\nYou give children to the childless, wealth to the poor\nSur Shyam has come to your shelter, make his service successful\nWhose mother is Parvati and father is Mahadeva\n\nProtect the honor of the humble, O son of Shambhu\nFulfill desires, you are our hope\nRam Shyam, reside in my heart continuously\nWhose mother is Parvati and father is Mahadeva\n\nVictory to Ganesha, victory to Ganesha, victory to Lord Ganesha\nWhose mother is Parvati and father is Mahadeva",
      meaning: "This is a traditional Hindu aarti that praises Lord Ganesha and his divine parents, Lord Shiva and Goddess Parvati. It is a song of devotion and a plea for blessings, with lyrics that glorify his form and his role as the remover of all obstacles."
    }
  },
  "krishna-janmashtami": {
    id: "krishna-janmashtami",
    name: "Krishna Janmashtami",
    title: "Birth of Lord Krishna",
    description: "Krishna Janmashtami celebrates the birth of Lord Krishna, the eighth avatar of Lord Vishnu. This joyous festival commemorates the divine incarnation who taught the world about dharma, love, and devotion through his life and teachings.",
    duration: "2 days",
    icon: "🦚",
    significance: "Celebrates the birth of Lord Krishna, who came to earth to establish dharma and guide humanity towards righteousness and spiritual awakening.",
    rituals: [
      "Midnight prayers and celebrations",
      "Fasting until midnight",
      "Decorating Krishna temples",
      "Dahi Handi (pot breaking ceremony)",
      "Singing bhajans and kirtans",
      "Preparing Krishna's favorite foods"
    ],
    shloka: {
      title: "Bhagavad Gita Chapter 4, Verse 8",
      sanskrit: "परित्राणाय साधूनां विनाशाय च दुष्कृताम्। धर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥",
      english: "To protect the righteous, to annihilate the wicked, and to re-establish the principles of dharma, I appear on this earth, millennium after millennium.",
      meaning: "This verse from the Bhagavad Gita explains Lord Krishna's divine purpose for incarnating on earth - to protect the good, destroy evil, and restore righteousness in every age."
    },
    stories: [
      {
        title: "The Birth of Krishna",
        content: "Lord Krishna was born in a prison cell in Mathura to Devaki and Vasudeva. His cruel uncle, King Kansa, had imprisoned them after a prophecy foretold that Devaki's eighth son would be his killer. Miraculously, on the night of his birth, the prison doors opened and the guards fell asleep. Vasudeva carried the baby across the Yamuna River to Gokul, where he was exchanged for a baby girl and raised by his foster parents, Yashoda and Nanda."
      },
      {
        title: "Krishna's Childhood Leelas",
        content: "Krishna's childhood was filled with divine play (leelas) that demonstrated his divinity while appearing as innocent mischief. He would steal butter from the homes of gopis, play pranks on the villagers, and perform miraculous feats like lifting the Govardhan mountain to protect the people from Indra's wrath. These stories teach us about divine love, protection, and the playful nature of the supreme consciousness."
      }
    ],
    bhajan: {
      title: "Achyutam Keshavam",
      hindi: "अच्युतम् केशवम् राम नारायणम्\nकृष्ण दामोदरम् वासुदेवम् हरिम्\nश्रीधरम् माधवम् गोपिका वल्लभम्\nजानकी नायकम् रामचन्द्रम् भजे\n\nअच्युतम् केशवम् सत्य भामाधवम्\nमाधवम् केशवम् राधिका रमणम्\nइन्दिरा मन्दिरम् चेलुवे नारायण\nदेवकी नन्दनम् नन्द गोपाल हरे",
      english: "Achyutam Keshavam Ram Narayanam\nKrishna Damodaram Vasudevam Harim\nShridharam Madhavam Gopika Vallabham\nJanaki Nayakam Ramachandram Bhaje\n\nAchyutam Keshavam Satya Bhamadhavam\nMadhavam Keshavam Radhika Ramanam\nIndira Mandiram Cheluve Narayana\nDevaki Nandanam Nanda Gopal Hare",
      meaning: "This bhajan is a lyrical poem praising Lord Krishna by his many names, such as Achyuta, Keshava, Ram, Narayana, and Damodaram. It is a soulful chant that invokes the names of the Lord, bringing a sense of peace and devotion."
    },
    aarti: {
      title: "Aarti Kunj Bihari Ki",
      hindi: "आरती कुंज बिहारी की, श्री गिरिधर कृष्ण मुरारी की\nआरती कुंज बिहारी की\n\nगले में बैजन्ती माला, बजावै मुरली मधुर बाला\nश्रवण में कुण्डल झलकाला, नन्द के आनन्द नन्दलाला\nगगन सम अंग कान्ति काली, राधिका चमक रही आली\nलतन में ठाढ़े बनमाली\nभ्रमर सी अलक, कस्तूरी तिलक, चन्द्र सी झलक\nललित छवि श्यामा प्यारी की, श्री गिरिधर कृष्ण मुरारी की\nआरती कुंज बिहारी की",
      english: "Aarti of Kunj Bihari, Shri Giridhar Krishna Murari\nAarti of Kunj Bihari\n\nWearing a garland of basil leaves, playing the sweet flute\nEarrings shining in ears, joy of Nanda, beloved Nandlala\nBody dark like the sky, Radhika shines beside\nStanding gracefully in the garden\nCurls like bees, musk tilak, moon-like glow\nBeautiful form of beloved Shyama, Shri Giridhar Krishna Murari\nAarti of Kunj Bihari",
      meaning: "This aarti glorifies Lord Krishna as the one who wanders through the gardens of Vrindavan ('Kunj Bihari'). It beautifully describes his divine form with his peacock feather crown, his melodious flute, and his enchanting smile."
    }
  },
  "maha-shivaratri": {
    id: "maha-shivaratri",
    name: "Maha Shivaratri",
    title: "The Great Night of Shiva",
    description: "Maha Shivaratri is one of the most significant festivals dedicated to Lord Shiva. Observed on the 14th night of the new moon in the month of Phalguna, it represents the cosmic dance of creation, preservation, and destruction.",
    duration: "1 night",
    icon: "🔱",
    significance: "Commemorates the marriage of Lord Shiva and Goddess Parvati, and celebrates the cosmic dance of Shiva that maintains the balance of the universe.",
    rituals: [
      "Night-long vigil and prayers",
      "Fasting throughout the day",
      "Offering milk, honey, and water to Shiva Linga",
      "Chanting Om Namah Shivaya",
      "Reading Shiva Purana",
      "Meditation and spiritual practices"
    ],
    shloka: {
      title: "Mahamrityunjaya Mantra",
      sanskrit: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्॥",
      english: "We worship the three-eyed Lord Shiva, who is fragrant and who nourishes all beings. May he liberate us from death for the sake of immortality, just as a cucumber is detached from its creeper.",
      meaning: "This is the most powerful mantra dedicated to Lord Shiva, known as the Mahamrityunjaya Mantra. It is believed to have the power to conquer death and grant immortality, both spiritual and physical."
    },
    stories: [
      {
        title: "The Marriage of Shiva and Parvati",
        content: "One of the most significant stories of Maha Shivaratri is the marriage of Lord Shiva and Goddess Parvati. Parvati undertook intense penance to win Shiva's heart, who was in deep meditation. Her unwavering devotion and penance finally led Shiva to accept her as his consort. Their union is celebrated as a symbol of the divine cosmic union of masculine and feminine energies, representing the perfect balance of creation."
      },
      {
        title: "The Churning of the Ocean (Samudra Manthan)",
        content: "Another popular legend is that during the cosmic churning of the ocean, a deadly poison called Halahala emerged that threatened to destroy the universe. To save all creation, Lord Shiva drank the poison and held it in his throat, which turned blue. This is why he is also known as Nilakantha, 'the blue-throated one.' This act of selflessness and sacrifice is celebrated on Maha Shivaratri, symbolizing Shiva's role as the protector of the universe."
      }
    ],
    bhajan: {
      title: "Shiv Tandav Stotram",
      hindi: "जटाटवीगलज्जलप्रवाहपावितस्थले\nगलेऽवलम्ब्य लम्बितां भुजंगतुंगमालिकाम्\nडमड्डमड्डमड्डमनिनादवड्डमर्वयं\nचकार चण्डताण्डवं तनोतु नः शिवः शिवम्\n\nजटाकटाहसंभ्रमभ्रमन्निलिम्पनिर्झरी\nविलोलवीचिवल्लरीविराजमानमूर्धनि\nधगद्धगद्धगज्ज्वलल्ललाटपट्टपावके\nकिशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम",
      english: "With his neck consecrated by the flow of water that flows from his hair,\nAnd on his neck a snake, which is hung like a garland,\nAnd the Damaru making the sound of Damat Damat Damat Damat,\nLord Shiva did the Tandava dance for our welfare.\n\nI have a very deep interest in Lord Shiva, whose head is glorified by the rows of moving waves of the celestial Ganga river, which stir in the deep well of his hair in tangled locks, and who has the brilliant fire burning on the surface of his forehead, and who has the crescent moon as a jewel on his head.",
      meaning: "A powerful hymn of praise written by Ravana, the demon king. It describes Shiva's immense power, beauty, and cosmic dance (Tandava). The fast-paced rhythmic hymn is an expression of intense devotion and surrender to Lord Shiva."
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
    { slug: 'diwali' },
    { slug: 'holi' },
    { slug: 'navratri' },
    { slug: 'ganesh-chaturthi' },
    { slug: 'krishna-janmashtami' },
    { slug: 'maha-shivaratri' },
  ];
}

export default function FestivalDetailPage({ params }: PageProps) {
  const festival = festivalData[params.slug];

  if (!festival) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-900 mb-4">Festival Not Found</h1>
          <Link href="/festivals" className="text-orange-600 hover:text-orange-700 font-medium">
            ← Back to Festivals
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
              <Link href="/festivals" className="text-orange-600 font-semibold">Festivals</Link>
              <Link href="/gods" className="text-orange-800 hover:text-orange-600 font-medium">Gods</Link>
              <Link href="/search" className="text-orange-800 hover:text-orange-600 font-medium">Search</Link>
              <Link href="/about" className="text-orange-800 hover:text-orange-600 font-medium">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/festivals" className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Festivals</span>
        </Link>
      </div>

      {/* Festival Hero */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">{festival.icon}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
            {festival.name}
          </h2>
          <p className="text-2xl text-orange-700 mb-6">{festival.title}</p>
          <p className="text-lg text-orange-800 leading-relaxed max-w-3xl mx-auto">
            {festival.description}
          </p>
        </div>
      </section>

      {/* Festival Details */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Significance */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-orange-100">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="h-6 w-6 text-orange-600" />
                <h3 className="text-2xl font-bold text-orange-900">Significance</h3>
              </div>
              <p className="text-orange-800 leading-relaxed mb-4">{festival.significance}</p>
              <div className="text-sm text-orange-600">
                <strong>Duration:</strong> {festival.duration}
              </div>
            </div>

            {/* Rituals */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-orange-100">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-6 w-6 text-orange-600" />
                <h3 className="text-2xl font-bold text-orange-900">Rituals & Traditions</h3>
              </div>
              <ul className="space-y-3">
                {festival.rituals.map((ritual: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-orange-800">{ritual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections in order: Shloka, Stories, Bhajan, Aarti */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {/* Shloka Section */}
            {festival.shloka && (
              <section>
                <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
                  <BookOpen className="mr-3" />
                  Sacred Shloka
                </h2>
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">{festival.shloka.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-purple-800 mb-2">Sanskrit:</h4>
                      <p className="text-gray-700 whitespace-pre-line font-hindi text-lg">{festival.shloka.sanskrit}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-2">English Translation:</h4>
                      <p className="text-gray-700 whitespace-pre-line">{festival.shloka.english}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-2">Meaning:</h4>
                      <p className="text-gray-600 italic">{festival.shloka.meaning}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Stories Section */}
            {festival.stories && festival.stories.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                  <BookOpen className="mr-3" />
                  Sacred Stories
                </h2>
                <div className="grid gap-6">
                  {festival.stories.map((story, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4">{story.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{story.content}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bhajan Section */}
            {festival.bhajan && (
              <section>
                <h2 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
                  <Music className="mr-3" />
                  Devotional Bhajan
                </h2>
                <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">{festival.bhajan.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">Hindi/Sanskrit:</h4>
                      <p className="text-gray-700 whitespace-pre-line font-hindi">{festival.bhajan.hindi}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">English Translation:</h4>
                      <p className="text-gray-700 whitespace-pre-line">{festival.bhajan.english}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">Meaning:</h4>
                      <p className="text-gray-600 italic">{festival.bhajan.meaning}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Aarti Section */}
            {festival.aarti && (
              <section>
                <h2 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center">
                  <Flame className="mr-3" />
                  Sacred Aarti
                </h2>
                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-4">{festival.aarti.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">Hindi/Sanskrit:</h4>
                      <p className="text-gray-700 whitespace-pre-line font-hindi">{festival.aarti.hindi}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">English Translation:</h4>
                      <p className="text-gray-700 whitespace-pre-line">{festival.aarti.english}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">Meaning:</h4>
                      <p className="text-gray-600 italic">{festival.aarti.meaning}</p>
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
