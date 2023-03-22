import { FormControlProps as BaseFormControlProps } from 'baseui/form-control';

type OmittedProps = 'caption' | 'counter';

export interface FormControlProps extends Omit<BaseFormControlProps, OmittedProps> {
  error?: string;
  success?: string;
  caption?: string;
}
