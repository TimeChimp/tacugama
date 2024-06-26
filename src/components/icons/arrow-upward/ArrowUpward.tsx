import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const ArrowUpwardIcon = ({ title = 'ArrowUpward', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.33356 14.6666H7.66689C7.4828 14.6666 7.33356 14.5173 7.33356 14.3333V3.55325L4.37356 6.51992C4.31097 6.58302 4.22577 6.61852 4.13689 6.61852C4.04801 6.61852 3.96282 6.58302 3.90023 6.51992L3.43356 6.04659C3.37046 5.984 3.33496 5.8988 3.33496 5.80992C3.33496 5.72104 3.37046 5.63584 3.43356 5.57325L7.52023 1.47992C7.61391 1.38612 7.741 1.33337 7.87356 1.33325H8.12689C8.25917 1.33479 8.38575 1.38733 8.48023 1.47992L12.5669 5.57325C12.63 5.63584 12.6655 5.72104 12.6655 5.80992C12.6655 5.8988 12.63 5.984 12.5669 6.04659L12.0936 6.51992C12.0321 6.58263 11.948 6.61797 11.8602 6.61797C11.7724 6.61797 11.6883 6.58263 11.6269 6.51992L8.66689 3.55325V14.3333C8.66689 14.5173 8.51766 14.6666 8.33356 14.6666Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
