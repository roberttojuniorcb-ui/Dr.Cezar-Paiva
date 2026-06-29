import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import AppointmentForm from './components/AppointmentForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div id="dentist-landing-page-root" className="min-h-screen bg-[#020617] text-slate-100 antialiased font-sans selection:bg-sky-400 selection:text-slate-950">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Welcome Section */}
      <Hero />

      {/* Implant Specializations & Steps */}
      <Services />

      {/* About the Dentist (Dr. Cezar Paiva) */}
      <About />

      {/* Testimonials (Patient Stories) */}
      <Testimonials />

      {/* Online Appointment Booking Wizard */}
      <AppointmentForm />

      {/* FAQ / Doubts Section */}
      <FAQ />

      {/* Footer (Contact details, Operational hours, and Interactive Map) */}
      <Footer />

      {/* Sticky Floating WhatsApp Lead Capture Button */}
      <FloatingWhatsApp />
    </div>
  );
}
