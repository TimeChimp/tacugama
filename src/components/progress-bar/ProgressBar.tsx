import React from 'react';
import { ProgressBar as BaseProgressBar, ProgressBarProps } from 'baseui/progress-bar';

export const ProgressBar = (props: ProgressBarProps) => <BaseProgressBar {...props} overrides={{
    BarProgress: {
        style: ({ $theme }) => ({
            backgroundColor: $theme.colors.primary,
        }),
    },
}} />;