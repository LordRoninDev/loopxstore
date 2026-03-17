import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t-[4px] border-ink bg-paper/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <div className="w-10 h-10 rounded-xl bg-ink text-cream flex items-center justify-center cartoon-border-sm border-ink" style={{ boxShadow: '2px 2px 0px #555' }}>
                <span className="text-xl font-bold">L</span>
              </div>
              <span className="text-2xl text-ink font-bold">loopx</span>
            </div>
            <p className="text-ink/35 text-lg font-bold">
              produção musical & arte visual 🎵
            </p>
          </div>

          {/* Social links */}
          <div className="text-center">
            <SocialLinks size="sm" />
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-ink/35 text-lg font-medium">
              © {new Date().getFullYear()} loopx — todos os direitos reservados
            </p>

            {/* Made with - destaque para @The_Roninzera */}
            <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-ink/5 cartoon-border-sm">
              <span className="text-ink/30 text-base font-medium">🌿 made by</span>
              <a
                href="https://x.com/The_Roninzera"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-ink font-bold text-base hover:text-[#4a9e5c] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current group-hover:animate-cartoon-wiggle" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @The_Roninzera
              </a>
              <span className="text-ink/30 text-base">🌿</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
