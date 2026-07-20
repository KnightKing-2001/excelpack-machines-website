import type { HTMLAttributes, ReactNode } from "react";

export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;

  onClose: () => void;

  title?: string;

  children: ReactNode;

  footer?: ReactNode;

  size?: ModalSize;

  closeOnOverlayClick?: boolean;

  closeOnEscape?: boolean;
}
