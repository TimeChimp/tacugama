import React from 'react';
import { ModalFooter as BaseModalFooter } from 'baseui/modal';
import { modalFooterStyle } from './ModalStyles';

export interface ModalFooterProps {
  children: React.ReactNode;
}

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <BaseModalFooter $style={modalFooterStyle}>{children}</BaseModalFooter>;
};
