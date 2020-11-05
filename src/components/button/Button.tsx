import React, { forwardRef } from 'react';
import { Button as BaseButton, ButtonProps as BaseButtonProps } from 'baseui/button';
export { SHAPE } from 'baseui/button';

export interface ButtonProps extends BaseButtonProps {
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size = 'compact', ...rest }: ButtonProps, ref) => (
    <BaseButton ref={ref} size={size} {...rest}>
      {children}
    </BaseButton>
  ),
);

export default Button;
