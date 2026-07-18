import type { ButtonProps } from "./Button.types";

const variantStyles = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",

  secondary: "bg-neutral-800 text-white hover:bg-neutral-900",

  outline: "border border-neutral-300 text-neutral-900 hover:bg-neutral-100",

  ghost: "text-neutral-700 hover:bg-neutral-100",

  cta: "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",

  md: "px-4 py-2 text-base",

  lg: "px-6 py-3 text-lg",

  xl: "px-8 py-4 text-xl",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2",
        "rounded-md",
        "font-medium",
        "transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary-500",
        "disabled:cursor-not-allowed disabled:opacity-50",

        variantStyles[variant],
        sizeStyles[size],

        className,
      ]
        .filter(Boolean)
        .join(" ")}

      disabled={disabled || loading}

      {...props}
    >
      {loading && <span>Loading...</span>}

      {!loading && leftIcon}

      {!loading && children}

      {!loading && rightIcon}
    </button>
  );
}
