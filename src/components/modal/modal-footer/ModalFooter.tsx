import React from 'react';
import { StyledModalFooter } from './styles';

export interface ModalFooterProps {
  children: React.ReactNode;
}

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <StyledModalFooter>{children}</StyledModalFooter>;
};
