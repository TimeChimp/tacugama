import { FormControlProps as BaseFormControlProps } from 'baseui/form-control';

export interface FormControlProps extends BaseFormControlProps {
  error?: string;
  success?: string;
}
