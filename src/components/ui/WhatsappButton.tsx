"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { handleWhatsAppClick } from "@/utils/handleWhatsAppClick"
import { useRouter } from "next/navigation"

interface WhatsappButtonProps {
  label: string
}

export default function WhatsappButton({ label }: WhatsappButtonProps) {
  const router = useRouter()

  const handleClick = async (e: React.MouseEvent) => {
    handleWhatsAppClick(label)

    window.open(
      `https://wa.me/5511971423779?text=${encodeURIComponent(
        "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação",
      )}`,
      "_blank",
    )

    router.push("/enviar_mensagem")

    e.preventDefault()
  }

  return (
    <Button onClick={handleClick} size="lg" className="btn-whatsapp cursor-pointer lg:h-14 lg:w-auto lg:text-lg min-w-[280px]">
      {label}
    </Button>
  )
}
