import { DEFAULT_ICON_SIZE } from '../../../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const AlignLeft = ({ title = 'AlignLeft', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'currentColor'}
        d="M4.5 3.75v16.5a.75.75 0 1 1-1.5 0V3.75a.75.75 0 0 1 1.5 0Zm1.5 6V6a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 18 6v3.75a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 9.75Zm1.5 0h9V6h-9v3.75Zm14.25 4.5V18a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 18v-3.75a1.5 1.5 0 0 1 1.5-1.5h12.75a1.5 1.5 0 0 1 1.5 1.5ZM20.25 18v-3.75H7.5V18h12.75Z"
      />
    </svg>
  </Icon>
);
