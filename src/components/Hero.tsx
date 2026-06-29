import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageSquare, ShieldCheck, MapPin, Award } from 'lucide-react';

const clinicHeroImg = 'https://instagram.fqps3-1.fna.fbcdn.net/v/t51.82787-15/707963998_18440713027185380_7863855938362391693_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzkwNTg3NTE0MzQ0NjI1NzgyOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMjQ1OS5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=zAQXvW4WK6sQ7kNvwE0NxFj&_nc_oc=AdqcPt6u9fT_7zQVZl9R5wfBKcbNz1gB4WtyeKtMy2oouQOd7sURx7WXYbTy6krHW3k&_nc_zt=23&_nc_ht=instagram.fqps3-1.fna&_nc_gid=NYv0bRBmzK6typ7x9usN7w&_nc_ss=7b689&oh=00_Af_779ZPiqSIB4yDXXyejdcdIjXvezl5EZe1Fys85lIskg&oe=6A484765';

export default function Hero() {
  const handleScrollToSchedule = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#agendamento');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=5591984778484&text=${encodeURIComponent(
    'Olá Dr. Cezar Paiva! Gostaria de agendar uma consulta de avaliação para implantes dentários.'
  )}`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 flex items-center bg-[#020617] text-slate-100 overflow-hidden"
    >
      {/* Abstract dark blue background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-800/30 rounded-full blur-2xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/60 border border-white/10 rounded-full"
            >
              <Award className="w-4 h-4 text-sky-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">
                Especialista em Implantes Dentários
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1]"
                id="hero-main-title"
              >
                Recupere a <span className="text-sky-400 italic">confiança</span> do seu melhor sorriso.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed font-normal"
              >
                Tecnologia avançada em implantes dentários no coração de <strong>Capitão Poço, Pará</strong>. Atendimento humanizado, materiais importados e resultados de alta performance.
              </motion.p>
            </div>

            {/* Info Badges (Location & Security) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-slate-300 text-xs sm:text-sm py-3 border-y border-white/10"
            >
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
                <span>Atendimento presencial em <strong>Capitão Poço - PA</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
                <span>Planejamento Digital e Precisão Cirúrgica</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              {/* WhatsApp direct CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-emerald-500 rounded-xl hover:bg-emerald-600 active:bg-emerald-700 shadow-lg shadow-emerald-500/20 transition-all duration-200 group gap-2"
              >
                <MessageSquare className="w-4 h-4 transition-transform group-hover:scale-110" />
                Agendar via WhatsApp
              </a>

              {/* Online Form trigger */}
              <button
                onClick={handleScrollToSchedule}
                id="hero-cta-form"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-slate-950 bg-sky-400 rounded-xl hover:bg-sky-300 active:bg-sky-500 shadow-lg shadow-sky-400/20 transition-all duration-200 gap-2"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                Agendar Consulta Online
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-4 max-w-md text-left"
            >
              <div>
                <p className="text-3xl sm:text-4xl font-light text-sky-300 font-sans">+15 anos</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Experiência Clínica</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-light text-sky-300 font-sans">2k+</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Sorrisos Renovados</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-light text-sky-300 font-sans">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Material Certificado</p>
              </div>
            </motion.div>

          </div>

          {/* Right Image/Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-5 relative"
            id="hero-visual-container"
          >
            {/* Decorative background backdrop with sky glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-teal-500/20 rounded-3xl rotate-3 scale-95 opacity-50 -z-10 blur-xl" />
            
            {/* Custom collage frame with glass border */}
            <div className="relative bg-slate-900/40 backdrop-blur-md p-3 rounded-3xl shadow-2xl overflow-hidden border border-white/10 flex justify-center">
              <img
                src={clinicHeroImg}
                alt="Clínica Dr. Cezar Paiva"
                className="w-full max-w-[534px] h-[400px] md:h-[600px] object-cover rounded-2xl contrast-[1.03] brightness-[1.01] saturate-[1.02]"
                style={{ imageRendering: 'auto' }}
                referrerPolicy="no-referrer"
              />
              

            </div>

            {/* Experience badge overlay */}
            <div className="absolute -top-4 -right-4 bg-sky-500 text-slate-950 px-5 py-3 rounded-2xl shadow-2xl hidden sm:flex flex-col items-center justify-center border border-sky-400 animate-float">
              <span className="text-lg font-serif font-black tracking-tight text-slate-950">Dr. Cezar Paiva</span>
              <span className="text-[9px] uppercase tracking-widest font-bold text-slate-900">Implantes</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
