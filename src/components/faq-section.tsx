"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Qual é o prazo para instalação das redes de proteção?",
    answer:
      "Realizamos a instalação em até 24 horas após a aprovação do orçamento. Para projetos maiores, o prazo pode ser de 2 a 3 dias úteis.",
  },
  {
    question: "As redes de proteção comprometem a estética do ambiente?",
    answer:
      "Não! Nossas redes são discretas e praticamente invisíveis. Utilizamos materiais de alta qualidade que preservam a beleza do seu ambiente.",
  },
  {
    question: "Qual é a garantia oferecida?",
    answer:
      "Oferecemos 5 anos de garantia total, cobrindo tanto o material quanto a instalação. É uma das maiores garantias do mercado.",
  },
  {
    question: "As redes resistem às condições climáticas?",
    answer:
      "Sim! Nossas redes são certificadas e resistem a chuva, sol, vento e variações de temperatura. São tratadas contra raios UV e fungos.",
  },
  {
    question: "Como é feito o orçamento?",
    answer:
      "O orçamento é gratuito! Agendamos uma visita técnica, realizamos as medições e apresentamos um orçamento detalhado sem compromisso.",
  },
  {
    question: "Vocês atendem em quais regiões?",
    answer:
      "Atendemos toda a região de São Paulo Capital e ABC Paulista, incluindo Mooca, Tatuapé, Vila Madalena, Santo André, São Bernardo e muitas outras.",
  },
  {
    question: "É possível parcelar o pagamento?",
    answer:
      "Sim! Parcelamos em até 12x no cartão de crédito sem juros. Também aceitamos PIX, dinheiro e transferência bancária.",
  },
  {
    question: "As redes são seguras para pets?",
    answer:
      "Absolutamente! Nossas redes são especialmente projetadas para proteger pets, impedindo quedas e fugas sem causar ferimentos.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#552020]/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#552020] to-[#552020]/70 bg-clip-text text-transparent leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">Tire suas dúvidas sobre nossos serviços e produtos</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-[#f1f5f9] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#552020]/10"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#f8fafc] transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-[#1e293b] pr-4 leading-relaxed group-hover:text-[#552020] transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className={`transition-all duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-[#552020] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#552020] flex-shrink-0" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="pt-2 border-t border-[#f1f5f9]">
                      <p className="text-[#64748b] leading-relaxed animate-fade-in">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#64748b] mb-6">Não encontrou sua pergunta?</p>
            <a
              href={`https://wa.me/5511963403041?text=${encodeURIComponent(
                "Tenho uma dúvida sobre redes de proteção",
              )}`}
              target="_blank"
              className="btn-whatsapp inline-block transform hover:scale-105 transition-all duration-300"
              rel="noreferrer"
            >
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </section>
  )
}
