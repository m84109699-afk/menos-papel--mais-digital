import React from 'react';
import { Leaf, Mail, Shield, BookOpen, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Leaf className="w-6 h-6 animate-pulse" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white flex items-center gap-1">
                Eco<span className="text-emerald-400">Digital</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Iniciativa institucional dedicada a conscientizar e incentivar pessoas e organizações sobre os ganhos ambientais, financeiros e operacionais com a redução de papel e adoção do digital.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">
                Cultive o verde. Viva o digital.
              </span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider font-display">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleLinkClick(e, '#inicio')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => handleLinkClick(e, '#sobre')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Sobre o Projeto
                </a>
              </li>
              <li>
                <a
                  href="#ferramentas"
                  onClick={(e) => handleLinkClick(e, '#ferramentas')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Ferramentas Recomendadas
                </a>
              </li>
              <li>
                <a
                  href="#dicas"
                  onClick={(e) => handleLinkClick(e, '#dicas')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Dicas Verdes
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Contact Placeholder */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider font-display">
              Contato & Apoio
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Quer apoiar nossa iniciativa ou tirar dúvidas sobre como implementar o projeto em sua empresa?
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">Menos_Papel_Mais_Digital@proton.me</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">Iniciativa digital sustentável</span>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://forms.gle/YxtzeC7oXfswTEFRA"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-block text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Avalie este projeto
              </a>
            </div>
          </div>

        </div>

        {/* Bottom footer row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} EcoDigital. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-slate-600" />
              <span>Privacidade Assegurada</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-slate-600" />
              <span>Cultura ESG</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
