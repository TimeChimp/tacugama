import React from 'react';
import { ModalButton as BaseModalButton } from 'baseui/modal';
import { ButtonProps as BaseButtonProps } from 'baseui/button';

export const ModalButton = ({ children, size = 'compact', ...rest }: BaseButtonProps) => (
  <BaseModalButton size={size} {...rest}>
    {children}
  </BaseModalButton>
);

export default ModalButton;
