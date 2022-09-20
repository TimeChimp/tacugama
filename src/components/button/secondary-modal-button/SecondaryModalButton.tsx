import React from 'react';
import { ButtonProps } from 'baseui/button';
import { border, borderRadius, padding } from '../../../utils';
import { useTheme } from '../../../providers';
import { ModalButton } from 'baseui/modal';

export const SecondaryModalButton = ({ children, size = 'compact', ...rest }: ButtonProps) => {
  const {
    theme: {
      current: {
        sizing: { scale200, scale600 },
      },
    },
  } = useTheme();

  return (
    <ModalButton
      kind="secondary"
      size={size}
      {...rest}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            return {
              ...border($theme.borders.border300),
              ...borderRadius($theme.borders.radius200),
              ...padding(scale200, scale600),
              fontWeight: 'normal',
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
};
