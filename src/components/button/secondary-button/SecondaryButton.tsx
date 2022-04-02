import React, { forwardRef } from 'react';
import { Button, ButtonProps } from '../Button';
import { border, borderRadius } from '../../../utils';

export interface SecondaryButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

export const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ children, ...rest }: SecondaryButtonProps, ref) => (
    <Button
      ref={ref}
      kind="secondary"
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            return {
              ...border($theme.borders.border300),
              boxSizing: 'border-box',
              ...borderRadius($theme.borders.radius100),
            };
          },
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  ),
);

export default SecondaryButton;
