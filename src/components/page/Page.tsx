import React from 'react';
import { StyledPage } from './StyledPage';

interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children, ...rest }: PageProps) => {
  return <StyledPage {...rest}>{children}</StyledPage>;
};
