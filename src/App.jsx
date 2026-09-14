import React, { useState, useEffect, useRef } from 'react';
import {
  Heart, Sparkles, Volume2, VolumeX, Copy, Check, ChevronLeft, ChevronRight,
  Gift, Calendar, Lock, Unlock, Star, Quote, Feather, PartyPopper, Search, Music,
  Upload, Image as ImageIcon, Play, Pause, Film, Music2, RefreshCw, Eye
} from 'lucide-react';
import cardOne from './assets/1.jpeg';
import cardTwo from './assets/2.jpeg';
import cardThree from './assets/3.jpeg';
import myQueenPhoto from './assets/my Queen.jpeg';
import myWifePhoto from './assets/my wife.jpeg';

const SHAYARIS = [
  {
    id: 1,
    title: "My Eternal Light",
    english: "You are the light that brightens my darkest days. Happy Birthday, my queen! Every moment with you feels like a beautiful dream come true.",
    tamil: "என் இருண்ட நாட்களை வெளிச்சமாக்கும் பேரொளி நீதான். இனிய பிறந்தநாள் வாழ்த்துகள் என் ராணி! உன்னுடன் இருக்கும் ஒவ்வொரு நொடியும் ஒரு அழகிய கனவு.",
    transliteration: "En irunda naatkalai velichamaakkum paeroli needhaan. Iniya pirandhanaal vaazhthukkal en raani!",
    tag: "Love"
  },
  {
    id: 2,
    title: "Home in Your Eyes",
    english: "In your eyes, I found my home; in your heart, I found my love. You complete my world in ways words can never describe.",
    tamil: "உன் கண்களில் என் இல்லத்தைக் கண்டேன், உன் இதயத்தில் என் பேரன்பைக் கண்டேன். சொற்களால் விவரிக்க முடியாத அளவு நீ என்னை முழுமையாக்குகிறாய்.",
    transliteration: "Un kangalil en illathai kandaen, un idhayathil en paeranbai kandaen.",
    tag: "Forever"
  },
  {
    id: 3,
    title: "My Precious Soulmate",
    english: "You are not just my girlfriend, you are my soulmate, my best friend, and my future wife. Wishing you endless joy today and always.",
    tamil: "நீ என் காதலி மட்டுமல்ல, என் ஆருயிர் தோழி, என் வாழ்க்கைத்துணை. இந்நாளில் உனக்கு அளவில்லா மகிழ்ச்சி கிடைக்க வாழ்த்துகிறேன்.",
    transliteration: "Nee en kaadhali mattumalla, en aaruyir thozhi, en vaazhkkaithunai.",
    tag: "Soulmate"
  },
  {
    id: 4,
    title: "Breath of Love",
    english: "Like the soft morning breeze, your love gently touches my heart every single second. Happy Birthday my life!",
    tamil: "காலை இளந்தென்றலைப் போல, உன் அன்பு ஒவ்வொரு நொடியும் என் இதயத்தை மென்மையாகத் தொடுகிறது. இனிய பிறந்தநாள் வாழ்த்துகள் என் உயிரே!",
    transliteration: "Kaalai ilanthendralai pola, un anbu ovvoru nodiyum en idhayathai menmaiyaaga thodugiradhu.",
    tag: "Romantic"
  },
  {
    id: 5,
    title: "Forever & Ever Together",
    english: "Walking hand in hand with you is the only journey I want to take for the rest of my lifetime.",
    tamil: "உன் கை கோர்த்து நடப்பதே என் வாழ்நாளின் மிக அழகிய பயணம். உன்னோடு வாழும் ஒவ்வொரு கணமும் வரம்.",
    transliteration: "Un kai korthu nadappadhae en vaazhnaalin miga azhagiya payanam.",
    tag: "Forever"
  },
  {
    id: 6,
    title: "Star of My Universe",
    english: "Among millions of stars in the night sky, your smile shines the brightest in my universe.",
    tamil: "ஆயிரம் நட்சத்திரங்கள் இரவு வானில் இருந்தாலும், உன் புன்னகையே என் பேரண்டத்தில் மிக பிரகாசமாக ஒளிர்கிறது.",
    transliteration: "Aayiram natsathirangal iravu vaanil irundhaalum, un punnagaiyae en paerandathil miga piragaasamaaga olirgiradhu.",
    tag: "Beauty"
  },
  {
    id: 7,
    title: "Rhythm of My Heart",
    english: "My heart skips a beat every time you look at me. Thank you for making my life so extra special.",
    tamil: "நீ என்னை பார்க்கும் ஒவ்வொரு முறையும் என் இதயம் ஒரு நொடி நிற்பது போல் உணர்கிறேன். என் வாழ்க்கையை இவ்வளவு அழகாக்கியதற்கு நன்றி.",
    transliteration: "Nee ennai paarkkum ovvoru muraiyum en idhayam oru nodi nirpadhu pol unargiraen.",
    tag: "Romantic"
  },
  {
    id: 8,
    title: "Sweetest Melody",
    english: "Your laugh is my absolute favorite song, and your voice is the calmest rhythm of my life.",
    tamil: "உன் சிரிப்பு தான் எனக்கு மிகவும் பிடித்த பாடல், உன் குரலே என் வாழ்வின் மிக அமைதியான இசை.",
    transliteration: "Un sirippu thaan enakku migavum piditha paadal, un kuralae en vaazhvin miga amaidhiyaana isai.",
    tag: "Love"
  },
  {
    id: 9,
    title: "21st September Blessing",
    english: "September 21st is the most special day because the universe gave me its most precious angel on this day.",
    tamil: "செப்டம்பர் 21 என் வாழ்வின் பொன்னான நாள், ஏனெனில் பிரபஞ்சம் தன் மிகச்சிறந்த தேவதையை எனக்கு தந்த நாள் இது!",
    transliteration: "September 21 en vaazhvin ponnaana naal, aenenil pirabanjam than migachirandha devadhaiyai enakku thandha naal idhu!",
    tag: "Birthday"
  },
  {
    id: 10,
    title: "My Destiny",
    english: "Meeting you was fate, falling in love was pure magic, and staying with you is my eternal dream.",
    tamil: "உன்னை சந்தித்தது என் அதிர்ஷ்டம், காதலித்தது பேரதிசயம், உன்னோடு வாழ்வது என் என்றென்றும் தொடரும் கனவு.",
    transliteration: "Unnai sandhithadhu en adhirshtam, kaadhalithadhu paeradhisayam, unnodu vaazhvadhu en endrendrum thodarum kanavu.",
    tag: "Destiny"
  },
  {
    id: 11,
    title: "Pure Grace",
    english: "Your kindness makes you beautiful, and your warmth makes me love you more each single day.",
    tamil: "உன் அன்பான குணம் உன்னை மேலும் அழகாக்குகிறது, உன் அரவணைப்பு தினமும் என் காதலை வளர்க்கிறது.",
    transliteration: "Un anbaana kunam unnai maelum azhagaakkugiradhu, un aravanaippu dhinamum en kaadhalai valarkkiradhu.",
    tag: "Beauty"
  },
  {
    id: 12,
    title: "My Secret Prayer",
    english: "Every silent wish of my heart was granted the exact second you stepped into my life.",
    tamil: "என் இதயத்தின் அத்தனை பிரார்த்தனைகளும் நீ என் வாழ்க்கையில் அடியெடுத்து வைத்த நொடியில் நிறைவேறின.",
    transliteration: "En idhayathin athanai pirarthanaigalum nee en vaazhkkaiyil adiyeduthu vaitha nodiyil niraverina.",
    tag: "Soulmate"
  },
  {
    id: 13,
    title: "Endless Smiles",
    english: "I promise to make you smile not just on your birthday, but for every single sunrise we share.",
    tamil: "உன் பிறந்தநாளில் மட்டுமல்ல, நாம் சேர்ந்து காணும் ஒவ்வொரு விடியலிலும் உன்னை புன்னகைக்க வைப்பேன் என வாக்குறுதி அளிக்கிறேன்.",
    transliteration: "Un pirandhanaalil mattumalla, naam saerndhu kaanum ovvoru vidiyalilum unnai punnagaikka vaippaen.",
    tag: "Promise"
  },
  {
    id: 14,
    title: "True Happiness",
    english: "Before I met you, happiness was just a word. Now, happiness has your pretty face.",
    tamil: "உன்னைச் சந்திப்பதற்கு முன் மகிழ்ச்சி என்பது ஒரு சொல் மட்டுமே. இப்போது அது உன் அழகான முகம்!",
    transliteration: "Unnai sandhippadharku mun magizhchi enbadhu oru sol mattumaey. Ippodhu adhu un azhagiya mugam!",
    tag: "Love"
  },
  {
    id: 15,
    title: "My Safe Haven",
    english: "In your arms, I find peace. In your smile, I find hope. You are my safe haven, my sweet wife.",
    tamil: "உன் அணைப்பில் அமைதியைக் காண்கிறேன். உன் புன்னகையில் நம்பிக்கையைக் காண்கிறேன். நீயே என் புகலிடம் என் அன்பே.",
    transliteration: "Un anaippil amaidhiyai kaangiraen. Un punnagaiyil nambikkaiyai kaangiraen.",
    tag: "Forever"
  },
  {
    id: 16,
    title: "Glow of My World",
    english: "May your birthday sparkle with all the bright colors of love and laughter that you bring to my world.",
    tamil: "என் உலகிற்கு நீ கொண்டு வரும் அன்பும் சிரிப்பும் போல, உன் பிறந்தநாளும் வண்ணமயமாக மிளிரட்டும்.",
    transliteration: "En ulagirku nee kondu varum anbum sirippum pola, un pirandhanaalum vannamayamaaga milirattum.",
    tag: "Birthday"
  },
  {
    id: 17,
    title: "Unconditional Love",
    english: "No matter how high the storm or how rough the tide, my love for you will remain unwavering.",
    tamil: "எத்தனை புயல்கள் வந்தாலும், என் கடல் போன்ற அன்பு உனக்காக என்றும் மாறாமல் நிலைத்து நிற்கும்.",
    transliteration: "Ethanai puyalgal vandhaalum, en kadal pondra anbu unakkaaga endrum maaraamal nilaithu nirkum.",
    tag: "Promise"
  },
  {
    id: 18,
    title: "My Greatest Treasure",
    english: "I don't need expensive treasures when I have the most valuable gift in the universe—YOUR HEART.",
    tamil: "எனக்கு வேறு எந்த விலையுயர்ந்த பரிசுகளும் தேவையில்லை, ஏனெனில் பிரபஞ்சத்தின் மிகச் சிறந்த பரிசு என் வசம் உள்ளது—உன் இதயம்!",
    transliteration: "Enakku vaeru endha vilaiyuyandha parisugalum thevaiyillai, aenenil un idhayam ennodudhaan irukkiradhu!",
    tag: "Love"
  },
  {
    id: 19,
    title: "Blooming Rose",
    english: "Like a rare blossom in springtime, your presence makes every flower in my garden jealous.",
    tamil: "வசந்த காலத்தின் அரிய மலரைப் போல, உன் வருகை என் தோட்டத்து ஒவ்வொரு பூவையும் பொறாமை கொள்ள வைக்கிறது.",
    transliteration: "Vasantha kaalathin ariya malarai pola, un varugai en thottathu ovvoru poovaiyum poraamai kolla vaikkiradhu.",
    tag: "Beauty"
  },
  {
    id: 20,
    title: "Deeper Than Oceans",
    english: "The ocean has depths, but none compare to the boundless depth of my affection for you.",
    tamil: "ஆழமான கடலை விட ஆழமானது என் மன ஆழத்தில் உனக்காக பொங்கி வழியும் உண்மையான காதல்.",
    transliteration: "Aazhamaana kadalai vida aazhamaanadhu en mana aazhathil unakkaaga pongi vazhiyum unmaiyaana kaadhal.",
    tag: "Romantic"
  },
  {
    id: 21,
    title: "My Earthly Angel",
    english: "Heaven must be missing an angel because you are down here filling my world with light and warmth.",
    tamil: "சொர்க்கத்தில் நிச்சயம் ஒரு தேவதை குறைந்திருக்கும், ஏனெனில் நீ இங்கே என் உலகை ஒளியால் நிரப்புகிறாய்.",
    transliteration: "Sorkathil nichayam oru devadhai kurainthirukkum, aenenil nee inge en ulagai oliyaal nirappugirai.",
    tag: "Beauty"
  },
  {
    id: 22,
    title: "Written in Stars",
    english: "Our love story wasn't written on paper; it was hand-crafted by destiny in the starry skies.",
    tamil: "நம் காதல் கதை காகிதத்தில் எழுதப்படவில்லை; அது விண்மீன் வானில் விதியால் செதுக்கப்பட்டது.",
    transliteration: "Nam kaadhal kadhai kaagidhatil ezhuthappadavillai; adhu vinmeen vaanil vidhiyaal sedhukkappadhadhu.",
    tag: "Destiny"
  },
  {
    id: 23,
    title: "My Queen Forever",
    english: "Crown or no crown, you will forever rule the throne of my beating heart.",
    tamil: "கிரீடம் இருந்தாலும் இல்லாவிட்டாலும், துடிக்கும் என் இதயத்தின் அரியணையை என்றும் ஆள்பவள் நீ மட்டுமே.",
    transliteration: "Kireedam irundhaalum illavittaalum, thudikkum en idhayathin ariyaniyai endrum aalbaval nee mattumaey.",
    tag: "Forever"
  },
  {
    id: 24,
    title: "Sweetest Addiction",
    english: "Your smile is my addiction, your hug is my warmth, and your love is my ultimate blessing.",
    tamil: "உன் புன்னகை என் போதை, உன் அணைப்பு என் இதம், உன் காதல் என் வாழ்வின் மகத்தான ஆசி.",
    transliteration: "Un punnagai en podhai, un anaippu en idham, un kaadhal en vaazhvin magathana aasi.",
    tag: "Romantic"
  },
  {
    id: 25,
    title: "Happy Birthday My Wife",
    english: "Happy Birthday my love, my life, my future wife! May our bond grow sweeter with every passing second.",
    tamil: "இனிய பிறந்தநாள் வாழ்த்துகள் என் அன்பே, என் உயிரே, என் வருங்கால மனைவியே! நம் காதல் பந்தம் ஒவ்வொரு நொடியும் இனிமையாக வளரட்டும்.",
    transliteration: "Iniya pirandhanaal vaazhthukkal en anbae, en uyirae, en varungaala manaiviye!",
    tag: "Birthday"
  }
];

const VIJAY_CARDS = [
  {
    id: 1,
    movie: "Mersal / Master Vibes",
    quote: "En Anbe... En Uyire! You are the Thalapathy of my heart!",
    image: cardThree,
    description: "Celebrating the queen of my heart with pure Thalapathy level energy!"
  },
  {
    id: 2,
    movie: "Ghilli / Sachien Romance",
    quote: "Appadi Podu! My love for you is as iconic as Thalapathy's mass hits!",
    image: cardTwo,
    description: "Every time you smile, it feels like a grand Thalapathy first day first show celebration!"
  },
  {
    id: 3,
    movie: "Leo / Varisu Melody",
    quote: "Naa Ready Than Varava... To hold your hands forever and ever!",
    image: cardOne,
    description: "Just like Vijay sir's mass screen presence, your love lights up my whole universe."
  }
];

const TAMIL_SONGS = [
  { id: 1, name: "Arabic-kuthu", movie: "My Love Playlist", freq: 440, audioUrl: "/1.mpeg" },
  { id: 2, name: "Bloody Sweet", movie: "My Love Playlist", freq: 392, audioUrl: "/2.mpeg" },
  { id: 3, name: "Vaathi Coming", movie: "My Love Playlist", freq: 329, audioUrl: "/3.mpeg" },
  { id: 4, name: "Badass", movie: "My Love Playlist", freq: 349, audioUrl: "/4.mpeg" },
  { id: 5, name: "Naa Ready", movie: "My Love Playlist", freq: 523, audioUrl: "/5.mpeg" },
  { id: 6, name: "Thalapathy Kacheri", movie: "My Love Playlist", freq: 456, audioUrl: "/6.mpeg" }
];

const LOVE_REASONS = [
  "The adorable way you smile whenever you look into my eyes",
  "How your laughter instantly turns my worst day into pure joy",
  "Your warm, cozy hugs that make all my worries vanish in a second",
  "The sweetness and gentleness in your soft voice when you say my name",
  "How deeply and genuinely you care for the people you love",
  "The cute, silly face you make when you get playfully angry at me",
  "How you always know how to comfort my heart without even trying",
  "Your endless patience, kindness, and understanding nature",
  "The sparkle in your beautiful eyes whenever you talk about your dreams",
  "How you celebrate every Thalapathy Vijay dialogue with so much passion!",
  "Simply because you are YOU—my soulmate, my queen, and my future wife forever!"
];

const CustomStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Great+Vibes&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #fff0f3;
      color: #1f2937;
      overflow-x: hidden;
    }

    .font-cursive { font-family: 'Dancing Script', cursive; }
    .font-script { font-family: 'Great Vibes', cursive; }
    .font-serif-romantic { font-family: 'Playfair Display', serif; }

    /* Keyframes for Floating Hearts */
    @keyframes floatUp {
      0% { transform: translateY(0) scale(0.8) rotate(0deg); opacity: 0; }
      20% { opacity: 0.8; }
      80% { opacity: 0.8; }
      100% { transform: translateY(-105vh) scale(1.3) rotate(360deg); opacity: 0; }
    }

    .heart-particle {
      position: fixed;
      bottom: -40px;
      color: rgba(244, 63, 94, 0.4);
      animation: floatUp 8s infinite linear;
      pointer-events: none;
      user-select: none;
      z-index: 1;
    }

    @keyframes shine {
      to { background-position: 200% center; }
    }

    @keyframes confettiPop {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0) scale(0.5) rotate(0deg);
      }
      15% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: translate3d(
          ${Math.random() * 200 - 100}px,
          220px,
          0
        ) scale(1.2) rotate(260deg);
      }
    }

    .gold-shimmer {
      background: linear-gradient(135deg, #ffffff 0%, #ffe4e6 25%, #fef08a 50%, #ffe4e6 75%, #ffffff 100%);
      background-size: 200% auto;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      animation: shine 4s linear infinite;
    }

    /* Candle Flame animation */
    @keyframes flameFlicker {
      0% { transform: scale(1) rotate(-1deg); opacity: 0.95; }
      100% { transform: scale(1.15) rotate(2deg); opacity: 1; }
    }

    .candle-flame {
      background: radial-gradient(ellipse at bottom, #fef08a 0%, #f97316 60%, transparent 100%);
      filter: drop-shadow(0 0 10px #f97316);
      animation: flameFlicker 0.15s infinite alternate ease-in-out;
    }

    /* Pulse Glow Button */
    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 15px rgba(244, 63, 94, 0.4); transform: scale(1); }
      50% { box-shadow: 0 0 28px rgba(244, 63, 94, 0.8); transform: scale(1.02); }
    }

    .glow-pulse-btn {
      animation: pulseGlow 2s infinite ease-in-out;
    }

    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #fce7f3;
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #f43f5e;
      border-radius: 10px;
    }
  `}</style>
);

export default function App() {
  const [boyfriendName, setBoyfriendName] = useState('');
  const [inputName, setInputName] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [authError, setAuthError] = useState('');

  // Photo Upload States
  const [uploadedPhotos, setUploadedPhotos] = useState([
    myQueenPhoto,
    myWifePhoto
  ]);

  // Audio Player State
  const [selectedSong, setSelectedSong] = useState(TAMIL_SONGS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const audioRef = useRef(null);

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBirthdayToday, setIsBirthdayToday] = useState(false);

  // Shayari State
  const [languageMode, setLanguageMode] = useState('both');
  const [currentShayariIndex, setCurrentShayariIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Extras
  const [reasonIndex, setReasonIndex] = useState(0);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showLetterModal, setShowLetterModal] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [confettiBurst, setConfettiBurst] = useState(false);
  const confettiTimerRef = useRef(null);

  useEffect(() => {
    const hearts = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 16 + Math.random() * 24,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 5
    }));
    setFloatingHearts(hearts);

    return () => {
      if (confettiTimerRef.current) {
        clearTimeout(confettiTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let currentYear = now.getFullYear();
      let bdayDate = new Date(currentYear, 8, 21, 0, 0, 0);

      if (now.getTime() > bdayDate.getTime() + 86400000) {
        bdayDate = new Date(currentYear + 1, 8, 21, 0, 0, 0);
      }

      const diff = bdayDate.getTime() - now.getTime();

      if (diff <= 0 && diff > -86400000) {
        setIsBirthdayToday(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsBirthdayToday(false);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (!inputName.trim()) {
      setAuthError("Please enter your boyfriend's name to unlock your birthday portal!");
      return;
    }
    setBoyfriendName(inputName.trim());
    setIsUnlocked(true);
    setAuthError('');
    triggerConfetti();
  };

  const triggerConfetti = () => {
    if (confettiTimerRef.current) {
      clearTimeout(confettiTimerRef.current);
    }

    setConfettiBurst(true);
    confettiTimerRef.current = setTimeout(() => {
      setConfettiBurst(false);
    }, 2200);
  };

  const toggleSong = (song = selectedSong) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    if (isPlaying && selectedSong.id === song.id) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      return;
    }

    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }

    try {
      if (song.audioUrl) {
        audioRef.current.src = song.audioUrl;
        audioRef.current.loop = false;
        audioRef.current.volume = 0.6;
        audioRef.current.play();
      } else {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioCtx();
        const osc = audioContextRef.current.createOscillator();
        const gain = audioContextRef.current.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(song.freq, audioContextRef.current.currentTime);
        gain.gain.setValueAtTime(0.05, audioContextRef.current.currentTime);

        osc.connect(gain);
        gain.connect(audioContextRef.current.destination);
        osc.start();
        oscillatorRef.current = osc;
      }

      setSelectedSong(song);
      setIsPlaying(true);
    } catch (e) {
      console.log("Audio playback issue", e);
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedPhotos([reader.result, ...uploadedPhotos]);
      };
      reader.readAsDataURL(file);
    }
  };

  const filteredShayaris = SHAYARIS.filter(item => {
    const matchesTag = activeFilter === 'All' || item.tag.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = item.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tamil.includes(searchQuery) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!isUnlocked) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e11d48 0%, #ec4899 50%, #7e22ce 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <CustomStyles />

        {floatingHearts.map((h) => (
          <div
            key={h.id}
            className="heart-particle"
            style={{
              left: `${h.left}%`,
              fontSize: `${h.size}px`,
              animationDuration: `${h.duration}s`,
              animationDelay: `${h.delay}s`
            }}
          >
            ♥
          </div>
        ))}

        <div style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px)',
          borderRadius: '24px',
          padding: '40px 32px',
          maxWidth: '440px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          border: '1px solid rgba(251, 113, 133, 0.3)',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #f43f5e, #ec4899)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            color: '#fff',
            boxShadow: '0 10px 20px rgba(244, 63, 94, 0.4)'
          }} className="glow-pulse-btn">
            <Lock size={36} />
          </div>

          <h1 className="font-script" style={{ fontSize: '2.5rem', color: '#881337', marginBottom: '8px' }}>
            Welcome Princess! 💕
          </h1>
          <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '28px', lineHeight: '1.5' }}>
            To unlock your 21st September Birthday Portal & Thalapathy Special Corner, please enter your boyfriend's name below!
          </p>

          <form onSubmit={handleUnlock} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ textAlign: 'left' }}>
              <label style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: '#e11d48',
                marginBottom: '6px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Boyfriend's Name
              </label>
              <input
                type="text"
                placeholder="Enter his name..."
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '16px',
                  border: '2px solid #fecdd3',
                  outline: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  backgroundColor: '#ffffff'
                }}
              />
            </div>

            {authError && (
              <p style={{ color: '#e11d48', fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'left' }}>
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="glow-pulse-btn"
              style={{
                width: '100%',
                background: 'linear-gradient(90deg, #f43f5e, #ec4899)',
                color: '#ffffff',
                fontWeight: 'bold',
                padding: '16px',
                borderRadius: '16px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Unlock size={20} /> Open My Birthday Portal
            </button>
          </form>

          <div style={{
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid #ffe4e6',
            fontSize: '0.75rem',
            color: '#6b7280',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}>
            <Sparkles size={16} color="#f43f5e" /> Made with endless love for Shreya by your sweet boyfriend 💖
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff0f3', position: 'relative' }}>
      <CustomStyles />

      {/* Background Floating Hearts */}
      {floatingHearts.map((h) => (
        <div
          key={h.id}
          className="heart-particle"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`
          }}
        >
          ♥
        </div>
      ))}

      {/* Confetti Overlay */}
      {confettiBurst && (
        <div style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 100,
          overflow: 'hidden'
        }}>
          {Array.from({ length: 26 }, (_, i) => {
            const confettiItems = ['🎉', '✨', '💖', '🎂', '👑', '💕', '🎊'];
            const emoji = confettiItems[i % confettiItems.length];
            const left = (i * 13) % 100;
            const top = (i * 17) % 55;
            const size = 18 + (i % 5) * 10;
            const delay = (i % 6) * 0.08;
            const duration = 1.2 + (i % 6) * 0.35;

            return (
              <span
                key={i}
                style={{
                  position: 'absolute',
                  left: `${left}%`,
                  top: `${top}%`,
                  fontSize: `${size}px`,
                  opacity: 0,
                  animation: `confettiPop ${duration}s ease-out ${delay}s forwards`,
                  transform: 'translateY(0) rotate(0deg)'
                }}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      )}

      {/* Floating Audio Controls */}
      <div style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 50 }}>
        <button
          onClick={() => toggleSong(selectedSong)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            border: '1px solid #fecdd3',
            boxShadow: '0 10px 25px rgba(225, 29, 72, 0.15)',
            padding: '10px 18px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: '800',
            color: '#e11d48',
            cursor: 'pointer'
          }}
        >
          {isPlaying ? (
            <>
              <Volume2 size={18} color="#f43f5e" /> Playing: {selectedSong.name}
            </>
          ) : (
            <>
              <VolumeX size={18} color="#9ca3af" /> Play Tamil Music
            </>
          )}
        </button>
      </div>

      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(180deg, #be123c 0%, #e11d48 50%, #fb7185 100%)',
        color: '#ffffff',
        padding: '80px 16px 120px',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            padding: '8px 20px',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            border: '1px solid rgba(255,255,255,0.4)'
          }}>
            <Film size={18} color="#fef08a" />
            21st September Birthday Special For My Beautiful Wife, Shreya!
          </div>

          <h1 className="gold-shimmer font-serif-romantic" style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.2' }}>
            Happy Birthday My Love, My Wife! My whole world ❤️
          </h1>

          <p className="font-cursive" style={{ fontSize: '1.75rem', color: '#ffe4e6' }}>
            With endless love, kisses & adoration from your sweet boyfriend, <span style={{ color: '#fef08a', textDecoration: 'underline' }}>{boyfriendName}</span>
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '12px' }}>
            <button
              onClick={() => setShowLetterModal(true)}
              className="glow-pulse-btn"
              style={{
                backgroundColor: '#ffffff',
                color: '#e11d48',
                fontWeight: '800',
                padding: '14px 28px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.875rem'
              }}
            >
              <Feather size={18} color="#f43f5e" /> Read My Love Letter
            </button>
            <button
              onClick={triggerConfetti}
              style={{
                backgroundColor: 'rgba(159, 18, 57, 0.6)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.3)',
                fontWeight: '800',
                padding: '14px 28px',
                borderRadius: '9999px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.875rem'
              }}
            >
              <PartyPopper size={18} color="#fef08a" /> Celebrate With Confetti
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ maxWidth: '1000px', margin: '-60px auto 0', padding: '0 16px 80px', display: 'flex', flexDirection: 'column', gap: '48px', position: 'relative', zIndex: 10 }}>

        {/* SECTION 1: COUNTDOWN TIMER */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          borderRadius: '24px',
          padding: '32px 24px',
          boxShadow: '0 20px 40px rgba(225, 29, 72, 0.12)',
          border: '1px solid rgba(251, 113, 133, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', itemsCenter: 'center', justifyContent: 'center', gap: '8px', color: '#e11d48', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
            <Calendar size={16} /> Countdown to 21st September
          </div>
          <h2 className="font-serif-romantic" style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1f2937', marginBottom: '24px' }}>
            {isBirthdayToday ? "🎉 TODAY IS YOUR SPECIAL BIRTHDAY DAY MY WIFE! 🎉" : "Countdown to Your Big Day!"}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', maxWidth: '600px', margin: '0 auto' }}>
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(180deg, #f43f5e, #e11d48)',
                color: '#ffffff',
                padding: '16px',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 10px 15px rgba(244, 63, 94, 0.2)'
              }}>
                <span style={{ display: 'block', fontSize: '2rem', fontWeight: '900', fontFamily: 'monospace' }}>
                  {String(item.value).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ffe4e6' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: PHOTO FRAMES & HER PICTURE UPLOAD */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          borderRadius: '24px',
          padding: '32px 24px',
          boxShadow: '0 20px 40px rgba(225, 29, 72, 0.12)',
          border: '1px solid rgba(251, 113, 133, 0.3)'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyBetween: 'space-between', gap: '16px', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e11d48', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                <ImageIcon size={16} />
              </div>
              <h2 className="font-serif-romantic" style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1f2937' }}>
                Your Beautiful Photos Frame
              </h2>
            </div>

            <label style={{
              backgroundColor: '#e11d48',
              color: '#ffffff',
              padding: '10px 20px',
              borderRadius: '9999px',
              fontWeight: '800',
              fontSize: '0.875rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 10px 20px rgba(225, 29, 72, 0.3)'
            }}>

            </label>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {uploadedPhotos.map((photo, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '16px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '2px solid #fecdd3',
                textAlign: 'center'
              }}>
                <div style={{ width: '100%', height: '240px', borderRadius: '16px', overflow: 'hidden', marginBottom: '12px' }}>
                  <img
                    src={photo}
                    alt={idx === 0 ? 'My Queen' : 'My Wife'}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <p className="font-cursive" style={{ fontSize: '1.25rem', color: '#e11d48', fontWeight: 'bold' }}>
                  {idx === 0 ? 'My Queen ❤️' : 'My Wife ❤️'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: ACTOR VIJAY JOSEPH FANS CORNER */}
        <section style={{
          background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
          color: '#ffffff',
          borderRadius: '24px',
          padding: '32px 24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          border: '1px solid rgba(244, 63, 94, 0.3)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(244, 63, 94, 0.2)', padding: '6px 16px', borderRadius: '9999px', color: '#fb7185', fontSize: '0.75rem', fontWeight: '800', marginBottom: '12px' }}>
              <Film size={16} /> Thalapathy Special Tribute
            </div>
            <h2 className="font-serif-romantic" style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff' }}>
              Actor Vijay Fans Corner 👑
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#a1a1aa', maxWidth: '500px', margin: '8px auto 0' }}>
              Dedicated to the biggest Thalapathy Vijay fan! Romantic movie cards filled with love and iconic energy.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {VIJAY_CARDS.map((card) => (
              <div key={card.id} style={{
                backgroundColor: '#09090b',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #3f3f46',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ height: '200px', position: 'relative' }}>
                  <img src={card.image} alt={card.movie} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#e11d48', color: '#ffffff', fontSize: '0.7rem', fontWeight: '900', padding: '4px 10px', borderRadius: '9999px' }}>
                    {card.movie}
                  </span>
                </div>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fef08a' }}>
                    "{card.quote}"
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#d4d4d8', leadingHeight: '1.4' }}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: TAMIL LOVE SONGS MUSIC PLAYER */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          borderRadius: '24px',
          padding: '32px 24px',
          boxShadow: '0 20px 40px rgba(225, 29, 72, 0.12)',
          border: '1px solid rgba(251, 113, 133, 0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e11d48', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
            <Music2 size={16} /> Tamil Romantic Melodies
          </div>
          <h2 className="font-serif-romantic" style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1f2937', marginBottom: '24px' }}>
            Tamil Love Songs & Vijay Melodies Playlist 🎵
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {TAMIL_SONGS.map((song) => {
              const isCurrent = selectedSong.id === song.id;
              return (
                <div
                  key={song.id}
                  onClick={() => toggleSong(song)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    backgroundColor: isCurrent ? '#ffe4e6' : '#ffffff',
                    border: isCurrent ? '2px solid #f43f5e' : '1px solid #fecdd3',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: isCurrent ? '#e11d48' : '#fecdd3',
                      color: isCurrent ? '#ffffff' : '#e11d48',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {isCurrent && isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#1f2937' }}>{song.name}</h4>
                      <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Movie: {song.movie}</p>
                    </div>
                  </div>

                  <span style={{ fontSize: '0.75rem', fontWeight: '800', color: isCurrent ? '#e11d48' : '#9ca3af' }}>
                    {isCurrent && isPlaying ? 'Playing Audio' : 'Click to Play'}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: VIRTUAL CAKE */}
        <section style={{
          background: 'linear-gradient(135deg, #e11d48 0%, #ec4899 100%)',
          borderRadius: '24px',
          padding: '40px 24px',
          color: '#ffffff',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(225, 29, 72, 0.25)'
        }}>
          <h2 className="font-serif-romantic" style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '8px' }}>
            Virtual Birthday Cake Celebration 🎂
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#ffe4e6', marginBottom: '32px' }}>
            Tap the candles below to make your birthday wish!
          </p>

          <div
            onClick={() => setCandlesBlown(!candlesBlown)}
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              padding: '32px 48px',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.3)',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px' }}>
              {[1, 2, 3].map((id) => (
                <div key={id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    className={candlesBlown ? '' : 'candle-flame'}
                    style={{
                      width: '24px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: candlesBlown ? '#9ca3af' : 'transparent',
                      opacity: candlesBlown ? 0.3 : 1
                    }}
                  />
                  <div style={{ width: '10px', height: '40px', background: 'linear-gradient(180deg, #fbcfe8, #f43f5e)', borderRadius: '4px 4px 0 0' }} />
                </div>
              ))}
            </div>

            <div style={{
              width: '200px',
              height: '60px',
              background: 'linear-gradient(90deg, #fbcfe8, #ffe4e6, #fbcfe8)',
              borderRadius: '16px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#881337',
              fontWeight: '800',
              fontSize: '0.875rem',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
            }}>
              {candlesBlown ? "✨ Wish Made! I Love You! Shreya  ✨" : "Click Here to Blow Candles 🎂"}
            </div>
          </div>
        </section>

        {/* SECTION 6: 25 SHAYARIS */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          borderRadius: '24px',
          padding: '32px 24px',
          boxShadow: '0 20px 40px rgba(225, 29, 72, 0.12)',
          border: '1px solid rgba(251, 113, 133, 0.3)'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyBetween: 'space-between', gap: '16px', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e11d48', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                <Quote size={16} /> 25 Heartfelt Shayaris
              </div>
              <h2 className="font-serif-romantic" style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1f2937' }}>
                English & Tamil Romantic Shayaris
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '6px', backgroundColor: '#ffe4e6', padding: '6px', borderRadius: '16px' }}>
              <button
                onClick={() => setLanguageMode('english')}
                style={{
                  padding: '8px 14px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  cursor: 'pointer',
                  backgroundColor: languageMode === 'english' ? '#e11d48' : 'transparent',
                  color: languageMode === 'english' ? '#ffffff' : '#374151'
                }}
              >
                English
              </button>
              <button
                onClick={() => setLanguageMode('tamil')}
                style={{
                  padding: '8px 14px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  cursor: 'pointer',
                  backgroundColor: languageMode === 'tamil' ? '#e11d48' : 'transparent',
                  color: languageMode === 'tamil' ? '#ffffff' : '#374151'
                }}
              >
                தமிழ்
              </button>
              <button
                onClick={() => setLanguageMode('both')}
                style={{
                  padding: '8px 14px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  cursor: 'pointer',
                  backgroundColor: languageMode === 'both' ? '#e11d48' : 'transparent',
                  color: languageMode === 'both' ? '#ffffff' : '#374151'
                }}
              >
                Both
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} color="#f43f5e" style={{ position: 'absolute', left: '16px', top: '14px' }} />
              <input
                type="text"
                placeholder="Search Shayaris in English or Tamil..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 48px',
                  borderRadius: '16px',
                  border: '1px solid #fecdd3',
                  outline: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['All', 'Love', 'Forever', 'Soulmate', 'Romantic', 'Birthday', 'Beauty', 'Promise'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => { setActiveFilter(tag); setCurrentShayariIndex(0); }}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    padding: '6px 16px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: activeFilter === tag ? '#e11d48' : '#ffe4e6',
                    color: activeFilter === tag ? '#ffffff' : '#e11d48'
                  }}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Shayari Card */}
          {filteredShayaris.length > 0 ? (
            <div style={{
              background: 'linear-gradient(135deg, #fff5f5 0%, #ffffff 100%)',
              borderRadius: '20px',
              padding: '24px',
              border: '2px solid #fecdd3',
              boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
              marginBottom: '32px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', backgroundColor: '#fecdd3', color: '#881337', padding: '4px 12px', borderRadius: '9999px' }}>
                  Shayari {filteredShayaris[currentShayariIndex]?.id || 1} of 25
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#f43f5e' }}>
                  #{filteredShayaris[currentShayariIndex]?.tag}
                </span>
              </div>

              <h3 className="font-serif-romantic" style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1f2937', marginBottom: '20px' }}>
                "{filteredShayaris[currentShayariIndex]?.title}"
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {(languageMode === 'english' || languageMode === 'both') && (
                  <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '16px', border: '1px solid #ffe4e6' }}>
                    <p style={{ fontSize: '0.7rem', color: '#e11d48', fontWeight: '800', textTransform: 'uppercase', marginBottom: '4px' }}>English Shayari</p>
                    <p className="font-serif-romantic" style={{ fontStyle: 'italic', fontSize: '1rem', color: '#374151' }}>
                      "{filteredShayaris[currentShayariIndex]?.english}"
                    </p>
                  </div>
                )}

                {(languageMode === 'tamil' || languageMode === 'both') && (
                  <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '16px', border: '1px solid #ffe4e6' }}>
                    <p style={{ fontSize: '0.7rem', color: '#e11d48', fontWeight: '800', textTransform: 'uppercase', marginBottom: '4px' }}>தமிழ் கவிதை (Tamil Shayari)</p>
                    <p style={{ fontWeight: '600', fontSize: '1rem', color: '#111827' }}>
                      "{filteredShayaris[currentShayariIndex]?.tamil}"
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#6b7280', fontStyle: 'italic', marginTop: '6px' }}>
                      {filteredShayaris[currentShayariIndex]?.transliteration}
                    </p>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #fecdd3' }}>
                <button
                  onClick={() => handleCopy(`${filteredShayaris[currentShayariIndex]?.english}\n${filteredShayaris[currentShayariIndex]?.tamil}`, filteredShayaris[currentShayariIndex]?.id)}
                  style={{ background: 'none', border: 'none', color: '#e11d48', fontWeight: '800', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  {copiedIndex === filteredShayaris[currentShayariIndex]?.id ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
                  {copiedIndex === filteredShayaris[currentShayariIndex]?.id ? 'Copied!' : 'Copy Shayari'}
                </button>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => setCurrentShayariIndex((prev) => (prev - 1 + filteredShayaris.length) % filteredShayaris.length)}
                    style={{ padding: '10px', borderRadius: '50%', border: '1px solid #fecdd3', backgroundColor: '#ffffff', cursor: 'pointer' }}
                  >
                    <ChevronLeft size={18} color="#e11d48" />
                  </button>
                  <button
                    onClick={() => setCurrentShayariIndex((prev) => (prev + 1) % filteredShayaris.length)}
                    style={{ padding: '10px', borderRadius: '50%', border: '1px solid #fecdd3', backgroundColor: '#ffffff', cursor: 'pointer' }}
                  >
                    <ChevronRight size={18} color="#e11d48" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: '#6b7280', padding: '32px 0' }}>No Shayaris found matching your search.</p>
          )}
        </section>

        {/* SECTION 7: REASONS WHY I LOVE YOU */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          borderRadius: '24px',
          padding: '32px 24px',
          boxShadow: '0 20px 40px rgba(225, 29, 72, 0.12)',
          border: '1px solid rgba(251, 113, 133, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ display: 'inline-flex', itemsCenter: 'center', gap: '6px', backgroundColor: '#ffe4e6', color: '#be123c', padding: '6px 16px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '800', marginBottom: '12px' }}>
            <Heart size={16} fill="#f43f5e" color="#f43f5e" /> Interactive Love Card
          </div>
          <h2 className="font-serif-romantic" style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1f2937', marginBottom: '8px' }}>
            Why I Love You So Much ❤️
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '24px' }}>
            Click the button below to generate sweet reasons why you mean everything to me!
          </p>

          <div style={{
            background: 'linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)',
            color: '#ffffff',
            padding: '32px 24px',
            borderRadius: '24px',
            maxWidth: '600px',
            margin: '0 auto 24px',
            boxShadow: '0 15px 30px rgba(244, 63, 94, 0.3)'
          }}>
            <p className="font-cursive" style={{ fontSize: '1.5rem', lineHeight: '1.5' }}>
              "{LOVE_REASONS[reasonIndex]}"
            </p>
          </div>

          <button
            onClick={() => setReasonIndex((prev) => (prev + 1) % LOVE_REASONS.length)}
            className="glow-pulse-btn"
            style={{
              backgroundColor: '#e11d48',
              color: '#ffffff',
              fontWeight: '800',
              padding: '14px 28px',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.875rem'
            }}
          >
            <RefreshCw size={16} /> Next Reason
          </button>
        </section>

      </main>

      {/* POPUP LOVE LETTER MODAL */}
      {showLetterModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        }}>
          <div style={{
            backgroundColor: '#fffbeb',
            borderRadius: '24px',
            maxWidth: '500px',
            width: '100%',
            padding: '32px 24px',
            border: '4px solid #fef08a',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              backgroundColor: '#ffe4e6',
              color: '#e11d48',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <Feather size={28} />
            </div>

            <h3 className="font-script" style={{ fontSize: '2.5rem', textAlign: 'center', color: '#1f2937' }}>
              My Dearest Wife & Love,
            </h3>
            <p style={{ fontSize: '0.75rem', color: '#e11d48', textAlign: 'center', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              A Personal Birthday Letter From {boyfriendName}
            </p>

            <div className="font-serif-romantic" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '20px',
              borderRadius: '16px',
              border: '1px solid #fef08a',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              fontSize: '0.875rem',
              color: '#374151',
              lineHeight: '1.6'
            }}>
              <p style={{ fontWeight: '700', color: '#111827' }}>My Sweetheart,</p>
              <p>
                Happy 21st September Birthday! On this exact day, the universe became a much brighter, sweeter, and more beautiful place because you were born.
              </p>
              <p>
                Ever since you entered my life, every single day feels like a rare blessing. You are my best friend, my soulmate, the biggest Thalapathy Vijay fan, and my future wife. I promise to always protect your happiness and love you endlessly.
              </p>
              <p className="font-cursive" style={{ fontSize: '1.25rem', textAlign: 'right', color: '#be123c', fontWeight: 'bold' }}>
                Forever Yours,<br />
                {boyfriendName} ❤️
              </p>
            </div>

            <button
              onClick={() => setShowLetterModal(false)}
              style={{
                marginTop: '20px',
                width: '100%',
                backgroundColor: '#e11d48',
                color: '#ffffff',
                fontWeight: '800',
                padding: '14px',
                borderRadius: '16px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
            >
              Close Letter
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{
        backgroundColor: '#09090b',
        color: '#ffffff',
        padding: '48px 16px 32px',
        textAlign: 'center',
        borderTop: '2px solid #881337'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <div className="font-serif-romantic" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f43f5e', fontSize: '1.25rem', fontWeight: '800' }}>
            <Heart size={20} fill="#f43f5e" /> Happy Birthday My Love, My Wife
          </div>
          <p style={{ fontSize: '0.875rem', color: '#9ca3af', maxWidth: '500px' }}>
            Crafted with endless affection, kisses & devotion by your boyfriend <span style={{ color: '#fda4af', fontWeight: '800' }}>{boyfriendName}</span> for your 21st September Birthday!
          </p>
          <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '16px' }}>
            © create by Gaurav Kumar
          </p>
        </div>
      </footer>

    </div>
  );
}