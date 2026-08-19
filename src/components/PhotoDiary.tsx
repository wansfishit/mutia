import { useState } from 'react';
import { Camera, X, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audioSynth';

interface CutePhoto {
  id: string;
  image: string;
  title: string;
  sticker: string;
  note: string;
  rotation: string;
  tapeColor: string;
}

const photoCards: CutePhoto[] = [
  {
    id: '1',
    image: '/photos/IMG_8018.jpg',
    title: 'Zaman Sekolah Dulu 🏫',
    sticker: '🌸',
    note: 'Masih pakai seragam abu-abu! Dari zaman ini udah saling naksir dan mulai cerita manis kita berdua hihi.',
    rotation: '-rotate-2',
    tapeColor: 'bg-pastel-rose/80',
  },
  {
    id: '2',
    image: '/photos/IMG_2265.PNG',
    title: 'Dinner Date Berdua 🍽️',
    sticker: '🍓',
    note: 'Momen makan bareng! Liat deh muka gemes Mutia, selalu heboh dan ceria kalau diajak makan makanan enak.',
    rotation: 'rotate-2',
    tapeColor: 'bg-pastel-yellow/80',
  },
  {
    id: '3',
    image: '/photos/IMG_2384.JPG',
    title: 'Kacamata Ulang Tahun 🎂🎉',
    sticker: '🎂',
    note: 'Momen seru ngerayain ulang tahun bareng Mutia! Pakai kacamata Happy Birthday yang gemesin banget, selalu ada kejutan dan tawa tiap bareng kamu. 🥰✨',
    rotation: '-rotate-1',
    tapeColor: 'bg-pastel-lavender/80',
  },
  {
    id: '4',
    image: '/photos/IMG_6520.jpg',
    title: 'Nongkrong Santai ☕',
    sticker: '🌙',
    note: 'Night chill di kafe berdua. Ngobrolin ribuan hal receh sampai lupa waktu saking nyamannya.',
    rotation: 'rotate-3',
    tapeColor: 'bg-pastel-peach/80',
  },
  {
    id: '5',
    image: '/photos/IMG_3733.JPG',
    title: 'Mirror Selfie Wajib 🪞',
    sticker: '🧸',
    note: 'Ritual foto wajib di kaca setiap kali ketemu, biar galerinya penuh sama muka cantik Mutia.',
    rotation: '-rotate-3',
    tapeColor: 'bg-pastel-mint/80',
  },
  {
    id: '6',
    image: '/photos/IMG_8753.JPG',
    title: 'Dua Senyuman Manis 🥰',
    sticker: '💖',
    note: 'Senyum paling bahagia! Makasih ya Sayang udah selalu jadi alasan Tino tersenyum setiap hari.',
    rotation: 'rotate-1',
    tapeColor: 'bg-pastel-rose/80',
  },
];

export const PhotoDiary = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<CutePhoto | null>(null);

  const handleLoveMoment = () => {
    romanticAudio.playHeartPop();
    confetti({
      particleCount: 35,
      spread: 70,
      colors: ['#FF4D6D', '#FFB6C1', '#FFF3B0', '#FF8DA1']
    });
  };

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border-2 border-pastel-rose/60 text-xs font-bold text-pastel-hot mb-3 shadow-sm animate-bounce-slow">
          <Camera className="w-3.5 h-3.5" />
          <span>Scrapbook Kenangan Kita 📸</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-cute-text mb-2">
          Koleksi Foto <span className="text-pastel-hot underline decoration-wavy decoration-pastel-rose">Paling Gemes</span> Kita Berdua 💖
        </h2>
        <p className="text-xs sm:text-sm text-cute-subtext font-medium max-w-md mx-auto">
          Klik fotonya buat liat cerita seru di balik setiap momen kita ya Sayang!
        </p>
      </div>

      {/* Grid of Polaroid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 pt-2">
        {photoCards.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className={`group relative cursor-pointer polaroid-cute ${photo.rotation}`}
          >
            {/* Washi Tape Header */}
            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 ${photo.tapeColor} border border-white/60 shadow-sm rounded-sm z-10`} />

            {/* Sticker Top Corner */}
            <div className="absolute top-2 right-2 text-2xl z-10 transition-transform group-hover:scale-125 group-hover:rotate-12">
              {photo.sticker}
            </div>

            {/* Photo */}
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-pastel-soft mb-3 shadow-inner relative">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-pastel-hot/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-pastel-hot font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-pastel-hot" /> Buka Cerita
                </span>
              </div>
            </div>

            {/* Text caption */}
            <div className="text-center px-1">
              <h3 className="text-sm font-extrabold text-cute-text mb-1 flex items-center justify-center gap-1">
                <span>{photo.title}</span>
              </h3>
              <p className="text-xs text-cute-subtext font-medium line-clamp-2 leading-snug">
                {photo.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cute Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md cute-card p-6 border-4 border-pastel-rose bg-white shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-pastel-soft hover:bg-pastel-rose text-cute-text transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-3">
              <span className="text-3xl animate-bounce">{selectedPhoto.sticker}</span>
              <h3 className="text-lg font-extrabold text-cute-text mt-1">{selectedPhoto.title}</h3>
            </div>

            <div className="aspect-[4/5] max-h-[50vh] w-full rounded-2xl overflow-hidden bg-pastel-soft mb-4 border-2 border-pastel-rose shadow-inner flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-cute-subtext font-medium leading-relaxed mb-4 text-center">
              {selectedPhoto.note}
            </p>

            <div className="flex justify-center border-t-2 border-pastel-soft pt-3">
              <button
                onClick={handleLoveMoment}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-pastel-hot to-pastel-rose text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Love Foto Ini Banget! 💖</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
