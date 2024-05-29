import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const TableIcon = ({ title = 'Table', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.333 2.66675H2.66634C1.92996 2.66675 1.33301 3.2637 1.33301 4.00008V12.0001C1.33301 12.7365 1.92996 13.3334 2.66634 13.3334H13.333C14.0694 13.3334 14.6663 12.7365 14.6663 12.0001V4.00008C14.6663 3.2637 14.0694 2.66675 13.333 2.66675ZM2.66602 6V4H13.3327V6H2.66602ZM13.3327 7.16675H10.666V12.0001H13.3327V7.16675ZM6.5 7.16675H9.5V12.0001H6.5V7.16675ZM5.33268 7.16675H2.66602V12.0001H5.33268V7.16675Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
