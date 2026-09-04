import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "./contact-form";

describe("ContactForm", () => {
  afterEach(() => vi.restoreAllMocks());

  it("valida campos obrigatórios sem abrir o WhatsApp", async () => {
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<ContactForm />);

    fireEvent.click(screen.getByRole("button", { name: /preparar minha mensagem/i }));

    expect(await screen.findByText("Digite seu nome para continuar.")).toBeInTheDocument();
    expect(screen.getByText("Escolha a opção que mais se aproxima do que você precisa.")).toBeInTheDocument();
    await waitFor(() => expect(screen.getByLabelText(/seu nome/i)).toHaveFocus());
    expect(open).not.toHaveBeenCalled();
  });

  it("abre o WhatsApp com as respostas organizadas", async () => {
    const open = vi.spyOn(window, "open").mockReturnValue({} as Window);
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/seu nome/i), { target: { value: "Marina" } });
    fireEvent.change(screen.getByLabelText(/qual solução você procura/i), { target: { value: "Automação ou integração" } });
    fireEvent.change(screen.getByLabelText(/o que você quer melhorar/i), { target: { value: "Quero integrar meus pedidos ao sistema atual." } });
    fireEvent.click(screen.getByRole("button", { name: /preparar minha mensagem/i }));

    await waitFor(() => expect(open).toHaveBeenCalledOnce());
    const url = String(open.mock.calls[0][0]);
    expect(url).toContain("https://wa.me/5588992711231");
    expect(decodeURIComponent(url)).toContain("Nome: Marina");
    expect(decodeURIComponent(url)).toContain("Automação ou integração");
  });
});
