import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const ViewIcon = ({ title = 'View', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.33333 2.66667V13.3333C7.33333 13.7015 7.03486 14 6.66667 14H2.66667C2.29848 14 2 13.7015 2 13.3333V2.66667C2 2.29848 2.29848 2 2.66667 2H6.66667C7.03486 2 7.33333 2.29848 7.33333 2.66667ZM9.33333 6H13.3333C13.7015 6 14 5.70152 14 5.33333V2.66667C14 2.29848 13.7015 2 13.3333 2H9.33333C8.96514 2 8.66667 2.29848 8.66667 2.66667V5.33333C8.66667 5.70152 8.96514 6 9.33333 6ZM13.3333 14H9.33333C8.96514 14 8.66667 13.7015 8.66667 13.3333V8C8.66667 7.63181 8.96514 7.33333 9.33333 7.33333H13.3333C13.7015 7.33333 14 7.63181 14 8V13.3333C14 13.7015 13.7015 14 13.3333 14Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
