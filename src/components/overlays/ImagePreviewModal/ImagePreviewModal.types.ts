import type { HTMLAttributes } from "react";

export interface ImagePreviewModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;

  src: string;

  alt: string;

  title?: string;

  onClose: () => void;
}
