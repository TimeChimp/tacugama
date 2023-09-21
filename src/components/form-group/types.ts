import { ReactNode } from 'react';

export interface FormGroupProps {
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  children?: ReactNode;
}
