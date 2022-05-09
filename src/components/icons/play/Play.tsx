import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Play = ({ title = 'Play', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 8.81333V9.18667C14.9989 9.54208 14.8117 9.87095 14.5067 10.0533L2.57333 17C1.85333 17.4267 1.47999 17.4267 1.15999 17.24L0.826662 17.0533C0.529588 16.8759 0.343573 16.5592 0.333328 16.2133V1.78667C0.334407 1.43125 0.521609 1.10238 0.826662 0.920002L1.15999 0.733335C1.47999 0.546668 1.85333 0.546668 2.78666 1.09333L14.5067 7.94667C14.8117 8.12905 14.9989 8.45792 15 8.81333Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
