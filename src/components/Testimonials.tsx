import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TestimonialItem } from "../types";

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: "Sua dedicação, empenho e capacidade de inspirar foram fundamentais para transformar um evento tão complexo e de grande responsabilidade em realidade. Ela trouxe energia, comprometimento e confiança para cada desafio. Sinceramente, não consigo imaginar se teríamos conseguido realizar esse evento sem ela.",
    author: "Frank-Jürgen Richter",
    role: "EX-DIRETOR DO FÓRUM ECONÔMICO MUNDIAL",
    company: "CHAIRMAN & FUNDADOR DO HORASIS",
    stars: 5
  },
  {
    quote: "Profissional de visão apurada e seriedade ímpar, ela se compromete de verdade com os objetivos e entrega excelência do início ao fim. É, sem dúvida, um ativo valioso para o cenário da diplomacia de negócios.",
    author: "Akemi Soy",
    role: "FUNDADORA DA SOY CHO DESIGN",
    company: "DIRETORA DE RI DO IBREI - COORD. OBME",
    stars: 5
  },
  {
    quote: "Karen é uma profissional altamente competente em relações internacionais e desenvolvimento de parcerias estratégicas. Destaca-se pela capacidade de conectar pessoas e instituições, conduzir negociações com profissionalismo e transformar oportunidades em resultados concretos.",
    author: "Mauricio Prazak",
    role: "PRESIDENTE IBREI - SÓCIO FIUS ADVOGADOS",
    company: "VICE-PRESIDENTE CÂMARA URUGUAI-BRASIL",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-brand-sand py-24 md:py-32 px-6 md:px-12 relative border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center space-x-3 text-brand-gold-dark font-medium tracking-[0.2em] text-xs">
            <span className="h-[1px] w-8 bg-brand-gold-dark" />
            <span>RECONHECIMENTO & DEPOIMENTOS</span>
            <span className="h-[1px] w-8 bg-brand-gold-dark" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight font-light">
            O que dizem sobre <br />
            <span className="italic font-normal text-brand-gold-dark font-serif">Karen Schneider.</span>
          </h2>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-brand-gold/10 p-8 flex flex-col justify-between hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 relative rounded-none"
            >
              {/* Stars header */}
              <div className="space-y-6">
                <div className="flex space-x-1">
                  {Array.from({ length: item.stars }).map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      size={14}
                      className="fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="font-serif text-base italic text-gray-700 leading-relaxed font-light text-justify">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info block */}
              <div className="mt-8 pt-6 border-t border-brand-gold/10 space-y-1">
                <h4 className="font-serif text-lg font-medium text-brand-dark">
                  {item.author}
                </h4>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold tracking-widest text-brand-gold-dark uppercase leading-tight">
                    {item.role}
                  </span>
                  <span className="text-[9px] tracking-wider text-gray-400 uppercase font-medium mt-0.5">
                    {item.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
