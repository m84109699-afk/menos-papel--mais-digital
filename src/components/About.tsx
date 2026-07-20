import { motion } from 'motion/react';
import { Sprout, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Sprout className="w-6 h-6 text-emerald-600" />,
      title: 'Preservação de Recursos',
      description: 'Diminua instantaneamente a demanda por árvores, água potável e energia que seriam gastas na fabricação e branqueamento do papel comercial.',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: <Zap className="w-6 h-6 text-teal-600" />,
      title: 'Otimização de Processos',
      description: 'Chega de carimbos, assinaturas físicas e esperas de correio. Resolva processos inteiros em minutos de forma 100% digital e direta.',
      bg: 'bg-teal-500/10 border-teal-500/20',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: 'Segurança & Organização',
      description: 'Arquivos protegidos por senhas, criptografia e redundância de servidores. Recupere e consulte qualquer dado sensível com segurança absoluta.',
      bg: 'bg-blue-500/10 border-blue-500/20',
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-white overflow-hidden relative">
      {/* Visual Accent Lights */}
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text/Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              O Futuro é sem papel
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-800 tracking-tight leading-tight">
              O Conceito da <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Desmaterialização</span>
            </h2>

            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Digitalizar não significa apenas converter papel em arquivos em formato PDF; trata-se de reinventar a maneira como lidamos com a informação e com o planeta. A desmaterialização é um movimento essencial que integra modernidade tecnológica e conservação ecológica.
            </p>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                No dia a dia, tanto pessoas quanto empresas consomem quantidades astronômicas de papel sem necessidade. Formulários de inscrição, relatórios mensais, faturas comerciais e contratos de serviço podem ser inteiramente assinados, arquivados e acessados através de computadores e smartphones.
              </p>
              <p className="font-medium text-emerald-700">
                Ao escolher o digital, você reduz o desperdício, otimiza horas de trabalho e protege florestas inteiras com simples cliques de distância.
              </p>
            </div>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-6 space-y-6" id="about-cards-container">
            <div className="grid sm:grid-cols-1 gap-6">
              {cards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl border ${card.bg} flex gap-4 items-start hover:scale-[1.02] transition-all duration-300 shadow-sm`}
                >
                  <div className="p-3 rounded-xl bg-white shadow-sm flex-shrink-0">
                    {card.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-semibold text-slate-800 text-lg">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
