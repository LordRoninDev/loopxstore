import React from 'react';
import { ExternalLink } from 'lucide-react';

const FeaturedAlbum: React.FC = () => {
  const albumUrl = 'https://open.spotify.com/intl-pt/album/0jPQa8c6O9Dvz5hXA4XNnm?si=EzZOk2BVTQ-V5irBKV42bA';
  const embedUrl = 'https://open.spotify.com/embed/album/0jPQa8c6O9Dvz5hXA4XNnm?utm_source=generator&theme=0';
  return (
    <section id="featured" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block px-6 py-2.5 mb-6 rounded-full bg-highlight cartoon-border-sm animate-cartoon-wiggle">
            <span className="text-lg sm:text-xl text-ink tracking-widest">
              ★ lançamento em destaque ★
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl text-ink mb-3">
            conheça VIRTUAL
          </h2>
          <div className="flex justify-center mb-4">
            <svg width="150" height="10" viewBox="0 0 150 10" className="text-ink/30">
              <path d="M2 6 C30 2, 50 8, 75 5 S120 2, 148 7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-ink/50 text-xl sm:text-2xl max-w-xl mx-auto font-medium">
            um dos melhores trabalhos de loopx 🔥
          </p>
        </div>

        {/* Album card */}
        <div className="relative max-w-3xl mx-auto mb-14">
          {/* Floating decorations */}
          <div className="sticker absolute -top-5 -left-5 w-14 h-14 text-2xl animate-cartoon-bounce z-20">💿</div>
          <div className="sticker absolute -top-4 -right-4 w-12 h-12 text-xl animate-cartoon-bounce z-20" style={{ animationDelay: '0.5s' }}>🎵</div>
          <div className="sticker absolute -bottom-4 -left-4 w-11 h-11 text-xl animate-cartoon-bounce z-20" style={{ animationDelay: '1s' }}>♪</div>
          <div className="sticker absolute -bottom-5 -right-5 w-12 h-12 text-xl animate-cartoon-bounce z-20" style={{ animationDelay: '0.7s' }}>🔥</div>

          {/* Main card */}
          <div className="bg-paper rounded-3xl cartoon-border-xl p-5 sm:p-7 md:p-9">
            {/* Spotify Embed */}
            <div className="rounded-2xl overflow-hidden cartoon-border">
              <iframe
                style={{ borderRadius: '16px' }}
                src={embedUrl}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Loopx - Álbum em Destaque"
              />
            </div>

            {/* Bottom action */}
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                <span className="text-ink/40 text-lg font-bold">disponível agora!</span>
              </div>

              <a
                href={albumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#1DB954] text-white font-bold text-lg cartoon-btn border-[#1a1a1a]"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current group-hover:animate-cartoon-wiggle" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                ouvir no spotify
                <ExternalLink size={14} className="group-hover:animate-cartoon-bounce" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm sm:text-base text-ink/20 tracking-[0.3em]">
            ▼ continue explorando ▼
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAlbum;
