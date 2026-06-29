import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, ExternalLink, Calendar } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="localizacao" className="bg-[#020617] text-slate-300 pt-20 pb-8 border-t border-white/10 text-left relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Info and Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-white tracking-tight">
                DR. CEZAR PAIVA
              </h3>
              <p className="text-[10px] tracking-widest uppercase font-bold text-sky-400">
                Implantes Dentários & Ortodontia
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Sua clínica de confiança para reabilitação oral avançada em Capitão Poço, Pará. Oferecemos segurança técnica e carinho no atendimento para transformar sua vida através de um novo sorriso.
            </p>

            {/* Contact Details Stack */}
            <div className="space-y-4 pt-2 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif font-bold text-white">Endereço da Clínica</p>
                  <p className="text-slate-400 leading-relaxed">Tv. Abdias Pereira, 977, Capitão Poço, PA, Brasil - CEP 68650-000</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif font-bold text-white">Fale Conosco</p>
                  <p className="text-slate-400">WhatsApp: +55 (91) 98477-8484</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif font-bold text-white">E-mail</p>
                  <a href="mailto:cezarortho@gmail.com" className="text-slate-400 hover:text-sky-400 transition-colors">
                    cezarortho@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif font-bold text-white">Horário de Funcionamento</p>
                  <p className="text-slate-400">Segunda a Sexta: 08:00h às 18:00h</p>
                  <p className="text-slate-400">Sábado: 08:00h às 12:00h</p>
                </div>
              </div>
            </div>

            {/* Social Icons inside Footer */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://www.instagram.com/drcezarpaiva/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 border border-white/5 text-slate-400 hover:text-white rounded-lg transition-colors"
                title="Acompanhe Dr. Cezar Paiva no Instagram"
              >
                <Instagram className="w-5 h-5 text-pink-500" />
              </a>
              <a
                href="https://www.facebook.com/CezarPaivaOrtodontia/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 border border-white/5 text-slate-400 hover:text-white rounded-lg transition-colors"
                title="Acompanhe Dr. Cezar Paiva no Facebook"
              >
                <Facebook className="w-5 h-5 text-sky-400" />
              </a>
            </div>
          </div>

          {/* Column 2: Maps Location & Iframe (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-serif font-bold text-white text-base">Localização no Mapa</h4>
                <p className="text-xs text-slate-400">Encontre a clínica facilmente no centro de Capitão Poço - PA</p>
              </div>
              
              {/* Maps External Link requested explicitly by the user */}
              <a
                href="https://maps.app.goo.gl/a7G3aPdZDGibN3tQ6"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-maps-link"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold uppercase tracking-widest text-[10px] rounded-xl shadow-lg shadow-sky-400/10 transition-all duration-200 cursor-pointer"
              >
                Abrir no Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Google Map Embedded Iframe */}
            <div className="relative w-full h-64 bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15951.352606553857!2d-47.06734135541992!3d-1.7483789999999827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c2da28fcf52271%3A0x868b44613ff15bdf!2sCapit%C3%A3o%20Po%C3%A7o%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Clínica do Dr. Cezar Paiva em Capitão Poço, Pará"
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Footer Bottom Credentials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Dr. Cezar Paiva. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#inicio" onClick={handleScrollToTop} className="hover:text-sky-400 transition-colors font-medium">Voltar ao topo</a>
            <span className="text-slate-800">|</span>
            <a href="#agendamento" className="hover:text-sky-400 transition-colors font-medium">Marcar Avaliação</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
