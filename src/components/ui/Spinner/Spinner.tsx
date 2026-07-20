import type { SpinnerProps } from "./Spinner.types";

const sizeStyles = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]",
  xl: "h-10 w-10 border-4",
};

const variantStyles = {
  primary: "border-primary-600 border-t-transparent",
  secondary: "border-neutral-700 border-t-transparent",
  white: "border-white border-t-transparent",
};

export function Spinner({
  size = "md",
  variant = "primary",
  label = "Loading",
  className = "",
  ...props
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={[
        "inline-block animate-spin rounded-full",
        sizeStyles[size],
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
}
