# JAGUARDEVS — orientações permanentes

## Estrutura

- `src/app`: página, layout, SEO global, sitemap, robots e estilos.
- `src/components`: layout, seções, animações e primitives.
- `src/config/site.ts`: fonte única para domínio, WhatsApp, navegação e contatos.
- `src/content/home.ts`: conteúdo repetível e tipado.
- `src/lib`: validação e integração com WhatsApp.
- `public/brand`: cópias organizadas dos assets oficiais; preserve `logos/`.

## Comandos

Use `npm run lint`, `npm run typecheck`, `npm test` e `npm run build` antes de entregar mudanças relevantes.

## Regras da marca

- Manter o posicionamento em profissionalismo, identidade e suporte.
- Escrever em português do Brasil, com clareza e sem promessas não comprovadas.
- Não inventar clientes, resultados, cases, depoimentos, números ou canais de contato.
- Preservar as proporções do logo e os tokens da identidade em `globals.css`.
- Manter acessibilidade, `prefers-reduced-motion` e funcionamento mobile.
- Centralizar dados mutáveis; não repetir domínio ou WhatsApp em componentes.
