import { motion } from 'motion/react';
import { benefitStats } from '../data';
import LucideIcon from './LucideIcon';
import { Percent } from 'lucide-react';

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <Percent className="w-3.5 h-3.5" />
            Impacto Real
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 tracking-tight">
            Benefícios da Transformação Digital
          </h2>
          
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            A desmaterialização e a cultura "menos papel" geram melhorias quantificáveis imediatas em todos os aspectos operacionais e ecológicos.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="benefits-stats-grid">
          {benefitStats.map((stat, idx) => {
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-xs hover:shadow-xl hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Card Header (Icon and Stat Label Badge) */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-600 flex items-center justify-center transition-colors duration-300">
                      <LucideIcon name={stat.iconName} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-slate-100 text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-700 px-2.5 py-1 rounded-md transition-colors duration-300">
                      {stat.label}
                    </span>
                  </div>

                  {/* Giant Value Display */}
                  <div className="space-y-1">
                    <div className="font-display font-black text-4xl sm:text-5xl text-slate-800 bg-gradient-to-r from-slate-800 to-slate-700 group-hover:from-emerald-600 group-hover:to-teal-600 bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {stat.value}
                    </div>
                    <h3 className="font-display font-bold text-slate-800 text-lg">
                      {stat.title}
                    </h3>
                  </div>

                  {/* Brief description */}
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Progress-like decorative bar */}
                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-6 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
