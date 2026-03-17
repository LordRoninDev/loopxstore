import React from 'react';

const skills = [
  { label: 'produção musical', desc: 'beats, trilhas sonoras, backing tracks etc', emoji: '🎹' },
  { label: 'design & arte', desc: 'capas, logos e identidade visual única', emoji: '🎨' },
  { label: 'estilo único', desc: 'fusão de estéticas retro, lo-fi e anime', emoji: '✨' },
  { label: 'entrega rápida', desc: 'projetos com qualidade e agilidade', emoji: '⚡' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative z-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-paper cartoon-border-sm text-lg text-ink mb-4 animate-cartoon-squish">
            🌿 conheça 🌿
          </span>
          <h2 className="text-4xl md:text-5xl text-ink mb-3">
            sobre loopx
          </h2>
          <div className="flex justify-center">
            <svg width="120" height="10" viewBox="0 0 120 10" className="text-ink/30">
              <path d="M2 6 C25 2, 40 8, 60 5 S95 2, 118 7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - visual */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="bg-paper rounded-3xl cartoon-border-lg p-8 flex flex-col items-center justify-center">
                {/* Character */}
                <div className="text-8xl mb-5 animate-cartoon-float">🎧</div>
                <div className="space-y-2 text-center">
                  <div className="text-ink text-2xl font-bold">itsloopx</div>
                  <div className="flex items-center gap-2 justify-center">
                    <span className="w-3.5 h-3.5 bg-green-500 rounded-full animate-pulse" style={{ border: '2px solid #1a1a1a' }} />
                    <span className="text-ink/50 text-lg font-bold">disponível para projetos</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                  <div className="bg-cream rounded-2xl p-4 text-center cartoon-border-sm cartoon-hover cursor-default">
                    <div className="text-ink text-3xl">∞</div>
                    <div className="text-ink/40 text-sm mt-2 font-bold">beats criados</div>
                  </div>
                  <div className="bg-cream rounded-2xl p-4 text-center cartoon-border-sm cartoon-hover cursor-default">
                    <div className="text-ink text-3xl">♡</div>
                    <div className="text-ink/40 text-sm mt-2 font-bold">clientes felizes</div>
                  </div>
                </div>
              </div>

              {/* Sticker decorations */}
              <div className="sticker absolute -top-4 -right-4 w-14 h-14 text-2xl animate-cartoon-wiggle">🌟</div>
              <div className="sticker absolute -bottom-4 -left-4 w-14 h-14 text-2xl animate-cartoon-wiggle" style={{ animationDelay: '1s' }}>🎵</div>
            </div>
          </div>

          {/* Right - text */}
          <div className="space-y-7">
            <div className="speech-bubble px-7 py-6">
              <p className="text-ink/80 text-xl leading-relaxed">
                <span className="text-ink font-bold text-2xl">loopx</span> é um produtor musical e artista visual 
                inspirado pela cultura anime, lo-fi beats, dos games e o universo retrô. grava suas próprias 
                tracks de guitarra, baixo e violão, mas também explora elementos da música eletrônica. 
                o resultado é uma modernidade nostálgica e completa ✨
              </p>
            </div>
            
            <p className="text-ink/50 leading-relaxed px-2 text-lg">
              com uma abordagem criativa, loopx pode transformar a sua ideia em realidade, 
              seja uma composição, uma capa de álbum, ou identidade visual 🎯
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {skills.map((skill, i) => (
                <div
                  key={skill.label}
                  className="group p-5 rounded-2xl bg-paper cartoon-border-sm cartoon-hover cursor-default"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl group-hover:animate-cartoon-wiggle">{skill.emoji}</span>
                    <h4 className="text-ink font-bold text-lg">{skill.label}</h4>
                  </div>
                  <p className="text-ink/40 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
