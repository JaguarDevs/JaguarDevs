import { describe, expect, it } from "vitest";
import { buildContactMessage, buildWhatsAppUrl } from "./whatsapp";

describe("WhatsApp helpers", () => {
  it("gera a URL com o número oficial e mensagem codificada", () => {
    const url = buildWhatsAppUrl("Olá! Quero um site & sistema.");

    expect(url).toBe(
      "https://wa.me/5588992711231?text=Ol%C3%A1!%20Quero%20um%20site%20%26%20sistema.",
    );
  });

  it("monta uma mensagem legível sem linha de empresa quando ela não foi informada", () => {
    const message = buildContactMessage({
      name: "Ana",
      solution: "Sistema personalizado",
      details: "Quero organizar o fluxo comercial.",
    });

    expect(message).toContain("Nome: Ana");
    expect(message).toContain("Solução de interesse: Sistema personalizado");
    expect(message).not.toContain("Empresa:");
  });
});
