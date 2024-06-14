import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const CheckIcon = ({ title = 'Check', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.33301 8.00016C1.33301 4.31826 4.31778 1.3335 7.99967 1.3335C9.76779 1.3335 11.4635 2.03588 12.7137 3.28612C13.964 4.53636 14.6663 6.23205 14.6663 8.00016C14.6663 11.6821 11.6816 14.6668 7.99967 14.6668C4.31778 14.6668 1.33301 11.6821 1.33301 8.00016ZM7.15301 10.2335L10.8997 6.48683C11.0224 6.35806 11.0224 6.1556 10.8997 6.02683L10.5463 5.6735C10.4167 5.54645 10.2093 5.54645 10.0797 5.6735L6.91967 8.8335L5.91967 7.84016C5.85919 7.77571 5.77473 7.73915 5.68634 7.73915C5.59795 7.73915 5.5135 7.77571 5.45301 7.84016L5.09967 8.1935C5.03657 8.25608 5.00107 8.34128 5.00107 8.43016C5.00107 8.51904 5.03657 8.60424 5.09967 8.66683L6.68634 10.2335C6.74683 10.2979 6.83128 10.3345 6.91967 10.3345C7.00806 10.3345 7.09252 10.2979 7.15301 10.2335Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
