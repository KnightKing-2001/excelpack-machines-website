import type { IconProps } from "./Icon.types";
import { iconMap } from "./iconMap";

export function Icon({ name, size = 20, strokeWidth = 2, className = "" }: IconProps) {
  const Component = iconMap[name];

  return (
    <Component size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />
  );
}
