import React, { useState, useMemo } from 'react';
import { Send, User, Mail, ChevronDown } from 'lucide-react';
import SocialLinks from './SocialLinks';

const LOOPX_EMAIL = 'loopxcontato@gmail.com';

type MainService = 'musica' | 'arte' | '';

// ===== MUSIC OPTIONS =====
const genres = [
  { id: 'lofi', name: 'lo-fi', price: 20, emoji: '🌙' },
  { id: 'softrock', name: 'soft rock', price: 100, emoji: '🎸' },
  { id: 'jrock', name: 'j-rock', price: 120, emoji: '⚡' },
  { id: 'hiphop', name: 'hip-hop', price: 60, emoji: '🎤' },
  { id: 'synthwave', name: 'synthwave', price: 70, emoji: '🌆' },
  { id: 'stardew', name: 'estilo stardew valley', price: 30, emoji: '🌾' },
  { id: 'undertale', name: 'estilo undertale', price: 30, emoji: '💀' },
  { id: 'milk', name: 'estilo milk inside a bag of milk', price: 30, emoji: '🥛' },
  { id: 'frutiger', name: 'frutiger aero', price: 60, emoji: '🫧' },
  { id: 'bossa', name: 'bossa nova', price: 80, emoji: '🎶' },
  { id: 'kawaii', name: 'kawaii future bass', price: 150, emoji: '🌸' },
];

const musicComplementos = [
  { id: 'guitarra', name: 'guitarra gravada', price: 10, emoji: '🎸' },
  { id: 'baixo', name: 'baixo gravado', price: 10, emoji: '🎵' },
  { id: 'violao', name: 'violão gravado', price: 10, emoji: '🪕' },
];

// ===== ART OPTIONS =====
const artStyles = [
  { id: 'cartoon', name: 'cartoon', price: 20, emoji: '✏️' },
  { id: 'manga', name: 'mangá / anime', price: 30, emoji: '🎌' },
  { id: 'semirealismo', name: 'semirrealismo', price: 30, emoji: '🖌️' },
];

const artSubjects = [
  { id: 'pessoa', name: 'pessoa / personagem', emoji: '🧑' },
  { id: 'animal', name: 'animal / pet', emoji: '🐾' },
  { id: 'objeto', name: 'objeto', emoji: '📦' },
];

const artPainting = [
  { id: 'mono', name: 'monocromático', price: 0, emoji: '⬛' },
  { id: 'colorido', name: 'colorido', price: 15, emoji: '🌈' },
];

const artBackgrounds = [
  { id: 'branco', name: 'branco', price: 0, emoji: '⬜' },
  { id: 'transparente', name: 'transparente', price: 0, emoji: '🔲' },
  { id: 'simples', name: 'simples', price: 5, emoji: '🖼️' },
  { id: 'complexo', name: 'complexo', price: 20, emoji: '🏞️' },
];

const artComplementos = [
  { id: 'pet1', name: '+1 pet', price: 15, emoji: '🐶' },
  { id: 'pessoa1', name: '+1 pessoa', price: 15, emoji: '👤' },
  { id: 'pessoa2', name: '+2 pessoas', price: 25, emoji: '👥' },
  { id: 'pessoa3', name: '+3 pessoas', price: 35, emoji: '👨‍👩‍👧' },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mainService: '' as MainService,
    // Music
    genre: '',
    selectedMusicComps: [] as string[],
    // Art
    artStyle: '',
    artSubject: '',
    artPainting: '',
    artBackground: '',
    selectedArtComps: [] as string[],
    // General
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showGenres, setShowGenres] = useState(false);
  const [showArtStyles, setShowArtStyles] = useState(false);

  // Calculate minimum price based on selections
  const minPrice = useMemo(() => {
    if (formData.mainService === 'musica') {
      const selectedGenre = genres.find(g => g.id === formData.genre);
      const genrePrice = selectedGenre ? selectedGenre.price : 0;
      const compPrice = formData.selectedMusicComps.reduce((sum, compId) => {
        const comp = musicComplementos.find(c => c.id === compId);
        return sum + (comp ? comp.price : 0);
      }, 0);
      return genrePrice + compPrice;
    }

    if (formData.mainService === 'arte') {
      const stylePrice = artStyles.find(s => s.id === formData.artStyle)?.price || 0;
      const paintPrice = artPainting.find(p => p.id === formData.artPainting)?.price || 0;
      const bgPrice = artBackgrounds.find(b => b.id === formData.artBackground)?.price || 0;
      const compPrice = formData.selectedArtComps.reduce((sum, compId) => {
        const comp = artComplementos.find(c => c.id === compId);
        return sum + (comp ? comp.price : 0);
      }, 0);
      return stylePrice + paintPrice + bgPrice + compPrice;
    }

    return 0;
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMainServiceSelect = (service: MainService) => {
    setFormData({
      ...formData,
      mainService: service,
      genre: '',
      selectedMusicComps: [],
      artStyle: '',
      artSubject: '',
      artPainting: '',
      artBackground: '',
      selectedArtComps: [],
      budget: '',
    });
    setShowGenres(false);
    setShowArtStyles(false);
  };

  const handleGenreSelect = (genreId: string) => {
    setFormData({ ...formData, genre: genreId, budget: '' });
  };

  const handleMusicCompToggle = (compId: string) => {
    const updated = formData.selectedMusicComps.includes(compId)
      ? formData.selectedMusicComps.filter(c => c !== compId)
      : [...formData.selectedMusicComps, compId];
    setFormData({ ...formData, selectedMusicComps: updated, budget: '' });
  };

  const handleArtCompToggle = (compId: string) => {
    const updated = formData.selectedArtComps.includes(compId)
      ? formData.selectedArtComps.filter(c => c !== compId)
      : [...formData.selectedArtComps, compId];
    setFormData({ ...formData, selectedArtComps: updated, budget: '' });
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || /^\d*$/.test(val)) {
      setFormData({ ...formData, budget: val });
    }
  };

  const validateForm = (): boolean => {
    setError('');
    if (!formData.name || !formData.email || !formData.mainService || !formData.message) {
      setError('por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('por favor, insira um email válido.');
      return false;
    }
    if (formData.mainService === 'musica' && !formData.genre) {
      setError('por favor, selecione um gênero musical.');
      return false;
    }
    if (formData.mainService === 'arte') {
      if (!formData.artStyle) {
        setError('por favor, selecione um estilo de arte.');
        return false;
      }
      if (!formData.artSubject) {
        setError('por favor, selecione um tema.');
        return false;
      }
      if (!formData.artPainting) {
        setError('por favor, selecione a forma de pintura.');
        return false;
      }
      if (!formData.artBackground) {
        setError('por favor, selecione o tipo de fundo.');
        return false;
      }
    }
    if (formData.budget && Number(formData.budget) < minPrice) {
      setError(`o orçamento mínimo para este serviço é R$${minPrice}.`);
      return false;
    }
    return true;
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    let details = '';

    if (formData.mainService === 'musica') {
      const selectedGenre = genres.find(g => g.id === formData.genre);
      const selectedComps = formData.selectedMusicComps
        .map(id => musicComplementos.find(c => c.id === id))
        .filter(Boolean);

      details = [
        `serviço: produção musical`,
        selectedGenre ? `gênero: ${selectedGenre.name} (R$${selectedGenre.price})` : '',
        selectedComps.length > 0 ? `complementos: ${selectedComps.map(c => `${c!.name} (+R$${c!.price})`).join(', ')}` : '',
      ].filter(Boolean).join('\n');
    }

    if (formData.mainService === 'arte') {
      const style = artStyles.find(s => s.id === formData.artStyle);
      const subject = artSubjects.find(s => s.id === formData.artSubject);
      const painting = artPainting.find(p => p.id === formData.artPainting);
      const bg = artBackgrounds.find(b => b.id === formData.artBackground);
      const comps = formData.selectedArtComps
        .map(id => artComplementos.find(c => c.id === id))
        .filter(Boolean);

      details = [
        `serviço: arte`,
        style ? `estilo: ${style.name} (+R$${style.price})` : '',
        subject ? `tema: ${subject.name} (grátis)` : '',
        painting ? `pintura: ${painting.name} ${painting.price > 0 ? `(+R$${painting.price})` : '(grátis)'}` : '',
        bg ? `fundo: ${bg.name} ${bg.price > 0 ? `(+R$${bg.price})` : '(grátis)'}` : '',
        comps.length > 0 ? `extras: ${comps.map(c => `${c!.name} (+R$${c!.price})`).join(', ')}` : '',
      ].filter(Boolean).join('\n');
    }

    const lines = [
      `olá loopx!`,
      ``,
      `meu nome é ${formData.name} e tenho interesse em contratar seus serviços.`,
      ``,
      details,
      ``,
      formData.budget ? `orçamento: R$${formData.budget}` : '',
      ``,
      `detalhes do projeto:`,
      formData.message,
      ``,
      `meu email para contato: ${formData.email}`,
      ``,
      `aguardo seu retorno!`,
    ];

    const serviceLabel = formData.mainService === 'musica' ? 'produção musical' : 'arte';
    const subject = encodeURIComponent(`[pedido] ${serviceLabel} — ${formData.name}`);
    const body = encodeURIComponent(lines.filter(l => l !== undefined && l !== '').join('\n'));
    window.location.href = `mailto:${LOOPX_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  // ===== SUBMITTED STATE =====
  if (submitted) {
    return (
      <section id="contact" className="relative z-10 py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="p-12 rounded-3xl bg-paper cartoon-border-xl">
            <div className="text-7xl mb-6 animate-cartoon-bounce">📬</div>
            <h3 className="text-3xl text-ink mb-4 font-bold">email preparado!</h3>
            <p className="text-ink/60 mb-6 leading-relaxed text-xl">
              seu cliente de <span className="text-ink font-bold">email</span> foi aberto com a mensagem
              preenchida, <span className="text-ink font-bold">{formData.name}</span>!
              <br /><br />
              👉 <strong className="text-ink">clique em "enviar" no seu email</strong> para que o loopx receba.
            </p>

            <div className="p-5 rounded-2xl bg-cream cartoon-border-sm text-left mb-8">
              <p className="text-lg text-ink mb-3 font-bold">📋 resumo do pedido</p>
              <div className="space-y-2 text-lg text-ink/50">
                <p><span className="text-ink font-bold">serviço:</span> {formData.mainService === 'musica' ? 'produção musical' : 'arte'}</p>
                {formData.mainService === 'musica' && formData.genre && (
                  <p><span className="text-ink font-bold">gênero:</span> {genres.find(g => g.id === formData.genre)?.name}</p>
                )}
                {formData.mainService === 'arte' && (
                  <>
                    {formData.artStyle && <p><span className="text-ink font-bold">estilo:</span> {artStyles.find(s => s.id === formData.artStyle)?.name}</p>}
                    {formData.artSubject && <p><span className="text-ink font-bold">tema:</span> {artSubjects.find(s => s.id === formData.artSubject)?.name}</p>}
                    {formData.artPainting && <p><span className="text-ink font-bold">pintura:</span> {artPainting.find(p => p.id === formData.artPainting)?.name}</p>}
                    {formData.artBackground && <p><span className="text-ink font-bold">fundo:</span> {artBackgrounds.find(b => b.id === formData.artBackground)?.name}</p>}
                  </>
                )}
                {formData.budget && <p><span className="text-ink font-bold">orçamento:</span> R${formData.budget}</p>}
                <p><span className="text-ink font-bold">valor mínimo:</span> R${minPrice}</p>
                <p><span className="text-ink font-bold">contato:</span> {formData.email}</p>
              </div>
            </div>

            <p className="text-ink/30 text-lg mb-6 font-medium">
              enquanto isso, acompanhe o loopx:
            </p>
            <SocialLinks size="sm" />
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '', email: '', mainService: '',
                  genre: '', selectedMusicComps: [],
                  artStyle: '', artSubject: '', artPainting: '', artBackground: '', selectedArtComps: [],
                  budget: '', message: '',
                });
              }}
              className="mt-8 px-7 py-3.5 rounded-2xl bg-cream text-ink font-bold text-lg cartoon-btn"
            >
              ↩ enviar outra mensagem
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ===== SELECT BUTTON COMPONENT =====
  const SelectButton = ({ selected, onClick, emoji, label, price, isFree }: {
    selected: boolean; onClick: () => void; emoji: string; label: string; price?: number; isFree?: boolean;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 p-3 rounded-xl text-base font-bold transition-all duration-200 border-[3px] ${
        selected
          ? 'bg-ink text-cream border-ink shadow-[3px_3px_0px_#555]'
          : 'bg-cream text-ink/50 border-ink/10 hover:border-ink/30 hover:text-ink'
      }`}
    >
      <span className={`w-5 h-5 rounded-md border-2 flex items-center justify-center text-xs flex-shrink-0 ${
        selected ? 'bg-cream text-ink border-cream' : 'border-ink/30'
      }`}>
        {selected && '✓'}
      </span>
      <span>{emoji}</span>
      <span className="flex-1 text-left text-sm">{label}</span>
      {(price !== undefined || isFree) && (
        <span className="text-sm flex-shrink-0">
          {isFree || price === 0 ? 'grátis' : `+R$${price}`}
        </span>
      )}
    </button>
  );

  // ===== MAIN FORM =====
  return (
    <section id="contact" className="relative z-10 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-paper cartoon-border-sm text-lg text-ink mb-4">
            🌱 fale comigo 🌱
          </span>
          <h2 className="text-4xl md:text-5xl text-ink mb-3">contato</h2>
          <div className="flex justify-center mb-6">
            <svg width="120" height="10" viewBox="0 0 120 10">
              <path d="M2 6 C25 2, 40 8, 60 5 S95 2, 118 7" stroke="#4a9e5c" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4" />
            </svg>
          </div>
          <p className="text-ink/50 max-w-2xl mx-auto font-medium text-xl">
            tem um projeto em mente? preencha o formulário e envie diretamente pro loopx via <span className="text-ink font-bold">email</span>! ✉️
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-7 rounded-3xl bg-paper cartoon-border">
              <h3 className="text-xl text-ink mb-5 font-bold">como funciona</h3>
              <div className="space-y-5">
                {[
                  { step: '01', text: 'escolha o tipo de serviço', emoji: '🎯' },
                  { step: '02', text: 'personalize suas opções', emoji: '🎨' },
                  { step: '03', text: 'descreva seu projeto', emoji: '📝' },
                  { step: '04', text: 'envie por email e aguarde!', emoji: '📧' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="text-cream bg-ink rounded-xl px-3 py-1.5 cartoon-border-sm border-ink text-base font-bold" style={{ boxShadow: '2px 2px 0px #555' }}>
                      {item.step}
                    </span>
                    <p className="text-ink/60 text-lg pt-1 font-medium">
                      {item.emoji} {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-paper cartoon-border">
              <h3 className="text-xl text-ink mb-5 font-bold">📧 email direto</h3>
              <a
                href={`mailto:${LOOPX_EMAIL}`}
                className="flex items-center gap-3 text-lg text-ink/60 hover:text-ink transition-colors group font-bold"
              >
                <div className="w-11 h-11 rounded-xl bg-cream cartoon-border-sm flex items-center justify-center group-hover:bg-highlight transition-all group-hover:animate-cartoon-wiggle">
                  <Mail size={20} className="text-ink" />
                </div>
                {LOOPX_EMAIL}
              </a>
              <div className="mt-6 pt-5 border-t-[3px] border-dashed border-ink/10">
                <p className="text-ink/30 text-base mb-4 font-bold">redes sociais:</p>
                <SocialLinks size="sm" />
              </div>
            </div>

            {/* Min price info */}
            {minPrice > 0 && (
              <div className="p-6 rounded-3xl bg-highlight/50 cartoon-border">
                <p className="text-lg text-ink mb-1 font-bold">💰 valor mínimo</p>
                <p className="text-3xl text-ink font-bold">R${minPrice}</p>
                <p className="text-ink/50 text-base mt-2 font-medium">
                  baseado na sua seleção atual
                </p>
              </div>
            )}
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSendEmail} className="p-7 md:p-9 rounded-3xl bg-paper cartoon-border-lg">
              <h3 className="text-2xl text-ink mb-8 flex items-center gap-2 font-bold">
                📋 formulário de contato
              </h3>

              {/* Error message */}
              {error && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 border-[3px] flex items-start gap-3" style={{ borderColor: '#fca5a5', boxShadow: '3px 3px 0px #fca5a5' }}>
                  <span className="text-xl">⚠️</span>
                  <p className="text-red-700 text-base font-medium">{error}</p>
                </div>
              )}

              {/* Name */}
              <div className="mb-5">
                <label className="flex items-center gap-2 text-ink font-bold text-lg mb-2">
                  <User size={16} /> nome *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="seu nome completo"
                  className="w-full px-5 py-3.5 rounded-xl bg-cream border-[3px] border-ink/15 text-ink placeholder-ink/25 focus:border-ink focus:outline-none transition-colors font-medium text-lg"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="flex items-center gap-2 text-ink font-bold text-lg mb-2">
                  <Mail size={16} /> email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-5 py-3.5 rounded-xl bg-cream border-[3px] border-ink/15 text-ink placeholder-ink/25 focus:border-ink focus:outline-none transition-colors font-medium text-lg"
                />
              </div>

              {/* Main service selection - NO PULSING */}
              <div className="mb-5">
                <label className="flex items-center gap-2 text-ink font-bold text-lg mb-3">
                  🎯 serviço desejado *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleMainServiceSelect('musica')}
                    className={`p-5 rounded-2xl text-lg font-bold transition-all duration-200 border-[3px] flex flex-col items-center gap-2 ${
                      formData.mainService === 'musica'
                        ? 'bg-ink text-cream border-ink shadow-[4px_4px_0px_#555] -translate-y-1'
                        : 'bg-cream text-ink/50 border-ink/10 hover:border-ink/30 hover:text-ink'
                    }`}
                  >
                    <span className="text-3xl">🎹</span>
                    produção musical
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMainServiceSelect('arte')}
                    className={`p-5 rounded-2xl text-lg font-bold transition-all duration-200 border-[3px] flex flex-col items-center gap-2 ${
                      formData.mainService === 'arte'
                        ? 'bg-ink text-cream border-ink shadow-[4px_4px_0px_#555] -translate-y-1'
                        : 'bg-cream text-ink/50 border-ink/10 hover:border-ink/30 hover:text-ink'
                    }`}
                  >
                    <span className="text-3xl">🎨</span>
                    arte
                  </button>
                </div>
              </div>

              {/* ===== MUSIC OPTIONS ===== */}
              {formData.mainService === 'musica' && (
                <div className="mb-5 space-y-4">
                  {/* Genre selector */}
                  <div>
                    <label className="flex items-center gap-2 text-ink font-bold text-lg mb-3">
                      🎵 gênero musical *
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowGenres(!showGenres)}
                      className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-cream border-[3px] border-ink/15 text-ink font-medium text-lg hover:border-ink/30 transition-colors"
                    >
                      {formData.genre ? (
                        <span className="flex items-center gap-2">
                          {genres.find(g => g.id === formData.genre)?.emoji}{' '}
                          {genres.find(g => g.id === formData.genre)?.name}{' '}
                          <span className="text-ink/40">(R${genres.find(g => g.id === formData.genre)?.price})</span>
                        </span>
                      ) : (
                        <span className="text-ink/25">selecione um gênero...</span>
                      )}
                      <ChevronDown size={20} className={`text-ink/40 transition-transform ${showGenres ? 'rotate-180' : ''}`} />
                    </button>

                    {showGenres && (
                      <div className="mt-2 rounded-2xl bg-cream border-[3px] border-ink/15 overflow-hidden max-h-64 overflow-y-auto">
                        {genres.map((genre) => (
                          <button
                            key={genre.id}
                            type="button"
                            onClick={() => { handleGenreSelect(genre.id); setShowGenres(false); }}
                            className={`w-full flex items-center gap-3 px-5 py-3 text-left text-base font-bold transition-all hover:bg-ink hover:text-cream border-b border-ink/5 last:border-0 ${
                              formData.genre === genre.id ? 'bg-ink text-cream' : 'text-ink'
                            }`}
                          >
                            <span className="text-lg">{genre.emoji}</span>
                            <span className="flex-1">{genre.name}</span>
                            <span className={`px-2 py-0.5 rounded-lg text-sm ${
                              formData.genre === genre.id ? 'bg-cream/20' : 'bg-highlight/40'
                            }`}>
                              R${genre.price}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Music complementos */}
                  {formData.genre && (
                    <div>
                      <label className="flex items-center gap-2 text-ink font-bold text-base mb-3">
                        🎸 complementos (opcional)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {musicComplementos.map((comp) => (
                          <SelectButton
                            key={comp.id}
                            selected={formData.selectedMusicComps.includes(comp.id)}
                            onClick={() => handleMusicCompToggle(comp.id)}
                            emoji={comp.emoji}
                            label={comp.name}
                            price={comp.price}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ===== ART OPTIONS ===== */}
              {formData.mainService === 'arte' && (
                <div className="mb-5 space-y-4">
                  {/* Art style selector */}
                  <div>
                    <label className="flex items-center gap-2 text-ink font-bold text-lg mb-3">
                      ✏️ estilo de arte *
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowArtStyles(!showArtStyles)}
                      className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-cream border-[3px] border-ink/15 text-ink font-medium text-lg hover:border-ink/30 transition-colors"
                    >
                      {formData.artStyle ? (
                        <span className="flex items-center gap-2">
                          {artStyles.find(s => s.id === formData.artStyle)?.emoji}{' '}
                          {artStyles.find(s => s.id === formData.artStyle)?.name}{' '}
                          <span className="text-ink/40">(+R${artStyles.find(s => s.id === formData.artStyle)?.price})</span>
                        </span>
                      ) : (
                        <span className="text-ink/25">selecione um estilo...</span>
                      )}
                      <ChevronDown size={20} className={`text-ink/40 transition-transform ${showArtStyles ? 'rotate-180' : ''}`} />
                    </button>

                    {showArtStyles && (
                      <div className="mt-2 rounded-2xl bg-cream border-[3px] border-ink/15 overflow-hidden">
                        {artStyles.map((style) => (
                          <button
                            key={style.id}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, artStyle: style.id, budget: '' });
                              setShowArtStyles(false);
                            }}
                            className={`w-full flex items-center gap-3 px-5 py-3 text-left text-base font-bold transition-all hover:bg-ink hover:text-cream border-b border-ink/5 last:border-0 ${
                              formData.artStyle === style.id ? 'bg-ink text-cream' : 'text-ink'
                            }`}
                          >
                            <span className="text-lg">{style.emoji}</span>
                            <span className="flex-1">{style.name}</span>
                            <span className={`px-2 py-0.5 rounded-lg text-sm ${
                              formData.artStyle === style.id ? 'bg-cream/20' : 'bg-highlight/40'
                            }`}>
                              +R${style.price}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Art subject - obrigatório */}
                  {formData.artStyle && (
                    <div>
                      <label className="flex items-center gap-2 text-ink font-bold text-base mb-3">
                        🎭 tema * <span className="text-ink/40 font-medium">(grátis)</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {artSubjects.map((subject) => (
                          <SelectButton
                            key={subject.id}
                            selected={formData.artSubject === subject.id}
                            onClick={() => setFormData({ ...formData, artSubject: subject.id })}
                            emoji={subject.emoji}
                            label={subject.name}
                            isFree
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Art painting */}
                  {formData.artSubject && (
                    <div>
                      <label className="flex items-center gap-2 text-ink font-bold text-base mb-3">
                        🎨 forma de pintura *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {artPainting.map((p) => (
                          <SelectButton
                            key={p.id}
                            selected={formData.artPainting === p.id}
                            onClick={() => setFormData({ ...formData, artPainting: p.id, budget: '' })}
                            emoji={p.emoji}
                            label={p.name}
                            price={p.price}
                            isFree={p.price === 0}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Art background */}
                  {formData.artPainting && (
                    <div>
                      <label className="flex items-center gap-2 text-ink font-bold text-base mb-3">
                        🖼️ fundo *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {artBackgrounds.map((bg) => (
                          <SelectButton
                            key={bg.id}
                            selected={formData.artBackground === bg.id}
                            onClick={() => setFormData({ ...formData, artBackground: bg.id, budget: '' })}
                            emoji={bg.emoji}
                            label={bg.name}
                            price={bg.price}
                            isFree={bg.price === 0}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Art complementos */}
                  {formData.artBackground && (
                    <div>
                      <label className="flex items-center gap-2 text-ink font-bold text-base mb-3">
                        ✨ complementos (extras)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {artComplementos.map((comp) => (
                          <SelectButton
                            key={comp.id}
                            selected={formData.selectedArtComps.includes(comp.id)}
                            onClick={() => handleArtCompToggle(comp.id)}
                            emoji={comp.emoji}
                            label={comp.name}
                            price={comp.price}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Budget */}
              {formData.mainService && (
                <div className="mb-5">
                  <label className="flex items-center gap-2 text-ink font-bold text-lg mb-2">
                    💰 orçamento (R$) {minPrice > 0 && <span className="text-ink/40 text-base font-medium">mínimo: R${minPrice}</span>}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40 font-bold text-lg">R$</span>
                    <input
                      type="number"
                      name="budget"
                      value={formData.budget}
                      onChange={handleBudgetChange}
                      min={minPrice}
                      placeholder={minPrice > 0 ? `mínimo R$${minPrice}` : 'valor'}
                      className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-cream border-[3px] border-ink/15 text-ink placeholder-ink/25 focus:border-ink focus:outline-none transition-colors font-medium text-lg"
                    />
                  </div>
                  {formData.budget && Number(formData.budget) < minPrice && (
                    <p className="mt-2 text-red-500 text-base font-bold">
                      ⚠️ o valor mínimo é R${minPrice}
                    </p>
                  )}
                </div>
              )}

              {/* Message */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-ink font-bold text-lg mb-2">
                  ✏️ detalhes do projeto *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="descreva seu projeto, referências, estilo desejado, prazos..."
                  className="w-full px-5 py-3.5 rounded-xl bg-cream border-[3px] border-ink/15 text-ink placeholder-ink/25 focus:border-ink focus:outline-none transition-colors resize-none font-medium text-lg"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-ink text-cream font-bold text-xl cartoon-btn border-ink"
              >
                <Send size={20} className="group-hover:animate-cartoon-wiggle" />
                enviar por email 📧
              </button>

              <p className="text-center text-ink/25 text-base mt-4 font-medium">
                o email será enviado para {LOOPX_EMAIL} ✉️
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
