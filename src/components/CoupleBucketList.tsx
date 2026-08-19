import { useState } from 'react';
import { Plane, CheckCircle2, Circle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audioSynth';

interface BucketItem {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  tag: string;
  completed: boolean;
  color: string;
}

const initialBucketList: BucketItem[] = [
  {
    id: 'b1',
    emoji: '🇨🇭',
    title: 'Liburan Berdua ke Swiss Bareng Kamu',
    desc: 'Main salju, naik kereta kaca pemandangan Alpen, dan nikmatin pemandangan indah Swiss kalau kita udah sukses nanti!',
    tag: 'Impian Terbesar 🏔️',
    completed: false,
    color: 'border-[#99E9F2] bg-[#E3FAFC]',
  },
  {
    id: 'b2',
    emoji: '💼',
    title: 'Sukses & Tumbuh Bareng Menggapai Cita-Cita',
    desc: 'Saling dukung dalam setiap proses belajar dan karir sampai kita sama-sama bangga dengan pencapaian satu sama lain.',
    tag: 'Future Goals 🎓',
    completed: false,
    color: 'border-[#FFE066] bg-[#FFF9DB]',
  },
  {
    id: 'b3',
    emoji: '🍜',
    title: 'Mutia Kurangin Makan Mie (Jaga Kesehatan!)',
    desc: 'Biar pacar cantiknya gak gampang sakit, mulai rajin makan makanan bergizi (walau kadang tetep bandel nyuri makan mie wkwk).',
    tag: 'Sayang Kesehatan 🩺',
    completed: false,
    color: 'border-[#FFB6C1] bg-[#FFF0F5]',
  },
  {
    id: 'b4',
    emoji: '💍',
    title: 'Tetap Setia & Saling Menemani Selamanya',
    desc: 'Melewati segala suka duka, saling memaafkan kesalahan, dan terus melangkah bareng sampai masa tua nanti.',
    tag: 'Forever & Always 💖',
    completed: true,
    color: 'border-[#D8B4FE] bg-[#F3E8FF]',
  },
];

export const CoupleBucketList = () => {
  const [items, setItems] = useState<BucketItem[]>(() => {
    const saved = localStorage.getItem('mutia_bucket_list_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {}
    }
    return initialBucketList;
  });

  const toggleCheck = (id: string) => {
    romanticAudio.playHeartPop();
    confetti({
      particleCount: 30,
      spread: 60,
      colors: ['#FF4D6D', '#FFB6C1', '#FFF3B0', '#6EE7B7']
    });

    const updated = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updated);
    localStorage.setItem('mutia_bucket_list_v1', JSON.stringify(updated));
  };

  return (
    <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border-2 border-pastel-rose/60 text-xs font-bold text-pastel-hot mb-3 shadow-sm animate-bounce-slow">
          <Plane className="w-3.5 h-3.5 text-pastel-hot" />
          <span>Impian Masa Depan ✈️</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-cute-text mb-2">
          Wishlist &amp; Rencana <span className="text-pastel-hot underline decoration-wavy decoration-pastel-rose">Kita Berdua</span> 🏔️✨
        </h2>
        <p className="text-xs sm:text-sm text-cute-subtext font-medium max-w-md mx-auto">
          Daftar mimpi yang bakal kita wujudkan pelan-pelan bersama.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleCheck(item.id)}
            className={`cursor-pointer rounded-3xl p-5 border-2 ${item.color} shadow-sm transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-3xl">{item.emoji}</span>
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-pastel-hot">
                  <span>{item.tag}</span>
                  {item.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-100" />
                  ) : (
                    <Circle className="w-5 h-5 text-cute-subtext/40" />
                  )}
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-extrabold text-cute-text mb-1.5">
                {item.title}
              </h3>

              <p className="text-xs text-cute-subtext font-medium leading-relaxed mb-3">
                {item.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-white/60 flex items-center justify-between text-[11px] font-bold">
              <span className={item.completed ? 'text-emerald-600' : 'text-cute-subtext'}>
                {item.completed ? '✨ Dalam Proses Mewujudkan!' : '🎯 Target Impian Kita'}
              </span>
              <span className="text-pastel-hot hover:underline">
                {item.completed ? 'Selesai' : 'Klik untuk Check'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
