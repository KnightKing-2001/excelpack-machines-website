import type { HTMLAttributes } from "react";

export type SpinnerSize = "sm" | "md" | "lg" | "xl";

export type SpinnerVariant = "primary" | "secondary" | "white";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
}
