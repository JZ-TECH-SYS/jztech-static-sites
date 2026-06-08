import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/theme-provider';

export function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fontSize = 35;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);
    
    ctx.font = `${fontSize}px monospace`;

    const draw = () => {
      // Usar cor de fundo apropriada baseada no tema
      const fadeColor = theme === 'light' ? '255, 255, 255' : '0, 0, 0';
      ctx.fillStyle = `rgba(${fadeColor}, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ajustar cor dos números baseado no tema
      const textColor = theme === 'light' ? '#0066FF' : '#00FF00';
      ctx.fillStyle = textColor;
      ctx.shadowBlur = 4;
      ctx.shadowColor = textColor;
      
      drops.forEach((y, i) => {
        const text = Math.random() > 0.5 ? '1' : '0';
        const x = i * fontSize;
        const opacity = Math.random() * 0.5 + 0.5;
        
        ctx.globalAlpha = opacity;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      });

      ctx.globalAlpha = 1;
    };

    const interval = setInterval(draw, 33); // ~30fps

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]); // Adicionar theme como dependência

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        opacity: theme === 'light' ? 1 : 0.7,
        mixBlendMode: theme === 'light' ? 'multiply' : 'screen',
      }}
    />
  );
}