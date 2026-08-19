import { useState, useEffect } from 'react';
import { Heart, Music, Disc } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audioSynth';

export const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(romanticAudio.getIsPlaying());
  }, []);

  const toggleMusic = () => {
    const active = romanticAudio.togglePlay();
    setIsPlaying(active);
    if (active) {
      confetti({
        particleCount: 25,
        spread: 60,
        colors: ['#FF4D6D', '#FFB6C1', '#FFF3B0', '#FF8DA1']
      });
    }
  };

  const triggerLoveBurst = () => {
    romanticAudio.playHeartPop();
    confetti({
      particleCount: 25,
      spread: 60,
      colors: ['#FF4D6D', '#FFB6C1', '#FFF3B0', '#FF8DA1']
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between cute-card px-4 sm:px-6 py-2.5 border-2 border-pastel-rose/60 bg-white/95 shadow-cute">
        {/* Brand */}
        <button
          onClick={triggerLoveBurst}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-pastel-soft border-2 border-pastel-rose flex items-center justify-center animate-bounce-slow">
            <Heart className="w-4 h-4 text-pastel-hot fill-pastel-hot" />
          </div>
          <div>
            <span className="text-sm font-bold tracking-tight text-cute-text flex items-center gap-1">
              Tino <span className="text-pastel-hot">&hearts;</span> Mutia
            </span>
            <span className="block text-[10px] text-pastel-hot font-medium -mt-0.5">Penjaga Hati 🌸</span>
          </div>
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-cute-subtext">
          <a href="#gallery" className="hover:text-pastel-hot transition-colors flex items-center gap-1">
            <span>📸 Foto Kita</span>
          </a>
          <a href="#cute-zone" className="hover:text-pastel-hot transition-colors flex items-center gap-1">
            <span>🎀 Hal Gemes</span>
          </a>
          <a href="#vouchers" className="hover:text-pastel-hot transition-colors flex items-center gap-1">
            <span>🎟️ Kupon</span>
          </a>
          <a href="#letter" className="hover:text-pastel-hot transition-colors flex items-center gap-1">
            <span>💌 Surat</span>
          </a>
        </nav>

        {/* Audio Player Button (Nadhif Basalamah - Penjaga Hati) */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMusic}
            className={`flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full font-bold transition-all active:scale-95 border-2 ${
              isPlaying
                ? 'bg-pastel-hot text-white border-pastel-hot shadow-cute animate-pulse-heart'
                : 'bg-pastel-soft text-cute-text border-pastel-rose hover:bg-pastel-rose/30'
            }`}
            title="Nadhif Basalamah - Penjaga Hati"
          >
            {isPlaying ? (
              <>
                <Disc className="w-4 h-4 animate-spin-cute" />
                <span className="text-[11px]">Penjaga Hati 🎵</span>
              </>
            ) : (
              <>
                <Music className="w-3.5 h-3.5 text-pastel-hot animate-bounce" />
                <span className="text-[11px]">Putar Penjaga Hati 🎶</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
