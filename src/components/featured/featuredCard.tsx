"use client";

import { Check, Crown, Dot, X } from "lucide-react";

interface FeatureCardProps {
  name: string;
  price: string;
  highlight?: string;
  features?: boolean[];
  extras?: string[];
  onClick?: () => void;
}

export default function FeatureCard({
  name,
  price,
  highlight,
  features = [],
  extras = [],
  onClick,
}: FeatureCardProps) {
  return (
    <div className="relative rounded-2xl p-8 bg-[#552020] text-white shadow-2xl border-4 border-[#C4A484] w-full">
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C4A484] text-[#552020] px-4 py-2 rounded-full font-bold text-sm flex items-center text-nowrap">
          <Crown className="w-4 h-4 mr-2" />
          {highlight}
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
        <p className="text-3xl font-bold text-[#C4A484]">{price}</p>
      </div>

      {extras.length > 0 && (
        <div className="mb-8 bg-white/10 p-4 rounded-lg space-y-2 text-sm leading-relaxed">
          {extras.map((item, index) => (
            <p key={index} className="flex items-center">
              <Dot className="w-8 h-8 mr-2" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </p>
          ))}
        </div>
      )}

      {features.length > 0 && (
        <div className="space-y-4">
          {features.map((isAvailable, index) => (
            <div key={index} className="flex items-center">
              {isAvailable ? (
                <Check className="w-5 h-5 mr-3 text-[#C4A484]" />
              ) : (
                <X className="w-5 h-5 mr-3 text-[#ef4444]" />
              )}
              <span className="text-sm text-white">
                {
                  [
                    "Material certificado INMETRO",
                    "5 anos de garantia",
                    "Instalação em 24h",
                    "Suporte pós-venda",
                    "Orçamento gratuito",
                    "Equipe especializada",
                    "Pagamento facilitado",
                  ][index]
                }
              </span>
            </div>
          ))}
        </div>
      )}

      {onClick && (
        <div className="mt-8 text-center">
          <button
            onClick={onClick}
            className="cursor-pointer inline-block bg-[#C4A484] text-[#552020] font-bold px-6 py-3 rounded-lg hover:bg-[#C4A484]/90 transition-colors duration-300"
          >
            Escolher Mooca Redes
          </button>
        </div>
      )}
    </div>
  );
}
