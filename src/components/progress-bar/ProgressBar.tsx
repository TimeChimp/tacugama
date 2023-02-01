import React from 'react';
import { ProgressBar as BaseProgressBar } from 'baseui/progress-bar';
import { ProgressBarProps } from './types';

export const ProgressBar = (props: Partial<ProgressBarProps>) => <BaseProgressBar {...props} overrides={{
    BarProgress: {
        style: ({ $theme }) => ({
            backgroundColor: $theme.colors.primary,
        }),
    },
}} />;