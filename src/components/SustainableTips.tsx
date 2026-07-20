import { motion } from 'motion/react';
import { sustainableTips } from '../data';
import LucideIcon from './LucideIcon';
import { CheckCircle2, Bookmark } from 'lucide-react';

export default function SustainableTips() {
  return (
    <section id="dicas" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-50 rounded-full blur-3xl -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <Bookmark className="w-3.5 h-3.5" />
            Guia Prático
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 tracking-tight">
            Dicas Sustentáveis para o Dia a Dia
          </h2>
          
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Pequenas mudanças de hábito no trabalho ou em casa reduzem drasticamente o desperdício de celulose e toners químicos. Veja as melhores práticas:
          </p>
        </div>

        {/* Tips Layout Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="tips-grid">
          {sustainableTips.map((tip, idx) => {
            return (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-3xl bg-slate-50 hover:bg-emerald-50/30 border border-slate-200/50 hover:border-emerald-500/10 transition-all duration-300 relative group"
              >
                {/* Check Icon Marker */}
                <div className="absolute top-4 right-4 text-emerald-500">
                  <CheckCircle2 className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="flex gap-4 items-start">
                  {/* Icon Panel */}
                  <div className="p-3 rounded-xl bg-white shadow-sm text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <LucideIcon name={tip.iconName} className="w-5 h-5" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1.5 pr-4">
                    <h3 className="font-display font-bold text-slate-800 text-base sm:text-lg group-hover:text-emerald-700 transition-colors duration-300">
                      {tip.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sustainable quote footer box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-600/90 to-teal-600/90 text-white shadow-lg text-center relative overflow-hidden"
          id="tips-quote-banner"
        >
          {/* Subtle eco design watermark in background */}
          <div className="absolute -right-10 -bottom-10 opacity-10 text-white transform rotate-12 scale-150">
            <LucideIcon name="Trees" className="w-52 h-52" />
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="italic text-base sm:text-lg leading-relaxed font-light">
              "A cada tonelada de papel de escritório que deixamos de imprimir ou gastar, salvamos cerca de 20 árvores adultas e evitamos o desperdício de mais de 26 mil litros de água pura."
            </p>
            <div className="text-xs uppercase tracking-wider font-mono opacity-80 font-semibold">
              — Estatística Global de Preservação Ambiental
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
