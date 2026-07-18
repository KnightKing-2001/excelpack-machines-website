import type { ReactNode } from "react";

export interface NavbarItem {
  label: string;

  href?: string;

  children?: NavbarItem[];
}

export interface NavbarProps {
  logo?: ReactNode;

  items: NavbarItem[];

  ctaLabel?: string;

  ctaHref?: string;
}
