import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../../icon';

export const CalendarIcon = ({ title = 'Calendar', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2.66659H12.6667C13.403 2.66659 14 3.26354 14 3.99992V12.6666C14 13.403 13.403 13.9999 12.6667 13.9999H3.33333C2.59695 13.9999 2 13.403 2 12.6666V3.99992C2 3.26354 2.59695 2.66659 3.33333 2.66659H4V1.66659C4 1.48249 4.14924 1.33325 4.33333 1.33325H5C5.18409 1.33325 5.33333 1.48249 5.33333 1.66659V2.66659H10.6667V1.66659C10.6667 1.48249 10.8159 1.33325 11 1.33325H11.6667C11.8508 1.33325 12 1.48249 12 1.66659V2.66659ZM3.33301 12.6666H12.6663V5.33325H3.33301V12.6666Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
