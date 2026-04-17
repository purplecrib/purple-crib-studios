export type ServiceInterest = "Photography" | "BusinessSolutions" | "Both";

export interface SubmitContactForm {
  name: string;
  email: string;
  phone: string;
  serviceInterest: ServiceInterest;
  message: string;
}

export const SERVICE_INTEREST_OPTIONS: {
  value: ServiceInterest;
  label: string;
}[] = [
  { value: "Photography", label: "Photography Services" },
  { value: "BusinessSolutions", label: "Business Solutions" },
  { value: "Both", label: "Both Services" },
];

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
