import React from 'react';
import { useTheme } from 'providers';
import { Block } from 'baseui/block';
import { padding } from '../../../../utils';
import { WidgetContentProps } from '../../types';

export const WidgetContent = ({ children, height }: WidgetContentProps) => {
  const {
    theme: {
      current: {
        sizing: { scale800, scale600 },
      },
    },
  } = useTheme();

  return (
    <Block {...padding(scale600, scale800)} height={height}>
      {children}
    </Block>
  );
};
