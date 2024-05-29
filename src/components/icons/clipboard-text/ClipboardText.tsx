import { DEFAULT_ICON_SIZE } from '../../../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const ClipboardText = ({ title = 'ClipboardText', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'currentColor'}
        d="M15.75 14.25A.75.75 0 0 1 15 15H9a.75.75 0 1 1 0-1.5h6a.75.75 0 0 1 .75.75ZM15 10.5H9A.75.75 0 1 0 9 12h6a.75.75 0 1 0 0-1.5Zm5.25-6v15.75a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V4.5A1.5 1.5 0 0 1 5.25 3h3.4a4.492 4.492 0 0 1 6.7 0h3.4a1.5 1.5 0 0 1 1.5 1.5ZM9 6h6a3 3 0 0 0-6 0Zm9.75-1.5h-2.508c.17.482.258.99.258 1.5v.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V6c0-.51.087-1.018.258-1.5H5.25v15.75h13.5V4.5Z"
      />
    </svg>
  </Icon>
);
