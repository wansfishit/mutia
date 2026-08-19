import { useState, useEffect } from 'react';
import { Calendar, Sparkles, Clock, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audioSynth';

export const HeroSection = () => {
  const [startDateStr, setStartDateStr] = useState<string>(() => {
    const saved = localStorage.getItem('tino_mutia_anniversary_july2024');
    if (saved) return saved;
    return '2024-07-01';
  });

  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [gemesLevel, setGemesLevel] = useState(100);
  const [isEditing, setIsEditing] = useState(false);
  const [tempDate, setTempDate] = useState(startDateStr);

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDateStr).getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, now - start);

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeTogether({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [startDateStr]);

  const handleBoostGemes = () => {
    romanticAudio.playHeartPop();
    setGemesLevel((prev) => prev + 100);
    confetti({
      particleCount: 30,
      spread: 60,
      colors: ['#FF4D6D', '#FFB6C1', '#FFF3B0', '#FF8DA1']
    });
  };

  const handleSaveDate = () => {
    setStartDateStr(tempDate);
    localStorage.setItem('tino_mutia_anniversary_july2024', tempDate);
    setIsEditing(false);
  };

  return (
    <section id="top" className="pt-28 pb-16 px-4 sm:px-6 max-w-4xl mx-auto text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
        {/* Cute Couple Photo with Playful Stickers */}
        <div className="relative flex-shrink-0 w-64 sm:w-72">
          <div className="relative group cursor-pointer" onClick={handleBoostGemes}>
            {/* Cute Pastel Border Frame */}
            <div className="w-full aspect-square rounded-[36px] p-3 bg-gradient-to-tr from-pastel-rose via-pastel-soft to-pastel-yellow shadow-cute border-4 border-white transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
              <div className="w-full h-full rounded-[28px] overflow-hidden bg-white relative">
                <img
                  src="/photos/IMG_8753.JPG"
                  alt="Tino & Mutia"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end justify-center pb-2">
                  <span className="text-white text-xs font-bold bg-pastel-hot/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/40 shadow-sm">
                    Tino &hearts; Mutia
                  </span>
                </div>
              </div>
            </div>

            {/* Bouncing Cute Stickers */}
            <div className="absolute -top-4 -left-3 text-3xl animate-wiggle">
              🎀
            </div>
            <div className="absolute -top-3 -right-2 text-3xl animate-bounce-slow">
              🧸
            </div>
            <div className="absolute -bottom-3 -left-2 text-3xl animate-float-cute">
              🍓
            </div>
            <div className="absolute -bottom-4 -right-3 text-3xl animate-pulse-heart">
              💖
            </div>
          </div>

          {/* Cute Sticker Caption */}
          <div className="mt-4 text-center">
            <span className="inline-block bg-white border-2 border-pastel-rose/60 text-cute-subtext text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              ✨ Bidadari Paling Cantik &amp; Gemes ✨
            </span>
          </div>
        </div>

        {/* Hero Copy & Interactive Gemes Booster */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pastel-soft border-2 border-pastel-rose/60 text-xs font-bold text-pastel-hot mb-4 animate-bounce-slow">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin-cute" />
            <span>Spesial Buat Pacar Paling Cantik Sedunia!</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-cute-text tracking-tight leading-tight mb-3">
            Halo Cantikku, <br />
            <span className="text-pastel-hot underline decoration-wavy decoration-pastel-rose">Mutia!</span> 🌸💖
          </h1>

          <p className="text-sm sm:text-base text-cute-subtext leading-relaxed max-w-lg mb-6 font-medium">
            Ruang kecil untuk menyimpan setiap senyum, tawa, dan cerita perjalanan kita berdua. Makasih ya sudah selalu jadi bagian terindah di hidup aku. 🥰
          </p>

          {/* Cute Interactive Gemes Meter */}
          <div className="cute-card p-4 border-2 border-pastel-rose/50 bg-white/90 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-cute">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-pastel-soft border border-pastel-rose flex items-center justify-center text-xl animate-wiggle">
                💖
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-cute-text">Tingkat Sayang &amp; Gemes Hari Ini:</p>
                <p className="text-xs font-extrabold text-pastel-hot">{gemesLevel}% (Unlimited Penuh Cinta!)</p>
              </div>
            </div>

            <button
              onClick={handleBoostGemes}
              className="px-4 py-2 rounded-2xl bg-gradient-to-r from-pastel-hot to-pastel-rose text-white text-xs font-extrabold shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <Flame className="w-4 h-4 fill-white" />
              <span>Tambah Gemes! 🚀</span>
            </button>
          </div>

          {/* Cute Pastel Love Counter */}
          <div className="cute-card p-5 border-2 border-pastel-rose/50 bg-white/90 shadow-cute">
            <div className="flex items-center justify-between border-b border-pastel-soft pb-2.5 mb-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-cute-text">
                <Clock className="w-4 h-4 text-pastel-hot" />
                <span>Kita udah bareng-bareng selama:</span>
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-[11px] font-bold text-pastel-hot hover:underline"
              >
                {isEditing ? 'Batal' : '✏️ Ubah Tanggal'}
              </button>
            </div>

            {isEditing && (
              <div className="flex items-center gap-2 mb-3 p-2.5 bg-pastel-soft/60 rounded-xl border border-pastel-rose/50">
                <Calendar className="w-4 h-4 text-pastel-hot" />
                <input
                  type="date"
                  value={tempDate}
                  onChange={(e) => setTempDate(e.target.value)}
                  className="bg-white px-2 py-1 rounded-lg text-xs font-bold text-cute-text border border-pastel-rose focus:outline-none flex-1"
                />
                <button
                  onClick={handleSaveDate}
                  className="text-xs px-3 py-1 bg-pastel-hot rounded-lg text-white font-bold"
                >
                  Simpan
                </button>
              </div>
            )}

            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="p-2.5 rounded-2xl bg-pastel-soft/60 border border-pastel-rose/30">
                <div className="text-xl sm:text-2xl font-extrabold text-pastel-hot font-mono">{timeTogether.days}</div>
                <div className="text-[10px] font-bold text-cute-subtext uppercase mt-0.5">Hari 🗓️</div>
              </div>
              <div className="p-2.5 rounded-2xl bg-pastel-soft/60 border border-pastel-rose/30">
                <div className="text-xl sm:text-2xl font-extrabold text-cute-text font-mono">{String(timeTogether.hours).padStart(2, '0')}</div>
                <div className="text-[10px] font-bold text-cute-subtext uppercase mt-0.5">Jam ⏰</div>
              </div>
              <div className="p-2.5 rounded-2xl bg-pastel-soft/60 border border-pastel-rose/30">
                <div className="text-xl sm:text-2xl font-extrabold text-cute-text font-mono">{String(timeTogether.minutes).padStart(2, '0')}</div>
                <div className="text-[10px] font-bold text-cute-subtext uppercase mt-0.5">Menit ⏳</div>
              </div>
              <div className="p-2.5 rounded-2xl bg-pastel-soft/60 border border-pastel-rose/30">
                <div className="text-xl sm:text-2xl font-extrabold text-pastel-hot font-mono animate-pulse">{String(timeTogether.seconds).padStart(2, '0')}</div>
                <div className="text-[10px] font-bold text-pastel-hot uppercase mt-0.5">Detik 💖</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
