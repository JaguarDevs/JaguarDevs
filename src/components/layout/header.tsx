"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { brandAssets, siteConfig } from "@/config/site";
import { directWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressBar = useRef<HTMLDivElement>(null);
  const scrolledState = useRef(false);
  const animationFrame = useRef<number | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (animationFrame.current !== null) return;
      animationFrame.current = window.requestAnimationFrame(() => {
        const distance = document.documentElement.scrollHeight - window.innerHeight;
        const progress = distance > 0 ? Math.min(window.scrollY / distance, 1) : 0;
        progressBar.current?.style.setProperty("--scroll-progress", String(progress));
        const nextScrolled = window.scrollY > 24;
        if (nextScrolled !== scrolledState.current) {
          scrolledState.current = nextScrolled;
          setScrolled(nextScrolled);
        }
        animationFrame.current = null;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrame.current !== null) window.cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const focusFrame = window.requestAnimationFrame(() => firstLink.current?.focus({ preventScroll: true }));
    const outsideMenu = document.querySelectorAll<HTMLElement>("main, footer");
    outsideMenu.forEach((element) => { element.inert = true; });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.classList.remove("menu-open");
      outsideMenu.forEach((element) => { element.inert = false; });
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div ref={progressBar} className="scroll-progress" aria-hidden="true" />
      <div className="container site-header__inner">
        <a className="brand-link" href="#inicio" aria-label="JAGUARDEVS — voltar ao início">
          <Image src={brandAssets.horizontal} width={220} height={110} alt="JAGUARDEVS" priority />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {siteConfig.nav.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-cta" href={directWhatsAppUrl} target="_blank" rel="noreferrer">
          Quero uma solução
        </a>

        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Navegação mobile">
          {siteConfig.nav.map((item, index) => (
            <a
              ref={index === 0 ? firstLink : undefined}
              href={item.href}
              key={item.href}
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
            >
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>
        <a
          className="button button--primary"
          href={directWhatsAppUrl}
          target="_blank"
          rel="noreferrer"
          tabIndex={open ? 0 : -1}
          onClick={closeMenu}
        >
          Quero uma solução sob medida
        </a>
      </div>
    </header>
  );
}
