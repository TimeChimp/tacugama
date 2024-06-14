import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const BlockedIcon = ({ title = 'Blocked', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99967 1.33325C4.31778 1.33325 1.33301 4.31802 1.33301 7.99992C1.33301 11.6818 4.31778 14.6666 7.99967 14.6666C11.6816 14.6666 14.6663 11.6818 14.6663 7.99992C14.6663 6.23181 13.964 4.53612 12.7137 3.28587C11.4635 2.03563 9.76779 1.33325 7.99967 1.33325ZM13.333 7.99992C13.3345 9.18436 12.9377 10.3349 12.2063 11.2666L4.73301 3.79325C5.6647 3.06193 6.81524 2.66511 7.99967 2.66659C9.41416 2.66659 10.7707 3.22849 11.7709 4.22868C12.7711 5.22888 13.333 6.58543 13.333 7.99992ZM3.79301 4.73325C3.06168 5.66495 2.66487 6.81548 2.66634 7.99992C2.66634 9.41441 3.22824 10.771 4.22844 11.7712C5.22863 12.7713 6.58519 13.3333 7.99967 13.3333C9.18411 13.3347 10.3346 12.9379 11.2663 12.2066L3.79301 4.73325Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
