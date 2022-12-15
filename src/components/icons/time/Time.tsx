import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../../icon';

export const TimeIcon = ({ title = 'Time', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.33301 7.99992C1.33301 4.31802 4.31778 1.33325 7.99967 1.33325C9.76779 1.33325 11.4635 2.03563 12.7137 3.28587C13.964 4.53612 14.6663 6.23181 14.6663 7.99992C14.6663 11.6818 11.6816 14.6666 7.99967 14.6666C4.31778 14.6666 1.33301 11.6818 1.33301 7.99992ZM10.653 11.0199L11.0063 10.6666C11.0719 10.6026 11.1089 10.5149 11.1089 10.4233C11.1089 10.3316 11.0719 10.2439 11.0063 10.1799L8.58634 7.75992V4.33325C8.58634 4.14916 8.4371 3.99992 8.25301 3.99992H7.74634C7.56225 3.99992 7.41301 4.14916 7.41301 4.33325V8.11325C7.4117 8.20364 7.4479 8.29053 7.51301 8.35325L10.1797 11.0199C10.3116 11.1478 10.5211 11.1478 10.653 11.0199Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
