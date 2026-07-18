import type { SkeletonProps } from "./Skeleton.types";

const variantStyles = {
  text: "rounded",
  rectangular: "rounded-md",
  circular: "rounded-full",
};

export function Skeleton({
  variant = "rectangular",
  width,
  height,
  className = "",
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={["animate-pulse bg-neutral-200", variantStyles[variant], className]
        .filter(Boolean)
        .join(" ")}
      style={{
        width,
        height,
        ...style,
      }}
      {...props}
    />
  );
}
