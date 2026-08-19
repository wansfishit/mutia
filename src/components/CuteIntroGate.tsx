import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Heart } from 'lucide-react';
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
      particleCount: 40,
      spread: 65,
      origin: { y: 0.6 },
      colors: ['#FF4D6D', '#FFB6C1', '#FFF3B0', '#FF8DA1']
    });

    if (withMusic) {
      setTimeout(() => {
        romanticAudio.playSong();
      }, 300);
    }

    setTimeout(() => {
      setIsOpen(false);
      onEnter(withMusic);
    }, 900);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#FFF2F5]/95 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 240 }}
            className="relative w-full max-w-sm p-7 text-center rounded-[32px] bg-white border-2 border-pastel-rose/70 shadow-cute overflow-hidden"
          >
            {/* Couple Avatar */}
            <div className="relative my-3 flex justify-center">
              <motion.div
                animate={isOpening ? { scale: [1, 1.15, 0.95] } : { y: [0, -6, 0] }}
                transition={{ duration: 2.2, repeat: isOpening ? 0 : Infinity, ease: 'easeInOut' }}
                className="relative w-24 h-24 rounded-3xl p-1.5 bg-gradient-to-tr from-pastel-rose to-pastel-yellow border-2 border-white shadow-cute"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white relative">
                  <img
                    src="/photos/IMG_8753.JPG"
                    alt="Mutia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-pastel-hot flex items-center justify-center border-2 border-white shadow-sm">
                  <Heart className="w-3.5 h-3.5 text-white fill-white" />
                </div>
              </motion.div>
            </div>

            {/* Simple Clean Title & Subtitle */}
            <h1 className="text-2xl font-heading font-extrabold text-cute-text mb-1">
              Halo, Mutia
            </h1>

            <p className="text-xs sm:text-sm text-cute-subtext font-medium mb-6">
              Ada sesuatu buat kamu.
            </p>

            {/* Simple Buttons */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => handleOpen(true)}
                className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-pastel-hot to-pastel-rose hover:from-pastel-hot hover:to-rose-400 text-white font-bold text-sm shadow-sm hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Volume2 className="w-4 h-4" />
                <span>Buka dengan Musik</span>
              </button>

              <button
                type="button"
                onClick={() => handleOpen(false)}
                className="w-full py-2 px-4 rounded-xl text-xs font-medium text-cute-subtext hover:text-pastel-hot transition-colors flex items-center justify-center gap-1.5"
              >
                <VolumeX className="w-3.5 h-3.5" />
                <span>Buka tanpa musik</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
