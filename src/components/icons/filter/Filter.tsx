import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const FilterIcon = ({ title = 'Filter', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.66667 9.22C6.66695 8.86464 6.52536 8.52386 6.27333 8.27333L2.39333 4.39333C2.14131 4.1428 1.99972 3.80203 2 3.44667V2.66667C2 2.29848 2.29848 2 2.66667 2H13.3333C13.7015 2 14 2.29848 14 2.66667V3.44667C14.0003 3.80203 13.8587 4.1428 13.6067 4.39333L9.72667 8.27333C9.47464 8.52386 9.33305 8.86464 9.33333 9.22V11.6667C9.33333 12.0863 9.13574 12.4815 8.8 12.7333L7.2 13.9333C7.09899 14.0091 6.96386 14.0213 6.85093 13.9648C6.738 13.9083 6.66667 13.7929 6.66667 13.6667V9.22Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
