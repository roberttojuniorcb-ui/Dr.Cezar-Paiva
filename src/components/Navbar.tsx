import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Facebook, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Implantes', href: '#implantes' },
    { label: 'Sobre Dr. Cezar', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      setIsOpen(false);
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-350 ${
        isScrolled
          ? 'bg-[#020617]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#inicio"
            onClick={(e) => handleScrollTo(e, '#inicio')}
            className="flex items-center gap-3 select-none text-left"
            id="brand-logo-link"
          >
            <img
              src="/src/assets/images/regenerated_image_1782739579073.jpg"
              alt="Logo Dr. Cezar Paiva"
              className="w-10 h-10 rounded-lg object-cover border border-white/15"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-serif font-bold tracking-tight text-sky-400 leading-tight">
                DR. CEZAR PAIVA
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] font-medium text-slate-400 leading-none mt-0.5">
                Especialista em Implantes & Reabilitação
              </span>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-[11px] font-bold uppercase tracking-widest text-slate-300 hover:text-sky-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social icons + CTA button */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href="https://www.instagram.com/drcezarpaiva/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              title="Acesse nosso Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/CezarPaivaOrtodontia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              title="Acesse nosso Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <span className="h-5 w-px bg-white/20"></span>
            <a
              href="#agendamento"
              onClick={(e) => handleScrollTo(e, '#agendamento')}
              id="nav-btn-schedule"
              className="inline-flex items-center justify-center px-4 py-2 text-[11px] font-bold text-slate-950 bg-sky-400 rounded-full hover:bg-sky-300 active:bg-sky-500 shadow-md shadow-sky-400/10 uppercase tracking-widest transition-all duration-200"
            >
              <Calendar className="w-4 h-4 mr-2 text-slate-950" />
              Agendar Avaliação
            </a>
          </div>

          {/* Mobile navigation toggle */}
          <div className="flex items-center md:hidden space-x-2">
            <a
              href="#agendamento"
              onClick={(e) => handleScrollTo(e, '#agendamento')}
              className="p-2 text-sky-400 hover:bg-white/5 rounded-full"
              title="Agendar agora"
            >
              <Calendar className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2 text-slate-300 hover:text-sky-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b1329] border-t border-white/10"
            id="mobile-nav-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 text-left">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:text-sky-400 hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <div className="flex items-center justify-around py-3">
                <a
                  href="https://www.instagram.com/drcezarpaiva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-300 hover:text-sky-400 gap-2"
                >
                  <Instagram className="w-5 h-5 text-pink-500" />
                  <span className="text-xs font-medium">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/CezarPaivaOrtodontia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-300 hover:text-sky-400 gap-2"
                >
                  <Facebook className="w-5 h-5 text-sky-500" />
                  <span className="text-xs font-medium">Facebook</span>
                </a>
              </div>
              <a
                href="#agendamento"
                onClick={(e) => handleScrollTo(e, '#agendamento')}
                id="mobile-nav-btn-schedule"
                className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-bold text-slate-950 bg-sky-400 rounded-xl hover:bg-sky-300 transition-colors shadow-lg uppercase tracking-widest"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
