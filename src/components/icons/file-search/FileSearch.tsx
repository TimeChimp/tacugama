import { DEFAULT_ICON_SIZE } from '../../../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const FileSearch = ({ title = 'FileSearch', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'currentColor'}
        d="m20.03 7.72-5.25-5.25a.75.75 0 0 0-.53-.22h-9a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-12a.75.75 0 0 0-.22-.53ZM15 4.81l2.69 2.69H15V4.81Zm3.75 15.44H5.25V3.75h8.25v4.5a.75.75 0 0 0 .75.75h4.5v11.25Zm-4.27-4.58a3.38 3.38 0 1 0-1.06 1.06l1.05 1.05a.75.75 0 1 0 1.06-1.06l-1.05-1.05Zm-4.73-1.795a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"
      />
    </svg>
  </Icon>
);
