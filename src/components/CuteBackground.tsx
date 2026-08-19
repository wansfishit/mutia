import { useEffect, useRef } from 'react';

interface FloatingDoodle {
  x: number;
  y: number;
  speedY: number;
  speedX: number;
  emoji: string;
  size: number;
  angle: number;
  angleSpeed: number;
  opacity: number;
}

export const CuteBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const doodles = ['💖', '🌸', '✨', '🍓', '🎀', '🧸', '🍭', '💫'];
    const items: FloatingDoodle[] = [];

    for (let i = 0; i < 35; i++) {
      items.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speedY: -(Math.random() * 0.7 + 0.3),
        speedX: (Math.random() - 0.5) * 0.4,
        emoji: doodles[Math.floor(Math.random() * doodles.length)],
        size: Math.random() * 12 + 16,
        angle: (Math.random() - 0.5) * 0.5,
        angleSpeed: (Math.random() - 0.5) * 0.01,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      items.forEach((item) => {
        item.y += item.speedY;
        item.x += item.speedX;
        item.angle += item.angleSpeed;

        if (item.y < -30) {
          item.y = height + 30;
          item.x = Math.random() * width;
        }
        if (item.x < -30) item.x = width + 30;
        if (item.x > width + 30) item.x = -30;

        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.angle);
        ctx.globalAlpha = item.opacity;
        ctx.font = `${item.size}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(item.emoji, 0, 0);
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
};
