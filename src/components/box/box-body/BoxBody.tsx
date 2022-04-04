import React from 'react';
import { StyledBoxBody } from '../StyledBox';

export interface BoxBodyProps {
  children: React.ReactNode;
}

export const BoxBody = ({ children }: BoxBodyProps) => {
  return <StyledBoxBody>{children}</StyledBoxBody>;
};
