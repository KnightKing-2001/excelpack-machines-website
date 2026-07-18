import type { InputHTMLAttributes } from "react";

export type FileUploadState = "default" | "success" | "error";

export interface FileUploadProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;

  description?: string;

  errorMessage?: string;

  successMessage?: string;

  state?: FileUploadState;

  required?: boolean;

  multiple?: boolean;

  accept?: string;

  maxSize?: number;

  onFilesSelected?: (files: File[]) => void;
}
