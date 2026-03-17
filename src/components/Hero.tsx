import React from 'react';
import { Play, Palette } from 'lucide-react';
import SocialLinks from './SocialLinks';

let kaitoImg: string | undefined;
try {
  kaitoImg = new URL('../assets/kaito.png', import.meta.url).href;
} catch {
  kaitoImg = undefined;
}

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Decorative plant elements */}
      <div className="absolute top-32 left-8 text-4xl animate-cartoon-float opacity-20">♪</div>
      <div className="absolute top-48 right-12 text-3xl animate-cartoon-float opacity-15" style={{ animationDelay: '1s' }}>♫</div>
      <div className="absolute bottom-32 left-16 text-3xl animate-sway opacity-15" style={{ animationDelay: '2s' }}>🌿</div>
      <div className="absolute bottom-48 right-20 text-3xl animate-sway-slow opacity-15" style={{ animationDelay: '0.5s' }}>🍃</div>
      <div className="absolute top-40 left-1/4 text-2xl animate-sway opacity-12">🌱</div>
      <div className="absolute bottom-40 right-1/4 text-2xl animate-cartoon-float opacity-15" style={{ animationDelay: '1.5s' }}>🎵</div>
      <div className="absolute top-60 right-1/3 text-xl animate-sway-slow opacity-10" style={{ animationDelay: '3s' }}>🌿</div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Profile photo */}
        <div className="flex justify-center mb-10 animate-cartoon-float">
          <div className="relative">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full cartoon-border-xl overflow-hidden bg-paper">
              {kaitoImg ? (
                <img
                  src={kaitoImg}
                  alt="Loopx"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl bg-paper">
                  🎵
                </div>
              )}
            </div>
            {/* Floating stickers */}
            <div className="sticker absolute -top-2 -right-2 w-12 h-12 animate-cartoon-wiggle text-2xl">
              🎧
            </div>
            <div className="sticker absolute -bottom-2 -left-3 w-12 h-12 animate-cartoon-wiggle text-2xl" style={{ animationDelay: '1s' }}>
              🎨
            </div>
            <div className="sticker absolute top-1/2 -right-6 w-10 h-10 animate-cartoon-bounce text-xl" style={{ animationDelay: '0.5s' }}>
              🌿
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-block px-6 py-2.5 mb-6 rounded-full bg-ink text-cream text-lg tracking-widest cartoon-border-sm border-ink animate-cartoon-squish" style={{ boxShadow: '3px 3px 0px #555' }}>
          ★ produtor musical & desenhista ★
        </div>

        {/* Title */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl leading-tight mb-2" style={{ color: '#fff', textShadow: '4px 4px 0px #1a1a1a, -2px -2px 0px #1a1a1a, 2px -2px 0px #1a1a1a, -2px 2px 0px #1a1a1a, 0px 4px 0px #1a1a1a' }}>
          loopx
        </h1>

        {/* Hand-drawn underline effect */}
        <div className="flex justify-center mb-8">
          <svg width="200" height="12" viewBox="0 0 200 12" className="text-ink">
            <path d="M2 8 C40 2, 60 10, 100 6 S160 2, 198 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Subtitle in speech bubble */}
        <div className="speech-bubble max-w-2xl mx-auto mb-6 px-8 py-6 md:px-10 md:py-7">
          <p className="text-2xl md:text-3xl text-ink/80 leading-relaxed font-medium">
            criação orgânica e com identidade ✨
          </p>
        </div>
        <div className="max-w-2xl mx-auto mb-12 px-4">
          <p className="text-xl md:text-2xl text-ink/50 leading-relaxed">
            o design e as melodias conseguem transmitir uma história ♪
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
          <a
            href="#contact"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-ink text-cream font-bold text-2xl cartoon-btn border-ink"
          >
            <Palette size={22} className="group-hover:animate-cartoon-wiggle" />
            contratar serviço
          </a>
          <a
            href="#portfolio"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-paper text-ink font-bold text-2xl cartoon-btn"
          >
            <Play size={22} className="group-hover:animate-cartoon-wiggle" />
            ver portfolio
          </a>
        </div>

        {/* Social Links */}
        <SocialLinks />

        {/* Scroll indicator */}
        <div className="mt-16 animate-cartoon-bounce">
          <span className="text-ink/20 text-3xl">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
