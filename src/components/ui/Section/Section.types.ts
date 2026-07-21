import type { ElementType, ReactNode } from "react";

export type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl" | "hero";

export type SectionBackground = "default" | "muted" | "dark" | "primary";

export interface SectionProps {
  children: ReactNode;

  id?: string;

  spacing?: SectionSpacing;

  background?: SectionBackground;

  as?: ElementType;

  className?: string;
}
