import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'início', href: '#hero', emoji: '🏠' },
  { label: 'álbum', href: '#featured', emoji: '💿' },
  { label: 'sobre', href: '#about', emoji: '👤' },
  { label: 'serviços', href: '#services', emoji: '🛠️' },
  { label: 'portfolio', href: '#portfolio', emoji: '🖼️' },
  { label: 'contato', href: '#contact', emoji: '✉️' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm border-b-[3px] border-ink'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-ink text-cream flex items-center justify-center cartoon-border-sm border-ink" style={{ boxShadow: '3px 3px 0px #555' }}>
              <span className="text-2xl font-bold group-hover:animate-cartoon-wiggle">L</span>
            </div>
            <span className="text-2xl md:text-3xl text-ink font-bold">
              loopx
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-ink/60 hover:text-ink text-xl font-bold transition-all duration-200 relative group px-1 py-1"
              >
                <span className="group-hover:hidden">{item.label}</span>
                <span className="hidden group-hover:inline">{item.emoji} {item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-ink transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl bg-ink text-cream text-lg font-bold cartoon-btn border-ink"
          >
            ✉ contratar
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ink p-2 cartoon-border-sm bg-paper"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t-[3px] border-ink">
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-ink/70 hover:text-ink text-xl font-bold transition-all py-3 px-4 rounded-xl hover:bg-paper cartoon-border-sm"
              >
                <span>{item.emoji}</span>
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-xl bg-ink text-cream font-bold mt-4 cartoon-btn border-ink text-xl"
            >
              ✉ contratar loopx
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
