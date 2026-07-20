import type { ReactNode } from "react";

export type ConfirmModalVariant = "primary" | "danger" | "warning";

export interface ConfirmModalProps {
  open: boolean;

  title: string;

  description?: ReactNode;

  confirmText?: string;

  cancelText?: string;

  variant?: ConfirmModalVariant;

  loading?: boolean;

  onConfirm: () => void;

  onCancel: () => void;
}
