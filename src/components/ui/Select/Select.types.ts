import type { SelectHTMLAttributes } from "react";

export type SelectState = "default" | "success" | "error";

export interface SelectOption {
  label: string;

  value: string;

  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;

  helperText?: string;

  errorMessage?: string;

  successMessage?: string;

  state?: SelectState;

  options: SelectOption[];

  placeholder?: string;

  required?: boolean;
}
