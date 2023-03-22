import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const StopIcon = ({ title = 'Stop', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6667 12H5.33333C4.59695 12 4 11.403 4 10.6667V5.33333C4 4.59695 4.59695 4 5.33333 4H10.6667C11.403 4 12 4.59695 12 5.33333V10.6667C12 11.403 11.403 12 10.6667 12Z" fill={color || 'currentColor'}/>
    </svg>
  </Icon>
);
