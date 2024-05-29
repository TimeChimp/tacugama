import { DEFAULT_ICON_SIZE } from '../../../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const ArrowSquareOut = ({ title = 'ArrowSquareOut', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'currentColor'}
        d="M14.25 6.5a.75.75 0 1 1-1.5 0V4.312l-3.72 3.72a.751.751 0 1 1-1.062-1.063l3.72-3.719H9.5a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75v4ZM11.5 8a.75.75 0 0 0-.75.75v4h-7.5v-7.5h4a.75.75 0 0 0 0-1.5H3A1.25 1.25 0 0 0 1.75 5v8A1.25 1.25 0 0 0 3 14.25h8A1.25 1.25 0 0 0 12.25 13V8.75A.75.75 0 0 0 11.5 8Z"
      />
    </svg>
  </Icon>
);
