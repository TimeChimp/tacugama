import { ButtonProps } from '../Button';

export interface SquareButtonProps extends ButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  children?: React.ReactNode;
}
