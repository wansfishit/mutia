import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audioSynth';

interface CuteIntroGateProps {
  onEnter: (playMusic: boolean) => void;
}

export const CuteIntroGate: React.FC<CuteIntroGateProps> = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = (withMusic: boolean) => {
    setIsOpening(true);
    romanticAudio.playCelebration();

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF4D6D', '#FFB6C1', '#FFF3B0', '#FF8DA1', '#6EE7B7']
    });

    if (withMusic) {
      setTimeout(() => {
        romanticAudio.playSong();
      }, 300);
    }

    setTimeout(() => {
      setIsOpen(false);
      onEnter(withMusic);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#FFF2F5]/95 backdrop-blur-md"
        >
          {/* Floating cute doodles in background */}
          <div className="absolute top-12 left-10 text-4xl animate-wiggle">🌸</div>
          <div className="absolute top-20 right-12 text-4xl animate-bounce-slow">🎀</div>
          <div className="absolute bottom-16 left-12 text-4xl animate-float-cute">🍓</div>
          <div className="absolute bottom-20 right-10 text-4xl animate-pulse-heart">🧸</div>

          <motion.div
            initial={{ scale: 0.85, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-md p-8 text-center rounded-[36px] bg-white border-4 border-pastel-rose shadow-cute overflow-hidden"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pastel-soft border border-pastel-rose text-xs font-bold text-pastel-hot mb-5 animate-bounce-slow">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-cute" />
              <span>Pesan Spesial Buat Kamu</span>
            </div>

            {/* Cute Animated Couple Avatar with Bouncing Gift/Envelope */}
            <div className="relative my-4 flex justify-center">
              <motion.div
                animate={isOpening ? { scale: [1, 1.25, 0.9], rotate: [0, -8, 8, 0] } : { y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: isOpening ? 0 : Infinity, ease: 'easeInOut' }}
                className="relative w-28 h-28 rounded-3xl p-2 bg-gradient-to-tr from-pastel-rose via-pastel-soft to-pastel-yellow border-4 border-white shadow-cute"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white relative">
                  <img
                    src="/photos/IMG_8753.JPG"
                    alt="Tino & Mutia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-pastel-hot flex items-center justify-center border-2 border-white shadow-sm animate-pulse-heart">
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>
              </motion.div>
            </div>

            {/* Title & Greeting */}
            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-cute-text mb-2">
              Halo Sayangku, <span className="text-pastel-hot">Mutia!</span> 🌸
            </h1>

            <p className="text-xs sm:text-sm text-cute-subtext font-medium leading-relaxed mb-6">
              Ada kumpulan cerita manis dan pesan penuh cinta dari aku. Buka bareng lagu kesukaan kita yuk! 🥰
            </p>

            {/* Action Buttons: Play Music & Enter */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => handleOpen(true)}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-pastel-hot via-rose-500 to-amber-400 hover:from-pastel-hot hover:to-rose-400 text-white font-extrabold text-sm sm:text-base shadow-cute hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Music className="w-4 h-4 animate-bounce" />
                <span>Buka &amp; Putar Lagu Penjaga Hati 🎵💖</span>
              </button>

              <button
                type="button"
                onClick={() => handleOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-cute-subtext hover:text-pastel-hot transition-colors"
              >
                Buka tanpa musik
              </button>
            </div>

            <p className="text-[11px] text-cute-subtext/70 mt-3 font-medium">
              Dibuat penuh cinta khusus untuk Mutia ✨
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
