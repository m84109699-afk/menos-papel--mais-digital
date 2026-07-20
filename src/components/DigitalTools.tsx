import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { digitalTools } from '../data';
import LucideIcon from './LucideIcon';
import { AppWindow, CheckCircle } from 'lucide-react';

type FilterCategory = 'all' | 'storage' | 'document' | 'scanner';

export default function DigitalTools() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredTools = digitalTools.filter((tool) => {
    if (activeFilter === 'all') return true;
    return tool.category === activeFilter;
  });

  const categories = [
    { id: 'all', label: 'Todas as Plataformas' },
    { id: 'storage', label: 'Armazenamento Nuvem' },
    { id: 'document', label: 'Editores Online' },
    { id: 'scanner', label: 'Scanners Mobile' },
  ];

  return (
    <section id="ferramentas" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <AppWindow className="w-3.5 h-3.5" />
            Ecossistema Digital
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 tracking-tight">
            Ferramentas para sua Digitalização
          </h2>
          
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Conheça as principais plataformas do mercado que facilitam a criação, o armazenamento, a edição e o compartilhamento de arquivos sem necessidade de impressão.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="tools-filters">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id as FilterCategory)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/70 border border-slate-200/50'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full shadow-md -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Card Grid with animation */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          id="tools-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={tool.id}
                className="group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md border border-slate-200/50">
                      {tool.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors duration-300">
                      <LucideIcon name={tool.iconName} className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Main Details */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-slate-800 text-xl group-hover:text-emerald-700 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>

                {/* Main Feature Highlight */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div className="space-y-0.5">
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block">
                        Destaque Principal
                      </span>
                      <p className="text-xs text-slate-600 font-medium">
                        {tool.mainFeature}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
