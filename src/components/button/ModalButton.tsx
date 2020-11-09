import React from 'react';
import { ModalButton as BaseModalButton } from 'baseui/modal';
import { ButtonProps as BaseButtonProps } from 'baseui/button';
import { borderRadius } from '../../utils';
import { useTheme } from '../../providers';

export const ModalButton = ({ children, size = 'compact', ...rest }: BaseButtonProps) => {
  const {
    theme: {
      current: {
        borders: { radius200 },
      },
    },
  } = useTheme();

  return (
    <BaseModalButton
      size={size}
      overrides={{
        BaseButton: {
          style: {
            ...borderRadius(radius200),
          },
        },
      }}
      {...rest}
    >
      {children}
    </BaseModalButton>
  );
};

export default ModalButton;
