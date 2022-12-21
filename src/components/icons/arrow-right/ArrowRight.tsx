import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const ArrowRightIcon = ({ title = 'ArrowRight', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.33105 8.32874V7.66208C1.33105 7.47798 1.48034 7.32874 1.66449 7.32874H12.001V5.99541C12.0029 5.86205 12.0841 5.74265 12.2075 5.69186C12.3308 5.64108 12.4726 5.6687 12.5679 5.76208L14.5685 7.76208C14.6964 7.89395 14.6964 8.10353 14.5685 8.23541L12.5679 10.2354C12.4717 10.3296 12.3284 10.3568 12.2044 10.3043C12.0804 10.2518 12.0002 10.13 12.001 9.99541V8.66208H1.66449C1.48034 8.66208 1.33105 8.51284 1.33105 8.32874Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
