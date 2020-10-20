import React from 'react';
import { ButtonGroup as BaseButtonGroup, ButtonGroupProps as BaseButtonGroupProps } from 'baseui/button-group';

export interface ButtonGroupProps extends BaseButtonGroupProps {
  children: React.ReactNode;
}

export const ButtonGroup = ({ children, size = 'compact', ...rest }: ButtonGroupProps) => (
  <BaseButtonGroup size={size} {...rest}>
    {children}
  </BaseButtonGroup>
);

export default ButtonGroup;
