import type { InputHTMLAttributes } from "react";

export type CheckboxState = "default" | "success" | "error";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;

  description?: string;

  errorMessage?: string;

  successMessage?: string;

  state?: CheckboxState;

  required?: boolean;

  indeterminate?: boolean;
}
