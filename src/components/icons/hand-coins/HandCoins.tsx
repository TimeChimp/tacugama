import { DEFAULT_ICON_SIZE } from '../../../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const HandCoins = ({ title = 'HandCoins', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'currentColor'}
        d="M21.593 13.224a2.29 2.29 0 0 0-1.99-.396l-3.923.902a2.625 2.625 0 0 0-2.555-3.23H8.432a2.982 2.982 0 0 0-2.122.878L4.19 13.5H1.5A1.5 1.5 0 0 0 0 15v3.75a1.5 1.5 0 0 0 1.5 1.5h9.75a.744.744 0 0 0 .182-.023l6-1.5a.653.653 0 0 0 .111-.037l3.645-1.55.04-.02a2.306 2.306 0 0 0 .37-3.896h-.005ZM1.5 15h2.25v3.75H1.5V15Zm19.072.77-3.563 1.517-5.853 1.463H5.25v-4.19l2.122-2.12a1.487 1.487 0 0 1 1.06-.44h4.693a1.125 1.125 0 1 1 0 2.25H10.5a.75.75 0 1 0 0 1.5h3a.782.782 0 0 0 .168-.019l6.281-1.444.03-.008a.806.806 0 0 1 .59 1.49h.003ZM15.375 9c.185 0 .37-.015.553-.045a3.376 3.376 0 1 0 2.646-4.406A3.376 3.376 0 1 0 15.375 9ZM21 7.875a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0ZM15.375 3.75a1.875 1.875 0 0 1 1.805 1.37 3.376 3.376 0 0 0-1.407 2.337 1.875 1.875 0 1 1-.398-3.707Z"
      />
    </svg>
  </Icon>
);
