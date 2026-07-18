import type { ElementType } from "react";
import type { TextProps } from "./Text.types";

const sizeStyles = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const weightStyles = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const toneStyles = {
  default: "text-neutral-900",
  muted: "text-neutral-600",
  primary: "text-primary-600",
  success: "text-green-600",
  warning: "text-yellow-600",
  error: "text-red-600",
};

const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function Text({
  children,
  size = "md",
  weight = "regular",
  tone = "default",
  align = "left",
  as,
  className = "",
}: TextProps) {
  const Component: ElementType = as ?? "p";

  return (
    <Component
      className={[
        sizeStyles[size],
        weightStyles[weight],
        toneStyles[tone],
        alignStyles[align],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
