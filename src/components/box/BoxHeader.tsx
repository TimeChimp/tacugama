import React from 'react';
import { StyledBoxHeader } from './StyledBox';

export interface BoxHeaderProps {
  children: React.ReactNode;
}

export const BoxHeader = ({ children }: BoxHeaderProps) => {
  return <StyledBoxHeader>{children}</StyledBoxHeader>;
};
