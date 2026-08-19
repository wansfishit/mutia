import { Flag, MessageCircle, Heart, Sparkles, Gift } from 'lucide-react';

interface StoryStep {
  badge: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  tag: string;
  color: string;
}

const stories: StoryStep[] = [
  {
    badge: 'Masa Sekolah',
    title: 'Pertama Kali Liat di Latihan LKBB 🏫✨',
    desc: 'Waktu kamu lagi fokus latihan LKBB di sekolah, mataku beneran gak bisa lepas dari kamu. Di kepalaku cuma ada satu kata: bidadari dari mana ini, cantik banget...',
    icon: <Flag className="w-4 h-4 text-pastel-hot" />,
    tag: 'Awal Mula Jatuh Hati',
    color: 'border-[#FFB6C1] bg-[#FFF0F5]',
  },
  {
    badge: 'Fase PDKT',
    title: 'Perjuangan Chat & Sikap Cuek Kamu 📱💬',
    desc: 'Bela-belain minta nomor WA kamu ke temen. Pas awal di-chat, balesnya cuek dan singkat banget wkwk! Tapi untung aku gak gampang nyerah, sampai akhirnya kamu luluh dan suka balik sama aku.',
    icon: <MessageCircle className="w-4 h-4 text-amber-500" />,
    tag: 'Pantang Menyerah',
    color: 'border-[#FFE066] bg-[#FFF9DB]',
  },
  {
    badge: 'Juli 2024',
    title: 'Resmi Memulai Cerita Kita Berdua 🗓️💖',
    desc: 'Bulan yang mengubah segalanya. Dari yang awalnya cuma bisa ngeliatin dari jauh dan ngechat malu-malu, akhirnya kita resmi melangkah bareng sebagai pasangan.',
    icon: <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />,
    tag: 'Titik Awal Kebersamaan',
    color: 'border-[#D8B4FE] bg-[#F3E8FF]',
  },
  {
    badge: 'Momen Spesial',
    title: 'Buket Mawar Biru & Ulang Tahun Kamu 🎂💐',
    desc: 'Momen ngerayain hari lahir Kharisma Mutia (27 Mei). Kacamata Happy Birthday konyol dan buket mawar biru jadi saksi senyum bahagia kamu yang paling berharga buat aku.',
    icon: <Gift className="w-4 h-4 text-sky-500" />,
    tag: '27 Mei 2009',
    color: 'border-[#99E9F2] bg-[#E3FAFC]',
  },
];

export const OurJourney = () => {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border-2 border-pastel-rose/60 text-xs font-bold text-pastel-hot mb-3 shadow-sm animate-bounce-slow">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Perjalanan Cerita Kita 📖</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-cute-text mb-2">
          Dari Lapangan LKBB Sampai <span className="text-pastel-hot underline decoration-wavy decoration-pastel-rose">Sekarang</span> 🌸
        </h2>
        <p className="text-xs sm:text-sm text-cute-subtext font-medium max-w-md mx-auto">
          Setiap langkah dan perjuangan yang bikin kita bisa sama-sama sampai hari ini.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 sm:before:left-1/2 before:-translate-x-1/2 before:w-1 before:bg-gradient-to-b before:from-pastel-rose before:via-pastel-hot before:to-pastel-soft">
        {stories.map((story, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`relative flex items-center gap-6 ${
                isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
              } flex-row`}
            >
              {/* Center Dot */}
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-pastel-hot flex items-center justify-center shadow-md z-10">
                <span className="w-2 h-2 rounded-full bg-pastel-hot" />
              </div>

              {/* Card */}
              <div
                className={`ml-14 sm:ml-0 sm:w-1/2 ${
                  isEven ? 'sm:pr-8' : 'sm:pl-8'
                } w-full`}
              >
                <div
                  className={`p-5 sm:p-6 rounded-3xl border-2 ${story.color} shadow-sm transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-extrabold text-pastel-hot bg-white px-2.5 py-0.5 rounded-full border border-pastel-rose/40">
                      {story.badge}
                    </span>
                    <span className="text-[11px] font-bold text-cute-subtext flex items-center gap-1">
                      {story.icon}
                      <span>{story.tag}</span>
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-cute-text mb-2">
                    {story.title}
                  </h3>

                  <p className="text-xs text-cute-subtext font-medium leading-relaxed">
                    {story.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
