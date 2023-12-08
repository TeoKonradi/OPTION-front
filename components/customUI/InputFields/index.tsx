export interface InputProps {
  placeholder?: string;
  value?: string;
  ref?: any;
  required?: boolean;
}

export interface FieldProps extends InputProps {
  isLoading: boolean;
  name: string;
  autoComplete?: string;
  disabled?: boolean;
  type?: string;
}
