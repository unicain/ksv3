import { motion } from "motion/react";
import { Globe, Award } from "lucide-react";
import { LanguageItem } from "../types";

const LANGUAGES_DATA: LanguageItem[] = [
  {
    language: "Português",
    level: "Nativo",
    description: "Idioma materno, utilizado em liderança executiva e comunicação corporativa nacional de alto impacto."
  },
  {
    language: "Español",
    level: "Fluente",
    description: "Formação acadêmica internacional na Espanha. Domínio completo para oratória, negociação e escrita acadêmica."
  },
  {
    language: "English",
    level: "Fluente",
    description: "Vasta vivência diplomática internacional (ONU/Horasis). Fluência total para relações institucionais de alto nível."
  },
  {
    language: "Deutsch",
    level: "Fluente",
    description: "Fala & Escrita avançadas. Anos de residência e atuação corporativa em Viena (Áustria) e representações da Alemanha."
  }
];

const COMPETENCIES_DATA = [
  "RELAÇÕES INSTITUCIONAIS",
  "DIPLOMACIA DE NEGÓCIOS",
  "COMUNICAÇÃO ESTRATÉGICA",
  "GESTÃO DE EVENTOS INTERNACIONAIS",
  "BRANDING & POSICIONAMENTO",
  "MARKETING INTERNACIONAL",
  "AGENTES DE IA - ORAYON",
  "GREEN LEGACY",
  "CAPTAÇÃO DE PATROCÍNIOS",
  "LIDERANÇA MULTICULTURAL",
  "CURADORIA DE CONTEÚDO",
  "STAKEHOLDER MANAGEMENT"
];

export default function Languages() {
  return (
    <section className="bg-brand-dark text-brand-cream py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-b border-brand-gold/10">
      
      {/* Background visual accents */}
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-emerald-950/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-brand-gold font-medium tracking-[0.2em] text-xs">
            <span className="h-[1px] w-8 bg-brand-gold" />
            <span>IDIOMAS & COMPETÊNCIAS</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-cream leading-tight">
            Fluente em <span className="italic font-normal text-brand-gold font-serif">quatro línguas.</span> <br />
            Estratégica em todas.
          </h2>
        </div>

        {/* 4 Language Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LANGUAGES_DATA.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-brand-gold/15 bg-brand-dark/50 p-6 md:p-8 flex flex-col justify-between hover:border-brand-gold/50 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-serif text-2xl md:text-3xl text-brand-cream font-light group-hover:text-brand-gold transition-colors">
                    {lang.language}
                  </span>
                  <Globe size={16} className="text-brand-gold/40 group-hover:text-brand-gold transition-colors" />
                </div>
                <p className="text-gray-400 font-light text-xs md:text-sm leading-relaxed">
                  {lang.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-gold/10">
                <span className="text-[10px] tracking-widest font-bold text-brand-gold uppercase block">
                  {lang.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competencies tag cloud pool */}
        <div className="space-y-6 pt-8 border-t border-brand-gold/10">
          <div className="flex items-center space-x-2 text-brand-gold font-medium tracking-widest text-xs uppercase">
            <Award size={14} />
            <span>CORE COMPETÊNCIAS & HABILIDADES</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {COMPETENCIES_DATA.map((comp, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-brand-gold/10 text-[10px] md:text-xs tracking-widest text-gray-300 uppercase hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/5 transition-all duration-300 cursor-default bg-brand-dark/20"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
