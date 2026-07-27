import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function AIServices() {
  const services = [
    "Diagnóstico da comunicação atual do negócio",
    "Definição de personalidade e tom do Agente",
    "Treinamento com base em objetivos estratégicos",
    "Integração com canais de atendimento e vendas",
    "Monitoramento e refinamento contínuo",
    "Capacitação da equipe interna para gestão do Agente",
  ];

  return (
    <section id="agentes-ia" className="bg-brand-sand/40 py-24 md:py-32 px-6 md:px-12 border-b border-brand-gold/10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left column: Headings & Copy */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-brand-gold-dark font-medium tracking-[0.2em] text-xs">
              <span className="h-[1px] w-8 bg-brand-gold-dark" />
              <span>INTELIGÊNCIA ARTIFICIAL</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight font-light">
              Arquitetura de <br />
              <span className="italic font-normal text-brand-gold-dark font-serif">Negócios Inteligentes.</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-700 font-light text-base md:text-lg leading-relaxed">
            <p>
              A inteligência artificial não é mais uma tendência — é infraestrutura estratégica.
              Karen projeta negócios inteligentes: estruturas que unem estratégia, marca,
              relacionamento, processos e Agentes de IA em uma única arquitetura coesa e escalável.
            </p>
            <p>
              Como Franqueada da Plataforma{" "}
              <a
                href="https://orayon.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold-dark hover:text-brand-dark underline underline-offset-4 font-semibold transition-colors duration-300"
              >
                Orayon Inteligência Artificial
              </a>
              , Karen implementa ecossistemas de IA personalizados para negócios de qualquer
              porte — transformando tecnologia em vantagem competitiva real e duradoura.
            </p>
          </div>
        </div>

        {/* Right column: Beautiful list blocks */}
        <div className="lg:col-span-6 space-y-3.5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center space-x-4 bg-white border border-brand-gold/15 p-5 hover:border-brand-gold/60 hover:shadow-md transition-all duration-300"
            >
              {/* Gold dot / diamond visual container */}
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center border border-brand-gold bg-brand-gold/5 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                <div className="w-1.5 h-1.5 bg-brand-gold-dark group-hover:bg-white transition-colors duration-300 rotate-45" />
              </div>
              
              <span className="text-sm md:text-base font-medium text-brand-dark tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                {service}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
