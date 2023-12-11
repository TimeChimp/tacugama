import React from 'react';
import { Box } from '../box';
import { ParagraphSmall } from '../typography';
import { useTheme } from '../../providers';
import { WidgetWrapperProps } from './types';
import { StyledWidgetBox } from './StyledWidgetContainer';
import { Separator } from '../separator';

export const WidgetWrapper = ({ title, children, customButton }: WidgetWrapperProps) => {
  const {
    theme: {
      current: {
        customColors: { dark4 },
      },
    },
  } = useTheme();

  return (
    <Box>
      <StyledWidgetBox>
        <ParagraphSmall color={dark4}>{title}</ParagraphSmall>
        {customButton}
      </StyledWidgetBox>
      <Separator noMargin />
      {children}
    </Box>
  );
};
