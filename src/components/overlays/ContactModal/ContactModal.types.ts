import type { ReactNode } from "react";

export interface ContactModalProps {
  open: boolean;

  onClose: () => void;

  title?: string;

  children?: ReactNode;
}
