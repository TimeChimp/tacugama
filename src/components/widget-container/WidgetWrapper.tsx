import React from 'react';
import { Box } from '../box';
import { ParagraphSmall } from '../typography';
import { padding } from '../../utils';
import { useTheme } from '../../providers';
import { WidgetWrapperProps } from './types';
import { StyledWidgetBox } from './StyledWidgetContainer';

export const WidgetWrapper = ({ title, children, customButton }: WidgetWrapperProps) => {
  const {
    theme: {
      current: {
        customColors: { dark3 },
      },
    },
  } = useTheme();

  return (
    <Box>
      <StyledWidgetBox>
        <ParagraphSmall color={dark3} {...padding('9px', '0px')}>
          {title}
        </ParagraphSmall>
        {customButton}
      </StyledWidgetBox>
      {children}
    </Box>
  );
};
