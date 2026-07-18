import type { ReactNode } from "react";

export interface FooterLink {
  label: string;

  href: string;
}

export interface FooterColumn {
  title: string;

  links: FooterLink[];
}

export interface FooterSocialLink {
  label: string;

  href: string;

  icon?: ReactNode;
}

export interface FooterProps {
  logo?: ReactNode;

  description?: string;

  columns: FooterColumn[];

  socialLinks?: FooterSocialLink[];

  copyright?: string;
}
