import { Modal } from "../Modal";

import type { ProductEnquiryModalProps } from "./ProductEnquiryModal.types";

export function ProductEnquiryModal({
  open,
  onClose,
  productName,
  children,
}: ProductEnquiryModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={productName ? `Enquire About ${productName}` : "Product Enquiry"}
      size="md"
    >
      <div className="space-y-5">
        {children ?? (
          <div className="text-neutral-600">Product enquiry form will be added here.</div>
        )}
      </div>
    </Modal>
  );
}
