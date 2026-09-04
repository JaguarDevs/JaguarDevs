# Sistema visual e motion

## Direção

O site combina uma base editorial — tipografia grande, espaço e alternância de densidade — com sinais visuais derivados do jaguar: linhas de velocidade, pontos luminosos, cortes diagonais e trilhas conectadas. O azul é concentrado em ação, foco e movimento; não funciona como filtro constante.

## Tokens principais

- Fundo: `#080C12`
- Superfície: `#101B32`
- Primária: `#2563EB`
- Acento e foco: `#60A5FA`
- Texto principal: `#F8FAFC`
- Texto secundário: `#94A3B8`
- Títulos: Sora
- Corpo: Manrope

Os tokens semânticos ficam no início de `src/app/globals.css`.

## Motion

CSS nativo conduz a entrada do hero, a transição da demonstração conceitual, as microinterações, linhas e pulsos. A preferência `prefers-reduced-motion` reduz transformações e praticamente desativa movimentos decorativos; o spotlight do ponteiro também é removido em telas touch.

## Princípios de continuidade

- Composição e legibilidade vêm antes de efeitos.
- Uma seção deve ter função comercial e ideia visual próprias.
- Evitar card grids genéricos, glassmorphism excessivo, neon constante e elementos técnicos sem significado.
- Novos componentes devem funcionar por teclado e manter contraste WCAG AA.
