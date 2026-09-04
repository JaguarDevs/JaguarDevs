export const siteConfig = {
  name: "JAGUARDEVS",
  domain: "jaguardevs.com.br",
  url: "https://jaguardevs.com.br",
  description:
    "Sites profissionais, sistemas sob medida e automações para empresas que querem fortalecer sua presença, organizar a operação e reduzir tarefas manuais.",
  whatsapp: {
    display: "(88) 99271-1231",
    number: "5588992711231",
  },
  social: {
    instagram: null,
    email: null,
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Processo", href: "#processo" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
} as const;

export const brandAssets = {
  horizontal: "/brand/jaguardevs-horizontal.png",
  symbol: "/brand/jaguardevs-symbol.png",
  stacked: "/brand/jaguardevs-stacked.png",
} as const;
