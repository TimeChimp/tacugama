import React from 'react';
import { ModalHeader as BaseModalHeader } from 'baseui/modal';
import { modalHeaderStyle } from '../ModalStyles';

export interface ModalHeaderProps {
  children: React.ReactNode;
}

export const ModalHeader = ({ children }: ModalHeaderProps) => {
  return <BaseModalHeader $style={modalHeaderStyle}>{children}</BaseModalHeader>;
};
