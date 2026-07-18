import type { ElementType, ReactNode } from "react";

export type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;

export type GridGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface ResponsiveColumns {
  mobile?: GridColumns;
  tablet?: GridColumns;
  desktop?: GridColumns;
}

export interface GridProps {
  children: ReactNode;

  columns?: GridColumns | ResponsiveColumns;

  gap?: GridGap;

  as?: ElementType;

  className?: string;
}
