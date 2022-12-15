import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../../icon';

export const UnlockedIcon = ({ title = 'Unlocked', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.33366 6.66659H12.0003C12.7367 6.66659 13.3337 7.26354 13.3337 7.99992V13.3333C13.3337 14.0696 12.7367 14.6666 12.0003 14.6666H4.00033C3.26395 14.6666 2.66699 14.0696 2.66699 13.3333V7.99992C2.66699 7.26354 3.26395 6.66659 4.00033 6.66659V5.33325C4.00033 3.12411 5.79119 1.33325 8.00033 1.33325C10.2095 1.33325 12.0003 3.12411 12.0003 5.33325H10.667C10.667 3.86049 9.47308 2.66659 8.00033 2.66659C6.52757 2.66659 5.33366 3.86049 5.33366 5.33325V6.66659ZM8.66699 11.9999C9.03518 11.9999 9.33366 11.7014 9.33366 11.3333V9.99992C9.33366 9.63173 9.03518 9.33325 8.66699 9.33325H7.33366C6.96547 9.33325 6.66699 9.63173 6.66699 9.99992V11.3333C6.66699 11.7014 6.96547 11.9999 7.33366 11.9999H8.66699Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
