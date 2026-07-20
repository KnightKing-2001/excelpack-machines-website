import type { ReactNode } from "react";

export interface GridProps {
  children: ReactNode;

  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
  };

  gap?: "none" | "sm" | "md" | "lg" | "xl";

  className?: string;
}
