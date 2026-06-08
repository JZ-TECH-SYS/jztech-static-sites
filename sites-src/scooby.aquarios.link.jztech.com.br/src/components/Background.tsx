import { memo } from 'react';

type Bubble = {
  size: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
};

const bubbles: Bubble[] = [
  { size: 18, left: '8%', top: '12%', delay: '0s', duration: '16s' },
  { size: 24, left: '20%', top: '28%', delay: '1s', duration: '18s' },
  { size: 14, left: '34%', top: '18%', delay: '0.6s', duration: '14s' },
  { size: 28, left: '52%', top: '10%', delay: '1.4s', duration: '20s' },
  { size: 20, left: '66%', top: '26%', delay: '0.2s', duration: '17s' },
  { size: 16, left: '78%', top: '14%', delay: '1.2s', duration: '15s' },
  { size: 22, left: '12%', top: '68%', delay: '0.9s', duration: '16s' },
  { size: 18, left: '28%', top: '76%', delay: '0.3s', duration: '15s' },
  { size: 30, left: '46%', top: '72%', delay: '1.7s', duration: '21s' },
  { size: 16, left: '60%', top: '64%', delay: '0.4s', duration: '14s' },
  { size: 24, left: '74%', top: '78%', delay: '1s', duration: '18s' },
  { size: 20, left: '88%', top: '62%', delay: '0.5s', duration: '17s' },
];

function BackgroundComponent() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-cyan-400 to-emerald-200" />

      <div className="absolute inset-0 opacity-80">
        <svg className="h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.28" />
              <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <path
            d="M0,320 C240,380 410,210 720,260 C1030,310 1180,210 1440,280 L1440,900 L0,900 Z"
            fill="url(#waveGradient)"
            className="floating"
          />
          <path
            d="M0,420 C240,460 420,320 720,350 C1020,380 1180,320 1440,360 L1440,900 L0,900 Z"
            fill="#0ea5e9"
            opacity="0.18"
            className="floating-delayed"
          />
          <path
            d="M0,520 C240,540 420,470 720,500 C1020,530 1180,470 1440,500 L1440,900 L0,900 Z"
            fill="#0ea5e9"
            opacity="0.12"
            className="floating"
            style={{ animationDuration: '10s' }}
          />
        </svg>
      </div>

      <div className="absolute inset-0">
        {bubbles.map((bubble, index) => (
          <span
            key={`${bubble.left}-${bubble.top}-${index}`}
            className="absolute rounded-full bg-white/45 rise"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: bubble.left,
              top: bubble.top,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
            }}
          />
        ))}
      </div>

      <div className="blur-spot absolute -left-24 top-12 h-72 w-72 rounded-full bg-white/35" />
      <div className="blur-spot absolute right-[-70px] bottom-8 h-64 w-64 rounded-full bg-teal-200/50" />
    </div>
  );
}

const Background = memo(BackgroundComponent);
export default Background;
