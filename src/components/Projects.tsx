import { motion } from "motion/react";
import { ArrowUpRight, Award, BrainCircuit, Landmark } from "lucide-react";

export default function Projects() {
  return (
    <section id="projetos" className="bg-brand-cream py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-b border-brand-gold/15">
      {/* Background dots styling */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-brand-gold-dark font-medium tracking-[0.2em] text-xs">
            <span className="h-[1px] w-8 bg-brand-gold-dark" />
            <span>INICIATIVAS & PROJETOS ATUAIS</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight font-light">
            Onde Karen <br />
            em <span className="italic font-normal text-brand-gold-dark font-serif">movimento</span> constrói o futuro.
          </h2>
        </div>

        {/* 2-Column Venture Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Green Legacy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group bg-white border border-brand-gold/15 p-8 md:p-12 relative flex flex-col justify-between overflow-hidden shadow-sm hover:border-brand-gold/50 hover:shadow-xl transition-all duration-500 h-full"
          >
            {/* Elegant Background Watermark "GL" */}
            <div className="absolute right-6 bottom-4 font-serif text-[12rem] md:text-[16rem] font-light leading-none text-brand-gold/5 select-none pointer-events-none group-hover:text-brand-gold/10 transition-colors duration-500">
              GL
            </div>

            <div className="space-y-6 relative z-10">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-brand-gold-dark font-medium tracking-widest text-xs uppercase">
                  <Landmark size={14} />
                  <span>FUNDADORA &bull; 2025</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-brand-dark font-light leading-none">
                  Green Legacy
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed text-justify max-w-lg">
                Empresa de inteligência que desenvolve programas e experiências para executivos,
                empresas e instituições, utilizando o golfe como ferramenta para fortalecer
                lideranças, relacionamentos e a tomada de decisões. O golfe como plataforma de
                conexão, geração de valor e legado sustentável.
              </p>
            </div>

            {/* Bottom action trigger */}
            <div className="mt-12 pt-6 border-t border-brand-gold/10 flex justify-between items-center relative z-10">
              <span className="text-[10px] tracking-widest font-bold text-brand-gold uppercase">
                EXECUTIVE TRAINING & NETWORKING
              </span>
              <div className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-300">
                <ArrowUpRight size={14} className="text-brand-gold group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Orayon Inteligência Artificial */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group bg-white border border-brand-gold/15 p-8 md:p-12 relative flex flex-col justify-between overflow-hidden shadow-sm hover:border-brand-gold/50 hover:shadow-xl transition-all duration-500 h-full"
          >
            {/* Elegant Background Watermark "AI" */}
            <div className="absolute right-6 bottom-4 font-serif text-[12rem] md:text-[16rem] font-light leading-none text-brand-gold/5 select-none pointer-events-none group-hover:text-brand-gold/10 transition-colors duration-500">
              AI
            </div>

            <div className="space-y-6 relative z-10">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-brand-gold-dark font-medium tracking-widest text-xs uppercase">
                  <BrainCircuit size={14} />
                  <span>FRANQUEADA &bull; 2026</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-brand-dark font-light leading-none">
                  Orayon Inteligência Artificial
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed text-justify max-w-lg">
                Ecossistema digital brasileiro lançado em 2025, focado em fluxos de trabalho com
                IA, treinamentos e gestão. Karen integra essa plataforma para arquitetar soluções
                inteligentes e personalizadas para empresas e executivos.
              </p>
            </div>

            {/* Bottom action trigger */}
            <div className="mt-12 pt-6 border-t border-brand-gold/10 flex justify-between items-center relative z-10">
              <a
                href="https://orayonpartner.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-widest font-bold text-brand-gold hover:text-brand-gold-dark uppercase underline underline-offset-4"
              >
                ORAYONPARTNER.COM
              </a>
              <div className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-300">
                <ArrowUpRight size={14} className="text-brand-gold group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
