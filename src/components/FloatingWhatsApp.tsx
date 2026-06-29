import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function FloatingWhatsApp({
  phoneNumber = '5591984778484', // Standard DDD 91 (Pará, Capitão Poço) placeholder/doctor number
  defaultMessage = 'Olá Dr. Cezar Paiva, acessei seu site e gostaria de agendar uma avaliação para implante dentário!',
}: FloatingWhatsAppProps) {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="pointer-events-auto"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="btn-whatsapp-floating"
          className="group relative flex items-center justify-center w-16 h-16 bg-emerald-500 text-white rounded-full shadow-2xl transition-all hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-300 animate-pulse-gentle"
          title="Falar no WhatsApp"
        >
          {/* Tooltip */}
          <span className="absolute right-20 bg-slate-950 text-white text-xs font-semibold px-3.5 py-2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-2xl border border-white/10">
            Fale conosco no WhatsApp 👋
          </span>

          {/* Icon */}
          <MessageSquare className="w-8 h-8 transition-transform group-hover:scale-110" />
          
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white font-bold items-center justify-center">1</span>
          </span>
        </a>
      </motion.div>
    </div>
  );
}
