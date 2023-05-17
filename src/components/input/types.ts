import { InputProps as BaseInputProps } from 'baseui/input';

export interface InputProps extends BaseInputProps {
  testId?: string;
  uppercase?: boolean;
  noBorder?: boolean;
  success?: boolean;
  width?: string;
  showSkeleton?: boolean;
}
