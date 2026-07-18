import { createContext, useContext } from "react";

import type { ToastOptions } from "./Toast.types";

export interface ToastContextValue {
  addToast(options: ToastOptions): void;

  removeToast(id: string): void;
}

export const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToastContext() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToastContext must be used inside ToastProvider");
  }

  return context;
}
