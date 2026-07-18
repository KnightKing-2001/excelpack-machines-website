import type { ReactNode } from "react";

export type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";

export type SectionBackground = "default" | "muted" | "dark" | "primary";

export interface SectionProps {
  children: ReactNode;

  spacing?: SectionSpacing;

  background?: SectionBackground;

  className?: string;

  id?: string;
}
