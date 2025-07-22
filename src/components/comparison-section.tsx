import { Check, X, Crown } from 'lucide-react'

const features = [
  "Material certificado INMETRO",
  "5 anos de garantia",
  "Instalação em 24h",
  "Suporte pós-venda",
  "Orçamento gratuito",
  "Equipe especializada",
  "Pagamento facilitado",
  "Manutenção inclusa",
]

const competitors = [
  {
    name: "Mooca Redes",
    isUs: true,
    price: "A partir de R$ 45/m²",
    features: [true, true, true, true, true, true, true, true],
    highlight: "Melhor Custo-Benefício",
  },
  {
    name: "Concorrente A",
    isUs: false,
    price: "A partir de R$ 60/m²",
    features: [true, false, false, true, true, false, false, false],
    highlight: "",
  },
  {
    name: "Concorrente B",
    isUs: false,
    price: "A partir de R$ 55/m²",
    features: [false, true, false, false, true, true, false, false],
    highlight: "",
  },
]

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#f8fafc] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#552020] to-[#552020]/70 bg-clip-text text-transparent">
            Por Que Somos a Melhor Escolha?
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Compare nossos serviços e veja por que mais de 1000 clientes nos escolheram
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {competitors.map((competitor, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  competitor.isUs
                    ? "bg-gradient-to-br from-[#552020] to-[#552020]/90 text-white shadow-2xl scale-105 border-4 border-[#C4A484]"
                    : "bg-white shadow-lg border border-[#e2e8f0]"
                }`}
              >
                {competitor.isUs && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C4A484] text-[#552020] px-4 py-2 rounded-full font-bold text-sm flex items-center text-nowrap">
                    <Crown className="w-4 h-4 mr-2" />
                    {competitor.highlight}
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${competitor.isUs ? "text-white" : "text-[#1e293b]"}`}>
                    {competitor.name}
                  </h3>
                  <p className={`text-3xl font-bold ${competitor.isUs ? "text-[#C4A484]" : "text-[#552020]"}`}>
                    {competitor.price}
                  </p>
                </div>

                <div className="space-y-4">
                  {features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      {competitor.features[featureIndex] ? (
                        <Check className={`w-5 h-5 mr-3 ${competitor.isUs ? "text-[#C4A484]" : "text-[#10b981]"}`} />
                      ) : (
                        <X className="w-5 h-5 mr-3 text-[#ef4444]" />
                      )}
                      <span className={`text-sm ${competitor.isUs ? "text-white" : "text-[#64748b]"}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                {competitor.isUs && (
                  <div className="mt-8 text-center">
                    <a
                      href={`https://wa.me/5511963403041?text=${encodeURIComponent(
                        "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação",
                      )}`}
                      target="_blank"
                      className="inline-block bg-[#C4A484] text-[#552020] font-bold px-6 py-3 rounded-lg hover:bg-[#C4A484]/90 transition-colors duration-300"
                      rel="noreferrer"
                    >
                      Escolher Mooca Redes
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
