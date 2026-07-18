import type { ReactNode } from "react";

export type BadgeVariant = "default" | "primary" | "success" | "warning" | "error" | "info";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  children: ReactNode;

  variant?: BadgeVariant;

  size?: BadgeSize;

  icon?: ReactNode;

  className?: string;
}
