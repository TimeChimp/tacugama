import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const RadioSliderIcon = ({ title = 'Radio', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="8.5" fill="white" stroke={color || 'currentColor'} />
      <circle cx="9" cy="9" r="5" fill={color || 'currentColor'} />
    </svg>
  </Icon>
);
