import { useEffect } from "react";

import type { ModalProps } from "./Modal.types";

const sizeStyles = {
  sm: "max-w-sm",

  md: "max-w-md",

  lg: "max-w-lg",

  xl: "max-w-xl",

  full: "max-w-full",
};

export function Modal({
  open,

  onClose,

  title,

  children,

  footer,

  size = "md",

  closeOnOverlayClick = true,

  closeOnEscape = true,

  className = "",

  ...props
}: ModalProps) {
  useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, closeOnEscape, onClose]);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-600
        flex
        items-center
        justify-center
        bg-black/50
        p-4
      "

      role="presentation"

      onMouseDown={(event) => {
        if (closeOnOverlayClick && event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"

        aria-modal="true"

        aria-labelledby="modal-title"

        className={[
          "w-full",
          "rounded-xl",
          "bg-white",
          "shadow-xl",
          "overflow-hidden",
          sizeStyles[size],
          className,
        ]
          .filter(Boolean)
          .join(" ")}

        {...props}
      >
        {title && (
          <div
            id="modal-title"
            className="
              border-b
              px-6
              py-4
              text-lg
              font-semibold
              text-neutral-900
            "
          >
            {title}
          </div>
        )}

        <div className="px-6 py-5">{children}</div>

        {footer && (
          <div
            className="
              border-t
              px-6
              py-4
            "
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
