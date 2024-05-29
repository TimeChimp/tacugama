import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const CopyIcon = ({ title = 'Copy', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6003 10.4002V3.20003C11.6003 2.53727 11.063 2 10.4002 2H3.20003C2.53727 2 2 2.53727 2 3.20003V10.4002C2 11.063 2.53727 11.6003 3.20003 11.6003H10.4002C11.063 11.6003 11.6003 11.063 11.6003 10.4002ZM3.20018 3.20018H10.4004V10.4004H3.20018V3.20018ZM12.8006 11.6001V4.3999C13.4634 4.3999 14.0007 4.93718 14.0007 5.59994V11.6001C14.0007 12.9256 12.9261 14.0002 11.6006 14.0002H5.60042C4.93766 14.0002 4.40039 13.4629 4.40039 12.8001H11.6006C12.2633 12.8001 12.8006 12.2629 12.8006 11.6001Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
