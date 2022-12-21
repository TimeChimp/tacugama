import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';

import { Icon, SVGProps } from '../../icon';

export const CaretUpIcon = ({ title = 'CaretUp', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.13797 9.44028C4.04967 9.53414 4 9.66189 4 9.79517C4 9.92845 4.04967 10.0562 4.13797 10.1501L4.32454 10.35C4.4123 10.4476 4.53389 10.5019 4.66037 10.4999H11.3396C11.4661 10.5019 11.5877 10.4476 11.6755 10.35L11.862 10.1501C11.9503 10.0562 12 9.92845 12 9.79517C12 9.66189 11.9503 9.53414 11.862 9.44028L8.3265 5.65147C8.24186 5.55482 8.12368 5.5 8 5.5C7.87632 5.5 7.75814 5.55482 7.6735 5.65147L4.13797 9.44028Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
