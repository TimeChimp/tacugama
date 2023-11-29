import { DEFAULT_ICON_SIZE } from '../../../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const Shield = ({ title = 'Shield', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'currentColor'}
        d="M19.5 3.75h-15A1.5 1.5 0 0 0 3 5.25v5.51c0 8.4 7.108 11.188 8.531 11.661.304.104.634.104.938 0C13.894 21.948 21 19.161 21 10.76V5.25a1.5 1.5 0 0 0-1.5-1.5Zm0 7.012c0 7.351-6.22 9.808-7.5 10.235-1.268-.423-7.5-2.877-7.5-10.235V5.25h15v5.512Z"
      />
    </svg>
  </Icon>
);
