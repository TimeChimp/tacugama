import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const LineChartIcon = ({ title = 'LineChartIcon', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.767 3.294a.32.32 0 01.466 0L8 5.06 12.627.434a.333.333 0 01.473 0l.467.466a.333.333 0 010 .474L8.233 6.707a.32.32 0 01-.466 0L6 4.94 1.373 9.567a.333.333 0 01-.473 0L.433 9.1a.333.333 0 010-.473l5.334-5.333z"
          fill={color || theme.current.colors.contentTertiary}
        />
      </svg>
    </Icon>
  );
};
