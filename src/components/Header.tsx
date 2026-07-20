import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf, Smartphone } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#por-que-reduzir', label: 'Por que Reduzir?' },
  { href: '#ferramentas', label: 'Ferramentas' },
  { href: '#como-comecar', label: 'Como Começar' },
  { href: '#dicas', label: 'Dicas' },
  { href: '#beneficios', label: 'Benefícios' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(link => {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: link.href,
            // Section is active if top of section is near the middle of the viewport
            top: Math.abs(rect.top - 120),
          };
        }
        return { id: link.href, top: Infinity };
      });

      const closest = sections.reduce((prev, curr) => (curr.top < prev.top ? curr : prev), { id: '#inicio', top: Infinity });
      setActiveSection(closest.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(href);
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md py-3 border-b border-emerald-100/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center gap-2 group focus:outline-none"
            id="header-logo"
          >
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 transition-transform group-hover:scale-105 group-hover:bg-emerald-500/20">
              <Leaf className="w-6 h-6 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-slate-800 flex items-center gap-1">
                Eco<span className="text-emerald-600">Digital</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold leading-none -mt-0.5">
                Menos Papel, Mais Futuro
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/60 p-1.5 rounded-full border border-slate-200/50" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBubble"
                      className="absolute inset-0 bg-white shadow-sm border border-emerald-500/10 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <a
              href="#sobre"
              onClick={(e) => handleLinkClick(e, '#sobre')}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium text-sm rounded-full shadow-md hover:shadow-emerald-500/25 hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-102"
              id="header-cta"
            >
              Começar Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-emerald-100 overflow-hidden"
            id="mobile-nav-container"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 font-semibold border-l-4 border-emerald-500'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-slate-100 px-4">
                <a
                  href="#sobre"
                  onClick={(e) => handleLinkClick(e, '#sobre')}
                  className="block w-full text-center px-5 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-xl shadow-md hover:from-emerald-500 hover:to-teal-500 transition-all"
                >
                  Começar Agora
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
