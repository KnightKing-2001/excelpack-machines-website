import type { DividerProps } from "./Divider.types";

const orientationStyles = {
  horizontal: "w-full border-t",

  vertical: "h-full border-l",
};

const variantStyles = {
  default: "border-neutral-200",

  strong: "border-neutral-400",

  subtle: "border-neutral-100",
};

export function Divider({
  orientation = "horizontal",

  variant = "default",

  className = "",
}: DividerProps) {
  return (
    <div
      role="separator"

      className={[orientationStyles[orientation], variantStyles[variant], className]

        .filter(Boolean)

        .join(" ")}
    />
  );
}
