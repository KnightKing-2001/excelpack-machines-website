import type { ReactNode } from "react";

export interface ProductCardProps {
  title: string;

  description: string;

  image?: string;

  icon?: ReactNode;

  category?: string;

  specifications?: string[];

  href?: string;

  className?: string;
}
