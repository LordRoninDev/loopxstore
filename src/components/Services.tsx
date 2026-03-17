import React, { useState } from 'react';

const genres = [
  { name: 'lo-fi', price: 20, emoji: '🌙', hasInstruments: false },
  { name: 'soft rock', price: 100, emoji: '🎸', hasInstruments: true },
  { name: 'j-rock', price: 120, emoji: '⚡', hasInstruments: true },
  { name: 'hip-hop', price: 60, emoji: '🎤', hasInstruments: false },
  { name: 'synthwave', price: 70, emoji: '🌆', hasInstruments: false },
  { name: 'estilo stardew valley', price: 30, emoji: '🌾', hasInstruments: false },
  { name: 'estilo undertale', price: 30, emoji: '💀', hasInstruments: false },
  { name: 'estilo milk inside a bag of milk', price: 30, emoji: '🥛', hasInstruments: false },
  { name: 'frutiger aero', price: 60, emoji: '🫧', hasInstruments: false },
  { name: 'bossa nova', price: 80, emoji: '🎶', hasInstruments: true },
  { name: 'kawaii future bass', price: 150, emoji: '🌸', hasInstruments: false },
];

const musicComplementos = [
  { name: 'guitarra gravada', price: 10, emoji: '🎸' },
  { name: 'baixo gravado', price: 10, emoji: '🎵' },
  { name: 'violão gravado', price: 10, emoji: '🪕' },
];

const artStyles = [
  { name: 'cartoon', price: 20, emoji: '✏️' },
  { name: 'mangá / anime', price: 30, emoji: '🎌' },
  { name: 'semirrealismo', price: 30, emoji: '🖌️' },
];

const artSubjects = [
  { name: 'pessoa / personagem', emoji: '🧑' },
  { name: 'animal / pet', emoji: '🐾' },
  { name: 'objeto', emoji: '📦' },
];

const artPainting = [
  { name: 'monocromático', price: 0, emoji: '⬛' },
  { name: 'colorido', price: 15, emoji: '🖼️' },
];

const artBackgrounds = [
  { name: 'branco', price: 0, emoji: '⬜' },
  { name: 'transparente', price: 0, emoji: '🔲' },
  { name: 'simples', price: 5, emoji: '🖼️' },
  { name: 'complexo', price: 20, emoji: '🏞️' },
];

const artComplementos = [
  { name: '+1 pet', price: 15, emoji: '🐶' },
  { name: '+1 pessoa', price: 15, emoji: '👤' },
  { name: '+2 pessoas', price: 25, emoji: '👥' },
  { name: '+3 pessoas', price: 35, emoji: '👨‍👩‍👧' },
];

const Services: React.FC = () => {
  const [hoveredGenre, setHoveredGenre] = useState<string | null>(null);

  return (
    <section id="services" className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-paper cartoon-border-sm text-lg text-ink mb-4">
            🍃 o que eu faço 🍃
          </span>
          <h2 className="text-4xl md:text-5xl text-ink mb-3">
            serviços
          </h2>
          <div className="flex justify-center mb-6">
            <svg width="120" height="10" viewBox="0 0 120 10">
              <path d="M2 6 C25 2, 40 8, 60 5 S95 2, 118 7" stroke="#4a9e5c" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4" />
            </svg>
          </div>
          <p className="text-ink/50 max-w-2xl mx-auto font-medium text-xl">
            cada projeto é tratado com dedicação e criatividade 🎯
          </p>
        </div>

        {/* ===== PRODUÇÃO MUSICAL ===== */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🎹</span>
            <h3 className="text-3xl md:text-4xl text-ink font-bold">produção musical</h3>
          </div>
          <p className="text-ink/50 text-lg mb-2 font-medium max-w-2xl">
            produções completas com instrumentos gravados inclusos. escolha seu gênero e adicione complementos opcionais! 🎵
          </p>
          <p className="text-ink/40 text-base mb-8 font-medium italic">
            🎸 já incluem instrumentos gravados
          </p>

          {/* Genres grid */}
          <div className="rounded-3xl bg-paper cartoon-border-lg p-6 md:p-8 mb-6">
            <h4 className="text-xl text-ink font-bold mb-6 flex items-center gap-2">
              🎵 gênero musical
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {genres.map((genre) => (
                <div
                  key={genre.name}
                  className={`relative flex items-center gap-3 p-4 rounded-2xl border-[3px] transition-all duration-200 cursor-default ${
                    hoveredGenre === genre.name
                      ? 'bg-ink text-cream border-ink shadow-[4px_4px_0px_#555] -translate-y-1'
                      : 'bg-cream border-ink/10 hover:border-ink/30'
                  }`}
                  onMouseEnter={() => setHoveredGenre(genre.name)}
                  onMouseLeave={() => setHoveredGenre(null)}
                >
                  <span className="text-xl flex-shrink-0">{genre.emoji}</span>
                  <div className="flex-1">
                    <span className={`text-base font-bold ${
                      hoveredGenre === genre.name ? 'text-cream' : 'text-ink'
                    }`}>
                      {genre.name}
                    </span>
                    {genre.hasInstruments && (
                      <span className={`block text-xs mt-0.5 ${
                        hoveredGenre === genre.name ? 'text-cream/60' : 'text-ink/40'
                      }`}>
                        🎸 inclui instrumentos gravados
                      </span>
                    )}
                  </div>
                  <span className={`text-base font-bold flex-shrink-0 px-3 py-1 rounded-xl ${
                    hoveredGenre === genre.name ? 'bg-cream/20 text-cream' : 'bg-highlight/40 text-ink'
                  }`}>
                    R${genre.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Music complementos */}
          <div className="rounded-3xl bg-paper cartoon-border p-6 md:p-8">
            <h4 className="text-xl text-ink font-bold mb-2 flex items-center gap-2">
              🎸 complementos (opcional)
            </h4>
            <p className="text-ink/40 text-base mb-5 font-medium">
              adicione instrumentos gravados à sua produção
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {musicComplementos.map((comp) => (
                <div
                  key={comp.name}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-cream border-[3px] border-ink/10 hover:border-ink/30 transition-all cartoon-hover"
                >
                  <span className="text-2xl">{comp.emoji}</span>
                  <span className="text-base font-bold text-ink flex-1">{comp.name}</span>
                  <span className="text-base font-bold text-ink/60 bg-highlight/30 px-3 py-1 rounded-xl">
                    +R${comp.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== ARTE ===== */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🎨</span>
            <h3 className="text-3xl md:text-4xl text-ink font-bold">arte</h3>
          </div>
          <p className="text-ink/50 text-lg mb-8 font-medium max-w-2xl">
            ilustrações personalizadas para seus projetos! 🖌️
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Estilos */}
            <div className="rounded-3xl bg-paper cartoon-border-lg p-6 md:p-8">
              <h4 className="text-xl text-ink font-bold mb-6 flex items-center gap-2">
                ✏️ estilo de arte
              </h4>
              <div className="space-y-3">
                {artStyles.map((style) => (
                  <div
                    key={style.name}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-cream border-[3px] border-ink/10 hover:border-ink/30 transition-all cartoon-hover"
                  >
                    <span className="text-2xl">{style.emoji}</span>
                    <span className="text-base font-bold text-ink flex-1">{style.name}</span>
                    <span className="text-base font-bold text-ink/60 bg-highlight/30 px-3 py-1 rounded-xl">
                      +R${style.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tema / Sujeito */}
            <div className="rounded-3xl bg-paper cartoon-border-lg p-6 md:p-8">
              <h4 className="text-xl text-ink font-bold mb-6 flex items-center gap-2">
                🎭 tema (obrigatório)
              </h4>
              <div className="space-y-3">
                {artSubjects.map((subject) => (
                  <div
                    key={subject.name}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-cream border-[3px] border-ink/10 hover:border-ink/30 transition-all cartoon-hover"
                  >
                    <span className="text-2xl">{subject.emoji}</span>
                    <span className="text-base font-bold text-ink flex-1">{subject.name}</span>
                    <span className="text-base font-bold text-ink/40 bg-highlight/20 px-3 py-1 rounded-xl">
                      grátis
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pintura */}
            <div className="rounded-3xl bg-paper cartoon-border p-6 md:p-8">
              <h4 className="text-xl text-ink font-bold mb-6 flex items-center gap-2">
                🎨 forma de pintura
              </h4>
              <div className="space-y-3">
                {artPainting.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-cream border-[3px] border-ink/10 hover:border-ink/30 transition-all cartoon-hover"
                  >
                    <span className="text-2xl">{p.emoji}</span>
                    <span className="text-base font-bold text-ink flex-1">{p.name}</span>
                    <span className="text-base font-bold text-ink/60 bg-highlight/30 px-3 py-1 rounded-xl">
                      {p.price === 0 ? 'grátis' : `+R$${p.price}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fundo */}
            <div className="rounded-3xl bg-paper cartoon-border p-6 md:p-8">
              <h4 className="text-xl text-ink font-bold mb-6 flex items-center gap-2">
                🖼️ fundo
              </h4>
              <div className="space-y-3">
                {artBackgrounds.map((bg) => (
                  <div
                    key={bg.name}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-cream border-[3px] border-ink/10 hover:border-ink/30 transition-all cartoon-hover"
                  >
                    <span className="text-2xl">{bg.emoji}</span>
                    <span className="text-base font-bold text-ink flex-1">{bg.name}</span>
                    <span className="text-base font-bold text-ink/60 bg-highlight/30 px-3 py-1 rounded-xl">
                      {bg.price === 0 ? 'grátis' : `+R$${bg.price}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Art complementos */}
          <div className="rounded-3xl bg-paper cartoon-border p-6 md:p-8 mt-6">
            <h4 className="text-xl text-ink font-bold mb-2 flex items-center gap-2">
              ✨ complementos (extras)
            </h4>
            <p className="text-ink/40 text-base mb-5 font-medium">
              adicione mais elementos à sua arte
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {artComplementos.map((comp) => (
                <div
                  key={comp.name}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-cream border-[3px] border-ink/10 hover:border-ink/30 transition-all cartoon-hover"
                >
                  <span className="text-2xl">{comp.emoji}</span>
                  <span className="text-base font-bold text-ink flex-1">{comp.name}</span>
                  <span className="text-base font-bold text-ink/60 bg-highlight/30 px-3 py-1 rounded-xl">
                    +R${comp.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
