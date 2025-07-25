"use client"

import { Check, X, Crown } from "lucide-react"

const features = [
  "Material certificado INMETRO",
  "5 anos de garantia",
  "Instalação em 24h",
  "Suporte pós-venda",
  "Orçamento gratuito",
  "Equipe especializada",
  "Pagamento facilitado",
  // Removed "Manutenção inclusa"
]

const competitors = [
  {
    name: "Mooca Redes",
    isUs: true,
    price: "A partir de R$ 45/m²",
    features: [true, true, true, true, true, true, true], // Updated features array length
    highlight: "Melhor Custo-Benefício",
  },
]

export default function ComparisonSection({ id }: { id?: string }) {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-br from-[#f8fafc] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#552020] to-[#552020]/70 bg-clip-text text-transparent">
            Por Que Somos a Melhor Escolha?
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Compare nossos serviços e veja por que mais de 1000 clientes nos escolheram
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Mooca Redes Column */}
          <div
            className={`relative rounded-2xl p-8 bg-gradient-to-br from-[#552020] to-[#552020]/90 text-white shadow-2xl scale-105 border-4 border-[#C4A484]`}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C4A484] text-[#552020] px-4 py-2 rounded-full font-bold text-sm flex items-center text-nowrap">
              <Crown className="w-4 h-4 mr-2" />
              {competitors[0].highlight}
            </div>

            <div className="text-center mb-8">
              <h3 className={`text-2xl font-bold mb-2 text-white`}>{competitors[0].name}</h3>
              <p className={`text-3xl font-bold text-[#C4A484]`}>{competitors[0].price}</p>
            </div>

            <div className="space-y-4">
              {features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center">
                  {competitors[0].features[featureIndex] ? (
                    <Check className={`w-5 h-5 mr-3 text-[#C4A484]`} />
                  ) : (
                    <X className="w-5 h-5 mr-3 text-[#ef4444]" />
                  )}
                  <span className={`text-sm text-white`}>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  window.open(
                    `https://wa.me/5511963403041?text=${encodeURIComponent(
                      "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação",
                    )}`,
                    "_blank",
                  )
                  window.location.href = "/enviar_mensagem"
                }}
                className="inline-block bg-[#C4A484] text-[#552020] font-bold px-6 py-3 rounded-lg hover:bg-[#C4A484]/90 transition-colors duration-300"
              >
                Escolher Mooca Redes
              </button>
            </div>
          </div>

          {/* Video Player */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e2e8f0] bg-white p-4">
            <h3 className="text-2xl font-bold text-center text-[#1e293b] mb-6">Assista ao Nosso Vídeo Explicativo</h3>
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example" // Placeholder YouTube video
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
            <p className="text-center text-[#64748b] mt-4 text-sm">
              Saiba mais sobre a qualidade e segurança das nossas redes de proteção.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
