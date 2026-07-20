import { Icon } from "../Icon";
import type { IconButtonProps } from "./IconButton.types";

const variantStyles = {
  primary: "bg-primary-600 text-white hover:bg-primary-700",
  secondary: "bg-neutral-800 text-white hover:bg-neutral-900",
  outline: "border border-neutral-300 text-neutral-900 hover:bg-neutral-100",
  ghost: "text-neutral-700 hover:bg-neutral-100",
};

const sizeStyles = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  loading = false,
  className = "",
  disabled,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={[
        "inline-flex items-center justify-center",
        "rounded-md",
        "transition-all duration-200",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-primary-600",
        "focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <Icon name={icon} />
    </button>
  );
}
