import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const BriefcaseIcon = ({ title = 'Briefcase', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.333 4.66667H11.333V3.33333C11.333 2.59695 10.7361 2 9.99967 2H5.99967C5.26329 2 4.66634 2.59695 4.66634 3.33333V4.66667H2.66634C1.92996 4.66667 1.33301 5.26362 1.33301 6V12.6667C1.33301 13.403 1.92996 14 2.66634 14H13.333C14.0694 14 14.6663 13.403 14.6663 12.6667V6C14.6663 5.26362 14.0694 4.66667 13.333 4.66667ZM9.33268 9.33342C9.33268 9.7016 9.03421 10.0001 8.66602 10.0001H7.33268C6.96449 10.0001 6.66602 9.7016 6.66602 9.33342V9.00008C6.66602 8.81599 6.81525 8.66675 6.99935 8.66675H8.99935C9.18344 8.66675 9.33268 8.81599 9.33268 9.00008V9.33342ZM6 4.66659H10V3.33325H6V4.66659Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
