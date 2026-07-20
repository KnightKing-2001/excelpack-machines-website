import type { ReactNode } from "react";

export interface IndustryCardProps {
  title: string;

  description: string;

  image?: string;

  icon?: ReactNode;

  href?: string;

  className?: string;
}
