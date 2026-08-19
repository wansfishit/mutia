// Audio Controller for Nadhif Basalamah - Penjaga Hati & Sound FX
type AudioStateListener = (isPlaying: boolean) => void;

class RomanticAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private bgAudio: HTMLAudioElement | null = null;
  private listeners: Set<AudioStateListener> = new Set();

  public tracks = [
    {
      id: 'penjaga-hati',
      title: 'Penjaga Hati',
      artist: 'Nadhif Basalamah',
      src: '/audio/penjaga-hati.mp3',
    },
  ];

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudio();
    }
  }

  private initAudio() {
    if (!this.bgAudio) {
      this.bgAudio = new Audio('/audio/penjaga-hati.mp3');
      this.bgAudio.loop = true;
      this.bgAudio.volume = 0.8;

      this.bgAudio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.bgAudio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.bgAudio.addEventListener('playing', () => {
        this.isPlaying = true;
        this.notify();
      });
    }
  }

  public subscribe(listener: AudioStateListener) {
    this.listeners.add(listener);
    listener(this.isPlaying);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying));
  }

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Sound effect for cute heart pop / button click
  playHeartPop() {
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1040, ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {}
  }

  // Sound effect for celebration fanfare
  playCelebration() {
    try {
      const ctx = this.getContext();
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);

        gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.6);
      });
    } catch {}
  }

  // Start playing Nadhif Basalamah - Penjaga Hati
  playSong() {
    this.initAudio();
    if (this.bgAudio) {
      this.bgAudio.play().then(() => {
        this.isPlaying = true;
        this.notify();
      }).catch(() => {
        this.isPlaying = false;
        this.notify();
      });
    }
  }

  pauseSong() {
    if (this.bgAudio) {
      this.bgAudio.pause();
      this.isPlaying = false;
      this.notify();
    }
  }

  togglePlay(): boolean {
    if (this.isPlaying) {
      this.pauseSong();
      return false;
    } else {
      this.playSong();
      return true;
    }
  }

  getCurrentTrack() {
    return this.tracks[0];
  }

  getIsPlaying() {
    return this.isPlaying;
  }
}

export const romanticAudio = new RomanticAudioEngine();
