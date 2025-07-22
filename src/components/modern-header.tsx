"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Menu, X, Shield, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import WhatsappButton from "@/components/ui/WhatsappButton"

export default function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-primary" />
              <span>Atendimento 24h</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              <span>São Paulo e ABC</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-primary" />
              <span>5 Anos de Garantia</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="tel:+5511971423779"
              className="flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              (11) 97142-3779
            </a>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="relative w-12 h-12 mr-3">
              <Image
                src="/images/logo.png"
                alt="Mooca Redes Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Mooca Redes</h1>
              <p className="text-sm text-gray-600 hidden md:block">Proteção e Segurança</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Serviços
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href={`https://wa.me/5511963403041?text=${encodeURIComponent(
                "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação",
              )}`}
              target="_blank"
            >
              <Button className="btn-whatsapp text-white">Orçamento Grátis</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#sobre"
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#contato"
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="pt-4 mx-auto">
                <Link
                  href={`https://wa.me/5511963403041?text=${encodeURIComponent(
                    "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação",
                  )}`}
                  target="_blank"
                >
                  <WhatsappButton label="Orçamento Grátis" />
                </Link>
              </div>
              <div className="flex items-center justify-center pt-2">
                <a href="tel:+5511971423779" className="flex items-center text-primary font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  (11) 97142-3779
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
