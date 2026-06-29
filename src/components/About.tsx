import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Award, Heart, CheckCircle2, ChevronRight } from 'lucide-react';

const doctorPortraitImg = '/src/assets/images/regenerated_image_1782735143726.jpg';

export default function About() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/drcezarpaiva/',
      icon: <Instagram className="w-5 h-5 text-pink-500" />,
      tag: '@drcezarpaiva',
      description: 'Acompanhe as postagens de casos clínicos reais, dicas de saúde bucal e bastidores do consultório diretamente nos stories.',
      cta: 'Ver no Instagram',
      color: 'hover:border-pink-500/40'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/CezarPaivaOrtodontia/',
      icon: <Facebook className="w-5 h-5 text-sky-500" />,
      tag: 'Cezar Paiva Ortodontia',
      description: 'Fique por dentro das novidades da clínica, comunicados importantes e artigos explicativos sobre ortodontia e implantes.',
      cta: 'Ver no Facebook',
      color: 'hover:border-sky-500/40'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-[#020617] border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative animate-float"
            id="doctor-portrait-container"
          >
            {/* Elegant framing design with dark glowing borders */}
            <div className="absolute top-4 left-4 inset-0 bg-sky-500/5 rounded-3xl -z-10 border border-white/10" />
            <div className="relative bg-slate-900/50 p-3 rounded-3xl shadow-2xl border border-white/5">
              <img
                src={doctorPortraitImg}
                alt="Dr. Cezar Paiva"
                className="w-full h-[500px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Column: Bio Details */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-sky-400 font-bold tracking-widest text-xs uppercase bg-sky-400/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full">
                Quem é o Especialista?
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Dr. Cezar Paiva
              </h2>
              <h3 className="text-base sm:text-lg font-serif font-medium text-sky-400">
                Seu sorriso confiado a quem entende de reabilitação bucal avançada
              </h3>
            </div>

            <div className="space-y-4 text-slate-400 leading-relaxed text-sm sm:text-base">
              <p>
                Com dedicação exemplar e anos de prática cirúrgica focada em implantes e reabilitação oral, o <strong>Dr. Cezar Paiva</strong> é amplamente reconhecido em Capitão Poço e região pela precisão técnica, excelência científica e atendimento profundamente humanizado.
              </p>
              <p>
                Acreditamos que realizar um implante dentário vai muito além de colocar um elemento fixo; trata-se de resgatar a dignidade, a autoestima, o prazer de saborear as suas refeições sem receio e o orgulho incontido de sorrir.
              </p>
            </div>

            {/* Visual Value props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="p-2 bg-sky-400/10 text-sky-400 rounded-xl shrink-0 h-fit border border-sky-400/20">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Especialização Cirúrgica</h4>
                  <p className="text-xs text-slate-400">Formação avançada de alta gama e atualização cirúrgica contínua.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-sky-400/10 text-sky-400 rounded-xl shrink-0 h-fit border border-sky-400/20">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Cuidado de Alto Nível</h4>
                  <p className="text-xs text-slate-400">Técnicas anestésicas sofisticadas focadas em bem-estar e zero dor.</p>
                </div>
              </div>
            </div>

            {/* Core Values checklist */}
            <div className="space-y-2.5 pt-6 border-t border-white/10">
              <h4 className="font-bold text-white text-sm">Nosso compromisso inegociável:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Planejamento digital individualizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Melhores biomateriais certificados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Facilidade de agendamento online</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Acompanhamento pós-operatório dedicado</span>
                </div>
              </div>
            </div>

            {/* Social Media Section as requested */}
            <div className="pt-6 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider text-slate-400">
                Siga nossas redes sociais oficiais para ver casos e novidades:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-5 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-white/5 shadow-lg transition-all duration-300 flex flex-col justify-between text-left ${social.color}`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="p-1.5 bg-slate-950 rounded-lg border border-white/10">{social.icon}</span>
                          <span className="font-bold text-white text-sm">{social.name}</span>
                        </div>
                        <span className="text-[10px] bg-sky-400/10 text-sky-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Oficial</span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-500">{social.tag}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {social.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 group pt-3 mt-3 border-t border-white/5">
                      <span>{social.cta}</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-sky-400" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
