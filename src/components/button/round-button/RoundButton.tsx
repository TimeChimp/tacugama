import React, { forwardRef } from 'react';
import { Button } from '../Button';
import { borderRadius, padding } from '../../../utils';
import { RoundButtonProps } from './types';
import { ButtonKind } from '../../../models';

export const RoundButton = forwardRef<HTMLButtonElement, RoundButtonProps>(
  ({ children, ...rest }: RoundButtonProps, ref) => (
    <Button
      ref={ref}
      buttonKind={ButtonKind.secondary}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            ...borderRadius('50%'),
            ...padding($theme.sizing.scale200),
            backgroundColor: $theme.colors.primaryB,
            ':hover': {
              backgroundColor: $theme.colors.primaryB,
            },
            ':active': {
              backgroundColor: $theme.colors.primaryB,
            },
          }),
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  ),
);

export default RoundButton;
