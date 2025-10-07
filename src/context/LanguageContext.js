import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    family: 'Family',
    whatWeOffer: 'What We Offer',
    podcasts: 'Podcasts',
    blog: 'Blog',
    contact: 'Contact',
    signIn: 'Sign In',
    readMore: 'Read More',
    language: 'हिंदी',
    
    // Header Banner
    speakToTeam: 'Speak To A Team Member To Answer Your Questions Now!',
    scheduleCall: 'Schedule a free call now!',
    
    // Header2 - Mission
    ourMission: 'Our Mission',
    missionText: 'All therapies as part of the Gorter Model are therefore nontoxic.',
    welcomeGorter: 'Welcome to the Gorter Model',
    gorterDescription: 'The Gorter Model is dedicated to the treatment of cancer using immune-supportive, nontoxic therapies and also treat patients living with other chronic diseases, such as infections with hepatitis B and C and HIV. This program was developed by Robert Gorter, MD, PhD, over more than four decades of research, clinical experience and after surviving cancer himself.',
    cozyCaption: 'Cozy Cabins is now The Healing Oasis',
    
    // Header3 - Empowering
    empoweringTitle: 'Empowering cancer recovery',
    theProblem: 'The problem',
    problemText: 'We all know someone with cancer or someone who has died of cancer. Maybe you\'re here because you have cancer. People with cancer have limited choices for fighting it. There are very few places they can go to truly fight the disease and try to win or just feel better. The traditional medical system offers treatments in an environment that is poorly suited for health and wellbeing.',
    ourVision: 'Our vision',
    visionText: 'To build an all-inclusive healing oasis where people with cancer can stay for an extended period of time secluded in nature while being given alternative therapies. We want to offer our guests the best of nature combined with non-toxic treatments to help them feel better, give a better chance of managing the disease and have hope that they can LIVE!',
    beginJourney: 'Begin your healing journey!',
    
    // Header4 - Holistic Approach
    holisticTitle: 'A holistic approach to healing',
    ozoneTherapy: 'Ozone therapy',
    ozoneText: 'Ozone is a chemical compound consisting of three oxygen atoms O3 (ie triatomic oxygen), a highly energetic form of normal (diatomic) atmospheric oxygen (O2). Thus, the molecules of these two forms are different in structure. Due to its being an extremely powerful oxidizing agent and a highly effective disinfectant, it is used throughout the world to destroy germs in water treatment installations supplying drinking water.',
    mistletoe: 'Mistletoe (Viscum album)',
    mistletoeText: 'For thousands of years, European mistletoe has been used as a medicinal plant in many healing traditions. Find out more. Nutrient infusions. As part of the Gorter Model, practically all patients receive antioxidants nutrients, trace elements and minerals via a drip (intravenously).',
    thymusPeptides: 'Thymus peptides',
    thymusText: 'The thymus plays an important role in the overall immunomodulation. One could say that the thymus is the brain of the immune system.',
    hyperthermia: 'Hyperthermia - Therapeutic Fever',
    hyperthermiaText: '"I would cure all diseases if I only could produce fever." Parmenides, Greek physician and philosopher, 510 BC. Fever and heat therapy have been recognized for their beneficial effects on health since antiquity. Traditionally there have been two forms of hyperthermia—whole body and localized applications. We are now discussing the modern innovations to both approaches of hyperthermia, as applied in the treatment of cancer. Fever turns out to be one of the missing links in understanding cancer. Most cancer patients have a lower core temperature and cannot mount a fever. Thus they are unable to activate their immune system.',
    immuneTherapies: 'Immune therapies in the treatment of cancer',
    immuneText: 'In the Gorter Model, a full range of immune therapies are used to treat cancer patients. Although fever therapy and dendritic cell vaccinations are the primary forms of treatment, there are also several other complementary therapies that are incorporated, depending on the needs of the individual. The main goals of these innovative immune therapies are to restore and maximize immune function. The other goal is to destroy cancer cells without introducing toxic agents that can have a negative impact on immune function and on patient\'s quality of life.',
    supplements: 'Supplements That Empower Your Body',
    supplementsText: 'We source some of the best quality supplements that will give your body a "boost" as it is actively working to heal itself. Supplements include enzymes which are essential to recovery and usually very depleted in most people\'s bodies, vitamins, and herbs.',
    
    // Header5 - Team
    teamTitle: 'The team dedicated to your healing',
    gorterFamily: 'The Robert Gorter Family',
    familyDescription: 'On average, an adult human being produces approximately 10 million cancer cells per day. A major part of the immune system is to recognize and kill these cells immediately…. Thus: only one\'s immune system can have you turn 88 years of age. The Gorter Model focuses on immune restoration to assist the immune system to kill all these approximately 10 million cancer cells and live without clinical cancer or, destroy cancer cells rapidly.',
    
    // Header6 - Gallery
    galleryTitle: 'Heaven gallery',
    
    // Footer
    inMemory: 'In loving memory of',
    memoryText: 'Difficult roads can lead to beautiful destinations." "There\'s always hope beyond what you see." "It\'s possible not just to survive, but to thrive and to live a healthy, wonderful life again.',
    privacyPolicy: 'Privacy Policy'
  },
  hi: {
    // Navigation
    home: 'होम',
    family: 'परिवार',
    whatWeOffer: 'हम क्या प्रदान करते हैं',
    podcasts: 'पॉडकास्ट',
    blog: 'ब्लॉग',
    contact: 'संपर्क',
    signIn: 'साइन इन',
    readMore: 'और पढ़ें',
    language: 'English',
    
    // Header Banner
    speakToTeam: 'अपने प्रश्नों के उत्तर के लिए अभी टीम के सदस्य से बात करें!',
    scheduleCall: 'अभी मुफ्त कॉल शेड्यूल करें!',
    
    // Header2 - Mission
    ourMission: 'हमारा मिशन',
    missionText: 'गॉर्टर मॉडल के हिस्से के रूप में सभी चिकित्सा इसलिए गैर-विषाक्त हैं।',
    welcomeGorter: 'गॉर्टर मॉडल में आपका स्वागत है',
    gorterDescription: 'गॉर्टर मॉडल प्रतिरक्षा-सहायक, गैर-विषाक्त चिकित्सा का उपयोग करके कैंसर के उपचार के लिए समर्पित है और हेपेटाइटिस बी और सी और एचआईवी के संक्रमण जैसी अन्य पुरानी बीमारियों के साथ रहने वाले रोगियों का भी इलाज करता है। यह कार्यक्रम रॉबर्ट गॉर्टर, एमडी, पीएचडी द्वारा चार दशकों से अधिक के अनुसंधान, नैदानिक अनुभव और स्वयं कैंसर से बचने के बाद विकसित किया गया था।',
    cozyCaption: 'कॉज़ी कैबिन अब द हीलिंग ओएसिस है',
    
    // Header3 - Empowering
    empoweringTitle: 'कैंसर रिकवरी को सशक्त बनाना',
    theProblem: 'समस्या',
    problemText: 'हम सभी कैंसर से पीड़ित किसी व्यक्ति या कैंसर से मरने वाले किसी व्यक्ति को जानते हैं। शायद आप यहाँ इसलिए हैं क्योंकि आपको कैंसर है। कैंसर से पीड़ित लोगों के पास इससे लड़ने के लिए सीमित विकल्प हैं। बहुत कम जगहें हैं जहाँ वे वास्तव में बीमारी से लड़ने और जीतने की कोशिश कर सकते हैं या बस बेहतर महसूस कर सकते हैं। पारंपरिक चिकित्सा प्रणाली ऐसे वातावरण में उपचार प्रदान करती है जो स्वास्थ्य और कल्याण के लिए खराब रूप से अनुकूल है।',
    ourVision: 'हमारा दृष्टिकोण',
    visionText: 'एक सर्व-समावेशी हीलिंग ओएसिस बनाना जहाँ कैंसर से पीड़ित लोग वैकल्पिक चिकित्सा दिए जाने के दौरान प्रकृति में एकांत में विस्तारित अवधि के लिए रह सकें। हम अपने मेहमानों को प्रकृति का सर्वोत्तम गैर-विषाक्त उपचारों के साथ संयोजन प्रदान करना चाहते हैं ताकि वे बेहतर महसूस कर सकें, बीमारी को प्रबंधित करने का बेहतर मौका दे सकें और उम्मीद कर सकें कि वे जी सकें!',
    beginJourney: 'अपनी हीलिंग यात्रा शुरू करें!',
    
    // Header4 - Holistic Approach
    holisticTitle: 'हीलिंग के लिए एक समग्र दृष्टिकोण',
    ozoneTherapy: 'ओज़ोन थेरेपी',
    ozoneText: 'ओज़ोन तीन ऑक्सीजन परमाणुओं O3 से मिलकर बना एक रासायनिक यौगिक है (यानी त्रिपरमाणुक ऑक्सीजन), जो सामान्य (द्विपरमाणुक) वायुमंडलीय ऑक्सीजन (O2) का एक अत्यधिक ऊर्जावान रूप है। इस प्रकार, इन दो रूपों के अणु संरचना में भिन्न हैं। एक अत्यंत शक्तिशाली ऑक्सीकरण एजेंट और एक अत्यधिक प्रभावी कीटाणुनाशक होने के कारण, इसका उपयोग दुनिया भर में पीने के पानी की आपूर्ति करने वाले जल उपचार प्रतिष्ठानों में कीटाणुओं को नष्ट करने के लिए किया जाता है।',
    mistletoe: 'मिस्टलेटो (विस्कम एल्बम)',
    mistletoeText: 'हजारों वर्षों से, यूरोपीय मिस्टलेटो का उपयोग कई हीलिंग परंपराओं में एक औषधीय पौधे के रूप में किया जाता रहा है। और जानें। पोषक तत्व इन्फ्यूजन। गॉर्टर मॉडल के हिस्से के रूप में, व्यावहारिक रूप से सभी रोगियों को ड्रिप (अंतःशिरा) के माध्यम से एंटीऑक्सिडेंट पोषक तत्व, ट्रेस तत्व और खनिज प्राप्त होते हैं।',
    thymusPeptides: 'थाइमस पेप्टाइड्स',
    thymusText: 'थाइमस समग्र इम्यूनोमॉड्यूलेशन में एक महत्वपूर्ण भूमिका निभाता है। कोई कह सकता है कि थाइमस प्रतिरक्षा प्रणाली का मस्तिष्क है।',
    hyperthermia: 'हाइपरथर्मिया - चिकित्सीय बुखार',
    hyperthermiaText: '"यदि मैं केवल बुखार पैदा कर सकूं तो मैं सभी बीमारियों को ठीक कर दूंगा।" पार्मेनाइड्स, ग्रीक चिकित्सक और दार्शनिक, 510 ईसा पूर्व। बुखार और गर्मी चिकित्सा को प्राचीन काल से स्वास्थ्य पर उनके लाभकारी प्रभावों के लिए पहचाना गया है। पारंपरिक रूप से हाइपरथर्मिया के दो रूप रहे हैं—पूरे शरीर और स्थानीयकृत अनुप्रयोग। अब हम कैंसर के उपचार में लागू हाइपरथर्मिया के दोनों दृष्टिकोणों के आधुनिक नवाचारों पर चर्चा कर रहे हैं। बुखार कैंसर को समझने में गुम कड़ियों में से एक निकला है। अधिकांश कैंसर रोगियों का मुख्य तापमान कम होता है और वे बुखार नहीं चढ़ा सकते। इस प्रकार वे अपनी प्रतिरक्षा प्रणाली को सक्रिय करने में असमर्थ हैं।',
    immuneTherapies: 'कैंसर के उपचार में प्रतिरक्षा चिकित्सा',
    immuneText: 'गॉर्टर मॉडल में, कैंसर रोगियों के इलाज के लिए प्रतिरक्षा चिकित्सा की एक पूरी श्रृंखला का उपयोग किया जाता है। हालांकि बुखार चिकित्सा और डेंड्राइटिक सेल टीकाकरण उपचार के प्राथमिक रूप हैं, व्यक्ति की आवश्यकताओं के आधार पर कई अन्य पूरक चिकित्सा भी शामिल की जाती हैं। इन नवाचार प्रतिरक्षा चिकित्सा के मुख्य लक्ष्य प्रतिरक्षा कार्य को बहाल करना और अधिकतम करना हैं। दूसरा लक्ष्य विषाक्त एजेंटों को शामिल किए बिना कैंसर कोशिकाओं को नष्ट करना है जो प्रतिरक्षा कार्य और रोगी के जीवन की गुणवत्ता पर नकारात्मक प्रभाव डाल सकते हैं।',
    supplements: 'सप्लीमेंट्स जो आपके शरीर को सशक्त बनाते हैं',
    supplementsText: 'हम कुछ बेहतरीन गुणवत्ता वाले सप्लीमेंट्स का स्रोत करते हैं जो आपके शरीर को "बूस्ट" देंगे क्योंकि यह सक्रिय रूप से खुद को ठीक करने के लिए काम कर रहा है। सप्लीमेंट्स में एंजाइम शामिल हैं जो रिकवरी के लिए आवश्यक हैं और आमतौर पर अधिकांश लोगों के शरीर में बहुत कम होते हैं, विटामिन और जड़ी-बूटियां।',
    
    // Header5 - Team
    teamTitle: 'आपकी हीलिंग के लिए समर्पित टीम',
    gorterFamily: 'रॉबर्ट गॉर्टर परिवार',
    familyDescription: 'औसतन, एक वयस्क मनुष्य प्रतिदिन लगभग 10 मिलियन कैंसर कोशिकाएं पैदा करता है। प्रतिरक्षा प्रणाली का एक प्रमुख हिस्सा इन कोशिकाओं को तुरंत पहचानना और मारना है.... इस प्रकार: केवल किसी की प्रतिरक्षा प्रणाली ही आपको 88 साल की उम्र तक पहुंचा सकती है। गॉर्टर मॉडल प्रतिरक्षा बहाली पर केंद्रित है ताकि प्रतिरक्षा प्रणाली को इन सभी लगभग 10 मिलियन कैंसर कोशिकाओं को मारने और नैदानिक कैंसर के बिना जीने या कैंसर कोशिकाओं को तेजी से नष्ट करने में सहायता मिल सके।',
    
    // Header6 - Gallery
    galleryTitle: 'स्वर्ग गैलरी',
    
    // Footer
    inMemory: 'प्रेमपूर्ण स्मृति में',
    memoryText: 'कठिन रास्ते सुंदर गंतव्यों तक ले जा सकते हैं।" "आप जो देखते हैं उससे कहीं अधिक हमेशा उम्मीद होती है।" "न केवल जीवित रहना बल्कि फलना-फूलना और फिर से एक स्वस्थ, अद्भुत जीवन जीना संभव है।',
    privacyPolicy: 'गोपनीयता नीति'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};