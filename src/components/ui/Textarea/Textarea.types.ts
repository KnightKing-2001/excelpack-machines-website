import type { TextareaHTMLAttributes } from "react";

export type TextareaState = "default" | "success" | "error";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;

  helperText?: string;

  errorMessage?: string;

  successMessage?: string;

  state?: TextareaState;

  required?: boolean;

  showCharacterCount?: boolean;
}
