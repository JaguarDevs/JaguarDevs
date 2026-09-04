"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import { brandAssets } from "@/config/site";
import { trustItems } from "@/content/home";
import { directWhatsAppUrl } from "@/lib/whatsapp";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.208-.242-.58-.487-.501-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.897 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.488-8.413Z"
      />
    </svg>
  );
}

export function Hero() {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  }

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="eyebrow hero-enter hero-enter--eyebrow">
            <span aria-hidden="true">{"//"}</span> Sites, sistemas e automações sob medida <i /> Atendimento em todo o Brasil
          </p>
          <h1 id="hero-title" className="hero-enter hero-enter--title">
            Sua empresa mais profissional por fora. <span>Mais eficiente por dentro.</span>
          </h1>
          <p className="hero__lead hero-enter hero-enter--lead">
            Criamos sites, sistemas e automações sob medida para fortalecer sua presença, organizar a operação e reduzir tarefas manuais com acompanhamento do planejamento ao suporte.
          </p>
          <div className="hero__actions hero-enter hero-enter--actions">
            <a
              className="button button--primary hero__whatsapp"
              href={directWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Quero uma solução sob medida pelo WhatsApp (abre em uma nova aba)"
            >
              <span className="hero__whatsapp-icon" aria-hidden="true"><WhatsAppIcon /></span>
              <span>Quero uma solução sob medida</span>
            </a>
          </div>
        </div>

        <div
          className="hero-visual hero-enter hero-enter--visual"
          onPointerMove={handlePointerMove}
          aria-hidden="true"
        >
          <div className="hero-visual__spotlight" />
          <div className="speed-lines speed-lines--top"><i /><i /><i /></div>
          <div className="speed-lines speed-lines--bottom"><i /><i /><i /></div>
          <div className="hero-visual__orbit hero-visual__orbit--one" />
          <div className="hero-visual__orbit hero-visual__orbit--two" />
          <span className="hero-visual__tag hero-visual__tag--top">&lt; presença profissional /&gt;</span>
          <span className="hero-visual__tag hero-visual__tag--right">fluxo conectado</span>
          <span className="hero-visual__tag hero-visual__tag--bottom">operação organizada</span>
          <Image
            src={brandAssets.symbol}
            width={500}
            height={500}
            alt=""
            priority
            sizes="(max-width: 768px) 88vw, 44vw"
          />
          <div className="data-path data-path--one" />
          <div className="data-path data-path--two" />
        </div>
      </div>

      <div className="container hero-trust hero-enter hero-enter--trust">
        <span className="hero-trust__label">Você conta com</span>
        <div>
          {trustItems.map((item) => <span key={item}><i aria-hidden="true" />{item}</span>)}
        </div>
      </div>
    </section>
  );
}
