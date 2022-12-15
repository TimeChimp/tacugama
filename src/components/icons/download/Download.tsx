import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const DownloadIcon = ({ title = 'Download', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.6911 8.87C5.63862 8.99391 5.6658 9.13723 5.76 9.23333L7.76 11.2333C7.89188 11.3612 8.10146 11.3612 8.23333 11.2333L10.2333 9.23333C10.3267 9.1381 10.3543 8.99638 10.3035 8.87305C10.2528 8.74972 10.1334 8.66854 10 8.66667H8.66667V2.33333C8.66667 2.14924 8.51743 2 8.33333 2H7.66667C7.48257 2 7.33333 2.14924 7.33333 2.33333V8.66667H6C5.86543 8.66588 5.74358 8.74608 5.6911 8.87ZM13.6667 14H2.33333C2.14924 14 2 13.8508 2 13.6667V13C2 12.8159 2.14924 12.6667 2.33333 12.6667H13.6667C13.8508 12.6667 14 12.8159 14 13V13.6667C14 13.8508 13.8508 14 13.6667 14Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
