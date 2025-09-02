"use client";

import { scrollToForm } from "@/utils/scrollToForm";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center  overflow-hidden bg-gradient-to-br from-[#111827] via-[#552020] to-[#111827]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/estetica.png"
          alt="Redes de Proteção para garantir a segurança das suas crianças e pets"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#552020]/90 via-[#552020]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-24">
        <div className="container mx-auto sm:mx-[118px] px-4">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl mb-6 font-bold text-white leading-tight">
                <span className="text-white">Redes de Proteção</span>
                <br />
                <span className="bg-gradient-to-r from-[#C4A484] to-[#C4A484]/80 bg-clip-text text-transparent">
                  para garantir a segurança das suas crianças e pets
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
                Atendemos São Paulo Capital e ABC Paulista
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "5 anos de garantia",
                  "Instalação em 24h",
                  "Material certificado",
                ].map((feature, index) => (
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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToForm();
                  }}
                  className="btn-whatsapp lg:h-14 lg:w-auto lg:text-lg cursor-pointer"
                >
                  Solicitar Orçamento Gratuito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-1/2 text-white/70 animate-bounce">
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
