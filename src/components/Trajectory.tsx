import { motion } from "motion/react";
import { Briefcase, Calendar, Link } from "lucide-react";
import { TimelineItem } from "../types";

const TIMELINE_DATA: TimelineItem[] = [
  {
    period: "2023–2027",
    role: "Embaixadora para a Alemanha",
    company: "IBREI",
    companySub: "INSTITUTO BRASILEIRO DE RELAÇÕES EMPRESARIAIS INTERNACIONAIS",
    website: "ibrei.org",
    description: "Representação Institucional do Brasil junto à Alemanha. Organização do primeiro evento IBREI em Frankfurt com o Secretário de Estado de Hessen. Atuação nas celebrações do Bicentenário da Imigração Alemã no RS."
  },
  {
    period: "2022–2026",
    role: "Co-idealizadora Operacional & Diretora de Comunicação",
    company: "MULHERES & GOLFE",
    companySub: "INSTITUTO CHAVES",
    website: "mulheresegolfe.com.br",
    description: "Construiu o maior grupo de mulheres golfistas iniciantes do Brasil em 2 anos. O programa foi adotado como modelo de referência pela Confederação Brasileira de Golfe. O trabalho de posicionamento e comunicação viabilizou ainda a criação do ClubeMeg, o 52º Clube de Golfe da Federação Paulista de Golfe, consolidando o programa como entidade esportiva formal."
  },
  {
    period: "Abr–Nov 2025",
    role: "Coordenadora Executiva & Relações Institucionais",
    company: "HORASIS GLOBAL SUMMIT",
    companySub: "SÃO PAULO",
    website: "horasis.org",
    description: "Colaboração direta com Dr. Frank-Jürgen Richter (ex-diretor do Fórum Econômico Mundial) na organização do Summit com CEOs, diplomatas e líderes globais."
  },
  {
    period: "2019–2020",
    role: "Diretora de Marketing Internacional",
    company: "SURYA BRASIL",
    companySub: "EUA, EUROPA, AMÉRICA DO SUL",
    description: "Estratégias de marketing para Whole Foods Market, Natural Grocers e Sprouts. Gestão de influenciadoras americanas e campanhas patrocinadas no varejo premium dos EUA."
  },
  {
    period: "2007–2010",
    role: "Consultora de Comunicação Estratégica",
    company: "BWIN ENTERTAINMENT AG",
    companySub: "VIENA, ÁUSTRIA",
    description: "Atuação em uma das maiores empresas de entretenimento online da Europa. Participação no processo de aquisição da PokerRoom e desenvolvimento de novos produtos."
  },
  {
    period: "2003–2006",
    role: "Supervisora - Reuniões e Conferências Internacionais",
    company: "ONU",
    companySub: "AGÊNCIA INTERNACIONAL DE ENERGIA ATÔMICA (AIEA) - VIENA",
    description: "Supervisão de conferências multilaterais, protocolos diplomáticos e gestão de documentação em um dos mais relevantes organismos internacionais do mundo."
  }
];

export default function Trajectory() {
  return (
    <section id="trajetoria" className="bg-brand-cream py-24 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20">
          <div className="flex items-center space-x-3 text-brand-gold-dark font-medium tracking-[0.2em] text-xs">
            <span className="h-[1px] w-8 bg-brand-gold-dark" />
            <span>TRAJETÓRIA PROFISSIONAL</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight font-light">
            Uma carreira construída <br />
            em <span className="italic font-normal text-brand-gold-dark font-serif">movimento.</span>
          </h2>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-brand-gold/20 ml-4 md:ml-32 pl-8 md:pl-12 space-y-16">
          
          {TIMELINE_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot marker with absolute position */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-brand-cream border-2 border-brand-gold flex items-center justify-center transition-all duration-300 group-hover:bg-brand-gold group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(197,168,128,0.5)]">
                <Briefcase size={10} className="text-brand-gold-dark group-hover:text-white transition-colors" />
              </div>

              {/* Year tag for desktop placed on the left side of timeline line */}
              <div className="hidden md:block absolute -left-44 top-1.5 w-32 text-right">
                <span className="font-serif text-lg font-medium text-brand-gold-dark tracking-wide">
                  {item.period}
                </span>
              </div>

              {/* Main Content card */}
              <div className="bg-white border border-brand-gold/10 p-6 md:p-8 hover:border-brand-gold/40 hover:shadow-md transition-all duration-300 rounded-none relative">
                {/* Mobile Year Tag */}
                <div className="md:hidden inline-flex items-center space-x-1.5 text-brand-gold-dark font-serif font-semibold text-sm mb-3">
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>

                {/* Role and Title */}
                <div className="space-y-1.5 mb-4">
                  <h3 className="font-serif text-xl md:text-2xl text-brand-dark font-medium leading-snug">
                    {item.role}
                  </h3>
                  
                  {/* Company credentials */}
                  <div className="flex flex-wrap items-center gap-x-2 text-xs font-semibold text-brand-gold-dark tracking-wider uppercase">
                    <span>{item.company}</span>
                    {item.companySub && (
                      <>
                        <span className="text-gray-300">&bull;</span>
                        <span className="text-gray-500 font-normal">{item.companySub}</span>
                      </>
                    )}
                    {item.website && (
                      <a
                        href={`https://${item.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-0.5 text-[10px] text-brand-gold hover:text-brand-gold-dark underline transition-colors ml-1"
                      >
                        <Link size={10} />
                        <span>{item.website}</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Milestone Detail narrative */}
                <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
