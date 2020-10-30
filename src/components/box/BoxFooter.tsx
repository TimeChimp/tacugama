import React from 'react';
import { StyledBoxFooter } from './StyledBox';

export interface BoxFooterProps {
  children: React.ReactNode;
}

export const BoxFooter = ({ children }: BoxFooterProps) => {
  return <StyledBoxFooter>{children}</StyledBoxFooter>;
};
