import { Modal } from "../Modal";

import type { ContactModalProps } from "./ContactModal.types";

export function ContactModal({ open, onClose, title = "Contact Us", children }: ContactModalProps) {
  return (
    <Modal open={open} onClose={onClose} title={title} size="md">
      <div className="space-y-5">
        {children ?? <div className="text-neutral-600">Contact form will be added here.</div>}
      </div>
    </Modal>
  );
}
