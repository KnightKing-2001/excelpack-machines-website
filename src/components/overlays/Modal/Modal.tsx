import { useEffect } from "react";
import { X } from "lucide-react";
import type { ModalProps } from "./Modal.types";

const sizeStyles = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  full: "sm:max-w-full",
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
  // Close on Escape key
  useEffect(() => {
    if (!open || !closeOnEscape) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, closeOnEscape, onClose]);

  // Lock body scroll while modal open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;

  return (
    /*
     * Backdrop — full screen overlay.
     * On mobile: items-end so the sheet slides up from the bottom.
     * On sm+: items-center for centred dialog.
     */
    <div
      className="
        fixed inset-0 z-[600]
        flex items-end sm:items-center justify-center
        bg-black/60 backdrop-blur-sm
        p-0 sm:p-4
      "
      role="presentation"
      onMouseDown={(e) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={[
          // Layout — full width on mobile, constrained on sm+
          "w-full",
          sizeStyles[size],
          // Mobile: full viewport height with rounded top corners only
          "max-h-[92dvh] sm:max-h-[90vh]",
          "rounded-t-2xl sm:rounded-2xl",
          "bg-white shadow-2xl",
          // ← KEY: flex column so header is sticky and body scrolls
          "flex flex-col",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {/* ── Sticky Header — always visible, never scrolls away ── */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100 shrink-0">
          {/* Drag handle pill — mobile UX hint */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 h-1 w-10 rounded-full bg-neutral-200 sm:hidden" />

          <span id="modal-title" className="text-base font-bold text-neutral-900">
            {title ?? ""}
          </span>

          {/* Close button — always sticky at top right */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="
              ml-auto flex h-8 w-8 items-center justify-center
              rounded-full bg-neutral-100 text-neutral-500
              hover:bg-neutral-200 hover:text-neutral-800
              transition-colors shrink-0
            "
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* ── Scrollable Body ── */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5">
          {children}
        </div>

        {/* ── Optional Sticky Footer ── */}
        {footer && (
          <div className="shrink-0 border-t border-neutral-100 px-5 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
