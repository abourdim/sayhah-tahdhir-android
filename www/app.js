/* صيحة تحذير من دعاة التنصير — WARNING AGAINST MISSIONARIES — app.js v1.0 */
/* Based on "Sayhah Tahdhir min Du'at al-Tansir" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'صيحة تحذير',
    splashSub: 'حماية الهوية للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة البقرة ١٢٠',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'التحديات والحلول',
    cardsDesc: '٢٠ بطاقة عن التحديات وطرق الحماية من كتاب الشيخ محمد الغزالي — كل بطاقة بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن حماية الهوية — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي في الوعي',
    progressDesc: 'تقدمك وإنجازاتك في رحلة الوعي',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الثبات والحماية',
    dailyLabel: '✨ بطاقة اليوم',
    searchPlaceholder: 'ابحث في البطاقات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '٢٠ بطاقة عن التحديات وطرق الحماية',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'A Warning Cry',
    splashSub: 'Protecting identity for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Baqarah 120',
    tabHome: 'Home', tabCards: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: 'Challenges & Solutions',
    cardsDesc: '20 cards about challenges and protection methods from Sheikh al-Ghazali — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge about protecting identity — 4 choices per question',
    progressTitle: 'My Awareness Journey',
    progressDesc: 'Your progress and achievements in the awareness journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Steadfastness & Protection',
    dailyLabel: "✨ Today's Card",
    searchPlaceholder: 'Search cards...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 cards about challenges and protection methods',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Un Cri d\'Alerte',
    splashSub: 'Proteger l\'identite pour les jeunes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Baqarah 120',
    tabHome: 'Accueil', tabCards: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    cardsTitle: 'Defis et Solutions',
    cardsDesc: '20 cartes sur les defis et les methodes de protection du livre du Sheikh al-Ghazali — chacune avec un verset, un hadith et une application pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur la protection de l\'identite — 4 choix par question',
    progressTitle: 'Mon Parcours de Conscience',
    progressDesc: 'Vos progres et realisations dans le parcours de conscience',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Fermete et la Protection',
    dailyLabel: '✨ Carte du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: 'Points d\'Experience',
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 cartes sur les defis et les methodes de protection',
      'Quiz << Qui Veut Devenir Savant ? >> avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 CARDS DATA ═══════════════
const CARDS = [
  {
    id:1, emoji:'🎯',
    ar:{title:'استغلال الفقر',desc:'يحذر الغزالي في "صيحة تحذير": بعض الجهات تستغل فقر المسلمين لتغيير معتقداتهم عبر تقديم المساعدات المادية المشروطة بتغيير الدين أو حضور طقوس مخالفة. هذا الأسلوب يستهدف المناطق الأكثر فقراً في أفريقيا وآسيا حيث يعاني الملايين من الجوع والمرض. الشيخ الغزالي يحذر من أن الجوع لا يبرر التخلي عن العقيدة ويدعو لمؤسسات إسلامية تسد الحاجة وتحفظ الكرامة. الحل يبدأ ببناء شبكات تكافل اجتماعي إسلامية قوية تصل لكل محتاج دون شروط.',verse:'وَلَنْ تَرْضَى عَنْكَ الْيَهُودُ وَلَا النَّصَارَى حَتَّى تَتَّبِعَ مِلَّتَهُمْ',verseRef:'البقرة ١٢٠',hadith:'ليس المؤمن الذي يشبع وجاره جائع إلى جنبه — رواه البيهقي',action:'تبرع اليوم لمؤسسة خيرية إسلامية تساعد الفقراء في الحفاظ على كرامتهم',young:'ساعد من يحتاج! عندما نعطي الفقراء نحميهم من أي شخص يريد استغلالهم 🎯'},
    en:{title:'Exploiting Poverty',desc:'Al-Ghazali warns in "A Cry of Warning": Some groups exploit the poverty of Muslims to change their beliefs by offering material aid conditioned on changing religion or attending opposing rituals. This method targets the poorest regions in Africa and Asia where millions suffer from hunger and disease. Sheikh al-Ghazali warns that hunger does not justify abandoning faith and calls for Islamic institutions to fill the need while preserving dignity. The solution begins with building strong Islamic social solidarity networks that reach every person in need without conditions.',verse:'And never will the Jews or Christians approve of you until you follow their religion',verseRef:'Al-Baqarah 120',hadith:'He is not a believer who eats his fill while his neighbor goes hungry — Bayhaqi',action:'Donate today to an Islamic charity that helps the poor while preserving their dignity',young:'Help those in need! When we give to the poor, we protect them from anyone who wants to take advantage 🎯'},
    fr:{title:'Exploiter la Pauvrete',desc:'Al-Ghazali avertit dans "Un Cri d\'Avertissement": Certains groupes exploitent la pauvrete des musulmans pour changer leurs croyances en offrant une aide materielle conditionnee au changement de religion ou a la participation a des rituels contraires. Cette methode cible les regions les plus pauvres d\'Afrique et d\'Asie ou des millions souffrent de la faim et de la maladie. Le Sheikh al-Ghazali avertit que la faim ne justifie pas l\'abandon de la foi et appelle a des institutions islamiques qui comblent le besoin tout en preservant la dignite. La solution commence par la construction de reseaux de solidarite sociale islamiques forts.',verse:'Et jamais les Juifs ni les Chretiens ne seront satisfaits de toi jusqu\'a ce que tu suives leur religion',verseRef:'Al-Baqarah 120',hadith:'N\'est pas croyant celui qui mange a sa faim alors que son voisin a faim a cote de lui — Bayhaqi',action:'Faites un don aujourd\'hui a une organisation caritative islamique qui aide les pauvres en preservant leur dignite',young:'Aide ceux qui en ont besoin ! Quand nous donnons aux pauvres, nous les protegeons de ceux qui veulent en profiter 🎯'}
  },
  {
    id:2, emoji:'🏫',
    ar:{title:'التسلل عبر التعليم',desc:'يحذر الغزالي في "صيحة تحذير": إنشاء مدارس وجامعات في البلاد الإسلامية تحت غطاء التعليم الحديث بينما الهدف الحقيقي هو تغيير القيم والمعتقدات. الشيخ الغزالي يدعو لتعليم إسلامي قوي يجمع بين العلم والإيمان.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا بِطَانَةً مِنْ دُونِكُمْ لَا يَأْلُونَكُمْ خَبَالًا',verseRef:'آل عمران ١١٨',hadith:'طلب العلم فريضة على كل مسلم — رواه ابن ماجه',action:'تأكد من أن مدرستك أو جامعتك تحترم هويتك الإسلامية',young:'تعلّم العلوم وكن ذكياً، لكن لا تنسَ أن تعرف دينك جيداً أيضاً 🏫'},
    en:{title:'Infiltrating Education',desc:'Al-Ghazali warns in "A Cry of Warning": Establishing schools and universities in Muslim countries under the guise of modern education while the real goal is changing values and beliefs. Sheikh al-Ghazali calls for strong Islamic education combining knowledge and faith.',verse:'O you who believe, do not take as intimates those other than yourselves, for they will not spare you any ruin',verseRef:'Al Imran 118',hadith:'Seeking knowledge is an obligation upon every Muslim — Ibn Majah',action:'Ensure your school or university respects your Islamic identity',young:'Learn all the sciences and be smart, but don\'t forget to know your religion well too 🏫'},
    fr:{title:'Infiltrer l\'Education',desc:'Al-Ghazali avertit dans "Un Cri d\'Avertissement": Creer des ecoles et des universites dans les pays musulmans sous couvert d\'education moderne alors que le vrai but est de changer les valeurs et les croyances. Le Sheikh al-Ghazali appelle a une education islamique forte combinant savoir et foi.',verse:'O vous qui croyez, ne prenez pas de confidents en dehors de vous-memes, ils ne manqueront pas de vous nuire',verseRef:'Al Imran 118',hadith:'La quete du savoir est une obligation pour chaque musulman — Ibn Majah',action:'Assurez-vous que votre ecole ou universite respecte votre identite islamique',young:'Apprends toutes les sciences et sois intelligent, mais n\'oublie pas de bien connaitre ta religion aussi 🏫'}
  },
  {
    id:3, emoji:'🏥',
    ar:{title:'الخدمات الطبية كطُعم',desc:'يحذر الغزالي في "صيحة تحذير": تقديم خدمات طبية مجانية في المناطق الفقيرة مع ربطها بأنشطة دينية مخالفة. الشيخ الغزالي يدعو المسلمين لإنشاء مستشفيات ومراكز صحية تخدم الناس دون شروط.',verse:'وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا',verseRef:'المائدة ٣٢',hadith:'من فرّج عن مسلم كربة من كرب الدنيا فرّج الله عنه كربة من كرب يوم القيامة — رواه مسلم',action:'ادعم مستشفى أو عيادة إسلامية تخدم الناس مجاناً بلا شروط',young:'عندما نبني مستشفيات نساعد المرضى بدون أن نطلب منهم أي شيء — هذا هو الإسلام الحقيقي 🏥'},
    en:{title:'Medical Services as Bait',desc:'Al-Ghazali warns in "A Cry of Warning": Offering free medical services in poor areas while linking them to opposing religious activities. Sheikh al-Ghazali calls on Muslims to establish hospitals and health centers that serve people without conditions.',verse:'And whoever saves a life, it is as if he saved all of mankind',verseRef:'Al-Ma\'idah 32',hadith:'Whoever relieves a Muslim of a hardship, Allah will relieve them of a hardship on the Day of Judgment — Muslim',action:'Support an Islamic hospital or clinic that serves people for free without conditions',young:'When we build hospitals, we help the sick without asking them for anything — that is true Islam 🏥'},
    fr:{title:'Les Services Medicaux comme Appat',desc:'Al-Ghazali avertit dans "Un Cri d\'Avertissement": Offrir des services medicaux gratuits dans les zones pauvres tout en les liant a des activites religieuses contraires. Le Sheikh al-Ghazali appelle les musulmans a creer des hopitaux et centres de sante servant les gens sans conditions.',verse:'Et quiconque sauve une vie, c\'est comme s\'il avait sauve l\'humanite entiere',verseRef:'Al-Ma\'idah 32',hadith:'Quiconque soulage un musulman d\'une difficulte, Allah le soulagera d\'une difficulte le Jour du Jugement — Muslim',action:'Soutenez un hopital ou une clinique islamique qui sert les gens gratuitement sans conditions',young:'Quand nous construisons des hopitaux, nous aidons les malades sans rien leur demander — c\'est le vrai Islam 🏥'}
  },
  {
    id:4, emoji:'👶',
    ar:{title:'استهداف الأطفال',desc:'يحذر الغزالي في "صيحة تحذير": التركيز على الأطفال والأيتام لأنهم الأكثر ضعفاً وتأثراً. إنشاء دور أيتام ورياض أطفال تغرس قيماً مخالفة. واجبنا حماية أطفالنا بتعليمهم هويتهم منذ الصغر.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنْفُسَكُمْ وَأَهْلِيكُمْ نَارًا',verseRef:'التحريم ٦',hadith:'كفى بالمرء إثماً أن يُضيّع من يعول — رواه أبو داود',action:'علّم طفلاً اليوم شيئاً عن الإسلام — آية قصيرة أو قصة نبي',young:'تعلّم عن دينك منذ الصغر! اسأل والديك عن قصص الأنبياء والصحابة 👶'},
    en:{title:'Targeting Children',desc:'Al-Ghazali warns in "A Cry of Warning": Focusing on children and orphans because they are the most vulnerable and impressionable. Establishing orphanages and kindergartens that instill opposing values. Our duty is to protect our children by teaching them their identity from an early age.',verse:'O you who believe, protect yourselves and your families from a Fire',verseRef:'At-Tahrim 6',hadith:'It is enough sin for a person to neglect those he supports — Abu Dawud',action:'Teach a child something about Islam today — a short verse or a story of a prophet',young:'Learn about your religion from a young age! Ask your parents about the stories of the prophets and companions 👶'},
    fr:{title:'Cibler les Enfants',desc:'Al-Ghazali avertit dans "Un Cri d\'Avertissement": Se concentrer sur les enfants et les orphelins car ils sont les plus vulnerables et influencables. Creer des orphelinats et des jardins d\'enfants inculquant des valeurs contraires. Notre devoir est de proteger nos enfants en leur enseignant leur identite des le plus jeune age.',verse:'O vous qui croyez, protegez-vous et vos familles d\'un Feu',verseRef:'At-Tahrim 6',hadith:'Il suffit comme peche a une personne de negliger ceux qu\'elle nourrit — Abu Dawud',action:'Enseignez a un enfant quelque chose sur l\'Islam aujourd\'hui — un court verset ou une histoire d\'un prophete',young:'Apprends ta religion des le plus jeune age ! Demande a tes parents les histoires des prophetes et des compagnons 👶'}
  },
  {
    id:5, emoji:'🌍',
    ar:{title:'التآكل الثقافي',desc:'يحذر الغزالي في "صيحة تحذير": محاولة إبعاد المسلمين عن ثقافتهم وتراثهم من خلال نشر ثقافة استهلاكية مادية. الهدف هو إفراغ المسلم من محتواه الحضاري وجعله تابعاً ثقافياً.',verse:'وَلَا تَتَّبِعُوا أَهْوَاءَ قَوْمٍ قَدْ ضَلُّوا مِنْ قَبْلُ',verseRef:'المائدة ٧٧',hadith:'من تشبّه بقوم فهو منهم — رواه أبو داود',action:'تعرّف اليوم على جانب من تراثك الإسلامي واعتز به',young:'ثقافتنا جميلة! تعلّم عن تراثنا الإسلامي وكن فخوراً بهويتك 🌍'},
    en:{title:'Cultural Erosion',desc:'Al-Ghazali warns in "A Cry of Warning": Attempting to distance Muslims from their culture and heritage by spreading a materialistic consumer culture. The goal is to empty the Muslim of their civilizational content and make them a cultural follower.',verse:'And do not follow the desires of a people who went astray before',verseRef:'Al-Ma\'idah 77',hadith:'Whoever imitates a people is one of them — Abu Dawud',action:'Learn today about an aspect of your Islamic heritage and take pride in it',young:'Our culture is beautiful! Learn about our Islamic heritage and be proud of your identity 🌍'},
    fr:{title:'L\'Erosion Culturelle',desc:'Al-Ghazali avertit dans "Un Cri d\'Avertissement": Tenter d\'eloigner les musulmans de leur culture et de leur patrimoine en repandant une culture materialiste et consumériste. L\'objectif est de vider le musulman de son contenu civilisationnel et d\'en faire un suiveur culturel.',verse:'Et ne suivez pas les desirs d\'un peuple qui s\'est egare auparavant',verseRef:'Al-Ma\'idah 77',hadith:'Quiconque imite un peuple en fait partie — Abu Dawud',action:'Apprenez aujourd\'hui un aspect de votre patrimoine islamique et soyez-en fier',young:'Notre culture est belle ! Apprends notre patrimoine islamique et sois fier de ton identite 🌍'}
  },
  {
    id:6, emoji:'📚',
    ar:{title:'التعليم الإسلامي القوي',desc:'يحذر الغزالي في "صيحة تحذير": أقوى سلاح لحماية الهوية هو تعليم إسلامي عميق يجعل المسلم يفهم دينه حق الفهم. من يعرف دينه جيداً لا يسهل خداعه. العلم نور يحمي صاحبه.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'من يرد الله به خيراً يفقّهه في الدين — متفق عليه',action:'خصص ١٥ دقيقة يومياً لتعلّم شيء جديد عن الإسلام',young:'كن عالماً بدينك! اقرأ كل يوم شيئاً عن الإسلام — العلم هو سلاحك الأقوى 📚'},
    en:{title:'Strong Islamic Education',desc:'Al-Ghazali warns in "A Cry of Warning": The strongest weapon to protect identity is deep Islamic education that makes the Muslim truly understand their religion. Those who know their religion well are not easily deceived. Knowledge is a light that protects its bearer.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'When Allah wills good for someone, He grants them understanding of the religion — Agreed upon',action:'Dedicate 15 minutes daily to learning something new about Islam',young:'Be knowledgeable about your religion! Read something about Islam every day — knowledge is your strongest weapon 📚'},
    fr:{title:'L\'Education Islamique Forte',desc:'Al-Ghazali avertit dans "Un Cri d\'Avertissement": L\'arme la plus puissante pour proteger l\'identite est une education islamique profonde qui fait que le musulman comprend vraiment sa religion. Celui qui connait bien sa religion n\'est pas facilement trompe. Le savoir est une lumiere qui protege son porteur.',verse:'Dis : Sont-ils egaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'Quand Allah veut du bien pour quelqu\'un, Il lui accorde la comprehension de la religion — Unanimement reconnu',action:'Consacrez 15 minutes par jour a apprendre quelque chose de nouveau sur l\'Islam',young:'Sois savant sur ta religion ! Lis chaque jour quelque chose sur l\'Islam — le savoir est ton arme la plus puissante 📚'}
  },
  {
    id:7, emoji:'🏘️',
    ar:{title:'المؤسسات المجتمعية',desc:'بناء مؤسسات مجتمعية إسلامية قوية: مساجد نشطة، مراكز شبابية، جمعيات خيرية، نوادي ثقافية. هذه المؤسسات تملأ الفراغ الذي يستغله الآخرون.',verse:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى',verseRef:'المائدة ٢',hadith:'يد الله مع الجماعة — رواه الترمذي',action:'شارك في نشاط مجتمعي إسلامي هذا الأسبوع',young:'المسجد ليس فقط للصلاة! يمكن أن يكون مكاناً للعب والتعلم وتكوين الصداقات 🏘️'},
    en:{title:'Community Institutions',desc:'Building strong Islamic community institutions: active mosques, youth centers, charitable organizations, cultural clubs. These institutions fill the vacuum that others exploit.',verse:'And cooperate in righteousness and piety',verseRef:'Al-Ma\'idah 2',hadith:'The hand of Allah is with the community — Tirmidhi',action:'Participate in an Islamic community activity this week',young:'The mosque is not just for praying! It can be a place for playing, learning, and making friends 🏘️'},
    fr:{title:'Les Institutions Communautaires',desc:'Construire des institutions communautaires islamiques fortes : mosquees actives, centres de jeunesse, organisations caritatives, clubs culturels. Ces institutions comblent le vide que d\'autres exploitent.',verse:'Et entraidez-vous dans la bienfaisance et la piete',verseRef:'Al-Ma\'idah 2',hadith:'La main d\'Allah est avec la communaute — Tirmidhi',action:'Participez a une activite communautaire islamique cette semaine',young:'La mosquee n\'est pas que pour la priere ! Ca peut etre un endroit pour jouer, apprendre et se faire des amis 🏘️'}
  },
  {
    id:8, emoji:'📱',
    ar:{title:'الوعي الإعلامي',desc:'تعلّم كيف تميّز بين الأخبار الصادقة والمضللة. الإعلام قد يُستخدم لتشويه صورة الإسلام والمسلمين. التفكير النقدي هو درعك الأول ضد التضليل.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',verseRef:'الحجرات ٦',hadith:'كفى بالمرء كذباً أن يحدث بكل ما سمع — رواه مسلم',action:'قبل أن تشارك خبراً اليوم تحقق من صحته أولاً',young:'لا تصدق كل شيء تراه على الإنترنت! تأكد دائماً من المعلومات قبل أن تشاركها 📱'},
    en:{title:'Media Literacy',desc:'Learn to distinguish between honest and misleading news. Media can be used to distort the image of Islam and Muslims. Critical thinking is your first shield against misinformation.',verse:'O you who believe, if a wrongdoer comes to you with news, investigate',verseRef:'Al-Hujurat 6',hadith:'It is enough of a lie for a person to narrate everything they hear — Muslim',action:'Before sharing news today, verify its accuracy first',young:'Don\'t believe everything you see on the internet! Always check information before sharing it 📱'},
    fr:{title:'La Litteratie Mediatique',desc:'Apprendre a distinguer entre les informations honnetes et trompeuses. Les medias peuvent etre utilises pour deformer l\'image de l\'Islam et des musulmans. La pensee critique est votre premier bouclier contre la desinformation.',verse:'O vous qui croyez, si un pervers vous apporte une nouvelle, verifiez-la',verseRef:'Al-Hujurat 6',hadith:'Il suffit comme mensonge a une personne de raconter tout ce qu\'elle entend — Muslim',action:'Avant de partager une nouvelle aujourd\'hui, verifiez d\'abord son exactitude',young:'Ne crois pas tout ce que tu vois sur internet ! Verifie toujours les informations avant de les partager 📱'}
  },
  {
    id:9, emoji:'📖',
    ar:{title:'حفظ العربية والقرآن',desc:'اللغة العربية والقرآن هما حصن الهوية الإسلامية. من يحفظ القرآن ويفهم العربية يملك أقوى سلاح ضد أي محاولة لتغيير هويته. الابتعاد عن العربية يضعف الرابطة بالقرآن.',verse:'إِنَّا أَنْزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُونَ',verseRef:'يوسف ٢',hadith:'خيركم من تعلّم القرآن وعلّمه — رواه البخاري',action:'احفظ آية جديدة من القرآن اليوم وتدبّر معناها',young:'احفظ القرآن! كل آية تحفظها تصبح نوراً في قلبك ودرعاً يحميك 📖'},
    en:{title:'Preserving Arabic & Quran',desc:'The Arabic language and the Quran are the fortress of Islamic identity. Those who memorize the Quran and understand Arabic possess the strongest weapon against any attempt to change their identity. Distancing from Arabic weakens the bond with the Quran.',verse:'Indeed, We have sent it down as an Arabic Quran so that you might understand',verseRef:'Yusuf 2',hadith:'The best among you are those who learn the Quran and teach it — Bukhari',action:'Memorize a new verse from the Quran today and reflect on its meaning',young:'Memorize the Quran! Every verse you memorize becomes a light in your heart and a shield to protect you 📖'},
    fr:{title:'Preserver l\'Arabe et le Coran',desc:'La langue arabe et le Coran sont la forteresse de l\'identite islamique. Ceux qui memorisent le Coran et comprennent l\'arabe possedent l\'arme la plus puissante contre toute tentative de changer leur identite. S\'eloigner de l\'arabe affaiblit le lien avec le Coran.',verse:'Nous l\'avons fait descendre en un Coran arabe afin que vous raisonniez',verseRef:'Yusuf 2',hadith:'Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et l\'enseignent — Bukhari',action:'Memorisez un nouveau verset du Coran aujourd\'hui et reflechissez a son sens',young:'Memorise le Coran ! Chaque verset que tu memorises devient une lumiere dans ton coeur et un bouclier pour te proteger 📖'}
  },
  {
    id:10, emoji:'💪',
    ar:{title:'التنمية الاقتصادية',desc:'الفقر يجعل الناس عرضة للاستغلال. التنمية الاقتصادية في البلاد الإسلامية تحمي المسلمين من الحاجة التي قد تُستغل. الاكتفاء الذاتي قوة.',verse:'وَأَعِدُّوا لَهُمْ مَا اسْتَطَعْتُمْ مِنْ قُوَّةٍ',verseRef:'الأنفال ٦٠',hadith:'المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف — رواه مسلم',action:'ادعم مشروعاً اقتصادياً محلياً يساعد على توفير فرص عمل',young:'كن قوياً ومستقلاً! تعلّم مهارات جديدة حتى تستطيع مساعدة نفسك وغيرك 💪'},
    en:{title:'Economic Development',desc:'Poverty makes people vulnerable to exploitation. Economic development in Muslim countries protects Muslims from the need that can be exploited. Self-sufficiency is strength.',verse:'And prepare against them whatever you are able of power',verseRef:'Al-Anfal 60',hadith:'The strong believer is better and more beloved to Allah than the weak believer — Muslim',action:'Support a local economic project that helps provide job opportunities',young:'Be strong and independent! Learn new skills so you can help yourself and others 💪'},
    fr:{title:'Le Developpement Economique',desc:'La pauvrete rend les gens vulnerables a l\'exploitation. Le developpement economique dans les pays musulmans protege les musulmans du besoin qui peut etre exploite. L\'autosuffisance est une force.',verse:'Et preparez contre eux tout ce que vous pouvez de force',verseRef:'Al-Anfal 60',hadith:'Le croyant fort est meilleur et plus aime d\'Allah que le croyant faible — Muslim',action:'Soutenez un projet economique local qui aide a fournir des opportunites d\'emploi',young:'Sois fort et independant ! Apprends de nouvelles competences pour pouvoir t\'aider toi-meme et aider les autres 💪'}
  },
  {
    id:11, emoji:'🤝',
    ar:{title:'الحوار الحضاري',desc:'الإسلام يدعو للحوار الحضاري المبني على الاحترام المتبادل. الحوار ليس تنازلاً بل هو فرصة لعرض الحق. المسلم الواثق من دينه لا يخاف الحوار بل يرحب به.',verse:'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',verseRef:'النحل ١٢٥',hadith:'بلّغوا عني ولو آية — رواه البخاري',action:'حاور شخصاً من ديانة مختلفة باحترام وعرّفه على جمال الإسلام',young:'تكلّم عن دينك بثقة وأدب! عندما يسألك أحد عن الإسلام أجبه بابتسامة 🤝'},
    en:{title:'Civilized Dialogue',desc:'Islam calls for civilized dialogue based on mutual respect. Dialogue is not concession but an opportunity to present the truth. A Muslim confident in their faith does not fear dialogue but welcomes it.',verse:'Invite to the way of your Lord with wisdom and good instruction',verseRef:'An-Nahl 125',hadith:'Convey from me even if it is one verse — Bukhari',action:'Have a respectful conversation with someone of a different faith and show them the beauty of Islam',young:'Talk about your religion with confidence and politeness! When someone asks about Islam, answer with a smile 🤝'},
    fr:{title:'Le Dialogue Civilise',desc:'L\'Islam appelle au dialogue civilise base sur le respect mutuel. Le dialogue n\'est pas une concession mais une opportunite de presenter la verite. Un musulman confiant dans sa foi ne craint pas le dialogue mais l\'accueille.',verse:'Appelle au sentier de ton Seigneur par la sagesse et la bonne exhortation',verseRef:'An-Nahl 125',hadith:'Transmettez de ma part ne serait-ce qu\'un verset — Bukhari',action:'Ayez une conversation respectueuse avec quelqu\'un d\'une autre foi et montrez-lui la beaute de l\'Islam',young:'Parle de ta religion avec confiance et politesse ! Quand quelqu\'un te pose des questions sur l\'Islam, reponds avec un sourire 🤝'}
  },
  {
    id:12, emoji:'📜',
    ar:{title:'الوعي التاريخي',desc:'معرفة تاريخ محاولات التنصير وأساليبها يحمي من الوقوع فيها. التاريخ يكرر نفسه، ومن لا يعرف تاريخه يسهل خداعه. الشيخ الغزالي يوثّق هذه المحاولات بالأدلة.',verse:'قَدْ خَلَتْ مِنْ قَبْلِكُمْ سُنَنٌ فَسِيرُوا فِي الْأَرْضِ',verseRef:'آل عمران ١٣٧',hadith:'لا يُلدغ المؤمن من جحر واحد مرتين — متفق عليه',action:'اقرأ اليوم عن تجربة تاريخية في مقاومة التغيير الثقافي',young:'تعلّم من التاريخ! من يعرف ماذا حدث في الماضي يستطيع حماية نفسه في المستقبل 📜'},
    en:{title:'Historical Awareness',desc:'Knowing the history of missionary attempts and their methods protects against falling into them. History repeats itself, and those who do not know their history are easily deceived. Sheikh al-Ghazali documents these attempts with evidence.',verse:'There have been patterns before you, so travel through the earth',verseRef:'Al Imran 137',hadith:'A believer is not stung from the same hole twice — Agreed upon',action:'Read today about a historical experience in resisting cultural change',young:'Learn from history! Those who know what happened in the past can protect themselves in the future 📜'},
    fr:{title:'La Conscience Historique',desc:'Connaitre l\'histoire des tentatives missionnaires et leurs methodes protege contre le risque d\'y tomber. L\'histoire se repete, et ceux qui ne connaissent pas leur histoire sont facilement trompes. Le Sheikh al-Ghazali documente ces tentatives avec des preuves.',verse:'Il y a eu des exemples avant vous, parcourez la terre',verseRef:'Al Imran 137',hadith:'Le croyant n\'est pas pique deux fois du meme trou — Unanimement reconnu',action:'Lisez aujourd\'hui une experience historique de resistance au changement culturel',young:'Apprends de l\'histoire ! Ceux qui savent ce qui s\'est passe dans le passe peuvent se proteger dans le futur 📜'}
  },
  {
    id:13, emoji:'🧑‍🤝‍🧑',
    ar:{title:'برامج الشباب',desc:'الشباب هم المستقبل وهم الهدف الأول. إنشاء برامج شبابية إسلامية جذابة تملأ وقت الفراغ وتبني الشخصية وتقوي الانتماء. الشباب الذي لا يجد بديلاً إسلامياً يبحث عن بدائل أخرى.',verse:'نَحْنُ نَقُصُّ عَلَيْكَ نَبَأَهُمْ بِالْحَقِّ إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ',verseRef:'الكهف ١٣',hadith:'اغتنم خمساً قبل خمس: شبابك قبل هرمك — رواه الحاكم',action:'شارك في أو أنشئ نشاطاً شبابياً إسلامياً في مجتمعك',young:'الأنشطة الإسلامية ممتعة! انضم لنادي قرآني أو رياضي في مسجدك 🧑‍🤝‍🧑'},
    en:{title:'Youth Programs',desc:'Youth are the future and the primary target. Creating attractive Islamic youth programs fills free time, builds character, and strengthens belonging. Youth who do not find an Islamic alternative look for other alternatives.',verse:'We relate to you their story in truth. They were youths who believed in their Lord',verseRef:'Al-Kahf 13',hadith:'Take advantage of five before five: your youth before your old age — Hakim',action:'Participate in or create an Islamic youth activity in your community',young:'Islamic activities are fun! Join a Quran club or sports team at your mosque 🧑‍🤝‍🧑'},
    fr:{title:'Les Programmes Jeunesse',desc:'Les jeunes sont l\'avenir et la cible principale. Creer des programmes jeunesse islamiques attrayants remplit le temps libre, construit le caractere et renforce l\'appartenance. Les jeunes qui ne trouvent pas d\'alternative islamique cherchent d\'autres alternatives.',verse:'Nous te racontons leur histoire en toute verite. C\'etaient des jeunes qui croyaient en leur Seigneur',verseRef:'Al-Kahf 13',hadith:'Profite de cinq avant cinq : ta jeunesse avant ta vieillesse — Hakim',action:'Participez ou creez une activite jeunesse islamique dans votre communaute',young:'Les activites islamiques sont amusantes ! Rejoins un club coranique ou une equipe sportive a ta mosquee 🧑‍🤝‍🧑'}
  },
  {
    id:14, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'تقوية الأسرة',desc:'الأسرة المسلمة هي الحصن الأول. تقوية الروابط الأسرية وبناء بيت إسلامي دافئ يحمي الأبناء من أي تأثير خارجي. الأسرة المفككة هي البيئة الأسهل للاختراق.',verse:'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا',verseRef:'الروم ٢١',hadith:'خيركم خيركم لأهله وأنا خيركم لأهلي — رواه الترمذي',action:'اجلس مع عائلتك اليوم وتحدثوا عن شيء إسلامي معاً',young:'عائلتك هي حصنك! اجلسوا معاً واقرأوا قصة إسلامية كل مساء 👨‍👩‍👧‍👦'},
    en:{title:'Strengthening Family',desc:'The Muslim family is the first fortress. Strengthening family bonds and building a warm Islamic home protects children from any external influence. A broken family is the easiest environment to infiltrate.',verse:'And among His signs is that He created for you spouses from yourselves that you may find peace in them',verseRef:'Ar-Rum 21',hadith:'The best of you is the best to his family, and I am the best to my family — Tirmidhi',action:'Sit with your family today and discuss something Islamic together',young:'Your family is your fortress! Sit together and read an Islamic story every evening 👨‍👩‍👧‍👦'},
    fr:{title:'Renforcer la Famille',desc:'La famille musulmane est la premiere forteresse. Renforcer les liens familiaux et construire un foyer islamique chaleureux protege les enfants de toute influence exterieure. Une famille brisee est l\'environnement le plus facile a infiltrer.',verse:'Et parmi Ses signes, Il a cree pour vous des epouses issues de vous-memes afin que vous trouviez la paix aupres d\'elles',verseRef:'Ar-Rum 21',hadith:'Le meilleur d\'entre vous est le meilleur envers sa famille, et je suis le meilleur envers ma famille — Tirmidhi',action:'Asseyez-vous avec votre famille aujourd\'hui et discutez de quelque chose d\'islamique ensemble',young:'Ta famille est ta forteresse ! Asseyez-vous ensemble et lisez une histoire islamique chaque soir 👨‍👩‍👧‍👦'}
  },
  {
    id:15, emoji:'🧠',
    ar:{title:'الاستعداد الفكري',desc:'المسلم يجب أن يكون مستعداً فكرياً للرد على الشبهات. تعلّم الحجج وفهم المقارنة بين الأديان يجعل المسلم قادراً على الدفاع عن دينه بالعقل والدليل.',verse:'وَجَادِلْهُمْ بِالَّتِي هِيَ أَحْسَنُ',verseRef:'النحل ١٢٥',hadith:'إنما العلم بالتعلّم — رواه البخاري',action:'اقرأ اليوم عن شبهة شائعة ضد الإسلام وتعلّم الرد عليها بالدليل',young:'كن ذكياً واستعد! تعلّم كيف تجيب على الأسئلة عن دينك بثقة 🧠'},
    en:{title:'Intellectual Preparation',desc:'A Muslim must be intellectually prepared to respond to doubts. Learning arguments and understanding comparative religion makes a Muslim capable of defending their faith with reason and evidence.',verse:'And argue with them in a way that is best',verseRef:'An-Nahl 125',hadith:'Knowledge is only gained through learning — Bukhari',action:'Read today about a common misconception about Islam and learn how to refute it with evidence',young:'Be smart and prepared! Learn how to answer questions about your religion with confidence 🧠'},
    fr:{title:'La Preparation Intellectuelle',desc:'Un musulman doit etre intellectuellement prepare a repondre aux doutes. Apprendre les arguments et comprendre la religion comparee rend le musulman capable de defendre sa foi par la raison et la preuve.',verse:'Et discute avec eux de la meilleure maniere',verseRef:'An-Nahl 125',hadith:'Le savoir ne s\'acquiert que par l\'apprentissage — Bukhari',action:'Lisez aujourd\'hui sur une idee fausse courante sur l\'Islam et apprenez a la refuter avec des preuves',young:'Sois intelligent et prepare ! Apprends a repondre aux questions sur ta religion avec confiance 🧠'}
  },
  {
    id:16, emoji:'📡',
    ar:{title:'التلاعب الإعلامي المنظم',desc:'وسائل الإعلام الكبرى قد تُستخدم كأداة ممنهجة لتشويه صورة الإسلام من خلال انتقاء الأخبار السلبية وتضخيمها وتجاهل الإيجابيات. يُصنع المحتوى بعناية ليرسم صورة نمطية مخيفة عن المسلمين. الوعي بهذه الآلية هو الخطوة الأولى لمقاومتها — تعلّم كيف تقرأ ما بين السطور وتحلل الرسائل المخفية في كل خبر.',verse:'وَإِذَا جَاءَهُمْ أَمْرٌ مِنَ الْأَمْنِ أَوِ الْخَوْفِ أَذَاعُوا بِهِ وَلَوْ رَدُّوهُ إِلَى الرَّسُولِ وَإِلَى أُولِي الْأَمْرِ مِنْهُمْ لَعَلِمَهُ الَّذِينَ يَسْتَنْبِطُونَهُ مِنْهُمْ',verseRef:'النساء ٨٣',hadith:'إن من أشر الناس عند الله منزلة يوم القيامة الرجل يفضي إلى امرأته وتفضي إليه ثم ينشر سرها — رواه مسلم',action:'حلّل خبراً عن الإسلام في وسائل الإعلام اليوم — اسأل نفسك: ما المصدر؟ ما السياق المحذوف؟ ما الهدف؟',young:'ليس كل ما تراه في الأخبار صحيحاً! تعلّم أن تسأل: من كتب هذا؟ ولماذا؟ 📡'},
    en:{title:'Organized Media Manipulation',desc:'Major media outlets can be used as systematic tools to distort the image of Islam by selectively amplifying negative news while ignoring positives. Content is carefully crafted to paint a frightening stereotype of Muslims. Awareness of this mechanism is the first step to resisting it — learn to read between the lines and analyze hidden messages in every report.',verse:'And when there comes to them information about security or fear, they spread it around. But if they had referred it back to the Messenger or those in authority, those who can draw correct conclusions would have known',verseRef:'An-Nisa 83',hadith:'Among the most evil of people before Allah on the Day of Resurrection is the man who goes to his wife and she to him, then he spreads her secrets — Muslim',action:'Analyze a news story about Islam in the media today — ask yourself: What is the source? What context is missing? What is the goal?',young:'Not everything you see in the news is true! Learn to ask: Who wrote this? And why? 📡'},
    fr:{title:'La Manipulation Mediatique Organisee',desc:'Les grands medias peuvent etre utilises comme outils systematiques pour deformer l\'image de l\'Islam en selectionnant et en amplifiant les nouvelles negatives tout en ignorant les positives. Le contenu est soigneusement elabore pour peindre un stereotype effrayant des musulmans. La prise de conscience de ce mecanisme est la premiere etape pour y resister.',verse:'Et quand leur parvient une nouvelle touchant la securite ou la peur, ils la diffusent. S\'ils la renvoyaient au Messager et aux detenteurs de l\'autorite, ceux d\'entre eux qui cherchent a etre eclaires l\'auraient su',verseRef:'An-Nisa 83',hadith:'Parmi les pires gens aupres d\'Allah au Jour de la Resurrection est l\'homme qui va vers sa femme puis divulgue ses secrets — Muslim',action:'Analysez une nouvelle sur l\'Islam dans les medias aujourd\'hui — demandez-vous : Quelle est la source ? Quel contexte manque ? Quel est le but ?',young:'Tout ce que tu vois dans les nouvelles n\'est pas vrai ! Apprends a demander : Qui a ecrit cela ? Et pourquoi ? 📡'}
  },
  {
    id:17, emoji:'📲',
    ar:{title:'التحدي الرقمي وحماية الشباب',desc:'وسائل التواصل الاجتماعي أصبحت ساحة جديدة للتأثير على عقول الشباب المسلم. المحتوى المصمم بعناية يستهدف المراهقين بأسلوب جذاب يبعدهم عن هويتهم تدريجياً. الخوارزميات تعزز المحتوى المثير وتهمش المحتوى البنّاء. على الأسرة والمجتمع تعليم الشباب مهارات التفكير النقدي الرقمي وكيفية استخدام هذه المنصات بوعي ومسؤولية.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا',verseRef:'الأحزاب ٧٠',hadith:'كل مولود يولد على الفطرة فأبواه يهوّدانه أو ينصّرانه أو يمجّسانه — متفق عليه',action:'راجع إعدادات الخصوصية في حساباتك على وسائل التواصل وتابع صفحات إسلامية تثري معرفتك',young:'الإنترنت مفيد لكن فيه أيضاً أشياء تريد تغييرك! كن ذكياً واختر المحتوى الجيد 📲'},
    en:{title:'The Digital Challenge and Protecting Youth',desc:'Social media has become a new arena for influencing the minds of Muslim youth. Carefully designed content targets teenagers with an attractive style that gradually distances them from their identity. Algorithms amplify sensational content and marginalize constructive material. Families and communities must teach youth digital critical thinking skills and how to use these platforms with awareness and responsibility.',verse:'O you who believe, fear Allah and speak words of appropriate justice',verseRef:'Al-Ahzab 70',hadith:'Every child is born upon the fitrah, then their parents make them Jewish, Christian, or Zoroastrian — Agreed upon',action:'Review privacy settings on your social media accounts and follow Islamic pages that enrich your knowledge',young:'The internet is useful but it also has things that want to change you! Be smart and choose good content 📲'},
    fr:{title:'Le Defi Numerique et la Protection des Jeunes',desc:'Les reseaux sociaux sont devenus un nouveau champ d\'influence sur les esprits des jeunes musulmans. Le contenu soigneusement concu cible les adolescents avec un style attrayant qui les eloigne progressivement de leur identite. Les algorithmes amplifient le contenu sensationnel et marginalisent le contenu constructif. Les familles et les communautes doivent enseigner aux jeunes la pensee critique numerique.',verse:'O vous qui croyez, craignez Allah et dites des paroles justes',verseRef:'Al-Ahzab 70',hadith:'Chaque enfant nait selon la fitrah, puis ses parents en font un juif, un chretien ou un zoroastrien — Unanimement reconnu',action:'Verifiez les parametres de confidentialite de vos comptes de reseaux sociaux et suivez des pages islamiques enrichissantes',young:'Internet est utile mais il y a aussi des choses qui veulent te changer ! Sois intelligent et choisis le bon contenu 📲'}
  },
  {
    id:18, emoji:'🛡️',
    ar:{title:'حماية الأطفال في العصر الرقمي',desc:'الأطفال اليوم يتعرضون لمؤثرات أكثر بكثير من أي جيل سابق عبر الأجهزة اللوحية والهواتف الذكية. المحتوى الموجه للأطفال قد يحمل رسائل خفية تتعارض مع القيم الإسلامية. على الوالدين مراقبة ما يشاهده أطفالهم وتوفير بدائل إسلامية جذابة — قصص أنبياء مصورة، تطبيقات قرآنية تفاعلية، ألعاب تعليمية إسلامية.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنْفُسَكُمْ وَأَهْلِيكُمْ نَارًا وَقُودُهَا النَّاسُ وَالْحِجَارَةُ',verseRef:'التحريم ٦',hadith:'ما من عبد يسترعيه الله رعية يموت يوم يموت وهو غاش لرعيته إلا حرم الله عليه الجنة — متفق عليه',action:'راجع التطبيقات على هاتف طفلك اليوم وحمّل له تطبيقاً إسلامياً تعليمياً مفيداً',young:'استمتع بالألعاب والفيديوهات الإسلامية! فيها مغامرات ممتعة وقصص أنبياء رائعة 🛡️'},
    en:{title:'Protecting Children in the Digital Age',desc:'Children today are exposed to far more influences than any previous generation through tablets and smartphones. Content directed at children may carry hidden messages that conflict with Islamic values. Parents must monitor what their children watch and provide attractive Islamic alternatives — animated prophet stories, interactive Quran apps, educational Islamic games.',verse:'O you who believe, protect yourselves and your families from a Fire whose fuel is people and stones',verseRef:'At-Tahrim 6',hadith:'No servant whom Allah entrusts with a flock dies while being dishonest to them except that Allah forbids him Paradise — Agreed upon',action:'Review the apps on your child\'s phone today and download a beneficial Islamic educational app',young:'Enjoy Islamic games and videos! They have exciting adventures and amazing prophet stories 🛡️'},
    fr:{title:'Proteger les Enfants a l\'Ere Numerique',desc:'Les enfants d\'aujourd\'hui sont exposes a beaucoup plus d\'influences que toute generation precedente via les tablettes et les smartphones. Le contenu destine aux enfants peut contenir des messages caches contraires aux valeurs islamiques. Les parents doivent surveiller ce que regardent leurs enfants et fournir des alternatives islamiques attrayantes — histoires animees de prophetes, applications coraniques interactives, jeux educatifs islamiques.',verse:'O vous qui croyez, protegez-vous et vos familles d\'un Feu dont le combustible est les gens et les pierres',verseRef:'At-Tahrim 6',hadith:'Aucun serviteur a qui Allah confie un troupeau ne meurt en etant malhonnete envers eux sans qu\'Allah ne lui interdise le Paradis — Unanimement reconnu',action:'Verifiez les applications sur le telephone de votre enfant aujourd\'hui et telechargez une application educative islamique',young:'Profite des jeux et des videos islamiques ! Il y a des aventures passionnantes et des histoires de prophetes incroyables 🛡️'}
  },
  {
    id:19, emoji:'🌱',
    ar:{title:'بناء البدائل الإسلامية',desc:'أفضل دفاع هو بناء بدائل إسلامية قوية وجذابة في كل مجال: قنوات يوتيوب إسلامية للأطفال، مدارس تجمع بين التميز الأكاديمي والتربية الإيمانية، مخيمات صيفية إسلامية، مسابقات علمية ودينية. عندما يجد الشاب بيئة إسلامية نابضة بالحياة لا يبحث عن بدائل أخرى. المبادرة خير من الانتظار.',verse:'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ',verseRef:'التوبة ١٠٥',hadith:'إن قامت الساعة وفي يد أحدكم فسيلة فليغرسها — رواه أحمد',action:'ابدأ مشروعاً صغيراً يخدم شباب المسلمين — صفحة تعليمية أو نادي قراءة إسلامي',young:'لنبني أشياء رائعة معاً! نوادي، مسابقات، فيديوهات — كل شيء إسلامي وممتع! 🌱'},
    en:{title:'Building Islamic Alternatives',desc:'The best defense is building strong and attractive Islamic alternatives in every field: Islamic YouTube channels for children, schools combining academic excellence with faith-based education, Islamic summer camps, scientific and religious competitions. When youth find a vibrant Islamic environment, they do not look for other alternatives. Initiative is better than waiting.',verse:'And say: Work, for Allah will see your deeds, and His Messenger and the believers',verseRef:'At-Tawbah 105',hadith:'If the Hour comes and one of you has a seedling in hand, let them plant it — Ahmad',action:'Start a small project serving Muslim youth — an educational page or an Islamic reading club',young:'Let\'s build amazing things together! Clubs, competitions, videos — everything Islamic and fun! 🌱'},
    fr:{title:'Construire des Alternatives Islamiques',desc:'La meilleure defense est de construire des alternatives islamiques fortes et attrayantes dans tous les domaines : chaines YouTube islamiques pour enfants, ecoles combinant excellence academique et education spirituelle, camps d\'ete islamiques, competitions scientifiques et religieuses. Quand les jeunes trouvent un environnement islamique dynamique, ils ne cherchent pas d\'autres alternatives. L\'initiative vaut mieux que l\'attente.',verse:'Et dis : Oeuvrez, car Allah verra vos oeuvres, ainsi que Son Messager et les croyants',verseRef:'At-Tawbah 105',hadith:'Si l\'Heure arrive et que l\'un de vous a un plant en main, qu\'il le plante — Ahmad',action:'Lancez un petit projet servant les jeunes musulmans — une page educative ou un club de lecture islamique',young:'Construisons des choses incroyables ensemble ! Clubs, competitions, videos — tout islamique et amusant ! 🌱'}
  },
  {
    id:20, emoji:'🏆',
    ar:{title:'قصص نجاح المقاومة الثقافية',desc:'عبر التاريخ، نجحت مجتمعات إسلامية كثيرة في مقاومة محاولات التغيير الثقافي والحفاظ على هويتها. من تجربة الجزائر في الحفاظ على العربية رغم مئة وثلاثين عاماً من الاستعمار الفرنسي، إلى نجاح المدارس الإسلامية في ماليزيا وتركيا في بناء جيل واعٍ متمسك بهويته. هذه القصص تثبت أن الإرادة والإيمان أقوى من أي محاولة لتغيير الهوية.',verse:'إِنْ تَنْصُرُوا اللَّهَ يَنْصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ',verseRef:'محمد ٧',hadith:'لا تزال طائفة من أمتي على الحق ظاهرين لا يضرهم من خالفهم — رواه مسلم',action:'ابحث عن قصة نجاح لمجتمع إسلامي حافظ على هويته وشاركها مع أصدقائك',young:'الأبطال لا يستسلمون! كثير من المسلمين حافظوا على دينهم رغم كل الصعوبات — كن مثلهم! 🏆'},
    en:{title:'Success Stories of Cultural Resistance',desc:'Throughout history, many Islamic communities have successfully resisted cultural change attempts and preserved their identity. From Algeria\'s experience preserving Arabic despite 130 years of French colonialism, to the success of Islamic schools in Malaysia and Turkey in building a generation that is aware and connected to its identity. These stories prove that willpower and faith are stronger than any attempt to change identity.',verse:'If you support Allah, He will support you and plant firmly your feet',verseRef:'Muhammad 7',hadith:'A group of my Ummah will always remain upon the truth, prevailing, and those who oppose them will not harm them — Muslim',action:'Research a success story of an Islamic community that preserved its identity and share it with your friends',young:'Heroes never give up! Many Muslims preserved their religion despite all difficulties — be like them! 🏆'},
    fr:{title:'Histoires de Succes de Resistance Culturelle',desc:'A travers l\'histoire, de nombreuses communautes islamiques ont reussi a resister aux tentatives de changement culturel et a preserver leur identite. De l\'experience de l\'Algerie dans la preservation de l\'arabe malgre 130 ans de colonialisme francais, au succes des ecoles islamiques en Malaisie et en Turquie dans la construction d\'une generation consciente et attachee a son identite. Ces histoires prouvent que la volonte et la foi sont plus fortes que toute tentative de changer l\'identite.',verse:'Si vous soutenez Allah, Il vous soutiendra et affermira vos pas',verseRef:'Muhammad 7',hadith:'Un groupe de ma communaute restera toujours sur la verite, prevalant, et ceux qui s\'opposent a eux ne leur nuiront pas — Muslim',action:'Recherchez une histoire de succes d\'une communaute islamique qui a preserve son identite et partagez-la avec vos amis',young:'Les heros n\'abandonnent jamais ! Beaucoup de musulmans ont preserve leur religion malgre toutes les difficultes — sois comme eux ! 🏆'}
  }
];

// ═══════════════ QUIZ DATA (10 Questions) ═══════════════
const QUIZ = [
  {
    ar:{q:'أكمل الآية: "ولن ترضى عنك اليهود ولا النصارى حتى تتّبع ..."',opts:['سنتهم','طريقهم','ملتهم','أمرهم'],correct:2,hint:'الآية في سورة البقرة',quran:'البقرة ١٢٠'},
    en:{q:'Complete the verse: "And never will the Jews or Christians approve of you until you follow their..."',opts:['Tradition','Way','Religion','Command'],correct:2,hint:'This verse is in Surah Al-Baqarah',quran:'Al-Baqarah 120'},
    fr:{q:'Completez le verset : "Et jamais les Juifs ni les Chretiens ne seront satisfaits de toi jusqu\'a ce que tu suives leur..."',opts:['Tradition','Voie','Religion','Ordre'],correct:2,hint:'Ce verset est dans Sourate Al-Baqarah',quran:'Al-Baqarah 120'}
  },
  {
    ar:{q:'ما أقوى سلاح لحماية هوية المسلم؟',opts:['المال','السلاح','العلم الشرعي','العزلة'],correct:2,hint:'من يعرف دينه لا يسهل خداعه',quran:'الزمر ٩'},
    en:{q:'What is the strongest weapon to protect Muslim identity?',opts:['Money','Weapons','Islamic knowledge','Isolation'],correct:2,hint:'Those who know their religion are not easily deceived',quran:'Az-Zumar 9'},
    fr:{q:'Quelle est l\'arme la plus puissante pour proteger l\'identite musulmane ?',opts:['L\'argent','Les armes','Le savoir islamique','L\'isolement'],correct:2,hint:'Ceux qui connaissent leur religion ne sont pas facilement trompes',quran:'Az-Zumar 9'}
  },
  {
    ar:{q:'أكمل الحديث: "لا يُلدغ المؤمن من ... واحد مرتين"',opts:['طريق','باب','جحر','مكان'],correct:2,hint:'حديث عن التعلم من التجارب',quran:'آل عمران ١٣٧'},
    en:{q:'Complete the hadith: "A believer is not stung from the same ... twice"',opts:['Path','Door','Hole','Place'],correct:2,hint:'A hadith about learning from experiences',quran:'Al Imran 137'},
    fr:{q:'Completez le hadith : "Le croyant n\'est pas pique deux fois du meme..."',opts:['Chemin','Porte','Trou','Endroit'],correct:2,hint:'Un hadith sur l\'apprentissage des experiences',quran:'Al Imran 137'}
  },
  {
    ar:{q:'في أي سورة وردت آية "إن جاءكم فاسق بنبأ فتبينوا"؟',opts:['البقرة','النساء','الحجرات','المائدة'],correct:2,hint:'سورة تتحدث عن آداب التعامل بين المسلمين',quran:'الحجرات ٦'},
    en:{q:'In which surah does the verse "if a wrongdoer comes to you with news, investigate" appear?',opts:['Al-Baqarah','An-Nisa','Al-Hujurat','Al-Ma\'idah'],correct:2,hint:'A surah about etiquette among Muslims',quran:'Al-Hujurat 6'},
    fr:{q:'Dans quelle sourate apparait le verset "si un pervers vous apporte une nouvelle, verifiez-la" ?',opts:['Al-Baqarah','An-Nisa','Al-Hujurat','Al-Ma\'idah'],correct:2,hint:'Une sourate sur l\'etiquette entre musulmans',quran:'Al-Hujurat 6'}
  },
  {
    ar:{q:'مؤلف كتاب "صيحة تحذير من دعاة التنصير" هو:',opts:['يوسف القرضاوي','أحمد ديدات','محمد الغزالي','سيد قطب'],correct:2,hint:'عالم مصري لُقب بأديب الدعوة',quran:'البقرة ١٢٠'},
    en:{q:'The author of "A Warning Cry Against Missionaries" is:',opts:['Yusuf al-Qaradawi','Ahmed Deedat','Mohammed al-Ghazali','Sayyid Qutb'],correct:2,hint:'An Egyptian scholar nicknamed "The Literary Preacher"',quran:'Al-Baqarah 120'},
    fr:{q:'L\'auteur de "Un Cri d\'Alerte contre les Missionnaires" est :',opts:['Yusuf al-Qaradawi','Ahmed Deedat','Mohammed al-Ghazali','Sayyid Qutb'],correct:2,hint:'Un savant egyptien surnomme "Le Litteraire de la Predication"',quran:'Al-Baqarah 120'}
  },
  {
    ar:{q:'ما الحصن الأول لحماية الأطفال المسلمين؟',opts:['المدرسة','المسجد','الأسرة','الحكومة'],correct:2,hint:'هي النواة الأولى للمجتمع',quran:'التحريم ٦'},
    en:{q:'What is the first fortress for protecting Muslim children?',opts:['School','Mosque','Family','Government'],correct:2,hint:'It is the first nucleus of society',quran:'At-Tahrim 6'},
    fr:{q:'Quelle est la premiere forteresse pour proteger les enfants musulmans ?',opts:['L\'ecole','La mosquee','La famille','Le gouvernement'],correct:2,hint:'C\'est le premier noyau de la societe',quran:'At-Tahrim 6'}
  },
  {
    ar:{q:'أكمل الحديث: "من تشبّه بقوم فهو ..."',opts:['مثلهم','معهم','منهم','عندهم'],correct:2,hint:'حديث عن التقليد الأعمى',quran:'المائدة ٧٧'},
    en:{q:'Complete the hadith: "Whoever imitates a people is ... them"',opts:['Like','With','One of','Near'],correct:2,hint:'A hadith about blind imitation',quran:'Al-Ma\'idah 77'},
    fr:{q:'Completez le hadith : "Quiconque imite un peuple en fait..."',opts:['Ressemble','Est avec','Partie','Proche'],correct:2,hint:'Un hadith sur l\'imitation aveugle',quran:'Al-Ma\'idah 77'}
  },
  {
    ar:{q:'ما المقصود بـ"الغزو الفكري"؟',opts:['الحرب العسكرية','محاولة تغيير أفكار وقيم الأمة','التجارة الدولية','السياحة الثقافية'],correct:1,hint:'غزو بالأفكار لا بالأسلحة',quran:'البقرة ١٢٠'},
    en:{q:'What is meant by "intellectual invasion"?',opts:['Military war','Attempting to change a nation\'s ideas and values','International trade','Cultural tourism'],correct:1,hint:'Invasion with ideas, not weapons',quran:'Al-Baqarah 120'},
    fr:{q:'Que signifie "l\'invasion intellectuelle" ?',opts:['La guerre militaire','Tenter de changer les idees et les valeurs d\'une nation','Le commerce international','Le tourisme culturel'],correct:1,hint:'L\'invasion par les idees, pas par les armes',quran:'Al-Baqarah 120'}
  },
  {
    ar:{q:'ما أسلوب الدعوة الذي يأمر به القرآن؟',opts:['بالقوة','بالحكمة والموعظة الحسنة','بالتهديد','بالمال'],correct:1,hint:'من سورة النحل',quran:'النحل ١٢٥'},
    en:{q:'What method of calling does the Quran command?',opts:['By force','With wisdom and good instruction','By threats','With money'],correct:1,hint:'From Surah An-Nahl',quran:'An-Nahl 125'},
    fr:{q:'Quelle methode d\'appel le Coran ordonne-t-il ?',opts:['Par la force','Par la sagesse et la bonne exhortation','Par les menaces','Par l\'argent'],correct:1,hint:'De Sourate An-Nahl',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'أكمل الحديث: "المؤمن القوي خير و... إلى الله من المؤمن الضعيف"',opts:['أقرب','أحب','أعلى','أعز'],correct:1,hint:'حديث عن القوة بكل أنواعها',quran:'الأنفال ٦٠'},
    en:{q:'Complete the hadith: "The strong believer is better and more ... to Allah than the weak believer"',opts:['Near','Beloved','High','Honored'],correct:1,hint:'A hadith about strength in all its forms',quran:'Al-Anfal 60'},
    fr:{q:'Completez le hadith : "Le croyant fort est meilleur et plus ... d\'Allah que le croyant faible"',opts:['Proche','Aime','Eleve','Honore'],correct:1,hint:'Un hadith sur la force sous toutes ses formes',quran:'Al-Anfal 60'}
  },
  {
    ar:{q:'ما أخطر وسيلة تستخدم اليوم للتأثير على عقول الشباب المسلم؟',opts:['الكتب المطبوعة','وسائل التواصل الاجتماعي','المحاضرات الأكاديمية','البريد التقليدي'],correct:1,hint:'المنصات الرقمية وصلت لمليارات الشباب',quran:'الأحزاب ٧٠'},
    en:{q:'What is the most dangerous tool used today to influence the minds of Muslim youth?',opts:['Printed books','Social media','Academic lectures','Traditional mail'],correct:1,hint:'Digital platforms have reached billions of youth',quran:'Al-Ahzab 70'},
    fr:{q:'Quel est l\'outil le plus dangereux utilise aujourd\'hui pour influencer les esprits des jeunes musulmans ?',opts:['Les livres imprimes','Les reseaux sociaux','Les conferences academiques','Le courrier traditionnel'],correct:1,hint:'Les plateformes numeriques ont atteint des milliards de jeunes',quran:'Al-Ahzab 70'}
  },
  {
    ar:{q:'أكمل الآية: "إِنْ تَنْصُرُوا اللَّهَ ..." وَيُثَبِّتْ أَقْدَامَكُمْ',opts:['يرزقكم','يهديكم','ينصركم','يعلّمكم'],correct:2,hint:'وعد الله لمن ينصر دينه',quran:'محمد ٧'},
    en:{q:'Complete the verse: "If you support Allah, He will ... you and plant firmly your feet"',opts:['Provide for','Guide','Support','Teach'],correct:2,hint:'Allah\'s promise to those who support His religion',quran:'Muhammad 7'},
    fr:{q:'Completez le verset : "Si vous soutenez Allah, Il vous ... et affermira vos pas"',opts:['Pourvoira','Guidera','Soutiendra','Enseignera'],correct:2,hint:'La promesse d\'Allah a ceux qui soutiennent Sa religion',quran:'Muhammad 7'}
  },
  {
    ar:{q:'ما أول خطوة لمقاومة التلاعب الإعلامي؟',opts:['مقاطعة كل وسائل الإعلام','الوعي بآليات التلاعب','إنشاء قنوات جديدة','تجاهل الأخبار تماماً'],correct:1,hint:'المعرفة هي أول سلاح',quran:'النساء ٨٣'},
    en:{q:'What is the first step to resist media manipulation?',opts:['Boycotting all media','Awareness of manipulation mechanisms','Creating new channels','Ignoring news completely'],correct:1,hint:'Knowledge is the first weapon',quran:'An-Nisa 83'},
    fr:{q:'Quelle est la premiere etape pour resister a la manipulation mediatique ?',opts:['Boycotter tous les medias','La conscience des mecanismes de manipulation','Creer de nouvelles chaines','Ignorer completement les nouvelles'],correct:1,hint:'La connaissance est la premiere arme',quran:'An-Nisa 83'}
  },
  {
    ar:{q:'أكمل الحديث: "كل مولود يولد على الفطرة فأبواه ..."',opts:['يعلّمانه ويثقّفانه','يهوّدانه أو ينصّرانه أو يمجّسانه','يحبّانه ويكرمانه','يطعمانه ويسقيانه'],correct:1,hint:'دور الوالدين في توجيه الأبناء',quran:'الأحزاب ٧٠'},
    en:{q:'Complete the hadith: "Every child is born upon the fitrah, then their parents..."',opts:['Educate and enlighten them','Make them Jewish, Christian, or Zoroastrian','Love and honor them','Feed and hydrate them'],correct:1,hint:'The role of parents in guiding children',quran:'Al-Ahzab 70'},
    fr:{q:'Completez le hadith : "Chaque enfant nait selon la fitrah, puis ses parents..."',opts:['L\'eduquent et l\'eclairent','En font un juif, un chretien ou un zoroastrien','L\'aiment et l\'honorent','Le nourrissent et l\'abreuvent'],correct:1,hint:'Le role des parents dans l\'orientation des enfants',quran:'Al-Ahzab 70'}
  },
  {
    ar:{q:'ما البلد الذي حافظ على العربية رغم ١٣٠ عاماً من الاستعمار الفرنسي؟',opts:['المغرب','تونس','الجزائر','موريتانيا'],correct:2,hint:'أطول استعمار فرنسي في شمال أفريقيا',quran:'محمد ٧'},
    en:{q:'Which country preserved Arabic despite 130 years of French colonialism?',opts:['Morocco','Tunisia','Algeria','Mauritania'],correct:2,hint:'The longest French colonialism in North Africa',quran:'Muhammad 7'},
    fr:{q:'Quel pays a preserve l\'arabe malgre 130 ans de colonialisme francais ?',opts:['Le Maroc','La Tunisie','L\'Algerie','La Mauritanie'],correct:2,hint:'Le plus long colonialisme francais en Afrique du Nord',quran:'Muhammad 7'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء الثبات',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'آل عمران ٨'},
    en:{label:'Dua for Steadfastness',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Our Lord, do not let our hearts deviate after You have guided us, and grant us mercy — Al Imran 8'},
    fr:{label:'Dua pour la Fermete',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Notre Seigneur, ne fais pas devier nos coeurs apres que Tu nous as guides et accorde-nous misericorde — Al Imran 8'} },
  { ar:{label:'دعاء الحماية',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ',tr:'رواه مسلم'},
    en:{label:'Dua for Protection',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ',tr:'O Allah, I seek refuge in You from trials, both apparent and hidden — Muslim'},
    fr:{label:'Dua pour la Protection',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ',tr:'O Allah, je cherche refuge aupres de Toi contre les epreuves, apparentes et cachees — Muslim'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him. I rely on Him, Lord of the Great Throne — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets a Lui, Seigneur du Trone immense — At-Tawbah 129'} },
  { ar:{label:'دعاء النصرة',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Victory',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience, plant firmly our feet, and give us victory — Al-Baqarah 250'},
    fr:{label:'Dua pour la Victoire',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, deverse sur nous la patience, affermis nos pas et donne-nous la victoire — Al-Baqarah 250'} },
  { ar:{label:'دعاء حفظ الذرية',text:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',tr:'الفرقان ٧٤'},
    en:{label:'Dua for Offspring',text:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',tr:'Our Lord, grant us from our spouses and offspring comfort to our eyes and make us leaders for the righteous — Al-Furqan 74'},
    fr:{label:'Dua pour la Descendance',text:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',tr:'Notre Seigneur, accorde-nous en nos epouses et descendants la fraicheur des yeux et fais de nous un guide pour les pieux — Al-Furqan 74'} },
  { ar:{label:'دعاء التثبيت',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'رواه الترمذي'},
    en:{label:'Dua for Firm Heart',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Turner of hearts, make my heart firm upon Your religion — Tirmidhi'},
    fr:{label:'Dua pour un Coeur Ferme',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Celui qui retourne les coeurs, affermis mon coeur sur Ta religion — Tirmidhi'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'sayhah-xp';
const BADGES_KEY = 'sayhah-badges';
const READ_KEY = 'sayhah-read';
const STREAK_KEY = 'sayhah-streak';
const MODE_KEY = 'sayhah-mode';
const QUIZ_BEST_KEY = 'sayhah-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) { const xp = getXP() + pts; localStorage.setItem(XP_KEY, xp); checkBadges(xp); updateXPDisplay(); return xp; }
function getLevel(xp) { if (xp >= 1000) return 5; if (xp >= 500) return 4; if (xp >= 300) return 3; if (xp >= 100) return 2; return 1; }
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) { const earned = getEarnedBadges(); BADGE_DEFS.forEach(b => { if (xp >= b.xp && !earned.includes(b.id)) { earned.push(b.id); localStorage.setItem(BADGES_KEY, JSON.stringify(earned)); showToast(`${b.emoji} ${b[lang]}!`); playSound('success'); } }); }
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) { const read = getReadCards(); if (!read.includes(id)) { read.push(id); localStorage.setItem(READ_KEY, JSON.stringify(read)); addXP(10); } }

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() { const today = new Date().toDateString(); const s = getStreak(); if (s.lastDate === today) return s.count; const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1); if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; } s.lastDate = today; localStorage.setItem(STREAK_KEY, JSON.stringify(s)); return s.count; }

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() { ageMode = ageMode === 'young' ? 'teen' : 'young'; localStorage.setItem(MODE_KEY, ageMode); document.body.classList.toggle('young-mode', ageMode === 'young'); renderAll(); showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode); playSound('theme'); }

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); renderAll(); }
function cycleTheme() { const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length; currentTheme = THEMES[idx]; document.documentElement.dataset.theme = currentTheme; { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; } playSound('theme'); }

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabCards'); if(_e) _e.textContent=t.tabCards; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=document.getElementById('cardsTitle'); if(_e) _e.textContent=t.cardsTitle; }
  { const _e=document.getElementById('cardsDesc'); if(_e) _e.textContent=t.cardsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  renderHome(); renderCards(); renderProgress(); renderAbout(); renderHelp(); renderDuas(); renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang]; const dayIdx = new Date().getDate() % CARDS.length; const card = CARDS[dayIdx]; const d = card[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${card.emoji} ${d.title}</div><div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div><div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`;
  (document.getElementById('homeGrid')||{}).innerHTML= CARDS.map(c => { const dd = c[lang]; return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')"><span class="hc-icon">${c.emoji}</span><div class="hc-title">${dd.title}</div></div>`; }).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang]; const readCards = getReadCards(); const container = document.getElementById('cardsContainer');
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`;
  container.innerHTML = searchHTML + CARDS.map(c => { const d = c[lang]; const isRead = readCards.includes(c.id);
    return `<div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}"><div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})"><span class="trait-num">${c.id}</span><span class="trait-emoji">${c.emoji}</span><span class="trait-title">${d.title}</span>${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}<span class="trait-chev">&#9660;</span></div><div class="trait-body"><div class="trait-inner"><div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div><div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div><div class="hadith-box"><span class="hadith-label">📜 ${t.hadith}</span><div class="hadith-text">${d.hadith}</div></div><div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div><button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button></div></div></div>`; }).join('');
}

function filterCards(query) { const cards = document.querySelectorAll('.trait-card'); const q = query.toLowerCase(); cards.forEach(card => { const title = card.querySelector('.trait-title').textContent.toLowerCase(); const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : ''; card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none'; }); }
function shareCard(id) { const card = CARDS.find(c => c.id === id); if (!card) return; const d = card[lang]; const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`; if (navigator.share) { navigator.share({ title: d.title, text }); } else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); } }

// ═══════════════ RENDER: QUIZ ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };
function renderQuiz() { quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true }; showQuizQuestion(); }

function showQuizQuestion() {
  const t = T[lang]; const container = document.getElementById('quizContainer'); const result = document.getElementById('quizResult'); result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang]; const total = QUIZ.length; const num = quizState.current + 1;
  container.innerHTML = `<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div><div class="quiz-counter">${num} / ${total}</div><div class="quiz-question-card scroll-reveal"><div class="quiz-q-text">${q.q}</div><div class="quiz-options" id="quizOpts">${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div><div class="quiz-lifelines"><button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button><button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button><button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button></div><div id="quizFeedback" class="quiz-feedback hidden"></div></div>`;
}

function answerQuiz(idx) { if (!quizState.active) return; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const opts = document.querySelectorAll('.quiz-opt'); opts.forEach((o, i) => { o.disabled = true; if (i === correct) o.classList.add('correct'); if (i === idx && i !== correct) o.classList.add('wrong'); }); const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); if (idx === correct) { quizState.score++; addXP(5); feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`; playSound('success'); } else { feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`; playSound('click'); } quizState.answers.push(idx); quizState.current++; setTimeout(() => showQuizQuestion(), 1800); }
function useFiftyFifty() { if (!quizState.lifelines.fifty) return; quizState.lifelines.fifty = false; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const wrongIdxs = [0,1,2,3].filter(i => i !== correct); const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2); toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }}); document.querySelector('.lifeline-btn').classList.add('used'); playSound('click'); }
function useHint() { if (!quizState.lifelines.hint) return; quizState.lifelines.hint = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`; playSound('click'); }
function useQuranRef() { if (!quizState.lifelines.quran) return; quizState.lifelines.quran = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`; playSound('click'); }

function showQuizResult() {
  const t = T[lang]; const total = QUIZ.length; const pct = Math.round(quizState.score / total * 100); const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct); addXP(20);
  let emoji, title; if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; } else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; } else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= ''; const result = document.getElementById('quizResult'); result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${quizState.score}/${total}</div><div class="qr-title">${title}</div><div class="qr-desc">${pct}%</div><button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' }); if (pct >= 80) launchConfetti(); quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang]; const xp = getXP(); const level = getLevel(xp); const streak = getStreak().count; const readCards = getReadCards(); const earned = getEarnedBadges(); const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id)); const nextXP = nextBadge ? nextBadge.xp : 1000; const progressPct = Math.min(100, (xp / nextXP) * 100);
  (document.getElementById('progressContainer')||{}).innerHTML= `<div class="progress-xp-card"><div class="xp-header"><span class="xp-icon">⭐</span><span class="xp-amount">${xp} ${t.xpLabel}</span></div><div class="xp-bar-wrap"><div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div><span class="xp-level">${t.levelLabel} ${level}</span></div>${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}</div>${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}<div class="progress-stats"><div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div><div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div><div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div></div><div class="badges-section"><h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3><div class="badges-grid">${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}</div></div>`;
}
function updateXPDisplay() { const panel = document.getElementById('panel-progress'); if (panel && panel.classList.contains('active')) renderProgress(); }

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: { disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.', authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦', authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.', bookTitle:'عن الكتاب', bookDesc:'«صيحة تحذير من دعاة التنصير» كتاب يكشف أساليب استهداف المسلمين ثقافياً ودينياً. يوضح الشيخ الغزالي كيف يُستغل الفقر والجهل لتغيير عقائد المسلمين، ويقدم حلولاً عملية لحماية الهوية الإسلامية من خلال التعليم والتنمية والوعي.', sourcesTitle:'المصادر', sources:['كتاب "صيحة تحذير من دعاة التنصير" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'], contact:'تواصل: abdelhak.bourdim@gmail.com' },
    en: { disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.', bookTitle:'About the Book', bookDesc:'"A Warning Cry Against Missionaries" exposes methods of targeting Muslims culturally and religiously. Sheikh al-Ghazali explains how poverty and ignorance are exploited to change Muslim beliefs, and offers practical solutions to protect Islamic identity through education, development, and awareness.', sourcesTitle:'Sources', sources:['"A Warning Cry Against Missionaries" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'], contact:'Contact: abdelhak.bourdim@gmail.com' },
    fr: { disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.', bookTitle:'A Propos du Livre', bookDesc:'"Un Cri d\'Alerte contre les Missionnaires" expose les methodes de ciblage des musulmans culturellement et religieusement. Le Sheikh al-Ghazali explique comment la pauvrete et l\'ignorance sont exploitees pour changer les croyances des musulmans, et offre des solutions pratiques pour proteger l\'identite islamique par l\'education, le developpement et la sensibilisation.', sourcesTitle:'Sources', sources:['"Un Cri d\'Alerte contre les Missionnaires" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'], contact:'Contact : abdelhak.bourdim@gmail.com' }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "صيحة تحذير من دعاة التنصير" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},{title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},{title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},{title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},{title:'📚 Sources',body:'"A Warning Cry Against Missionaries" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 cards, interactive quiz, XP and badges system, 2 age modes.'},{title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},{title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'"Un Cri d\'Alerte contre les Missionnaires" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 cartes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},{title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},{title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'}]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() { (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = { ar:['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ دعاء الثبات والحماية','⭐ أكمل ٢٠ بطاقة لتصبح خبيراً'], en:['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget duas for steadfastness','⭐ Complete all 20 cards to become an Expert'], fr:['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour la fermete','⭐ Completez les 20 cartes pour devenir Expert'] };
  const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() { const features = document.getElementById('splashFeatures'); if (features) { features.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join(''); } let count = 5; const counter = document.getElementById('splashCount'); splashTimer = setInterval(() => { count--; if (counter) counter.textContent = count; if (count <= 0) dismissSplash(); }, 1000); }
function dismissSplash() { clearInterval(splashTimer); const splash = document.getElementById('splash'); if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); } }

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { switchTab(tab.dataset.tab); }); }); }
function switchTab(name) { document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); const panel = document.getElementById('panel-' + name); const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`); if (panel) panel.classList.add('active'); if (tabBtn) tabBtn.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); playSound('click'); setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); }); initTypewriter(); }, 100);   // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() { if (!('IntersectionObserver' in window)) return; window._scrollObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el)); }

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() { document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; } const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; } document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open')); } if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const panel = document.getElementById('panel-cards'); if (!panel || !panel.classList.contains('active')) return; if (document.activeElement && document.activeElement.id === 'cardsSearch') return; e.preventDefault(); const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none'); if (!cards.length) return; if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open'); const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1); currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir)); cards[currentPrincipleIdx].classList.add('open'); cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' }); playSound('click'); } }); }

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) { try { if (!audioCtx) audioCtx = new AudioCtx(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06; if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; } else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; } else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; } osc.start(); osc.stop(audioCtx.currentTime + 0.1); } catch(e) {} }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() { const canvas = document.getElementById('confettiCanvas'); if (!canvas) return; canvas.style.display = 'block'; const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; const particles = []; const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7']; for (let i = 0; i < 120; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 }); } let frame = 0; function draw() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } } draw(); }

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() { const dailyTitle = document.querySelector('.daily-card .daily-title'); if (!dailyTitle || dailyTitle.dataset.twDone) return; const fullText = dailyTitle.textContent; dailyTitle.textContent = ''; dailyTitle.classList.add('typewriter-text'); dailyTitle.dataset.twDone = '1'; let i = 0; const speed = Math.max(30, 2000 / fullText.length); function typeChar() { if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); } else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); } } setTimeout(typeChar, 500); }

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() { let touchStartX = 0, touchStartY = 0; const tabOrder = ['home','cards','quiz','progress','about']; document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true }); document.addEventListener('touchend', e => { const dx = e.changedTouches[0].screenX - touchStartX; const dy = e.changedTouches[0].screenY - touchStartY; if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return; const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); }); if (current < 0) return; const isRTL = document.documentElement.dir === 'rtl'; let next; if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1; if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]); }, { passive: true }); }

// ═══════════════ ENRICHED CARD INSIGHTS ═══════════════
// Additional detailed insights for each card topic — used in expanded card views
const CARD_INSIGHTS = {
  1: {
    ar: {
      keyFacts: [
        'تنفق بعض المنظمات مليارات الدولارات سنوياً على برامج الإغاثة المشروطة',
        'أكثر المناطق المستهدفة: غرب أفريقيا وجنوب شرق آسيا والقرن الأفريقي',
        'الشيخ الغزالي وثّق حالات في كتابه من مصر والسودان ونيجيريا',
        'بناء مؤسسات وقفية إسلامية هو الحل المستدام لمواجهة استغلال الفقر'
      ],
      historicalContext: 'ارتبط استغلال الفقر تاريخياً بحركة الاستعمار في القرنين التاسع عشر والعشرين حيث كانت المدارس والمستشفيات أدوات للتغلغل الثقافي في المجتمعات المسلمة الفقيرة.'
    },
    en: {
      keyFacts: [
        'Some organizations spend billions of dollars annually on conditional aid programs',
        'Most targeted areas: West Africa, Southeast Asia, and the Horn of Africa',
        'Sheikh al-Ghazali documented cases in his book from Egypt, Sudan, and Nigeria',
        'Building Islamic endowment institutions is the sustainable solution to counter poverty exploitation'
      ],
      historicalContext: 'Poverty exploitation has historically been linked to the colonial movement in the 19th and 20th centuries, where schools and hospitals were tools for cultural penetration in poor Muslim societies.'
    },
    fr: {
      keyFacts: [
        'Certaines organisations depensent des milliards de dollars par an en programmes d\'aide conditionnelle',
        'Zones les plus ciblees : Afrique de l\'Ouest, Asie du Sud-Est et Corne de l\'Afrique',
        'Le Sheikh al-Ghazali a documente des cas dans son livre d\'Egypte, du Soudan et du Nigeria',
        'La construction d\'institutions de waqf islamiques est la solution durable contre l\'exploitation de la pauvrete'
      ],
      historicalContext: 'L\'exploitation de la pauvrete a historiquement ete liee au mouvement colonial aux 19e et 20e siecles, ou les ecoles et les hopitaux etaient des outils de penetration culturelle dans les societes musulmanes pauvres.'
    }
  },
  2: {
    ar: {
      keyFacts: [
        'بعض المدارس الأجنبية تفرض مناهج تتعارض مع القيم الإسلامية',
        'التعليم الإسلامي الجيد يجمع بين العلوم الحديثة والتربية الإيمانية',
        'الجامعات الإسلامية الرائدة أثبتت إمكانية التفوق الأكاديمي مع الحفاظ على الهوية',
        'الشيخ الغزالي يؤكد أن العلم والإيمان لا يتعارضان بل يتكاملان'
      ],
      historicalContext: 'أنشئت مئات المدارس الأجنبية في البلاد الإسلامية خلال فترة الاستعمار المباشر وبعده، وكان كثير منها يهدف لتخريج أجيال منبتّة عن هويتها.'
    },
    en: {
      keyFacts: [
        'Some foreign schools impose curricula that conflict with Islamic values',
        'Good Islamic education combines modern sciences with faith-based nurturing',
        'Leading Islamic universities have proven academic excellence while preserving identity',
        'Sheikh al-Ghazali affirms that knowledge and faith do not conflict but complement each other'
      ],
      historicalContext: 'Hundreds of foreign schools were established in Muslim countries during and after direct colonialism, many aimed at producing generations disconnected from their identity.'
    },
    fr: {
      keyFacts: [
        'Certaines ecoles etrangeres imposent des programmes qui contredisent les valeurs islamiques',
        'Une bonne education islamique combine sciences modernes et education spirituelle',
        'Les universites islamiques de premier plan ont prouve l\'excellence academique tout en preservant l\'identite',
        'Le Sheikh al-Ghazali affirme que le savoir et la foi ne s\'opposent pas mais se completent'
      ],
      historicalContext: 'Des centaines d\'ecoles etrangeres ont ete creees dans les pays musulmans pendant et apres le colonialisme direct, beaucoup visant a produire des generations deconnectees de leur identite.'
    }
  },
  3: {
    ar: {
      keyFacts: [
        'المستشفيات المشروطة تنتشر في المناطق النائية التي تفتقر للخدمات الصحية',
        'الحل الإسلامي يتمثل في بناء مستشفيات ومراكز صحية تخدم الجميع بلا شروط',
        'نظام الوقف في الإسلام أسس أول مستشفى مجاني في التاريخ',
        'منظمات الإغاثة الطبية الإسلامية تثبت إمكانية الخدمة المجانية النقية'
      ],
      historicalContext: 'في القرن التاسع عشر انتشرت المستشفيات الإرسالية في أفريقيا والشرق الأوسط كأداة أساسية للتغيير الثقافي والعقدي في المجتمعات المسلمة.'
    },
    en: {
      keyFacts: [
        'Conditional hospitals spread in remote areas lacking health services',
        'The Islamic solution is building hospitals and health centers serving everyone without conditions',
        'The Islamic endowment system established the first free hospital in history',
        'Islamic medical relief organizations prove the possibility of pure free service'
      ],
      historicalContext: 'In the 19th century, missionary hospitals spread across Africa and the Middle East as a primary tool for cultural and ideological change in Muslim societies.'
    },
    fr: {
      keyFacts: [
        'Les hopitaux conditionnes se repandent dans les zones reculees manquant de services de sante',
        'La solution islamique est de construire des hopitaux servant tout le monde sans conditions',
        'Le systeme de waqf islamique a fonde le premier hopital gratuit de l\'histoire',
        'Les organisations de secours medical islamiques prouvent la possibilite d\'un service gratuit pur'
      ],
      historicalContext: 'Au 19e siecle, les hopitaux missionnaires se sont repandus en Afrique et au Moyen-Orient comme outil principal de changement culturel et ideologique dans les societes musulmanes.'
    }
  },
  16: {
    ar: {
      keyFacts: [
        'تتحكم عدد محدود من الشركات الكبرى في معظم وسائل الإعلام العالمية',
        'الصور النمطية السلبية عن الإسلام تتكرر في الأفلام والمسلسلات والأخبار',
        'دراسات أكاديمية أثبتت التحيز المنهجي ضد المسلمين في التغطية الإعلامية الغربية',
        'بناء إعلام إسلامي محترف ومهني هو ضرورة حضارية ملحّة'
      ],
      historicalContext: 'منذ أحداث الحادي عشر من سبتمبر تضاعفت التغطية السلبية للإسلام في وسائل الإعلام الغربية عشرات المرات بينما تُهمّش القصص الإيجابية للمسلمين.'
    },
    en: {
      keyFacts: [
        'A limited number of large corporations control most of the world\'s media',
        'Negative stereotypes about Islam are repeated in films, series, and news',
        'Academic studies have proven systematic bias against Muslims in Western media coverage',
        'Building professional Islamic media is an urgent civilizational necessity'
      ],
      historicalContext: 'Since the events of September 11, negative coverage of Islam in Western media has multiplied dozens of times while positive stories about Muslims are marginalized.'
    },
    fr: {
      keyFacts: [
        'Un nombre limite de grandes entreprises controle la plupart des medias mondiaux',
        'Les stereotypes negatifs sur l\'Islam sont repetes dans les films, les series et les nouvelles',
        'Des etudes academiques ont prouve le biais systematique contre les musulmans dans la couverture mediatique occidentale',
        'Construire des medias islamiques professionnels est une necessite civilisationnelle urgente'
      ],
      historicalContext: 'Depuis les evenements du 11 septembre, la couverture negative de l\'Islam dans les medias occidentaux a ete multipliee par dizaines tandis que les histoires positives sur les musulmans sont marginalisees.'
    }
  },
  17: {
    ar: {
      keyFacts: [
        'يقضي المراهق المسلم في المتوسط أكثر من ٤ ساعات يومياً على وسائل التواصل',
        'خوارزميات المنصات تعزز المحتوى المثير للجدل وتخفي المحتوى البنّاء',
        'حسابات وهمية كثيرة تستهدف الشباب المسلم بمحتوى يبعدهم عن هويتهم',
        'المحتوى الإسلامي الجذاب على المنصات الرقمية يحقق ملايين المشاهدات'
      ],
      historicalContext: 'ظهرت وسائل التواصل الاجتماعي في العقد الأول من الألفية الثالثة وتحولت سريعاً إلى أقوى أداة تأثير على عقول الشباب في التاريخ البشري.'
    },
    en: {
      keyFacts: [
        'The average Muslim teenager spends more than 4 hours daily on social media',
        'Platform algorithms amplify controversial content and hide constructive material',
        'Many fake accounts target Muslim youth with content that distances them from their identity',
        'Attractive Islamic content on digital platforms achieves millions of views'
      ],
      historicalContext: 'Social media emerged in the first decade of the third millennium and quickly became the most powerful tool for influencing young minds in human history.'
    },
    fr: {
      keyFacts: [
        'L\'adolescent musulman moyen passe plus de 4 heures par jour sur les reseaux sociaux',
        'Les algorithmes des plateformes amplifient le contenu controverse et cachent le materiel constructif',
        'De nombreux faux comptes ciblent les jeunes musulmans avec du contenu qui les eloigne de leur identite',
        'Le contenu islamique attrayant sur les plateformes numeriques atteint des millions de vues'
      ],
      historicalContext: 'Les reseaux sociaux sont apparus dans la premiere decennie du troisieme millenaire et sont rapidement devenus l\'outil le plus puissant pour influencer les esprits des jeunes dans l\'histoire humaine.'
    }
  },
  18: {
    ar: {
      keyFacts: [
        'الأطفال دون سن العاشرة يتعرضون لمحتوى رقمي بلا رقابة كافية',
        'بعض الرسوم المتحركة تحمل رسائل خفية تتعارض مع القيم الإسلامية',
        'تطبيقات الرقابة الأبوية أداة ضرورية لكنها لا تغني عن الحوار والتوجيه',
        'صناعة محتوى إسلامي للأطفال تنمو بسرعة وتحتاج لمزيد من الدعم والاستثمار'
      ],
      historicalContext: 'مع انتشار الأجهزة اللوحية بين الأطفال منذ عام ٢٠١٠ تضاعف التعرض للمحتوى الرقمي غير المراقب مما يتطلب استراتيجيات حماية جديدة.'
    },
    en: {
      keyFacts: [
        'Children under ten are exposed to digital content without adequate oversight',
        'Some cartoons carry hidden messages that conflict with Islamic values',
        'Parental control apps are a necessary tool but do not replace dialogue and guidance',
        'Islamic children\'s content industry is growing rapidly and needs more support and investment'
      ],
      historicalContext: 'With the spread of tablets among children since 2010, exposure to unmonitored digital content has doubled, requiring new protection strategies.'
    },
    fr: {
      keyFacts: [
        'Les enfants de moins de dix ans sont exposes a du contenu numerique sans surveillance adequate',
        'Certains dessins animes portent des messages caches qui contredisent les valeurs islamiques',
        'Les applications de controle parental sont un outil necessaire mais ne remplacent pas le dialogue',
        'L\'industrie du contenu islamique pour enfants croit rapidement et a besoin de plus de soutien'
      ],
      historicalContext: 'Avec la diffusion des tablettes parmi les enfants depuis 2010, l\'exposition au contenu numerique non surveille a double, necessitant de nouvelles strategies de protection.'
    }
  },
  19: {
    ar: {
      keyFacts: [
        'المشاريع الإسلامية الناجحة تثبت أن البديل الإسلامي ممكن ومنافس',
        'تطبيقات القرآن الإسلامية من أكثر التطبيقات تحميلاً في العالم',
        'المدارس الإسلامية الرائدة تحقق نتائج أكاديمية متفوقة',
        'المحتوى الإسلامي الرقمي يصل لملايين المشاهدين حول العالم'
      ],
      historicalContext: 'بدأت حركة بناء البدائل الإسلامية في النصف الثاني من القرن العشرين واكتسبت زخماً كبيراً مع الثورة الرقمية في الألفية الثالثة.'
    },
    en: {
      keyFacts: [
        'Successful Islamic projects prove that the Islamic alternative is possible and competitive',
        'Islamic Quran apps are among the most downloaded applications in the world',
        'Leading Islamic schools achieve outstanding academic results',
        'Islamic digital content reaches millions of viewers around the world'
      ],
      historicalContext: 'The movement to build Islamic alternatives began in the second half of the 20th century and gained significant momentum with the digital revolution in the third millennium.'
    },
    fr: {
      keyFacts: [
        'Les projets islamiques reussis prouvent que l\'alternative islamique est possible et competitive',
        'Les applications coraniques islamiques sont parmi les plus telechargees au monde',
        'Les ecoles islamiques de pointe obtiennent des resultats academiques remarquables',
        'Le contenu numerique islamique atteint des millions de spectateurs dans le monde'
      ],
      historicalContext: 'Le mouvement de construction d\'alternatives islamiques a commence dans la seconde moitie du 20e siecle et a pris un elan considerable avec la revolution numerique au troisieme millenaire.'
    }
  },
  20: {
    ar: {
      keyFacts: [
        'الجزائر حافظت على هويتها العربية والإسلامية رغم ١٣٠ عاماً من الاستعمار الفرنسي',
        'ماليزيا نجحت في بناء نظام تعليمي يجمع بين الحداثة والأصالة',
        'تركيا استعادت هويتها الإسلامية بعد عقود من التغريب القسري',
        'حركات التحفيظ القرآنية في أفريقيا حافظت على القرآن في أصعب الظروف'
      ],
      historicalContext: 'عبر التاريخ أثبتت الشعوب المسلمة قدرتها على الصمود والمقاومة والحفاظ على هويتها مهما طال أمد المحاولات لتغييرها.'
    },
    en: {
      keyFacts: [
        'Algeria preserved its Arab and Islamic identity despite 130 years of French colonialism',
        'Malaysia succeeded in building an educational system combining modernity and authenticity',
        'Turkey recovered its Islamic identity after decades of forced westernization',
        'Quran memorization movements in Africa preserved the Quran under the most difficult conditions'
      ],
      historicalContext: 'Throughout history, Muslim peoples have proven their ability to endure, resist, and preserve their identity no matter how long the attempts to change them lasted.'
    },
    fr: {
      keyFacts: [
        'L\'Algerie a preserve son identite arabe et islamique malgre 130 ans de colonialisme francais',
        'La Malaisie a reussi a construire un systeme educatif combinant modernite et authenticite',
        'La Turquie a retrouve son identite islamique apres des decennies d\'occidentalisation forcee',
        'Les mouvements de memorisation du Coran en Afrique ont preserve le Coran dans les conditions les plus difficiles'
      ],
      historicalContext: 'A travers l\'histoire, les peuples musulmans ont prouve leur capacite a endurer, resister et preserver leur identite quelle que soit la duree des tentatives de la changer.'
    }
  }
};

// ═══════════════ EXPANDED CARD RENDERING ═══════════════
function getCardInsight(cardId) {
  const insight = CARD_INSIGHTS[cardId];
  if (!insight || !insight[lang]) return '';
  const data = insight[lang];
  const t = T[lang];
  let html = '';
  if (data.keyFacts && data.keyFacts.length > 0) {
    const factsTitle = lang === 'ar' ? 'حقائق مهمة' : lang === 'fr' ? 'Faits importants' : 'Key Facts';
    html += `<div class="card-insight-section">`;
    html += `<div class="card-insight-title">📌 ${factsTitle}</div>`;
    html += `<ul class="card-insight-list">`;
    data.keyFacts.forEach(fact => {
      html += `<li>${fact}</li>`;
    });
    html += `</ul></div>`;
  }
  if (data.historicalContext) {
    const contextTitle = lang === 'ar' ? 'السياق التاريخي' : lang === 'fr' ? 'Contexte historique' : 'Historical Context';
    html += `<div class="card-insight-section">`;
    html += `<div class="card-insight-title">📜 ${contextTitle}</div>`;
    html += `<div class="card-insight-text">${data.historicalContext}</div>`;
    html += `</div>`;
  }
  return html;
}

// ═══════════════ MEDIA LITERACY TOOLKIT ═══════════════
const MEDIA_CHECKLIST = {
  ar: {
    title: 'قائمة فحص الأخبار',
    items: [
      {icon: '🔍', text: 'تحقق من المصدر — هل هو موثوق ومعروف؟'},
      {icon: '📅', text: 'تحقق من التاريخ — هل الخبر حديث أم قديم أُعيد نشره؟'},
      {icon: '🖼️', text: 'تحقق من الصور — هل هي حقيقية أم معدّلة أم من سياق آخر؟'},
      {icon: '📰', text: 'ابحث عن مصادر أخرى — هل وسائل إعلام أخرى نشرت نفس الخبر؟'},
      {icon: '🧠', text: 'فكّر نقدياً — ما الهدف من نشر هذا الخبر؟ من المستفيد؟'},
      {icon: '👤', text: 'تحقق من الكاتب — هل هو صحفي حقيقي أم حساب وهمي؟'},
      {icon: '📊', text: 'افحص الأرقام — هل الإحصائيات المذكورة دقيقة وموثقة؟'},
      {icon: '💬', text: 'اقرأ ما بعد العنوان — العناوين المثيرة قد تكون مضللة'}
    ]
  },
  en: {
    title: 'News Verification Checklist',
    items: [
      {icon: '🔍', text: 'Check the source — is it reliable and well-known?'},
      {icon: '📅', text: 'Check the date — is the news recent or old and republished?'},
      {icon: '🖼️', text: 'Check the images — are they real, edited, or from another context?'},
      {icon: '📰', text: 'Search for other sources — did other media publish the same news?'},
      {icon: '🧠', text: 'Think critically — what is the purpose of publishing this news? Who benefits?'},
      {icon: '👤', text: 'Check the author — is it a real journalist or a fake account?'},
      {icon: '📊', text: 'Examine the numbers — are the statistics mentioned accurate and documented?'},
      {icon: '💬', text: 'Read beyond the headline — sensational headlines can be misleading'}
    ]
  },
  fr: {
    title: 'Liste de Verification des Nouvelles',
    items: [
      {icon: '🔍', text: 'Verifiez la source — est-elle fiable et connue ?'},
      {icon: '📅', text: 'Verifiez la date — la nouvelle est-elle recente ou ancienne et republicee ?'},
      {icon: '🖼️', text: 'Verifiez les images — sont-elles reelles, editees ou d\'un autre contexte ?'},
      {icon: '📰', text: 'Cherchez d\'autres sources — d\'autres medias ont-ils publie la meme nouvelle ?'},
      {icon: '🧠', text: 'Pensez de maniere critique — quel est le but de publier cette nouvelle ? Qui en beneficie ?'},
      {icon: '👤', text: 'Verifiez l\'auteur — est-ce un vrai journaliste ou un faux compte ?'},
      {icon: '📊', text: 'Examinez les chiffres — les statistiques mentionnees sont-elles precises et documentees ?'},
      {icon: '💬', text: 'Lisez au-dela du titre — les titres sensationnels peuvent etre trompeurs'}
    ]
  }
};

function renderMediaChecklist() {
  const data = MEDIA_CHECKLIST[lang];
  if (!data) return '';
  let html = `<div class="media-checklist">`;
  html += `<h3 class="checklist-title">${data.title}</h3>`;
  data.items.forEach(item => {
    html += `<div class="checklist-item">${item.icon} ${item.text}</div>`;
  });
  html += `</div>`;
  return html;
}

// ═══════════════ DIGITAL SAFETY TIPS ═══════════════
const DIGITAL_SAFETY = {
  ar: {
    title: 'نصائح الأمان الرقمي للأسرة المسلمة',
    categories: [
      {
        name: 'للأطفال (٥-١٢ سنة)',
        tips: [
          'استخدم تطبيقات الرقابة الأبوية على جميع الأجهزة',
          'حدد وقتاً يومياً محدوداً لاستخدام الشاشات',
          'شاهد المحتوى مع أطفالك وناقشه معهم',
          'وفّر بدائل إسلامية جذابة: قصص أنبياء، تطبيقات قرآنية',
          'علّمهم قاعدة: لا تتحدث مع الغرباء على الإنترنت'
        ]
      },
      {
        name: 'للمراهقين (١٣-١٨ سنة)',
        tips: [
          'حوار مفتوح ومستمر عن المخاطر الرقمية',
          'علّمهم التفكير النقدي وتحليل المحتوى',
          'شجعهم على متابعة محتوى إسلامي عالي الجودة',
          'ناقش معهم قضايا الخصوصية والبصمة الرقمية',
          'كن قدوة في استخدامك لوسائل التواصل'
        ]
      },
      {
        name: 'للوالدين',
        tips: [
          'تعلّم استخدام المنصات التي يستخدمها أبناؤك',
          'ضع الأجهزة في أماكن مشتركة لا في غرف مغلقة',
          'أنشئ قواعد أسرية واضحة لاستخدام التكنولوجيا',
          'خصص وقتاً يومياً بلا شاشات للحوار الأسري',
          'تعرّف على علامات التأثر السلبي بالمحتوى الرقمي'
        ]
      }
    ]
  },
  en: {
    title: 'Digital Safety Tips for the Muslim Family',
    categories: [
      {
        name: 'For Children (5-12 years)',
        tips: [
          'Use parental control apps on all devices',
          'Set a limited daily screen time',
          'Watch content with your children and discuss it',
          'Provide attractive Islamic alternatives: prophet stories, Quran apps',
          'Teach them the rule: do not talk to strangers online'
        ]
      },
      {
        name: 'For Teenagers (13-18 years)',
        tips: [
          'Open and continuous dialogue about digital risks',
          'Teach them critical thinking and content analysis',
          'Encourage them to follow high-quality Islamic content',
          'Discuss privacy and digital footprint issues',
          'Be a role model in your use of social media'
        ]
      },
      {
        name: 'For Parents',
        tips: [
          'Learn to use the platforms your children use',
          'Place devices in shared areas, not closed rooms',
          'Create clear family rules for technology use',
          'Dedicate daily screen-free time for family dialogue',
          'Learn the signs of negative digital content influence'
        ]
      }
    ]
  },
  fr: {
    title: 'Conseils de Securite Numerique pour la Famille Musulmane',
    categories: [
      {
        name: 'Pour les Enfants (5-12 ans)',
        tips: [
          'Utilisez des applications de controle parental sur tous les appareils',
          'Fixez un temps d\'ecran quotidien limite',
          'Regardez le contenu avec vos enfants et discutez-en',
          'Fournissez des alternatives islamiques attrayantes : histoires de prophetes, applications coraniques',
          'Enseignez-leur la regle : ne parle pas aux inconnus en ligne'
        ]
      },
      {
        name: 'Pour les Adolescents (13-18 ans)',
        tips: [
          'Dialogue ouvert et continu sur les risques numeriques',
          'Enseignez-leur la pensee critique et l\'analyse du contenu',
          'Encouragez-les a suivre du contenu islamique de haute qualite',
          'Discutez des questions de confidentialite et d\'empreinte numerique',
          'Soyez un modele dans votre utilisation des reseaux sociaux'
        ]
      },
      {
        name: 'Pour les Parents',
        tips: [
          'Apprenez a utiliser les plateformes que vos enfants utilisent',
          'Placez les appareils dans des espaces communs, pas dans des pieces fermees',
          'Creez des regles familiales claires pour l\'utilisation de la technologie',
          'Consacrez du temps quotidien sans ecran pour le dialogue familial',
          'Apprenez les signes d\'influence negative du contenu numerique'
        ]
      }
    ]
  }
};

function renderDigitalSafety() {
  const data = DIGITAL_SAFETY[lang];
  if (!data) return '';
  let html = `<div class="digital-safety-guide">`;
  html += `<h3 class="safety-title">${data.title}</h3>`;
  data.categories.forEach(cat => {
    html += `<div class="safety-category">`;
    html += `<h4 class="safety-cat-name">${cat.name}</h4>`;
    html += `<ul class="safety-tips-list">`;
    cat.tips.forEach(tip => {
      html += `<li class="safety-tip">${tip}</li>`;
    });
    html += `</ul></div>`;
  });
  html += `</div>`;
  return html;
}

// ═══════════════ SUCCESS STORIES DATABASE ═══════════════
const SUCCESS_STORIES = {
  ar: [
    {
      title: 'الجزائر — صمود اللغة والهوية',
      summary: 'رغم ١٣٠ عاماً من الاستعمار الفرنسي ومحاولات فرض اللغة الفرنسية وطمس الهوية العربية والإسلامية، نجح الشعب الجزائري في الحفاظ على لغته ودينه وهويته. لعبت الزوايا والكتاتيب والمساجد دوراً محورياً في هذا الصمود، وبعد الاستقلال عام ١٩٦٢ تمت استعادة العربية كلغة رسمية.',
      lesson: 'الهوية المتجذرة في الإيمان لا يستطيع استعمار أن يقتلعها'
    },
    {
      title: 'ماليزيا — التعليم الإسلامي الحديث',
      summary: 'نجحت ماليزيا في بناء نظام تعليمي يجمع بين العلوم الحديثة والقيم الإسلامية. الجامعة الإسلامية العالمية في ماليزيا أصبحت نموذجاً يحتذى في الجمع بين التميز الأكاديمي والحفاظ على الهوية الإسلامية. خريجوها يعملون في أرقى المؤسسات العالمية مع تمسكهم بهويتهم.',
      lesson: 'يمكن الجمع بين التفوق العلمي والتمسك بالهوية الإسلامية'
    },
    {
      title: 'حركات تحفيظ القرآن في أفريقيا',
      summary: 'في ظل ظروف الفقر والحرمان، نجحت حركات تحفيظ القرآن في غرب أفريقيا وشرقها في تخريج ملايين الحفّاظ عبر نظام الكتاتيب التقليدية. هذه الحركات حافظت على الهوية الإسلامية في مواجهة أعنف حملات التغيير الثقافي.',
      lesson: 'القرآن هو الحصن الأقوى لحماية الهوية الإسلامية'
    },
    {
      title: 'تركيا — استعادة الهوية',
      summary: 'بعد عقود من التغريب القسري ومنع الحجاب وإغلاق المدارس الدينية، نجح المجتمع التركي في استعادة كثير من ملامح هويته الإسلامية. إمام خطيب المدارس الدينية خرّجت قيادات في مختلف المجالات مع الحفاظ على القيم الإسلامية.',
      lesson: 'إرادة الشعوب في الحفاظ على هويتها أقوى من أي سياسات تغريب'
    }
  ],
  en: [
    {
      title: 'Algeria — Language and Identity Resilience',
      summary: 'Despite 130 years of French colonialism and attempts to impose French and erase Arab-Islamic identity, the Algerian people succeeded in preserving their language, religion, and identity. Zawiyas, Quranic schools, and mosques played a central role. After independence in 1962, Arabic was restored as the official language.',
      lesson: 'Identity rooted in faith cannot be uprooted by any colonialism'
    },
    {
      title: 'Malaysia — Modern Islamic Education',
      summary: 'Malaysia succeeded in building an educational system combining modern sciences with Islamic values. The International Islamic University Malaysia became a model for combining academic excellence with Islamic identity preservation. Its graduates work in top global institutions while maintaining their identity.',
      lesson: 'Scientific excellence and Islamic identity can coexist'
    },
    {
      title: 'Quran Memorization Movements in Africa',
      summary: 'Under conditions of poverty and deprivation, Quran memorization movements in West and East Africa graduated millions of memorizers through traditional school systems. These movements preserved Islamic identity against the most intense cultural change campaigns.',
      lesson: 'The Quran is the strongest fortress for protecting Islamic identity'
    },
    {
      title: 'Turkey — Identity Recovery',
      summary: 'After decades of forced westernization, banning the hijab, and closing religious schools, Turkish society succeeded in recovering many features of its Islamic identity. Imam Hatip religious schools produced leaders in various fields while preserving Islamic values.',
      lesson: 'The will of peoples to preserve their identity is stronger than any westernization policies'
    }
  ],
  fr: [
    {
      title: 'L\'Algerie — Resilience de la Langue et de l\'Identite',
      summary: 'Malgre 130 ans de colonialisme francais et des tentatives d\'imposer le francais et d\'effacer l\'identite arabo-islamique, le peuple algerien a reussi a preserver sa langue, sa religion et son identite. Les zaouias, les ecoles coraniques et les mosquees ont joue un role central. Apres l\'independance en 1962, l\'arabe a ete retabli comme langue officielle.',
      lesson: 'L\'identite enracinee dans la foi ne peut etre deracinee par aucun colonialisme'
    },
    {
      title: 'La Malaisie — L\'Education Islamique Moderne',
      summary: 'La Malaisie a reussi a construire un systeme educatif combinant sciences modernes et valeurs islamiques. L\'Universite Islamique Internationale de Malaisie est devenue un modele pour combiner excellence academique et preservation de l\'identite islamique.',
      lesson: 'L\'excellence scientifique et l\'identite islamique peuvent coexister'
    },
    {
      title: 'Mouvements de Memorisation du Coran en Afrique',
      summary: 'Dans des conditions de pauvrete et de privation, les mouvements de memorisation du Coran en Afrique de l\'Ouest et de l\'Est ont diplome des millions de memorisateurs. Ces mouvements ont preserve l\'identite islamique contre les campagnes de changement culturel les plus intenses.',
      lesson: 'Le Coran est la forteresse la plus solide pour proteger l\'identite islamique'
    },
    {
      title: 'La Turquie — Recuperation de l\'Identite',
      summary: 'Apres des decennies d\'occidentalisation forcee, d\'interdiction du hijab et de fermeture des ecoles religieuses, la societe turque a reussi a recuperer de nombreux traits de son identite islamique. Les ecoles religieuses Imam Hatip ont forme des leaders dans divers domaines tout en preservant les valeurs islamiques.',
      lesson: 'La volonte des peuples de preserver leur identite est plus forte que toute politique d\'occidentalisation'
    }
  ]
};

function renderSuccessStories() {
  const stories = SUCCESS_STORIES[lang];
  if (!stories) return '';
  const sectionTitle = lang === 'ar' ? 'قصص نجاح ملهمة' : lang === 'fr' ? 'Histoires de Succes Inspirantes' : 'Inspiring Success Stories';
  const lessonLabel = lang === 'ar' ? 'الدرس' : lang === 'fr' ? 'Lecon' : 'Lesson';
  let html = `<div class="success-stories-section">`;
  html += `<h3 class="stories-title">🏆 ${sectionTitle}</h3>`;
  stories.forEach((story, idx) => {
    html += `<div class="story-card scroll-reveal">`;
    html += `<h4 class="story-title">${story.title}</h4>`;
    html += `<p class="story-summary">${story.summary}</p>`;
    html += `<div class="story-lesson"><strong>💡 ${lessonLabel}:</strong> ${story.lesson}</div>`;
    html += `</div>`;
  });
  html += `</div>`;
  return html;
}

// ═══════════════ PROTECTION STRATEGIES ═══════════════
const PROTECTION_STRATEGIES = {
  ar: {
    title: 'استراتيجيات الحماية الشاملة',
    strategies: [
      {
        name: 'التحصين الفكري',
        icon: '🧠',
        description: 'بناء قاعدة معرفية إسلامية صلبة من خلال دراسة العقيدة والقرآن والسيرة النبوية',
        steps: ['حفظ القرآن وتدبره يومياً', 'دراسة السيرة النبوية بعمق', 'تعلم أصول العقيدة من مصادر موثوقة', 'حضور حلقات العلم والمحاضرات']
      },
      {
        name: 'التربية المناعية',
        icon: '🛡️',
        description: 'تعليم الأبناء كيفية التعامل مع الشبهات والتحديات من خلال بناء شخصية إسلامية قوية',
        steps: ['تعليم التفكير النقدي منذ الصغر', 'مناقشة الشبهات الشائعة وطرق الرد عليها', 'بناء الثقة بالهوية الإسلامية', 'تقديم قدوات إسلامية ملهمة']
      },
      {
        name: 'البناء المؤسسي',
        icon: '🏗️',
        description: 'إنشاء مؤسسات إسلامية قوية تملأ الفراغات التي يستغلها الآخرون',
        steps: ['دعم المدارس الإسلامية المتميزة', 'المساهمة في بناء المراكز الشبابية', 'تمويل المشاريع الإعلامية الإسلامية', 'إنشاء جمعيات خيرية شفافة وفعالة']
      },
      {
        name: 'المشاركة الرقمية',
        icon: '💻',
        description: 'التواجد الفعال والمؤثر على المنصات الرقمية بمحتوى إسلامي عالي الجودة',
        steps: ['إنشاء محتوى إسلامي جذاب ومتقن', 'دعم صناع المحتوى الإسلامي الجيد', 'مشاركة المحتوى الإيجابي على نطاق واسع', 'تعلم مهارات صناعة المحتوى الرقمي']
      }
    ]
  },
  en: {
    title: 'Comprehensive Protection Strategies',
    strategies: [
      {
        name: 'Intellectual Fortification',
        icon: '🧠',
        description: 'Building a solid Islamic knowledge base through studying aqeedah, Quran, and Prophetic biography',
        steps: ['Memorize and reflect on the Quran daily', 'Study the Prophetic biography in depth', 'Learn the foundations of creed from reliable sources', 'Attend knowledge circles and lectures']
      },
      {
        name: 'Immunity Education',
        icon: '🛡️',
        description: 'Teaching children how to deal with doubts and challenges by building a strong Islamic personality',
        steps: ['Teach critical thinking from a young age', 'Discuss common doubts and how to respond', 'Build confidence in Islamic identity', 'Provide inspiring Islamic role models']
      },
      {
        name: 'Institutional Building',
        icon: '🏗️',
        description: 'Establishing strong Islamic institutions that fill the gaps others exploit',
        steps: ['Support excellent Islamic schools', 'Contribute to building youth centers', 'Fund Islamic media projects', 'Create transparent and effective charitable organizations']
      },
      {
        name: 'Digital Engagement',
        icon: '💻',
        description: 'Effective and influential presence on digital platforms with high-quality Islamic content',
        steps: ['Create attractive and professional Islamic content', 'Support good Islamic content creators', 'Share positive content widely', 'Learn digital content creation skills']
      }
    ]
  },
  fr: {
    title: 'Strategies de Protection Globales',
    strategies: [
      {
        name: 'Fortification Intellectuelle',
        icon: '🧠',
        description: 'Construire une base solide de connaissances islamiques par l\'etude de la croyance, du Coran et de la biographie prophetique',
        steps: ['Memoriser et mediter le Coran quotidiennement', 'Etudier la biographie prophetique en profondeur', 'Apprendre les fondements de la croyance de sources fiables', 'Assister aux cercles de savoir et conferences']
      },
      {
        name: 'Education Immunitaire',
        icon: '🛡️',
        description: 'Enseigner aux enfants comment gerer les doutes et les defis en construisant une personnalite islamique forte',
        steps: ['Enseigner la pensee critique des le plus jeune age', 'Discuter des doutes courants et comment y repondre', 'Construire la confiance dans l\'identite islamique', 'Fournir des modeles islamiques inspirants']
      },
      {
        name: 'Construction Institutionnelle',
        icon: '🏗️',
        description: 'Creer des institutions islamiques fortes qui comblent les lacunes exploitees par d\'autres',
        steps: ['Soutenir les ecoles islamiques excellentes', 'Contribuer a la construction de centres de jeunesse', 'Financer des projets mediatiques islamiques', 'Creer des organisations caritatives transparentes et efficaces']
      },
      {
        name: 'Engagement Numerique',
        icon: '💻',
        description: 'Presence efficace et influente sur les plateformes numeriques avec du contenu islamique de haute qualite',
        steps: ['Creer du contenu islamique attrayant et professionnel', 'Soutenir les bons createurs de contenu islamique', 'Partager largement le contenu positif', 'Apprendre les competences de creation de contenu numerique']
      }
    ]
  }
};

function renderProtectionStrategies() {
  const data = PROTECTION_STRATEGIES[lang];
  if (!data) return '';
  let html = `<div class="protection-strategies">`;
  html += `<h3 class="strategies-title">🛡️ ${data.title}</h3>`;
  data.strategies.forEach(strat => {
    html += `<div class="strategy-card scroll-reveal">`;
    html += `<div class="strategy-header">${strat.icon} <strong>${strat.name}</strong></div>`;
    html += `<p class="strategy-desc">${strat.description}</p>`;
    html += `<ol class="strategy-steps">`;
    strat.steps.forEach(step => {
      html += `<li>${step}</li>`;
    });
    html += `</ol></div>`;
  });
  html += `</div>`;
  return html;
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
