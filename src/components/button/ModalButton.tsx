import React from 'react';
import { ModalButton as BaseModalButton } from 'baseui/modal';
import { ButtonProps as BaseButtonProps } from 'baseui/button';
import { borderRadius } from '../../utils';

export const ModalButton = ({ children, size = 'compact', ...rest }: BaseButtonProps) => (
  <BaseModalButton
    size={size}
    overrides={{
      BaseButton: {
        style: ({ $theme }) => ({
          ...borderRadius($theme.borders.radius100),
        }),
      },
    }}
    {...rest}
  >
    {children}
  </BaseModalButton>
);

export default ModalButton;
