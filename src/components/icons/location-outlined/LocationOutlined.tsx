import React from 'react';
import { useTheme } from '../../../providers';
import { defaultIconProps, Icon, SVGProps } from '../icon';

export const LocationOutlined = ({ title = 'LocationOutlined', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.333 5.666a5.333 5.333 0 0 0-10.666 0c0 2.497 1.22 3.478 2.353 4.39.748.601 1.459 1.173 1.753 2.13l.34 1.027a.667.667 0 0 0 .667.453h.373a.667.667 0 0 0 .667-.453l.34-1.027c.319-.95 1.036-1.52 1.788-2.117 1.153-.915 2.385-1.894 2.385-4.403ZM6 1.666a4 4 0 0 0-4 4C2 7.533 2.787 8.16 3.88 9A6.113 6.113 0 0 1 6 11.486 6.167 6.167 0 0 1 8.12 9C9.213 8.16 10 7.533 10 5.666a4 4 0 0 0-4-4Zm1.333 4a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z"
          fill={color || theme.current.customColors.dark3}
        />
      </svg>
    </Icon>
  );
};
