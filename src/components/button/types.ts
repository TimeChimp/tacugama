import { ButtonProps as BaseButtonProps } from 'baseui/button';
import { ButtonKind, ButtonType } from '../../models';

export interface ButtonProps extends BaseButtonProps {
  buttonType?: ButtonType;
  buttonKind?: ButtonKind;
  testId?: string;
  height?: string;
  color?: string;
  isTransparent?: boolean;
  rootOverrides?: { [key: string]: number | string };
  backgroundColor?: string;
  borderColor?: string;
}
