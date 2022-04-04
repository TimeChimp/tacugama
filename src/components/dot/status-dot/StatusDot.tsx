import React from 'react';
import { Dot } from '../Dot';
import { useTheme } from '../../../providers';

export interface StatusDotProps {
  clockedIn: boolean;
}

export const StatusDot = ({ clockedIn }: StatusDotProps) => {
  const {
    theme: {
      current: {
        colors: { backgroundPositive, backgroundNegative },
      },
    },
  } = useTheme();
  return <Dot color={clockedIn ? backgroundPositive : backgroundNegative} />;
};
