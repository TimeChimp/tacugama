import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const RadioLine = ({ title = 'RadioLine', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 18 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="70" width="70" height="4" transform="rotate(-90 7 70)" fill="#CFD6E4" />
      <circle cx="9" cy="35" r="8.5" fill="white" stroke={color || 'currentColor'} />
      <circle cx="9" cy="35" r="5" fill={color || 'currentColor'} />
    </svg>
  </Icon>
);
