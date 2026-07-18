import type { ElementType, ReactNode } from "react";

export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";

export type TextWeight = "regular" | "medium" | "semibold" | "bold";

export type TextTone = "default" | "muted" | "primary" | "success" | "warning" | "error";

export type TextAlign = "left" | "center" | "right";

export interface TextProps {
  children: ReactNode;

  size?: TextSize;

  weight?: TextWeight;

  tone?: TextTone;

  align?: TextAlign;

  as?: ElementType;

  className?: string;
}
