import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audioSynth';

export const PlayfulProposal = () => {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);

  const dodgeLabels = [
    'Gak Mau 😜',
    'Wleee gak kena! 🏃‍♂️💨',
    'Tombolnya ngambek wkwk',
    'Pencet yang kiri aja sayang! 🥰',
    'Gak boleh nolak cinta Tino! 🥺',
    'Harus pilih Mau Banget dong! 💖',
  ];

  const handleNoDodge = () => {
    const randomX = (Math.random() - 0.5) * 220;
    const randomY = (Math.random() - 0.5) * 140;
    setNoPos({ x: randomX, y: randomY });
    setDodgeCount((prev) => prev + 1);
    romanticAudio.playHeartPop();
  };

  const handleYes = () => {
    setAccepted(true);
    romanticAudio.playCelebration();

    // Multi-stage rainbow confetti explosion
    const duration = 3.5 * 1000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }
      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#FF4D6D', '#FFB6C1', '#FFF3B0', '#FF8DA1', '#6EE7B7', '#A78BFA']
      });
    }, 200);
  };

  return (
    <section className="py-16 px-4 sm:px-6 max-w-xl mx-auto text-center">
      <div className="cute-card p-8 sm:p-10 border-4 border-pastel-rose bg-white shadow-cute relative overflow-hidden">
        {!accepted ? (
          <div>
            <div className="w-16 h-16 rounded-3xl bg-pastel-soft border-2 border-pastel-rose mx-auto mb-4 flex items-center justify-center text-3xl animate-bounce">
              💖
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pastel-soft text-xs font-bold text-pastel-hot mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pertanyaan Paling Penting</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-cute-text mb-2">
              Mutia mau terus sama Tino selamanya kan? 🥺🎀
            </h2>
            <p className="text-xs sm:text-sm text-cute-subtext font-medium max-w-xs mx-auto mb-8">
              Bahagia bareng, jajan bareng, dan lewatin semua cerita berdua!
            </p>

            {/* Action Buttons */}
            <div className="relative flex items-center justify-center gap-3 min-h-[60px]">
              {/* YES BUTTON */}
              <button
                onClick={handleYes}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pastel-hot via-rose-500 to-amber-400 hover:from-pastel-hot hover:to-rose-400 text-white font-extrabold text-sm sm:text-base shadow-cute hover:scale-105 active:scale-95 transition-all flex items-center gap-2 z-20"
              >
                <PartyPopper className="w-4 h-4 animate-bounce" />
                <span>Mau Bangettt! 🥰💖</span>
              </button>

              {/* NO BUTTON (DODGE) */}
              <motion.button
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                onMouseEnter={handleNoDodge}
                onTouchStart={handleNoDodge}
                onClick={handleNoDodge}
                className="px-4 py-3 rounded-full bg-pastel-soft hover:bg-pastel-rose/30 text-cute-subtext font-bold text-xs border-2 border-pastel-rose/60 transition-colors shadow-sm"
              >
                {dodgeLabels[dodgeCount % dodgeLabels.length]}
              </motion.button>
            </div>

            {dodgeCount > 0 && (
              <p className="text-xs text-pastel-hot font-bold mt-4 animate-fade-in">
                (Hihi tombolnya kabur terus kan, tandanya takdir harus pilih Mau! 😜)
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-4 animate-fade-in py-2">
            <div className="relative w-28 h-28 rounded-3xl overflow-hidden mx-auto border-4 border-pastel-rose shadow-cute animate-bounce-slow">
              <img
                src="/photos/IMG_8753.JPG"
                alt="Tino & Mutia"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-pastel-hot flex items-center justify-center border-2 border-white">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
            </div>

            <h3 className="text-2xl font-heading font-extrabold text-cute-text">
              YAYYY! I LOVE YOU MUTIA! 💍💖
            </h3>

            <p className="text-sm font-cute text-2xl text-pastel-hot font-bold">
              Janji Tino untuk selalu jaga dan bahagiain kamu selamanya.
            </p>

            <p className="text-xs text-cute-subtext font-medium max-w-xs mx-auto leading-relaxed">
              Makasih yaa sudah memilih untuk terus melangkah bareng Tino. Kamu adalah kebahagiaan terindah buat Tino! 🥰
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
