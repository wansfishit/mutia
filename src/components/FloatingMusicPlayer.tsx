import { useState, useEffect } from 'react';
import { Play, Pause, Music, Heart, Disc } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audioSynth';

export const FloatingMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Reactive subscription to audio playback status
    const unsubscribe = romanticAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const handleToggle = () => {
    const active = romanticAudio.togglePlay();
    if (active) {
      confetti({
        particleCount: 25,
        spread: 60,
        colors: ['#FF4D6D', '#FFB6C1', '#FFF3B0', '#FF8DA1']
      });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <div className="cute-card p-2 sm:p-2.5 border-2 border-pastel-rose/70 bg-white/95 shadow-cute flex items-center gap-3">
        {/* Spinning Disc or Vinyl */}
        <div className={`w-10 h-10 rounded-full bg-pastel-soft border-2 border-pastel-rose flex items-center justify-center ${isPlaying ? 'animate-spin-cute' : ''}`}>
          {isPlaying ? (
            <Disc className="w-5 h-5 text-pastel-hot" />
          ) : (
            <Music className="w-4 h-4 text-pastel-hot" />
          )}
        </div>

        {/* Song Info & Lyrics snippet */}
        <div className="text-left pr-2">
          <p className="text-xs font-extrabold text-cute-text flex items-center gap-1">
            <span>Penjaga Hati</span>
            <Heart className="w-3 h-3 text-pastel-hot fill-pastel-hot" />
          </p>
          <p className="text-[10px] text-cute-subtext font-medium">
            Nadhif Basalamah &bull; Lagu Kita
          </p>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={handleToggle}
          className="w-8 h-8 rounded-full bg-pastel-hot hover:bg-pastel-rose text-white flex items-center justify-center shadow-sm transition-transform active:scale-90"
          title={isPlaying ? 'Jeda Lagu' : 'Putar Lagu'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-white" />
          ) : (
            <Play className="w-4 h-4 fill-white ml-0.5" />
          )}
        </button>
      </div>
    </div>
  );
};
