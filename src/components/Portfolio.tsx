import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Leaf, Sprout } from './PlantDecorations';

// Import art images from src/assets
import art01 from '../assets/01.png';
import art02 from '../assets/2.png';
import art03 from '../assets/3.png';

type TrackItem = {
  id: string;
  title: string;
  spotifyId: string;
  spotifyUrl: string;
  description: string;
  emoji: string;
  tags: string[];
};

type ArtItem = {
  id: string;
  title: string;
  style: string;
  image: string;
  description: string;
  tags: string[];
};

const tracks: TrackItem[] = [
  {
    id: '1',
    title: 'arriving - alternate',
    spotifyId: '73v6ASlEyWQSknHLeW1BVf',
    spotifyUrl: 'https://open.spotify.com/intl-pt/track/73v6ASlEyWQSknHLeW1BVf',
    description: '',
    emoji: '',
    tags: ['chill', 'ambient', 'vibes'],
  },
  {
    id: '2',
    title: 'infinity',
    spotifyId: '0iiivvaDkYj9Md3cGZ6E1I',
    spotifyUrl: 'https://open.spotify.com/intl-pt/track/0iiivvaDkYj9Md3cGZ6E1I',
    description: '',
    emoji: '',
    tags: ['melodic', 'dreamy', 'loop'],
  },
  {
    id: '3',
    title: 'plush',
    spotifyId: '3Pm5CwowH85J6XHxpSRKlE',
    spotifyUrl: 'https://open.spotify.com/intl-pt/track/3Pm5CwowH85J6XHxpSRKlE',
    description: '',
    emoji: '',
    tags: ['soft', 'beat', 'smooth'],
  },
];

const artworks: ArtItem[] = [
  {
    id: 'a1',
    title: 'semirealismo',
    style: 'semirrealismo',
    image: art01,
    description: 'arte realista com traço levemente estilizado',
    tags: ['semirrealismo', 'detalhado', 'personagem'],
  },
  {
    id: 'a2',
    title: 'mangá / anime',
    style: 'mangá/anime',
    image: art02,
    description: 'estilo japonês',
    tags: ['manga', 'anime', 'japonês'],
  },
  {
    id: 'a3',
    title: 'cartoon',
    style: 'cartoon',
    image: art03,
    description: 'visual divertido, ideal para caricaturas/personagens',
    tags: ['cartoon', 'divertido', 'monocromático'],
  },
];

type TabType = 'todas' | 'musica' | 'arte';

// Reusable track card component
const TrackCard: React.FC<{ track: TrackItem; index: number }> = ({ track, index }) => (
  <div
    className="group relative rounded-3xl overflow-hidden bg-paper cartoon-border cartoon-hover"
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    <div className="relative px-6 pt-6 pb-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div>
          <h3 className="font-bold text-xl text-ink">{track.title}</h3>
        </div>
      </div>
      <Leaf className="opacity-20 group-hover:opacity-40 transition-opacity" size={24} />
    </div>
    <div className="px-5 pb-3">
      <iframe
        style={{ borderRadius: '12px' }}
        src={`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`}
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-xl"
      />
    </div>
    <div className="px-6 pb-5 flex items-center justify-between">
      <div className="flex flex-wrap gap-2">
        {track.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-lg text-sm font-bold border-2"
            style={{
              backgroundColor: '#e8f5e9',
              color: '#2d7a3e',
              borderColor: '#4a9e5c40',
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
      <a
        href={track.spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="sticker w-10 h-10 text-ink hover:bg-[#e8f5e9] transition-colors"
        title="abrir no spotify"
      >
        <ExternalLink size={16} />
      </a>
    </div>
  </div>
);

// Reusable art card component
const ArtCard: React.FC<{ art: ArtItem; index: number; onClick: () => void }> = ({ art, index, onClick }) => (
  <div
    className="group relative rounded-3xl overflow-hidden bg-paper cartoon-border cartoon-hover cursor-pointer"
    style={{ animationDelay: `${index * 0.15}s` }}
    onClick={onClick}
  >
    <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
      <img
        src={art.image}
        alt={art.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-ink/5 text-6xl">🎨</div>`;
          }
        }}
      />
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all duration-300 flex items-center justify-center">
        <span className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink/60 px-5 py-2 rounded-xl border-2 border-white/30">
          🔍 ver maior
        </span>
      </div>
      <div
        className="absolute top-4 left-4 px-4 py-1.5 rounded-xl text-sm font-bold border-2"
        style={{
          backgroundColor: '#faf2e5',
          color: '#1a1a1a',
          borderColor: '#1a1a1a',
        }}
      >
        {art.style}
      </div>
    </div>
    <div className="px-6 py-5">
      <h3 className="font-bold text-2xl text-ink mb-2">{art.title}</h3>
      <p className="text-ink/50 text-base mb-3">{art.description}</p>
      <div className="flex flex-wrap gap-2">
        {art.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-lg text-sm font-bold border-2"
            style={{
              backgroundColor: '#e8f5e9',
              color: '#2d7a3e',
              borderColor: '#4a9e5c40',
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('todas');
  const [selectedArt, setSelectedArt] = useState<ArtItem | null>(null);

  return (
    <section id="portfolio" className="relative z-10 py-24 md:py-32 overflow-hidden">
      {/* Plant decorations */}
      <Leaf className="absolute top-12 left-6 animate-sway opacity-15" size={45} />
      <Leaf className="absolute top-20 right-10 animate-sway-slow opacity-12" size={38} flip />
      <Sprout className="absolute bottom-16 left-10 animate-sway opacity-12" style={{ animationDelay: '1s' }} />
      <Leaf className="absolute bottom-24 right-8 animate-sway opacity-10" size={35} style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-paper cartoon-border-sm text-lg text-ink mb-4 animate-cartoon-squish">
            <span style={{ color: '#4a9e5c' }}>🌿</span> trabalhos <span style={{ color: '#4a9e5c' }}>🌿</span>
          </span>
          <h2 className="text-4xl md:text-5xl text-ink mb-3">
            portfólio
          </h2>
          <div className="flex justify-center mb-4">
            <svg width="160" height="14" viewBox="0 0 160 14" className="text-ink/20">
              <path d="M2 8 C30 2, 50 12, 80 7 S130 2, 158 9" stroke="#4a9e5c" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4" />
              <ellipse cx="80" cy="6" rx="6" ry="4" fill="#6bc47d" stroke="#2d7a3e" strokeWidth="1" opacity="0.5" transform="rotate(-15 80 6)" />
            </svg>
          </div>
          <p className="text-ink/50 text-xl max-w-lg mx-auto">
            conheça os trabalhos do loopx 🎧
          </p>
        </div>

        {/* Tab switcher — 3 tabs: todas, música, arte */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl cartoon-border-sm overflow-hidden bg-paper">
            <button
              onClick={() => setActiveTab('todas')}
              className={`px-6 md:px-8 py-3 text-lg md:text-xl font-bold transition-all ${
                activeTab === 'todas'
                  ? 'bg-ink text-paper'
                  : 'text-ink/50 hover:text-ink hover:bg-ink/5'
              }`}
            >
              🌟 todas
            </button>
            <button
              onClick={() => setActiveTab('musica')}
              className={`px-6 md:px-8 py-3 text-lg md:text-xl font-bold transition-all border-l-2 border-ink/20 ${
                activeTab === 'musica'
                  ? 'bg-ink text-paper'
                  : 'text-ink/50 hover:text-ink hover:bg-ink/5'
              }`}
            >
              🎹 música
            </button>
            <button
              onClick={() => setActiveTab('arte')}
              className={`px-6 md:px-8 py-3 text-lg md:text-xl font-bold transition-all border-l-2 border-ink/20 ${
                activeTab === 'arte'
                  ? 'bg-ink text-paper'
                  : 'text-ink/50 hover:text-ink hover:bg-ink/5'
              }`}
            >
              🎨 arte
            </button>
          </div>
        </div>

        {/* ===== TAB: TODAS ===== */}
        {activeTab === 'todas' && (
          <div>
            {/* Music section inside "todas" */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">🎹</span>
                <h3 className="text-3xl text-ink font-bold">músicas</h3>
                <div className="flex-1 h-[3px] bg-ink/10 rounded-full ml-3" />
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {tracks.map((track, index) => (
                  <TrackCard key={track.id} track={track} index={index} />
                ))}
              </div>
            </div>

            {/* Art section inside "todas" */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">🎨</span>
                <h3 className="text-3xl text-ink font-bold">artes</h3>
                <div className="flex-1 h-[3px] bg-ink/10 rounded-full ml-3" />
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {artworks.map((art, index) => (
                  <ArtCard key={art.id} art={art} index={index} onClick={() => setSelectedArt(art)} />
                ))}
              </div>
            </div>

            {/* CTA geral */}
            <div className="mt-16 text-center">
              <div className="relative inline-flex flex-col items-center p-10 rounded-3xl bg-paper cartoon-border-lg">
                <Leaf className="absolute -top-4 -left-3 animate-sway opacity-30" size={32} />
                <Leaf className="absolute -top-4 -right-3 animate-sway-slow opacity-30" size={32} flip style={{ animationDelay: '1s' }} />
                <Sprout className="absolute -bottom-3 left-8 animate-sway opacity-25" style={{ animationDelay: '0.5s' }} />
                <Sprout className="absolute -bottom-3 right-8 animate-sway opacity-25" style={{ animationDelay: '1.5s', transform: 'scaleX(-1)' }} />

                <p className="text-ink text-2xl mb-4 font-bold">
                  🌿 gostou do que viu? 🌿
                </p>
                <p className="text-ink/50 text-lg mb-6 max-w-md font-medium">
                  encomende sua música ou arte personalizada com o loopx ✨
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://open.spotify.com/intl-pt/artist/4nhzL9z1TttRpgTwZ14h9O"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-7 py-3.5 rounded-2xl text-white font-bold text-lg cartoon-btn border-ink"
                    style={{ backgroundColor: '#1DB954' }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:animate-cartoon-wiggle">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    spotify
                  </a>
                  <a
                    href="#contact"
                    className="group flex items-center gap-3 px-7 py-3.5 rounded-2xl text-paper font-bold text-lg cartoon-btn border-ink bg-ink"
                  >
                    <span className="group-hover:animate-cartoon-wiggle">✏️</span>
                    encomendar
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: MÚSICA ===== */}
        {activeTab === 'musica' && (
          <div>
            <div className="grid md:grid-cols-3 gap-8">
              {tracks.map((track, index) => (
                <TrackCard key={track.id} track={track} index={index} />
              ))}
            </div>

            {/* Spotify CTA */}
            <div className="mt-16 text-center">
              <div className="relative inline-flex flex-col items-center p-10 rounded-3xl bg-paper cartoon-border-lg">
                <Leaf className="absolute -top-4 -left-3 animate-sway opacity-30" size={32} />
                <Leaf className="absolute -top-4 -right-3 animate-sway-slow opacity-30" size={32} flip style={{ animationDelay: '1s' }} />
                <Sprout className="absolute -bottom-3 left-8 animate-sway opacity-25" style={{ animationDelay: '0.5s' }} />
                <Sprout className="absolute -bottom-3 right-8 animate-sway opacity-25" style={{ animationDelay: '1.5s', transform: 'scaleX(-1)' }} />

                <p className="text-ink text-2xl mb-4 font-bold">
                  🌿 ouça mais no spotify 🌿
                </p>
                <p className="text-ink/50 text-lg mb-6 max-w-md font-medium">
                  confira todas as produções do loopx nas plataformas de streaming 🎶
                </p>
                <a
                  href="https://open.spotify.com/intl-pt/artist/4nhzL9z1TttRpgTwZ14h9O"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-7 py-3.5 rounded-2xl text-white font-bold text-lg cartoon-btn border-ink"
                  style={{ backgroundColor: '#1DB954' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:animate-cartoon-wiggle">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  abrir no spotify
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: ARTE ===== */}
        {activeTab === 'arte' && (
          <div>
            <div className="grid md:grid-cols-3 gap-8">
              {artworks.map((art, index) => (
                <ArtCard key={art.id} art={art} index={index} onClick={() => setSelectedArt(art)} />
              ))}
            </div>

            {/* CTA for art */}
            <div className="mt-16 text-center">
              <div className="relative inline-flex flex-col items-center p-10 rounded-3xl bg-paper cartoon-border-lg">
                <Leaf className="absolute -top-4 -left-3 animate-sway opacity-30" size={32} />
                <Leaf className="absolute -top-4 -right-3 animate-sway-slow opacity-30" size={32} flip style={{ animationDelay: '1s' }} />
                <p className="text-ink text-2xl mb-4 font-bold">
                  🎨 quer uma arte personalizada? 🌿
                </p>
                <p className="text-ink/50 text-lg mb-6 max-w-md font-medium">
                  encomende sua arte nos estilos cartoon, mangá/anime ou semirrealismo ✨
                </p>
                <a
                  href="#contact"
                  className="group flex items-center gap-3 px-7 py-3.5 rounded-2xl text-paper font-bold text-lg cartoon-btn border-ink bg-ink"
                >
                  <span className="group-hover:animate-cartoon-wiggle">✏️</span>
                  encomendar arte
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      {selectedArt && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArt(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />

          {/* Modal content */}
          <div
            className="relative max-w-3xl w-full rounded-3xl overflow-hidden bg-paper cartoon-border-lg animate-cartoon-pop"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-paper cartoon-border-sm flex items-center justify-center text-2xl hover:bg-ink/5 transition-colors"
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedArt.image}
                alt={selectedArt.title}
                className="w-full max-h-[70vh] object-contain bg-white"
              />
            </div>

            {/* Info bar */}
            <div className="px-8 py-6 flex items-center justify-between border-t-3 border-ink">
              <div>
                <h3 className="font-bold text-2xl text-ink">{selectedArt.title}</h3>
                <p className="text-ink/50 text-base">{selectedArt.description}</p>
              </div>
              <div
                className="px-5 py-2 rounded-xl text-base font-bold border-2"
                style={{
                  backgroundColor: '#e8f5e9',
                  color: '#2d7a3e',
                  borderColor: '#4a9e5c',
                }}
              >
                {selectedArt.style}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
