import { ButtonProps } from '../Button';

export interface SecondaryButtonProps extends ButtonProps {
  children?: React.ReactNode;
  rootOverrides?: { [key: string]: number | string };
}
