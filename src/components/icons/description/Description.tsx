import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const DescriptionIcon = ({ title = 'Description', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33325 2.66671C3.15644 2.66671 2.98687 2.73695 2.86185 2.86197C2.73682 2.98699 2.66659 3.15656 2.66659 3.33337V12.3906L4.19518 10.862C4.32021 10.7369 4.48977 10.6667 4.66659 10.6667H12.6666C12.8434 10.6667 13.013 10.5965 13.138 10.4714C13.263 10.3464 13.3333 10.1769 13.3333 10V3.33337C13.3333 3.15656 13.263 2.98699 13.138 2.86197C13.013 2.73695 12.8434 2.66671 12.6666 2.66671H3.33325ZM1.91904 1.91916C2.29411 1.54409 2.80282 1.33337 3.33325 1.33337H12.6666C13.197 1.33337 13.7057 1.54409 14.0808 1.91916C14.4559 2.29423 14.6666 2.80294 14.6666 3.33337V10C14.6666 10.5305 14.4559 11.0392 14.0808 11.4143C13.7057 11.7893 13.197 12 12.6666 12H4.94273L2.47132 14.4714C2.28066 14.6621 1.99391 14.7191 1.7448 14.616C1.49568 14.5128 1.33325 14.2697 1.33325 14V3.33337C1.33325 2.80294 1.54397 2.29423 1.91904 1.91916Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
