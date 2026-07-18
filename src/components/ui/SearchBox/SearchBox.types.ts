import type { InputHTMLAttributes } from "react";

export type SearchBoxState = "default" | "success" | "error";

export interface SearchBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  placeholder?: string;

  state?: SearchBoxState;

  errorMessage?: string;

  successMessage?: string;

  loading?: boolean;

  onSearch?: (value: string) => void;

  onClear?: () => void;
}
