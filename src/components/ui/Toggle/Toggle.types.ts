import type { InputHTMLAttributes } from "react";

export type ToggleState = "default" | "success" | "error";

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;

  description?: string;

  errorMessage?: string;

  successMessage?: string;

  state?: ToggleState;

  required?: boolean;
}
