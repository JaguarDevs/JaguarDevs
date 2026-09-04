import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import {
  CapabilitySection,
  ContactSection,
  DifferentialsSection,
  FaqSection,
  ProblemSection,
  ProcessSection,
  ServicesSection,
  SupportSection,
} from "@/components/sections/home-sections";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo principal</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <CapabilitySection />
        <DifferentialsSection />
        <ProcessSection />
        <SupportSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
