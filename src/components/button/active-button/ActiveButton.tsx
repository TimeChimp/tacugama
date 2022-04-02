import React, { forwardRef } from 'react';
import { Button, ButtonProps } from '../Button';
import { border, borderRadius } from '../../../utils/css';

export interface ActiveButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

export const ActiveButton = forwardRef<HTMLButtonElement, ActiveButtonProps>(
  ({ children, ...rest }: ActiveButtonProps, ref) => (
    <Button
      ref={ref}
      kind="secondary"
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            return {
              backgroundColor: $theme.colors.primary100,
              color: $theme.colors.primary,
              ...border({
                borderColor: $theme.colors.primary200,
                borderStyle: $theme.borders.border300.borderStyle,
                borderWidth: $theme.borders.border300.borderWidth,
              }),
              ...borderRadius($theme.sizing.scale0),
              boxSizing: 'border-box',
              ':hover': {
                backgroundColor: $theme.colors.primary200,
              },
              ':active': {
                backgroundColor: $theme.colors.primary200,
              },
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

export default ActiveButton;
