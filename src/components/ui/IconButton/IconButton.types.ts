import type { ButtonHTMLAttributes } from "react";
import type { IconName } from "../Icon";

export type IconButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;

  variant?: IconButtonVariant;

  size?: IconButtonSize;

  loading?: boolean;

  "aria-label": string;
}
