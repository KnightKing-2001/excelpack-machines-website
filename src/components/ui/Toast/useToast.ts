import { useToastContext } from "./ToastContext";

export function useToast() {
  const { addToast } = useToastContext();

  return {
    success(message: string) {
      addToast({
        message,
        variant: "success",
      });
    },

    error(message: string) {
      addToast({
        message,
        variant: "error",
      });
    },

    warning(message: string) {
      addToast({
        message,
        variant: "warning",
      });
    },

    info(message: string) {
      addToast({
        message,
        variant: "info",
      });
    },
  };
}
