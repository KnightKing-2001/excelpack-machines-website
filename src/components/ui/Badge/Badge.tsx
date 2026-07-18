import type { BadgeProps } from "./Badge.types";

const variantStyles = {
  default: "bg-neutral-100 text-neutral-700",

  primary: "bg-primary-100 text-primary-700",

  success: "bg-green-100 text-green-700",

  warning: "bg-yellow-100 text-yellow-700",

  error: "bg-red-100 text-red-700",

  info: "bg-blue-100 text-blue-700",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-xs",

  md: "px-3 py-1 text-sm",

  lg: "px-4 py-1.5 text-base",
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  icon,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1",
        "rounded-full font-medium",

        variantStyles[variant],
        sizeStyles[size],

        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon}
      {children}
    </span>
  );
}
