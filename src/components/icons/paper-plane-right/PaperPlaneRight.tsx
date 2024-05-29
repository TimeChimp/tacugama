import { DEFAULT_ICON_SIZE } from '../../../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const PaperPlaneRight = ({ title = 'PaperPlaneRight', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'currentColor'}
        d="m20.988 10.688-15.75-8.99a1.5 1.5 0 0 0-2.151 1.8l2.906 8.482a.04.04 0 0 0 0 .01V12l-2.906 8.5a1.5 1.5 0 0 0 2.155 1.803l15.742-9.005a1.5 1.5 0 0 0 .004-2.614v.004ZM4.5 21v-.008l2.825-8.242h5.425a.75.75 0 1 0 0-1.5H7.333L4.505 3.011l-.005-.01 15.75 8.983L4.5 21Z"
      />
    </svg>
  </Icon>
);
