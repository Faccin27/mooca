"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "Mooca - SP",
    rating: 5,
    text: "Excelente serviço! A instalação foi rápida e o resultado ficou perfeito. Agora tenho total tranquilidade com meus filhos brincando perto das janelas.",
    service: "Redes para Janelas",
  },
  {
    id: 2,
    name: "João Santos",
    location: "Tatuapé - SP",
    rating: 5,
    text: "Profissionais muito competentes e pontuais. A rede ficou praticamente invisível e a qualidade do material é excelente. Recomendo!",
    service: "Proteção para Sacada",
  },
  {
    id: 3,
    name: "Ana Costa",
    location: "Vila Madalena - SP",
    rating: 5,
    text: "Meu gato agora pode ficar na varanda com total segurança. O atendimento foi impecável desde o orçamento até a instalação.",
    service: "Proteção para Pets",
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    location: "Santo André - SP",
    rating: 5,
    text: "Preço justo, material de qualidade e instalação perfeita. Já indiquei para vários amigos e todos ficaram satisfeitos.",
    service: "Redes Residenciais",
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#552020]/5 via-white to-[#C4A484]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#552020] to-[#552020]/70 bg-clip-text text-transparent">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Mais de 1000 famílias já confiam na nossa qualidade e segurança
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-[#552020]/20" />

            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#fbbf24] fill-current" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-[#64748b] leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="flex items-center justify-center space-x-4">
                <div className="text-left">
                  <h4 className="font-bold text-lg text-[#1e293b]">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-[#64748b]">{testimonials[currentTestimonial].location}</p>
                  <p className="text-sm text-[#552020] font-medium">{testimonials[currentTestimonial].service}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-[#552020]/10 text-[#552020] hover:bg-[#552020] hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-[#552020] scale-125" : "bg-[#d1d5db]"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-[#552020]/10 text-[#552020] hover:bg-[#552020] hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
