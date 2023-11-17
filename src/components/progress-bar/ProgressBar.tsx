import React from 'react';
import { ProgressBar as BaseProgressBar } from 'baseui/progress-bar';
import { ProgressBarProps } from './types';
import { margin } from '../../utils';

export const ProgressBar = ({ value, ...rest }: ProgressBarProps) => (
  <BaseProgressBar
    value={value}
    {...rest}
    overrides={{
      BarProgress: {
        style: ({ $theme }) => ({
          backgroundColor: value && value > 100 ? $theme.customColors.red0 : $theme.colors.primary,
        }),
      },
      BarContainer: { style: margin('0') },
    }}
  />
);
