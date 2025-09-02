"use client";

import { scrollToForm } from "@/utils/scrollToForm";
import Image from "next/image";

export default function FloatingWhatsappIcon() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToForm();
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex justify-between items-center rounded-full pl-4 gap-2 text-white font-semibold animate-bounce bg-green-600 cursor-pointer hover:opacity-90 hover:scale-110 transform transition duration-150"
      style={{ zIndex: 9999 }}
      onClick={handleClick}
    >
      Fale Conosco
      <Image
        src="/images/whatsapp.png"
        alt="Fale conosco pelo WhatsApp"
        width={45}
        height={45}
      />
    </div>
  );
}
