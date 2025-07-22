"use client";

import { handleWhatsAppClick } from "@/utils/handleWhatsAppClick";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FloatingWhatsappIcon() {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    handleWhatsAppClick("Contato via WhatsApp (ícone flutuante)");

    window.open(
      `https://wa.me/5511971423779?text=${encodeURIComponent(
        "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação"
      )}`,
      "_blank"
    );

    router.push("/enviar_mensagem");
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 cursor-pointer hover:opacity-90 hover:scale-110 transform transition duration-150"
      style={{ zIndex: 9999 }}
    >
      <Link href="/enviar_mensagem" onClick={handleClick}>
        <Image
          src="/images/whatsapp.png"
          alt="Fale conosco pelo WhatsApp"
          width={45}
          height={45}
        />
      </Link>
    </div>
  );
}
