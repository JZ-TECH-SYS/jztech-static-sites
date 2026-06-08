import { useEffect, useRef } from 'react';

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);
    
    // Characters to display
    const chars = '01';

    ctx.font = `${fontSize}px monospace`;

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Bright green text with glow effect
      ctx.fillStyle = '#00FF00';
      ctx.shadowBlur = 2;
      ctx.shadowColor = '#00FF00';
      
      // Draw characters
      drops.forEach((y, i) => {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Vary the opacity for a more dynamic effect
        const opacity = Math.random() * 0.5 + 0.5;
        ctx.globalAlpha = opacity;
        
        // Draw the character
        ctx.fillText(char, i * fontSize, y * fontSize);

        // Reset drop when it reaches bottom or randomly
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move drop
        drops[i]++;
      });

      // Reset global alpha
      ctx.globalAlpha = 1;
    };

    // Animation loop with higher frame rate
    const interval = setInterval(draw, 25); // ~40fps

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ 
        opacity: 0.8,
        mixBlendMode: 'screen',
      }}
    />
  );
}