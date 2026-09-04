import {
  Blocks,
  CodeXml,
  Fingerprint,
  Gauge,
  Headphones,
  Laptop,
  Link2,
  MessageSquareText,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const problems = [
  {
    number: "01",
    title: "Seu site não transmite o valor da empresa",
    text: "Quando a presença digital parece confusa ou desatualizada, o cliente pode hesitar antes mesmo de falar com você.",
  },
  {
    number: "02",
    title: "Sua equipe perde tempo no operacional",
    text: "Tarefas repetitivas ocupam a rotina e tiram espaço de atendimento, decisões e crescimento.",
  },
  {
    number: "03",
    title: "As informações ficam espalhadas",
    text: "Dados desconectados entre ferramentas geram retrabalho, atrasam respostas e dificultam a visão do negócio.",
  },
] as const;

export const services = [
  {
    id: "site",
    eyebrow: "Credibilidade e conversão",
    title: "Sites profissionais e landing pages",
    description:
      "Apresente sua empresa com clareza, transmita confiança desde o primeiro acesso e facilite o próximo passo do cliente.",
    features: ["Site institucional alinhado à marca", "Landing pages para campanhas", "SEO técnico, desempenho e experiência mobile"],
    icon: Laptop,
  },
  {
    id: "sistema",
    eyebrow: "Controle e produtividade",
    title: "Sistemas personalizados",
    description:
      "Centralize informações, organize rotinas e dê à equipe uma visão mais clara do que precisa acontecer.",
    features: ["Fluxos adaptados à operação", "Painéis e áreas de gestão", "Base preparada para novas etapas"],
    icon: Blocks,
  },
  {
    id: "automacao",
    eyebrow: "Menos tarefas manuais",
    title: "Automações e integrações",
    description:
      "Conecte ferramentas e automatize tarefas repetitivas para reduzir retrabalho e manter a informação seguindo o fluxo certo.",
    features: ["Ferramentas trabalhando juntas", "Rotinas executadas automaticamente", "Informação avançando entre as etapas"],
    icon: Workflow,
  },
] as const;

export const differentiators = [
  {
    title: "Profissionalismo do início ao fim",
    text: "Você acompanha decisões, prioridades e próximos passos com comunicação clara em cada etapa.",
    icon: ShieldCheck,
  },
  {
    title: "Identidade em cada escolha",
    text: "A solução nasce do contexto, dos objetivos e da personalidade da sua empresa nunca de um molde genérico.",
    icon: Fingerprint,
  },
  {
    title: "Suporte além da entrega",
    text: "A parceria pode continuar com cuidado técnico, orientação e novas evoluções conforme a necessidade.",
    icon: Headphones,
  },
] as const;

export const processSteps = [
  { title: "Diagnóstico", text: "Entendemos o negócio, o público e o ponto que precisa mudar.", icon: Search },
  { title: "Estratégia", text: "Transformamos o diagnóstico em prioridades, escopo e direção.", icon: MessageSquareText },
  { title: "Design e protótipo", text: "Você visualiza a experiência antes do desenvolvimento avançar.", icon: Palette },
  { title: "Desenvolvimento", text: "Construímos, testamos e ajustamos a solução em ciclos.", icon: CodeXml },
  { title: "Publicação e evolução", text: "Colocamos no ar e definimos como manter e evoluir.", icon: Rocket },
] as const;

export const capabilities = {
  site: {
    label: "Site",
    title: "Uma presença que deixa seu valor mais claro",
    text: "Mensagem, hierarquia e contato organizados para transmitir confiança e facilitar a conversa.",
    icon: Gauge,
  },
  sistema: {
    label: "Sistema",
    title: "Informações reunidas para decisões mais claras",
    text: "A equipe encontra o que precisa para acompanhar rotinas e entender o que acontece na operação.",
    icon: Blocks,
  },
  automacao: {
    label: "Automação",
    title: "Tarefas avançando sem depender de repetição",
    text: "Etapas e ferramentas conectadas para que a informação siga o fluxo definido.",
    icon: Link2,
  },
} as const;

export const faqs = [
  {
    question: "Quanto custa um projeto?",
    answer:
      "Não trabalhamos com um preço único. O investimento depende da solução, do escopo e da complexidade. Depois do diagnóstico, você recebe uma proposta clara e personalizada.",
  },
  {
    question: "Em quanto tempo fica pronto?",
    answer:
      "O prazo é definido depois que entendemos o escopo e as etapas de validação. A proposta apresenta um cronograma realista para você saber o que esperar antes de começar.",
  },
  {
    question: "Vocês atendem empresas de todo o Brasil?",
    answer:
      "Sim. O atendimento é remoto e organizado para que sua empresa acompanhe decisões, entregas e próximos passos de qualquer região do Brasil.",
  },
  {
    question: "O site funciona bem no celular?",
    answer:
      "Sim. Celulares, tablets e desktops fazem parte do projeto desde o início, tanto no design quanto no desenvolvimento e nos testes.",
  },
  {
    question: "Vocês trabalham com soluções que a empresa já utiliza?",
    answer:
      "Avaliamos as ferramentas atuais e as possibilidades de integração. A viabilidade é confirmada no diagnóstico, considerando acessos, APIs e regras de cada plataforma.",
  },
  {
    question: "O que acontece depois da entrega?",
    answer:
      "A parceria pode continuar com manutenção, correções, orientação e novas evoluções. Antes da entrega, combinamos o formato de suporte mais adequado ao projeto.",
  },
] as const;

export const trustItems = ["Projeto sob medida", "Proposta clara e personalizada", "Suporte combinado com você"] as const;

export const supportFeatures = [
  { label: "Manter a solução", text: "Correções e cuidado técnico", icon: ShieldCheck },
  { label: "Evoluir com o negócio", text: "Melhorias alinhadas a novas necessidades", icon: Sparkles },
  { label: "Decidir com orientação", text: "Proximidade para planejar os próximos passos", icon: MessageSquareText },
] as const;
