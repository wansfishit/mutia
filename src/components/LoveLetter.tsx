import { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audioSynth';

export const LoveLetter = () => {
  const [replyText, setReplyText] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    romanticAudio.playCelebration();
    confetti({
      particleCount: 40,
      spread: 70,
      colors: ['#FF4D6D', '#FFB6C1', '#FFF3B0', '#FF8DA1']
    });

    localStorage.setItem('mutia_cute_reply_v3', replyText);
    setIsSent(true);
  };

  const copyForWhatsApp = () => {
    const text = `Balasan Manis dari Mutia 💖:\n\n"${replyText}"\n\n(Dikirim dari Web Spesial Kita ✨)`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="letter" className="py-16 px-4 sm:px-6 max-w-3xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border-2 border-pastel-rose/60 text-xs font-bold text-pastel-hot mb-3 shadow-sm animate-bounce-slow">
          <Mail className="w-3.5 h-3.5" />
          <span>Surat Tulus Dari Hati 💌</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-cute-text mb-2">
          Pesan Khusus Untuk <span className="text-pastel-hot underline decoration-wavy decoration-pastel-rose">Mutia</span> 🌸
        </h2>
      </div>

      {/* Cute Binder Notepad Card */}
      <div className="cute-card p-6 sm:p-10 border-4 border-pastel-rose bg-[#FFFDF9] shadow-cute relative overflow-hidden mb-8">
        {/* Cute Top Binder Holes */}
        <div className="flex justify-center gap-6 mb-6">
          <div className="w-3.5 h-3.5 rounded-full bg-pastel-soft border-2 border-pastel-rose" />
          <div className="w-3.5 h-3.5 rounded-full bg-pastel-soft border-2 border-pastel-rose" />
          <div className="w-3.5 h-3.5 rounded-full bg-pastel-soft border-2 border-pastel-rose" />
          <div className="w-3.5 h-3.5 rounded-full bg-pastel-soft border-2 border-pastel-rose" />
        </div>

        {/* Letter Content */}
        <div className="space-y-4 font-sans text-cute-text text-sm sm:text-base leading-relaxed font-medium">
          <p className="text-base sm:text-lg font-bold text-pastel-hot flex items-center gap-2">
            <span>Hai Sayangku Mutia,</span>
            <span className="text-xl">🌸✨</span>
          </p>

          <p>
            Dari pertama kali aku ngeliat kamu latihan LKBB di sekolah sampai hari ini, rasa kagum dan sayang aku ke kamu gak pernah berkurang sedikitpun.
          </p>

          <p>
            Pertama-tama, aku mau minta maaf yang sebesar-besarnya ya sayang kalau selama ini aku masih sering buat kamu sedih, sering bikin salah, atau belum bisa jadi yang paling sempurna buat kamu. Maaf ya kalau kadang aku bikin kamu kesel atau kepikiran.
          </p>

          <p>
            Tapi di balik semua kekurangan aku, aku bersyukur dan berterima kasih banget karena kamu selalu punya hati yang luar biasa luas. Makasih sudah selalu sabar, tetap setia, dan selalu memilih untuk ada di samping aku melewati setiap cerita.
          </p>

          <p>
            Ayo kita berjuang bareng-bareng ya sayang, sukses bareng, sampai nanti kita bisa wujudkan impian kita buat liburan ke Swiss berdua. Aku sayang banget sama kamu, selalu dan selamanya.
          </p>

          <div className="pt-4 flex items-center justify-between border-t-2 border-dashed border-pastel-soft text-xs font-bold text-cute-subtext">
            <span>Dengan segenap rasa sayang &amp; terima kasih,</span>
            <span className="font-cute text-3xl text-pastel-hot font-bold">Tino ❤️</span>
          </div>
        </div>
      </div>

      {/* Reply Note Area */}
      <div className="cute-card p-5 sm:p-6 border-2 border-pastel-rose/60 bg-white shadow-cute">
        <h3 className="text-sm font-extrabold text-cute-text mb-1 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Mutia Mau Balas Pesan Ini? 💖</span>
        </h3>
        <p className="text-xs text-cute-subtext font-medium mb-4">
          Ketik balasan manis kamu di sini yaa:
        </p>

        {!isSent ? (
          <form onSubmit={handleSendReply} className="space-y-3">
            <textarea
              rows={3}
              required
              placeholder="Contoh: Makasih ya sayang, aku udah maafin kamu kok. Aku juga sayang banget sama kamu! 🥰"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full p-3.5 rounded-2xl bg-pastel-soft/50 border-2 border-pastel-rose/50 text-cute-text text-xs sm:text-sm placeholder-cute-subtext/60 focus:outline-none focus:border-pastel-hot"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-pastel-hot to-pastel-rose text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim Balasan Cinta 💌</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="p-4 rounded-2xl bg-pastel-soft/60 border-2 border-pastel-rose/60 space-y-3 animate-fade-in">
            <p className="text-xs sm:text-sm text-cute-text font-bold italic">
              &ldquo;{replyText}&rdquo;
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={copyForWhatsApp}
                className="text-xs px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold flex items-center gap-1.5 shadow-sm transition-colors"
              >
                {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{isCopied ? 'Tersalin!' : 'Salin Buat Kirim ke WhatsApp 📲'}</span>
              </button>
              <button
                onClick={() => setIsSent(false)}
                className="text-xs px-3 py-2 text-cute-subtext font-bold hover:underline"
              >
                Tulis Ulang
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
