import type { InputHTMLAttributes } from "react";

export type RadioState = "default" | "success" | "error";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;

  description?: string;

  errorMessage?: string;

  successMessage?: string;

  state?: RadioState;

  required?: boolean;
}
