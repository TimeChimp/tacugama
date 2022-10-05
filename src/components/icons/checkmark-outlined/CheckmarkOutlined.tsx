import React from 'react';
import { useTheme } from '../../../providers';
import { defaultIconProps, Icon, SVGProps } from '../icon';

export const CheckmarkOutlined = ({ title = 'CheckmarkOutlined', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 .333a6.667 6.667 0 1 0 0 13.333A6.667 6.667 0 0 0 7 .333Zm0 12A5.333 5.333 0 1 1 7 1.666a5.333 5.333 0 0 1 0 10.667ZM9.08 4.66a.333.333 0 0 1 .467 0l.333.353a.333.333 0 0 1 0 .473L6.133 9.233a.32.32 0 0 1-.466 0L4.1 7.653a.333.333 0 0 1 0-.473l.353-.354a.32.32 0 0 1 .467 0l1 .994 3.16-3.16Z"
          fill={color || theme.current.customColors.dark3}
        />
      </svg>
    </Icon>
  );
};
