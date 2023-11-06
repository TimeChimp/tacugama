import React from 'react';
import { Box } from '../box';
import { Block } from '../block';
import { ParagraphSmall } from '../typography';
import { padding, borderBottom } from '../../utils';
import { useTheme } from '../../providers';
import { WidgetWrapperProps } from './types';

export const WidgetWrapper = ({ title, children, customButton }: WidgetWrapperProps) => {
  const {
    theme: {
      current: {
        sizing: { scale800, scale0 },
        customColors: { dark3, light6 },
        borders: { border100 },
      },
    },
  } = useTheme();

  return (
    <Box>
      <Block
        {...padding(scale0, scale800)}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{ ...borderBottom({ ...border100, borderColor: light6 }) }}
      >
        <ParagraphSmall color={dark3} {...padding('9px', '0px')}>
          {title}
        </ParagraphSmall>
        {customButton}
      </Block>
      {children}
    </Box>
  );
};
