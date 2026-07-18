import type { InputHTMLAttributes, ReactNode } from "react";

export type TextFieldState = "default" | "success" | "error";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  helperText?: string;

  errorMessage?: string;

  successMessage?: string;

  state?: TextFieldState;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  required?: boolean;
}
