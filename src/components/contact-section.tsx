"use client"

import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Phone,
    title: "Telefone",
    info: "(11) 97142-3779",
    description: "Ligue agora mesmo",
    action: "tel:+5511971423779",
    color: "from-[#3b82f6] to-[#2563eb]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    info: "(11) 96340-3041",
    description: "Resposta imediata",
    action: `https://wa.me/5511963403041?text=${encodeURIComponent(
      "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação",
    )}`,
    color: "from-[#10b981] to-[#059669]",
  },
  {
    icon: Mail,
    title: "E-mail",
    info: "contato@moocaredes.com.br",
    description: "Envie sua mensagem",
    action: "mailto:contato@moocaredes.com.br",
    color: "from-[#8b5cf6] to-[#7c3aed]",
  },
]

const serviceAreas = [
  "São Paulo Capital",
  "Santo André",
  "São Bernardo do Campo",
  "São Caetano do Sul",
  "Diadema",
  "Mauá",
  "Ribeirão Pires",
  "Rio Grande da Serra",
]

export default function ContactSection() {
  return (
    <section
      className="pt-24 pb-12 bg-gradient-to-br from-[#111827] via-[#552020] to-[#111827] text-white relative overflow-hidden"
      id="contato"
    >
      <div className="absolute inset-0 bg-[url('/images/protecao-header.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#d1d5db] bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-xl text-[#d1d5db] max-w-3xl mx-auto">
            Estamos prontos para atender você e garantir a segurança da sua família
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactMethods.map((method, index) =>
                method.title === "WhatsApp" ? (
                  <button
                    key={index}
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
                    className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 w-full text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-[#10b981] to-[#059669] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                        <p className="text-[#C4A484] font-semibold">(11) 96340-3041</p>
                        <p className="text-[#d1d5db] text-sm">Resposta imediata</p>
                      </div>
                    </div>
                  </button>
                ) : (
                  <a
                    key={index}
                    href={method.action}
                    target={method.title === "WhatsApp" ? "_blank" : undefined}
                    className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`bg-gradient-to-r ${method.color} p-4 rounded-full group-hover:scale-110 transition-transform duration-300`}
                      >
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{method.title}</h3>
                        <p className="text-[#C4A484] font-semibold">{method.info}</p>
                        <p className="text-[#d1d5db] text-sm">{method.description}</p>
                      </div>
                    </div>
                  </a>
                ),
              )}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-[#C4A484] mr-3" />
                <h3 className="text-xl font-bold">Horário de Atendimento</h3>
              </div>
              <div className="space-y-2 text-[#d1d5db]">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 14h</p>
                <p>Domingo: Plantão WhatsApp</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-[#C4A484] mr-3" />
                <h3 className="text-2xl font-bold">Áreas de Atendimento</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#C4A484] rounded-full mr-3"></div>
                    <span className="text-[#d1d5db]">{area}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
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
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 lg:h-14 lg:w-auto lg:text-lg min-w-[280px]"
                >
                  Solicitar Orçamento Gratuito
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#C4A484]/20 to-[#C4A484]/10 rounded-2xl p-8 border border-[#C4A484]/30">
              <h3 className="text-2xl font-bold mb-4 text-center">Orçamento Gratuito</h3>
              <ul className="space-y-3 text-[#d1d5db]">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#C4A484] rounded-full mr-3"></div>
                  Visita técnica sem compromisso
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#C4A484] rounded-full mr-3"></div>
                  Medição precisa e detalhada
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#C4A484] rounded-full mr-3"></div>
                  Orçamento transparente
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#C4A484] rounded-full mr-3"></div>
                  Consultoria especializada
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer movido para dentro da div com z-10 */}
        <div className="justify-center text-center mt-12">
          <p className="text-gray-400">
            © 2025 Site desenvolvido pela
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:opacity-80 font-medium"
              href="https://gwapo-two.vercel.app/"
            >
              {" "}
              GWAPO
            </Link>
            . Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}
