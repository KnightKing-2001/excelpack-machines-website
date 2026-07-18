import type { ReactNode } from "react";

export type StackDirection = "vertical" | "horizontal";

export type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";

export type StackAlign = "start" | "center" | "end" | "stretch";

export type StackJustify = "start" | "center" | "end" | "between";

export interface StackProps {
  children: ReactNode;

  direction?: StackDirection;

  gap?: StackGap;

  align?: StackAlign;

  justify?: StackJustify;

  className?: string;
}
