import { ButtonProps } from '../Button';

export interface MinimalButtonProps extends ButtonProps {
  children?: React.ReactNode;
  height?: string;
  color?: string;
  isTransparent?: boolean;
}
