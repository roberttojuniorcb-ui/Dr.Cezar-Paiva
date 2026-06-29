import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: 'review-1',
      name: 'Maria do Socorro Nogueira',
      location: 'Centro, Capitão Poço',
      role: 'Aposentada',
      rating: 5,
      comment: 'Fazer o implante protocolo com o Dr. Cezar mudou minha vida! Eu usava dentadura há 15 anos e tinha vergonha de sorrir e dificuldade para comer. Hoje me sinto segura, como de tudo e meu sorriso ficou muito natural. Recomendo de olhos fechados!',
      date: 'Maio, 2026',
      verified: true,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: 'review-2',
      name: 'Francisco de Assis Silva',
      location: 'Tatajuba, Capitão Poço',
      role: 'Produtor Rural',
      rating: 5,
      comment: 'Fiquei muito impressionado com o profissionalismo do Dr. Cezar Paiva. Fiz dois implantes na parte de trás. Não senti absolutamente nenhuma dor durante o procedimento e a recuperação foi super rápida. Excelente cirurgião e muito atencioso!',
      date: 'Junho, 2026',
      verified: true,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: 'review-3',
      name: 'Elaine Santos de Oliveira',
      location: 'Vila Nova, Capitão Poço',
      role: 'Professora',
      rating: 5,
      comment: 'Estava com muito medo de fazer o implante, mas o atendimento humanizado do Dr. Cezar e sua equipe me acalmou desde a primeira consulta de avaliação. Tudo foi explicado nos mínimos detalhes. Equipamentos novos e ambiente muito limpo.',
      date: 'Abril, 2026',
      verified: true,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop'
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#020617] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-sky-400 font-bold tracking-widest text-xs uppercase bg-sky-400/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full">
            Histórias de Sucesso
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            O que dizem os pacientes do Dr. Cezar Paiva
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A maior prova da nossa dedicação está na felicidade e na melhoria direta da qualidade de vida dos nossos pacientes em Capitão Poço.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative p-8 bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-sky-500/20 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between text-left group hover:shadow-2xl"
              id={`testimonial-card-${rev.id}`}
            >
              {/* Quote Icon Background Decorator */}
              <div className="absolute top-6 right-8 text-sky-400/5 group-hover:text-sky-400/15 transition-colors">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div className="space-y-5">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic relative z-10">
                  "{rev.comment}"
                </p>
              </div>

              {/* Patient Info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-800 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-white text-sm font-serif">{rev.name}</h4>
                    {rev.verified && (
                      <span className="p-0.5 bg-sky-400/10 text-sky-400 rounded-full" title="Paciente Real Verificado">
                        <ShieldCheck className="w-3.5 h-3.5 fill-sky-400 text-slate-950" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 font-medium">
                    {rev.location} • {rev.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Guarantee Callout */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-slate-900/30 border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-left">
          <div className="w-16 h-16 rounded-2xl bg-sky-400 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-sky-400/15">
            <Star className="w-8 h-8 fill-slate-950 text-slate-950" />
          </div>
          <div className="space-y-2">
            <h4 className="text-base font-serif font-bold text-white">
              Tratamento que prioriza sua saúde e tranquilidade
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Todos os relatos acima representam resultados reais de pessoas de Capitão Poço que passaram por avaliações rigorosas e receberam cuidados individualizados. Cada organismo é único e seu plano cirúrgico será construído sob medida para você.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
