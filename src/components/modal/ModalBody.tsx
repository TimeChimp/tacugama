import React from 'react';
import { ModalBody as BaseModalBody } from 'baseui/modal';
import { modalBodyStyle } from './ModalStyles';

export interface ModalBodyProps {
  children: React.ReactNode;
}

export const ModalBody = ({ children }: ModalBodyProps) => {
  return <BaseModalBody $style={modalBodyStyle}>{children}</BaseModalBody>;
};
