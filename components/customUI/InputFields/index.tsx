export interface InputProps {
  placeholder?: string;
  ref?: any;
  required?: boolean;
  value?: string;
}

export interface FieldProps extends InputProps {
  autoComplete?: string;
  disabled?: boolean;
  isLoading: boolean;
  name: string;
  type?: string;
}
