import type { ContainerProps } from "./Container.types";

const sizeStyles = {
  sm: "max-w-[640px]",
  md: "max-w-[768px]",
  lg: "max-w-[1024px]",
  xl: "max-w-[1280px]",
  "2xl": "max-w-[1440px]",
  full: "max-w-full",
};

const paddingStyles = {
  none: "",
  sm: "px-4",
  md: "px-6",
  lg: "px-8",
};

export function Container({
  children,
  size = "xl",
  padding = "md",
  as: Component = "div",
  className = "",
}: ContainerProps) {
  return (
    <Component
      className={["mx-auto w-full", sizeStyles[size], paddingStyles[padding], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
