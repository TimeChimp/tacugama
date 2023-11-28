import { DEFAULT_ICON_SIZE } from '../../../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const Buildings = ({ title = 'Buildings', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'currentColor'}
        d="M22.5 19.5H21V9a1.5 1.5 0 0 0-1.5-1.5h-6V3a1.5 1.5 0 0 0-2.332-1.249l-7.5 4.999A1.5 1.5 0 0 0 3 8v11.5H1.5a.75.75 0 1 0 0 1.5h21a.75.75 0 1 0 0-1.5ZM19.5 9v10.5h-6V9h6Zm-15-1L12 3v16.5H4.5V8Zm6 2.5V12A.75.75 0 1 1 9 12v-1.5a.75.75 0 1 1 1.5 0Zm-3 0V12A.75.75 0 1 1 6 12v-1.5a.75.75 0 1 1 1.5 0Zm0 5.25v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 1 1 1.5 0Zm3 0v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 1 1 1.5 0Z"
      />
    </svg>
  </Icon>
);
