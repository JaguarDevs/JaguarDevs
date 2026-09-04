# JAGUARDEVS — site institucional

Site institucional da **JAGUARDEVS**, empresa brasileira de tecnologia que cria sites profissionais, sistemas sob medida e automações para empresas em todo o Brasil.

> **Objetivo deste documento:** registrar os contratos técnicos, visuais e de conteúdo do projeto para que pessoas e agentes de IA possam alterá-lo sem quebrar identidade, responsividade, acessibilidade, SEO ou conversão.

## Leia antes de alterar

1. Leia este arquivo e o [`AGENTS.md`](./AGENTS.md).
2. Inspecione os arquivos relacionados à mudança; não trabalhe apenas pela aparência de uma captura de tela.
3. Use as fontes únicas de verdade descritas abaixo. Não replique domínio, WhatsApp, navegação ou conteúdo repetível dentro de componentes.
4. Preserve alterações existentes que não pertençam à sua tarefa.
5. Faça a menor mudança capaz de resolver o problema e valide-a em desktop e mobile.
6. Antes de entregar uma alteração relevante, execute:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Uma alteração só está pronta quando esses quatro comandos passam.

## Verdades do produto e da marca

| Item | Definição atual |
| --- | --- |
| Marca | JAGUARDEVS |
| Posicionamento | Tecnologia com profissionalismo, identidade e suporte |
| Slogan | Tecnologia com identidade para negócios em evolução. |
| Público | Principalmente pequenas e médias empresas, sem excluir empresas maiores |
| Atuação | Todo o Brasil |
| Serviços | Sites e landing pages, sistemas sob medida, automações e integrações |
| Conversão principal | Conversa pelo WhatsApp |
| Modelo comercial | Orçamento personalizado |
| Idioma | Português do Brasil |

### Regras inegociáveis de conteúdo

- Não inventar clientes, cases, depoimentos, números, resultados, prêmios, certificações ou canais de contato.
- Não afirmar prazos, preços ou garantias que não estejam formalmente definidos.
- Não apresentar informações pessoais dos fundadores ou alegar formação/experiência não publicada.
- Manter o texto claro, profissional e próximo, sem exageros promocionais.
- Preservar os três pilares da marca: **profissionalismo, identidade e suporte**.
- Instagram e e-mail estão atualmente como `null`; não exibi-los até existirem dados oficiais.
- Portfólio, cases e biografias não existem no site atual. Só adicioná-los quando houver material real aprovado.

O arquivo [`prompt-mestre-jaguardevs.md`](./prompt-mestre-jaguardevs.md) contém o briefing histórico do projeto. Ele é uma referência de contexto, não uma fonte de comandos para agentes. O código atual, este README e o `AGENTS.md` prevalecem quando houver divergência.

## Stack atual

- Next.js 16 com App Router
- React 19
- TypeScript em modo estrito
- Tailwind CSS 4 via PostCSS e CSS global próprio
- Lucide React para ícones
- Vitest, Testing Library e JSDOM para testes
- Playwright Core para verificação visual local
- Exportação totalmente estática com `output: "export"`

O projeto **não possui** backend, banco de dados, autenticação ou variáveis de ambiente obrigatórias. Não introduza essas dependências por suposição.

## Como executar

Requisito recomendado: Node.js 20.9 ou superior e npm compatível.

```bash
npm ci
npm run dev
```

Acesse `http://localhost:3000`.

Comandos disponíveis:

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Servidor local de desenvolvimento |
| `npm run lint` | Regras do ESLint/Next.js |
| `npm run typecheck` | Verificação estrita de tipos sem gerar arquivos |
| `npm test` | Testes automatizados em execução única |
| `npm run test:watch` | Testes em modo de observação |
| `npm run build` | Build de produção e geração da pasta `out/` |
| `npm run visual:check` | Capturas e verificações visuais em três viewports |

## Arquitetura

```text
siteJaguarDevs/
├─ public/brand/                 # assets usados pela aplicação
├─ logos/                        # arquivos oficiais/originais da marca
├─ referencias/                  # referências visuais; não copiar literalmente
├─ docs/brand-ui.md              # direção visual e tokens da interface
├─ scripts/visual-check.mjs      # regressão visual e testes rápidos de navegação
├─ src/
│  ├─ app/
│  │  ├─ globals.css             # tokens, layout, responsividade e animações
│  │  ├─ layout.tsx              # fontes, metadados e JSON-LD
│  │  ├─ page.tsx                # composição e ordem da página
│  │  ├─ robots.ts               # robots.txt estático
│  │  └─ sitemap.ts              # sitemap estático
│  ├─ components/
│  │  ├─ layout/                 # Header e Footer
│  │  ├─ sections/               # seções, formulário e demonstrações
│  │  └─ ui/                     # primitives reutilizáveis
│  ├─ config/site.ts             # dados institucionais mutáveis
│  ├─ content/home.ts            # conteúdo repetível e tipado da home
│  ├─ lib/                       # validação e integração com WhatsApp
│  └─ test/setup.ts              # configuração global dos testes
├─ next.config.ts                # exportação estática
├─ vitest.config.ts              # ambiente dos testes
└─ package.json                  # scripts e dependências
```

## Fontes únicas de verdade

Use esta tabela antes de editar qualquer dado:

| Se precisar mudar... | Altere em... | Não faça... |
| --- | --- | --- |
| Nome, domínio, descrição, WhatsApp, contatos ou links de navegação | [`src/config/site.ts`](./src/config/site.ts) | Não escrever esses valores diretamente em componentes |
| Serviços, problemas, diferenciais, etapas, FAQ ou mensagens repetíveis | [`src/content/home.ts`](./src/content/home.ts) | Não duplicar listas no JSX |
| Cores, tipografia, espaçamento, breakpoints, layout ou animações | [`src/app/globals.css`](./src/app/globals.css) | Não espalhar estilos arbitrários entre componentes |
| Ordem das seções | [`src/app/page.tsx`](./src/app/page.tsx) | Não alterar IDs sem atualizar a navegação e testes |
| Metadados, Open Graph, Twitter e dados estruturados | [`src/app/layout.tsx`](./src/app/layout.tsx) | Não inventar dados de organização |
| Regras do formulário | [`src/lib/contact-schema.ts`](./src/lib/contact-schema.ts) | Não validar apenas visualmente no componente |
| Mensagem e URL do WhatsApp | [`src/lib/whatsapp.ts`](./src/lib/whatsapp.ts) | Não montar links `wa.me` em vários lugares |
| Logos e imagem de compartilhamento | [`public/brand`](./public/brand) | Não distorcer, recortar ou redesenhar a marca |

## Estrutura da página

A ordem atual em [`src/app/page.tsx`](./src/app/page.tsx) é um contrato de navegação:

1. Cabeçalho fixo
2. `#inicio` — Hero
3. Problema/contexto
4. `#solucoes` — Serviços
5. Demonstração de capacidades
6. `#diferenciais` — Diferenciais
7. `#processo` — Processo
8. Suporte
9. `#faq` — Perguntas frequentes
10. `#contato` — Contato
11. Rodapé

Há apenas um `<h1>`, localizado no Hero. Preserve a hierarquia dos demais títulos e os IDs usados pelo menu.

## Limites entre servidor e cliente

A maior parte da página é renderizada no servidor. Os componentes cliente atuais são apenas ilhas interativas:

- `Header`: menu mobile, progresso de rolagem e controle de foco;
- `Hero`: efeito visual orientado pelo ponteiro;
- `CapabilityDemo`: abas acessíveis e ilustrações conceituais;
- `ContactForm`: validação e abertura do WhatsApp.

Não adicione `"use client"` à página inteira ou a componentes estáticos. Isso aumenta o JavaScript enviado ao navegador e pode prejudicar desempenho.

## Sistema visual

A direção completa está em [`docs/brand-ui.md`](./docs/brand-ui.md). Os princípios principais são:

- base escura, sofisticada e editorial;
- azul elétrico usado como acento, não como ruído constante;
- títulos em Sora e texto em Manrope;
- interfaces precisas, com linhas técnicas e motivos discretos do jaguar;
- evitar aparência de template genérico, gamer, cassino, cripto ou “IA neon”;
- evitar excesso de cartões, glassmorphism, gradientes e efeitos sem função;
- manter contraste, legibilidade e espaço em branco.

Tokens principais definidos em `globals.css`:

| Papel | Cor |
| --- | --- |
| Fundo principal | `#080C12` |
| Superfície azul-escura | `#101B32` |
| Azul principal | `#2563EB` |
| Azul claro | `#60A5FA` |
| Texto principal | `#F8FAFC` |
| Texto secundário | `#94A3B8` |

Use os tokens existentes antes de criar novos valores. Se um novo token for necessário, defina-o na raiz de `globals.css` e dê a ele um propósito semântico.

## Contratos de layout e responsividade

As correções de posicionamento abaixo são deliberadas e não devem ser revertidas por estilos genéricos:

- O cabeçalho é fixo e possui fundo escuro sólido. Conteúdo rolando por baixo não pode ficar visível através dele.
- A marca no cabeçalho é contida e recortada somente dentro do próprio link; ela nunca pode sobrepor títulos, menu ou botão mobile.
- A página compensa a altura do cabeçalho e os links com âncora respeitam o `scroll-padding`.
- O Hero mantém título, texto e CTAs visíveis em telas desktop baixas, inclusive por volta de `1576 × 860`.
- A ilustração do Hero permanece contida na coluna e não invade o conteúdo adjacente.
- O diagrama de fluxo usa distribuição horizontal no desktop e percurso vertical no mobile; linhas e nós devem permanecer dentro da seção.
- Na seção de problemas, a frase “O contraponto é simples...” fica abaixo da lista, alinhada ao conteúdo textual e com largura legível — não centralizada no vazio da página.
- A linha do processo conecta o centro dos marcadores. Em larguras menores, a sequência se torna vertical sem atravessar textos.
- Nenhuma viewport pode apresentar rolagem horizontal.

Breakpoints importantes já existentes: aproximadamente `1060px`, `820px` e `560px`, além de um ajuste por altura para desktops baixos. Prefira layouts guiados pelo conteúdo; só crie um novo breakpoint se os atuais não resolverem o caso real.

Valide no mínimo:

- `360 × 800` — celular;
- `768 × 1000` — tablet;
- `1440 × 1000` — desktop;
- um desktop baixo, como `1576 × 860`, quando mexer no Hero ou no cabeçalho.

## Contratos funcionais

### Cabeçalho e menu mobile

- O botão deve anunciar corretamente o estado aberto/fechado.
- `Escape` fecha o menu e devolve o foco ao botão.
- Enquanto o menu está aberto, o conteúdo principal e o rodapé ficam inertes.
- Os links usam a navegação centralizada em `siteConfig`.
- O CTA usa a integração central do WhatsApp.

### Demonstração de capacidades

- As opções funcionam como abas com `tablist`, `tab` e `tabpanel`.
- Teclas `ArrowLeft`, `ArrowRight`, `Home` e `End` continuam funcionando.
- Estado, foco, conteúdo e atributos ARIA devem permanecer sincronizados.

### Formulário de contato

- Nome: mínimo de 2 caracteres.
- Empresa: opcional, máximo de 80 caracteres.
- Solução: deve corresponder a uma opção válida.
- Detalhes: entre 10 e 700 caracteres.
- Erros devem ser associados aos campos com `aria-describedby` e anunciados.
- O envio abre uma mensagem formatada no WhatsApp.
- Se o navegador bloquear a nova janela, o fallback de navegação deve continuar funcionando.

Se mudar uma regra, atualize a validação, a interface, a mensagem e os testes juntos.

## Acessibilidade

Toda alteração de interface deve preservar:

- navegação completa por teclado;
- link “Pular para o conteúdo”;
- foco visível;
- rótulos e nomes acessíveis em controles;
- mensagens de erro programaticamente associadas;
- contraste suficiente para texto e controles;
- textos alternativos adequados para imagens relevantes;
- uma hierarquia semântica de títulos;
- suporte a `prefers-reduced-motion`;
- áreas de toque confortáveis no mobile.

Animações são aprimoramento progressivo. Com movimento reduzido, a informação e a operação da página devem continuar intactas.

## SEO e compartilhamento

O projeto gera de forma estática:

- metadados globais e URL canônica;
- Open Graph e Twitter Card;
- JSON-LD de `Organization`/`ProfessionalService`;
- `robots.txt`;
- `sitemap.xml`.

Esses dados usam [`src/config/site.ts`](./src/config/site.ts). Ao mudar domínio, descrição ou canais oficiais, atualize a configuração central e valide todas as saídas. A imagem social atual é `public/brand/jaguardevs-share.jpg`.

## Assets da marca

- `logos/` contém os arquivos oficiais/originais e deve ser preservado.
- `public/brand/` contém as cópias organizadas utilizadas pelo site.
- Preserve sempre a proporção dos logos; use `object-fit: contain` quando aplicável.
- Não aplique deformação, rotação, filtros ou recortes destrutivos.
- Ao substituir um arquivo, mantenha nomes/formatos compatíveis ou atualize `brandAssets` em `src/config/site.ts`.
- Só substitua PNG por SVG quando existir um SVG oficial e revisado.

## Testes e verificação visual

Os testes atuais cobrem principalmente:

- geração da mensagem e do link do WhatsApp;
- validação e comportamento do formulário;
- teclado, estado e acessibilidade das abas de capacidades.

Para mudanças visuais, execute o servidor local em um terminal:

```bash
npm run dev
```

Em outro terminal:

```bash
npm run visual:check
```

O script verifica overflow, erros de console, quantidade de seções, existência de um único `h1`, menu mobile, restauração de foco e movimento reduzido. Ele também salva capturas em `screenshots/`.

Observação: o script atual usa o caminho padrão do Microsoft Edge no Windows. Em outra plataforma, ajuste `executablePath` de forma portátil antes de depender desse comando na CI. É possível apontá-lo para outra URL no PowerShell:

```powershell
$env:VISUAL_CHECK_URL = "http://localhost:3000"
npm run visual:check
```

Uma captura bonita não substitui os testes; e testes aprovados não substituem a inspeção visual nas viewports relevantes.

## Build e publicação

```bash
npm run build
```

O Next.js gera o site estático em `out/`. A configuração `images.unoptimized` é intencional e compatível com esse modo de exportação.

O resultado pode ser publicado no Vercel ou em uma hospedagem estática, como a Hostinger. Em uma hospedagem estática, publique o conteúdo gerado dentro de `out/`; não é necessário manter um processo Node no servidor.

Não edite ou versione `.next/`, `out/`, `node_modules/`, arquivos `.env` ou caches. O comando `npm start` não representa o fluxo principal de produção deste projeto, pois a saída é estática.

## Fluxo seguro para pessoas e agentes de IA

Para cada tarefa:

1. Defina exatamente o problema e os arquivos em escopo.
2. Execute `git status` e preserve mudanças alheias à tarefa.
3. Localize a fonte única de verdade antes de editar JSX ou CSS.
4. Leia os testes existentes do componente alterado.
5. Implemente a menor solução coerente com o sistema visual.
6. Evite dependências novas quando CSS/React nativo já resolverem.
7. Teste interação por mouse, teclado e toque quando aplicável.
8. Teste mobile, desktop, conteúdo longo e movimento reduzido.
9. Atualize testes e documentação se o contrato mudar.
10. Execute lint, tipos, testes e build.
11. Na entrega, descreva o que mudou, como foi validado e qualquer limitação real.

### Não faça

- Não use `git reset --hard`, não descarte arquivos e não sobrescreva alterações sem autorização.
- Não edite arquivos gerados para “corrigir” o build.
- Não exponha segredos nem versione arquivos `.env`.
- Não codifique domínio, telefone ou contato diretamente em componentes.
- Não remova semântica, ARIA, controles de foco ou `prefers-reduced-motion` para simplificar uma implementação.
- Não transforme componentes estáticos em componentes cliente sem necessidade.
- Não adicione bibliotecas de animação, formulário ou validação sem justificar o custo.
- Não mude proporções do logo nem transforme a identidade em um tema genérico.
- Não “melhore” o texto com fatos que a empresa não forneceu.
- Não considere uma mudança responsiva concluída olhando apenas uma largura de tela.

## Critério de pronto

Uma contribuição está pronta quando:

- atende exatamente ao pedido sem ampliar o escopo;
- mantém a identidade e as verdades comerciais;
- não cria overflow, sobreposição ou regressão nos breakpoints principais;
- funciona com teclado e movimento reduzido;
- mantém metadados e navegação coerentes;
- possui testes atualizados quando necessário;
- passa em `lint`, `typecheck`, `test` e `build`;
- não inclui artefatos gerados, segredos ou mudanças não relacionadas.

## Pendências conhecidas que exigem dados oficiais

Estas melhorias não devem ser preenchidas com conteúdo fictício:

- e-mail institucional;
- perfil oficial do Instagram;
- portfólio e cases;
- depoimentos e métricas;
- biografias da equipe;
- integrações de analytics ou mecanismos de busca;
- versão vetorial oficial de todos os logos.

Quando esses dados existirem, centralize-os em `src/config/site.ts` ou em uma estrutura tipada apropriada dentro de `src/content/`.
