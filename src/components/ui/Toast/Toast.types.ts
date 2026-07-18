import type { ReactNode } from "react";

export type ToastVariant = "success" | "error" | "warning" | "info";

export type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";

export interface ToastItem {
  id: string;

  message: ReactNode;

  variant: ToastVariant;

  duration?: number;
}

export interface ToastOptions {
  message: ReactNode;

  variant?: ToastVariant;

  duration?: number;
}
