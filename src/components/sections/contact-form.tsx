"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  solutionOptions,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/contact-schema";
import { buildContactMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export function ContactForm() {
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);

  function clearError(field: keyof ContactFormData) {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (locked) return;

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const data: ContactFormData = {
      name: String(form.get("name") ?? ""),
      company: String(form.get("company") ?? ""),
      solution: String(form.get("solution") ?? ""),
      details: String(form.get("details") ?? ""),
    };
    const nextErrors = validateContactForm(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = (["name", "company", "solution", "details"] as const)
        .find((field) => Boolean(nextErrors[field]));
      window.requestAnimationFrame(() => {
        if (firstInvalidField) formElement.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)?.focus();
      });
      return;
    }

    setLocked(true);
    setFallbackUrl(null);
    const url = buildWhatsAppUrl(buildContactMessage(data));
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (!newWindow) setFallbackUrl(url);
    window.setTimeout(() => setLocked(false), 800);
  }

  function fieldError(id: string, message?: string) {
    return message ? <span id={id} className="field-error" role="alert">{message}</span> : null;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>
          <span>Seu nome <b aria-hidden="true">*</b></span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={() => clearError("name")}
            placeholder="Como podemos chamar você?"
          />
          {fieldError("name-error", errors.name)}
        </label>
        <label>
          <span>Empresa <em>opcional</em></span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            onChange={() => clearError("company")}
            placeholder="Nome da empresa"
          />
          {fieldError("company-error", errors.company)}
        </label>
      </div>

      <label>
        <span>Qual solução você procura? <b aria-hidden="true">*</b></span>
        <select
          name="solution"
          defaultValue=""
          aria-invalid={Boolean(errors.solution)}
          aria-describedby={errors.solution ? "solution-error" : undefined}
          onChange={() => clearError("solution")}
        >
          <option value="" disabled>Selecione uma opção</option>
          {solutionOptions.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
        {fieldError("solution-error", errors.solution)}
      </label>

      <label>
        <span>O que você quer melhorar? <b aria-hidden="true">*</b></span>
        <textarea
          name="details"
          rows={5}
          minLength={10}
          maxLength={700}
          aria-invalid={Boolean(errors.details)}
          aria-describedby={errors.details ? "details-hint details-error" : "details-hint"}
          onChange={() => clearError("details")}
          placeholder="Conte o problema, o objetivo ou a ideia que já tem em mente."
        />
        <small id="details-hint">Entre 10 e 700 caracteres. Uma ideia inicial já é suficiente.</small>
        {fieldError("details-error", errors.details)}
      </label>

      <button className="button button--primary form-submit" type="submit" disabled={locked}>
        Preparar minha mensagem <ArrowUpRight aria-hidden="true" size={18} />
      </button>
      <p className="form-note">Nada será enviado automaticamente. Você revisa a mensagem no WhatsApp.</p>

      {fallbackUrl ? (
        <p className="popup-fallback" role="alert">
          O navegador bloqueou a nova janela. <a href={fallbackUrl} target="_blank" rel="noreferrer">Abrir WhatsApp agora <ExternalLink aria-hidden="true" size={15} /></a>
        </p>
      ) : null}
    </form>
  );
}
