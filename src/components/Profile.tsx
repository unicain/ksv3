import { motion } from "motion/react";

export default function Profile() {
  const stats = [
    {
      number: "20+",
      label: "ANOS DE ATUAÇÃO",
      subLabel: "EM COMUNICAÇÃO ESTRATÉGICA",
    },
    {
      number: "10",
      label: "ANOS NA EUROPA",
      subLabel: "ESPANHA & ÁUSTRIA",
    },
    {
      number: "4",
      label: "IDIOMAS FLUENTES",
      subLabel: "PT - ES - EN - DE",
    },
  ];

  return (
    <section className="bg-brand-cream py-24 md:py-32 px-6 md:px-12 border-b border-brand-gold/10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Biography */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-brand-gold-dark font-medium tracking-[0.2em] text-xs">
              <span className="h-[1px] w-8 bg-brand-gold-dark" />
              <span>PERFIL PROFISSIONAL</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight font-light">
              Uma estrategista formada <br />
              em <span className="italic font-normal text-brand-gold-dark">múltiplos mundos.</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-700 font-light text-base md:text-lg leading-relaxed">
            <p>
              Jornalista de formação, diplomata por vocação, estrategista por experiência.
              Karen Schneider construiu uma trajetória singular: das rádios Gaúcha e CBN às
              conferências da ONU em Viena; de Madri, onde se formou em Relações Internacionais
              na tradicional Universidade Complutense, às arenas de inovação global do Horasis
              em São Paulo.
            </p>
            <p>
              Hoje, atua na interseção entre comunicação de alto nível, tecnologia de inteligência
              artificial e as novas fronteiras de visibilidade digital — ajudando empresas, marcas e
              líderes a ocuparem espaços estratégicos no mercado com autoridade e consistência.
            </p>
          </div>
        </div>

        {/* Right Side: Key Metrics / Stats */}
        <div className="lg:col-span-5 grid grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-12 pt-8 lg:pt-16 lg:pl-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col space-y-2 border-l border-brand-gold/20 pl-4 md:pl-6"
            >
              <span className="font-serif text-5xl md:text-7xl font-light text-brand-gold-dark leading-none">
                {stat.number}
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs tracking-[0.15em] font-semibold text-brand-dark uppercase">
                  {stat.label}
                </span>
                <span className="text-[9px] md:text-[10px] tracking-[0.12em] text-gray-500 uppercase mt-0.5">
                  {stat.subLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
