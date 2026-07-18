import type { ReactNode } from "react";

export type AlertVariant = "success" | "error" | "warning" | "info";

export interface AlertProps {
  children: ReactNode;

  variant?: AlertVariant;

  title?: string;

  icon?: ReactNode;

  className?: string;
}
