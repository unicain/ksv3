import { motion } from "motion/react";

export default function Hero() {
  const skills = [
    "COMUNICAÇÃO ESTRATÉGICA",
    "AGENTES DE IA PARA NEGÓCIOS",
    "ARQUITETURA DE NEGÓCIOS INTELIGENTES",
    "BRANDING & POSICIONAMENTO",
    "RELAÇÕES INSTITUCIONAIS",
    "4 IDIOMAS",
  ];

  return (
    <section
      id="sobre"
      className="relative min-h-screen bg-brand-dark pt-32 pb-24 md:py-36 px-6 md:px-12 overflow-hidden flex items-center"
    >
      {/* Editorial subtle light gradients on background to give depth */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-[30rem] h-[30rem] bg-emerald-950/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left column: Text & Quote */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-4"
          >
            {/* Tagline / Eyebrow */}
            <div className="flex items-center space-x-3 text-brand-gold font-medium tracking-[0.2em] text-xs">
              <span className="h-[1px] w-8 bg-brand-gold" />
              <span>BUSINESS STRATEGIST &bull; SÃO PAULO & GLOBAL</span>
            </div>

            {/* High-End Editorial Header */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-light text-brand-cream leading-[1.05] tracking-tight">
              Estratégia que <br />
              <span className="italic font-normal text-brand-gold font-serif">conecta</span> mercados, <br />
              tecnologia e <br />
              <span className="italic font-normal text-brand-gold font-serif">marcas.</span>
            </h1>
          </motion.div>

          {/* Subtext description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 font-light text-base md:text-lg leading-relaxed max-w-2xl"
          >
            Mais de 20 anos construindo ecossistemas de impacto, pontes entre
            negócios, culturas e resultados — da experiência na ONU em Viena à
            criação de iniciativa que impulsionou o golfe feminino no Brasil,
            unindo visão de mercado, branding, liderança e inteligência artificial
            para acelerar negócios.
          </motion.p>

          {/* Golden Highlighted Quote Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-l-2 md:border-l-0 md:border border-brand-gold/40 bg-brand-dark/40 backdrop-blur-sm p-6 md:p-8 rounded-none relative"
          >
            {/* Visual Gold Bracket Corners on desktop to match high-end design */}
            <div className="hidden md:block absolute -top-1 -left-1 w-4 h-4 border-t border-l border-brand-gold" />
            <div className="hidden md:block absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-brand-gold" />
            
            <p className="font-serif text-base md:text-lg italic text-brand-cream/95 leading-relaxed font-light">
              "Em um mundo que fragmenta para compreender, o diferencial está na
              capacidade de conectar pessoas, culturas, mercados e tecnologias
              com uma única visão de negócios. Pontes constroem-se com a
              inteligência que enxerga o todo, que atravessa fronteiras. Enquanto
              a IA processa dados, a inteligência que conecta pessoas cria
              sentido. O futuro pertence a quem sabe fazer as duas coisas ao mesmo
              tempo."
            </p>
          </motion.div>

          {/* Custom border pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-2.5 pt-2"
          >
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3.5 py-1.5 border border-brand-gold/25 text-[10px] md:text-xs tracking-widest text-brand-gold/90 uppercase hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 cursor-default bg-brand-gold/5"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right column: Image frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Elegant outer golden spin glow ring */}
            <div className="absolute -inset-4 border border-brand-gold/20 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-2 border-2 border-brand-gold/40 rounded-full pointer-events-none" />

            {/* Profile image with custom border */}
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[24rem] lg:h-[24rem] rounded-full overflow-hidden border-4 border-brand-dark shadow-2xl relative z-10">
              <img
                src="/src/assets/images/karen_schneider_portrait_1785193850755.jpg"
                alt="Karen Schneider"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Absolute badge or details */}
            <div className="absolute -bottom-4 right-4 bg-brand-gold text-brand-dark px-4 py-2 text-[10px] tracking-widest font-bold uppercase rounded-none shadow-lg z-20">
              SÃO PAULO &bull; GLOBAL
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
