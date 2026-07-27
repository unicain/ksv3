import { motion } from "motion/react";
import { Phone, Mail, Linkedin, MapPin, ArrowUp } from "lucide-react";

export default function Contact() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contato" className="relative z-10">
      
      {/* 1. Conversational Call to Action Block */}
      <div className="bg-brand-gold-dark text-white py-20 px-6 md:px-12 relative overflow-hidden">
        {/* Subtle geometry background */}
        <div className="absolute top-1/2 left-1/3 w-[30rem] h-[30rem] border border-white/5 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Inviting header */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Vamos conversar <br />
              sobre o <span className="italic">futuro do seu negócio.</span>
            </h2>
            <p className="text-white/85 font-light text-sm md:text-base max-w-md">
              Entre em contato para alinhar estratégias de mercado, estruturar projetos institucionais ou integrar Agentes de IA customizados.
            </p>
          </div>

          {/* Right: Rich Contact Details with Action Triggers */}
          <div className="lg:col-span-6 flex flex-col space-y-6 lg:pl-16">
            
            {/* Phone / Whatsapp */}
            <a
              href="https://wa.me/5511976869042"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group bg-white/5 border border-white/10 hover:bg-white hover:text-brand-gold-dark p-4 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-gold-dark/10 transition-colors">
                <Phone size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-widest font-bold uppercase opacity-75">WHATSAPP</span>
                <span className="text-sm md:text-base font-semibold tracking-wide">(11) 97686-9042</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:karenpadma@hotmail.com"
              className="flex items-center space-x-4 group bg-white/5 border border-white/10 hover:bg-white hover:text-brand-gold-dark p-4 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-gold-dark/10 transition-colors">
                <Mail size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-widest font-bold uppercase opacity-75">EMAIL</span>
                <span className="text-sm md:text-base font-semibold tracking-wide">karenpadma@hotmail.com</span>
              </div>
            </a>

            {/* LinkedIn & Location row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://linkedin.com/in/karen-schneider"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group bg-white/5 border border-white/10 hover:bg-white hover:text-brand-gold-dark p-4 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-gold-dark/10 transition-colors">
                  <Linkedin size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-widest font-bold uppercase opacity-75">CONECTAR</span>
                  <span className="text-sm font-semibold tracking-wide">LinkedIn</span>
                </div>
              </a>

              <div className="flex items-center space-x-4 bg-white/5 border border-white/10 p-4 select-none">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-widest font-bold uppercase opacity-75">LOCALIZAÇÃO</span>
                  <span className="text-sm font-semibold tracking-wide">São Paulo &bull; SP</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 2. Absolute Bottom Copyright Bar */}
      <div className="bg-brand-dark text-gray-400 py-8 px-6 md:px-12 border-t border-brand-gold/15">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright branding */}
          <div className="flex flex-col md:flex-row items-center md:space-x-4 text-xs tracking-wider">
            <span>&copy; 2026 Karen Schneider</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="text-gray-500 text-[11px]">Business Strategist</span>
          </div>

          {/* Core pillar links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] md:text-xs tracking-widest uppercase font-semibold">
            <a href="#agentes-ia" className="hover:text-brand-gold transition-colors">IA - BRANDING</a>
            <a href="#presenca" className="hover:text-brand-gold transition-colors">GOOGLE MAPS</a>
            <a href="#sobre" className="hover:text-brand-gold transition-colors">RELAÇÕES INTERNACIONAIS</a>
          </div>

          {/* Scroll to top trigger */}
          <button
            onClick={handleScrollToTop}
            className="group flex items-center space-x-1.5 text-xs tracking-widest uppercase hover:text-brand-gold transition-colors"
            aria-label="Voltar ao topo"
          >
            <span>TOPO</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>

    </footer>
  );
}
