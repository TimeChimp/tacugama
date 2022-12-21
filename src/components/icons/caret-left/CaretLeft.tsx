import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const CaretLeftIcon = ({ title = 'CaretLeft', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.44028 4.13797C9.53414 4.04967 9.66189 4 9.79517 4C9.92845 4 10.0562 4.04967 10.1501 4.13797L10.35 4.32454C10.4476 4.4123 10.5019 4.53389 10.4999 4.66037L10.4999 11.3396C10.5019 11.4661 10.4476 11.5877 10.35 11.6755L10.1501 11.862C10.0562 11.9503 9.92845 12 9.79517 12C9.66189 12 9.53414 11.9503 9.44028 11.862L5.65147 8.3265C5.55482 8.24186 5.5 8.12368 5.5 8C5.5 7.87632 5.55482 7.75814 5.65147 7.6735L9.44028 4.13797Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
