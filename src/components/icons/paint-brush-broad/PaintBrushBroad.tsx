import { DEFAULT_ICON_SIZE } from '../../../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const PaintBrushBroad = ({ title = 'PaintBrushBroad', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'currentColor'}
        d="M20.25 2.25H6.75A3.75 3.75 0 0 0 3 6v6.75A2.25 2.25 0 0 0 5.25 15h4.5l-.74 4.375A.789.789 0 0 0 9 19.5a3 3 0 1 0 6 0 .789.789 0 0 0-.01-.125L14.25 15h4.5A2.25 2.25 0 0 0 21 12.75V3a.75.75 0 0 0-.75-.75Zm-13.5 1.5h9.75V7.5a.75.75 0 1 0 1.5 0V3.75h1.5v6h-15V6a2.25 2.25 0 0 1 2.25-2.25Zm12 9.75h-4.5a1.5 1.5 0 0 0-1.485 1.712v.019l.735 4.325a1.5 1.5 0 1 1-3 0l.731-4.325v-.02A1.502 1.502 0 0 0 9.75 13.5h-4.5a.75.75 0 0 1-.75-.75v-1.5h15v1.5a.75.75 0 0 1-.75.75Z"
      />
    </svg>
  </Icon>
);
