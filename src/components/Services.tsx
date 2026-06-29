import React from 'react';
import { motion } from 'motion/react';
import { Smile, Zap, Activity, Layers, ArrowRight, ShieldCheck, ClipboardCheck } from 'lucide-react';

export default function Services() {
  const treatments = [
    {
      id: 'implant-unitario',
      icon: <Smile className="w-8 h-8 text-sky-400" />,
      title: 'Implante Unitário',
      description: 'Ideal para a substituição de dentes individuais perdidos. O dente é fixado de forma independente sem comprometer a saúde dos dentes vizinhos.',
      features: ['Aspecto natural e idêntico', 'Estabilidade para mastigar', 'Evita movimentação de outros dentes'],
    },
    {
      id: 'carga-imediata',
      icon: <Zap className="w-8 h-8 text-sky-400" />,
      title: 'Implante com Carga Rápida',
      description: 'Permite a fixação de uma prótese provisória logo após a instalação do implante, restaurando a estética e função no mesmo dia ou em poucos dias.',
      features: ['Estética recuperada rapidamente', 'Menor tempo de tratamento', 'Sujeito a avaliação óssea prévia'],
    },
    {
      id: 'protocolo-completo',
      icon: <Layers className="w-8 h-8 text-sky-400" />,
      title: 'Prótese Protocolo (Reabilitação Total)',
      description: 'Indicado para quem perdeu todos ou a maioria dos dentes. Fixa uma arcada inteira em apenas 4 a 6 implantes, eliminando o uso de dentaduras.',
      features: ['100% fixa e segura', 'Recuperação total da força de mastigação', 'Não machuca e não escorrega'],
    },
    {
      id: 'enxerto-osseo',
      icon: <Activity className="w-8 h-8 text-sky-400" />,
      title: 'Enxerto Ósseo Dentário',
      description: 'Procedimento preparatório e avançado para restaurar a espessura ou altura do osso maxilar, garantindo uma base sólida para receber o implante.',
      features: ['Torna o implante viável', 'Técnicas modernas pouco invasivas', 'Uso de biomateriais de excelência'],
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Consulta & Diagnóstico',
      desc: 'Análise detalhada do seu sorriso, histórico de saúde bucal e solicitação de exames de imagem em Capitão Poço.',
    },
    {
      num: '02',
      title: 'Planejamento Digital',
      desc: 'Usamos tecnologia digital para simular e guiar a exata posição dos implantes, garantindo total precisão.',
    },
    {
      num: '03',
      title: 'Instalação Prática',
      desc: 'Procedimento seguro e livre de dor por meio de anestesia de alta eficácia e técnicas minimamente invasivas.',
    },
    {
      num: '04',
      title: 'Novo Sorriso',
      desc: 'Fixação da coroa estética personalizada, perfeitamente integrada aos seus dentes naturais. Sorriso renovado!',
    },
  ];

  return (
    <section id="implantes" className="py-24 bg-[#020617] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
        >
          <span className="text-sky-400 font-bold tracking-widest text-xs uppercase bg-sky-400/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full">
            Especialidades & Tecnologia
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Tratamentos de Implante de Alta Performance
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Trabalhamos com os melhores materiais do mercado de reabilitação bucal para entregar longevidade, segurança e dentes que parecem 100% naturais.
          </p>
        </motion.div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {treatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-sky-500/30 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between text-left group shadow-lg"
              id={`treatment-card-${treatment.id}`}
            >
              <div className="space-y-5">
                <div className="p-4 bg-sky-500/10 text-sky-400 rounded-2xl w-fit group-hover:bg-sky-400 group-hover:text-slate-950 transition-colors duration-300">
                  {treatment.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {treatment.description}
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {treatment.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Step-by-Step Journey Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-left border border-white/10"
        >
          
          {/* Background effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <ClipboardCheck className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-semibold text-sky-300">Jornada Simples</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
                Como funciona o seu tratamento?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Desenvolvemos um fluxo de trabalho humanizado e planejado digitalmente para que você saiba exatamente o que esperar de cada fase do seu novo sorriso.
              </p>
              
              <a
                href="#agendamento"
                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold text-sm transition-colors group"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#agendamento')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Quero iniciar meu planejamento
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Steps line */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="space-y-3 relative group text-left">
                  <div className="text-4xl font-black text-sky-500/10 group-hover:text-sky-400/40 transition-colors duration-300">
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
