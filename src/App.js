import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const EmojiButton = ({ emoji, onClick }) => (
  <button
    onClick={onClick}
    className="text-6xl hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
  >
    {emoji}
  </button>
);

const FloatingEmoji = ({ emoji, delay }) => (
  <div
    className="absolute text-6xl opacity-10 pointer-events-none animate-float"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${4 + Math.random() * 3}s`
    }}
  >
    {emoji}
  </div>
);

const FallingEmoji = ({ emoji, delay, duration }) => (
  <div
    className="absolute text-5xl pointer-events-none animate-fall"
    style={{
      left: `${Math.random() * 100}%`,
      top: '-150px',
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }}
  >
    {emoji}
  </div>
);

const slides = [
  {
    id: 0,
    title: "The Year We Began",
    subtitle: "Ashwin & Arya • 2025",
    content: "I was sailing through never knew this year was my destination. We literally met at the right moment to love and appreciate each other. Hence we began our journey Mu!",
    bgColor: "from-slate-900 via-blue-900 to-slate-900",
    emoji: "💃",
    floatingEmojis: ["💃", "💃", "💃", "💃", "💃", "💃", "💃", "💃", "💃", "💃"],
    hasFalling: true,
    fallingEmojis: ["❤️", "💕", "💖", "💗", "💓", "💞", "💘", "💝", "❤️‍🔥", "💑", "❤️", "💕", "💖", "💗", "💓", "💞", "💘", "💝", "❤️‍🔥", "💑", "❤️", "💕", "💖", "💗", "💓", "💞", "💘", "💝", "❤️‍🔥", "💑", "❤️", "💕", "💖", "💗", "💓", "💞", "💘", "💝", "❤️‍🔥", "💑"]
  },
  {
    id: 1,
    title: "Gratitude",
    content: "I want to say how grateful I am. This year has been such a blessing every day. I'm in debt with your patience and grace, and your ability to turn every negative situation into positive. Mujhe nahi pata how you are handling me like a piece of cake! You witch you are re!",
    bgColor: "from-blue-950 via-indigo-900 to-blue-950",
    emoji: "💩",
    floatingEmojis: ["💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩", "💩"]
  },
  {
    id: 2,
    title: "Thank you Teacher!",
    content: "Ma'am. To every skill I adopted for us to sustain, to understand emotions I wasn't able to comprehend, with every scolding you were building me brick by brick. You taught me how to love. Thoroughly. And I have been doing that ever since. So Memdi, my respect for you can't be measured on any scale!",
    bgColor: "from-indigo-950 via-purple-900 to-indigo-950",
    emoji: "🦄",
    floatingEmojis: ["🦄", "🦄", "🦄", "🦄", "🦄", "🦄", "🦄", "🦄", "🦄", "🦄"]
  },
  {
    id: 3,
    title: "New Waters",
    content: "It's not been easy as these are new waters I've sailed through, but I thank you for being the best captain for me to rely on. Troubled waters we did face but it gave way to calm ones as it was always us against everything. Tujhe pata hain how tightly we held together through those storms.",
    bgColor: "from-blue-900 via-cyan-900 to-blue-900",
    emoji: "☕",
    floatingEmojis: ["☕", "☕", "☕", "☕", "☕", "☕", "☕", "☕", "☕", "☕"]
  },
  {
    id: 4,
    title: "You First, Always",
    content: "I want you to be as you are and would like to see you prosper and grow as you are. You will be my first priority always, and me second. I knew from sometime of meeting you, I will take care of you above anything else.",
    bgColor: "from-slate-900 via-red-950 to-slate-900",
    emoji: "🌙",
    floatingEmojis: ["🌙", "🌙", "🌙", "🌙", "🌙", "🌙", "🌙", "🌙", "🌙", "🌙"]
  },
  {
    id: 5,
    title: "To the kid Ammu",
    content: "Thank you for teaching me how to be whole in everything—to laugh, to cry, to love truly and fully. Bachpana leke aayi tu vapis mere main and I hope I did brought out some of yours too joki bohot chaotic hain bhai!!",
    bgColor: "from-rose-950 via-red-900 to-rose-950",
    emoji: "💄",
    floatingEmojis: ["💄", "💄", "💄", "💄", "💄", "💄", "💄", "💄", "💄", "💄"]
  },
  {
    id: 6,
    title: "Forgiveness & Growth",
    content: "For every hurt and sadness I have caused, I ask for forgiveness. I'll always build myself and be better for you. Huggana band karoonga pakka :( Itni parfact kyun hain tu ki main hi humesha galat kar bait tha hun",
    bgColor: "from-blue-950 via-slate-900 to-blue-950",
    emoji: "👩‍🏫",
    floatingEmojis: ["👩‍🏫", "👩‍🏫", "👩‍🏫", "👩‍🏫", "👩‍🏫", "👩‍🏫", "👩‍🏫", "👩‍🏫", "👩‍🏫", "👩‍🏫"]
  },
  {
    id: 7,
    title: "The Happiest Moment",
    content: "Thank you for the giving me the opportunity to know you, to take care of you, to respect you, to love you and finally to kneel before you and present you with a ring. That was the happiest moment of my life yet. I couldn't be more grateful to the universe for giving me this goddess of a women.",
    bgColor: "from-red-950 via-pink-900 to-red-950",
    emoji: "💍",
    floatingEmojis: ["💍", "💍", "💍", "💍", "💍", "💍", "💍", "💍", "💍", "💍"],
    hasFalling: true,
    fallingEmojis: ["🎈", "🎈", "🎈", "🖤", "🖤", "🖤", "🎈", "🎈", "🎈", "🎈", "🖤", "🎈", "🎈", "🖤", "🎈", "🎈", "🖤", "🎈", "🎈", "🖤", "🎈", "🎈", "🖤", "🎈", "🎈", "🖤", "🎈", "🎈", "🖤", "🎈", "🎈", "🖤", "🎈", "🎈", "🖤", "🎈", "🎈", "🖤", "🎈", "🎈"]
  },
  {
    id: 8,
    title: "Happy New Year me love! me moon!",
    subtitle: "To many more years together",
    content: "May this new year bring us even more love, laughter, and beautiful memories. Here's to us, forever.",
    bgColor: "from-slate-900 via-blue-900 to-purple-900",
    emoji: "✨",
    floatingEmojis: ["✨", "💖", "🎊", "🎉", "✨", "💖", "🎊", "🎉", "✨", "💖"],
    hasFalling: true,
    fallingEmojis: ["💖", "🏍️", "⛵", "🌅", "♟️", "🎊", "🎉", "✨", "💖", "🏍️", "⛵", "🌅", "♟️", "🎊", "🎉", "✨", "💖", "🏍️", "⛵", "🌅", "♟️", "🎊", "🎉", "✨", "💖", "🏍️", "⛵", "🌅", "♟️", "🎊", "🎉", "✨", "💖", "🏍️", "⛵", "🌅", "♟️", "🎊", "🎉", "✨", "💖", "🏍️", "⛵", "🌅", "♟️", "🎊", "🎉", "✨", "💖", "🏍️"]
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNextSlide = () => {
    if (isAnimating || currentSlide === slides.length - 1) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(prev => prev + 1);
      setIsAnimating(false);
    }, 300);
  };

  const restartJourney = () => {
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(0);
      setIsAnimating(false);
    }, 300);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -30px) rotate(5deg);
          }
          50% {
            transform: translate(-15px, -60px) rotate(-5deg);
          }
          75% {
            transform: translate(25px, -30px) rotate(3deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        @keyframes fall {
          0% {
            transform: translateY(-150px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(120vh) rotate(360deg);
            opacity: 0.7;
          }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        .slide-enter {
          animation: slideInRight 0.5s ease-out forwards;
        }
        .slide-exit {
          animation: slideOutLeft 0.5s ease-out forwards;
        }
      `}</style>

      {/* Background with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} transition-all duration-[2000ms] ease-in-out`}>
        {/* Floating emojis */}
        {slide.floatingEmojis.map((emoji, idx) => (
          <FloatingEmoji key={`float-${idx}`} emoji={emoji} delay={idx * 0.3} />
        ))}
        
        {/* Falling emojis for special slides */}
        {slide.hasFalling && slide.fallingEmojis.map((emoji, idx) => (
          <FallingEmoji 
            key={`fall-${idx}`} 
            emoji={emoji} 
            delay={idx * 0.08} 
            duration={2.5 + Math.random() * 1.5}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 h-full flex flex-col items-center justify-between p-6 md:p-12 ${isAnimating ? 'slide-exit' : 'slide-enter'}`}>
        {/* Top section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-2xl">
          {currentSlide === 0 && (
            <div className="mb-20 w-64 h-64 flex items-center justify-center">
              <img src="/photo0.png" />
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {slide.title}
          </h1>
          
          {slide.subtitle && (
            <h2 className="text-2xl md:text-3xl text-white/90 mb-6 font-light">
              {slide.subtitle}
            </h2>
          )}
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
            {slide.content}
          </p>

          {/* Photo placeholder for content slides */}
          {currentSlide > 0 && currentSlide < slides.length && (
            <div className="mt-20 w-64 h-64 flex items-center justify-center">
              <img src={`/photo${currentSlide}.png`} />
            </div>
          )}
        </div>

        {/* Bottom navigation */}
        <div className="flex flex-col items-center gap-4">
          {/* Progress dots */}
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'bg-white w-8' : 'bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          {currentSlide < slides.length - 1 ? (
            <EmojiButton
              emoji={slides[currentSlide + 1].emoji}
              onClick={goToNextSlide}
            />
          ) : (
            <button
              onClick={restartJourney}
              className="flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <span className="text-5xl">🏃‍♂️</span>
              <span className="text-white/80 text-sm text-center max-w-xs">
                "Ye le rewind karle Gandini" 😏
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 text-white/60 text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}