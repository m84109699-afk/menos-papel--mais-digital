import { motion } from 'motion/react';
import { whyReduceItems } from '../data';
import LucideIcon from './LucideIcon';
import { HelpCircle } from 'lucide-react';

export default function WhyReduce() {
  return (
    <section id="por-que-reduzir" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-70" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-800 text-xs font-semibold uppercase tracking-wider"
            id="why-reduce-badge"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Por que mudar?
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-slate-800 tracking-tight"
            id="why-reduce-title"
          >
            Por que reduzir o uso de papel?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-base sm:text-lg leading-relaxed"
            id="why-reduce-subtitle"
          >
            A transição para fluxos de trabalho digitais gera impactos benéficos imediatos tanto para o seu orçamento quanto para a saúde ecológica do planeta.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-reduce-grid">
          {whyReduceItems.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group bg-white rounded-3xl p-8 border border-slate-200/60 shadow-xs hover:shadow-xl hover:border-emerald-500/20 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Icon Area */}
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-white group-hover:rotate-3 shadow-sm group-hover:shadow-md">
                    <LucideIcon name={item.iconName} className="w-7 h-7" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-slate-800 text-lg sm:text-xl group-hover:text-emerald-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Accent decorative bottom line */}
                <div className="w-12 h-1 bg-slate-100 rounded-full mt-6 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
