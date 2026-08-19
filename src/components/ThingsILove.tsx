import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audioSynth';

interface CuteNote {
  id: number;
  emoji: string;
  title: string;
  desc: string;
  bgColor: string;
  borderColor: string;
  likes: number;
}

const initialNotes: CuteNote[] = [
  {
    id: 1,
    emoji: '🍜',
    title: 'Pecandu Mie Garis Keras',
    desc: 'Sering banget dilarang makan mie mulu demi kesehatan, tapi tetep aja bandel nyuri-nyuri makan wkwk!',
    bgColor: 'bg-[#FFF0F5]',
    borderColor: 'border-[#FFB6C1]',
    likes: 48,
  },
  {
    id: 2,
    emoji: '😴',
    title: 'Hobi Tidur & Mager Mandi Sore',
    desc: 'Paling suka tidur dan mager kalau udah disuruh mandi sore, tapi muka ngantuk kamu tetep aja gemesin sedunia.',
    bgColor: 'bg-[#FFF9DB]',
    borderColor: 'border-[#FFE066]',
    likes: 56,
  },
  {
    id: 3,
    emoji: '🥺',
    title: 'Momen Manja Pas Lagi Ngambek',
    desc: 'Kalau lagi ngambek harus langsung dibujuk, dimanjain, dan dibecandain sampai akhirnya kamu gak tahan buat ketawa lagi.',
    bgColor: 'bg-[#F3E8FF]',
    borderColor: 'border-[#D8B4FE]',
    likes: 62,
  },
  {
    id: 4,
    emoji: '🌸',
    title: 'Panggilan "Saayaaanggg"',
    desc: 'Cara kamu manggil dengan nada manja yang khas, selalu sukses bikin hati aku adem dan meleleh seketika.',
    bgColor: 'bg-[#FFE8E8]',
    borderColor: 'border-[#FFA8A8]',
    likes: 70,
  },
  {
    id: 5,
    emoji: '💖',
    title: 'Kesabaran & Kesetiaan Kamu',
    desc: 'Walaupun aku sering bikin salah dan buat kamu sedih, kamu selalu punya hati yang luas buat maafin dan tetap setia nemenin aku.',
    bgColor: 'bg-[#EBFBEE]',
    borderColor: 'border-[#B2F2BB]',
    likes: 85,
  },
  {
    id: 6,
    emoji: '🍯',
    title: 'Definisi Rumah & Kebahagiaan',
    desc: 'Di hari yang capek sekalipun, ngobrol dan ada di dekat kamu selalu berhasil bikin hati tenang dan penuh rasa syukur.',
    bgColor: 'bg-[#E3FAFC]',
    borderColor: 'border-[#99E9F2]',
    likes: 92,
  },
];

export const ThingsILove = () => {
  const [notes, setNotes] = useState<CuteNote[]>(initialNotes);

  const handleLike = (id: number) => {
    romanticAudio.playHeartPop();
    confetti({
      particleCount: 20,
      spread: 50,
      colors: ['#FF4D6D', '#FFB6C1', '#FFF3B0', '#FF8DA1']
    });
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, likes: n.likes + 1 } : n))
    );
  };

  return (
    <section id="cute-zone" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border-2 border-pastel-rose/60 text-xs font-bold text-pastel-hot mb-3 shadow-sm animate-bounce-slow">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Sisi Gemes Tentang Mutia 🎀</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-cute-text mb-2">
          Kebiasaan Unik yang <span className="text-pastel-hot underline decoration-wavy decoration-pastel-rose">Bikin Sayang</span> ✨
        </h2>
        <p className="text-xs sm:text-sm text-cute-subtext font-medium max-w-md mx-auto">
          Tingkah-tingkah lucu kamu yang selalu bikin aku senyum dan jatuh hati setiap hari!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`${note.bgColor} ${note.borderColor} border-2 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl animate-wiggle">{note.emoji}</span>
                <button
                  onClick={() => handleLike(note.id)}
                  className="flex items-center gap-1 text-xs font-bold bg-white text-pastel-hot border border-pastel-rose/60 px-2.5 py-1 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all"
                >
                  <Heart className="w-3.5 h-3.5 fill-pastel-hot" />
                  <span>{note.likes}</span>
                </button>
              </div>

              <h3 className="text-sm font-extrabold text-cute-text mb-1.5">
                {note.title}
              </h3>
              <p className="text-xs text-cute-subtext font-medium leading-relaxed">
                {note.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
