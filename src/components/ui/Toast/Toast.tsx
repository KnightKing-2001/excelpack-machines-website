import type { ToastItem } from "./Toast.types";

interface Props {
  toast: ToastItem;
  onClose: () => void;
}

const styles = {
  success: "bg-green-600 text-white",

  error: "bg-red-600 text-white",

  warning: "bg-yellow-500 text-white",

  info: "bg-blue-600 text-white",
};

export function Toast({ toast, onClose }: Props) {
  return (
    <div
      role="status"
      className={[
        "rounded-md",
        "px-4 py-3",
        "shadow-lg",
        "flex items-center gap-3",
        styles[toast.variant],
      ].join(" ")}
    >
      <span>{toast.message}</span>

      <button onClick={onClose} aria-label="Close notification">
        ×
      </button>
    </div>
  );
}
