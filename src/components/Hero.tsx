import { motion } from 'motion/react';
import { ArrowDown, CheckCircle2, Leaf, Globe } from 'lucide-react';
import heroImg from '../assets/images/less_paper_hero_1784585807596.jpg';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('sobre');
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
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 overflow-hidden bg-radial from-emerald-50/40 via-white to-white"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-xs font-semibold uppercase tracking-wider"
              id="hero-badge"
            >
              <Leaf className="w-3.5 h-3.5" />
              Sustentabilidade & Inovação
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-800 leading-tight tracking-tight"
              id="hero-title"
            >
              Menos Papel, <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Mais Digital
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              id="hero-subtitle"
            >
              Transforme sua rotina com soluções digitais, reduza o desperdício e contribua para um futuro mais sustentável. Otimize seus processos com eficiência, segurança e zero papel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
              id="hero-actions"
            >
              <button
                onClick={scrollToAbout}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-emerald-500/25 hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-102 group focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              >
                Saiba Mais
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <a
                href="#ferramentas"
                onClick={(event) => {
                  event.preventDefault();
                  const toolsSection = document.getElementById('ferramentas');
                  if (toolsSection) {
                    window.scrollTo({
                      top: toolsSection.getBoundingClientRect().top + window.scrollY - 80,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-full border border-slate-200 shadow-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-102 hover:border-slate-300"
              >
                Ver Ferramentas
              </a>
            </motion.div>

            {/* Micro Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-100 max-w-lg mx-auto lg:mx-0"
              id="hero-micro-highlights"
            >
              <div className="flex items-center gap-2 text-slate-500">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-xs font-medium">100% Digital</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Globe className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-xs font-medium">Eco Amigável</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-slate-500">
                <Leaf className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-medium">Preservação Ativa</span>
              </div>
            </motion.div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 relative" id="hero-image-wrapper">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Decorative Card Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-blue-50 rounded-[2.5rem] -z-10 blur-xl opacity-80" />
              
              {/* Floating Eco Tags */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 bg-white shadow-xl rounded-2xl p-4 border border-emerald-50/50 flex items-center gap-3 z-10 max-w-[200px]"
              >
                <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-800">Menos Lixo</div>
                  <div className="text-[10px] text-slate-400">Salve nossas florestas</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl p-4 border border-blue-50/50 flex items-center gap-3 z-10 max-w-[200px]"
              >
                <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-800">Mais Nuvem</div>
                  <div className="text-[10px] text-slate-400">Acesse de qualquer lugar</div>
                </div>
              </motion.div>

              {/* Main Image Container styled like a modern bezel-less display */}
              <div className="overflow-hidden rounded-3xl border border-slate-200/60 shadow-2xl bg-white p-3 transform hover:rotate-1 transition-transform duration-500">
                <div className="overflow-hidden rounded-2xl aspect-4/3 relative bg-slate-50">
                  <img
                    src={heroImg}
                    alt="Ilustração moderna de transformação digital reduzindo o uso de papel"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    id="hero-main-image"
                  />
                </div>
              </div>

              {/* Behind image element to represent stacked digital documents */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-slate-200/40 rounded-3xl -z-20 bg-white shadow-sm" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
