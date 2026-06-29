import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      category: 'Procedimento',
      question: 'O procedimento para colocação de implante dentário dói?',
      answer: 'Não! O procedimento é realizado sob anestesia local de alta eficácia, o que anula qualquer dor durante a cirurgia. Para o pós-operatório, Dr. Cezar Paiva prescreve uma combinação de analgésicos e anti-inflamatórios que tornam a recuperação extremamente tranquila e confortável para a grande maioria dos pacientes.'
    },
    {
      category: 'Tempo',
      question: 'Quanto tempo demora todo o tratamento de implante?',
      answer: 'O tempo total varia de acordo com as condições ósseas de cada paciente. Em média, o período de osseointegração (tempo para o osso fixar ao implante) leva de 3 a 6 meses. No entanto, em casos específicos pré-avaliados, é possível realizar a técnica de "Carga Rápida", onde dentes provisórios altamente estéticos são fixados no mesmo dia ou em até 72 horas.'
    },
    {
      category: 'Osso',
      question: 'Tenho pouco osso na mandíbula. Ainda posso fazer implantes?',
      answer: 'Sim, na maioria das vezes é perfeitamente viável! O Dr. Cezar Paiva é especialista em técnicas avançadas de enxerto ósseo. Realizamos o preenchimento de osso na região para criar a espessura e altura ideais necessárias para fixar o implante com 100% de estabilidade.'
    },
    {
      category: 'Durabilidade',
      question: 'Quanto tempo dura um implante dentário no dente?',
      answer: 'Os implantes são projetados para ser uma solução permanente. Com boa higiene bucal diária (escovação e fio dental) e visitas regulares ao dentista a cada 6 meses, os implantes de alta qualidade que utilizamos podem durar a vida inteira.'
    },
    {
      category: 'Agendamento',
      question: 'Como funciona a primeira consulta de avaliação?',
      answer: 'Na primeira consulta, o Dr. Cezar fará um exame clínico completo da sua saúde bucal. Se você tiver exames radiológicos recentes, pode trazê-los. Caso contrário, solicitaremos uma tomografia ou panorâmica para realizar o planejamento digital tridimensional perfeito do seu caso.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#020617] border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sky-400 font-bold tracking-widest text-xs uppercase bg-sky-400/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Perguntas sobre Implantes Dentários
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Encontre respostas diretas para as principais dúvidas dos pacientes antes de iniciar o seu tratamento de reabilitação.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4 text-left">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/40 border border-white/5 rounded-2xl shadow-md overflow-hidden transition-all duration-200 hover:border-sky-500/20"
              >
                {/* Header/Button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none gap-4"
                  id={`faq-btn-${idx}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="p-1.5 bg-sky-400/10 text-sky-400 rounded-lg shrink-0 mt-0.5 border border-sky-400/20">
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span className="font-serif font-bold text-white text-sm sm:text-base">
                      {item.question}
                    </span>
                  </div>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-sky-400" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {/* Answer body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pl-14">
                        <p className="mb-2 font-bold text-[10px] text-sky-400 uppercase tracking-widest">{item.category}</p>
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside FAQ */}
        <div className="mt-12 text-center p-8 bg-slate-900/40 border border-white/5 rounded-3xl shadow-2xl space-y-4 max-w-xl mx-auto">
          <h4 className="font-serif font-bold text-white text-sm sm:text-base">Tem outra dúvida ou quer falar diretamente conosco?</h4>
          <p className="text-xs text-slate-400">Estamos prontos para atender você e explicar tudo com calma e paciência.</p>
          <a
            href="https://api.whatsapp.com/send?phone=5591984778484&text=Ol%C3%A1%20Dr.%20Cezar%20Paiva!%20Fiquei%20com%20algumas%20d%C3%BAvidas%20sobre%20o%20implante%20dent%C3%A1rio%20e%20gostaria%20de%20esclarecer."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-emerald-600 transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
          >
            Falar com Atendimento
          </a>
        </div>

      </div>
    </section>
  );
}
