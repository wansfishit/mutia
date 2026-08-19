import { useState } from 'react';
import { CuteIntroGate } from './components/CuteIntroGate';
import { CuteBackground } from './components/CuteBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhotoDiary } from './components/PhotoDiary';
import { ThingsILove } from './components/ThingsILove';
import { CoupleVouchers } from './components/CoupleVouchers';
import { LoveLetter } from './components/LoveLetter';
import { PlayfulProposal } from './components/PlayfulProposal';
import { Footer } from './components/Footer';
import { FloatingMusicPlayer } from './components/FloatingMusicPlayer';

export function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FFF2F5] text-cute-text selection:bg-pastel-hot selection:text-white font-sans overflow-x-hidden">
      {/* Intro Modal / Gate before entering main site */}
      {!hasEntered && (
        <CuteIntroGate onEnter={() => setHasEntered(true)} />
      )}

      {/* Floating Animated Pastel Doodles & Hearts */}
      <CuteBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="space-y-6">
          <HeroSection />
          <PhotoDiary />
          <ThingsILove />
          <CoupleVouchers />
          <LoveLetter />
          <PlayfulProposal />
        </main>

        <Footer />

        {/* Floating Player with Nadhif Basalamah - Penjaga Hati */}
        <FloatingMusicPlayer />
      </div>
    </div>
  );
}

export default App;
