import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const DownloadIcon = ({ title = 'Download', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99967 10.6677C7.91128 10.6677 7.82683 10.6311 7.76634 10.5667L3.90634 6.70667C3.84324 6.64408 3.80774 6.55888 3.80774 6.47C3.80774 6.38112 3.84324 6.29592 3.90634 6.23333L4.03967 6.1C4.10239 6.03489 4.18928 5.99869 4.27967 6H5.99967V2.33333C5.99967 2.14924 6.14891 2 6.33301 2H9.66634C9.85044 2 9.99967 2.14924 9.99967 2.33333V6H11.7197C11.8101 5.99869 11.897 6.03489 11.9597 6.1L12.093 6.23333C12.1561 6.29592 12.1916 6.38112 12.1916 6.47C12.1916 6.55888 12.1561 6.64408 12.093 6.70667L8.23301 10.5667C8.17252 10.6311 8.08807 10.6677 7.99967 10.6677ZM12.6663 13V12.3333C12.6663 12.1492 12.5171 12 12.333 12H3.66634C3.48225 12 3.33301 12.1492 3.33301 12.3333V13C3.33301 13.1841 3.48225 13.3333 3.66634 13.3333H12.333C12.5171 13.3333 12.6663 13.1841 12.6663 13Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
