import { siteConfig } from "@/config/site";

export type ContactPayload = {
  name: string;
  company?: string;
  solution: string;
  details: string;
};

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function buildContactMessage(data: ContactPayload) {
  const lines = [
    "Olá, JAGUARDEVS! Quero conversar sobre uma solução para minha empresa.",
    "",
    `Nome: ${data.name.trim()}`,
    data.company?.trim() ? `Empresa: ${data.company.trim()}` : null,
    `Solução de interesse: ${data.solution}`,
    `Objetivo ou problema: ${data.details.trim()}`,
  ];

  return lines.filter((line): line is string => line !== null).join("\n");
}

export const directWhatsAppUrl = buildWhatsAppUrl(
  "Olá, JAGUARDEVS! Quero entender qual solução faz sentido para minha empresa.",
);
