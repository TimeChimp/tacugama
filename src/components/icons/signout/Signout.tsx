import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const SignoutIcon = ({ title = 'Signout', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33333 12.6667H7C7.18409 12.6667 7.33333 12.8159 7.33333 13V13.6667C7.33333 13.8508 7.18409 14 7 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2H7C7.18409 2 7.33333 2.14924 7.33333 2.33333V3C7.33333 3.18409 7.18409 3.33333 7 3.33333H3.33333V12.6667ZM10.4267 4.1L13.8533 7.52C13.9459 7.61448 13.9985 7.74106 14 7.87333V8.12667C13.9999 8.25923 13.9471 8.38632 13.8533 8.48L10.4267 11.9C10.3641 11.9631 10.2789 11.9986 10.19 11.9986C10.1011 11.9986 10.0159 11.9631 9.95333 11.9L9.48 11.4333C9.4169 11.3707 9.3814 11.2855 9.3814 11.1967C9.3814 11.1078 9.4169 11.0226 9.48 10.96L11.78 8.66667H5C4.8159 8.66667 4.66667 8.51743 4.66667 8.33333V7.66667C4.66667 7.48257 4.8159 7.33333 5 7.33333H11.78L9.48 5.04C9.41729 4.97856 9.38195 4.89446 9.38195 4.80667C9.38195 4.71887 9.41729 4.63478 9.48 4.57333L9.95333 4.1C10.0159 4.0369 10.1011 4.0014 10.19 4.0014C10.2789 4.0014 10.3641 4.0369 10.4267 4.1Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
