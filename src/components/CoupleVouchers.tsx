import { useState } from 'react';
import { Ticket, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audioSynth';

interface CuteVoucher {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  color: string;
  claimed: boolean;
}

const initialVouchers: CuteVoucher[] = [
  {
    id: 'v1',
    emoji: '🍦',
    title: 'Kupon Traktir Jajan Bebas',
    desc: 'Mutia bebas pilih es krim, seblak, boba, atau makanan manis apa aja. Tino yang bayar!',
    color: 'from-[#FFE3EC] to-[#FFCCD5]',
    claimed: false,
  },
  {
    id: 'v2',
    emoji: '🤗',
    title: 'Kupon Peluk Erat 24 Jam',
    desc: 'Bebas dipakai kapan aja Mutia lagi capek, butuh dielus-elus, atau lagi pengen manja.',
    color: 'from-[#FFF4E6] to-[#FFE8CC]',
    claimed: false,
  },
  {
    id: 'v3',
    emoji: '👑',
    title: 'Kupon Ratu Sehari',
    desc: 'Tino nurut 100% seharian tanpa protes! Mau minta anter atau suruh apa aja siap laksanakan.',
    color: 'from-[#F3E8FF] to-[#E9D5FF]',
    claimed: false,
  },
  {
    id: 'v4',
    emoji: '🎬',
    title: 'Kupon Movie Marathon',
    desc: 'Nonton film/drakor favorit Mutia seharian berdua ditemenin camilan enak sampai puas.',
    color: 'from-[#E6FCF5] to-[#C3FAE8]',
    claimed: false,
  },
];

export const CoupleVouchers = () => {
  const [vouchers, setVouchers] = useState<CuteVoucher[]>(() => {
    const saved = localStorage.getItem('tino_mutia_vouchers_v3');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {}
    }
    return initialVouchers;
  });

  const handleClaim = (id: string) => {
    romanticAudio.playCelebration();
    confetti({
      particleCount: 40,
      spread: 70,
      colors: ['#FF4D6D', '#FFB6C1', '#FFF3B0', '#FF8DA1']
    });

    const updated = vouchers.map((v) =>
      v.id === id ? { ...v, claimed: !v.claimed } : v
    );
    setVouchers(updated);
    localStorage.setItem('tino_mutia_vouchers_v3', JSON.stringify(updated));
  };

  return (
    <section id="vouchers" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border-2 border-pastel-rose/60 text-xs font-bold text-pastel-hot mb-3 shadow-sm animate-bounce-slow">
          <Ticket className="w-3.5 h-3.5" />
          <span>Voucher Manja Khusus Mutia 🎟️</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-cute-text mb-2">
          Kupon Cinta <span className="text-pastel-hot underline decoration-wavy decoration-pastel-rose">Gratis Seumur Hidup</span> 💖
        </h2>
        <p className="text-xs sm:text-sm text-cute-subtext font-medium max-w-md mx-auto">
          Tinggal klik klaim kuponnya kapanpun Mutia mau pakai ke Tino yaa!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {vouchers.map((voucher) => (
          <div
            key={voucher.id}
            className={`rounded-3xl p-5 border-2 border-pastel-rose/50 bg-gradient-to-br ${voucher.color} shadow-sm transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between`}
          >
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-white/60 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl animate-bounce-slow">{voucher.emoji}</span>
                  <span className="text-xs font-extrabold text-cute-text">OFFICIAL LOVE TICKET</span>
                </div>
                <span className="text-[10px] font-bold text-pastel-hot bg-white/80 px-2 py-0.5 rounded-full border border-pastel-rose/40">
                  MUTIA ONLY ✨
                </span>
              </div>

              <h3 className="text-base font-extrabold text-cute-text mb-1.5">
                {voucher.title}
              </h3>
              <p className="text-xs text-cute-subtext font-medium leading-relaxed mb-4">
                {voucher.desc}
              </p>
            </div>

            {/* Bottom Claim Button */}
            <div className="flex items-center justify-between border-t-2 border-white/60 pt-3">
              <span className="text-[11px] font-bold text-cute-subtext">
                {voucher.claimed ? '🎉 Sudah Diklaim!' : '✅ Siap Dipakai'}
              </span>

              <button
                onClick={() => handleClaim(voucher.id)}
                className={`text-xs px-4 py-2 rounded-2xl font-extrabold transition-all flex items-center gap-1.5 shadow-sm active:scale-95 ${
                  voucher.claimed
                    ? 'bg-white text-cute-text hover:bg-pastel-soft'
                    : 'bg-pastel-hot text-white hover:bg-pastel-rose'
                }`}
              >
                {voucher.claimed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-500" />
                    <span>Pakai Lagi</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Klaim Kupon 💖</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
