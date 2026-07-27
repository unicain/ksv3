import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Globe, Compass, Navigation } from "lucide-react";

interface Hub {
  id: string;
  name: string;
  country: string;
  description: string;
  achievements: string[];
  coords: { x: string; y: string }; // SVG percentage coordinates
}

const HUBS_DATA: Hub[] = [
  {
    id: "sp",
    name: "São Paulo",
    country: "Brasil",
    description: "Centro estratégico de suas operações atuais de inteligência de negócios, branding e inteligência artificial para o mercado latino-americano.",
    achievements: [
      "Sede principal de sua atuação como consultora corporativa",
      "Co-organização do prestigiado Horasis Global Summit em São Paulo",
      "Distribuição e liderança estratégica da franquia Orayon AI no país"
    ],
    coords: { x: "32%", y: "78%" }
  },
  {
    id: "vienna",
    name: "Viena",
    country: "Áustria",
    description: "Hub de inserção diplomática e cooperação internacional na Europa Central, atuando junto a importantes órgãos diplomáticos.",
    achievements: [
      "Supervisão de reuniões e conferências internacionais na ONU",
      "Desenvolvimento de ecossistemas de diplomacia corporativa",
      "Articulação de parcerias econômicas e culturais Áustria-Brasil"
    ],
    coords: { x: "51%", y: "39%" }
  },
  {
    id: "madrid",
    name: "Madri",
    country: "Espanha",
    description: "Base acadêmica e formação em Relações Internacionais, onde lapidou sua visão de diplomacia de negócios e geopolítica europeia.",
    achievements: [
      "Formação na prestigiada Universidad Complutense de Madrid",
      "Consultoria de branding e expansão de mercado para multinacionais europeias",
      "Pesquisa aplicada a ecossistemas de negócios inteligentes"
    ],
    coords: { x: "47%", y: "42%" }
  },
  {
    id: "frankfurt",
    name: "Frankfurt",
    country: "Alemanha",
    description: "Ponto focal de conexões e relações institucionais com a maior potência econômica da Zona do Euro.",
    achievements: [
      "Representação institucional do Brasil junto à Alemanha através do IBREI",
      "Organização de rodadas de negócios e matchmaking industrial",
      "Aproximação de ecossistemas de tecnologia alemães e brasileiros"
    ],
    coords: { x: "50%", y: "36%" }
  }
];

export default function PresenceMap() {
  const [selectedHub, setSelectedHub] = useState<Hub>(HUBS_DATA[0]);

  return (
    <section
      id="presenca"
      className="bg-brand-dark text-brand-cream py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-b border-brand-gold/15"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#C5A880/0.03_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="space-y-4 mb-16 text-center">
          <div className="inline-flex items-center space-x-3 text-brand-gold font-medium tracking-[0.2em] text-xs">
            <span className="h-[1px] w-8 bg-brand-gold" />
            <span>MAPA & PRESENÇA GLOBAL</span>
            <span className="h-[1px] w-8 bg-brand-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-cream font-light leading-tight">
            Conectando mercados, <br />
            <span className="italic font-normal text-brand-gold font-serif">gerando impacto.</span>
          </h2>
          <p className="text-gray-400 font-light text-sm md:text-base max-w-xl mx-auto mt-4">
            Uma atuação verdadeiramente global que transpõe fronteiras geográficas para desenhar o futuro dos negócios e da tecnologia.
          </p>
        </div>

        {/* Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Map Grid */}
          <div className="lg:col-span-7 relative bg-brand-dark border border-brand-gold/20 p-4 md:p-8 rounded-none shadow-2xl">
            {/* Absolute accent markers */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-brand-gold" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-brand-gold" />
            
            <div className="relative aspect-[16/9] w-full bg-brand-dark/50 overflow-hidden flex items-center justify-center">
              
              {/* Elegant styled minimal SVG World Map Background */}
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full opacity-20 text-brand-gold/40 stroke-brand-gold/25 stroke-[0.5]"
                fill="none"
              >
                {/* Americas simplified */}
                <path d="M 150,120 Q 200,80 250,110 T 350,120 T 300,220 T 310,320 T 280,450 T 290,480 T 250,450 Z" fill="currentColor" fillOpacity="0.1" />
                {/* Europe & Africa simplified */}
                <path d="M 400,100 Q 500,50 550,100 T 520,200 T 480,250 T 500,320 T 520,380 T 540,430 T 480,450 T 450,300 T 410,200 Z" fill="currentColor" fillOpacity="0.1" />
                {/* Asia / Russia simplified */}
                <path d="M 550,100 Q 700,40 850,70 T 900,150 T 800,250 T 700,220 T 600,180 Z" fill="currentColor" fillOpacity="0.1" />
                
                {/* Strategic connection routes */}
                <g className="stroke-brand-gold/30 stroke-[0.8] stroke-dasharray-[4,4] animate-[pulse_2s_infinite]">
                  <path d="M 320,390 Q 380,290 500,180" /> {/* SP to Frankfurt/Vienna */}
                  <path d="M 320,390 Q 350,280 470,210" /> {/* SP to Madrid */}
                  <path d="M 470,210 Q 485,200 500,180" /> {/* Madrid to Frankfurt */}
                  <path d="M 500,180 Q 505,185 510,195" /> {/* Frankfurt to Vienna */}
                </g>
              </svg>

              {/* Glowing Interactive Pins */}
              {HUBS_DATA.map((hub) => {
                const isSelected = selectedHub.id === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    style={{ left: hub.coords.x, top: hub.coords.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                  >
                    {/* Ring Pulse */}
                    <span className={`absolute -inset-4 rounded-full transition-all duration-300 ${
                      isSelected ? "bg-brand-gold/30 scale-125 animate-ping" : "bg-brand-gold/0 scale-75 group-hover:bg-brand-gold/15 group-hover:scale-100"
                    }`} />
                    
                    {/* Solid Dot */}
                    <div className={`relative w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isSelected ? "bg-brand-gold scale-125 shadow-[0_0_15px_rgba(197,168,128,0.8)]" : "bg-brand-gold-dark/70 scale-100 group-hover:bg-brand-gold"
                    }`}>
                      <div className="w-1.5 h-1.5 bg-brand-dark rounded-full" />
                    </div>

                    {/* Quick Label */}
                    <span className={`absolute top-6 left-1/2 -translate-x-1/2 bg-brand-dark/90 border border-brand-gold/20 px-2 py-0.5 text-[10px] uppercase font-semibold tracking-wider transition-all duration-300 whitespace-nowrap shadow-xl ${
                      isSelected ? "text-brand-gold scale-100 opacity-100" : "text-gray-400 scale-95 opacity-80 group-hover:text-brand-cream group-hover:opacity-100"
                    }`}>
                      {hub.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Hub Details Info Card */}
          <div className="lg:col-span-5 h-full flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedHub.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-dark border border-brand-gold/10 p-8 flex flex-col space-y-6 h-full justify-center"
              >
                {/* Header info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-brand-gold font-medium tracking-widest text-xs uppercase">
                    <Compass size={14} className="animate-spin-slow" />
                    <span>PRESENÇA GLOBAL</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-brand-cream font-light leading-none">
                    {selectedHub.name}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-brand-gold/80 font-semibold block">
                    {selectedHub.country}
                  </span>
                </div>

                {/* Subtext description */}
                <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                  {selectedHub.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-3.5 border-t border-brand-gold/10 pt-6">
                  <span className="text-[10px] tracking-widest font-bold uppercase text-brand-gold block">
                    DESTAQUES E OPERAÇÕES
                  </span>
                  <ul className="space-y-3">
                    {selectedHub.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs md:text-sm text-gray-400 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual indicator of hub index */}
                <div className="flex items-center space-x-3 pt-4">
                  {HUBS_DATA.map((h) => (
                    <button
                      key={h.id}
                      onClick={() => setSelectedHub(h)}
                      className={`h-1.5 transition-all duration-300 ${
                        selectedHub.id === h.id ? "w-8 bg-brand-gold" : "w-2 bg-gray-600 hover:bg-gray-400"
                      }`}
                      aria-label={`Show ${h.name}`}
                    />
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
