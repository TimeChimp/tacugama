import React from 'react';
import { useTheme } from '../../../providers';
import { defaultIconProps, Icon, SVGProps } from '../icon';

export const ClockOutlined = ({ title = 'ClockOutlined', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 .333a6.667 6.667 0 1 0 0 13.333A6.667 6.667 0 0 0 7 .333Zm0 12A5.333 5.333 0 1 1 7 1.666a5.333 5.333 0 0 1 0 10.667Zm.587-9V6.76l2.42 2.42a.34.34 0 0 1 0 .473l-.354.353a.34.34 0 0 1-.473 0L6.513 7.34a.353.353 0 0 1-.1-.234V3.333c0-.184.15-.333.334-.333h.506c.184 0 .334.149.334.333Z"
          fill={color || theme.current.customColors.dark3}
        />
      </svg>
    </Icon>
  );
};
