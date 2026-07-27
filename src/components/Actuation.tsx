import { motion } from "motion/react";

export default function Actuation() {
  return (
    <section
      id="atuacao"
      className="bg-brand-dark text-brand-cream py-24 md:py-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-brand-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center space-x-3 text-brand-gold font-medium tracking-[0.2em] text-xs">
            <span className="h-[1px] w-8 bg-brand-gold" />
            <span>PILARES DE ATUAÇÃO</span>
            <span className="h-[1px] w-8 bg-brand-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-cream leading-tight">
            Arquitetura de <br />
            <span className="italic font-normal text-brand-gold font-serif">Negócios Inteligentes.</span>
          </h2>
        </div>

        {/* Narrative Flow */}
        <div className="space-y-8 text-gray-300 font-light text-base md:text-lg leading-relaxed text-justify md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white font-medium border-l-2 border-brand-gold pl-4 py-1"
          >
            A transformação dos negócios não acontece apenas pela adoção da inteligência
            artificial, mas pela capacidade de conectar visão de mercado, liderança, marca,
            relacionamento e inovação em uma visão integrada.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Karen Schneider atua na interseção entre inteligência de negócios, relações
            internacionais, branding, desenvolvimento de lideranças e novos negócios. Com uma
            sólida trajetória em comunicação corporativa e institucional, conecta organizações,
            executivos e ecossistemas para transformar desafios complexos em oportunidades de
            crescimento, posicionamento e geração de valor.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fundadora da Green Legacy, Karen desenvolve programas e experiências voltados à
            formação de lideranças e à construção de negócios preparados para a economia do
            futuro. Utiliza o golfe como uma poderosa plataforma para fortalecer competências
            como tomada de decisão, negociação, inteligência emocional e construção de
            relacionamentos de alto nível.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Como Franqueada da Plataforma{" "}
            <a
              href="https://orayon.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-brand-gold-dark underline underline-offset-4 font-semibold transition-colors duration-300"
            >
              Orayon Inteligência Artificial
            </a>
            , incorpora Agentes de IA e automação inteligente às diretrizes empresariais, criando
            ecossistemas que integram tecnologia, pessoas e processos. Para Karen, a inteligência
            artificial não substitui a inteligência humana — ela potencializa líderes e
            organizações que sabem utilizá-la com propósito.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Seu trabalho reúne visão global, capacidade de articulação institucional e profundo
            entendimento sobre posicionamento, reputação e desenvolvimento de negócios,
            tornando-se uma parceira para empresas, instituições e executivos que desejam
            liderar a transformação de seus mercados.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
