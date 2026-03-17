import React from 'react';

const Cloud: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
}> = ({ className = '', size = 'md', opacity = 0.15 }) => {
  const sizes = {
    sm: 'w-32 h-16',
    md: 'w-56 h-24',
    lg: 'w-80 h-32',
  };

  return (
    <div className={`absolute ${sizes[size]} ${className}`} style={{ opacity }}>
      <svg viewBox="0 0 300 120" fill="currentColor" className="w-full h-full text-retro-lavender">
        <ellipse cx="80" cy="80" rx="70" ry="40" />
        <ellipse cx="150" cy="60" rx="90" ry="50" />
        <ellipse cx="230" cy="80" rx="65" ry="35" />
        <ellipse cx="120" cy="90" rx="80" ry="30" />
        <ellipse cx="190" cy="85" rx="70" ry="35" />
      </svg>
    </div>
  );
};

const CloudBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-retro-dark via-retro-purple to-retro-dark" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-retro-violet/20 rounded-full animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-retro-pink/15 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-retro-cyan/10 rounded-full animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Stars */}
      {Array.from({ length: 50 }).map((_, i) => {
        const left = `${(i * 37 + 13) % 100}%`;
        const top = `${(i * 23 + 7) % 100}%`;
        const delay = `${(i * 0.4) % 5}s`;
        const opacity = 0.3 + ((i * 17) % 60) / 100;
        return (
          <div key={i} style={{ position: 'absolute', left, top }}>
            <div
              className="w-1 h-1 bg-white rounded-full animate-star-twinkle"
              style={{ animationDelay: delay, opacity }}
            />
          </div>
        );
      })}

      {/* Floating clouds */}
      <Cloud className="top-[10%] left-[-5%] animate-float-cloud" size="lg" opacity={0.08} />
      <Cloud className="top-[30%] right-[-10%] animate-float-cloud-reverse" size="md" opacity={0.06} />
      <Cloud className="top-[55%] left-[10%] animate-float-cloud" size="sm" opacity={0.1} />
      <Cloud className="top-[75%] right-[5%] animate-float-cloud-reverse" size="lg" opacity={0.05} />
      <Cloud className="top-[45%] left-[40%] animate-float-cloud" size="sm" opacity={0.07} />
      <Cloud className="top-[85%] left-[20%] animate-float-cloud-reverse" size="md" opacity={0.06} />

      {/* Scanline effect */}
      <div className="absolute inset-0 scanline" />
    </div>
  );
};

export default CloudBackground;
