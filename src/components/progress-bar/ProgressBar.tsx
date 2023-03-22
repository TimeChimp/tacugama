import React from 'react';
import { ProgressBar as BaseProgressBar } from 'baseui/progress-bar';
import { ProgressBarProps } from './types';
import { margin } from '../../utils';

export const ProgressBar = (props: ProgressBarProps) => (
  <BaseProgressBar
    {...props}
    overrides={{
      BarProgress: {
        style: ({ $theme }) => ({
          backgroundColor: $theme.colors.primary,
        }),
      },
      BarContainer: { style: margin('0') },
    }}
  />
);
