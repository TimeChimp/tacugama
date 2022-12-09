import { ButtonProps as BaseButtonProps } from 'baseui/button';
import { ButtonType } from '../../../models';

export interface ModalButtonProps extends BaseButtonProps {
  buttonType?: ButtonType;
  testId?: string;
}
