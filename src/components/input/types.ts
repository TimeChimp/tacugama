import { InputProps as BaseInputProps, SIZE } from 'baseui/input';

export interface InputProps extends BaseInputProps {
  testId?: string;
  uppercase?: boolean;
  noBorder?: boolean;
  success?: boolean;
  width?: string;
  showSkeleton?: boolean;
  /** @deprecated Don't use this prop, it will be removed in the future */
  size?: keyof typeof SIZE;
}
