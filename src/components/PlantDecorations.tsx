import React from 'react';

// Leaf SVG component
const Leaf: React.FC<{ className?: string; style?: React.CSSProperties; flip?: boolean; size?: number }> = ({ 
  className = '', style = {}, flip = false, size = 40 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    style={{ ...style, transform: `${flip ? 'scaleX(-1)' : ''} ${style.transform || ''}` }}
  >
    <path
      d="M32 8C32 8 10 20 10 40C10 52 20 58 32 56C44 58 54 52 54 40C54 20 32 8 32 8Z"
      fill="#4a9e5c"
      stroke="#2d7a3e"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M32 14V50"
      stroke="#2d7a3e"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M32 24C26 28 22 34 20 38" stroke="#2d7a3e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M32 30C38 34 42 38 44 42" stroke="#2d7a3e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M32 36C27 39 24 42 22 46" stroke="#2d7a3e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// Small sprout
const Sprout: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style = {} }) => (
  <svg width="32" height="40" viewBox="0 0 32 40" fill="none" className={className} style={style}>
    <path d="M16 38V20" stroke="#4a9e5c" strokeWidth="2.5" strokeLinecap="round" />
    <path
      d="M16 22C16 22 6 18 4 10C4 10 14 8 16 16"
      fill="#6bc47d"
      stroke="#2d7a3e"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 16C16 16 26 12 28 4C28 4 18 2 16 10"
      fill="#4a9e5c"
      stroke="#2d7a3e"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Vine with leaves
const Vine: React.FC<{ className?: string; style?: React.CSSProperties; side: 'left' | 'right' }> = ({ 
  className = '', style = {}, side 
}) => (
  <svg
    width="80"
    height="200"
    viewBox="0 0 80 200"
    fill="none"
    className={className}
    style={{ ...style, transform: side === 'right' ? 'scaleX(-1)' : '' }}
  >
    <path
      d="M40 0 C40 30, 20 50, 30 80 S50 120, 35 150 S20 170, 30 200"
      stroke="#4a9e5c"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    {/* Leaves on vine */}
    <ellipse cx="22" cy="40" rx="12" ry="8" fill="#6bc47d" stroke="#2d7a3e" strokeWidth="1.5" transform="rotate(-20 22 40)" />
    <ellipse cx="42" cy="75" rx="14" ry="9" fill="#4a9e5c" stroke="#2d7a3e" strokeWidth="1.5" transform="rotate(15 42 75)" />
    <ellipse cx="25" cy="110" rx="11" ry="7" fill="#6bc47d" stroke="#2d7a3e" strokeWidth="1.5" transform="rotate(-25 25 110)" />
    <ellipse cx="40" cy="145" rx="13" ry="8" fill="#4a9e5c" stroke="#2d7a3e" strokeWidth="1.5" transform="rotate(10 40 145)" />
    <ellipse cx="28" cy="180" rx="10" ry="7" fill="#6bc47d" stroke="#2d7a3e" strokeWidth="1.5" transform="rotate(-15 28 180)" />
  </svg>
);

// Flower
const Flower: React.FC<{ className?: string; style?: React.CSSProperties; size?: number }> = ({ 
  className = '', style = {}, size = 36 
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <circle cx="24" cy="24" r="6" fill="#ffdf6b" stroke="#1a1a1a" strokeWidth="2" />
    <ellipse cx="24" cy="12" rx="5" ry="8" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" />
    <ellipse cx="24" cy="36" rx="5" ry="8" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" />
    <ellipse cx="12" cy="24" rx="8" ry="5" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" />
    <ellipse cx="36" cy="24" rx="8" ry="5" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" />
    <ellipse cx="15" cy="15" rx="5" ry="7" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(-45 15 15)" />
    <ellipse cx="33" cy="33" rx="5" ry="7" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(-45 33 33)" />
    <ellipse cx="33" cy="15" rx="5" ry="7" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(45 33 15)" />
    <ellipse cx="15" cy="33" rx="5" ry="7" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" transform="rotate(45 15 33)" />
    <circle cx="24" cy="24" r="5" fill="#ffdf6b" stroke="#1a1a1a" strokeWidth="1.5" />
  </svg>
);

// Small leaf cluster for inline use
const LeafCluster: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`inline-flex items-center gap-0 ${className}`}>
    <span className="text-xl" style={{ color: '#4a9e5c' }}>🌿</span>
  </span>
);

// Plant divider (replaces the star divider)
const PlantDivider: React.FC = () => (
  <div className="relative z-10 max-w-4xl mx-auto px-8 py-6">
    <div className="flex items-center gap-4">
      <div className="flex-1 relative">
        <div className="border-t-[3px] border-dashed border-ink/10" />
        <Leaf className="absolute -top-5 left-8 animate-sway opacity-40" size={28} />
      </div>
      <div className="flex gap-3 items-center">
        <Sprout className="animate-sway opacity-50" style={{ animationDelay: '0s' }} />
        <Flower className="animate-cartoon-float opacity-40" size={28} style={{ animationDelay: '0.5s' }} />
        <Sprout className="animate-sway opacity-50" style={{ animationDelay: '1s', transform: 'scaleX(-1)' }} />
      </div>
      <div className="flex-1 relative">
        <div className="border-t-[3px] border-dashed border-ink/10" />
        <Leaf className="absolute -top-5 right-8 animate-sway opacity-40" size={28} flip style={{ animationDelay: '2s' }} />
      </div>
    </div>
  </div>
);

// Corner vines for sections
const CornerVines: React.FC = () => (
  <>
    <div className="absolute top-0 left-0 opacity-15 animate-sway-slow pointer-events-none">
      <Vine side="left" />
    </div>
    <div className="absolute top-0 right-0 opacity-15 animate-sway-slow pointer-events-none" style={{ animationDelay: '2s' }}>
      <Vine side="right" />
    </div>
  </>
);

// Floating leaves background
const FloatingLeaves: React.FC = () => (
  <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
    {/* Scattered leaves */}
    <Leaf className="absolute top-[10%] left-[5%] animate-sway opacity-10" size={35} style={{ animationDelay: '0s' }} />
    <Leaf className="absolute top-[25%] right-[8%] animate-sway-slow opacity-8" size={28} flip style={{ animationDelay: '1s' }} />
    <Leaf className="absolute top-[45%] left-[3%] animate-sway opacity-10" size={32} style={{ animationDelay: '2s' }} />
    <Leaf className="absolute top-[60%] right-[5%] animate-sway-slow opacity-8" size={30} flip style={{ animationDelay: '3s' }} />
    <Leaf className="absolute top-[75%] left-[7%] animate-sway opacity-10" size={26} style={{ animationDelay: '1.5s' }} />
    <Leaf className="absolute top-[85%] right-[10%] animate-sway-slow opacity-8" size={34} flip style={{ animationDelay: '0.5s' }} />
    
    {/* Sprouts */}
    <Sprout className="absolute top-[15%] right-[15%] animate-sway opacity-8" style={{ animationDelay: '2.5s' }} />
    <Sprout className="absolute top-[55%] left-[12%] animate-sway opacity-8" style={{ animationDelay: '1.5s' }} />
    <Sprout className="absolute top-[90%] right-[20%] animate-sway opacity-8" style={{ animationDelay: '3.5s' }} />
    
    {/* Small flowers */}
    <Flower className="absolute top-[20%] left-[20%] animate-cartoon-float opacity-8" size={24} style={{ animationDelay: '1s' }} />
    <Flower className="absolute top-[50%] right-[18%] animate-cartoon-float opacity-6" size={20} style={{ animationDelay: '2s' }} />
    <Flower className="absolute top-[70%] left-[15%] animate-cartoon-float opacity-8" size={22} style={{ animationDelay: '3s' }} />
  </div>
);

export { Leaf, Sprout, Vine, Flower, LeafCluster, PlantDivider, CornerVines, FloatingLeaves };
