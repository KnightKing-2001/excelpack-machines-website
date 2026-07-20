import type { ReactNode } from "react";

export interface ProductEnquiryModalProps {
  open: boolean;

  onClose: () => void;

  productName?: string;

  children?: ReactNode;
}
