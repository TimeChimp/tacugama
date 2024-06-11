import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const EditIcon = ({ title = 'Edit', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2679 2.29282L13.7069 2.73193C13.8941 2.91891 13.9994 3.17258 13.9996 3.43718V3.94283C14.0029 4.21202 13.8974 4.47115 13.7069 4.66138L12.4764 5.87227C12.414 5.93524 12.329 5.97067 12.2403 5.97067C12.1516 5.97067 12.0666 5.93524 12.0042 5.87227L10.1351 3.97609C10.0083 3.84674 10.0083 3.63972 10.1351 3.51036L11.339 2.29282C11.5292 2.10231 11.7882 1.99674 12.0574 2.00008H12.5629C12.8274 2.00031 13.081 2.10561 13.2679 2.29282ZM11.213 7.12308C11.3397 6.99372 11.3397 6.7867 11.213 6.65735L9.31067 4.78113C9.24822 4.71816 9.16322 4.68273 9.07454 4.68273C8.98587 4.68273 8.90087 4.71816 8.83842 4.78113L3.47072 10.1503C3.34095 10.279 3.23906 10.433 3.17141 10.6027L2.02736 13.4902C1.96256 13.6401 2.0161 13.8149 2.15374 13.9027C2.24801 13.9969 2.38934 14.0257 2.51292 13.9759L5.39963 12.805C5.56935 12.7373 5.72332 12.6354 5.85193 12.5056L11.213 7.12308Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
