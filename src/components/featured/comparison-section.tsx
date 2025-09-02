"use client";

import {
  Award,
  CheckCircle,
  Clock,
  Crown,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";

import { scrollToForm } from "@/utils/scrollToForm";

const features = [true, true, true, true, true, true, true];

export default function ComparisonSection() {
  return (
    <section
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100"
      id="sobre"
    >
      <div className="container mx-auto px-4">
        {/* Header simplificado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#552020]/10 text-[#552020] px-4 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              Segurança Garantida
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#552020] leading-tight">
            Por Que Escolher a
            <span className="block bg-gradient-to-r from-[#C4A484] to-[#552020] bg-clip-text text-transparent">
              Mooca Redes?
            </span>
          </h2>

          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Mais de{" "}
            <span className="font-bold text-[#C4A484]">100 famílias</span>{" "}
            protegidas com a melhor qualidade e preço do mercado
          </p>
        </div>

        {/* Layout principal - Card central destacado */}
        <div className="max-w-6xl mx-auto">
          {/* Card principal centralizado */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto rounded-3xl p-8 bg-[#552020] text-white border-2 border-[#C4A484] shadow-2xl ">
              {/* Badge de destaque */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-[#C4A484] text-[#552020] px-6 py-3 rounded-full font-bold text-sm flex items-center whitespace-nowrap shadow-lg">
                  <Crown className="w-4 h-4 mr-2" />
                  Melhor Custo-Benefício
                </div>
              </div>

              {/* Conteúdo principal */}
              <div className="text-center mb-8 pt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-[#C4A484] text-[#552020] shadow-lg">
                  <Star className="w-8 h-8" />
                </div>

                <h3 className="text-3xl font-bold mb-2">Mooca Redes</h3>
                <p className="text-[#C4A484] font-medium mb-3">
                  Líder em Proteção Residencial
                </p>
                <div className="text-4xl font-bold text-[#C4A484] mb-6">
                  A partir de R$ 45/m²
                </div>

                {/* Botão de ação principal */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToForm();
                  }}
                  className="w-full inline-flex items-center justify-center gap-3 font-bold px-8 py-4 rounded-2xl bg-[#C4A484] text-[#552020] hover:bg-[#C4A484]/90 shadow-lg hover:shadow-xl hover:scale-95 transition-all duration-300 group cursor-pointer"
                >
                  <Phone className="w-5 h-5" />
                  <span>Solicitar Orçamento Grátis</span>
                </button>

                <p className="text-xs text-[#C4A484] mt-2 font-medium">
                  ⚡ Resposta em menos de 10 minutos
                </p>
              </div>
            </div>
          </div>

          {/* Grid de benefícios */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Qualidade */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#C4A484]/50 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#552020]/10 text-[#552020] mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#552020] mb-2">
                  Qualidade Superior
                </h4>
                <p className="text-[#C4A484] font-semibold text-sm">
                  Certificação INMETRO
                </p>
              </div>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C4A484]"></div>
                  <span>
                    Suporta até <strong>500kg</strong> de tração
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C4A484]"></div>
                  <span>Tratamento UV anti-desbotamento</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C4A484]"></div>
                  <span>
                    <strong>5 anos</strong> de garantia total
                  </span>
                </li>
              </ul>
            </div>

            {/* Instalação */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#C4A484]/50 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#552020]/10 text-[#552020] mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#552020] mb-2">
                  Instalação Rápida
                </h4>
                <p className="text-[#C4A484] font-semibold text-sm">
                  Em até 24 horas
                </p>
              </div>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C4A484]"></div>
                  <span>Equipe especializada</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C4A484]"></div>
                  <span>Sem sujeira na sua casa</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C4A484]"></div>
                  <span>Suporte pós-venda</span>
                </li>
              </ul>
            </div>

            {/* Segurança */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#C4A484]/50 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#552020]/10 text-[#552020] mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#552020] mb-2">
                  Proteção Total
                </h4>
                <p className="text-[#C4A484] font-semibold text-sm">
                  Para sua família
                </p>
              </div>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C4A484]"></div>
                  <span>
                    Ideal para <strong>crianças</strong> e <strong>pets</strong>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C4A484]"></div>
                  <span>Design discreto e elegante</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C4A484]"></div>
                  <span>Resistente ao tempo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer com stats */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              <div className="flex items-center gap-2 text-[#552020]">
                <Users className="w-5 h-5 text-[#C4A484]" />
                <span className="font-bold text-xl">100+</span>
                <span className="text-[#64748b]">Clientes</span>
              </div>
              <div className="flex items-center gap-2 text-[#552020]">
                <Star className="w-5 h-5 text-[#C4A484]" />
                <span className="font-bold text-xl">5.0</span>
                <span className="text-[#64748b]">Avaliação</span>
              </div>
              <div className="flex items-center gap-2 text-[#552020]">
                <Award className="w-5 h-5 text-[#C4A484]" />
                <span className="font-bold text-xl">5 Anos</span>
                <span className="text-[#64748b]">Garantia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
