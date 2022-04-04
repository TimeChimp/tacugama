import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const User = ({ title = 'User', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.00248 0.333496C5.16084 0.333496 3.66789 1.82588 3.66789 3.66683C3.66789 4.55088 4.01921 5.39873 4.64457 6.02385C5.26993 6.64897 6.11809 7.00016 7.00248 7.00016C8.84413 7.00016 10.3371 5.50778 10.3371 3.66683C10.3371 1.82588 8.84413 0.333496 7.00248 0.333496ZM12.3795 10.0502L13.58 12.4585C13.71 12.7164 13.6971 13.0233 13.546 13.2694C13.3948 13.5156 13.127 13.666 12.838 13.6668H1.16694C0.878005 13.666 0.610124 13.5156 0.458977 13.2694C0.307829 13.0233 0.294971 12.7164 0.424995 12.4585L1.62545 10.0502C2.04961 9.20086 2.91835 8.66496 3.86796 8.66683H10.137C11.0866 8.66496 11.9554 9.20086 12.3795 10.0502Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
