import React, { forwardRef } from 'react';
import { Button, ButtonProps } from '../Button';

export interface TertiaryButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

export const TertiaryButton = forwardRef<HTMLButtonElement, TertiaryButtonProps>(
  ({ children, ...rest }: TertiaryButtonProps, ref) => (
    <Button
      ref={ref}
      kind="tertiary"
      overrides={{
        BaseButton: {
          style: {
            ':hover': {
              backgroundColor: 'transparent',
            },
            ':active': {
              backgroundColor: 'transparent',
            },
            ':disabled': {
              backgroundColor: 'transparent',
            },
          },
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  ),
);

export default TertiaryButton;
