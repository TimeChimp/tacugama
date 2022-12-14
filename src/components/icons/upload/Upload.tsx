import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const UploadIcon = ({ title = 'Upload', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.33333 2H13.6667C13.8508 2 14 2.14924 14 2.33333V3C14 3.18409 13.8508 3.33333 13.6667 3.33333H2.33333C2.14924 3.33333 2 3.18409 2 3V2.33333C2 2.14924 2.14924 2 2.33333 2ZM10.3089 7.13C10.3614 7.00609 10.3342 6.86277 10.24 6.76667L8.24 4.76667C8.10812 4.63881 7.89854 4.63881 7.76667 4.76667L5.76667 6.76667C5.67329 6.8619 5.64567 7.00362 5.69646 7.12695C5.74724 7.25028 5.86664 7.33146 6 7.33333H7.33333V13.6667C7.33333 13.8508 7.48257 14 7.66667 14H8.33333C8.51743 14 8.66667 13.8508 8.66667 13.6667V7.33333H10C10.1346 7.33412 10.2564 7.25392 10.3089 7.13Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
