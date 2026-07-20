import { Modal } from "../Modal";

import type { ImagePreviewModalProps } from "./ImagePreviewModal.types";

export function ImagePreviewModal({
  open,
  src,
  alt,
  title = "Image Preview",
  onClose,
  className = "",
  ...props
}: ImagePreviewModalProps) {
  return (
    <Modal open={open} onClose={onClose} title={title} size="xl">
      <div
        className={["flex", "items-center", "justify-center", className].filter(Boolean).join(" ")}

        {...props}
      >
        <img
          src={src}
          alt={alt}
          className="
            max-h-[80vh]
            w-auto
            rounded-lg
            object-contain
          "
        />
      </div>
    </Modal>
  );
}
