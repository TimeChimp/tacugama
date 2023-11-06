import React from 'react';
import { Block } from '../../../block';
import { padding } from '../../../../utils';
import { WidgetContentProps } from '../../types';
import { useTheme } from '../../../../providers';

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
