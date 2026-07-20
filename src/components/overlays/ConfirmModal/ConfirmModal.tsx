import { Modal } from "../Modal";

import type { ConfirmModalProps } from "./ConfirmModal.types";

const buttonStyles = {
  primary: "bg-primary-600 hover:bg-primary-700 text-white",

  danger: "bg-red-600 hover:bg-red-700 text-white",

  warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
};

export function ConfirmModal({
  open,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "primary",
  loading = false,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  return (
    <Modal open={open} onClose={onCancel} title={title}>
      <div className="space-y-6">
        {description && <p className="text-neutral-600">{description}</p>}

        <div
          className="
          flex
          justify-end
          gap-3
          "
        >
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="
            rounded-md
            border
            border-neutral-300
            px-4
            py-2
            text-neutral-700
            hover:bg-neutral-100
            disabled:opacity-50
            "
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className={[
              "rounded-md",
              "px-4",
              "py-2",
              "transition",
              buttonStyles[variant],
              loading ? "opacity-50" : "",
            ].join(" ")}
          >
            {loading ? "Processing..." : confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
}
