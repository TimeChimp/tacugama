import { ButtonProps as BaseButtonProps } from 'baseui/button';
import { ButtonType } from '../../models';

export enum ButtonKind {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Minimal = 'minimal',
}

export interface ButtonProps extends Omit<BaseButtonProps, 'kind'> {
  buttonType?: ButtonType;
  kind?: ButtonKind;
  testId?: string;
  height?: string;
  color?: string;
  isTransparent?: boolean;
  rootOverrides?: { [key: string]: number | string };
  backgroundColor?: string;
  borderColor?: string;
}
