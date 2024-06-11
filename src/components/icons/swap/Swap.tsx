import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';

import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const SwapIcon = ({ title = 'Swap', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5689 8.2401L14.5689 6.2401C14.6993 6.10558 14.6963 5.89093 14.5622 5.7601L12.5622 3.7601C12.4661 3.66589 12.3228 3.63872 12.1989 3.6912C12.075 3.74368 11.9948 3.86553 11.9956 4.0001V5.33343H6.99557C6.81147 5.33343 6.66223 5.48267 6.66223 5.66676V6.33343C6.66223 6.51752 6.81147 6.66676 6.99557 6.66676H11.9956V8.0001C11.9919 8.13762 12.0732 8.26325 12.2001 8.31637C12.327 8.36949 12.4735 8.3392 12.5689 8.2401ZM3.99557 9.33343H8.99557C9.17966 9.33343 9.3289 9.48267 9.3289 9.66676V10.3334C9.3289 10.5175 9.17966 10.6668 8.99557 10.6668H3.99557V12.0001C3.99369 12.1335 3.91251 12.2529 3.78918 12.3036C3.66586 12.3544 3.52413 12.3268 3.4289 12.2334L1.4289 10.2334C1.30104 10.1016 1.30104 9.89197 1.4289 9.7601L3.4289 7.7601C3.525 7.66589 3.66832 7.63872 3.79224 7.6912C3.91615 7.74368 3.99636 7.86553 3.99557 8.0001V9.33343Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
