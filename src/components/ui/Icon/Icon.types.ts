export type IconName =
  | "menu"
  | "close"
  | "search"
  | "arrowRight"
  | "arrowLeft"
  | "phone"
  | "mail"
  | "mapPin"
  | "factory"
  | "package"
  | "settings"
  | "download"
  | "upload";

export interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}
