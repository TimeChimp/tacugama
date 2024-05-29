import { DEFAULT_ICON_SIZE } from '../../../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const FileText = ({ title = 'FileText', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'currentColor'}
        d="m20.03 7.72-5.25-5.25a.75.75 0 0 0-.53-.22h-9a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-12a.75.75 0 0 0-.22-.53ZM15 4.81l2.69 2.69H15V4.81Zm3.75 15.44H5.25V3.75h8.25v4.5a.75.75 0 0 0 .75.75h4.5v11.25Zm-3-7.5a.75.75 0 0 1-.75.75H9A.75.75 0 1 1 9 12h6a.75.75 0 0 1 .75.75Zm0 3a.75.75 0 0 1-.75.75H9A.75.75 0 1 1 9 15h6a.75.75 0 0 1 .75.75Z"
      />
    </svg>
  </Icon>
);
