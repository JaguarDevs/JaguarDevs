export const solutionOptions = [
  "Site profissional ou landing page",
  "Sistema personalizado",
  "Automação ou integração",
  "Ainda não sei qual solução preciso",
] as const;

export type ContactFormData = {
  name: string;
  company?: string;
  solution: string;
  details: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = data.name.trim();
  const company = data.company?.trim() ?? "";
  const details = data.details.trim();

  if (name.length < 2) errors.name = "Digite seu nome para continuar.";
  if (company.length > 80) errors.company = "Use até 80 caracteres.";
  if (!solutionOptions.some((option) => option === data.solution)) {
    errors.solution = "Escolha a opção que mais se aproxima do que você precisa.";
  }
  if (details.length < 10) {
    errors.details = "Conte um pouco mais sobre o que você quer melhorar.";
  } else if (details.length > 700) {
    errors.details = "Use até 700 caracteres.";
  }

  return errors;
}
