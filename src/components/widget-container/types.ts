import { ReactNode, ReactElement } from 'react';

export interface WidgetContainerProps {
  title: string;
  children: ReactNode;
  customButton?: ReactElement;
  height?: string;
}

export interface WidgetWrapperProps {
  title: string;
  children: ReactNode;
  customButton?: ReactElement;
}

export interface WidgetContentProps {
  children: ReactNode;
  height?: string;
}
