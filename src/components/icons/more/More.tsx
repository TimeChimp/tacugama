import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const MoreIcon = ({ title = 'More', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.66699 4.00008C6.66699 3.2637 7.26395 2.66675 8.00033 2.66675C8.73671 2.66675 9.33366 3.2637 9.33366 4.00008C9.33366 4.73646 8.73671 5.33341 8.00033 5.33341C7.26395 5.33341 6.66699 4.73646 6.66699 4.00008ZM8.00033 6.66675C7.26395 6.66675 6.66699 7.2637 6.66699 8.00008C6.66699 8.73646 7.26395 9.33341 8.00033 9.33341C8.73671 9.33341 9.33366 8.73646 9.33366 8.00008C9.33366 7.2637 8.73671 6.66675 8.00033 6.66675ZM6.66699 12.0001C6.66699 11.2637 7.26395 10.6667 8.00033 10.6667C8.73671 10.6667 9.33366 11.2637 9.33366 12.0001C9.33366 12.7365 8.73671 13.3334 8.00033 13.3334C7.26395 13.3334 6.66699 12.7365 6.66699 12.0001Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
