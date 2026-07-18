import type { ElementType } from "react";

export type DividerOrientation = "horizontal" | "vertical";

export type DividerVariant = "default" | "subtle" | "strong";

export type DividerSpacing = "none" | "sm" | "md" | "lg";

export interface DividerProps {
  orientation?: DividerOrientation;

  variant?: DividerVariant;

  spacing?: DividerSpacing;

  as?: ElementType;

  className?: string;
}
