import type { ReactNode } from "react";

type SectionIntroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionIntro({ eyebrow, title, description, align = "left" }: SectionIntroProps) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      {eyebrow ? <p className="eyebrow"><span aria-hidden="true">{"//"}</span> {eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-intro__text">{description}</p> : null}
    </div>
  );
}
