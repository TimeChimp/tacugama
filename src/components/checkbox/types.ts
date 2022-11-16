import { CheckboxProps as BaseCheckboxProps } from 'baseui/checkbox';

export enum CheckboxSize {
  Small = 'small',
  Default = 'default',
}

export interface CheckboxProps extends BaseCheckboxProps {
  testId?: string;
  size?: CheckboxSize;
}
