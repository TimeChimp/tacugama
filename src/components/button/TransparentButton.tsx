import React, { forwardRef } from 'react';
import { Button, ButtonProps } from 'components';
import { padding } from '../../utils';

export interface TransparentButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

export const TransparentButton = forwardRef<HTMLButtonElement, TransparentButtonProps>(
  ({ children, ...rest }: TransparentButtonProps, ref) => (
    <Button
      ref={ref}
      kind="tertiary"
      overrides={{
        BaseButton: {
          style: {
            ...padding('0px'),
            ':hover': {
              backgroundColor: 'transparent',
            },
            ':active': {
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

export default TransparentButton;
