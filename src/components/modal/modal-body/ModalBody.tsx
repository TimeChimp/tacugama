import React from 'react';
import { StyledModalBody } from './styles';

export interface ModalBodyProps {
  children: React.ReactNode;
}

export const ModalBody = ({ children }: ModalBodyProps) => {
  return <StyledModalBody>{children}</StyledModalBody>;
};
