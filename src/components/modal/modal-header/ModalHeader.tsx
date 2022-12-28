import React from 'react';
import { StyledModalHeader } from './styles';
import { HeadingXSmall } from '../../typography';

export interface ModalHeaderProps {
  children: React.ReactNode;
}

export const ModalHeader = ({ children }: ModalHeaderProps) => {
  return (
    <StyledModalHeader>
      <HeadingXSmall>{children}</HeadingXSmall>
    </StyledModalHeader>
  );
};
