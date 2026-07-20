import type { ReactNode } from "react";

export interface ServiceCardProps {
  title: string;

  description: string;

  icon?: ReactNode;

  image?: string;

  href?: string;

  className?: string;
}
