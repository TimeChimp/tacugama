import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const PlayIcon = ({ title = 'Play', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.0003 7.9067V8.09336C11.9998 8.27107 11.9062 8.43551 11.7537 8.5267L5.78699 12C5.42699 12.2134 5.24033 12.2134 5.08033 12.12L4.91366 12.0267C4.76512 11.938 4.67211 11.7796 4.66699 11.6067V4.39336C4.66753 4.21566 4.76113 4.05122 4.91366 3.96003L5.08033 3.8667C5.24033 3.77336 5.42699 3.77336 5.89366 4.0467L11.7537 7.47336C11.9062 7.56456 11.9998 7.72899 12.0003 7.9067Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
