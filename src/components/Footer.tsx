import { Heart, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audioSynth';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    romanticAudio.playHeartPop();
    confetti({
      particleCount: 20,
      spread: 50,
      colors: ['#FF4D6D', '#FFB6C1', '#FFF3B0']
    });
  };

  return (
    <footer className="border-t-2 border-pastel-rose/50 py-12 px-4 sm:px-6 text-center text-xs text-cute-subtext bg-white/70">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-pastel-soft border-2 border-pastel-rose flex items-center justify-center animate-bounce-slow">
          <Heart className="w-5 h-5 text-pastel-hot fill-pastel-hot" />
        </div>

        <p className="text-cute-text font-bold text-sm">
          Dibuat dengan segenap rasa sayang oleh Tino khusus buat Mutia 💖
        </p>

        <p className="text-[11px] text-cute-subtext font-medium">
          Setiap Hari Bareng Kamu Selalu Jadi Hari Terbaik &bull; Forever &amp; Always
        </p>

        <button
          onClick={scrollToTop}
          className="mt-3 text-xs font-bold text-pastel-hot bg-pastel-soft hover:bg-pastel-rose/40 px-4 py-1.5 rounded-full border border-pastel-rose/60 flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Kembali ke atas 🚀</span>
        </button>
      </div>
    </footer>
  );
};
