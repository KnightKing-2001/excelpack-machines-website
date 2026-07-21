import type { SectionProps } from "./Section.types";

const spacingStyles = {
  none: "",
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
  xl: "py-24",
  hero: "py-32",
};

const backgroundStyles = {
  default: "bg-transparent",
  muted: "bg-neutral-50",
  dark: "bg-neutral-900 text-white",
  primary: "bg-primary-600 text-white",
};

export function Section({
  children,
  id,
  spacing = "lg",
  background = "default",
  as: Component = "section",
  className = "",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={[spacingStyles[spacing], backgroundStyles[background], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
