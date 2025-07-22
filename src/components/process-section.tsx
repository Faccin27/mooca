import { Calendar, Ruler, Wrench, CheckCircle2 } from 'lucide-react'
import ProcessStep from "@/components/ui/process-step"

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Agendamento",
    description: "Entre em contato conosco e agendamos uma visita técnica gratuita no seu imóvel.",
    color: "from-[#3b82f6] to-[#2563eb]",
  },
  {
    icon: Ruler,
    number: "02",
    title: "Medição",
    description: "Realizamos a medição precisa e apresentamos o orçamento detalhado sem compromisso.",
    color: "from-[#10b981] to-[#059669]",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Instalação",
    description: "Instalação profissional em até 24h com materiais certificados e equipe especializada.",
    color: "from-[#8b5cf6] to-[#7c3aed]",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Garantia",
    description: "Entregamos com 5 anos de garantia total e suporte pós-instalação completo.",
    color: "from-[#f59e0b] to-[#d97706]",
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/estetica.png')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#d1d5db] bg-clip-text text-transparent">
            Como Funciona
          </h2>
          <p className="text-xl text-[#d1d5db] max-w-3xl mx-auto">
            Processo simples e transparente para garantir a segurança da sua família
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}
