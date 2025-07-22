"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import WhatsappButton from "@/components/ui/WhatsappButton";
import type { HeroSlide } from "@/types";

const heroSlides: HeroSlide[] = [
  {
    image: "/images/estetica.png",
    title: "Redes de Proteção",
    subtitle: "para garantir a segurança das suas crianças e pets",
    description: "Atendemos São Paulo Capital e ABC Paulista",
    features: [
      "5 anos de garantia",
      "Instalação em 24h",
      "Material certificado",
    ],
  },
  {
    image: "/images/protecao-header.jpg",
    title: "Proteção Completa",
    subtitle: "para janelas, sacadas e varandas",
    description: "Soluções discretas que preservam a estética do seu lar",
    features: ["Design invisível", "Máxima resistência", "Fácil manutenção"],
  },
  {
    image: "/images/durabilidade.png",
    title: "Qualidade Garantida",
    subtitle: "materiais certificados e duradouros",
    description: "Redes que resistem ao tempo e às condições climáticas",
    features: ["INMETRO certificado", "UV resistente", "Anti-mofo"],
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <section className="relative h-[100dvh] overflow-hidden" id="inicio">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#552020]/90 via-[#552020]/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-white">
                  {heroSlides[currentSlide].title}
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#C4A484] to-[#C4A484]/80 bg-clip-text text-transparent">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
                {heroSlides[currentSlide].description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {heroSlides[currentSlide].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#C4A484] mr-2" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`https://wa.me/5511963403041?text=${encodeURIComponent(
                    "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação"
                  )}`}
                  target="_blank"
                  className="btn-whatsapp lg:h-14 lg:w-auto mb-6 lg:text-lg "
                >
                  Solicitar orçamento
                </Link>
                <Link
                  href={`https://wa.me/5511963403041?text=${encodeURIComponent(
                    "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação"
                  )}`}
                  target="_blank"
                  className="btn-whatsapp lg:h-14 lg:w-auto mb-6 lg:text-lg "
                >
                  Veja mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute hidden lg:block left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-lg hover:bg-white/20 transition-all duration-300 z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute hidden lg:block right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-lg hover:bg-white/20 transition-all duration-300 z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-lg transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/70 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Role para baixo</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-lg flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-lg mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
