import type { DividerProps } from "./Divider.types";

const orientationStyles = {
  horizontal: "w-full border-t",
  vertical: "h-full border-l",
};

const variantStyles = {
  default: "border-neutral-200",
  subtle: "border-neutral-100",
  strong: "border-neutral-400",
};

const spacingStyles = {
  none: "",
  sm: "my-2",
  md: "my-4",
  lg: "my-8",
};

export function Divider({
  orientation = "horizontal",
  variant = "default",
  spacing = "md",
  as: Component = "hr",
  className = "",
}: DividerProps) {
  return (
    <Component
      className={[
        orientationStyles[orientation],
        variantStyles[variant],
        spacingStyles[spacing],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="separator"
    />
  );
}
