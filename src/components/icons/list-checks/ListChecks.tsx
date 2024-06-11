import { DEFAULT_ICON_SIZE } from '../../../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const ListChecks = ({ title = 'ListChecks', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'currentColor'}
        d="M21 12a.75.75 0 0 1-.75.75H12a.75.75 0 0 1 0-1.5h8.25A.75.75 0 0 1 21 12Zm-9-5.25h8.25a.75.75 0 0 0 0-1.5H12a.75.75 0 0 0 0 1.5Zm8.25 10.5H12a.75.75 0 0 0 0 1.5h8.25a.75.75 0 0 0 0-1.5ZM7.72 3.97 5.25 6.44l-.97-.97a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06Zm0 6-2.47 2.47-.97-.97a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06Zm0 6-2.47 2.47-.97-.97a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06Z"
      />
    </svg>
  </Icon>
);
