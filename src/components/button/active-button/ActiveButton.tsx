import React, { forwardRef } from 'react';
import { Button, ButtonProps } from '../Button';
import { border, borderRadius } from '../../../utils';

export interface ActiveButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

export const ActiveButton = forwardRef<HTMLButtonElement, ActiveButtonProps>(
  ({ children, ...rest }: ActiveButtonProps, ref) => (
    <Button
      ref={ref}
      kind="primary"
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            return {
              height: $theme.sizing.scale800,
              ...border({
                borderColor: $theme.colors.primary200,
                borderStyle: $theme.borders.border300.borderStyle,
                borderWidth: $theme.borders.border300.borderWidth,
              }),
              ...borderRadius($theme.borders.radius200),
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
