import { ArrowUpRight, Check, MessageCircle, MoveRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionIntro } from "@/components/ui/section-intro";
import {
  differentiators,
  faqs,
  problems,
  processSteps,
  services,
  supportFeatures,
  trustItems,
} from "@/content/home";
import { directWhatsAppUrl } from "@/lib/whatsapp";
import { CapabilityDemo } from "./capability-demo";
import { ContactForm } from "./contact-form";

export function ProblemSection() {
  return (
    <section className="section problem" aria-labelledby="problem-title">
      <div className="container">
        <div className="problem__heading">
          <SectionIntro
            eyebrow="Quando a tecnologia não acompanha"
            title={<>Sua empresa perde força quando a tecnologia <span className="accent-title">vira obstáculo.</span></>}
          />
          <p>Um site que não transmite confiança, processos manuais e informações espalhadas custam tempo e clareza. Antes de propor qualquer solução, entendemos onde isso mais pesa na sua rotina.</p>
        </div>
        <div className="problem-list">
          {problems.map((problem) => (
            <article className="problem-item" key={problem.number}>
              <h3>{problem.title}</h3>
              <p>{problem.text}</p>
            </article>
          ))}
        </div>
        <div className="problem__answer">
          <span aria-hidden="true">&lt;/&gt;</span>
          <p>A saída não é adicionar mais uma ferramenta. É construir a solução certa para a realidade da sua empresa.</p>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="solucoes" className="section services" aria-labelledby="services-title">
      <div className="container">
        <SectionIntro
          title={<>Você traz o desafio. <span className="muted-title">Nós construímos a solução.</span></>}
          description="Se o problema está na presença digital, na rotina da equipe ou em ferramentas desconectadas, entendemos a causa e desenvolvemos uma solução sob medida para o seu negócio."
        />
        <div className="services-list">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id}>
                <article className="service-row">
                  <div className="service-row__index"><Icon aria-hidden="true" /></div>
                  <div className="service-row__main">
                    <p>{service.eyebrow}</p>
                    <h3>{service.title}</h3>
                    <div className="service-row__body">
                      <p>{service.description}</p>
                      <ul>
                        {service.features.map((feature) => <li key={feature}><Check aria-hidden="true" size={15} />{feature}</li>)}
                      </ul>
                    </div>
                  </div>
                  <a className="service-row__action" href="#contato" aria-label={`Quero conversar sobre esta solução: ${service.title}`}>
                    <span>Quero conversar sobre esta solução</span>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CapabilitySection() {
  return (
    <section className="section capability-section" aria-labelledby="capability-title">
      <div className="container">
        <div className="capability-section__heading">
          <SectionIntro
            title={<>Uma estratégia conectada <span className="accent-title">do primeiro contato à operação.</span></>}
          />
          <p>Este exemplo é conceitual não um case fictício e mostra como site, sistema e automação podem trabalhar como partes da mesma estratégia.</p>
        </div>
        <CapabilityDemo />
      </div>
    </section>
  );
}

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="section differentiators" aria-labelledby="differentials-title">
      <div className="container differentiators__layout">
        <div className="differentiators__intro">
          <SectionIntro
            title={<>Não basta funcionar. <span className="accent-title">Precisa fazer sentido para o seu negócio.</span></>}
          />
          <p>Cada decisão parte do seu contexto, e a parceria pode continuar depois da entrega.</p>
          <ButtonLink href="#processo" variant="text">Veja como o projeto acontece</ButtonLink>
        </div>
        <div className="differentiator-list">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}>
                <article className="differentiator-item">
                  <span className="feature-icon" aria-hidden="true"><Icon strokeWidth={1.5} /></span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="processo" className="section process" aria-labelledby="process-title">
      <div className="container">
        <div className="process__heading">
          <SectionIntro
            title={<>Em cada etapa, você acompanha o que está sendo feito <span className="muted-title">e sabe qual é o próximo passo.</span></>}
          />
          <p>Do diagnóstico à publicação, cada etapa tem um objetivo claro para que você acompanhe as decisões sem ficar no escuro.</p>
        </div>
        <ol className="process-track">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title}>
                <div className="process-step">
                  <span className="process-step__number">0{index + 1}</span>
                  <div className="process-step__dot"><Icon aria-hidden="true" size={18} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function SupportSection() {
  return (
    <section className="section support" aria-labelledby="support-title">
      <div className="container support__panel">
        <div className="support__copy">
          <h2 id="support-title">Seu projeto entra no ar.<br /><span>O suporte pode continuar.</span></h2>
          <p>Depois da entrega, você pode contar com manutenção, correções, orientação e novas evoluções no formato combinado para o seu projeto.</p>
        </div>
        <div className="support__features">
          {supportFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.label}>
                <div className="support-feature">
                  <span className="feature-icon" aria-hidden="true"><Icon /></span>
                  <div><strong>{feature.label}</strong><span>{feature.text}</span></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="section faq" aria-labelledby="faq-title">
      <div className="container faq__layout">
        <div className="faq__intro">
          <SectionIntro title={<>Antes de avançar, você merece <span className="accent-title">respostas claras.</span></>} />
          <p>Preço, prazo, integrações e suporte: veja o que você precisa saber antes de iniciar uma conversa.</p>
          <a href={directWhatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={18} /> Perguntar pelo WhatsApp</a>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <details>
                <summary>{faq.question}<i aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contato" className="section contact" aria-labelledby="contact-title">
      <div className="contact__beam" aria-hidden="true" />
      <div className="container contact__layout">
        <div className="contact__intro">
          <h2 id="contact-title">Você não precisa ter tudo definido para <span>dar o primeiro passo.</span></h2>
          <p>Conte o que precisa melhorar. Nós ajudamos a organizar prioridades e entender qual solução faz sentido para sua empresa.</p>
          <ul className="contact__assurances" aria-label="Como conduzimos seu projeto">
            {trustItems.map((item) => <li key={item}><Check aria-hidden="true" size={15} />{item}</li>)}
          </ul>
          <div className="contact__direct">
            <span>Já sabe o que precisa?</span>
            <a href={directWhatsAppUrl} target="_blank" rel="noreferrer">Chamar no WhatsApp agora <MoveRight aria-hidden="true" size={18} /></a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
