import { DEFAULT_ICON_SIZE } from '../../../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const Car = ({ title = 'Car', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'currentColor'}
        d="M22.5 10.5h-1.012l-2.605-5.86a1.5 1.5 0 0 0-1.37-.89H6.486a1.5 1.5 0 0 0-1.37.89L2.513 10.5H1.5a.75.75 0 1 0 0 1.5h.75v7.5a1.5 1.5 0 0 0 1.5 1.5H6a1.5 1.5 0 0 0 1.5-1.5V18h9v1.5A1.5 1.5 0 0 0 18 21h2.25a1.5 1.5 0 0 0 1.5-1.5V12h.75a.75.75 0 1 0 0-1.5ZM6.488 5.25h11.024l2.334 5.25H4.154l2.333-5.25ZM6 19.5H3.75V18H6v1.5Zm12 0V18h2.25v1.5H18Zm2.25-3H3.75V12h16.5v4.5Zm-15-2.25A.75.75 0 0 1 6 13.5h1.5a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm10.5 0a.75.75 0 0 1 .75-.75H18a.75.75 0 1 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z"
      />
    </svg>
  </Icon>
);
