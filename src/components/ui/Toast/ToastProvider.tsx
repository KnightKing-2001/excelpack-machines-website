import { useCallback, useState, type ReactNode } from "react";

import { Toast } from "./Toast";

import { ToastContext } from "./ToastContext";

import type { ToastItem, ToastOptions } from "./Toast.types";

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    ({ message, variant = "info", duration = 3000 }: ToastOptions) => {
      const id = crypto.randomUUID();

      const toast: ToastItem = {
        id,
        message,
        variant,
        duration,
      };

      setToasts((current) => [...current, toast]);

      window.setTimeout(() => {
        removeToast(id);
      }, duration);
    },
    [removeToast],
  );

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
      }}
    >
      {children}

      <div
        className="
          fixed
          top-4
          right-4
          z-50
          flex
          flex-col
          gap-3
        "
      >
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
