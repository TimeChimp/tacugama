import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const DeleteIcon = ({ title = 'Delete', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3337 3.66659V2.99992C13.3337 2.81582 13.1844 2.66659 13.0003 2.66659H10.0003V1.99992C10.0003 1.63173 9.70185 1.33325 9.33366 1.33325H6.66699C6.2988 1.33325 6.00033 1.63173 6.00033 1.99992V2.66659H3.00033C2.81623 2.66659 2.66699 2.81582 2.66699 2.99992V3.66659C2.66699 3.85068 2.81623 3.99992 3.00033 3.99992H13.0003C13.1844 3.99992 13.3337 3.85068 13.3337 3.66659ZM5.24732 14.6666C4.5459 14.6683 3.96308 14.1263 3.91398 13.4266L3.33398 5.33325H12.6673L12.1007 13.4266C12.0516 14.1263 11.4687 14.6683 10.7673 14.6666H5.24732Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
