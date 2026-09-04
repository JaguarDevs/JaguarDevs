import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  arrow?: boolean;
};

export function ButtonLink({
  children,
  variant = "primary",
  arrow = true,
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`button button--${variant} ${className}`} {...props}>
      <span>{children}</span>
      {arrow ? <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} /> : null}
    </a>
  );
}
