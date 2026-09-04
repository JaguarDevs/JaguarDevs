import Image from "next/image";
import { brandAssets, siteConfig } from "@/config/site";
import { directWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__main">
        <div className="footer__brand">
          <Image src={brandAssets.stacked} width={210} height={210} alt="JAGUARDEVS" />
          <p>Tecnologia com identidade para negócios em evolução. Sites, sistemas e automações sob medida, do planejamento ao suporte.</p>
        </div>

        <div className="footer__nav">
          <p className="footer__label">Navegação</p>
          {siteConfig.nav.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </div>

        <div className="footer__contact">
          <p className="footer__label">Pronto para conversar?</p>
          <a href={directWhatsAppUrl} target="_blank" rel="noreferrer">{siteConfig.whatsapp.display}</a>
          <span>Atendimento em todo o Brasil</span>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} JAGUARDEVS</span>
        <a href={siteConfig.url}>{siteConfig.domain}</a>
        <span>Sites · Sistemas · Automações</span>
      </div>
    </footer>
  );
}
