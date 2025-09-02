"use client";

import emailjs from "@emailjs/browser";
import { Mail, Phone, Send, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  // Função para aplicar máscara no celular
  const formatPhoneNumber = (value: string): string => {
    // Remove todos os caracteres não numéricos
    const numbers = value.replace(/\D/g, "");

    // Aplica a máscara baseada no tamanho
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(
        7
      )}`;
    } else {
      // Limita a 11 dígitos
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(
        7,
        11
      )}`;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Celular é obrigatório";
    } else {
      // Remove formatação para validar apenas números
      const phoneNumbers = formData.phone.replace(/\D/g, "");
      if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
        newErrors.phone = "Celular deve ter 10 ou 11 dígitos";
      }
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Formato de email inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async () => {
    try {
      emailjs.init("-I_ftNaNWhsOKMeYR");

      const templateParams = {
        NOME_CLIENTE: formData.name,
        CELULAR_CLIENTE: formData.phone,
        EMAIL_CLIENTE: formData.email || "Não informado",
        MENSAGEM: `Novo contato do site:\n\nNome: ${formData.name}\nTelefone: ${
          formData.phone
        }\nEmail: ${
          formData.email || "Não informado"
        }\n\nSolicitação: Orçamento para redes de proteção`,
      };

      const result = await emailjs.send(
        "service_zywauhl",
        "template_vuvdmlj", // Substitua pelo ID do seu template
        templateParams
      );

      console.log("Email enviado com sucesso:", result.text);
      return true;
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Enviar email via EmailJS
      await sendEmail();

      // Abrir WhatsApp
      const message = `Olá! Meu nome é ${formData.name}, meu celular é ${
        formData.phone
      }${
        formData.email ? ` e meu email é ${formData.email}` : ""
      }. Gostaria de solicitar um orçamento para redes de proteção.`;
      const whatsappUrl = `https://wa.me/5511971423779?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank");

      // Redirecionar para página de obrigado
      router.push("/enviar_mensagem");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handlePhoneChange = (value: string) => {
    const formattedPhone = formatPhoneNumber(value);
    handleInputChange("phone", formattedPhone);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Send className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Mensagem Enviada!
        </h3>
        <p className="text-[#d1d5db]">
          Você será redirecionado para o WhatsApp em instantes.
        </p>
      </div>
    );
  }

  return (
    <div
      id="contact-form"
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          Solicite seu Orçamento
        </h3>
        <p className="text-[#d1d5db]">
          Preencha os dados abaixo e entraremos em contato
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo Nome */}
        <div>
          <label htmlFor="name" className="block text-white font-semibold mb-2">
            Nome *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="w-5 h-5 text-[#C4A484]" />
            </div>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm border rounded-lg text-white placeholder-[#d1d5db] focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#C4A484]/30 focus:ring-[#C4A484] focus:border-[#C4A484]"
              }`}
              placeholder="Digite seu nome completo"
            />
          </div>
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Campo Celular com Máscara */}
        <div>
          <label
            htmlFor="phone"
            className="block text-white font-semibold mb-2"
          >
            Celular *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="w-5 h-5 text-[#C4A484]" />
            </div>
            <input
              required
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm border rounded-lg text-white placeholder-[#d1d5db] focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#C4A484]/30 focus:ring-[#C4A484] focus:border-[#C4A484]"
              }`}
              placeholder="(11) 99999-9999"
              maxLength={15}
            />
          </div>
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-white font-semibold mb-2"
          >
            Email <span className="text-[#d1d5db] font-normal">(opcional)</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-[#C4A484]" />
            </div>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm border rounded-lg text-white placeholder-[#d1d5db] focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#C4A484]/30 focus:ring-[#C4A484] focus:border-[#C4A484]"
              }`}
              placeholder="seu@email.com"
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Enviar via WhatsApp</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-[#d1d5db] text-sm">
          Ao enviar, você será redirecionado para o WhatsApp com suas
          informações preenchidas.
        </p>
      </div>
    </div>
  );
}
