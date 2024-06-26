import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const AvatarIcon = ({ title = 'Avatar', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00133 1.33325C6.15983 1.33325 4.66699 2.82564 4.66699 4.66658C4.66699 6.50753 6.15983 7.99992 8.00133 7.99992C9.84284 7.99992 11.3357 6.50753 11.3357 4.66658C11.3357 2.82564 9.84284 1.33325 8.00133 1.33325ZM13.3366 11.1733L14.597 13.6999C14.701 13.9063 14.6907 14.1517 14.5698 14.3487C14.4489 14.5456 14.2346 14.6659 14.0034 14.6666H1.99981C1.76868 14.6659 1.55439 14.5456 1.43348 14.3487C1.31257 14.1517 1.30229 13.9063 1.4063 13.6999L2.66668 11.1733C3.23199 10.0454 4.38572 9.33329 5.64758 9.33325H10.3557C11.6175 9.33329 12.7713 10.0454 13.3366 11.1733Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
