import { ButtonProps as BaseButtonProps } from 'baseui/button';
import { ButtonKind, ButtonType } from '../../models';

export interface ButtonProps extends Omit<BaseButtonProps, 'kind'> {
  buttonType?: ButtonType;
  kind?: ButtonKind;
  testId?: string;
  height?: string;
  width?: string;
  color?: string;
  isLink?: boolean;
  rootOverrides?: { [key: string]: number | string };
  backgroundColor?: string;
  cursorType?: string;
}
