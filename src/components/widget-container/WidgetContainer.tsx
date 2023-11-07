import React from 'react';
import { WidgetContainerProps } from './types';
import { WidgetContent } from './components';
import { WidgetWrapper } from './';

export const WidgetContainer = ({ title, children, height, customButton }: WidgetContainerProps) => {
  return (
    <WidgetWrapper title={title} customButton={customButton}>
      <WidgetContent height={height}>{children}</WidgetContent>
    </WidgetWrapper>
  );
};
