import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const MarkerIcon = ({ title = 'Marker', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.66699 6.66659C2.66699 3.72107 5.05481 1.33325 8.00033 1.33325C10.9458 1.33325 13.3337 3.72107 13.3337 6.66659C13.3337 9.17088 12.1179 10.1506 10.9845 11.0639C10.2412 11.6629 9.53329 12.2334 9.22699 13.1866L8.88699 14.2133C8.79166 14.4968 8.51909 14.6822 8.22032 14.6666H7.84699C7.54822 14.6822 7.27565 14.4968 7.18033 14.2133L6.84033 13.1866C6.52177 12.2362 5.80397 11.6663 5.05194 11.0692C3.89966 10.1544 2.66699 9.1757 2.66699 6.66659ZM6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665C8.53043 8.6665 9.03914 8.45579 9.41421 8.08072C9.78929 7.70564 10 7.19694 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
