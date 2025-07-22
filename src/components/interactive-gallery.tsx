"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  { id: "all", name: "Todos", count: 8 },
  { id: "janelas", name: "Janelas", count: 4 },
  { id: "sacadas", name: "Sacadas", count: 3 },
  { id: "pets", name: "Pets", count: 1 },
]

const projects = [
  { id: 1, image: "/images/janela.png", category: "janelas", title: "Proteção para Janela", location: "Mooca - SP" },
  { id: 2, image: "/images/sacada.png", category: "sacadas", title: "Rede para Sacada", location: "Tatuapé - SP" },
  { id: 3, image: "/images/gato.png", category: "pets", title: "Proteção para Pets", location: "Vila Madalena - SP" },
  { id: 4, image: "/images/janela2.png", category: "janelas", title: "Janela Residencial", location: "Perdizes - SP" },
  { id: 5, image: "/images/sacada2.png", category: "sacadas", title: "Sacada com Vista", location: "Morumbi - SP" },
  { id: 6, image: "/images/varanda.png", category: "sacadas", title: "Varanda Gourmet", location: "Itaim Bibi - SP" },
  { id: 7, image: "/images/quarto.png", category: "janelas", title: "Quarto Infantil", location: "Vila Alpina - SP" },
  { id: 8, image: "/images/teste.png", category: "janelas", title: "Segurança na sua Janela", location: "Santo André - SP" },
]

export default function InteractiveGallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredProjects.findIndex((p) => p.id === selectedImage)
      const nextIndex = (currentIndex + 1) % filteredProjects.length
      setSelectedImage(filteredProjects[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredProjects.findIndex((p) => p.id === selectedImage)
      const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
      setSelectedImage(filteredProjects[prevIndex].id)
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#552020] to-[#552020]/70 bg-clip-text text-transparent">
            Nossos Projetos
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Veja alguns dos nossos trabalhos realizados com excelência em toda região de São Paulo
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#552020] text-white shadow-lg scale-105"
                  : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(project.id)}
            >
              <div className="aspect-square relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-sm text-[#d1d5db]">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#d1d5db] z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#d1d5db] z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#d1d5db] z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative max-w-4xl max-h-[80vh]">
              {filteredProjects.find((p) => p.id === selectedImage) && (
                <Image
                  src={filteredProjects.find((p) => p.id === selectedImage)!.image || "/placeholder.svg"}
                  alt="Project"
                  width={800}
                  height={600}
                  className="object-contain max-h-[80vh] rounded-lg"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
