import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, User, MessageSquare, Clock, CheckCircle2, Trash2, Shield } from 'lucide-react';
import { Appointment } from '../types';

export default function AppointmentForm() {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [date, setDate] = useState('');
  const [shift, setShift] = useState<'manhã' | 'tarde' | 'noite'>('manhã');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastAppointment, setLastAppointment] = useState<Appointment | null>(null);
  const [savedAppointments, setSavedAppointments] = useState<Appointment[]>([]);

  // Load appointments on component mount
  useEffect(() => {
    const loaded = localStorage.getItem('dr_cezar_appointments');
    if (loaded) {
      try {
        setSavedAppointments(JSON.parse(loaded));
      } catch (err) {
        console.error('Error parsing local appointments', err);
      }
    }
  }, []);

  // Set minimum date to tomorrow
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp || !date) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      const newAppointment: Appointment = {
        id: Math.random().toString(36).substring(2, 9).toUpperCase(),
        name,
        whatsapp,
        date,
        shift,
        notes,
        status: 'pendente',
        createdAt: new Date().toLocaleString('pt-BR'),
      };

      const updated = [newAppointment, ...savedAppointments];
      localStorage.setItem('dr_cezar_appointments', JSON.stringify(updated));
      setSavedAppointments(updated);
      setLastAppointment(newAppointment);
      setIsSubmitting(false);
      setShowSuccess(true);

      // Reset form fields
      setName('');
      setWhatsapp('');
      setDate('');
      setShift('manhã');
      setNotes('');
    }, 1000);
  };

  const handleDelete = (id: string) => {
    const updated = savedAppointments.filter((app) => app.id !== id);
    localStorage.setItem('dr_cezar_appointments', JSON.stringify(updated));
    setSavedAppointments(updated);
  };

  const formatWhatsAppLink = (app: Appointment) => {
    const message = `Olá Dr. Cezar Paiva! Realizei um agendamento online pelo site e gostaria de confirmar:
- *Código:* #${app.id}
- *Paciente:* ${app.name}
- *Data sugerida:* ${new Date(app.date).toLocaleDateString('pt-BR')}
- *Período:* ${app.shift.toUpperCase()}
${app.notes ? `- *Observação:* ${app.notes}` : ''}`;

    return `https://api.whatsapp.com/send?phone=5591984778484&text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="agendamento" className="py-24 bg-gradient-to-b from-[#020617] to-[#091124] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sky-400 font-bold tracking-widest text-xs uppercase bg-sky-400/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full">
            Pré-Agendamento Rápido
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Agende Sua Avaliação de Implantes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Preencha os campos abaixo com os seus dados de contato. Nossa equipe entrará em contato o mais breve possível para confirmar o dia e o melhor horário para você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Booking Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-white/5 shadow-2xl text-left">
            <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2.5 border-b border-white/5 pb-4">
              <Calendar className="w-5 h-5 text-sky-400" />
              Preencha Seus Dados
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="name-input" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Seu Nome Completo *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-slate-500">
                    <User className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    id="name-input"
                    required
                    placeholder="Ex: João da Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-slate-900/90 text-white text-sm transition-all placeholder-slate-600"
                  />
                </div>
              </div>

              {/* Whatsapp / Phone Field */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="whatsapp-input" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Seu WhatsApp / Telefone *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-slate-500">
                    <Phone className="w-5 h-5" />
                  </span>
                  <input
                    type="tel"
                    id="whatsapp-input"
                    required
                    placeholder="Ex: (91) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-slate-900/90 text-white text-sm transition-all placeholder-slate-600"
                  />
                </div>
              </div>

              {/* Date & Shift Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date Field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="date-input" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Data Desejada *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-slate-500 pointer-events-none">
                      <Calendar className="w-5 h-5" />
                    </span>
                    <input
                      type="date"
                      id="date-input"
                      required
                      min={getMinDate()}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-slate-900/90 text-white text-sm transition-all text-slate-100"
                    />
                  </div>
                </div>

                {/* Shift Selection */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="shift-input" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Melhor Período *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-slate-500">
                      <Clock className="w-5 h-5" />
                    </span>
                    <select
                      id="shift-input"
                      value={shift}
                      onChange={(e) => setShift(e.target.value as any)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-slate-900/90 text-white text-sm appearance-none transition-all cursor-pointer"
                    >
                      <option value="manhã">Manhã (08:00 - 12:00)</option>
                      <option value="tarde">Tarde (14:00 - 18:00)</option>
                      <option value="noite">Noite (Sob Consulta)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message / Reason */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="notes-input" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Alguma observação ou dúvida? (Opcional)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-slate-500">
                    <MessageSquare className="w-5 h-5" />
                  </span>
                  <textarea
                    id="notes-input"
                    rows={3}
                    placeholder="Diga se já usa dentadura, se tem medo de dor, etc..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-slate-900/90 text-white text-sm transition-all placeholder-slate-600"
                  />
                </div>
              </div>

              {/* Submission Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                id="btn-submit-appointment"
                className="w-full py-4 text-xs font-bold uppercase tracking-widest text-slate-950 bg-sky-400 rounded-xl hover:bg-sky-300 active:bg-sky-500 disabled:bg-slate-800 disabled:text-slate-500 shadow-lg shadow-sky-400/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processando...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-slate-950" />
                    Solicitar Agendamento Online
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar Area: Real-time appointments view + Security parameters (5 cols) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Value Trust Block */}
            <div className="bg-slate-900/40 backdrop-blur-sm p-6 rounded-3xl border border-white/5 shadow-2xl space-y-4">
              <div className="p-2.5 bg-sky-400/10 text-sky-400 rounded-xl w-fit border border-sky-400/20">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-white">Privacidade e Respeito</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Seus dados cadastrados estão seguros e serão utilizados estritamente para o agendamento de consultas na clínica do Dr. Cezar Paiva em Capitão Poço. Nós respeitamos integralmente o sigilo bucal.
              </p>
              <div className="flex items-center gap-2 text-xs text-sky-400 font-bold">
                <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
                <span>Atendimento de excelência certificado</span>
              </div>
            </div>

            {/* My Active Bookings List (localStorage verification) */}
            <div className="bg-slate-900/40 backdrop-blur-sm p-6 rounded-3xl border border-white/5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <h4 className="font-serif font-bold text-white text-sm">Seus Agendamentos</h4>
                <span className="text-[10px] bg-white/5 border border-white/10 text-slate-300 px-2 py-0.5 rounded-full font-mono font-bold">
                  {savedAppointments.length}
                </span>
              </div>

              {savedAppointments.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-xs text-slate-500">Nenhum agendamento ativo feito neste navegador.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[280px] overflow-y-auto pr-1">
                  {savedAppointments.map((app) => (
                    <div
                      key={app.id}
                      className="p-4 bg-slate-950 border border-white/5 rounded-xl space-y-2.5 relative group hover:border-sky-500/20 transition-all text-left"
                    >
                      <button
                        onClick={() => handleDelete(app.id)}
                        className="absolute top-3 right-3 p-1 text-slate-500 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                        title="Remover agendamento"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-sky-400">#{app.id}</span>
                        <span className="text-[9px] bg-sky-400/10 text-sky-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider scale-95">
                          {app.status}
                        </span>
                      </div>

                      <p className="text-xs font-bold text-white line-clamp-1">{app.name}</p>
                      
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 font-medium">
                        <span className="truncate">📅 {new Date(app.date).toLocaleDateString('pt-BR')}</span>
                        <span className="truncate">🕒 Turno: {app.shift}</span>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex justify-end">
                        <a
                          href={formatWhatsAppLink(app)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 hover:text-emerald-300 font-bold"
                        >
                          Confirmar via WhatsApp →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && lastAppointment && (
          <div id="booking-success-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 p-8 rounded-3xl max-w-md w-full shadow-2xl text-center space-y-6 border border-white/10 text-white text-left"
            >
              <div className="mx-auto w-16 h-16 bg-sky-400/10 text-sky-400 border border-sky-400/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-sky-400" />
              </div>

              <div className="space-y-2 text-center">
                <h3 className="text-xl font-serif font-bold text-white">Solicitação Registrada!</h3>
                <p className="text-sm text-slate-400">
                  Parabéns! Sua proposta foi registrada com sucesso sob o código{' '}
                  <strong className="text-sky-400 font-mono">#{lastAppointment.id}</strong>.
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-white/5 text-left space-y-2">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Resumo da proposta:</p>
                <p className="text-xs font-bold text-white">Paciente: {lastAppointment.name}</p>
                <p className="text-xs text-slate-300">Data Desejada: {new Date(lastAppointment.date).toLocaleDateString('pt-BR')}</p>
                <p className="text-xs text-slate-300 uppercase">Turno: {lastAppointment.shift}</p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={formatWhatsAppLink(lastAppointment)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer uppercase tracking-wider text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  Confirmar no WhatsApp
                </a>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="w-full py-2.5 bg-white/5 text-slate-300 font-semibold rounded-xl hover:bg-white/10 transition-all text-xs cursor-pointer"
                >
                  Fechar Janela
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
