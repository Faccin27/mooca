"use client";

import FeatureCard from "./featuredCard";

const features = [true, true, true, true, true, true, true];

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#552020]">
            Por Que Somos a Melhor Escolha?
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Compare nossos serviços e veja por que mais de 1000 clientes nos
            escolheram
          </p>
        </div>

        <div className="max-w-full mx-auto grid md:grid-cols-3 gap-8 items-start">
          <FeatureCard
            name="Qualidade Técnica"
            price="Alta durabilidade"
            extras={[
              "Redes de polietileno com tratamento UV, resistentes ao sol e à chuva.",
              "Suporta até <strong>500kg de tração</strong>, alta resistência ao impacto.",
              "Avaliação e certificação pelos institutos <strong>FALCÃO BAUER</strong> e <strong>INMETRO</strong>.",
              "Garantia de 5 anos sobre material e instalação.",
            ]}
          />

          <FeatureCard
            name="Mooca Redes"
            price="A partir de R$ 45/m²"
            highlight="Melhor Custo-Benefício"
            features={features}
            onClick={() => {
              window.open(
                `https://wa.me/5511971423779?text=${encodeURIComponent(
                  "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação"
                )}`,
                "_blank"
              );
              window.location.href = "/enviar_mensagem";
            }}
          />

          <FeatureCard
            name="Proteção de Verdade"
            price="Para quem você ama"
            extras={[
              "Quem tem <strong>crianças</strong> ou <strong>animais</strong> em casa sabe o risco de quedas em janelas e sacadas.",
              "As redes de proteção são essenciais para garantir a segurança.",
              "Redes de polietileno com tratamento UV, resistentes ao tempo.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
