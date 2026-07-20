import { motion } from 'motion/react';
import { howToStartSteps } from '../data';
import LucideIcon from './LucideIcon';
import { HelpCircle } from 'lucide-react';

export default function HowToStart() {
  return (
    <section id="como-comecar" className="py-20 md:py-28 bg-slate-50 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Guia de Transição
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 tracking-tight">
            Como Começar?
          </h2>
          
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Adotar um estilo de vida ou uma cultura empresarial livre de papéis é um processo gradual e simples. Siga este roteiro prático passo a passo.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative" id="timeline-container">
          
          {/* Centered connector line for desktop */}
          <div className="absolute left-[31px] lg:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500/20 via-teal-500/40 to-slate-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {howToStartSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.stepNumber}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } relative`}
                >
                  {/* Timeline Node Badge - centered on desktop, aligned left on mobile */}
                  <div className="absolute left-0 md:left-1/2 top-0 -translate-x-0 md:-translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center font-display font-bold text-lg shadow-lg border-4 border-slate-50">
                      0{step.stepNumber}
                    </div>
                  </div>

                  {/* Content Card Panel */}
                  <div className="w-full md:w-[calc(50%-40px)] pl-20 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6 }}
                      className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-xs hover:shadow-md transition-shadow relative"
                    >
                      {/* Step Icon & Title Area */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                          <LucideIcon name={step.iconName} className="w-6 h-6" />
                        </div>
                        <h3 className="font-display font-bold text-slate-800 text-xl">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description Text */}
                      <p className="text-slate-500 text-sm sm:text-base leading-relaxed pl-1">
                        {step.description}
                      </p>

                      {/* Small arrow pointer (Desktop only) */}
                      <div
                        className={`absolute top-6 w-3 h-3 bg-white border-t border-r border-slate-200/50 rotate-45 hidden md:block ${
                          isEven ? 'left-full -translate-x-1.5' : 'right-full translate-x-1.5 rotate-225'
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block w-[calc(50%-40px)]" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
