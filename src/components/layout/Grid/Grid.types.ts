import type { ReactNode } from "react";

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6;

export type GridGap = "none" | "sm" | "md" | "lg" | "xl";

export interface GridProps {
  children: ReactNode;

  columns?: GridColumns;

  gap?: GridGap;

  className?: string;
}
