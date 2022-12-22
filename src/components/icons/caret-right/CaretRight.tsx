import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const CaretRightIcon = ({ title = 'CaretRight', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.55972 4.13797C6.46586 4.04967 6.33811 4 6.20483 4C6.07155 4 5.9438 4.04967 5.84994 4.13797L5.65 4.32454C5.55238 4.4123 5.49809 4.53389 5.50005 4.66037L5.50005 11.3396C5.49809 11.4661 5.55238 11.5877 5.65 11.6755L5.84994 11.862C5.9438 11.9503 6.07155 12 6.20483 12C6.33811 12 6.46586 11.9503 6.55972 11.862L10.3485 8.3265C10.4452 8.24186 10.5 8.12368 10.5 8C10.5 7.87632 10.4452 7.75814 10.3485 7.6735L6.55972 4.13797Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
