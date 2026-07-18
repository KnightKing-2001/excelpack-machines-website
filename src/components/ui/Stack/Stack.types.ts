import type { ElementType, ReactNode } from "react";

export type StackDirection = "vertical" | "horizontal";

export type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type StackAlign = "start" | "center" | "end" | "stretch";

export type StackJustify = "start" | "center" | "end" | "between" | "around";

export interface StackProps {
  children: ReactNode;

  direction?: StackDirection;

  gap?: StackGap;

  align?: StackAlign;

  justify?: StackJustify;

  as?: ElementType;

  className?: string;
}
