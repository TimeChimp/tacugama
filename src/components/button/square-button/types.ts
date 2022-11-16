import { TertiaryButtonProps } from '../tertiary-button';

export interface SquareButtonProps extends TertiaryButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  children?: React.ReactNode;
}
