import React from 'react';
import { ButtonProps } from 'baseui/button';
import { border, borderRadius } from '../../../utils';
import { ModalButton } from 'baseui/modal';

export const SecondaryModalButton = ({ children, size = 'compact', ...rest }: ButtonProps) => (
  <ModalButton
    kind="secondary"
    size={size}
    {...rest}
    overrides={{
      BaseButton: {
        style: ({ $theme }) => {
          return {
            ...border($theme.borders.border300),
            ...borderRadius($theme.borders.radius100),
            boxSizing: 'border-box',
            ':hover': {
              backgroundColor: $theme.colors.primaryB,
            },
            ':active': {
              backgroundColor: $theme.colors.primaryB,
            },
          };
        },
      },
    }}
  >
    {children}
  </ModalButton>
);
